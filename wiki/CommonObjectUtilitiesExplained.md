# Object common methods

## equals

当对象(object)字段可以为`null`时，实现`Object.equals`可能很麻烦，因为必须单独检查`null`。
使用[`Objects.equal`]允许您以对空敏感(null-sensitive)的方式执行`equals`检查，
而不会冒`NullPointerException`的风险。

```java
Objects.equal("a", "a"); // returns true
Objects.equal(null, "a"); // returns false
Objects.equal("a", null); // returns false
Objects.equal(null, null); // returns true
```

_注意_: JDK 7中新引入的`Objects`类提供了等价的[`Objects.equals`]的方法。

## hashCode

散列`Object`的所有字段应该更简单。Guava的[`Objects.hashCode(Object...)`]为指定的字段序列创建一个明智的、顺序敏感的哈希。
使用`Objects.hashCode(field1, field2, ...,fieldn)`，而不是手动生成哈希。

_注意_: JDK7中新引入的`Objects`类提供了等价的[`Objects.hash(Object...)`]。

## toString

一个好的`toString`方法在调试中是非常宝贵的，但编写起来很困难。
使用[`MoreObjects.toStringHelper()`]可以轻松创建有用的`toString`。
一些简单的例子包括:

```java
   // Returns "ClassName{x=1}"
   MoreObjects.toStringHelper(this)
       .add("x", 1)
       .toString();

   // Returns "MyObject{x=1}"
   MoreObjects.toStringHelper("MyObject")
       .add("x", 1)
       .toString();
```

## compare/compareTo

实现`Comparator`或直接实现`Comparable`接口可能会很麻烦。考虑：

```java
class Person implements Comparable<Person> {
  private String lastName;
  private String firstName;
  private int zipCode;

  public int compareTo(Person other) {
    int cmp = lastName.compareTo(other.lastName);
    if (cmp != 0) {
      return cmp;
    }
    cmp = firstName.compareTo(other.firstName);
    if (cmp != 0) {
      return cmp;
    }
    return Integer.compare(zipCode, other.zipCode);
  }
}
```

这段代码很容易出错，扫描错误很难，而且冗长得令人不快。我们应该能够做得更好。

为此，Guava提供 [`ComparisonChain`].

`ComparisonChain`执行"延迟"比较：它只执行比较，直到找到非零结果，然后忽略进一步的输入。

```java
   public int compareTo(Foo that) {
     return ComparisonChain.start()
         .compare(this.aString, that.aString)
         .compare(this.anInt, that.anInt)
         .compare(this.anEnum, that.anEnum, Ordering.natural().nullsLast())
         .result();
   }
```
这个流利的成语可读性更高，不易出现偶然的打字错误，而且聪明到不必做更多的工作。其他比较工具可以
在Guava的"fluent Comparator"类[`Ordering`]中找到，解释了[here][ordering]。

[`Objects.equal`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Objects.html#equal-java.lang.Object-java.lang.Object-
[`Objects.equals`]: http://docs.oracle.com/javase/7/docs/api/java/util/Objects.html#equals(java.lang.Object,%20java.lang.Object)
[`Objects.hashCode(Object...)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Objects.html#hashCode-java.lang.Object...-
[`Objects.hash(Object...)`]: http://docs.oracle.com/javase/7/docs/api/java/util/Objects.html#hash(java.lang.Object...)
[`MoreObjects.toStringHelper()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/MoreObjects.html#toStringHelper-java.lang.Object-
[`ComparisonChain`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ComparisonChain.html
[`Ordering`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html
[ordering]: OrderingExplained
