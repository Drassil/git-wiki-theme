# Throwables

<!-- TODO: rewrite with more examples -->

Guava的[`Throwables`]实用程序可以经常简化处理异常。
## Propagation 传播

有时候，当您捕获异常时，您希望将其重新抛出到下一个try/catch块。这通常是`RuntimeException` 或 `Error`实例的情况，
这些实例不需要try/catch块，但是当您不需要try/catch块时，它们可以被try/catch块捕获。

Guava提供了几个实用程序来简化传播异常。例如：

```java
try {
  someMethodThatCouldThrowAnything();
} catch (IKnowWhatToDoWithThisException e) {
  handle(e);
} catch (Throwable t) {
  Throwables.propagateIfInstanceOf(t, IOException.class);
  Throwables.propagateIfInstanceOf(t, SQLException.class);
  throw Throwables.propagate(t);
}
```

这些方法中的每一个都会自己抛出异常，但是抛出结果（例如，`throw Throwables.propagate(t)`）对于向编译器证明将抛出异常非常有用。
以下是Guava提供的传播方法的快速总结：

Signature                                                                      | Explanation
:----------------------------------------------------------------------------- | :----------
[`RuntimeException propagate(Throwable)`]                                      | 如果是`RuntimeException` 或 `Error`，则按原样传播可抛出对象，或者将其封装在`RuntimeException`中，否则将抛出该对象。保证抛出。返回类型是一个`RuntimeException`，因此可以像上面那样编写`throw Throwables.propagate(t)`， Java将意识到这一行肯定会抛出异常。
[`void propagateIfInstanceOf(Throwable, Class<X extends Exception>) throws X`] | Propagates the throwable as-is, if and only if it is an instance of `X`.
[`void propagateIfPossible(Throwable)`]                                        | Throws `throwable` as-is only if it is a `RuntimeException` or an `Error`.
[`void propagateIfPossible(Throwable, Class<X extends Throwable>) throws X`]   | Throws `throwable` as-is only if it is a `RuntimeException`, an `Error`, or an `X`.

### Uses for `Throwables.propagate`

#### Emulating Java 7 multi-catch and rethrow

通常，如果想让异常在堆栈中传播，根本不需要`catch`块。由于您无法从异常中恢复，您可能不应该记录它或采取其他操作。
您可能想要执行一些清理，但通常无论操作是否成功，都需要执行清理，因此最终会出现一个`finally`块。然而，带有重新
抛出的`catch`块有时是有用的:可能您必须在传播异常之前更新失败计数，或者可能您只想有条件地传播异常，

当只处理一种异常时，捕获和重新抛出异常非常简单。当处理多种异常时，情况就变得混乱了:

```java
@Override public void run() {
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
```

Java 7 solves this problem with [multicatch]:

```java
} catch (RuntimeException | Error e) {
  failures.increment();
  throw e;
}
```

Non-Java 7 users are stuck. They'd like to write code like the following, but
the compiler won't permit them to throw a variable of type `Throwable`:

```java
} catch (Throwable t) {
  failures.increment();
  throw t;
}
```

解决方案是将`throw t`替换为`throw Throwables.propagate(t)`。在这种有限的情况下，`Throwables.propagate`的行为与原始代码相同。
不过，用`Throwables.propagate`编写代码很容易,但有其他隐藏的行为。特别需要注意的是，上面的模式只适用于`RuntimeException` 和 `Error`。
如果`catch`块可能捕获已检查的异常，您还需要调用`propagateIfInstanceOf`来保存行为，比如`Throwables.propagate`无法直接传播已检查的异常。

总的来说，这种`propagate`的使用是一般的。在Java 7中没有必要这样做。在其他版本中，它节省了少量的重复，
但是一个简单的提取方法重构也可以。此外，使用`propagate` [makes it easy to accidentally wrap checked exceptions]
(https://github.com/google/guava/commit/287bc67cac97052b13cbbc0358aed8054b14bd4a).

#### Unnecessary: Converting from "throws Throwable" to "throws Exception"

一些API，尤其是Java反射API和JUnit，声明了抛出`Throwable`的方法。与这些api交互可能会很痛苦，因为即使是最通用的api通常也只声明`throws Exception`。
`Throwables.propagate`被一些调用者使用，他们知道自己有一个非`Exception`、非`Error` 和`Throwable`。下面是一个声明`Callable`执行JUnit测试的例子:

```java
public Void call() throws Exception {
  try {
    FooTest.super.runTest();
  } catch (Throwable t) {
    Throwables.propagateIfPossible(t, Exception.class);
    Throwables.propagate(t);
  }

  return null;
}
```

There's no need for `propagate()` here, as the second line is equivalent to
`throw new RuntimeException(t)`. (Digression: This example also reminds me that
`propagateIfPossible` is potentially confusing, since it propagates not just
arguments of the given type but also `Errors` and `RuntimeExceptions`.)

This pattern (or similar variants like `throw new RuntimeException(t)`) shows up
~30 times in Google's codebase. (Search for `'propagateIfPossible[^;]*
Exception.class[)];'`.) A slight majority of them take the explicit `throw new
RuntimeException(t)` approach. It's possible that we would want a
`throwWrappingWeirdThrowable` method for `Throwable`-to-`Exception` conversions,
but given the two-line alternative, there's probably not much need unless we
were to also deprecate `propagateIfPossible`.

### Controversial uses for `Throwables.propagate`

#### Controversial: Converting checked exceptions to unchecked exceptions

In principle, unchecked exceptions indicate bugs, and checked exceptions
indicate problems outside your control. In practice, even the JDK sometimes
[gets](http://docs.oracle.com/javase/6/docs/api/java/lang/Object.html#clone%28%29)
[it](http://docs.oracle.com/javase/6/docs/api/java/lang/Integer.html#parseInt%28java.lang.String%29)
[wrong](http://docs.oracle.com/javase/6/docs/api/java/net/URI.html#URI%28java.lang.String%29)
(or at least, for some methods,
[no answer is right for everyone](http://docs.oracle.com/javase/6/docs/api/java/net/URI.html#create%28java.lang.String%29)).

As a result, callers occasionally have to translate between exception types:

```java
try {
  return Integer.parseInt(userInput);
} catch (NumberFormatException e) {
  throw new InvalidInputException(e);
}
```

```java
try {
  return publicInterfaceMethod.invoke();
} catch (IllegalAccessException e) {
  throw new AssertionError(e);
}
```

Sometimes, those callers use `Throwables.propagate`. What are the disadvantages?

The main one is that the meaning of the code is less obvious. What does `throw
Throwables.propagate(ioException)` do? What does `throw new
RuntimeException(ioException)` do? The two do the same thing, but the latter is
more straightforward. The former raises questions: "What does this do? It isn't
just wrapping in `RuntimeException`, is it? If it were, why would they write a
method wrapper?"

Part of the problem here, admittedly, is that "propagate" is a vague name. (Is
it
[a way of throwing undeclared exceptions](http://www.eishay.com/2011/11/throw-undeclared-checked-exception-in.html)?)
Perhaps "wrapIfChecked" would have worked better. Even if the method were called
that, though, there would be no advantage to calling it on a known checked
exception. There may even be additional downsides: Perhaps there's a more
suitable type than a plain `RuntimeException` for you to throw -- say,
`IllegalArgumentException`.

We sometimes also see `propagate` used when the exception only *might* be a
checked exception. The result is slightly smaller and slightly less
straightforward than the alternative:

```java
} catch (RuntimeException e) {
  throw e;
} catch (Exception e) {
  throw new RuntimeException(e);
}
```

```java
} catch (Exception e) {
  throw Throwables.propagate(e);
}
```

However, the elephant in the room here is the general practice of converting
checked exceptions to unchecked exceptions. It is unquestionably the right thing
in some cases, but more frequently it's used to avoid dealing with a legitimate
checked exception. This leads us to the debate over whether checked exceptions
are bad idea in general. I don't wish to go into all that here. Suffice it to
say that `Throwables.propagate` does not exist for the purpose of encouraging
Java users to ignore `IOException` and the like.

#### Controversial: Exception tunneling

But what about when you're implementing a method that isn't allowed to throw
exceptions? Sometimes you need to wrap your exception in an unchecked exception.
This is fine, but again, `propagate` is unnecessary for simple wrapping. In
fact, manual wrapping may be preferable: If you wrap _every_ exception (instead
of just checked exceptions), then you can unwrap every exception on the other
end, making for fewer special cases. Additionally, you may wish to use a custom
exception type for the wrapping.

#### Controversial: Rethrowing exceptions from other threads

```java
try {
  return future.get();
} catch (ExecutionException e) {
  throw Throwables.propagate(e.getCause());
}
```

There are multiple things to consider here:

1.  The cause may be a checked exception. See "Converting checked exceptions to
    unchecked exceptions" above. But what if the task is known not to throw a
    checked exception? (Maybe it's the result of a `Runnable`.) As discussed
    above, you can catch the exception and throw `AssertionError`; `propagate`
    has little more to offer. For `Future` in particular, also consider
    [`Futures.get`]. <!-- TODO: say something about its additional
    InterruptedException behavior -->
1.  The cause may be a non-`Exception`, non-`Error` `Throwable`. (Well, it's
    unlikely to actually be one, but the compiler would force you to consider
    the possibility if you tried to rethrow it directly.) See "Converting from
    `throws Throwable` to `throws Exception`" above.
1.  The cause may be an unchecked exception or error. If so, it will be rethrown
    directly. Unfortunately, its stack trace will reflect the thread in which
    the exception was originally created, not the thread in which it is
    currently propagating. It's typically best to have include both threads'
    stack traces available in the exception chain, as in the
    `ExecutionException` thrown by `get`. (This problem isn't really about
    `propagate`; it's about any code that rethrows an exception in a different
    thread.)

## Causal Chain

Guava makes it somewhat simpler to study the causal chain of an exception,
providing three useful methods whose signatures are self-explanatory:

*   [`Throwable getRootCause(Throwable)`]
*   [`List<Throwable> getCausalChain(Throwable)`]
*   [`String getStackTraceAsString(Throwable)`]

[`Throwables`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Throwables.html
[`RuntimeException propagate(Throwable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Throwables.html#propagate-java.lang.Throwable-
[`void propagateIfInstanceOf(Throwable, Class<X extends Exception>) throws X`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Throwables.html#propagateIfInstanceOf-java.lang.Throwable-java.lang.Class-
[`void propagateIfPossible(Throwable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Throwables.html#propagateIfPossible-java.lang.Throwable-
[`void propagateIfPossible(Throwable, Class<X extends Throwable>) throws X`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Throwables.html#propagateIfPossible-java.lang.Throwable-java.lang.Class-
[multicatch]: http://docs.oracle.com/javase/7/docs/technotes/guides/language/catch-multiple.html
[`Futures.get`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Futures.html#getUnchecked-java.util.concurrent.Future-
[`Throwable getRootCause(Throwable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Throwables.html#getRootCause-java.lang.Throwable-
[`List<Throwable> getCausalChain(Throwable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Throwables.html#getCausalChain-java.lang.Throwable-
[`String getStackTraceAsString(Throwable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Throwables.html#getStackTraceAsString-java.lang.Throwable-
