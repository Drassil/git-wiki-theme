# Caches（缓存）

## 例子

```java
LoadingCache<Key, Graph> graphs = CacheBuilder.newBuilder()
       .maximumSize(1000)
       .expireAfterWrite(10, TimeUnit.MINUTES)
       .removalListener(MY_LISTENER)
       .build(
           new CacheLoader<Key, Graph>() {
             public Graph load(Key key) throws AnyException {
               return createExpensiveGraph(key);
             }
           });
```

## 适用性Applicability

缓存在各种各样的用例中都非常有用。例如，当一个值的计算或检索开销很大，并且不止一次地需要某个输入的值时，您应该考虑使用缓存。

`Cache`类似于`ConcurrentMap`，但并不完全相同。最基本的区别是，`ConcurrentMap`将保存添加到其中的所有元素，直到显式地删除它们。
另一方面，`Cache`通常配置为自动删除条目，以限制其内存占用。在某些情况下，`LoadingCache`可能很有用，即使它没有删除条目，因为它是自动缓存加载的。

`Cache`类似于`ConcurrentMap`，但并不完全相同。最基本的区别是，`ConcurrentMap`将保存添加到其中的所有元素，直到显式地删除它们。另一方面，`Cache`通常配置为自动删除条目，以限制其内存占用。在某些情况下，`LoadingCache`可能很有用，即使它没有删除条目，因为它是自动缓存加载的。

一般来说，Guava缓存工具适用于以下情况:

*   你愿意花一些内存来提高速度。
*   您希望键有时会被查询不止一次。
*   您的缓存将不需要存储超过RAM容量的数据。
    (Guava缓存是**本地**到您的应用程序的一次运行。它们不将数据存储在文件或外部服务器中。如果这不符合您的需要，可以考虑使用[Memcached](http://memcached.org/)这样的工具。)

如果这些都适用于您的用例，那么Guava缓存实用程序可能适合您!

使用上面的示例代码演示的 `CacheBuilder` 构建器模式可以获得 `Cache` ，但是定制缓存是有趣的部分。

_注意:_ 如果您不需要 `Cache` 的特性，那么 `ConcurrentHashMap` 的内存效率更高，但是用任何旧的`ConcurrentMap`复制大多数`Cache`特性是极其困难或不可能的。

## Population
关于缓存，要问自己的第一个问题是:是否有一些 _合理的默认_ 函数来加载或计算与键关联的值?如果是的话，
你应该使用 `CacheLoader`。如果没有，或者需要覆盖默认值，但是您仍然需要原子的“get-if- missing -compute”语义，
您应该将一个`Callable`传递给一个`get`调用。可以使用`Cache.put`直接插入元素。
但自动缓存加载是首选的，因为它更容易推断所有缓存内容的一致性。


#### From a CacheLoader
`LoadingCache` 是一个附加了[`CacheLoader`]的`Cache`。创建`CacheLoader`通常与实现 `V load(K key)
throws Exception` 方法一样简单。例如，你可以用下面的代码创建一个`LoadingCache`:

```java
LoadingCache<Key, Graph> graphs = CacheBuilder.newBuilder()
       .maximumSize(1000)
       .build(
           new CacheLoader<Key, Graph>() {
             public Graph load(Key key) throws AnyException {
               return createExpensiveGraph(key);
             }
           });

...
try {
  return graphs.get(key);
} catch (ExecutionException e) {
  throw new OtherException(e.getCause());
}
```

查询`LoadingCache`的标准方法是使用方法[`get(K)`]。这将返回一个已经缓存的值，或者使用缓存的`CacheLoader`自动地将一个新值加载到缓存中。
因为`CacheLoader`可能会抛出`Exception`， `LoadingCache.get(K)`会抛出`ExecutionException`。(如果缓存加载器抛出一个 _unchecked_ 异常，
`get(K)`将抛出一个`UncheckedExecutionException`来包装它。) 您还可以选择使用`getUnchecked(K)`，它将所有异常封装在`UncheckedExecutionException`中，
但是如果底层的`CacheLoader`通常会抛出已检查的异常，那么这可能会导致令人惊讶的行为。

```java
LoadingCache<Key, Graph> graphs = CacheBuilder.newBuilder()
       .expireAfterAccess(10, TimeUnit.MINUTES)
       .build(
           new CacheLoader<Key, Graph>() {
             public Graph load(Key key) { // no checked exception
               return createExpensiveGraph(key);
             }
           });

...
return graphs.getUnchecked(key);
```
执行批量查找可以使用方法`getAll(Iterable<? extends K>)`。默认情况下，`getAll`会向`CacheLoader.load`发出一个单独的调用。
加载缓存中缺少的每个键。当批量检索比许多单独查找更有效时，可以覆盖[`CacheLoader.loadAll`]来利用这一点。`getAll(Iterable)`的性能将相应地提高。

注意，您可以编写一个`CacheLoader.loadAll`实现加载没有特别请求的键值。例如，如果从某个组计算任意键的值，就会得到该组中所有键的值，那么`loadAll`可能同时加载该组的其他键。

#### From a Callable

所有Guava缓存，加载与否，支持方法[`get(K, Callable<V>)`]。
此方法返回与缓存中的键关联的值，或从指定的`Callable`计算该值并将其添加到缓存中。
在加载完成之前，不会修改与此缓存关联的任何可见状态。该方法为传统的 "如果缓存，返回;否则创建、缓存和返回" 的模式。


```java
Cache<Key, Value> cache = CacheBuilder.newBuilder()
    .maximumSize(1000)
    .build(); // look Ma, no CacheLoader
...
try {
  // If the key wasn't in the "easy to compute" group, we need to
  // do things the hard way.
  cache.get(key, new Callable<Value>() {
    @Override
    public Value call() throws AnyException {
      return doThingsTheHardWay(key);
    }
  });
} catch (ExecutionException e) {
  throw new OtherException(e.getCause());
}
```

#### Inserted Directly

值可以用[`cache.put(key, value)`]直接插入到缓存中。这将覆盖指定键在缓存中的任何先前条目。
还可以使用`Cache.asMap()`视图公开的任何`ConcurrentMap`方法对缓存进行更改。
注意，`asMap`视图上的任何方法都不会导致条目自动加载到缓存中。此外，该视图上的原子操作超出了自动缓存加载的范围，
因此`Cache.get(K, Callable<V>)`在缓存中使用`CacheLoader` 或 `Callable`加载值应该总是优先于`Cache.asMap().putIfAbsent`。

## Eviction（回收）

残酷的现实是，我们几乎 _肯定_ 没有足够的内存来缓存我们能够缓存的所有东西。您必须决定:什么时候不值得保留缓存条目?
Guava提供了三种基本类型的回收:基于大小的回收（size)、基于时间的回收（time-based）和基于引用的回收（reference-based）。

### Size-based Eviction（基于大小的回收）

如果您的缓存不应该超过某个大小，那么只需使用[`CacheBuilder.maximumSize(long)`]。
缓存将尝试删除最近或不经常使用的条目。_警告_ :缓存可能会在超过此限制之前删除条目 -- 通常是当缓存大小接近该限制时。

另外，如果不同的缓存条目有不同的“权重（weights）” -- 例如，
如果缓存值有完全不同的内存占用 -- 可以使用[`CacheBuilder.weigher(Weigher)`]指定权重函数，使用[`CacheBuilder.maximumWeight(long)`]指定最大缓存权重。
除了`maximumSize`要求的相同警告之外，还要注意权重是在创建条目时计算的，之后是静态的。

```java
LoadingCache<Key, Graph> graphs = CacheBuilder.newBuilder()
       .maximumWeight(100000)
       .weigher(new Weigher<Key, Graph>() {
          public int weigh(Key k, Graph g) {
            return g.vertices().size();
          }
        })
       .build(
           new CacheLoader<Key, Graph>() {
             public Graph load(Key key) { // no checked exception
               return createExpensiveGraph(key);
             }
           });
```

### Timed Eviction

`CacheBuilder` 提供了两种方法来定时回收：

*   [`expireAfterAccess(long, TimeUnit)`] 过期条目只有在指定的持续时间之后，从该条目最后一次被读或写访问。
    请注意，条目被回收的顺序将类似于[size-based eviction]。
*   [`expireAfterWrite(long, TimeUnit)`] 过期条目自创建项以来，或值的最近一次替换之后，经过指定的持续时间之后。
    如果缓存的数据在一段时间后变得过时，则该策略可能是可取的。

定时过期在写期间执行，偶尔在读期间执行，如下所述。

#### Testing Timed Eviction（测试基于时间回收）

测试定时回收并不一定是痛苦的...实际上你不需要花两秒钟来测试两秒钟的过期。
使用[Ticker]接口和[`CacheBuilder.ticker(Ticker)`]方法来指定缓存生成器中的时间源，而不必等待系统时钟。

### Reference-based Eviction（基于引用回收）

Guava允许您通过对键或值使用[弱引用（weak references）]和对值使用[软引用（soft references）]来设置缓存，从而允许对条目进行垃圾收集。


*   [`CacheBuilder.weakKeys()`] 使用弱引用存储键。如果没有其他(强或软)对键的引用，
    则允许对条目进行垃圾收集。由于垃圾收集只依赖于标识相等，这将导致整个缓存使用标识(`==`)相等来比较键，而不是使用`equals()`。
*   [`CacheBuilder.weakValues()`] 使用弱引用存储值。如果没有其他(强或软)对值的引用
    则允许对条目进行垃圾收集。由于垃圾收集只依赖于标识相等，这将导致整个缓存使用标识(`==`)相等来比较值，而不是使用`equals()`。
*   [`CacheBuilder.softValues()`] 将值包装在软引用中。为了 _响应内存需求_，软引用对象以一种全局最不近期使用的方式进行垃圾收集。
    由于使用软引用的性能影响，我们通常建议使用更可预测的 [maximum cache size][size-based eviction]。使用`softValues()`将导致使用identity(`==`)等号而不是 `equals()`比较值。

### Explicit Removals(显式删除)

在任何时候，您都可以显式地使缓存条目无效，而不是等待条目被清除。这可以做到:

*   单条使用 [`Cache.invalidate(key)`]
*   批量使用 [`Cache.invalidateAll(keys)`]
*   所有条目, 使用 [`Cache.invalidateAll()`]

### Removal Listeners（删除侦听器）

您可以通过[`CacheBuilder.removalListener(RemovalListener)`]为缓存指定一个删除侦听器，以便在删除条目时执行某些操作。
[`RemovalListener`]传递一个[`RemovalNotification`]，它指定[`RemovalCause`]、键和值。

请注意，`RemovalListener`抛出的任何异常都会被记录下来(使用`Logger`)并被吞掉。

```java
CacheLoader<Key, DatabaseConnection> loader = new CacheLoader<Key, DatabaseConnection> () {
  public DatabaseConnection load(Key key) throws Exception {
    return openConnection(key);
  }
};
RemovalListener<Key, DatabaseConnection> removalListener = new RemovalListener<Key, DatabaseConnection>() {
  public void onRemoval(RemovalNotification<Key, DatabaseConnection> removal) {
    DatabaseConnection conn = removal.getValue();
    conn.close(); // tear down properly
  }
};

return CacheBuilder.newBuilder()
  .expireAfterWrite(2, TimeUnit.MINUTES)
  .removalListener(removalListener)
  .build(loader);
```

**Warning**: 删除侦听器操作默认情况下是同步执行的，而且由于缓存维护通常是在正常缓存操作期间执行的，
所以昂贵的删除侦听器会降低正常缓存功能的速度!如果您有一个昂贵的删除侦听器，
请使用[`RemovalListeners.asynchronous(RemovalListener, Executor)`]修饰一个`RemovalListener`以异步操作。

### When Does Cleanup Happen?（什么时候清理?）

使用`CacheBuilder`构建的缓存 _不_ 会执行清理并“自动”,或在值过期后立即删除值，或执行类似的操作。
相反，它在写操作期间执行少量维护，或者在偶尔读操作期间(如果很少写操作)执行少量维护。

原因如下:如果我们想要持续执行`Cache`维护，我们需要创建一个线程，它的操作将与用户操作争夺共享锁。
此外，一些环境限制线程的创建，这将使`CacheBuilder`在该环境中不可用。

相反，我们把选择权交给你。如果您的缓存是高吞吐量的，那么您就不必担心执行缓存维护来清理过期条目之类的事情。
如果缓存很少执行写操作，并且不希望清理阻塞缓存读取，那么可以创建自己的维护线程，定期调用[`Cache.cleanUp()`]。

如果您想为一个很少有写操作的缓存安排常规的缓存维护，只需使用[`ScheduledExecutorService`]安排维护。

### Refresh(刷新)

“刷新”与“回收”并不完全相同。正如在[`LoadingCache.refresh(K)`]中指定的那样，刷新一个键将为该键加载一个新值，可能是异步的。
在键被刷新时，旧值(如果有的话)仍然返回，这与强制检索(retrievals)等待值被重新加载相反。

如果在刷新时抛出异常，则保留旧值，并记录和吞噬异常。

`CacheLoader`可以通过覆盖[`CacheLoader.reload(K, V)`]指定刷新时使用的智能行为，它允许您在计算新值时使用旧值。

```java
// Some keys don't need refreshing, and we want refreshes to be done asynchronously.
LoadingCache<Key, Graph> graphs = CacheBuilder.newBuilder()
       .maximumSize(1000)
       .refreshAfterWrite(1, TimeUnit.MINUTES)
       .build(
           new CacheLoader<Key, Graph>() {
             public Graph load(Key key) { // no checked exception
               return getGraphFromDatabase(key);
             }

             public ListenableFuture<Graph> reload(final Key key, Graph prevGraph) {
               if (neverNeedsRefresh(key)) {
                 return Futures.immediateFuture(prevGraph);
               } else {
                 // asynchronous!
                 ListenableFutureTask<Graph> task = ListenableFutureTask.create(new Callable<Graph>() {
                   public Graph call() {
                     return getGraphFromDatabase(key);
                   }
                 });
                 executor.execute(task);
                 return task;
               }
             }
           });
```

自动定时刷新可以使用[`CacheBuilder.refreshAfterWrite(long, TimeUnit)`]。
与`expireAfterWrite`相反，`refreshAfterWrite`'将使一个键在指定的持续时间之后有 _资格_ 刷新，但是只有在查询条目时才会实际启动刷新。
(如果`CacheLoader.reload`被实现为异步的，这样查询就不会因为刷新而变慢。)
例如,您可以为相同的缓存指定`refreshAfterWrite`和`expireAfterWrite`,这样，当条目符合刷新条件时，条目上的过期计时器就不会盲目重置,
因此，如果条目在符合刷新条件后没有查询，则允许它过期。

## Features（特性）

### Statistics（统计数据）

通过使用[`CacheBuilder.recordStats()`]，可以打开Guava缓存的统计信息收集。
[`Cache.stats()`]方法返回一个[`CacheStats`]对象，该对象提供以下统计信息：

*   [`hitRate()`], 返回点请求命中率
*   [`averageLoadPenalty()`], 加载新值所花费的平均时间(以纳秒为单位)
*   [`evictionCount()`], 缓存清除的次数

还有更多的数据。这些统计数据对于缓存调优非常重要，我们建议在性能关键的应用程序中密切关注这些统计数据。

### `asMap`

您可以使用它的 `asMap`视图将任何 `Cache`视为`ConcurrentMap`，但是`asMap`视图如何与`Cache`交互需要一些解释。

*   `cache.asMap()` 包含 _当前加载到_ 缓存中的所有条目。例如，`cache.asMap().keySet()`包含当前加载的所有键。
*   `asMap().get(key)` 本质上等同于`cache.getIfPresent(key)`，并且不会导致加载值。这与`Map`合同是一致的。
*   访问时间由所有缓存读写操作重置(包括`Cache.asMap().get(Object)`和`Cache.asMap().put(K, V)`)，
    但不是通过`containsKey(Object)`，也不是通过`Cache.asMap()`的集合视图上的操作。
    因此，例如，遍历`cache.asMap().entrySet()`不会重置检索条目的访问时间。

## Interruption（中断）

加载方法(如`get`)永远不会抛出`InterruptedException`。我们本可以设计这些方法来支持`InterruptedException`，
但我们的支持是不完整的，它会迫使所有用户承担成本，而只让一部分用户受益。详情请继续阅读。

请求未处理值的`get`调用可分为两大类:加载值的调用和等待另一个线程正在加载的调用。这两者在我们支持中断的能力上是不同的。
最简单的情况是等待另一个线程正在进行的加载:这里我们可以输入一个可中断的等待。
最困难的情况是我们自己加载值。在这里，我们完全取决于用户提供的`CacheLoader`。
如果它恰好支持中断，我们可以支持中断;如果没有，我们就不能。

那么，当提供的`CacheLoader`支持中断时，为什么不支持中断呢?在某种意义上，
我们确实这样做了(但请参阅下面的内容):如果`CacheLoader`抛出`InterruptedException`，
那么对键的所有`get`调用都将立即返回(与任何其他异常一样)。此外，`get`将恢复加载线程中的中断位。
令人惊讶的是，`InterruptedException`被包装在`ExecutionException`中。

原则上，我们可以为您打开这个异常。然而，这将强制所有`LoadingCache`用户处理`InterruptedException`，
即使当您考虑到所有非加载线程的等待仍然可能被中断时，大多数可能仍然值得这样做。但是许多缓存只在一个线程中使用。
它们的用户仍然必须捕获不可能的`InterruptedException`。甚至那些跨线程共享缓存的用户也只能 _偶尔_ 中断
他们的`get`调用，这取决于哪个线程首先发出请求。

在这个决策中，我们的指导原则是让缓存的行为就像所有值都加载在调用线程中一样。这一原则使得将缓存引入以
前每次调用时重新计算其值的代码变得很容易。如果旧代码不可中断，那么新代码也可以不中断。

我说我们“在某种意义上”支持中断。在另一种意义上，我们不这样做，使`LoadingCache`成为一个泄漏的抽象。
如果加载线程被中断，我们会像对待其他异常一样对待它。在很多情况下，这是可以的，但是当多个`get`调用正在等待该值时，
这就不是正确的做法了。虽然计算值的操作被中断了，但是需要该值的其他操作可能没有中断。然而，所有这些调用者都接
收到`InterruptedException`(包装在`ExecutionException`中)，即使负载与其说是"fail”，不如说是“abort”。

正确的行为是让剩余的线程之一重试加载。我们已经[为此提交了一个bug](https://github.com/google/guava/issues/1122)。
我们可以在提议的`AsyncLoadingCache`中进行额外的工作，它将返回具有正确中断行为的`Future`对象，而不是修复这个问题。


[`CacheLoader`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheLoader.html
[`get(K)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/LoadingCache.html#get-K-
[`CacheLoader.loadAll`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheLoader.html#loadAll-java.lang.Iterable-
[`get(K, Callable<V>)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/Cache.html#get-java.lang.Object-java.util.concurrent.Callable-
[`cache.put(key, value)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/Cache.html#put-K-V-
[`CacheBuilder.maximumSize(long)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheBuilder.html#maximumSize-long-
[`CacheBuilder.weigher(Weigher)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheBuilder.html#weigher-com.google.common.cache.Weigher-
[`CacheBuilder.maximumWeight(long)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheBuilder.html#maximumWeight-long-
[`expireAfterAccess(long, TimeUnit)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheBuilder.html#expireAfterAccess-long-java.util.concurrent.TimeUnit-
[size-based eviction]: #Size-based-Eviction
[`expireAfterWrite(long, TimeUnit)`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheBuilder.html#expireAfterWrite-long-java.util.concurrent.TimeUnit-
[Ticker]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Ticker.html
[`CacheBuilder.ticker(Ticker)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheBuilder.html#ticker-com.google.common.base.Ticker-
[weak references]: http://docs.oracle.com/javase/6/docs/api/java/lang/ref/WeakReference.html
[soft references]: http://docs.oracle.com/javase/6/docs/api/java/lang/ref/SoftReference.html
[`CacheBuilder.weakKeys()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheBuilder.html#weakKeys--
[`CacheBuilder.weakValues()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheBuilder.html#weakValues--
[`CacheBuilder.softValues()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheBuilder.html#softValues--
[`Cache.invalidate(key)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/Cache.html#invalidate-java.lang.Object-
[`Cache.invalidateAll(keys)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/Cache.html#invalidateAll-java.lang.Iterable-
[`Cache.invalidateAll()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/Cache.html#invalidateAll--
[`CacheBuilder.removalListener(RemovalListener)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheBuilder.html#removalListener-com.google.common.cache.RemovalListener-
[`RemovalListener`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/RemovalListener.html
[`RemovalNotification`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/RemovalNotification.html
[`RemovalCause`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/RemovalCause.html
[`RemovalListeners.asynchronous(RemovalListener, Executor)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/RemovalListeners.html#asynchronous-com.google.common.cache.RemovalListener-java.util.concurrent.Executor-
[`Cache.cleanUp()`]: http://google.github.io/guava/releases/11.0.1/api/docs/com/google/common/cache/Cache.html#cleanUp--
[`ScheduledExecutorService`]: http://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ScheduledExecutorService.html
[`LoadingCache.refresh(K)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/LoadingCache.html#refresh-K-
[`CacheLoader.reload(K, V)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheLoader.html#reload-K-V-
[`CacheBuilder.refreshAfterWrite(long, TimeUnit)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheBuilder.html#refreshAfterWrite-long-java.util.concurrent.TimeUnit-
[`CacheBuilder.recordStats()`]: http://google.github.io/guava/releases/12.0/api/docs/com/google/common/cache/CacheBuilder.html#recordStats--
[`Cache.stats()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/Cache.html#stats--
[`CacheStats`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheStats.html
[`hitRate()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheStats.html#hitRate--
[`averageLoadPenalty()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheStats.html#averageLoadPenalty--
[`evictionCount()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/cache/CacheStats.html#evictionCount--
