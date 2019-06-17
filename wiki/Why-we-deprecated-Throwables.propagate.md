# 为什么我们弃用 `Throwables.propagate`

当我们弃用一个方法时，替换方法通常是一个具有新名称的等效方法，或者至少它通常仍然是一行代码。但对于`Throwables.propagate`则不是这样。它的字面替换是:

    throwIfUnchecked(e);
    throw new RuntimeException(e);

如果很少使用`propagate`，那么内联是可以的，但事实并非如此。例如，在谷歌内部，它有超过10,000个调用者。

即使这个方法只是稍微有用一点，但它的使用频率足以使其相加。那么我们为什么要反对它呢?我们发现，它在实际中的平均效用实际上略为*negative 负* -- 而且它的使用频率足以使其相加。

## Negatives 消除

### Can be replaced with a one-liner

我们发现75%的`propagate`调用传递了一个已知为已检查异常的参数...

    try {
      return something(...);
    } catch (IOException e) {
      throw Throwables.propagate(e);
    }

...相当于...

    try {
      return something(...);
    } catch (IOException e) {
      throw new RuntimeException(e);
    }

...或已知为未检查异常的参数...

    try {
      return something(...);
    } catch (CancellationException e) {
      throw Throwables.propagate(e);
    }

...相当于...

    try {
      return something(...);
    } catch (CancellationException e) {
      throw e;
    }

...在这个特殊的例子中，我们可以进一步简化。(参见下一节。)

这并不是世界末日，但这意味着大多数调用都没有积极的价值。

另外，剩下的25%中的许多也可以通过`throw new RuntimeException(e)`来解决。缺点:如果`e`是`RuntimeException`，调用将不必要地结束它。但是，如果可以将已检查的异常包装为通用的`RuntimeException`，那么对未检查的异常也可以这样做。(不需要换行的主要情况是，如果有许多嵌套的代码层捕获`Exception`并`propagate`结果，那么换行就是不可取的。)所以剩下的25%的用户也获得了最小的价值。

上面的第二个例子暗示了这个值是如何变成负数的:

### 掩盖了空操作 `try`-`catch`

一旦我们将代码简化为...

    try {
      return something(...);
    } catch (CancellationException e) {
      throw e;
    }

...很明显，根本不需要`try`-`catch`给我们的...

    return something(...);

### Outsmarts reachability detector Outmarts可达性检测器

我们推进使用 `propagate` 为...

    throw Throwables.propagate(e);

这样，编译器就知道在`propagate`语句之后永远不会继续执行。很多人这样做，但很多人没有。我们找到了这样的代码...

    Throwables.propagate(e);
    return new MyType<Something>(
        ImmutableList.<Foo>of(),
        ImmutableList.<Bar>of(),
        Something.empty()); // unreachable

这个问题可以通过使用`throw`来解决，但是这个问题首先是因为`propagate`。

(`propagate`和可达性检测器的另一个问题是：有时用户需要向变量添加虚拟初始值。这同样可以通过使用`throw`来修复，但用户不太可能返回并删除伪初始值。)

### Obscures in general 一般遮蔽物

在内部迁移期间，我们遇到了这样的代码。我和审阅者都误解了它，认为我们的自动重构做了错误的事情。

      try {
        return callable.call();
      } catch (AssertionError e) {
        int delay = retryStrategy.getDelayMillis(tries);
        if (delay >= 0) {
          try {
            Thread.sleep(delay);
          } catch (InterruptedException ie) {
            throw Throwables.propagate(e);
          }
        }
      }

重构将`propagate`调用更改为`throw e`。对我们来说，这看起来像一个bug：`catch`块捕获`InterruptedException`是一个选中的异常，因此我们应该包装它。但我们错了：`propagate`使用了`e`，这是另一个`catch`块的参数，而不是`ie`，`InterruptedException`。

像往常一样，对于混淆的代码，我们可以将责任归咎于多个原因——包括*us*，因为4年后代码对我来说很明显（尽管这可能是因为我简化了上面的代码）。但是，当我们写`Throwables.propagate(e)`替代`e`几千次时，这种混乱是不可避免的。

### `propagate` is magic

We saw code like this:

    try {
      return something(...);
    } catch (SomeException e) {
      Throwables.propagate(e);
      log.log(SEVERE, "error", e);
      return default;
    }

Someone -- and some reviewer -- thought that `propagate` did something other than throw. Of course those people are wrong, and every API permits misuse. But it's easy enough to see the reasoning here: Why would Guava have a method that's roughly equivalent to the `throw` keyword? And if it did, why would it be named "propagate" instead of something with "throw" in the name? (We could help here by renaming the method, but that causes about as much churn as deleting it.)

### `propagate` is magic, part 2

We saw code like this:

    private Something foo() throws IOException {
      try {
        return something(...);
      } catch (IOException e) {
        log.log(SEVERE, "error", e);
        Throwables.propagate(e);
      }
    }

It seems pretty likely here that the author expected for `propagate(e)` to rethrow `IOException e` directly. Maybe that person assumed that `propagate` looked like this:

    <X extends Throwable> void propagate(X x) throws X;

Or maybe that person was just new to Java and didn't think about whether this was even possible.

Or maybe the person really meant the code as it is and just forgot to remove `throws IOException`. Or maybe not, but the reviewer assumed that that's what happened (and figured it wasn't worth correcting). We don't know because `propagate` obscures the author's intention.

### Encourages unwrapping exceptions from other threads

One common use of `Throwables.propagate` was to unwrap `ExecutionException`:

    try {
      return cache.get(value);
    } catch (ExecutionException e) {
      throw Throwables.propagate(e.getCause());
    }

This can produce confusing stack traces. Suppose that one request triggers a cache load, and another request reuses it. If the cache load fails with an unchecked exception, the second request fails with a stack trace from the first.

Of course this is not specific to `propagate`, but `propagate` makes it easy. We encourage such users to migrate to [`Futures.getUnchecked`](http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Futures.html#getUnchecked-java.util.concurrent.Future-) and [`LoadingCache.getUnchecked`](http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/LoadingCache.html#getUnchecked-K-), which are designed for exactly this purpose.

(We've found that `propagate` callers often demonstrate a need for higher-level libraries like this. Another example is [`Uninterruptibles`](http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Uninterruptibles.html).)

### multicatch is now available, and it's safer

Sometimes people used `propagate` to avoid code duplication. They'd change this...

    public void run() {
      try {
        delegate.run();
      } catch (RuntimeException e) {
        failures.increment();
        throw e;
      } catch (Error e) {
        failures.increment();
        throw e;
      }
    }

...to this...

    public void run() {
      try {
        delegate.run();
      } catch (Throwable e) {
        failures.increment();
        throw Throwables.propagate(e);
      }
    }

Nowdays, they can use multicatch and plain `throw`:

    } catch (RuntimeException | Error e) {

This has the advantage that you can't [accidentally catch other kinds of exceptions](https://github.com/google/guava/commit/287bc67cac97052b13cbbc0358aed8054b14bd4a), as you could with `catch (Throwable e)`+`propagate`.

### Confusion about the return type

Since `propagate` is declared to return `RuntimeException`, a few people assumed that it did. We found code like this...

    logAndRethrow(Throwables.propagate(e))

...which will never call `logAndRethrow`.

More commonly (but still in only ~1% of callers), we saw people define helper methods that called `Throwables.propagate` and, like it, declared a return value of `RuntimeException`. This pattern was questionable enough with `Throwables.propagate` itself: Even though the method is well known, at least a few users were confused, as noted above in this section. It's even more dangerous with the less known, undocumented, poorly named helper methods we saw, like `logAndReturn`.

### Encourages "not caring about failures"

This point is both squishy and controversial. But it became clear that `propagate` had become something that many people do without thinking about it. That works out OK for many users, but it's not something we like to encourage with a library as widely used as Guava.

## What to do

- You can inline the method, of course.
- In many cases, you'll be able to use `throw e` or `throw new RuntimeException(e)` with no change in behavior. This sometimes lets you remove other code.
- In some other cases, you can use `throw new RuntimeException(e)` with an inconsequential change in behavior.
- In still other cases, you may want to look at the higher-level APIs mentioned above.
- You can create your own copy of the method and migrate to that.