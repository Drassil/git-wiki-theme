# Primitives 原始类型

## Overview

Java的基本类型是基本类型：

*   `byte`
*   `short`
*   `int`
*   `long`
*   `float`
*   `double`
*   `char`
*   `boolean`

**_在搜索Guava方法之前，您应该检查它是在[`Arrays`]中还是对应的JDK包装器类型中，例如[`Integer`]。_**

这些类型不能用作泛型类型的对象或类型参数，这意味着许多通用实用程序不能应用于它们。
Guava提供了许多这样的通用实用程序、基本数组和集合api之间的接口方式、从类型转换
到字节数组表示形式以及对某些类型上的无符号行为的支持。

Primitive Type | Guava Utilities (all in `com.google.common.primitives`)
:------------- | :------------------------------------------------------
`byte`         | [`Bytes`], [`SignedBytes`], [`UnsignedBytes`]
`short`        | [`Shorts`]
`int`          | [`Ints`], [`UnsignedInteger`], [`UnsignedInts`]
`long`         | [`Longs`], [`UnsignedLong`], [`UnsignedLongs`]
`float`        | [`Floats`]
`double`       | [`Doubles`]
`char`         | [`Chars`]
`boolean`      | [`Booleans`]

在`Bytes`中完全跳过了有符号字节和无符号字节行为不同的方法，但是只出现在`SignedBytes`和 `UnsignedBytes`实用程序中，
因为字节的符号性比其他类型的符号性更加模糊。

`int` 和 `long`方法的无符号变体在`UnsignedInts` 和 `UnsignedLongs`类中提供，但是由于这些类型的
大多数使用都是有符号的，`Ints` 和 `Longs`类将它们的输入视为有符号的。

此外，Guava还为无符号的`int` 和 `long`值、`UnsignedInteger` 和 `UnsignedLong`提供了"wrapper types"，
以帮助您使用类型系统强制区分有符号值和无符号值，以换取较小的性能代价。这些类直接支持`BigInteger`样式的简单算术操作。

所有方法的符号都使用`Wrapper`来引用对应的JDK包装器类型，使用`prim`来引用基本类型。(`prim`，如适用，指相应的Guava实用程序类。)

## Primitive array utilities

基元(Primitive)数组是聚合处理基元类型的最有效方法(在内存和性能方面)。Guava为使用这些方法提供了各种实用程序。

Signature                                        | Description                                                                                                        | Collection analogue                      | Availability
:----------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :-----------
`List<Wrapper> asList(prim... backingArray)`     | 将原始数组包装为相应包装器类型的`List`。                              | [`Arrays.asList`]                        | Sign-independent`*`
`prim[] toArray(Collection<Wrapper> collection)` | Copies a collection into a new `prim[]`. This method is as thread-safe as `collection.toArray()`.                  | [`Collection.toArray()`]                 | Sign-independent
`prim[] concat(prim[]... arrays)`                | Concatenate several primitive arrays.                                                                              | [`Iterables.concat`]                     | Sign-independent
`boolean contains(prim[] array, prim target)`    | Determines if the specified element is in the specified array.                                                     | [`Collection.contains`]                  | Sign-independent
`int indexOf(prim[] array, prim target)`         | Finds the index of the first appearance of the value `target` in `array`, or returns `-1` if no such value exists. | [`List.indexOf`]                         | Sign-independent
`int lastIndexOf(prim[] array, prim target)`     | Finds the index of the last appearance of the value `target` in `array`, or returns `-1` if no such value exists.  | [`List.lastIndexOf`]                     | Sign-independent
`prim min(prim... array)`                        | Returns the minimum _element_ of the array.                                                                        | [`Collections.min`]                      | Sign-dependent`**`
`prim max(prim... array)`                        | Returns the maximum _element_ of the array.                                                                        | [`Collections.max`]                      | Sign-dependent
`String join(String separator, prim... array)`   | Constructs a string containing the elements of `array`, separated by `separator`.                                  | [`Joiner.on(separator).join`]            | Sign-dependent
`Comparator<prim[]> lexicographicalComparator()` | A comparator which compares primitive arrays lexicographically.                                                    | [`Ordering.natural().lexicographical()`] | Sign-dependent

`*` 以下类中提供了与符号无关的方法: `Bytes`, `Shorts`, `Ints`, `Longs`,
`Floats`, `Doubles`, `Chars`, `Booleans`. _不含_ `UnsignedInts`, `UnsignedLongs`,
`SignedBytes`, 或 `UnsignedBytes`.

`**` 以下类中提供了依赖于符号的方法: `SignedBytes`, `UnsignedBytes`,
`Shorts`, `Ints`, `Longs`, `Floats`, `Doubles`, `Chars`, `Booleans`,
`UnsignedInts`, `UnsignedLongs`. _不含_ `Bytes`.

## General utility methods

Guava提供了一些基本实用程序，它们不是JDK 6的一部分。然而，其中一些方法在JDK 7中是可用的。

| Signature              | Description                | Availability           |
| :--------------------- | :------------------------- | :--------------------- |
| `int compare(prim a, prim b)` | A traditional `Comparator.compare` method, but on the primitive types. _Provided in the JDK wrapper classes as of JDK 7._ | Sign-dependent |
| `prim checkedCast(long value)` | Casts the specified value  to `prim`, _unless_ the specified value does not fit into a `prim`, in which case an `IllegalArgumentException` is thrown. | Sign-dependent for integral types only`*` |
| `prim saturatedCast(long value)` | Casts the specified value to `prim`, unless the specified value does not fit into a `prim`, in which case the closest `prim` value is used. | Sign-dependent for integral types only |

`*`Here, integral types include `byte`, `short`, `int`, `long`. Integral types
do _not_ include `char`, `boolean`, `float`, or `double`.

_Note:_ Rounding from `double` is provided in
`com.google.common.math.DoubleMath`, and supports a variety of rounding modes.
See [the article](https://github.com/google/guava/wiki/MathExplained) for
details.

## Byte conversion methods

Guava提供了将基元类型转换为 **big-endian顺序**的字节数组表示或从字节数组表示转换为基元类型的方法。
除了`Booleans`不提供这些方法之外，所有方法都是独立于符号的。

| Signature                               | Description                            |
| :-------------------------------------- | :------------------------------------- |
| `int BYTES`                             | 常量，表示代表`prim`值所需的字节数。        |
| `prim fromByteArray(byte[] bytes)`      | Returns the `prim` value whose big-endian representation is the first `Prims.BYTES` bytes in the array `bytes`. Throws an `IllegalArgumentException` if `bytes.length <= Prims.BYTES`. |
| `prim fromBytes(byte b1, ..., byte bk)` | Takes `Prims.BYTES` byte arguments. Returns the `prim` value whose byte representation is the specified bytes in big-endian order. |
| `byte[] toByteArray(prim value)`        | Returns an array containing the big-endian byte representation of `value`. |

## Unsigned support 无符号支持

`UnsignedInts` 和 `UnsignedLongs`实用程序类提供了Java在其包装器类中为带符号类型提供的一些通用实用程序。
`UnsignedInts` 和 `UnsignedLongs`直接处理原始类型:由您来确保只有unsigned值被传递给这些实用程序。

此外，对于`int` 和 `long`，Guava提供了"unsigned"包装器类型([`UnsignedInteger`] 和 [`UnsignedLong`]，
以帮助您在类型系统中强制区分unsigned值和signed值，以换取较小的性能损失。

### Generic utilities

JDK中的包装器类提供了这些方法的带符号类似物。

| Signature                                 | Explanation                     |
| :---------------------------------------- | :------------------------------ |
| [`int UnsignedInts.parseUnsignedInt(String)`]<br/>[`long UnsignedLongs.parseUnsignedLong(String)`] | Parses an unsigned value from a string in base 10. |
| [`int UnsignedInts.parseUnsignedInt(String string, int radix)`]<br/>[`long UnsignedLongs.parseUnsignedLong(String string, int radix)`] | Parses an unsigned value from a string in the specified base. |
| [`String UnsignedInts.toString(int)`]<br/>[`String UnsignedLongs.toString(long)`] | Returns a string representation of the unsigned value in base 10. |
| [`String UnsignedInts.toString(int value, int radix)`]<br/>[`String UnsignedLongs.toString(long value, int radix)`] | Returns a string representation of the unsigned value in the specified base. |

### Wrapper

所提供的无符号包装器类型包括许多方法，使它们的使用和转换更容易。

| Signature                            | Explanation                           |
| :----------------------------------- | :------------------------------------ |
| `UnsignedPrim plus(UnsignedPrim)`, `minus`, `times`, `dividedBy`, `mod` | Simple arithmetic operations. |                                 :
| `UnsignedPrim valueOf(BigInteger)`   | Returns the value from a `BigInteger` as an `UnsignedPrim`, or throw an `IAE` if the specified `BigInteger` is negative or does not fit. |
| `UnsignedPrim valueOf(long)`         | Returns the value from the `long` as an `UnsignedPrim`, or throw an `IAE` if the specified `long` is negative or does not fit. |
| `UnsignedPrim fromPrimBits(prim value)` | View the given value as unsigned. For example, `UnsignedInteger.fromIntBits(1 << 31)` has the value 2<sup>31</sup>, even though `1 << 31` is negative as an `int`. |
| `BigInteger bigIntegerValue()`       | Get the value of this `UnsignedPrim` as a `BigInteger`. |
| `toString()`, `toString(int radix)`  | Returns a string representation of this unsigned value. |

[`Arrays`]: http://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html
[`Integer`]: http://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html
[`Bytes`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/Bytes.html
[`SignedBytes`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/SignedBytes.html
[`UnsignedBytes`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/UnsignedBytes.html
[`Shorts`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/Shorts.html
[`Ints`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/Ints.html
[`UnsignedInteger`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/UnsignedInteger.html
[`UnsignedInts`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/UnsignedInts.html
[`Longs`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/Longs.html
[`UnsignedLong`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/UnsignedLong.html
[`UnsignedLongs`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/UnsignedLongs.html
[`Floats`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/Floats.html
[`Doubles`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/Doubles.html
[`Chars`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/Chars.html
[`Booleans`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/Booleans.html
[`Arrays.asList`]: http://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#asList-T...-
[`Collection.toArray()`]: http://docs.oracle.com/javase/8/docs/api/java/util/Collection.html#toArray--
[`Iterables.concat`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Iterables.html#concat-java.lang.Iterable...-
[`Collection.contains`]: http://docs.oracle.com/javase/8/docs/api/java/util/Collection.html#contains-java.lang.Object-
[`List.indexOf`]: http://docs.oracle.com/javase/8/docs/api/java/util/List.html#indexOf-java.lang.Object-
[`List.lastIndexOf`]: http://docs.oracle.com/javase/8/docs/api/java/util/List.html#lastIndexOf-java.lang.Object-
[`Collections.min`]: http://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#min-java.util.Collection-
[`Collections.max`]: http://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#max-java.util.Collection-
[`Joiner.on(separator).join`]: https://github.com/google/guava/wiki/StringsExplained#joiner
[`Ordering.natural().lexicographical()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/Ordering.html#lexicographical--
[`int UnsignedInts.parseUnsignedInt(String)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/UnsignedInts.html#parseUnsignedInt-java.lang.String-
[`long UnsignedLongs.parseUnsignedLong(String)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/UnsignedLongs.html#parseUnsignedLong-java.lang.String-
[`int UnsignedInts.parseUnsignedInt(String string, int radix)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/UnsignedInts.html#parseUnsignedInt-java.lang.String-int-
[`long UnsignedLongs.parseUnsignedLong(String string, int radix)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/UnsignedLongs.html#parseUnsignedLong-java.lang.String-int-
[`String UnsignedInts.toString(int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/UnsignedInts.html#toString-int-
[`String UnsignedLongs.toString(long)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/UnsignedLongs.html#toString-long-
[`String UnsignedInts.toString(int value, int radix)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/UnsignedInts.html#toString-int-int-
[`String UnsignedLongs.toString(long value, int radix)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/UnsignedLongs.html#toString-long-int-
