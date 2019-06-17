# Compatibility(兼容性)

## Android

从v21.0开始，Guava需要JDK 8。从v22.0开始，guava也有一个Android风格，
您可以在[building]时通过在版本字符串中附加 `-android`来使用它。

在Android应用程序中使用Guava来[use ProGuard]删除不使用的guava部分时，这一点尤为重要。
Guava是Android应用程序的[most common][android-usage]依赖项之一。

## Older JDKs(旧JDKs)

对于中期的未来，需要以JDK7为目标的Guava用户可以使用Android风格，它没有特定于Android的依赖关系。
在将来的某个时候，当Android与JDK7的差异很大时，Guava可能会停止提供JDK7兼容的风格，此时，这些用户将不得不使用最新的早期版本。

需要瞄准JDK 6的Guava用户必须保持v20.0版本。

## GWT

虽然我们目前没有专门为GWT优化代码，但大部分的Guava都与Google Web Toolkit（GWT）兼容。
与GWT兼容的Guava API用注释`@GwtCompatible标记。

## Basics

[Our README file][README] covers the basics: The only features we'll ever remove
are `@Deprecated` and, occasionally, [`@Beta` methods and classes][Beta].

## "Source-compatible since Guava release xx"

Sometimes we will add a more specific overload of an existing method. Code
compiled against the old version of Guava will still run against the new version
of Guava. Additionally, any code that compiles against the new version of Guava
will also compile against the old version of Guava. However, code compiled
against the new version of Guava might not _run_ against the old version because
it may compile against the new overload.

An example of this is [`MoreObjects.toStringHelper`], which originally
accepted an Object but which now has `String` and `Class` overloads, as well.
`Object.toStringHelper(anything)` compiles under any version of Guava, but if
the static type of `anything` is `String` or `Class`, a compile against a recent
Guava version will select a new overload.

## "Mostly source-compatible since Guava release xx"

As of this writing, there are two causes of this:

First, we sometimes change a `@Beta` interface to a class. Simple anonymous uses
like `new Foo() { ... }` will continue to compile, but named classes will not.
In neither case is the result binary compatible.

Second, we sometimes replace a `@Beta` method with a version that returns a more
specific type. In this case, code compiled against a version of Guava from
before the change might not run against a version of Guava from after the
change, and vice versa. However, code that compiles against the old version of
Guava will _almost_ always compile against the new version of Guava. (The
reverse is often true, too, when the code doesn't take advantage of the new
return type.)

However, there are rare exceptions. Consider this fictional case:

Guava release n:

```java
public static List<Integer> newList() { ... }
```

Guava release n + 1:

```java
public static ArrayList<Integer> newList() { ... }
```

Most callers will compile fine against either version:

```java
List<Integer> myList = newList();
```

Of course, if a caller uses the new, specific type, that code won't compile
against the old version:

```java
ArrayList<Integer> myList = newList();
```

The more interesting case, though, is code that compiles against the old version
but not the new version:

```java
Set<List<Integer>> myLists = ImmutableSet.of(newList());
```

Java's type inference isn't strong enough for `ImmutableSet.of()` to realize
that it should treat its input as a `List<Integer>` instead of an
`ArrayList<Integer>`, so the code must be rewritten:

```java
Set<ArrayList<Integer>> myLists = ImmutableSet.of(newList());
```

Or, to produce code that compiles against either version of Guava:

```java
Set<List<Integer>> myLists = ImmutableSet.<List<Integer>>of(newList());
```

Or, equivalently:

```java
List<Integer> myList = newList();
Set<List<Integer>> myLists = ImmutableSet.of(myList);
```

[building]: UsingGuavaInYourBuild
[use ProGuard]: UsingProGuardWithGuava
[android-usage]: http://www.appbrain.com/stats/libraries/details/guava/google-guava
[README]: https://github.com/google/guava/blob/master/README.md
[Beta]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/annotations/class-use/Beta.html
[`MoreObjects.toStringHelper`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/MoreObjects.html#toStringHelper-java.lang.Class-
