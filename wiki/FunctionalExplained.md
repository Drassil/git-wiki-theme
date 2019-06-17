# Functional Utilities(函数实用程序)

## Caveats 警告

Java 8包括[`java.util.function`]和[`java.util.stream`]包，它代替Guava的函数式编程类用于该语言级别的项目。

虽然Guava的函数实用程序可以在Java 8之前的Java版本上使用，但是没有Java 8的函数编程需要笨拙而冗长地使用匿名类。

*过度*使用Guava的函数式编程习惯可能导致代码冗长、混乱、不可读和效率低下。到目前为止，这些都是Guava最容易(也是最常见)被滥用的部分，而且当你说到荒谬的时候
Guava团队哭着说，要让你的代码“一行代码(a one-liner)”的长度。

比较以下代码:

```java
Function<String, Integer> lengthFunction = new Function<String, Integer>() {
  public Integer apply(String string) {
    return string.length();
  }
};
Predicate<String> allCaps = new Predicate<String>() {
  public boolean apply(String string) {
    return CharMatcher.javaUpperCase().matchesAllOf(string);
  }
};
Multiset<Integer> lengths = HashMultiset.create(
  Iterables.transform(Iterables.filter(strings, allCaps), lengthFunction));
```

或者是FluentIterable` 版本

```java
Multiset<Integer> lengths = HashMultiset.create(
  FluentIterable.from(strings)
    .filter(new Predicate<String>() {
       public boolean apply(String string) {
         return CharMatcher.javaUpperCase().matchesAllOf(string);
       }
     })
    .transform(new Function<String, Integer>() {
       public Integer apply(String string) {
         return string.length();
       }
     }));
```

使用:

```java
Multiset<Integer> lengths = HashMultiset.create();
for (String string : strings) {
  if (CharMatcher.javaUpperCase().matchesAllOf(string)) {
    lengths.add(string.length());
  }
}
```

即使使用静态导入，即使函数和谓词声明被移动到不同的文件中，第一个实现也不够简洁、可读性差、效率低。

命令式代码应该是您的*default*，您的*首选(first choice)*作为Java 7。除非你“绝对”确信下列情况之一，否则不要使用函数习语:

*   使用函数习惯用法将为整个项目节省几行代码。在上面的例子中，"functional"版本使用了11行，命令式版本6行。
    将函数的定义移动到另一个文件或常量中没有帮助。
*   为了提高效率，您需要转换后的集合的延迟计算视图，而不能满足于显式计算的集合。此外，您已经阅读并重新阅读了Effective Java, item 55，
    除了遵循这些说明之外，您还实际做了基准测试，以证明这个版本更快，并且可以引用数字来证明它。

请确保，在使用Guava的函数实用程序时，传统的命令式方法并不更具可读性。试着写出来。
有那么糟吗?这比您将要尝试的那种荒谬而笨拙的函数方法更易于阅读吗?

## Functions and Predicates(函数和谓词)

本文只讨论直接处理`Function`和`Predicate`的Guava特性。其他一些实用程序与"functional style" 相关联，
比如连接和其他方法，它们在常量时间内返回视图。试着在[collection utilities]文章中查找。

Guava提供了两个基本的"functional"接口:

*   `Function<A, B>`,其中只有一个方法`B apply(A input)`。`Function` 的实例通常被期望是引用透明的  -- 没有副作用 -- 并且与equals一致,
    即`a.equals(b)`意味着`function.apply(a).equals(function.apply(b))`。
*   <a name="predicate"></a> `Predicate<T>`, 它只有一个方法`boolean apply(T input)`。`Predicate`的实例通常被期望是无副作用的，并且与equals一致。

### Special predicates特殊的谓词

字符有自己的专用版本的`Predicate`的 [`CharMatcher`]，它通常更有效，更适合这些需求。
`CharMatcher`已经实现了`Predicate<Character>`，并且可以相应地使用，而从`Predicate`到`CharMatcher`的转换可以
使用[`CharMatcher.forPredicate`]来完成。有关详细信息，请参阅[`CharMatcher` article]。

此外，对于可比较类型和基于比较的谓词，大多数需求都可以使用`Range`类型来实现，它实现了一个不可变的区间。
`Range`类型实现`Predicate`，测试范围中的包含。例如，`Range.atMost(2)`是一个完全有效的`Predicate<Integer>`。
关于使用范围的更多细节可以在[`Range` article]中找到。


### Manipulating Functions and Predicates(操作函数和谓词)

在[`Functions`]中提供了简单的`Function`构造和操作方法，包括

*   [`forMap(Map<A, B>)`]
*   [`compose(Function<B, C>, Function<A, B>)`]
*   [`constant(T)`]
*   [`identity()`]
*   [`toStringFunction()`]

有关详细信息，请参考Javadoc.

在[`Predicates`]中有更多可用的构造和操作方法，但示例包括:

*   [`instanceOf(Class)`]
*   [`assignableFrom(Class)`]
*   [`contains(Pattern)`]
*   [`in(Collection)`]
*   [`isNull()`]
*   [`alwaysFalse()`], [`alwaysTrue()`]
*   [`equalTo(Object)`]
*   [`compose(Predicate, Function)`]
*   [`and(Predicate...)`], [`or(Predicate...)`], [`not(Predicate)`]

有关详细信息，请参考Javadoc.

## Using 用法

Guava提供了许多使用函数和谓词操作集合的工具。这些通常可以在集合实用程序类`Iterables`, `Lists`, `Sets`, `Maps`, `Multimaps`等中找到。

### Predicates

谓词最基本的用途是过滤集合。所有的Guava过滤方法返回*views*。

| Collection type | Filter methods                                       |
| :-------------- | :--------------------------------------------------- |
| `Iterable`      | [`Iterables.filter(Iterable, Predicate)`]<br>[`FluentIterable.filter(Predicate)`] |

[`java.util.function`]: https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html
[`java.util.stream`]: https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html

[collection utilities]: CollectionUtilitiesExplained

[`CharMatcher`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html
[`CharMatcher.forPredicate`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#forPredicate-com.google.common.base.Predicate-

[`CharMatcher` article]: StringsExplained#CharMatcher
[`Ranges` article]: RangesExplained

[`Functions`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Functions.html
[`forMap(Map<A, B>)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Functions.html#forMap-java.util.Map-
[`compose(Function<B, C>, Function<A, B>)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Functions.html#compose-com.google.common.base.Function-com.google.common.base.Function-
[`constant(T)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Functions.html#constant-E-
[`identity()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Functions.html#identity--
[`toStringFunction()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Functions.html#toStringFunction--
[`Predicates`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Predicates.html
[`instanceOf(Class)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Predicates.html#instanceOf-java.lang.Class-
[`assignableFrom(Class)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Predicates.html#assignableFrom-java.lang.Class-
[`contains(Pattern)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Predicates.html#contains-java.util.regex.Pattern-
[`in(Collection)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Predicates.html#in-java.util.Collection-
[`isNull()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Predicates.html#isNull--
[`alwaysFalse()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Predicates.html#alwaysFalse--
[`alwaysTrue()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Predicates.html#alwaysTrue--
[`equalTo(Object)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Predicates.html#equalTo-T-
[`compose(Predicate, Function)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Predicates.html#compose-com.google.common.base.Predicate-com.google.common.base.Function-
[`and(Predicate...)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Predicates.html#and-com.google.common.base.Predicate...-
[`or(Predicate...)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Predicates.html#or-com.google.common.base.Predicate...-
[`not(Predicate)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Predicates.html#not-com.google.common.base.Predicate-
[`Iterables.filter(Iterable, Predicate)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#filter-java.lang.Iterable-com.google.common.base.Predicate-
[`FluentIterable.filter(Predicate)`]: http://google.github.io/guava/releases/12.0/api/docs/com/google/common/collect/FluentIterable.html#filter-com.google.common.base.Predicate-
