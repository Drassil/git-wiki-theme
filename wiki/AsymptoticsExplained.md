# Asymptotics

Guava效用的渐近线是完全可以预测的，但这里列出的完整性。

## `List`

Implementation               | `add`  | `add(i, elem)` | `remove(i)` | `contains` | Iteration | `size`
:--------------------------- | :----- | :------------- | :---------- | :--------- | :-------- | :-----
`ArrayList` (JDK)            | *O(1)* | *O(n)*         | *O(n)*      | *O(n)*     | *O(n)*    | *O(1)*
`LinkedList` (JDK)           | *O(1)* | *O(n)*         | *O(n)*      | *O(n)*     | *O(n)*    | *O(1)*
`CopyOnWriteArrayList` (JDK) | *O(n)* | *O(n)*         | *O(n)*      | *O(n)*     | *O(n)*    | *O(1)*
`ImmutableList`              | N/A    | N/A            | N/A         | *O(n)*     | *O(n)*    | *O(1)*
`ImmutableSet.asList()`      | N/A    | N/A            | N/A         | *O(1)*     | *O(n)*    | *O(1)*

## `Set`

Implementation              | `add`      | `remove`   | `contains` | Iteration      | `size`
:-------------------------- | :--------- | :--------- | :--------- | :------------- | :-----
`HashSet` (JDK)             | *O(1)*     | *O(1)*     | *O(1)*     | *O(max n)* `*` | *O(1)*
`LinkedHashSet` (JDK)       | *O(1)*     | *O(1)*     | *O(1)*     | *O(n)*         | *O(1)*
`TreeSet` (JDK)             | *O(log n)* | *O(log n)* | *O(log n)* | *O(n)*         | *O(1)* `**`
`CopyOnWriteArraySet` (JDK) | *O(n)*     | *O(n)*     | *O(n)*     | *O(n)*         | *O(1)*
`ImmutableSet`              | N/A        | N/A        | *O(1)*     | *O(n)*         | *O(1)*
`ImmutableSortedSet`        | N/A        | N/A        | *O(log n)* | *O(n)*         | *O(1)*

`*` `HashSet` 迭代所花费的时间与`HashSet`所拥有的最大元素数量成正比，而不是与当前元素数量成正比。

`**` `TreeSet.subSet(...).size()` 所需时间与子集的大小成正比。

## `Multiset`

备注: *n* 是multiset中 **distinct(去重)** 元素的数量.

Implementation            | Performs like a...                    | `size()`    | `count(E)` | `add(E, int)` | `remove(E, int)` | `setCount(E, int)` | Iterate through `entrySet()` or `elementSet()`
:------------------------ | :------------------------------------ | :---------- | :--------- | :------------ | :--------------- | :----------------- | :---------------------------------------------
`HashMultiset`            | `HashMap<E, Integer>`                 | *O(1)*      | *O(1)*     | *O(1)*        | *O(1)*           | *O(1)*             | *O(max n)* `*`
`LinkedHashMultiset`      | `LinkedHashMap<E, Integer>`           | *O(1)*      | *O(1)*     | *O(1)*        | *O(1)*           | *O(1)*             | *O(n)*
`TreeMultiset`            | `TreeMap<E, Integer>`                 | *O(1)* `**` | *O(log n)* | *O(log n)*    | *O(log n)*       | *O(log n)*         | *O(n)*
`ConcurrentHashMultiset`  | `ConcurrentHashMap<E, AtomicInteger>` | *O(n)*      | *O(1)*     | *O(1)*        | *O(1)*           | *O(1)*             | *O(n)*
`ImmutableMultiset`       | `ImmutableMap<E, Integer>`            | *O(1)*      | *O(1)*     | *O(1)*        | *O(1)*           | *O(1)*             | *O(n)*
`ImmutableSortedMultiset` | `ImmutableSortedMap<E, Integer>`      | *O(1)*      | *O(log n)* | *O(log n)*    | *O(log n)*       | *O(log n)*         | *O(n)*

`*` 类似 `HashMap`, 通过`entrySet`的迭代成本在`HashMultiset`曾经拥有的最大元素数量上是线性的，而不是现在拥有的元素数量。


`**` `TreeMultiset.subMultiset().size()` 耗时 *O(log n)*.

## `Multimap`

`k` 是非重keys的数量; `n` 是非重复条目(entries)的数量;
`#(key)`是与`key`关联的条目数。 如果没有指定，则渐近线等价于基于“performance like a…”列的“obvious”实现。

Implementation          | Performs like a...                   | `size()` | `get(K)`   | `put(K, V)`               | `containsEntry(K, V)`     | Iterate through `entries()` | Iterate through `asMap().entrySet()`
:---------------------- | :----------------------------------- | :------- | :--------- | :------------------------ | :------------------------ | :-------------------------- | :-----------------------------------
`ArrayListMultimap`     | `HashMap<K, ArrayList<V>>`           | *O(1)*   | *O(1)*     | *O(1)*                    | *O(`#(key)`)*             | *O(max k + n)*              | *O(max k)*
`LinkedListMultimap`    | `LinkedHashMap<K, LinkedList<V>>`    | *O(1)*   | *O(1)*     | *O(1)*                    | *O(`#(key)`)*             | *O(n)*                      | *O(k)*
`HashMultimap`          | `HashMap<K, HashSet<V>>`             | *O(1)*   | *O(1)*     | *O(1)*                    | *O(1)*                    | *O(max n)*                  | *O(max k)*
`LinkedHashMultimap`    | `LinkedHashMap<K, LinkedHashSet<V>>` | *O(1)*   | *O(1)*     | *O(1)*                    | *O(1)*                    | *O(n)*                      | *O(k)*
`TreeMultimap`          | `TreeMap<K, TreeSet<V>>`             | *O(1)*   | *O(log k)* | *O(log k + log `#(key)`)* | *O(log k + log `#(key)`)* | *O(n)*                      | *O(k)*
`ImmutableListMultimap` | `ImmutableMap<K, ImmutableList<V>>`  | *O(1)*   | *O(1)*     | N/A                       | *O(#(key))*               | *O(n)*                      | *O(k)*
`ImmutableSetMultimap`  | `ImmutableMap<K, ImmutableSet<V>>`   | *O(1)*   | *O(1)*     | N/A                       | *O(1)*                    | *O(n)*                      | *O(k)*
