# New Collection Types 新集合类型

Guava引入了许多新的集合类型，这些类型不在JDK中，但是我们发现它们非常有用。
这些都是为了与JDK集合框架和谐共存而设计的，而不是把东西硬塞进JDK集合抽象中。

一般来说，Guava集合实现非常精确地遵循JDK接口契约。

## Multiset 多集

例如，计算一个单词在文档中出现的次数的传统Java习语是这样的:

```java
Map<String, Integer> counts = new HashMap<String, Integer>();
for (String word : words) {
  Integer count = counts.get(word);
  if (count == null) {
    counts.put(word, 1);
  } else {
    counts.put(word, count + 1);
  }
}
```

这很尴尬，容易出错，而且不支持收集各种有用的统计数据，比如单词总数。我们可以做得更好。

Guava提供了一个新的集合类型[`Multiset`]，它支持添加多个元素。Wikipedia在数学中定义了一个多集，
它是"集合概念的泛化，其中成员可以出现多次...在多集合中(multisets)，与在集合中以及与元组相反，元素的顺序是无关的:
多集{a, a, b}和{a, b, a}是相等的。"

对此有两种主要的看法:

*   这就像一个没有排序约束的`ArrayList<E>`:排序无关紧要。
*   这就像一个`Map<E, Integer>`，包含元素和计数。

Guava的`Multiset`API结合了对`Multiset`的两种思考方式，如下:

*   当作为普通的`Collection`处理时，`Multiset`的行为很像无序的`ArrayList`:
    *   调用 `add(E)` 添加给定元素的单个出现项.
    *   Multiset的`iterator()`遍历每个元素的每次出现。
    *   Multiset的`size()`是所有元素出现的总数。
*   额外的查询操作，以及性能特征，就像您期望从`Map<E, Integer>`中得到的一样。
    *   `count(Object)` 返回与该元素关联的计数。对于`HashMultiset`，count是O(1)，对于`TreeMultiset`，count是O(log n)，等等。
    *   `entrySet()` 返回一个`Set<Multiset.Entry<E>>`，其工作原理类似于`Map`的entrySet。
    *   `elementSet()` 返回multiset不同元素的`Set<E>` ，如`Map`的`keySet()`。
    *   `Multiset`实现的内存消耗在不同元素的数量(即去重元素的数量)上是线性的。

值得注意的是，`Multiset`完全符合`Collection`接口的约定，除了在JDK本身有先例的极少数情况下 
-- 具体来说，`TreeMultiset`(比如`TreeSet`)使用比较来表示相等，而不是`Object.equals`。
特别是，`Multiset.addAll(Collection)`为每次出现的`Collection`中的每个元素添加一个出现项，
这比上面的`Map`方法所要求的for循环要方便得多。

Method               | Description
:------------------- | :----------
[`count(E)`]         | 计算已添加到此multiset的元素的出现次数。
[`elementSet()`]     | 将`Multiset<E>`的不同元素视为`Set<E>`.
[`entrySet()`]       | 与`Map.entrySet()`类似，返回一个`Set<Multiset.Entry<E>>`，包含支持获取条目`getElement()` 和 `getCount()`。
[`add(E, int)`]      | 添加指定元素的指定出现次数。
[`remove(E, int)`]   | 移除指定元素的指定出现次数。
[`setCount(E, int)`] | 将指定元素的出现次数设置为指定的非负值。
`size()`             | 返回`Multiset`中所有元素出现的总数。

### Multiset Is Not A Map

注意，`Multiset<E>` _不_ 是`Map<E, Integer>`，尽管这可能是`Multiset`实现的一部分。
`Multiset`是真正的`Collection`类型，满足所有相关的契约义务。其他显著差异包括:

*   `Multiset<E>`只有计数为正的元素。任何元素都不能有负数计数，计数为`0`的值被认为不属于多集。
    它们不会出现在`elementSet()`或`entrySet()`视图中。
*   `multiset.size()`返回集合的大小，它等于所有元素的计数之和。对于不同元素的数量，
    使用`elementSet().size()`。(例如，`add(E)`将`multiset.size()`增加1。)
*   `multiset.iterator()`遍历每个元素的每次出现，因此迭代的长度等于`multiset.size()`。
*   `Multiset<E>`支持添加元素、删除元素或直接设置元素数量。`setCount(elem, 0)`等价于删除所有出现的该元素。
*   `multiset.count(elem)` 对于不在multiset中的元素，总是返回`0`。

### Implementations 实现

Guava提供了许多`Multiset`的实现，这些实现与JDK map实现 *大致* 对应。

Map                 | Corresponding Multiset     | Supports `null` elements
:------------------ | :------------------------- | :-----------------------
`HashMap`           | [`HashMultiset`]           | Yes
`TreeMap`           | [`TreeMultiset`]           | Yes
`LinkedHashMap`     | [`LinkedHashMultiset`]     | Yes
`ConcurrentHashMap` | [`ConcurrentHashMultiset`] | No
`ImmutableMap`      | [`ImmutableMultiset`]      | No

### SortedMultiset

[`SortedMultiset`]是`Multiset`接口的一个变体，它支持在指定范围内有效地获取子多集。例如，您可以使用
`latencies.subMultiset(0, BoundType.CLOSED, 100, BoundType.OPEN).size()`来确定您的站点有多少次点击延迟低于100ms，

`TreeMultiset`实现了`SortedMultiset`接口。在编写本文时，`ImmutableSortedMultiset`仍然在测试GWT兼容性。

## Multimap

每个有经验的Java程序员都曾在某个时候实现过`Map<K, List<V>>` 或 `Map<K, Set<V>>`，并处理过这种结构的笨拙性.
例如，`Map<K, Set<V>>`是表示无标记有向图的一种典型方法。Guava的[`Multimap`]框架使处理键到多个值的映射变得很容易。
`Multimap`是将键与任意多个值关联的一种通用方法。

有两种方法可以从概念上理解Multimap:
从单个键到单个值的映射集合:

```
a -> 1
a -> 2
a -> 4
b -> 3
c -> 5
```

或作为从唯一键到值集合的映射:

```
a -> [1, 2, 4]
b -> [3]
c -> [5]
```

一般来说，`Multimap`接口最好考虑第一个视图，但是允许您使用`asMap()` 视图以任何一种方式查看它，
该视图返回一个`Map<K, Collection<V>>`,最重要的是，没有映射到空集合的键:键要么映射到至少一个值，要么根本不存在于`Multimap`中。

但是，您很少直接使用`Multimap`接口;更常见的情况是使用`ListMultimap` 或 `SetMultimap`，它们分别将键映射到`List` 或 `Set`。

### Construction 构造函数

创建`Multimap`最直接的方法是使用[`MultimapBuilder`]，它允许您配置如何表示键和值。例如:

```java
// creates a ListMultimap with tree keys and array list values
ListMultimap<String, Integer> treeListMultimap =
    MultimapBuilder.treeKeys().arrayListValues().build();

// creates a SetMultimap with hash keys and enum set values
SetMultimap<Integer, MyEnum> hashEnumMultimap =
    MultimapBuilder.hashKeys().enumSetValues(MyEnum.class).build();
```

您也可以选择直接在实现类上使用 `create()`方法，但是不建议使用`MultimapBuilder`方法。

### Modifying 修改

[`Multimap.get(key)`]返回与指定键关联的值的*view*，即使当前没有。对于一个`ListMultimap`，
它返回一个`List`，对于一个`SetMultimap`，它返回一个`Set`。

修改写入底层的`Multimap`。例如,

```java
Set<Person> aliceChildren = childrenMultimap.get(alice);
aliceChildren.clear();
aliceChildren.add(bob);
aliceChildren.add(carol);
```
写入底层的multimap。

修改多multimap的其他方法(更直接)包括:

Signature                         | Description                                                                                                                                                                                                           | Equivalent
:-------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------
[`put(K, V)`]                     | 添加从键到值的关联。                                                                                                                                                                        | `multimap.get(key).add(value)`
[`putAll(K, Iterable<V>)`]        |依次添加从键到每个值的关联。                                                                                                                                                         | `Iterables.addAll(multimap.get(key), values)`
[`remove(K, V)`]                  | 从`key`到`value`删除一个关联，如果multimap更改，则返回`true`。  | `multimap.get(key).remove(value)`
[`removeAll(K)`]                  | 删除并返回与指定键关联的所有值。返回的集合可以修改，也可以不修改，但修改它不会影响multimap。（返回适当的集合类型。） | `multimap.get(key).clear()`
[`replaceValues(K, Iterable<V>)`] | 清除与`key`关联的所有值，并将`key`设置为与每个`values`关联。返回以前与键关联的值。        | `multimap.get(key).clear(); Iterables.addAll(multimap.get(key), values)`

### Views

`Multimap`还支持许多强大的视图。

*   [`asMap`]将任何`Multimap<K, V>`作为`Map<K, Collection<V>>`。返回的映射支持`remove`，并对返回的集合进行了写入更改，
    但该映射不支持`put` 或 `putAll`。最关键的是，当需要对不存在的键（而不是新的可写空集合）使用`null`时，可以使用`asMap().get(key)`。
    （您可以并且应该将`asMap.get(key)`强制转换为适当的集合类型 -- 对于`SetMultimap`为`Set`，对于`ListMultimap`为`List` 
    -- 但是类型系统不允许`ListMultimap`在此处返回`Map<K, List<V>>`）。
*   [`entries`]查看`Multimap`中所有条目的`Collection<Map.Entry<K, V>>`。（对于`SetMultimap`，这是`Set`）。
*   [`keySet`] 将`Multimap`中的非重复键作为`Set`查看.
*   [`keys`] 将`Multimap`的键作为`Multiset`查看，其重数等于与该键关联的值的数目。元素可以从`Multiset`中删除，但不能添加；更改将写入。
*   [`values()`] 将`Multimap`中的所有值视为“扁平”的`Collection<V>`，所有值均为一个集合。
    这类似于`Iterables.concat(multimap.asMap().values())`，但返回一个完整的`Collection`。

### Multimap Is Not A Map

一个`Multimap<K, V>` *不是* 一个`Map<K, Collection<V>>`，尽管这样的映射可能在一个`Multimap`实现中使用。显著的差异包括:

*   `Multimap.get(key)` 总是返回一个non-null的，可能是空(empty)的集合。这并不意味着multimap
    花费与键关联的任何内存，相反，返回的集合是一个视图，允许您添加与键关联(如果您愿意)。
*   如果您更喜欢对不在multimap中的键返回`null`的类似于Map`的行为，请使用`asMap()`视图来获得一个`Map<K,Collection<V>>`。
    (或者，要从一个ListMultimap`中获得一个`Map<K,`**`List`**`<V>>`，可以使用静态[`Multimaps.asMap()`]方法。
    类似的方法也适用于`SetMultimap` 和 `SortedSetMultimap`。)
*   当且仅当有与指定键关联的任何元素时，`Multimap.containsKey(key)`为真。特别是，如果键`k`以前与一个或多个值相关联，
    而这些值后来已从multimap中删除，则`Multimap.containsKey(k)`将返回false。
*   `Multimap.entries()` 返回`Multimap`中所有键的所有条目。如果您想要所有的键集合(key-collection)条目，请使用`asMap().entrySet()`。
*   `Multimap.size()` 返回整个multimap中的条目数量，而不是不同键的数量。使用`Multimap.keySet().size()`来获得不同键的数量。

### Implementations

`Multimap`提供了多种多样的实现。你可以在大多数地方使用它，你可以使用一个`Map<K, Collection<V>>`。

Implementation             | Keys behave like... | Values behave like..
:------------------------- | :------------------ | :-------------------
[`ArrayListMultimap`]      | `HashMap`           | `ArrayList`
[`HashMultimap`]           | `HashMap`           | `HashSet`
[`LinkedListMultimap`] `*` | `LinkedHashMap``*`  | `LinkedList``*`
[`LinkedHashMultimap`]`**` | `LinkedHashMap`     | `LinkedHashSet`
[`TreeMultimap`]           | `TreeMap`           | `TreeSet`
[`ImmutableListMultimap`]  | `ImmutableMap`      | `ImmutableList`
[`ImmutableSetMultimap`]   | `ImmutableMap`      | `ImmutableSet`

除了不可变的(immutable)实现之外，每个实现都支持null键和值。

`*` `LinkedListMultimap.entries()` 保留非互异键值之间的迭代顺序。有关详细信息，请参见链接。

`**` `LinkedHashMultimap` 保留项的插入顺序、键的插入顺序以及与任何一个键关联的值集。

请注意，并非所有的实现实际上都是以`Map<K,Collection<V>>`的形式实现的，并带有列出的实现！
（特别是，一些`Multimap`实现使用自定义哈希表(hash tables)来最小化开销。）

如果需要更多的自定义，请使用[`Multimaps.newMultimap(Map,Supplier<Collection>)`]
或[list][newListMultimap] 和 [set][newSetMultimap]版本使用自定义collection, list, 或 set实现来备份multimap。

## BiMap

将值映射回键的传统方法是维护两个单独的映射并使它们保持同步，但这很容易出现错误，并且当映射中已经存在一个值时，可能会变得非常混乱。例如：

```java
Map<String, Integer> nameToId = Maps.newHashMap();
Map<Integer, String> idToName = Maps.newHashMap();

nameToId.put("Bob", 42);
idToName.put(42, "Bob");
// what happens if "Bob" or 42 are already present?
// weird bugs can arise if we forget to keep these in sync...
```

一个[`BiMap<K, V>`]是一个`Map<K, V>`,它

*   允许您使用[`inverse()`]查看 "inverse(逆)" `BiMap<V, K>`
*   确保值是唯一的，使[`values()`][BiMap.values] 为一个 `Set`

`BiMap.put(key, value)`如果试图将某个键映射到已经存在的值，则会抛出一个`IllegalArgumentException`。
如果要删除任何具有指定值的先前存在的条目，请改用[`BiMap.forcePut(key, value)`]。

```java
BiMap<String, Integer> userId = HashBiMap.create();
...

String userForId = userId.inverse().get(id);
```

### Implementations

Key-Value Map Impl | Value-Key Map Impl | Corresponding `BiMap`
:----------------- | :----------------- | :--------------------
`HashMap`          | `HashMap`          | [`HashBiMap`]
`ImmutableMap`     | `ImmutableMap`     | [`ImmutableBiMap`]
`EnumMap`          | `EnumMap`          | [`EnumBiMap`]
`EnumMap`          | `HashMap`          | [`EnumHashBiMap`]

*Note:* 像`synchronizedBiMap`这样的`BiMap`实用程序在[`Maps`]中运行。

## Table

```java
Table<Vertex, Vertex, Double> weightedGraph = HashBasedTable.create();
weightedGraph.put(v1, v2, 4);
weightedGraph.put(v1, v3, 20);
weightedGraph.put(v2, v3, 5);

weightedGraph.row(v1); // returns a Map mapping v2 to 4, v3 to 20
weightedGraph.column(v3); // returns a Map mapping v1 to 20, v2 to 5
```

通常，当您尝试一次索引多个键时，您将得到类似于`Map<FirstName, Map<LastName, Person>>`这样的内容，使用起来既难看又笨拙。
Guava提供了一个新的集合类型[`Table`]，它支持任何"行row"类型和"列column"类型的用例。`Table`支持多个视图，允许您从任何角度使用数据，包括:

*   [`rowMap()`], 它将`Table<R, C, V>`视为`Map<R, Map<C, V>>`。类似地，[`rowKeySet()`]返回一个`Set<R>`。
*   [`row(r)`] 返回一个non-null  `Map<C, V>`。对`Map`的写入将直接写入底层的`Table`。 
*   提供了类似的列方法:[`columnMap()`], [`columnKeySet()`],和[`column(c)`]。(基于列的访问比基于行的访问效率稍低。)
*   [`cellSet()`]以一组[`Table.Cell<R, C,V>`]返回`Table`的视图。`Cell` 与`Map.Entry`非常相似，但可区分行键和列键。

提供了几个`Table` 实现，包括：

*   [`HashBasedTable`], 它本质上是由一个`HashMap<R, HashMap<C,V>>`支持的。
*   [`TreeBasedTable`], 它本质上是由一个`TreeMap<R, TreeMap<C,V>>`支持的.
*   [`ImmutableTable`]
*   [`ArrayTable`], 它要求在构建时指定完整的行和列，但是在表比较密集时，它由一个二维数组支持，以提高速度和内存效率。
    `ArrayTable`的工作原理与其他实现略有不同;有关详细信息，请参考Javadoc。

## ClassToInstanceMap

有时候，映射键并不都是相同的类型:它们 *是* 类型，您希望将它们映射到该类型的值。Guava为此提供了[`ClassToInstanceMap`]。

除了扩展`Map`接口之外，`ClassToInstanceMap`还提供了[`T getInstance(Class<T>)`] 和 [`T putInstance(Class<T>, T)`]方法，
这消除了强制类型安全时不愉快的强制转换的需要。

`ClassToInstanceMap`只有一个类型参数，通常名为`B`，表示映射管理的类型的上限。例如:

```java
ClassToInstanceMap<Number> numberDefaults = MutableClassToInstanceMap.create();
numberDefaults.putInstance(Integer.class, Integer.valueOf(0));
```

从技术上讲，`ClassToInstanceMap<B>`实现了`Map<Class<? extends B>, B>`
-- 换句话说,从B的子类映射到B,这可以使泛型类型实例参与`ClassToInstanceMap`让人困惑,
但只要记住`B`总是上限的(upper bound)类型映射 -- 通常,`B`是`Object`。

Guava提供了名为[`MutableClassToInstanceMap`] 和 [`ImmutableClassToInstanceMap`]的有用实现。

**重要**: 与任何其他`Map<Class, Object>`一样，`ClassToInstanceMap`可能包含原始类型的条目，而原始类型及其对应的包装器类型可能映射到不同的值。

## RangeSet

`RangeSet`描述了一组*断开连接的,非空的(disconnected, nonempty)*范围。当向可变的`RangeSet`
添加一个范围时，任何连接的范围都会合并在一起，而空范围将被忽略。例如:

```java
   RangeSet<Integer> rangeSet = TreeRangeSet.create();
   rangeSet.add(Range.closed(1, 10)); // {[1, 10]}
   rangeSet.add(Range.closedOpen(11, 15)); // disconnected range: {[1, 10], [11, 15)}
   rangeSet.add(Range.closedOpen(15, 20)); // connected range; {[1, 10], [11, 20)}
   rangeSet.add(Range.openClosed(0, 0)); // empty range; {[1, 10], [11, 20)}
   rangeSet.remove(Range.open(5, 10)); // splits [1, 10]; {[1, 5], [10, 10], [11, 20)}
```

请注意，要合并`Range.closed(1, 10)`和`Range.closedOpen(11,15)`这样的范围(ranges)，
必须首先使用[`Range.canonical(DiscreteDomain)`]对范围进行预处理，例如使用`DiscreteDomain.integers()`。

**注意**: 在GWT和JDK 1.5的后端端口中都不支持`RangeSet`；`RangeSet`要求充分使用JDK 1.6中的`NavigableMap`功能。

### Views

`RangeSet` 实现支持非常广泛的视图，包括：

*   `complement()`: 查看`RangeSet`的补码。`complement`也是一个`RangeSet`，因为它包含断开连接的非空(nonempty)范围。
*   `subRangeSet(Range<C>)`: 返回`RangeSet`与指定的`Range`交集的视图。这概括了传统排序集合的`headSet`、`subSet`、和 `tailSet`视图。
*   `asRanges()`: 将`RangeSet`视为可以迭代的`Set<Range<C>>`。
*   `asSet(DiscreteDomain<C>)` (`ImmutableRangeSet` only): 将`RangeSet<C>`视为`ImmutableSortedSet<C>`，查看范围中的元素而不是范围本身。(如果`DiscreteDomain`和`RangeSet`都是上面无界或下面无界的，则不支持此操作。)

### Queries

除了对视图进行操作外，`RangeSet`还直接支持多个查询操作，其中最突出的有:

*   `contains(C)`: `RangeSet`上最基本的操作，查询`RangeSet`中的任何范围是否包含指定的元素。
*   `rangeContaining(C)`: 返回包含指定元素的`Range`，如果没有，则返回`null`。
*   `encloses(Range<C>)`: 足够直接地，测试`RangeSet`中的任何`Range`是否包含指定的范围。
*   `span()`: 返回`encloses`此`RangeSet`中每个区域的最小`Range`。

## RangeMap

`RangeMap`是一个集合类型，描述从独立的、非空的范围到值的映射。与`RangeSet`不同，
`RangeMap`从不"coalesces"相邻映射，即使相邻范围映射到相同的值。例如：

```java
RangeMap<Integer, String> rangeMap = TreeRangeMap.create();
rangeMap.put(Range.closed(1, 10), "foo"); // {[1, 10] => "foo"}
rangeMap.put(Range.open(3, 6), "bar"); // {[1, 3] => "foo", (3, 6) => "bar", [6, 10] => "foo"}
rangeMap.put(Range.open(10, 20), "foo"); // {[1, 3] => "foo", (3, 6) => "bar", [6, 10] => "foo", (10, 20) => "foo"}
rangeMap.remove(Range.closed(5, 11)); // {[1, 3] => "foo", (3, 5) => "bar", (11, 20) => "foo"}
```

### Views

`RangeMap` 提供两大视图:

*   `asMapOfRanges()`: 将`RangeMap`视为`Map<Range<K>, V>`。例如，这可以用于迭代`RangeMap`。 
*   `subRangeMap(Range<K>)` 将`RangeMap`与指定的`Range`的交集作为`RangeMap`查看。这概括了传统的`headMap`, `subMap`, 和 `tailMap`操作。

[`Multiset`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multiset.html
[`count(E)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multiset.html#count-java.lang.Object-
[`elementSet()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multiset.html#elementSet--
[`entrySet()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multiset.html#entrySet--
[`add(E, int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multiset.html#add-java.lang.Object-int-
[`remove(E, int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multiset.html#remove-java.lang.Object-int--
[`setCount(E, int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multiset.html#setCount-E-int-
[`HashMultiset`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/HashMultiset.html
[`TreeMultiset`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/TreeMultiset.html
[`LinkedHashMultiset`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/LinkedHashMultiset.html
[`ConcurrentHashMultiset`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ConcurrentHashMultiset.html
[`ImmutableMultiset`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableMultiset.html
[`SortedMultiset`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/SortedMultiset.html
[`Multimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimap.html
[`Multimap.get(key)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimap.html#get-K-
[`put(K, V)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimap.html#put-K-V-
[`putAll(K, Iterable<V>)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimap.html#putAll-K-java.lang.Iterable-
[`remove(K, V)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimap.html#remove-java.lang.Object-java.lang.Object-
[`removeAll(K)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimap.html#removeAll-java.lang.Object-
[`replaceValues(K, Iterable<V>)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimap.html#replaceValues-K-java.lang.Iterable-
[`asMap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimap.html#asMap--
[`entries`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimap.html#entries--
[`keySet`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimap.html#keySet--
[`keys`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimap.html#keys--
[`values()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimap.html#values--
[`MultimapBuilder`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/MultimapBuilder.html
[`Multimaps.asMap()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#asMap-com.google.common.collect.ListMultimap-
[`ArrayListMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ArrayListMultimap.html
[`HashMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/HashMultimap.html
[`LinkedListMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/LinkedListMultimap.html
[`LinkedHashMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/LinkedHashMultimap.html
[`TreeMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/TreeMultimap.html
[`ImmutableListMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableListMultimap.html
[`ImmutableSetMultimap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableSetMultimap.html
[`Multimaps.newMultimap(Map, Supplier<Collection>)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#newMultimap-java.util.Map-com.google.common.base.Supplier-
[newListMultimap]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#newListMultimap-java.util.Map-com.google.common.base.Supplier-
[newSetMultimap]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Multimaps.html#newSetMultimap-java.util.Map-com.google.common.base.Supplier-
[`BiMap<K, V>`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/BiMap.html
[`inverse()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/BiMap.html#inverse--
[BiMap.values]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/BiMap.html#values--
[`BiMap.forcePut(key, value)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/BiMap.html#forcePut-java.lang.Object-java.lang.Object-
[`HashBiMap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/HashBiMap.html
[`ImmutableBiMap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableBiMap.html
[`EnumBiMap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/EnumBiMap.html
[`EnumHashBiMap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/EnumHashBiMap.html
[`Maps`]: CollectionUtilitiesExplained#Maps
[`Table`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Table.html
[`rowMap()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Table.html#rowMap--
[`rowKeySet()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Table.html#rowKeySet--
[`row(r)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Table.html#row-R-
[`columnMap()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Table.html#columnMap--
[`columnKeySet()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Table.html#columnKeySet--
[`column(c)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Table.html#column-C-
[`cellSet()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Table.html#cellSet--
[`Table.Cell<R, C, V>`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Table.Cell.html
[`HashBasedTable`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/HashBasedTable.html
[`TreeBasedTable`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/TreeBasedTable.html
[`ImmutableTable`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableTable.html
[`ArrayTable`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ArrayTable.html
[`ClassToInstanceMap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ClassToInstanceMap.html
[`T getInstance(Class<T>)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ClassToInstanceMap.html#getInstance-java.lang.Class-
[`T putInstance(Class<T>, T)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ClassToInstanceMap.html#putInstance-java.lang.Class-java.lang.Object-
[`MutableClassToInstanceMap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/MutableClassToInstanceMap.html
[`ImmutableClassToInstanceMap`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableClassToInstanceMap.html
[`Range.canonical(DiscreteDomain)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#canonical-com.google.common.collect.DiscreteDomain-
