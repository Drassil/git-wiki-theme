# Idea Graveyard 创意墓地

这个页面的目标是充实它，包含一个合理完整的解释，解释为什么我们拒绝这些想法。

缺少什么?[Search for an issue report, or file a new one.](https://github.com/google/guava/issues?q=is%3Aissue)如果您认为某个想法属于这里，请让我们知道关于这个问题的讨论。

## com.google.common.base

### Tuples for n >= 2

元组(Tuple)类型非常模糊。元组混淆了字段的实际含义(`getFirst` 和 `getSecond`几乎完全没有意义)，
以及关于字段值的任何已知信息。元组混淆方法签名:`ListMultimap<Route, Pair<Double, Double>>`比
`ListMultimap<Route, LatLong>`可读性差得多。

[StackOverflow](http://stackoverflow.com/questions/156275/what-is-the-equivalent-of-the-c-pairl-r-in-java/156685#156685)
这里也有一些解释。

相反，我们发布了[AutoValue](https://github.com/google/auto/tree/master/value).。这使得创建自己适当的值类变得很容易。

### Functions/Predicates for n >= 2 inputs

这里的部分争论与元组的争论类似:什么时候应该使用泛型接口，什么时候应该使用专用接口?
我们在Guava中采用的方法是专门的接口:我们提供范围(Range)而不是对(Pair)，我们提供Equivalence而不是BinaryPredicate。
(如果我们能够说服自己添加reduce()，我们可能会提供Reducer而不是BinaryFunction。但更有可能的是，
我们将提供类似[IntMath.sum](https://github.com/google/guava/issues/309)的方法。)
除了Predicate，我们还有CharMatcher，除了Function，还有CacheLoader，等等。

争论的另一部分是关于Java中广泛使用的函数式编程。
在java 8之前的世界中，语言的冗长(特别是对于匿名类和泛型)阻碍了我们。我们以前写过[关于Java函数式编程的缺点](https://github.com/google/guava/wiki/FunctionalExplained#caveats)。
不过，在某些情况下，这是有道理的。我们已经尝试过使用函数Function和谓词Predicate来捕获大多数类型，
但是如果您需要更复杂的类型，请查看[其他用于函数编程的Java库](http://stackoverflow.com/q/1267297/28465)。

为什么我们要在单输入(single-input)函数和谓词上划一条线呢?这是一个基于使用单输入和多输入版本
的频率、随着输入数量的增加而增加的冗长以及过度使用的诱惑的判断调用。虽然我们可以想象需要在两个映射上执行SQL连接的代码，
但是由于功能、性能和冗长的原因，连接(Map<K, V1>, Map<K, V2>, BiFunction<V1, V2, O>)不太可能是广泛可用的解决方案。
我们宁愿添加一个伪数据库类(pseudo-database)(也许有一天...)，也不愿提供让用户想要更多的简短包装器。

### `Predicates.sameAs()`

详见 [Issue 355](https://github.com/google/guava/issues/355) (thanks, lnezda).

我们在内部对此进行了实验，但是我们发现所有的用户都可以通过其他方式得到更好的服务。

### `Preconditions.checkArgumentNotNull()` (throws IllegalArgumentException)

我们意识到有许多有效的参数支持将IAE抛出到空参数上。事实上，如果我们有一台时光机回到>15年前，
我们甚至可能试图把事情推向那个方向。但是，我们决定坚持使用JDK和有效的Java首选项`NullPointerException`。

如果您坚信IAE是正确的，那么您仍然有`checkArgument(arg != null)`，只是不需要它返回`arg`，或者您可以为您的项目创建一个本地实用程序。

## com.google.common.collect

### `Iterables.isNullOrEmpty`

[宁愿返回空集合而不是null.](http://stackoverflow.com/a/6921270/708434) ，然后一个普通的`isEmpty`检查就足够了。(谢谢,xaerxess。)

### counting/indexed iterator

CountingIterator有多种可能的用途，我在查看内部谷歌使用时看到了它们中的大多数。大致说来，从最常见到最不常见的有:

1) 我们的GXP模板系统的[gxp:loop element](http://gxp.googlecode.com/svn/trunk/docs/gxp-ref.html#gxp:loop-element)中使用了CountingIterator.
过去很难计算GXP中的元素。`gxp:loop`在一段时间之前已经被修改为支持`key`属性。它定义了一个保存计数的变量。这样就好多了:

以前:

```xml
<gxp:abbr name='iter' type='CountingIterator{String}' expr='CountingIterator.from(keys)'>
  <gxp:loop var='value' type='String' iterator='iter'>
    <gxp:abbr name='index' type='int' expr='iter.getIndex()'>
```

今后:

```xml
<gxp:loop var='value' type='String' key='index' iterable='keys'>
```

2) CountingIterator用于典型的for()循环。通常，删除CountingIterator可以简化代码:

从前:

```java
CountingIterator<Record> iterator = CountingIterator.from(records);
while (iterator.hasNext()) {
  Record record = iterator.next();
  int i = iterator.getIndex();
```

今后:

```java
for (int i = 0; i < records.size(); i++) {
  Record record = records.get(i);
```

或者，如果索引访问不是一个好主意:

从前:

```java
CountingIterator<Map.Entry<String, Class>> iter = CountingIterator.from(map.entrySet());
while (iter.hasNext()) {
  doStuff(iter.next(), iter.getIndex());
```

今后:

```java
Iterator<Map.Entry<String, Class>> iter = map.entrySet().iterator();
for (int i = 0; iter.hasNext(); i++) {
  doStuff(iter.next(), i);
```

3) CountingIterator显示出一种特殊的能力，可以将用户从APIs中吸引出来，而api可以更直接地执行用户想要的操作。
有些人寻找迭代。然后找到它，因为我们的CountingIterator恰好支持它。其他人则使用CountingIterator来重新实现分区:

从前:

```java
CountingIterator<Task> iter = CountingIterator.from(tasks);
while (iter.hasNext()) {
  List<Task> batch = Lists.newArrayList();
  do {
    batch.add(iter.next());
  } while (iter.hasNext() && (iter.getCount() % TASKS_PER_BATCH) > 0);
  // Plus, the above test could have used batch.size() and
  // not needed CountingIterator.
```

今后:

```java
for (List<Task> batch : partition(tasks, TASKS_PER_BATCH)) {
```

4) CountingIterator可用于测试迭代器的内容是否被延迟计算。这工作得很好，尽管在跟踪什么方面也存在一些不确定性:
(a)只跟踪next()的调用数量，或(b)任何展望新元素的调用(即:则为next()调用的数量，如果后面有一个hasNext()调用，则为1)。
作为替代方法，您可以使用ListIterator，它公开nextIndex()。

5) CountingIterator可以定义为`Iterator<Counted<E>>`，这样它就可以用作transform()、filter()和toMap()等方法的输入。
然而，与Java函数代码相比，这类代码往往异常冗长。它是[用for()循环重写](https://github.com/google/guava/wiki/FunctionalExplained#caveats)的候选项。

我发现的另一件事是CountingIterator的getIndex()方法的行为有些奇怪。在每次调用方法的值是递增next(),所以在任何给定的时间,
getIndex()可能等于“自然”循环指数(在调用next())或一个更大的(之前调用next() -- 特别是包括循环结束后,此时它的大小等于())。
有状态性是迭代器的一个必要属性，但在这里情况变得更糟:首先需要调用next()或getIndex()，您的选择会以微妙的方式影响值。
上面概述的 `Iterator<Counted<E>>` 方法可以解决状态性问题，但是它减少了CountingIterator,适用于(4)中描述的延迟评估测试。

考虑到我们发现的这些用法，我们认为最好不要包含CountingIterator。
如果需要，该类可以直接在forwarding迭代器上实现。

### Lazy/computing Map whose get() method returns a default value

我们满足`LazyMap`用例的主要策略是添加特殊的集合类型:`LazyMap<K, List<V>>`变成了 `Multimap<K, V>`，
`LazyMap<K,Integer>` 变成了`Multiset<K>` 或 `AtomicLongMap<K>`，`LazyMap<K1, Map<K2, V>>`变成了`Table<K1, K2, V>`，
一些`Maps`变成了`LoadingCaches`。部分原因是这些抽象更加强大。部分原因还在于`LazyMap`在某些情况下有着令人惊讶的行为。
例如，`lazyMap.equals(myMap)`的行为可能与预期一致，但是`myMap.equals(lazyMap)`会导致条目被插入到`lazyMap`中。
`equals()`本身就很奇怪，而且只有在很容易将一个非变化的调用更改为一个变化的调用时(例如，如果有人重写了`HashMap.get` 
调用`a.equals(b)`而不是“调用`b.equals(a)`)。

鉴于此，我建议首先查看我们的各种集合类型。如果这不起作用，尝试使用包含`firstNonNull(map.get(key), defaultValue)`或`Functions.fromMap(map,
defaultValue).apply(key)`等代码片段的实现包装器方法。但是，更改`get()`本身会产生非常奇怪的行为，因此我们已经从Guava(过去支持它)中删除了这个特性。

### 将迭代器视为可迭代的方法

最大的问题是`Iterable`通常被认为能够生成多个独立的迭代器。doc没有这样说，但是`Collection`doc也没有这样说，
但是我们假设它是它的迭代器。当这一假设被违背时，谷歌就会发生破坏。

最简单的解决方案是`ImmutableList.copyOf(Iterator)`，它非常快速、安全，并且提供了许多其他优点。

### `Lists.filter`

See issue 505 (on Google Code).

这里最大的问题是太多的运算变成了昂贵的线性时间命题。如果您想过滤一个列表并返回一个列表，而不仅仅是一个`Collection`或`Iterable`，您可以使用`ImmutableList.copyOf(Iterables.filter(list, predicate))`，它“向上声明”它在做什么，有多贵。

### 更多的varargs工厂方法 (比如: `Lists.newLinkedList(E...)`)

我们在现实中遇到的几乎所有这种情况下使用不可变集合会更好;他们从未真正改变过这些收藏品。

对于其余情况，使用围绕数组的复制工厂。`Arrays.asList`是一个非常好的单行解决方案。或者，您 _正在_ 构建一个 _可变_ 的集合，因此您可以使用例如:
<a href='http://docs.oracle.com/javase/7/docs/api/java/util/Collections.html#addAll(java.util.Collection, T...)'><code>Collections.addAll(Collection&lt;E&gt;,
E...)</code></a>.

### 从 `Iterable<Pair>`, `Object[]` (交替的键和值), 或从 `List<K>` + `List<V>`创建映射

待办事项(kevinb):填写(fill in)

注意，我们添加了[`ImmutableMap.copyOf(Iterable<Entry>)`](https://github.com/google/guava/issues/320).

### `Lists.equalIgnoringOrder(list1, list2)`

正如Kevin在StackOverflow上所说的，"您首先想要这样做的事实是一个强烈的信号，您首先希望将这些集合中的一个或
两个集合表示为多个集合。如果你不关心它们的顺序，它们就不可能在逻辑上成为列表。如果你把它们都表示成多集，你猜怎么着?
您已经得到了单一方法调用的解决方案!"

顺便说一下，任何一对`Iterables`的单行解决方案都是`return ImmutableMultiset.copyOf(elems1).equals(ImmutableMultiset.copyOf(elems2));`

也就是线性时间，线性内存，这使得这些成本很明显。

### `Iterables.countMatching(Iterable, Predicate)`

一个完全等价的解决方案是`return Iterables.size(Iterables.filter(iterable,predicate));`

### `Sets.transform()`

详见 [issue 219](https://github.com/google/guava/issues/219).

带有慢速`contains`方法的`Set`是不启动的，而`Function`不一定是双射的。喜欢 `ImmutableSet.copyOf(Collections2.transform(set,func));`”;

## Persistent mutable collections/mutation methods on immutable collections(不可变集合上的持久collections/mutation方法

Wikipedia[定义](http://en.wikipedia.org/wiki/Persistent_data_structure)一个持久的数据结构，
该结构“在修改时始终保留其以前的版本”。高效的持久数据结构是一个众所周知的研究领域，许多复杂的结构也是众所周知的。

另一方面，Guava的不可变集合 _不是_ 作为持久数据结构设计的。它们的设计目的是实现 -- 在CPU时间和内存方面都非常高效 
-- 在构建之后不会以任何方式更改的集合，并且它们的目标至少与相应的可变集合类型一样高效。
为了持久性而重写这些数据结构会给这些类型的绝大多数用户带来巨大的常量(或者更糟)开销。

虽然它可能提供一个并行API来支持 _效率_ 修改Guava不变的集合,例如方法`ImmutableList` 来创建一个复制`ImmutableList` 添加了
一个新的元素 -- 我们觉得这只可能会混淆用户希望这些方法有次线性的性能,并承担我们实现了高效的持久数据结构。

替代方法包括使用传统的可变集合、使用构建器显式地创建新的不可变集合，或者使用另一个专门用于提供持久数据结构的Java库。
