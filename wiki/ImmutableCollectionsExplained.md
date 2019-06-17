# Immutable Collections不可变集合

## 例子

```java
public static final ImmutableSet<String> COLOR_NAMES = ImmutableSet.of(
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple");

class Foo {
  final ImmutableSet<Bar> bars;
  Foo(Set<Bar> bars) {
    this.bars = ImmutableSet.copyOf(bars); // defensive copy!
  }
}
```

## Why?

不可变对象有很多优点，包括:

*   不受信任的库可以安全地使用。
*   线程安全:可以由许多线程使用，没有竞争条件的风险。
*   不需要支持变异，并且可以用这个假设节省时间和空间。所有不可变集合实现都比它们的可变兄弟实现具有更高的内存效率。
    ([analysis](https://github.com/DimitrisAndreou/memory-measurer/blob/master/ElementCostInDataStructures.txt))
*   可以用作常数，并期望它保持不变。

创建对象的不可变副本是一种很好的防御性编程技术。Guava提供了每个标准`Collection`类型的简单、易于使用的不可变版本，包括Guava自己的`Collection`变体。

JDK提供了
The JDK provides `Collections.unmodifiableXXX` 的方法，但在我们看来，这些可以

*   笨拙和详细;在任何地方使用都不舒服，因为您想要创建防御性副本
*   不安全:只有当没有人持有对原始集合的引用时，返回的集合才是真正不可变的
*   效率低下:数据结构仍然具有可变集合的所有开销，包括并发修改检查、哈希表中的额外空间等。

**当您不希望修改一个集合，或者不希望一个集合保持不变时，最好将它防御性地复制到一个不可变的集合中。**

**重要:** 每个Guava不可变集合实现都 _拒绝空值_。我们对谷歌的内部代码库做了详尽的研究
表示，在集合中允许“空”元素的概率约为5%，而其他95%的情况下，最好的处理方法是对空快速失败。
如果需要使用null值，可以考虑使用`Collections.unmodifiableList`及其好友允许null的集合实现上。
更详细的建议可以在[here][using-and-avoiding-null]找到。

## How?

`ImmutableXXX`集合可以通过以下几种方式创建:

*   使用 `copyOf` 方法, 例如, `ImmutableSet.copyOf(set)`
*   使用 `of` 方法, 例如, `ImmutableSet.of("a", "b", "c")` 或
    `ImmutableMap.of("a", 1, "b", 2)`
*   使用 `Builder`, 例子,

```java
public static final ImmutableSet<Color> GOOGLE_COLORS =
   ImmutableSet.<Color>builder()
       .addAll(WEBSAFE_COLORS)
       .add(new Color(0, 191, 255))
       .build();
```
除了已排序的集合外，**顺序从构建时间保留下来(order is preserved from construction time)**。
例如,

```java
ImmutableSet.of("a", "b", "c", "a", "d", "b")
```

将按顺序迭代它的元素 "a", "b", "c", "d".

### `copyOf` 比你想象的更聪明

记住`ImmutableXXX.copyOf`是有用的,试图在安全的情况下避免复制数据 -- 具体的细节还没有指定，但是实现通常是“智能的”。例如,

```java
ImmutableSet<String> foobar = ImmutableSet.of("foo", "bar", "baz");
thingamajig(foobar);

void thingamajig(Collection<String> collection) {
   ImmutableList<String> defensiveCopy = ImmutableList.copyOf(collection);
   ...
}
```

在这段代码, `ImmutableList.copyOf(foobar)` 足够聪明到可以回返回`foobar.asList()`, 这是`ImmutableSet`的常量时间视图。

作为一般的启发式，`ImmutableXXX.copyOf(ImmutableCollection)`试图避免线性时间(linear-time)复制,如果

*   在常数时间内使用底层数据结构是可能的。例如，`ImmutableSet.copyOf(ImmutableList)`不能在常量时间内完成。
*   它不会导致内存泄漏 -- 例如，如果您有`ImmutableList<String> hugeList`，
    而您有`ImmutableList.copyOf(hugeList.subList(0, 10))`，则会执行显式复制，以避免意外地保留`hugeList`中不需要的引用。
*   它不会改变语义 -- 因此`ImmutableSet.copyOf(myImmutableSortedSet)`将执行显式复制，因为`ImmutableSet`使用  
    的`hashCode()` 和 `equals`与`ImmutableSortedSet`基于比较器的行为具有不同的语义。

这有助于最小化良好防御编程风格的性能开销。

### `asList`

所有不可变集合都通过`asList()`提供了`ImmutableList`视图，因此 -- 例如 -- 即使数据存储为`ImmutableSortedSet`，
也可以使用`sortedSet.asList().get(k)`获取第`k`个最小元素。

返回的`ImmutableList`经常（不总是，但经常）是一个常量开销视图，而不是一个显式副本。也就是说，它通常比您的平均`List`更智能
 -- 例如，它将使用支持集合的高效`contains`方法。

## Details

### Where?

Interface                  | JDK or Guava? | Immutable Version
:------------------------- | :------------ | :------------------------------
`Collection`               | JDK           | [`ImmutableCollection`]
`List`                     | JDK           | [`ImmutableList`]
`Set`                      | JDK           | [`ImmutableSet`]
`SortedSet`/`NavigableSet` | JDK           | [`ImmutableSortedSet`]
`Map`                      | JDK           | [`ImmutableMap`]
`SortedMap`                | JDK           | [`ImmutableSortedMap`]
[`Multiset`]               | Guava         | [`ImmutableMultiset`]
`SortedMultiset`           | Guava         | [`ImmutableSortedMultiset`]
[`Multimap`]               | Guava         | [`ImmutableMultimap`]
`ListMultimap`             | Guava         | [`ImmutableListMultimap`]
`SetMultimap`              | Guava         | [`ImmutableSetMultimap`]
[`BiMap`]                  | Guava         | [`ImmutableBiMap`]
[`ClassToInstanceMap`]     | Guava         | [`ImmutableClassToInstanceMap`]
[`Table`]                  | Guava         | [`ImmutableTable`]

[using-and-avoiding-null]: UsingAndAvoidingNullExplained
[`ImmutableCollection`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableCollection.html
[`ImmutableList`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableList.html
[`ImmutableSet`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableSet.html
[`ImmutableSortedSet`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableSortedSet.html
[`ImmutableMap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableMap.html
[`ImmutableSortedMap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableSortedMap.html
[`Multiset`]: NewCollectionTypesExplained#Multiset
[`ImmutableMultiset`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableMultiset.html
[`ImmutableSortedMultiset`]: http://google.github.io/guava/releases/12.0/api/docs/com/google/common/collect/ImmutableSortedMultiset.html
[`Multimap`]: NewCollectionTypesExplained#Multimap
[`ImmutableMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableMultimap.html
[`ImmutableListMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableListMultimap.html
[`ImmutableSetMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableSetMultimap.html
[`BiMap`]: NewCollectionTypesExplained#BiMap
[`ImmutableBiMap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableBiMap.html
[`ClassToInstanceMap`]: NewCollectionTypesExplained#ClassToInstanceMap
[`ImmutableClassToInstanceMap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableClassToInstanceMap.html
[`Table`]: NewCollectionTypesExplained#Table
[`ImmutableTable`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableTable.html
