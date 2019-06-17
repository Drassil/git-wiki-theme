# Collection Helpers(集合类助手)

## Introduction 简介

有时您需要编写自己的集合扩展。也许您想在向列表添加元素时添加特殊的行为，或者您想编写一个实际上由数据库查询
支持的`Iterable`。Guava提供了许多实用程序，使这些任务更容易为您和我们。(毕竟，我们自己也在扩展集合框架。)

## Forwarding Decorators（转发修饰符）

对于所有不同的集合接口，Guava提供了`Forwarding`抽象类，以便使用[decorator pattern](http://en.wikipedia.org/wiki/Decorator_pattern)简化操作。

`Forwarding`类定义了一个抽象方法`delegate()`，您应该覆盖它来返回修饰过的对象。
其他每个方法都直接委托给委托:例如，`ForwardingList.get(int)`被简单地实现为`delegate().get(int)`。

通过子类化`ForwardingXXX`并实现`delegate()`方法，您可以覆盖目标类中选定的方法，添加修饰功能，而不必自己委托每个方法。

此外，许多方法都有一个`standardMethod`实现，您可以使用它来恢复预期的行为，提供了一些与扩展JDK中的`AbstractList`或其他骨架类相同的好处。

举个例子。假设您想修饰一个`List`，以便它记录添加到其中的所有元素。当然，无论使用哪种方法添加元素 
-- `add(int, E)`、`add(E)`或`addAll(Collection)` -- 我们都希望记录元素，因此必须覆盖所有这些方法。

```java
class AddLoggingList<E> extends ForwardingList<E> {
  final List<E> delegate; // backing list
  @Override protected List<E> delegate() {
    return delegate;
  }
  @Override public void add(int index, E elem) {
    log(index, elem);
    super.add(index, elem);
  }
  @Override public boolean add(E elem) {
    return standardAdd(elem); // implements in terms of add(int, E)
  }
  @Override public boolean addAll(Collection<? extends E> c) {
    return standardAddAll(c); // implements in terms of add
  }
}
```
记住，默认情况下，所有方法都直接转发给委托，因此重写了`ForwardingMap.put`不会改变`ForwardingMap.putAll`的行为。
小心地覆盖每个必须更改其行为的方法，并确保修饰后的集合满足其契约。

通常，抽象集合框架(如`AbstractList`)提供的大多数方法也在`Forwarding`装饰器中作为 `standard`实现提供。

提供特殊视图的接口有时提供这些视图的 `Standard`实现。例如，`ForwardingMap`提供了
`StandardKeySet`, `StandardValues`, 和 `StandardEntrySet`类，每一个类都尽可能地将它们的
方法委托给修饰过的映射，否则，它们会留下不能作为抽象委托的方法。

Interface       | Forwarding Decorator
:-------------- | :--------------------------
`Collection`    | [`ForwardingCollection`]
`List`          | [`ForwardingList`]
`Set`           | [`ForwardingSet`]
`SortedSet`     | [`ForwardingSortedSet`]
`Map`           | [`ForwardingMap`]
`SortedMap`     | [`ForwardingSortedMap`]
`ConcurrentMap` | [`ForwardingConcurrentMap`]
`Map.Entry`     | [`ForwardingMapEntry`]
`Queue`         | [`ForwardingQueue`]
`Iterator`      | [`ForwardingIterator`]
`ListIterator`  | [`ForwardingListIterator`]
`Multiset`      | [`ForwardingMultiset`]
`Multimap`      | [`ForwardingMultimap`]
`ListMultimap`  | [`ForwardingListMultimap`]
`SetMultimap`   | [`ForwardingSetMultimap`]

## PeekingIterator（窥视迭代器）

有时候，普通的`Iterator`接口是不够的。

`Iterators` 支持方法[`Iterators.peekingIterator(Iterator)`]，该方法封装一个`Iterator`并返回一个[`PeekingIterator`]，
这是`Iterator`的子类，允许您[`peek()`]查看下一个调用`next()`返回的元素。

*注意:* `Iterators.peekingIterator`返回的`PeekingIterator`不支持 `peek()`之后的`remove()`调用。

让我们做一个例子:复制一个 `List`，同时消除连续重复的元素。

```java
List<E> result = Lists.newArrayList();
PeekingIterator<E> iter = Iterators.peekingIterator(source.iterator());
while (iter.hasNext()) {
  E current = iter.next();
  while (iter.hasNext() && iter.peek().equals(current)) {
    // skip this duplicate element
    iter.next();
  }
  result.add(current);
}
```

传统的方法包括跟踪前面的元素，并在某些条件下后退，但这是一项棘手且容易出错的工作。`PeekingIterator`相对容易理解和使用。

## AbstractIterator（抽象的迭代器）

实现您自己的`Iterator`?[`AbstractIterator`]可以让你的生活更轻松。

用一个例子来解释是最简单的。假设我们想包装一个迭代器，以便跳过空值。

```java
public static Iterator<String> skipNulls(final Iterator<String> in) {
  return new AbstractIterator<String>() {
    protected String computeNext() {
      while (in.hasNext()) {
        String s = in.next();
        if (s != null) {
          return s;
        }
      }
      return endOfData();
    }
  };
}
```

实现一个方法[`computeNext()`]，它只计算下一个值。
当序列完成时，只需返回`endOfData()`来标记迭代的结束。

*注意:* `AbstractIterator` 扩展了`UnmodifiableIterator`，它禁止实现`remove()`。
如果您需要一个支持`remove()`的迭代器，则不应该扩展`AbstractIterator`。

### AbstractSequentialIterator

有些迭代器更容易用其他方式表示。
[`AbstractSequentialIterator`]提供了表示迭代的另一种方法。

```java
Iterator<Integer> powersOfTwo = new AbstractSequentialIterator<Integer>(1) { // note the initial value!
  protected Integer computeNext(Integer previous) {
    return (previous == 1 << 30) ? null : previous * 2;
  }
};
```

在这里，我们实现了方法[`computeNext(T)`]，它接受前面的值作为参数。

注意，您还必须传递一个初始值，如果迭代器应该立即结束，则必须传递`null`。注意，`computeNext`假设`null`值意味着迭代结束
-- `AbstractSequentialIterator`不能用于实现可能返回`null`的迭代器。

[`ForwardingCollection`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ForwardingCollection.html
[`ForwardingList`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ForwardingList.html
[`ForwardingSet`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ForwardingSet.html
[`ForwardingSortedSet`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ForwardingSortedSet.html
[`ForwardingMap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ForwardingMap.html
[`ForwardingSortedMap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ForwardingSortedMap.html
[`ForwardingConcurrentMap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ForwardingConcurrentMap.html
[`ForwardingMapEntry`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ForwardingMapEntry.html
[`ForwardingQueue`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ForwardingQueue.html
[`ForwardingIterator`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ForwardingIterator.html
[`ForwardingListIterator`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ForwardingListIterator.html
[`ForwardingMultiset`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ForwardingMultiset.html
[`ForwardingMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ForwardingMultimap.html
[`ForwardingListMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ForwardingListMultimap.html
[`ForwardingSetMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ForwardingSetMultimap.html
[`Iterators.peekingIterator(Iterator)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterators.html#peekingIterator-java.util.Iterator-
[`PeekingIterator`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/PeekingIterator.html
[`peek()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/PeekingIterator.html#peek--
[`AbstractIterator`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/AbstractIterator.html
[`computeNext()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/AbstractIterator.html#computeNext--
[`AbstractSequentialIterator`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/AbstractSequentialIterator.html
[`computeNext(T)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/AbstractSequentialIterator.html#computeNext-T-
