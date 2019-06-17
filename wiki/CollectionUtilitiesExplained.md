# Collection Utilities(集合类工具)

任何具有JDK Collections框架经验的程序员都知道并喜欢 [`java.util.Collections`]中的实用程序。
Guava提供了更多的实用程序:适用于所有集合的静态方法。这些都是Guava最受欢迎和成熟的部分。

对应于特定接口的方法以相对直观的方式分组:

Interface    | JDK or Guava? | Corresponding Guava utility class（对应的Guava实用程序类）
:----------- | :------------ | :--------------------------------
`Collection` | JDK           | [`Collections2`]
`List`       | JDK           | [`Lists`]
`Set`        | JDK           | [`Sets`]
`SortedSet`  | JDK           | [`Sets`]
`Map`        | JDK           | [`Maps`]
`SortedMap`  | JDK           | [`Maps`]
`Queue`      | JDK           | [`Queues`]
[`Multiset`] | Guava         | [`Multisets`]
[`Multimap`] | Guava         | [`Multimaps`]
[`BiMap`]    | Guava         | [`Maps`]
[`Table`]    | Guava         | [`Tables`]

*** 寻找变换（transform）、过滤器（filter)之类的?这些内容在我们的[functional]编程文章中，在函数习惯用法下面。 ***

## Static constructors静态构造函数

在JDK 7之前，构建新的泛型集合需要不愉快的代码复制:

```java
List<TypeThatsTooLongForItsOwnGood> list = new ArrayList<TypeThatsTooLongForItsOwnGood>();
```

我想我们都同意这是不愉快的。Guava提供静态方法，使用泛型来推断右边的类型:

```java
List<TypeThatsTooLongForItsOwnGood> list = Lists.newArrayList();
Map<KeyType, LongishValueType> map = Maps.newLinkedHashMap();
```

可以肯定的是，JDK 7中的菱形操作符使这个问题变得不那么麻烦:

```java
List<TypeThatsTooLongForItsOwnGood> list = new ArrayList<>();
```

但Guava的作用远不止于此。使用factory方法模式，我们可以非常方便地用集合的起始元素初始化集合。

```java
Set<Type> copySet = Sets.newHashSet(elements);
List<String> theseElements = Lists.newArrayList("alpha", "beta", "gamma");
```

此外，通过命名工厂方法(有效的Java item 1)，我们可以提高将集合初始化为大小的可读性:

```java
List<Type> exactly100 = Lists.newArrayListWithCapacity(100);
List<Type> approx100 = Lists.newArrayListWithExpectedSize(100);
Set<Type> approx100Set = Sets.newHashSetWithExpectedSize(100);
```

下面列出了提供的精确静态工厂方法及其对应的实用程序类。

*注意:* Guava引入的新集合类型不公开原始构造函数，或者在实用程序类中有初始化器。相反，它们直接公开静态工厂方法，例如:

```java
Multiset<String> multiset = HashMultiset.create();
```

## Iterables（迭代）

只要可能，Guava更愿意提供接受`Iterable`而不是`Collection`的实用程序。在谷歌，遇到一个"collection"并不是不寻常的，
它实际上并不存储在主内存中，而是从一个数据库或另一个数据中心收集的，并且不能支持像`size()`这样的操作，除非实际捕获所有元素。

因此，可以在 [`Iterables`]中找到许多您可能希望看到所有集合都支持的操作。此外，大多数`Iterables`方法在[`Iterators`]中都有一个对应的版本，它接受原始迭代器。

`Iterables`类中的绝大多数操作都是*lazy*:它们只在绝对必要的时候才推进支持迭代。本身返回`Iterables`的方法返回延迟计算的视图，而不是显式地在内存中构造一个集合。

从Guava 12开始，`Iterables`由[`FluentIterable`]类补充，该类封装了一个`Iterable`，并为许多这些操作提供了"流畅(fluent)"的语法。

下面是一些最常用的实用程序，尽管在[Guava functional idioms][functional]中讨论了 `Iterables`中的许多更"functional(函数）"的方法。

### 通用

Method                                | Description                                                                                            | See Also
:------------------------------------ | :----------------------------------------------------------------------------------------------------- | :-------
[`concat(Iterable<Iterable>)`]        | 返回多个迭代器连接的延迟视图。                                                                            | [`concat(Iterable...)`]
[`frequency(Iterable, Object)`]       | 返回对象出现的次数。                                                                                     | Compare `Collections.frequency(Collection, Object)`; see [`Multiset`]
[`partition(Iterable, int)`]          | 返回可迭代的不可修改视图，该视图被分割为具有指定大小的块。                                                  | [`Lists.partition(List, int)`], [`paddedPartition(Iterable, int)`]
[`getFirst(Iterable, T default)`]     | 返回可迭代的第一个元素，如果为空则返回默认值。                                                             | Compare `Iterable.iterator().next()`, [`FluentIterable.first()`]
[`getLast(Iterable)`]                 | 返回迭代器的最后一个元素，如果是空的，则快速失败，并返回一个`NoSuchElementException`。                       | [`getLast(Iterable, T default)`], [`FluentIterable.last()`]
[`elementsEqual(Iterable, Iterable)`] | 如果迭代器具有相同顺序的元素，则返回true。                                                                 | Compare `List.equals(Object)`
[`unmodifiableIterable(Iterable)`]    | 返回迭代器的不可修改视图。                                                                                | Compare `Collections.unmodifiableCollection(Collection)`
[`limit(Iterable, int)`]              | 返回一个`Iterable`，最多返回指定数量的元素。                                                               | [`FluentIterable.limit(int)`]
[`getOnlyElement(Iterable)`]          | 返回`Iterable`中的唯一元素。如果iterable为空或有多个元素，则会快速失败。                                     | [`getOnlyElement(Iterable, T default)`]

```java
Iterable<Integer> concatenated = Iterables.concat(
  Ints.asList(1, 2, 3),
  Ints.asList(4, 5, 6));
// concatenated has elements 1, 2, 3, 4, 5, 6

String lastAdded = Iterables.getLast(myLinkedHashSet);

String theElement = Iterables.getOnlyElement(thisSetIsDefinitelyASingleton);
  // if this set isn't a singleton, something is wrong!
```

### Collection-Like（迭代器-类似）

通常，集合在其他集合上自然支持这些操作，但在迭代器上不支持。

*当输入实际上是一个 `Collection` 时，这些操作中的每个操作都委托给相应的`Collection`接口方法。*例如，如果将`Iterables.size`传递给`Collection`，它将调用`Collection.size`方法，而不是遍历迭代器。

Method                                                  | 类似的`Collection`方法              | `FluentIterable` 等价方法
:------------------------------------------------------ | :--------------------------------- | :--------------------------
[`addAll(Collection addTo, Iterable toAdd)`]            | `Collection.addAll(Collection)`    |
[`contains(Iterable, Object)`]                          | `Collection.contains(Object)`      | [`FluentIterable.contains(Object)`]
[`removeAll(Iterable removeFrom, Collection toRemove)`] | `Collection.removeAll(Collection)` |
[`retainAll(Iterable removeFrom, Collection toRetain)`] | `Collection.retainAll(Collection)` |
[`size(Iterable)`]                                      | `Collection.size()`                | [`FluentIterable.size()`]
[`toArray(Iterable, Class)`]                            | `Collection.toArray(T[])`          | [`FluentIterable.toArray(Class)`]
[`isEmpty(Iterable)`]                                   | `Collection.isEmpty()`             | [`FluentIterable.isEmpty()`]
[`get(Iterable, int)`]                                  | `List.get(int)`                    | [`FluentIterable.get(int)`]
[`toString(Iterable)`]                                  | `Collection.toString()`            | [`FluentIterable.toString()`]

### FluentIterable

除了上述方法和功能性习语[article][functional]中所述的方法外，`FluentIterable`还有一些方便的复制到不可变集合中的方法：

Result Type          | Method
:------------------- | :-----------------------------------
`ImmutableList`      | [`toImmutableList()`]
`ImmutableSet`       | [`toImmutableSet()`]
`ImmutableSortedSet` | [`toImmutableSortedSet(Comparator)`]

### Lists

除了静态构造函数方法和函数式编程方法外，[`Lists`]在 `List`对象上提供了许多有价值的实用方法。

Method                   | Description
:----------------------- | :----------
[`partition(List, int)`] | 返回基础列表的视图，该视图被划分为指定大小的块。
[`reverse(List)`]        | 返回指定列表的反向视图。*注意*:如果列表是不可变的，则考虑 [`ImmutableList.reverse()`]。

```java
List<Integer> countUp = Ints.asList(1, 2, 3, 4, 5);
List<Integer> countDown = Lists.reverse(theList); // {5, 4, 3, 2, 1}

List<List<Integer>> parts = Lists.partition(countUp, 2); // {{1, 2}, {3, 4}, {5}}
```

### Static Factories

`Lists` 提供以下静态工厂方法:

Implementation | Factories
:------------- | :--------
`ArrayList`    | [basic][newArrayList], [with elements][newArrayList(E...)], [from `Iterable`][newArrayList(Iterable)], [with exact capacity][newArrayListWithCapacity], [with expected size][newArrayListWithExpectedSize], [from `Iterator`][newArrayList(Iterator)]
`LinkedList`   | [basic][newLinkedList], [from `Iterable`][newLinkedList(Iterable)]

## Sets

[`Sets`]实用程序类包含了许多辛辣的方法。

### Set-Theoretic Operations(理论运算)

我们提供了一些标准的集合-理论运算，作为对参数集合的视图实现。这些返回一个[`SetView`]，可以使用:

*   直接作为`Set`，因为它实现了`Set`接口
*   将其复制到另一个可变集合中，并使用[`copyInto(Set)`]
*   创建不可变副本使用 [`immutableCopy()`]

Method                            |描述
:-------------------------------- |-----------------------
[`union(Set, Set)`]               | 并集
[`intersection(Set, Set)`]        | 交集
[`difference(Set, Set)`]          | 差集
[`symmetricDifference(Set, Set)`] | 对称差分（或布尔和）

例子:

```java
Set<String> wordsWithPrimeLength = ImmutableSet.of("one", "two", "three", "six", "seven", "eight");
Set<String> primes = ImmutableSet.of("two", "three", "five", "seven");

SetView<String> intersection = Sets.intersection(primes, wordsWithPrimeLength); // contains "two", "three", "seven"
// I can use intersection as a Set directly, but copying it can be more efficient if I use it a lot.
return intersection.immutableCopy();
```

### Other Set Utilities

Method                          | Description                                                                             | See Also
:------------------------------ | :-------------------------------------------------------------------------------------- | :-------
[`cartesianProduct(List<Set>)`] | 返回从每个集合中选择一个元素可以获得的所有可能列表                                           | [`cartesianProduct(Set...)`]
[`powerSet(Set)`]               | 返回指定集合的子集集。                                                                     |

```java
Set<String> animals = ImmutableSet.of("gerbil", "hamster");
Set<String> fruits = ImmutableSet.of("apple", "orange", "banana");

Set<List<String>> product = Sets.cartesianProduct(animals, fruits);
// {{"gerbil", "apple"}, {"gerbil", "orange"}, {"gerbil", "banana"},
//  {"hamster", "apple"}, {"hamster", "orange"}, {"hamster", "banana"}}

Set<Set<String>> animalSets = Sets.powerSet(animals);
// {{}, {"gerbil"}, {"hamster"}, {"gerbil", "hamster"}}
```

### Static Factories

`Sets` 提供以下静态工厂方法:

Implementation  | Factories
:-------------- | :--------
`HashSet`       | [basic][newHashSet], [with elements][newHashSet(E...)], [from `Iterable`][newHashSet(Iterable)], [with expected size][newHashSetWithExpectedSize], [from `Iterator`][newHashSet(Iterator)]
`LinkedHashSet` | [basic][newLinkedHashSet], [from `Iterable`][newLinkedHashSet(Iterable)], [with expected size][newLinkedHashSetWithExpectedSize]
`TreeSet`       | [basic][newTreeSet], [with `Comparator`][newTreeSet(Comparator)], [from `Iterable`][newTreeSet(Iterable)]

## Maps

[`Maps`] 有一些很酷的实用程序值得单独解释。

### `uniqueIndex`

[`Maps.uniqueIndex(Iterable, Function)`] 处理一组对象的常见情况，每个对象都有一些惟一的属性，并且希望能够基于该属性查找这些对象。

假设我们有一串字符串，我们知道它们的长度是唯一的，我们想要能够查找具有特定长度的字符串。

```java
ImmutableMap<Integer, String> stringsByIndex = Maps.uniqueIndex(strings, new Function<String, Integer> () {
    public Integer apply(String string) {
      return string.length();
    }
  });
```

如果索引 *不* 惟一，请参见`Multimaps.index`,如下。

### `difference`

[`Maps.difference(Map, Map)`] 允许您比较两个映射之间的所有差异。它返回一个`MapDifference`对象，该对象将Venn图分解为:

Method                   | Description
:----------------------- | :----------
[`entriesInCommon()`]    | 这两个映射中的条目，具有匹配的键和值。
[`entriesDiffering()`]   | 具有相同键但值不同的项。此映射中的值类型为[`MapDifference.ValueDifference`]，它允许您查看左值和右值。
[`entriesOnlyOnLeft()`]  | 返回键在左侧而不在右侧映射中的条目。
[`entriesOnlyOnRight()`] | 返回键在右边而不在左边映射中的条目。

```java
Map<String, Integer> left = ImmutableMap.of("a", 1, "b", 2, "c", 3);
Map<String, Integer> right = ImmutableMap.of("b", 2, "c", 4, "d", 5);
MapDifference<String, Integer> diff = Maps.difference(left, right);

diff.entriesInCommon(); // {"b" => 2}
diff.entriesDiffering(); // {"c" => (3, 4)}
diff.entriesOnlyOnLeft(); // {"a" => 1}
diff.entriesOnlyOnRight(); // {"d" => 5}
```

### `BiMap` utilities

`BiMap`上的Guava实用程序位于`Maps`类中，因为`BiMap`也是`Map`。

`BiMap` utility              | 对应的`Map`实用程序
:--------------------------- | :---------------------------------
[`synchronizedBiMap(BiMap)`] | `Collections.synchronizedMap(Map)`
[`unmodifiableBiMap(BiMap)`] | `Collections.unmodifiableMap(Map)`

#### Static Factories

`Maps` 提供以下静态工厂方法。

Implementation    | Factories
:---------------- | :--------
`HashMap`         | [basic][newHashMap], [from `Map`][newHashMap(Map)], [with expected size][newHashMapWithExpectedSize]
`LinkedHashMap`   | [basic][newLinkedHashMap], [from `Map`][newLinkedHashMap(Map)]
`TreeMap`         | [basic][newTreeMap], [from `Comparator`][newTreeMap(Comparator)], [from `SortedMap`][newTreeMap(SortedMap)]
`EnumMap`         | [from `Class`][newEnumMap(Class)], [from `Map`][newEnumMap(Map)]
`ConcurrentMap`   | [basic][newConcurrentMap]
`IdentityHashMap` | [basic][newIdentityHashMap]

## Multisets

标准的`Collection`操作(如`containsAll`)忽略多集中(multiset)元素的计数，只关心元素是否在多集中。
[`Multisets`]提供了许多操作，这些操作考虑到了多集中元素的多样性。

Method                                                        | Explanation                                                                                               | Difference from `Collection` method
:------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- | :----------------------------------
[`containsOccurrences(Multiset sup, Multiset sub)`]           | 返回 `true` 如果 `sub.count(o) <= super.count(o)`针对所有 `o`.                                           | `Collection.containsAll` 忽略计数，只测试是否包含元素。
[`removeOccurrences(Multiset removeFrom, Multiset toRemove)`] | 对于`toRemove`中元素的每个出现项，从`removeFrom`中删除一个出现项。                   | `Collection.removeAll` 删除在`toRemove`中出现一次的任何元素的所有出现。
[`retainOccurrences(Multiset removeFrom, Multiset toRetain)`] | 保证所有`o`的`removeFrom.count(o) <= toRetain.count(o)`。                 | `Collection.retainAll`保留在`toRetain`中出现一次的所有元素。
[`intersection(Multiset, Multiset)`]                          | 返回两个多集相交的视图；这是对`retainOccurrences`的无损替代。  | 没有模拟。

```java
Multiset<String> multiset1 = HashMultiset.create();
multiset1.add("a", 2);

Multiset<String> multiset2 = HashMultiset.create();
multiset2.add("a", 5);

multiset1.containsAll(multiset2); // returns true: all unique elements are contained,
  // even though multiset1.count("a") == 2 < multiset2.count("a") == 5
Multisets.containsOccurrences(multiset1, multiset2); // returns false

multiset2.removeOccurrences(multiset1); // multiset2 now contains 3 occurrences of "a"

multiset2.removeAll(multiset1); // removes all occurrences of "a" from multiset2, even though multiset1.count("a") == 2
multiset2.isEmpty(); // returns true
```

`Multisets`中的其他实用程序包括：

Method                                         | Description
:--------------------------------------------- | :----------
[`copyHighestCountFirst(Multiset)`]            | 返回按降序迭代元素的多集的不可变副本。
[`unmodifiableMultiset(Multiset)`]             | 返回多集的不可修改视图。
[`unmodifiableSortedMultiset(SortedMultiset)`] | 返回已排序多集的不可修改视图。

```java
Multiset<String> multiset = HashMultiset.create();
multiset.add("a", 3);
multiset.add("b", 5);
multiset.add("c", 1);

ImmutableMultiset<String> highestCountFirst = Multisets.copyHighestCountFirst(multiset);

// highestCountFirst, like its entrySet and elementSet, iterates over the elements in order {"b", "a", "c"}
```

## Multimaps

[`Multimaps`] 提供了一些需要单独解释的通用实用程序操作。

### `index`

`Maps.uniqueIndex`, [`Multimaps.index(Iterable, Function)`]的表亲回答了这样一个问题:
当您希望能够查找所有具有某些特定公共属性的对象时，这并不一定是惟一的。

假设我们要根据字符串的长度对字符串进行分组。

```java
ImmutableSet<String> digits = ImmutableSet.of(
    "zero", "one", "two", "three", "four",
    "five", "six", "seven", "eight", "nine");
Function<String, Integer> lengthFunction = new Function<String, Integer>() {
  public Integer apply(String string) {
    return string.length();
  }
};
ImmutableListMultimap<Integer, String> digitsByLength = Multimaps.index(digits, lengthFunction);
/*
 * digitsByLength maps:
 *  3 => {"one", "two", "six"}
 *  4 => {"zero", "four", "five", "nine"}
 *  5 => {"three", "seven", "eight"}
 */
```

### `invertFrom`

由于`Multimap`可以将多个键映射到一个值，并将一个键映射到多个值，因此反转`Multimap`可能很有用。
Guava提供了[`invertFrom（multimap toinvert，multimap dest）`]来允许您这样做，而不需要为您选择实现。

*注意:* 如果您使用的是`ImmutableMultimap`，请考虑使用[`ImmutableMultimap.inverse()`]。 

```java
ArrayListMultimap<String, Integer> multimap = ArrayListMultimap.create();
multimap.putAll("b", Ints.asList(2, 4, 6));
multimap.putAll("a", Ints.asList(4, 2, 1));
multimap.putAll("c", Ints.asList(2, 5, 3));

TreeMultimap<Integer, String> inverse = Multimaps.invertFrom(multimap, TreeMultimap.<String, Integer> create());
// note that we choose the implementation, so if we use a TreeMultimap, we get results in order
/*
 * inverse maps:
 *  1 => {"a"}
 *  2 => {"a", "b", "c"}
 *  3 => {"c"}
 *  4 => {"a", "b"}
 *  5 => {"c"}
 *  6 => {"b"}
 */
```

### `forMap`

需要`Map`上使用`Multimap`方法吗？[`forMap(Map)`]将`Map`作为`SetMultimap`查看。
例如，与`Multimaps.invertFrom`.结合使用时，这尤其有用。

```java
Map<String, Integer> map = ImmutableMap.of("a", 1, "b", 1, "c", 2);
SetMultimap<String, Integer> multimap = Multimaps.forMap(map);
// multimap maps ["a" => {1}, "b" => {1}, "c" => {2}]
Multimap<Integer, String> inverse = Multimaps.invertFrom(multimap, HashMultimap.<Integer, String> create());
// inverse maps [1 => {"a", "b"}, 2 => {"c"}]
```

### Wrappers

`Multimaps`提供了传统的包装方法，以及基于您选择的 `Map`和`Collection`实现获取自定义`Multimap`实现的工具。

Multimap type       | Unmodifiable（不可修改）           | Synchronized（同步的）             | Custom
:------------------ | :-------------------------------- | :-------------------------------- | :-----
`Multimap`          | [`unmodifiableMultimap`]          | [`synchronizedMultimap`]          | [`newMultimap`]
`ListMultimap`      | [`unmodifiableListMultimap`]      | [`synchronizedListMultimap`]      | [`newListMultimap`]
`SetMultimap`       | [`unmodifiableSetMultimap`]       | [`synchronizedSetMultimap`]       | [`newSetMultimap`]
`SortedSetMultimap` | [`unmodifiableSortedSetMultimap`] | [`synchronizedSortedSetMultimap`] | [`newSortedSetMultimap`]

自定义的`Multimap`实现允许您指定应在返回的`Multimap`中使用的特定实现。注意事项包括：

*   多映射（multimap）假定对映射和工厂返回的列表拥有完全的所有权。这些对象不应手动更新，
    提供时应为空，并且不应使用软引用、弱引用或虚引用。
*   在修改了`Multimap`后，`Map`的内容将 **不会有任何保证**。
*   当任何并发操作更新多映射(multimap)时，即使映射和工厂生成的实例是，多映射也不是线程安全的。
    不过，并发读取操作将正常工作。如有必要，请使用`synchronized`包装纸解决此问题。
*   如果映射、工厂、工厂生成的列表和多映射内容都是可序列化的，则多映射是可序列化的。
*   `Multimap.get(key)`返回的集合与`Supplier`返回的集合类型 *不同*，但如果supplier返回`RandomAccess`列表，
    则`Multimap.get(key)`返回的列表也将是随机访问的。

请注意，自定义的`Multimap`方法需要`Supplier`参数来生成新的集合。下面是一个写`ListMultimap`的例子，它由`TreeMap`映射支持，映射到`LinkedList`。

```java
ListMultimap<String, Integer> myMultimap = Multimaps.newListMultimap(
  Maps.<String, Collection<Integer>>newTreeMap(),
  new Supplier<LinkedList<Integer>>() {
    public LinkedList<Integer> get() {
      return Lists.newLinkedList();
    }
  });
```

## Tables

[`tables`]类提供了一些方便的实用程序。

### `customTable`

与`Multimaps.newXXXMultimap(Map, Supplier)`实用程序类似，[`Tables.newCustomTable(Map, Supplier<Map>)`]允
许您使用所需的行或列映射指定`Table`实现。

```java
// use LinkedHashMaps instead of HashMaps
Table<String, Character, Integer> table = Tables.newCustomTable(
  Maps.<String, Map<Character, Integer>>newLinkedHashMap(),
  new Supplier<Map<Character, Integer>> () {
    public Map<Character, Integer> get() {
      return Maps.newLinkedHashMap();
    }
  });
```

### `transpose`

[`transpose(Table<R, C, V>)`]方法允许您将`Table<R, C, V>`作为`Table<C, R, V>`。

### Wrappers

这些是你熟悉的，不可修改的包装纸。不过，在大多数情况下，请考虑改用[`ImmutableTable`]。

*   [`unmodifiableTable`]
*   [`unmodifiableRowSortedTable`]

[`java.util.Collections`]: http://docs.oracle.com/javase/7/docs/api/java/util/Collections.html
[`Collections2`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Collections2.html
[`Lists`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Lists.html
[`Sets`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html
[`Maps`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html
[`Queues`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Queues.html
[`Multiset`]: NewCollectionTypesExplained#Multiset
[`Multisets`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multisets.html
[`Multimap`]: NewCollectionTypesExplained#Multimap
[`Multimaps`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html
[`BiMap`]: NewCollectionTypesExplained#BiMap
[`Table`]: NewCollectionTypesExplained#Table
[`Tables`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Tables.html
[functional]: FunctionalExplained
[`Iterables`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html
[`Iterators`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterators.html
[`FluentIterable`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/FluentIterable.html
[`concat(Iterable<Iterable>)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#concat-java.lang.Iterable-
[`concat(Iterable...)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#concat-java.lang.Iterable...-
[`frequency(Iterable, Object)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#frequency-java.lang.Iterable-java.lang.Object-
[`partition(Iterable, int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#partition-java.lang.Iterable-int-
[`Lists.partition(List, int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Lists.html#partition-java.util.List-int-
[`paddedPartition(Iterable, int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#paddedPartition-java.lang.Iterable-int-
[`getFirst(Iterable, T default)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#getFirst-java.lang.Iterable-T-
[`FluentIterable.first()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/FluentIterable.html#first--
[`getLast(Iterable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#getLast-java.lang.Iterable-
[`getLast(Iterable, T default)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#getLast-java.lang.Iterable-T-
[`FluentIterable.last()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/FluentIterable.html#last--
[`elementsEqual(Iterable, Iterable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#elementsEqual-java.lang.Iterable-java.lang.Iterable-
[`unmodifiableIterable(Iterable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#unmodifiableIterable-java.lang.Iterable-
[`limit(Iterable, int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#limit-java.lang.Iterable-int-
[`FluentIterable.limit(int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/FluentIterable.html#limit-int-
[`getOnlyElement(Iterable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#getOnlyElement-java.lang.Iterable-
[`getOnlyElement(Iterable, T default)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#getOnlyElement-java.lang.Iterable-T-
[`addAll(Collection addTo, Iterable toAdd)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#addAll-java.util.Collection-java.lang.Iterable-
[`contains(Iterable, Object)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#contains-java.lang.Iterable-java.lang.Object-
[`FluentIterable.contains(Object)`]: http://google.github.io/guava/releases/12.0/api/docs/com/google/common/collect/FluentIterable.html#contains-java.lang.Object-
[`removeAll(Iterable removeFrom, Collection toRemove)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#removeAll-java.lang.Iterable-java.util.Collection-
[`retainAll(Iterable removeFrom, Collection toRetain)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#retainAll-java.lang.Iterable-java.util.Collection-
[`size(Iterable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#size-java.lang.Iterable-
[`FluentIterable.size()`]: http://google.github.io/guava/releases/12.0/api/docs/com/google/common/collect/FluentIterable.html#size--
[`toArray(Iterable, Class)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#toArray-java.lang.Iterable-java.lang.Class-
[`FluentIterable.toArray(Class)`]: http://google.github.io/guava/releases/12.0/api/docs/com/google/common/collect/FluentIterable.html#toArray-java.lang.Class-
[`isEmpty(Iterable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#isEmpty-java.lang.Iterable-
[`FluentIterable.isEmpty()`]: http://google.github.io/guava/releases/12.0/api/docs/com/google/common/collect/FluentIterable.html#isEmpty--
[`get(Iterable, int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#get-java.lang.Iterable-int-
[`FluentIterable.get(int)`]: http://google.github.io/guava/releases/12.0/api/docs/com/google/common/collect/FluentIterable.html#get-int-
[`toString(Iterable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#toString-java.lang.Iterable-
[`FluentIterable.toString()`]: http://google.github.io/guava/releases/12.0/api/docs/com/google/common/collect/FluentIterable.html#toString--
[`toImmutableList()`]: http://google.github.io/guava/releases/12.0/api/docs/com/google/common/collect/FluentIterable.html#toImmutableList--
[`toImmutableSet()`]: http://google.github.io/guava/releases/12.0/api/docs/com/google/common/collect/FluentIterable.html#toImmutableSet--
[`toImmutableSortedSet(Comparator)`]: http://google.github.io/guava/releases/12.0/api/docs/com/google/common/collect/FluentIterable.html#toImmutableSortedSet-java.util.Comparator-
[`partition(List, int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Lists.html#partition-java.util.List-int-
[`reverse(List)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Lists.html#reverse-java.util.List-
[`ImmutableList.reverse()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableList.html#reverse--
[newArrayList]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Lists.html#newArrayList--
[newArrayList(E...)]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Lists.html#newArrayList-E...-
[newArrayList(Iterable)]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Lists.html#newArrayList-java.lang.Iterable-
[newArrayListWithCapacity]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Lists.html#newArrayListWithCapacity-int-
[newArrayListWithExpectedSize]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Lists.html#newArrayListWithExpectedSize-int-
[newArrayList(Iterator)]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Lists.html#newArrayList-java.util.Iterator-
[newLinkedList]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Lists.html#newLinkedList--
[newLinkedList(Iterable)]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Lists.html#newLinkedList-java.lang.Iterable-
[`SetView`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.SetView.html
[`copyInto(Set)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.SetView.html#copyInto-S-
[`immutableCopy()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.SetView.html#immutableCopy--
[`union(Set, Set)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#union-java.util.Set-java.util.Set-
[`intersection(Set, Set)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#intersection-java.util.Set-java.util.Set-
[`difference(Set, Set)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#difference-java.util.Set-java.util.Set-
[`symmetricDifference(Set, Set)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#symmetricDifference-java.util.Set-java.util.Set-
[`cartesianProduct(List<Set>)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#cartesianProduct-java.util.List-
[`cartesianProduct(Set...)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#cartesianProduct-java.util.Set...-
[`powerSet(Set)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#powerSet-java.util.Set-
[newHashSet]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#newHashSet--
[newHashSet(E...)]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#newHashSet-E...-
[newHashSet(Iterable)]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#newHashSet-java.lang.Iterable-
[newHashSetWithExpectedSize]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#newHashSetWithExpectedSize-int-
[newHashSet(Iterator)]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#newHashSet-java.util.Iterator-
[newLinkedHashSet]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#newLinkedHashSet--
[newLinkedHashSet(Iterable)]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#newLinkedHashSet-java.lang.Iterable-
[newLinkedHashSetWithExpectedSize]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#newLinkedHashSetWithExpectedSize-int-
[newTreeSet]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#newTreeSet--
[newTreeSet(Comparator)]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#newTreeSet-java.util.Comparator-
[newTreeSet(Iterable)]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Sets.html#newTreeSet-java.lang.Iterable-
[`Maps.uniqueIndex(Iterable, Function)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html#uniqueIndex-java.lang.Iterable-com.google.common.base.Function-
[`Maps.difference(Map, Map)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html#difference-java.util.Map-java.util.Map-
[`entriesInCommon()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/MapDifference.html#entriesInCommon--
[`entriesDiffering()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/MapDifference.html#entriesDiffering--
[`MapDifference.ValueDifference`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/MapDifference.ValueDifference.html
[`entriesOnlyOnLeft()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/MapDifference.html#entriesOnlyOnLeft--
[`entriesOnlyOnRight()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/MapDifference.html#entriesOnlyOnRight--
[`synchronizedBiMap(BiMap)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html#synchronizedBiMap-com.google.common.collect.BiMap-
[`unmodifiableBiMap(BiMap)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html#unmodifiableBiMap-com.google.common.collect.BiMap-
[newHashMap]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html#newHashMap--
[newHashMap(Map)]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html#newHashMap-java.util.Map-
[newHashMapWithExpectedSize]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html#newHashMapWithExpectedSize-int-
[newLinkedHashMap]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html#newLinkedHashMap--
[newLinkedHashMap(Map)]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html#newLinkedHashMap-java.util.Map-
[newTreeMap]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html#newTreeMap--
[newTreeMap(Comparator)]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html#newTreeMap-java.util.Comparator-
[newTreeMap(SortedMap)]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html#newTreeMap-java.util.SortedMap-
[newEnumMap(Class)]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html#newEnumMap-java.lang.Class-
[newEnumMap(Map)]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html#newEnumMap-java.util.Map-
[newConcurrentMap]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html#newConcurrentMap--
[newIdentityHashMap]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Maps.html#newIdentityHashMap--
[`containsOccurrences(Multiset sup, Multiset sub)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multisets.html#containsOccurrences-com.google.common.collect.Multiset-com.google.common.collect.Multiset-
[`removeOccurrences(Multiset removeFrom, Multiset toRemove)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multisets.html#removeOccurrences-com.google.common.collect.Multiset-com.google.common.collect.Multiset-
[`retainOccurrences(Multiset removeFrom, Multiset toRetain)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multisets.html#retainOccurrences-com.google.common.collect.Multiset-com.google.common.collect.Multiset-
[`intersection(Multiset, Multiset)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multisets.html#intersection-com.google.common.collect.Multiset-com.google.common.collect.Multiset-
[`copyHighestCountFirst(Multiset)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multisets.html#copyHighestCountFirst-com.google.common.collect.Multiset-
[`unmodifiableMultiset(Multiset)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multisets.html#unmodifiableMultiset-com.google.common.collect.Multiset-
[`unmodifiableSortedMultiset(SortedMultiset)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multisets.html#unmodifiableSortedMultiset-com.google.common.collect.SortedMultiset-
[`Multimaps.index(Iterable, Function)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#index-java.lang.Iterable-com.google.common.base.Function-
[`invertFrom(Multimap toInvert, Multimap dest)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#invertFrom-com.google.common.collect.Multimap-M-
[`ImmutableMultimap.inverse()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableMultimap.html#inverse--
[`forMap(Map)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#forMap-java.util.Map-
[`unmodifiableMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#unmodifiableMultimap-com.google.common.collect.Multimap-
[`unmodifiableListMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#unmodifiableListMultimap-com.google.common.collect.ListMultimap-
[`unmodifiableSetMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#unmodifiableSetMultimap-com.google.common.collect.SetMultimap-
[`unmodifiableSortedSetMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#unmodifiableSortedSetMultimap-com.google.common.collect.SortedSetMultimap-
[`synchronizedMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#synchronizedMultimap-com.google.common.collect.Multimap-
[`synchronizedListMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#synchronizedListMultimap-com.google.common.collect.ListMultimap-
[`synchronizedSetMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#synchronizedSetMultimap-com.google.common.collect.SetMultimap-
[`synchronizedSortedSetMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#synchronizedSortedSetMultimap-com.google.common.collect.SortedSetMultimap-
[`newMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#newMultimap-java.util.Map-com.google.common.base.Supplier-
[`newListMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#newListMultimap-java.util.Map-com.google.common.base.Supplier-
[`newSetMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#newSetMultimap-java.util.Map-com.google.common.base.Supplier-
[`newSortedSetMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#newSortedSetMultimap-java.util.Map-com.google.common.base.Supplier-
[`Tables.newCustomTable(Map, Supplier<Map>)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Tables.html#newCustomTable-java.util.Map-com.google.common.base.Supplier-
[`transpose(Table<R, C, V>)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Tables.html#transpose-com.google.common.collect.Table-
[`ImmutableTable`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableTable.html
[`unmodifiableTable`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Tables.html#unmodifiableTable-com.google.common.collect.Table-
[`unmodifiableRowSortedTable`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Tables.html#unmodifiableRowSortedTable-com.google.common.collect.RowSortedTable-
