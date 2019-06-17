# Null-hostile collections (Null 不友好集合类)

许多JDK集合类型允许空元素：

*   `ArrayList`
*   `LinkedList`
*   `Hash{Set,Map}`
*   `LinkedHash{Set,Map}`
*   `Tree{Set,Map}` (with suitable comparator)
*   `IdentityHashMap`
*   `EnumMap` (values)
*   `CopyOnWriteArray{List,Set}`

但是很多不允许:

*   `EnumSet`
*   `EnumMap` (keys)
*   `ConcurrentHashMap`
*   `ConcurrentSkipList{Set,Map}`
*   除`LinkedList`之外的所有十个`Queue`实现

同样，在Guava中，我们有许多允许空值的通用集合：

*   `ArrayListMultimap`
*   `HashBiMap`
*   `HashMulti{set,map}`
*   `LinkedHashMulti{set,map}`
*   `TreeMulti{set,map}` (with suitable comparator)
*   `LinkedListMultimap`
*   `MutableClassToInstanceMap`
*   `HashBasedTable`
*   `Sets.union/intersection/difference`

但是也有很多不允许:

*   `ConcurrentHashMultiset`
*   `EnumBiMap`
*   `EnumMultiset`
*   `MinMaxPriorityQueue`
*   `Interners`
*   `MapMaker`-made maps
*   `Sets.cartesianProduct/powerSet`
*   `ImmutableCollection` 和 `ImmutableMap`的所有实现

# But what if?

如果您发现自己想要将一个null元素放入这些对null怀有敌意的对象之一，该怎么办?

*   如果在集合中(Set)或作为映射中(Map)的键--不要；如果在查找操作期间显式地使用大小写为null，则更清楚（不那么令人惊讶）I
*   如果作为Map的一个值 -- 去掉那一项;保持一组独立的非空键(或空键null keys)
*   如果在一个List中 -- 如果列表是稀疏的，您是否愿意使用`Map<Integer,E>`?
*   考虑是否有一个自然的“空对象null object”可以使用。没有永远。
    *   例子: 如果它是enum，添加一个常量(constant)来表示你期望null在这里表示的任何含义。
*   只需使用不同的集合实现，例如`Collections.unmodifiableList(Lists.newArrayList())`而不是`ImmutableList`。
*   屏蔽null值(这需要更多细节)
*   使用 `Optional<T>`

See also: [using and avoiding null].

[using and avoiding null]: UsingAndAvoidingNullExplained
