# Ranges

## 例子

```java
List<Double> scores;
Iterable<Double> belowMedianScores = Iterables.filter(scores, Range.lessThan(median));
...
Range<Integer> validGrades = Range.closed(1, 12);
for(int grade : ContiguousSet.create(validGrades, DiscreteDomain.integers())) {
  ...
}
```

## 介绍

范围(range,有时称为区间interval)是特定域的凸(非正式地称为"contiguous"或"unbroken")部分。形式上，
凹凸性意味着对于任何`a <= b <= c`， `range.contains(a) && range.contains(c)`意味着`range.contains(b)`。

范围可以"扩展到无穷大extend to infinity" -- 例如，范围`x > 3`包含任意大的值 -- 或者可能受到有限的约束，例如`2 <= x < 5`。
我们将使用更紧凑的符号，熟悉的程序员与数学背景:

*   `(a..b) = {x | a < x < b}`
*   `[a..b] = {x | a <= x <= b}`
*   `[a..b) = {x | a <= x < b}`
*   `(a..b] = {x | a < x <= b}`
*   `(a..+∞) = {x | x > a}`
*   `[a..+∞) = {x | x >= a}`
*   `(-∞..b) = {x | x < b}`
*   `(-∞..b] = {x | x <= b}`
*   `(-∞..+∞) = all values`

上面使用的值a和b称为端点。为了提高一致性，Guava的`Range`概念要求上端点不能小于下端点。
只有当至少一个边界关闭时，端点才可能相等:

*   `[a..a]`: 单例对象范围singleton range
*   `[a..a); (a..a]`: 空的,但是有效
*   `(a..a)`: 无效

Guava中的range类型为[`Range<C>`][Range]。所有的ranges都是*immutable 不可变的*。

## Building Ranges

Ranges可以通过[`Range`][Range]上的静态方法得到:

Range type | Method
:--------- | :-------------------
`(a..b)`   | [`open(C, C)`]
`[a..b]`   | [`closed(C, C)`]
`[a..b)`   | [`closedOpen(C, C)`]
`(a..b]`   | [`openClosed(C, C)`]
`(a..+∞)`  | [`greaterThan(C)`]
`[a..+∞)`  | [`atLeast(C)`]
`(-∞..b)`  | [`lessThan(C)`]
`(-∞..b]`  | [`atMost(C)`]
`(-∞..+∞)` | [`all()`]

```java
Range.closed("left", "right"); // all strings lexographically between "left" and "right" inclusive
Range.lessThan(4.0); // double values strictly less than 4
```

此外，Range实例可以通过显式传递绑定类型来构造:

Range type                                   | Method
:------------------------------------------- | :-----
Bounded on both ends                         | [`range(C, BoundType, C, BoundType)`]
Unbounded on top (`(a..+∞)` or `[a..+∞)`)    | [`downTo(C, BoundType)`]
Unbounded on bottom (`(-∞..b)` or `(-∞..b]`) | [`upTo(C, BoundType)`]

此处, [`BoundType`] 是一个枚举类包含的值有 `CLOSED` 和 `OPEN`.

```java
Range.downTo(4, boundType); // allows you to decide whether or not you want to include 4
Range.range(1, CLOSED, 4, OPEN); // another way of writing Range.closedOpen(1, 4)
```

## Operations

`Range`的基本操作是它的[`contains(C)`]方法，它的行为与您期望的完全相同。
此外，`Range`可以用作`Predicate`，并用于[functional idioms](functional)。任何`Range`也支持`containsAll(Iterable<? extends C>)`。

```java
Range.closed(1, 3).contains(2); // returns true
Range.closed(1, 3).contains(4); // returns false
Range.lessThan(5).contains(5); // returns false
Range.closed(1, 4).containsAll(Ints.asList(1, 2, 3)); // returns true
```

### Query Operations 查询操作

要查看range的端点，`Range`公开了以下方法:

*   [`hasLowerBound()`] 和 [`hasUpperBound()`], 它检查范围是否具有指定的端点，或者"通向无穷大"。
*   [`lowerBoundType()`] 和 [`upperBoundType()`] 返回对应端点的`BoundType`，该端点可以是`CLOSED` 或 `OPEN`。
    如果这个range没有指定的端点，该方法将抛出一个`IllegalStateException`。
*   [`lowerEndpoint()`] 和 [`upperEndpoint()`] 返回指定端点，如果range没有指定端点，则抛出`IllegalStateException`。
*   [`isEmpty()`] 测试range是否为空，也就是说，它的形式是`[a,a)` 或 `(a,a]`。


```java
Range.closedOpen(4, 4).isEmpty(); // returns true
Range.openClosed(4, 4).isEmpty(); // returns true
Range.closed(4, 4).isEmpty(); // returns false
Range.open(4, 4).isEmpty(); // Range.open throws IllegalArgumentException

Range.closed(3, 10).lowerEndpoint(); // returns 3
Range.open(3, 10).lowerEndpoint(); // returns 3
Range.closed(3, 10).lowerBoundType(); // returns CLOSED
Range.open(3, 10).upperBoundType(); // returns OPEN
```

### Interval Operations 区间操作

#### `encloses` (范围包含)

范围上最基本的关系是`encloses(Range)`]，如果内部范围的界限不超出外部范围，则为真。这完全取决于端点之间的比较！

*   `[3..6]` encloses `[4..5]`
*   `(3..6)` encloses `(3..6)`
*   `[3..6]` encloses `[4..4)` (即使后者是空的)
*   `(3..6]` does not enclose `[3..6]`
*   `[4..5]` does not enclose `(3..6)` **尽管它包含后一个range包含的所有值**，但是使用离散域可以解决这个问题(参见下面)
*   `[3..6]` does not enclose `(1..1]` **即使它包含后一个范围包含的所有值**

`encloses` 是一个 [partial ordering].

鉴于此，`Range`提供以下操作：

#### `isConnected`

[`Range.isConnected(Range)`], 测试这些范围是否 *connected 连接* 。具体来说，`isConnected`测试是否存在由这两个范围包围的某个范围，
但这等价于数学上的定义，即范围的并集必须形成一个连接集(除非在特殊情况下为空范围)。

`isConnected` 是一个 [reflexive], [symmetric][] [relation].

```java
Range.closed(3, 5).isConnected(Range.open(5, 10)); // returns true
Range.closed(0, 9).isConnected(Range.closed(3, 4)); // returns true
Range.closed(0, 5).isConnected(Range.closed(3, 9)); // returns true
Range.open(3, 5).isConnected(Range.open(5, 10)); // returns false
Range.closed(1, 5).isConnected(Range.closed(6, 10)); // returns false
```

#### `intersection`

[`Range.intersection(Range)`] returns the maximal range enclosed by both this
range and other (which exists iff these ranges are connected), or if no such
range exists, throws an `IllegalArgumentException`.

`intersection` is a [commutative], [associative][]
[operation][binary-operation].

```java
Range.closed(3, 5).intersection(Range.open(5, 10)); // returns (5, 5]
Range.closed(0, 9).intersection(Range.closed(3, 4)); // returns [3, 4]
Range.closed(0, 5).intersection(Range.closed(3, 9)); // returns [3, 5]
Range.open(3, 5).intersection(Range.open(5, 10)); // throws IAE
Range.closed(1, 5).intersection(Range.closed(6, 10)); // throws IAE
```

#### `span`

[`Range.span(Range)`] returns the minimal range that encloses both this range
and other. If the ranges are both connected, this is their union.

`span` is a [commutative], [associative][] and [closed][]
[operation][binary-operation].

```java
Range.closed(3, 5).span(Range.open(5, 10)); // returns [3, 10)
Range.closed(0, 9).span(Range.closed(3, 4)); // returns [0, 9]
Range.closed(0, 5).span(Range.closed(3, 9)); // returns [0, 9]
Range.open(3, 5).span(Range.open(5, 10)); // returns (3, 10)
Range.closed(1, 5).span(Range.closed(6, 10)); // returns [1, 10]
```

## Discrete Domains 离散域

有些类型(但不是所有可比较的(Comparable)类型)是 *discrete离散的*，这意味着可以枚举两边有界的范围。

在Guava中，[`DiscreteDomain<C>`][DiscreteDomain]为类型`C`实现离散操作。离散域(discrete domain)总是表示其类型的整个值集;
它不能表示部分域(partial domains)，如"素数prime integers"、"strings of length 5"或"timestamps at midnight"。

[`DiscreteDomain`][DiscreteDomain]类提供了`DiscreteDomain`实例:

Type      | DiscreteDomain
:-------- | :-------------
`Integer` | [`integers()`]
`Long`    | [`longs()`]

一旦你有一个`DiscreteDomain`，你可以使用以下`Range`操作:

*   [`ContiguousSet.create(range, domain)`]: 将`Range<C>`视为`ImmutableSortedSet<C>`，并添加一些额外的操作。
    (不适用于无界范围，除非类型本身是有界的。)
*   [`canonical(domain)`]: 把ranges放进一个"canonical form"。如果`ContiguousSet.create(a, domain).equals(ContiguousSet.create(b, domain))`
    和 `!a.isEmpty()`，然后是 `a.canonical(domain).equals(b.canonical(domain))`。(然而，这并 _不_ 意味着`a.equals(b)`)

```java
ImmutableSortedSet<Integer> set = ContiguousSet.create(Range.open(1, 5), DiscreteDomain.integers());
// set contains [2, 3, 4]

ContiguousSet.create(Range.greaterThan(0), DiscreteDomain.integers());
// set contains [1, 2, ..., Integer.MAX_VALUE]
```

请注意，`ContiguousSet.create` *实际上* 并不构造整个范围(range)，而是以集合的形式返回该范围(range)的视图。

### Your Own DiscreteDomains

您可以创建自己的 `DiscreteDomain`对象，但是 *必须* 记住 `DiscreteDomain`契约的几个重要方面。

*   离散域总是表示其类型的整个值集;它不能表示部分域，如“素数prime integers”或“长度为5的字符串”。
    因此，举例来说，您不能构造一个`DiscreteDomain`来查看范围内的一组天数，而JODA `DateTime`则包含时间到第二个的时间:因为它不包含该类型的所有元素。
*   `DiscreteDomain`可以是无限的 -- 例如， `BigInteger` `DiscreteDomain`。在这种情况下，您应该使用`minValue()` 和 `maxValue()`的默认实现，
    这会引发一个`NoSuchElementException`。但是，这禁止您在无限范围内使用`ContiguousSet.create`方法！

## What if I need a `Comparator`? 如果我需要一个“比较器”呢？

我们想要在能力和API复杂度之间的`Range`取得一个非常具体的平衡，其中部分涉及到不提供基于 `Comparator`的接口:
我们不需要担心基于不同比较器的范围如何交互;API签名都得到了显著简化;情况变得更好了。

另一方面，如果你认为你想要一个任意的`Comparator`，你可以这样做:

*   使用一般的`Predicate`而不是`Range`。(因为`Range`实现了`Predicate`接口，所以可以使用 `Predicates.compose(range, function)`来获得一个 `Predicate`。)
*   在对象周围使用包装器类来定义所需的顺序。

[Range]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html
[`open(C, C)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#open-java.lang.Comparable-java.lang.Comparable-
[`closed(C, C)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#closed-java.lang.Comparable-java.lang.Comparable-
[`closedOpen(C, C)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#closedOpen-java.lang.Comparable-java.lang.Comparable-
[`openClosed(C, C)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#openClosed-java.lang.Comparable-java.lang.Comparable-
[`greaterThan(C)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#greaterThan-C-
[`atLeast(C)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#atLeast-C-
[`lessThan(C)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#lessThan-C-
[`atMost(C)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#atMost-C-
[`all()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#all--
[`range(C, BoundType, C, BoundType)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#range-java.lang.Comparable-com.google.common.collect.BoundType-java.lang.Comparable-com.google.common.collect.BoundType-
[`downTo(C, BoundType)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#downTo-java.lang.Comparable-com.google.common.collect.BoundType-
[`upTo(C, BoundType)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#upTo-java.lang.Comparable-com.google.common.collect.BoundType-
[`BoundType`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/BoundType.html
[`contains(C)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#contains-C-
[`hasLowerBound()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#hasLowerBound--
[`hasUpperBound()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#hasUpperBound--
[`lowerBoundType()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#lowerBoundType--
[`upperBoundType()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#upperBoundType--
[`lowerEndpoint()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#lowerEndpoint--
[`upperEndpoint()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#upperEndpoint--
[`isEmpty()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#isEmpty--
[`encloses(Range)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#encloses-com.google.common.collect.Range-
[`Range.isConnected(Range)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#isConnected-com.google.common.collect.Range-
[partial ordering]: GuavaTermsExplained#partial-ordering
[reflexive]: GuavaTermsExplained#reflexive
[symmetric]: GuavaTermsExplained#symmetric
[relation]: GuavaTermsExplained#relation
[`Range.intersection(Range)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#intersection-com.google.common.collect.Range-
[commutative]: GuavaTermsExplained#commutative
[associative]: GuavaTermsExplained#associative
[binary operation]: GuavaTermsExplained#binary-operation
[`Range.span(Range)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#span-com.google.common.collect.Range-
[closed]: GuavaTermsExplained#closed
[DiscreteDomain]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/DiscreteDomain.html
[`integers()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/DiscreteDomain.html#integers--
[`longs()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/DiscreteDomain.html#longs--
[`ContiguousSet.create(range, domain)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ContiguousSet.html#create-com.google.common.collect.Range-com.google.common.collect.DiscreteDomain-
[`canonical(domain)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Range.html#canonical-com.google.common.collect.DiscreteDomain-
