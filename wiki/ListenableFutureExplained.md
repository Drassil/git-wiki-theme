# ListenableFuture

并发(Concurrency)是一个困难的问题，但是通过使用强大而简单的抽象，它得到了显著的简化。
为了简化问题，Guava使用[`ListenableFuture`]扩展了JDK的`Future`接口。

**我们强烈建议在所有代码中始终使用 `ListenableFuture`而不是`Future` **, 原因:

*   大多数`Futures`方法都需要它。
*   这比稍后切换到`ListenableFuture`更容易。
*   实用程序方法的提供者不需要提供方法的`Future`和`ListenableFuture`变体。

## Interface 接口

传统的`Future`表示异步计算的结果:一个可能已经或尚未完成生成结果的计算。`Future`可以是正在进行的计算的句柄，是服务向我们提供结果的承诺。

`ListenableFuture`允许您注册回调函数(callbacks)，一旦计算完成，或者如果计算已经完成，则立即执行回调函数。
这个简单的添加使得有效地支持许多基本的`Future` 接口无法支持的操作成为可能。

`ListenableFuture` 添加的基本操作是[`addListener(Runnable,Executor)`]，它指定当这个`Future`表示的计算完成时，
指定的`Runnable`将在指定的`Executor`上运行。

## Adding Callbacks 增加回调函数

大多数用户将更喜欢使用[`Futures.addCallback(ListenableFuture<V>,FutureCallback<V>, Executor)`]，
或者[version][no-executor-add-callback]，默认使用`MoreExecutors.directExecutor()`，以便在回调快速且轻量级时使用。
[`FutureCallback<V>`]实现两种方法:

*   [`onSuccess(V)`], 如果将来成功，根据其结果执行的操作
*   [`onFailure(Throwable)`], 如果将来失败了，根据失败来执行的操作

## Creation

对应于启动异步计算的JDK [`ExecutorService.submit(Callable)`]方法，Guava提供了
[`ListeningExecutorService`]接口，它返回一个`ListenableFuture`，而`ExecutorService`将返回一个正常的`Future`。
要将`ExecutorService`转换为`ListeningExecutorService`，只需使用[`MoreExecutors.listeningDecorator(ExecutorService)`]。

```java
ListeningExecutorService service = MoreExecutors.listeningDecorator(Executors.newFixedThreadPool(10));
ListenableFuture<Explosion> explosion = service.submit(new Callable<Explosion>() {
  public Explosion call() {
    return pushBigRedButton();
  }
});
Futures.addCallback(explosion, new FutureCallback<Explosion>() {
  // we want this handler to run immediately after we push the big red button!
  public void onSuccess(Explosion explosion) {
    walkAwayFrom(explosion);
  }
  public void onFailure(Throwable thrown) {
    battleArchNemesis(); // escaped the explosion!
  }
});
```

另外，如果您正在从基于[`FutureTask`]的API转换，Guava提供了[`ListenableFutureTask.create(Callable<V>)`]
和[`ListenableFutureTask.create(Runnable, V)`]。与JDK不同，`ListenableFutureTask`不打算直接扩展。

如果您更喜欢设置future值的抽象，而不是实现计算值的方法，请考虑扩展[`AbstractFuture<V>`]或直接使用[`SettableFuture`] 。

如果您必须将另一个API提供的`Future`转换为`ListenableFuture`，那么您可能别无选择，只能使用重量级的
[`JdkFutureAdapters.listenInPoolThread(Future)`]将`Future`转换为`ListenableFuture`。
只要有可能，最好修改原始代码以返回一个`ListenableFuture`。

## Application 应用

使用`ListenableFuture`的最重要原因是，它可能具有复杂的异步操作链。

```java
ListenableFuture<RowKey> rowKeyFuture = indexService.lookUp(query);
AsyncFunction<RowKey, QueryResult> queryFunction =
  new AsyncFunction<RowKey, QueryResult>() {
    public ListenableFuture<QueryResult> apply(RowKey rowKey) {
      return dataService.read(rowKey);
    }
  };
ListenableFuture<QueryResult> queryFuture =
    Futures.transformAsync(rowKeyFuture, queryFunction, queryExecutor);
```

使用`ListenableFuture`可以有效地支持许多其他操作，而仅使用`Future`无法支持这些操作。
不同的执行器可以执行不同的操作，单个`ListenableFuture`可以有多个操作等待它。

当多个操作应该在另一个操作启动时立即开始时 -- "扇出 fan-out"  -- `ListenableFuture`就可以工作了:
它触发所有请求的回调。只需稍微多做一些工作，我们就可以“扇入 fan-in”，或者触发一个`ListenableFuture`，
以便在其他几个futures _都_ 完成后立即计算出来:参见[the implementation of `Futures.allAsList`]作为例子。

| Method | Description | See also |
|:-------|:------------|:---------|
| [`transformAsync(ListenableFuture<A>, AsyncFunction<A, B>, Executor)`]`*` | 返回一个新的`ListenableFuture`，其结果是将给定的`AsyncFunction`应用于给定的`ListenableFuture`的结果的产物。  | [`transformAsync(ListenableFuture<A>, AsyncFunction<A, B>)`] |
| [`transform(ListenableFuture<A>, Function<A, B>, Executor)`] |返回一个新的`ListenableFuture`，其结果是将给定的`Function`应用于给定的`ListenableFuture`的结果的产物。 | [`transform(ListenableFuture<A>, Function<A, B>)`] |
| [`allAsList(Iterable<ListenableFuture<V>>)`] |返回一个`ListenableFuture`，其值是按顺序包含每个输入futures值的列表。如果任何输入futures失败或被取消，则该future失败或被取消。 | [`allAsList(ListenableFuture<V>...)`] |
| [`successfulAsList(Iterable<ListenableFuture<V>>)`] | 返回一个`ListenableFuture`，其值是按顺序包含每个成功输入futures值的列表。与失败或取消的futures相对应的值将替换为`null`。 | [`successfulAsList(ListenableFuture<V>...)`] |

`*` [`AsyncFunction<A, B>`]提供了一个方法，即`ListenableFuture<B> apply(Ainput)`。它可以用于异步转换值。

```java
List<ListenableFuture<QueryResult>> queries;
// The queries go to all different data centers, but we want to wait until they're all done or failed.

ListenableFuture<List<QueryResult>> successfulQueries = Futures.successfulAsList(queries);

Futures.addCallback(successfulQueries, callbackOnSuccessfulQueries);
```

## Avoid nested Futures 避免嵌套Futures

在代码调用泛型接口并返回Future的情况下，可能会以嵌套的`Future`结束。例如:

```java
executorService.submit(new Callable<ListenableFuture<Foo>() {
  @Override
  public ListenableFuture<Foo> call() {
    return otherExecutorService.submit(otherCallable);
  }
});
```

将返回一个`ListenableFuture<ListenableFuture<Foo>>`。这段代码是不正确的，
因为如果外部future上的`cancel`与外部future的完成竞争，那么该取消将不会传播到内部future。
使用`get()`或侦听器检查另一个future的失败也是一个常见的错误，但是除非特别小心，否则从
`otherCallable`抛出的异常将被抑制。为了避免这种情况,所有的Guava的future-handling方法(和一些从JDK)
拥有的 *Async版本,安全地打开这个嵌套 - [`transform(ListenableFuture<A>, Function<A, B>, Executor)`]
和[`transformAsync(ListenableFuture<A>, AsyncFunction<A, B>, Executor)`,或[`ExecutorService.submit(Callable)`]
和[`submitAsync(AsyncCallable<A>, Executor)`],等等。

[`ListenableFuture`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/ListenableFuture.html
[`addListener(Runnable, Executor)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/ListenableFuture.html#addListener-java.lang.Runnable-java.util.concurrent.Executor-
[`Futures.addCallback(ListenableFuture<V>, FutureCallback<V>, Executor)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Futures.html#addCallback-com.google.common.util.concurrent.ListenableFuture-com.google.common.util.concurrent.FutureCallback-java.util.concurrent.Executor-
[no-executor-add-callback]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Futures.html#addCallback-com.google.common.util.concurrent.ListenableFuture-com.google.common.util.concurrent.FutureCallback-
[`FutureCallback<V>`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/FutureCallback.html
[`onSuccess(V)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/FutureCallback.html#onSuccess-V-
[`onFailure(Throwable)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/FutureCallback.html#onFailure-java.lang.Throwable-
[`ExecutorService.submit(Callable)`]: http://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ExecutorService.html#submit-java.util.concurrent.Callable-
[`ListeningExecutorService`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/ListeningExecutorService.html
[`MoreExecutors.listeningDecorator(ExecutorService)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/MoreExecutors.html#listeningDecorator-java.util.concurrent.ExecutorService-
[`FutureTask`]: http://docs.oracle.com/javase/8/docs/api/java/util/concurrent/FutureTask.html
[`ListenableFutureTask.create(Callable<V>)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/ListenableFutureTask.html#create-java.util.concurrent.Callable-
[`ListenableFutureTask.create(Runnable, V)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/ListenableFutureTask.html#create-java.lang.Runnable-V-
[`AbstractFuture<V>`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractFuture.html
[`SettableFuture`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/SettableFuture.html
[`JdkFutureAdapters.listenInPoolThread(Future)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/JdkFutureAdapters.html
[`JdkFutureAdapters.listenInPoolThread(Future)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/JdkFutureAdapters.html
[the implementation of `Futures.allAsList`]: https://google.github.io/guava/releases/snapshot/api/docs/src-html/com/google/common/util/concurrent/Futures.html#line.1276
[`transformAsync(ListenableFuture<A>, AsyncFunction<A, B>, Executor)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Futures.html#transformAsync-com.google.common.util.concurrent.ListenableFuture-com.google.common.util.concurrent.AsyncFunction-java.util.concurrent.Executor-
[`transformAsync(ListenableFuture<A>, AsyncFunction<A, B>)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Futures.html#transformAsync-com.google.common.util.concurrent.ListenableFuture-com.google.common.util.concurrent.AsyncFunction-
[`transform(ListenableFuture<A>, Function<A, B>, Executor)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Futures.html#transform-com.google.common.util.concurrent.ListenableFuture-com.google.common.base.Function-java.util.concurrent.Executor-
[`transform(ListenableFuture<A>, Function<A, B>)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Futures.html#transform-com.google.common.util.concurrent.ListenableFuture-com.google.common.base.Function-
[`allAsList(Iterable<ListenableFuture<V>>)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Futures.html#allAsList-java.lang.Iterable-
[`allAsList(ListenableFuture<V>...)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Futures.html#allAsList-com.google.common.util.concurrent.ListenableFuture...-
[`successfulAsList(Iterable<ListenableFuture<V>>)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Futures.html#successfulAsList-java.lang.Iterable-
[`successfulAsList(ListenableFuture<V>...)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Futures.html#successfulAsList-com.google.common.util.concurrent.ListenableFuture...-
[`AsyncFunction<A, B>`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AsyncFunction.html
[`submitAsync(AsyncCallable<A>, Executor)`]:
https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Futures.html#submitAsync-com.google.common.util.concurrent.AsyncCallable-java.util.concurrent.Executor-
