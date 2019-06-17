# Ordering

## Example

```java
assertTrue(byLengthOrdering.reverse().isOrdered(list));
```

## Overview

[`Ordering`]是guava的"fluent(流畅的)" `Comparator`类，可用于构建复杂的comparators并将其应用于对象集合(collections)。

从本质上讲，一个`Ordering`实例只不过是一个特殊的`Comparator`实例。`Ordering` 只是接受依赖于`Comparator`
(例如`Collections.max`)的方法，并将它们作为实例方法提供。为了获得更多的功能，`Ordering`类提供了方法链来调整和增强现有的比较器。

## Creation

常用的排序由静态方法提供:

Method              | Description
:------------------ | :----------
[`natural()`]       | 对可比较的(Comparable)类型使用*自然排序(natural ordering)*。
[`usingToString()`] | 通过对象字符串表示形式的字典顺序(如`toString()`返回)来比较对象。

使用[`Ordering.from(Comparator)`]可以简单地将现有的`Comparator`转换为`Ordering`。

但更常见的创建自定义`Ordering`的方法是完全跳过`Comparator`，直接扩展`Ordering`抽象类:
```java
Ordering<String> byLengthOrdering = new Ordering<String>() {
  public int compare(String left, String right) {
    return Ints.compare(left.length(), right.length());
  }
};
```

## Chaining

可以对给定的`Ordering`进行包装，以获得派生的排序。一些最常用的变体包括:

Method                   | Description
:----------------------- | :----------
[`reverse()`]            | 返回相反的顺序。
[`nullsFirst()`]         | 返回一个`Ordering`，它在non-null元素之前对nulls进行排序，否则其行为与原始`Ordering`相同。另请参见[`nullsLast()`]
[`compound(Comparator)`] | 返回使用指定的`Comparator` 来"break ties(断开连接)"的`Ordering`。
[`lexicographical()`]    | 返回一个`Ordering`，该`Ordering`按其元素以字典顺序排序迭代。
[`onResultOf(Function)`] | 返回一个`Ordering`，该函数对值进行排序，然后使用原始的`Ordering`比较结果。

例如，假设您想要一个类的比较器...

```java
class Foo {
  @Nullable String sortedBy;
  int notSortedBy;
}
```

...它可以处理`sortedBy`的空值。下面是构建在方法链之上的解决方案:

```java
Ordering<Foo> ordering = Ordering.natural().nullsFirst().onResultOf(new Function<Foo, String>() {
  public String apply(Foo foo) {
    return foo.sortedBy;
  }
});
```

当阅读一连串的`Ordering`调用链时，从右到左进行“反向(backward)”阅读。
上面的示例通过查找`sortedBy`字段值来对`Foo`实例排序，首先将任何null `sortedBy`值移到顶部，
然后按自然字符串顺序对其余值排序。之所以出现这种向后顺序，是因为每个链调用都将前一个`Ordering` "wrapping包装"成一个新的`Ordering` 。

(例外的"向后backwards"规则:对于链调用`compound`，从左到右读取。为了避免混淆，请避免将`compound`调用与其他链接调用混合使用。)

方法链(Chains)长超过几个调用可能很难理解。我们建议将链接限制在上面的示例中所示的大约三个调用。即使这样，
您可能希望通过分离中间对象(如`Function`实例)来简化代码:

```java
Ordering<Foo> ordering = Ordering.natural().nullsFirst().onResultOf(sortKeyFunction);
```

## Application

Guava提供了许多方法来使用顺序操作或检查值或集合。我们在这里列出了一些最受欢迎的。

Method                                   | Description                                                                                                                                       | See also
:--------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :-------
[`greatestOf(Iterable iterable, int k)`] | 返回指定迭代器的`k`最大元素，按照从最大到最小的顺序。不一定是稳定的。| [`leastOf`]
[`isOrdered(Iterable)`]                  | 测试指定的`Iterable`是否按此顺序按非递减顺序排列。     | [`isStrictlyOrdered`]
[`sortedCopy(Iterable)`]                 | 以`List`的形式返回指定元素的已排序副本。                                                                                      | [`immutableSortedCopy`]
[`min(E, E)`]                            | 按此顺序返回其两个参数中的最小值。如果值相等，则返回第一个参数。              | [`max(E, E)`]
[`min(E, E, E, E...)`]                   | 按此顺序返回其参数的最小值。如果有多个最小值，则返回第一个。                       | [`max(E, E, E, E...)`]
[`min(Iterable)`]                        | 返回指定的`Iterable`的最小元素。如果`Iterable`为空(empty)，则抛出`NoSuchElementException`。 | [`max(Iterable)`], [`min(Iterator)`], [`max(Iterator)`]

[`Ordering`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html
[`natural()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#natural--
[`usingToString()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#usingToString--
[`Ordering.from(Comparator)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#from-java.util.Comparator-
[`reverse()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#reverse--
[`nullsFirst()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#nullsFirst--
[`nullsLast()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#nullsLast--
[`compound(Comparator)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#compound-java.util.Comparator-
[`lexicographical()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#lexicographical--
[`onResultOf(Function)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#onResultOf-com.google.common.base.Function-
[`greatestOf(Iterable iterable, int k)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#greatestOf-java.lang.Iterable-int-
[`leastOf`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#leastOf-java.lang.Iterable-int-
[`isOrdered(Iterable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#isOrdered-java.lang.Iterable-
[`isStrictlyOrdered`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#isStrictlyOrdered-java.lang.Iterable-
[`sortedCopy(Iterable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#sortedCopy-java.lang.Iterable-
[`immutableSortedCopy`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#immutableSortedCopy-java.lang.Iterable-
[`min(E, E)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#min-E-E-
[`max(E, E)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#max-E-E-
[`min(E, E, E, E...)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#min-E-E-E-E...-
[`max(E, E, E, E...)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#max-E-E-E-E...-
[`min(Iterable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#min-java.lang.Iterable-
[`max(Iterable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#max-java.lang.Iterable-
[`min(Iterator)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#min-java.util.Iterator-
[`max(Iterator)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#max-java.util.Iterator-
