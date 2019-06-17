# Using and avoiding null 使用和避免null

> *"Null sucks."* -[Doug Lea]
>
> *"I call it my billion-dollar mistake."* - [Sir C. A. R. Hoare], on his
> invention of the null reference

不小心使用`null`会导致各种各样的错误。通过研究谷歌代码基，我们发现，大约95%的集合中不应该包含任何null值，
让这些集合快速失败而不是默默地接受`null`对开发人员是有帮助的。

此外，`null`模棱两可，令人不快。`null`返回值的含义很少很明显 -- 例如，`Map.get(key)`可以返回`null`，
因为map中的值是null，或者该值不在映射中。零可以意味着失败，可以意味着成功，几乎可以意味着任何事情。
使用`null`以外的词可以让你的意思更清楚。

也就是说，有时使用`null`是正确的。就内存和速度而言，`null`很便宜，而且在对象数组中不可避免。但是在应用程序代码中，
与库相反，它是混乱、困难和奇怪的bug以及令人不快的歧义的主要来源，例如`Map.get`返回null，它可以表示该值不存在，或者该值存在且为null。
最关键的是，null没有给出null值的含义。

由于这些原因，Guava的许多实用程序被设计成在null存在时快速失败，而不是允许使用null，只要有一个对null友好的解决方案可用。
此外，Guava还提供了许多工具，可以在必须使用`null`时更容易地使用`null`，还可以帮助您避免使用`null`。

## Specific Cases 具体案例

如果您试图在`Set`中使用`null`值，或者在`Map`中使用`key` -- 不要这样做;如果在查找操作期间显式地使用特殊大小写`null`，就会更清楚(不那么令人惊讶)。

如果您想在map中使用`null`作为值 -- 请忽略该条目;保持一组`Set`单独的非空键(或空键)。如果`Map`包含键的条目，值为`null`，而`Map`没有键的条目，则很容易混淆。最好将这些键分开，并考虑当与键关联的值为`null`时，它对应用程序意味着什么。

如果您在“`List`中使用nulls -- 如果列表是稀疏的，您是否应该使用`Map<Integer, E>`?这实际上可能更有效，并且可能更准确地匹配应用程序的需求。

考虑是否有一个自然的"null object"可以使用。没有永远,但有时。例如，如果它是enum，添加一个常量来表示您期望null在这里表示的任何含义。
例如,`java.math.RoundingMode`有一个 `UNNECESSARY`值，表示"不进行舍入，如果需要舍入，则抛出异常。"

如果您确实需要null值，并且在与null不相容的集合实现方面存在问题，请使用不同的实现。例如，使用`Collections.unmodifiableList(Lists.newArrayList())`而不是`ImmutableList`。

## Optional

程序员使用`null`的许多情况都是为了表示某种缺失:可能在可能有值的地方没有值，或者找不到值。例如,`Map.get`当没有找到键的值时返回`null`。

`Optional<T>`是一种用非空值替换可空(nullable)类型`T`引用的方法。一个`Optional`可以包含一个非空的`T`引用(在这种情况下，我们说引用是"present")，也可以什么都不包含(在这种情况下，我们说引用是"absent")。它从来没有说过"contain null"。

```java
Optional<Integer> possible = Optional.of(5);
possible.isPresent(); // returns true
possible.get(); // returns 5
```

`Optional`并 **不** 打算直接模拟其他编程环境中任何现有的"option" 或 "maybe"构造，尽管它可能有一些相似之处。

我们在这里列出了一些最常见的`Optional`操作。

### Making an Optional

这些方法都是`Optional`的静态方法。

Method                       | 描述
:--------------------------- | :----------
[`Optional.of(T)`]           | 使一个Optional包含给定的非空值，或在空值上快速失败。
[`Optional.absent()`]        | 返回某种类型的缺失Optional。
[`Optional.fromNullable(T)`] | 将给定的可能为空的引用转换为Optional引用，将非空视为存在，将空视为不存在。
### Query methods

这些方法都是非静态的方法，都具有特定的`Optional<T>`值。

Method                  | 描述
:---------------------- | :----------
[`boolean isPresent()`] | 如果这个`Optional`包含一个非空实例，则返回`true`.
[`T get()`]             | 返回包含的`T`实例，该实例必须存在;否则，抛出`IllegalStateException`。
[`T or(T)`]             | 返回此`Optional`项中的当前值，如果没有，则返回指定的默认值。
[`T orNull()`]          | 返回这个`Optional`项中的当前值，如果没有，则返回`null`。`fromNullable`的逆操作。
[`Set<T> asSet()`]      | 返回一个不可变的单例`Set`，其中包含这个 `Optional`实例(如果有的话)，否则返回一个空的不可变集合(immutable set)。

`Optional` 提供了一些更方便的实用方法，除了这些;有关详细信息，请参考Javadoc。

### What's the point? 有什么意义?

除了通过给`null` _名称_ 增加可读性之外，Optional最大的优点是它的惯用性证明。如果您想要编译程序，它会强制您积极地考虑缺失的情况，因为您必须积极地打开Optional并处理这种情况。Null让人很容易忘记一些事情，这令人不安，尽管FindBugs有所帮助，但我们认为它并没有很好地解决这个问题。

当您**返回可能存在也可能不存在的**值时，这一点尤其重要。你(和其他人)更有可能忘记那个`other.method(a, b)`可以返回一个空值，而当您实现other.method时，很可能会忘记`a`可以为空。返回`Optional`使调用者不可能忘记这种情况，因为他们必须自己打开对象才能编译代码。

## Convenience methods 便利方法

当您希望用某个默认值替换`null`值时，请使用[`MoreObjects.firstNonNull(T, T)`]。正如方法名称所示，如果两个输入都为null，则它会快速失败，并出现`NullPointerException`。如果你用的是`Optional`，还有更好的选择。-- 比如`first.or(second)`。

在`Strings`中提供了两个处理可能为空的`String`值的方法。具体来说，我们提供了恰当的名称:

*   [`emptyToNull(String)`]
*   [`isNullOrEmpty(String)`]
*   [`nullToEmpty(String)`]

我们要强调的是，这些方法主要用于与令人不快的api进行交互，这些api将null字符串和空字符串等同起来。每当您编写将空字符串和空字符串合并在一起的代码时，Guava团队都会哭泣。(如果null字符串和empty字符串的含义完全不同，那就更好了，但是把它们当作同一件事来处理是一种令人不安的常见代码味道。)

[Doug Lea]: http://en.wikipedia.org/wiki/Doug_Lea
[Sir C. A. R. Hoare]: http://en.wikipedia.org/wiki/C._A._R._Hoare
[`Optional.of(T)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Optional.html#of-T-
[`Optional.absent()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Optional.html#absent--
[`Optional.fromNullable(T)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Optional.html#fromNullable-T-
[`boolean isPresent()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Optional.html#isPresent--
[`T get()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Optional.html#get--
[`T or(T)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Optional.html#or-T-
[`T orNull()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Optional.html#orNull--
[`Set<T> asSet()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Optional.html#asSet--
[`MoreObjects.firstNonNull(T, T)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/MoreObjects.html#firstNonNull-T-T-
[`emptyToNull(String)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Strings.html#emptyToNull-java.lang.String-
[`isNullOrEmpty(String)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Strings.html#isNullOrEmpty-java.lang.String-
[`nullToEmpty(String)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Strings.html#nullToEmpty-java.lang.String-
