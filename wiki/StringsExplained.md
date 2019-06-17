# String utilities

## Joiner

用分隔符将字符串序列连接在一起可能会有不必要的麻烦，但不应该这样做。如果您的序列包含null，
则会更加困难。流畅的风格[`Joiner`]使其简单。
```java
Joiner joiner = Joiner.on("; ").skipNulls();
return joiner.join("Harry", null, "Ron", "Hermione");
```

返回字符串"Harry; Ron; Hermione"。另外，您可以使用`useForNull(String)`指定一个字符串来代替字符串中的null，而不是使用`skipNulls`。

您还可以对对象使用`Joiner`，它将使用对象的`toString()`进行转换，然后进行join。

```java
Joiner.on(",").join(Arrays.asList(1, 5, 7)); // returns "1,5,7"
```

**Warning:** joiner实例总是不可变的。joiner配置方法总是返回一个新的`Joiner`，您必须使用它来获得所需的语义。
这使得任何`Joiner`线程都是安全的，并且可以作为 `static final`常量使用。

## Splitter

用于分割字符串的内置Java实用程序有一些古怪的行为。
例如,`String.split`静默丢弃尾随分隔符，而`StringTokenizer`只考虑五个空白字符，其他什么都不考虑。

测试: `",a,,b,".split(",")` 返回什么?

1.  `"", "a", "", "b", ""`
1.  `null, "a", null, "b", null`
1.  `"a", null, "b"`
1.  `"a", "b"`
1.  None of the above

正确答案是上述都不是: `"", "a", "", "b"`. 只跳过后面的空字符串。这是什么，我甚至不知道。

[`Splitter`] 允许使用简单明了的流畅模式完全控制所有这些令人困惑的行为。

```java
Splitter.on(',')
    .trimResults()
    .omitEmptyStrings()
    .split("foo,bar,,   qux");
```

返回一个包含 "foo", "bar", "qux"的`Iterable<String>`。可以将`Splitter`设置为对任何`Pattern`, `char`, `String`, 或 `CharMatcher`进行拆分。

#### Base Factories

Method                                                     | Description                                                                                                                         | Example
:--------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- | :------
[`Splitter.on(char)`]                                      | 在特定的单个字符出现时拆分。                                                                           | `Splitter.on(';')`
[`Splitter.on(CharMatcher)`]                               | 在某些类别中的任何字符出现时拆分。                                                                             | `Splitter.on(CharMatcher.BREAKING_WHITESPACE)`<br>`Splitter.on(CharMatcher.anyOf(";,."))`
[`Splitter.on(String)`]                                    | 按文字`String`拆分 .                                                                                                        | `Splitter.on(", ")`
[`Splitter.on(Pattern)`]<br>[`Splitter.onPattern(String)`] | 在正则表达式上拆分。                                                                                                      | `Splitter.onPattern("\r?\n")`
[`Splitter.fixedLength(int)`]                              | 将字符串分割为指定固定长度的子字符串。最后一块可以小于`length`，但永远不会是空的。 | `Splitter.fixedLength(3)`

#### Modifiers

Method                       | Description                                                                             | Example
:--------------------------- | :-------------------------------------------------------------------------------------- | :------
[`omitEmptyStrings()`]       | 自动从结果中删除空字符串。                                      | `Splitter.on(',').omitEmptyStrings().split("a,,c,d")` returns `"a", "c", "d"`
[`trimResults()`]            | 从结果中删除空格;相当于 `trimResults(CharMatcher.WHITESPACE)`. | `Splitter.on(',').trimResults().split("a, b, c, d")` returns `"a", "b", "c", "d"`
[`trimResults(CharMatcher)`] | 从结果中删除与指定的`CharMatcher`匹配的字符。                     | `Splitter.on(',').trimResults(CharMatcher.is('_')).split("_a ,_b_ ,c__")` returns `"a ", "b_ ", "c"`.
[`limit(int)`]               | 返回指定数目的字符串后停止分割。               | `Splitter.on(',').limit(3).split("a,b,c,d")` returns `"a", "b", "c,d"`

如果您希望得到 `List`, 使用[`splitToList()`][`Splitter.splitToList(CharSequence)`] 替代 `split()`.

**Warning:** splitter实例总是不可变的（immutable）。拆分器配置方法总是返回一个新的`Splitter`，您必须使用它来获得所需的语义。
这使得任何`Splitter`线程都是安全的，并且可以作为`static final`常量使用。

#### Map Splitters

还可以使用拆分器通过使用[`withKeyValueSeparator()`][`Splitter.withKeyValueSeparator()`]指定第二个分隔符来反序列化映射。
结果 [`MapSplitter`]将使用splitter的分隔符将输入分割为条目，然后使用给定的键值分隔符将这些条目分割为键和值，返回`Map<String, String>`。

<!-- Hidden Section (why?)
## Escaper

Escaping strings correctly -- converting them into a format safe for inclusion
in e.g. an XML document or a Java source file -- can be a tricky business, and
critical for security reasons. Guava provides a flexible API for escaping text,
and a number of built-in escapers, in the com.google.common.escape package.

All escapers in Guava extend the
[http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/escape/Escaper.html
Escaper] abstract class, and support the method String escape(String). Built-in
Escaper instances can be found in several classes, depending on your needs:
[http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/html/HtmlEscapers.html
HtmlEscapers],
[http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/xml/XmlEscapers.html
XmlEscapers],
[http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/escape/SourceCodeEscapers.html
SourceCodeEscapers],
[http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/net/UriEscapers.html
UriEscapers], or you can build your own with
[http://google.github.io/guava/releases/snapshot/api/docs/ an Escapers.Builder].
To inspect an Escaper, you can use Escapers.computeReplacement to find the
replacement string for a given character.
-->

## CharMatcher

在以前，我们的`StringUtil` 类不受检查，并且有许多类似的方法：

*   `allAscii`
*   `collapse`
*   `collapseControlChars`
*   `collapseWhitespace`
*   `lastIndexNotOf`
*   `numSharedChars`
*   `removeChars`
*   `removeCrLf`
*   `retainAllChars`
*   `strip`
*   `stripAndCollapse`
*   `stripNonDigits`

它们表示两个概念的部分叉乘:

1.  什么构成一个"matching"字符?
1.  如何处理这些"matching"字符?

为了简化这个泥沼，我们开发了 `CharMatcher`.

直观地说，您可以将`CharMatcher`视为表示特定类型的字符，如数字或空格。实际上，`CharMatcher`只是一个基于字符的布尔谓词
-- 事实上，`CharMatcher`实现了[`Predicate<Character>`] -- 但是由于"all whitespace characters"或"all lowercase letters"是很常见的，
所以Guava为字符提供了这种专门的语法和API。

但是，`CharMatcher`的功能在于，它允许您在出现指定类型的字符时执行以下 _操作_:
修剪(trimming)、折叠(collapsing)、删除(removing)、保留(retaining)等等。类型为`CharMatcher`的对象表示
概念1:什么构成匹配字符?然后它提供了许多操作来回答
概念2:如何处理那些匹配的字符?结果是，API的复杂度线性增加，而灵活性和功能却呈二次增长。耶!

```java
String noControl = CharMatcher.javaIsoControl().removeFrom(string); // remove control characters
String theDigits = CharMatcher.digit().retainFrom(string); // only the digits
String spaced = CharMatcher.whitespace().trimAndCollapseFrom(string, ' ');
  // trim whitespace at ends, and replace/collapse whitespace into single spaces
String noDigits = CharMatcher.javaDigit().replaceFrom(string, "*"); // star out all digits
String lowerAndDigit = CharMatcher.javaDigit().or(CharMatcher.javaLowerCase()).retainFrom(string);
  // eliminate all characters that aren't digits or lowercase
```

**Note:** `CharMatcher`只处理`char`值;它不理解范围为0x10000到0x10FFFF的补充Unicode代码点。
这些逻辑字符使用代理对编码成一个`String`，而`CharMatcher`将它们视为两个单独的字符。

### Obtaining CharMatchers

提供的`CharMatcher`工厂方法可以满足许多需求:

*   [`any()`]
*   [`none()`]
*   [`whitespace()`]
*   [`breakingWhitespace()`]
*   [`invisible()`]
*   [`digit()`]
*   [`javaLetter()`]
*   [`javaDigit()`]
*   [`javaLetterOrDigit()`]
*   [`javaIsoControl()`]
*   [`javaLowerCase()`]
*   [`javaUpperCase()`]
*   [`ascii()`]
*   [`singleWidth()`]

其他获得`CharMatcher`的常见方法包括:

Method                  | Description
:---------------------- | :----------
[`anyOf(CharSequence)`] | 指定希望匹配的所有字符。例如，`CharMatcher.anyOf("aeiou")`匹配小写英语元音。
[`is(char)`]            | 指定要匹配的字符。
[`inRange(char, char)`] | 指定要匹配的字符范围，例如： `CharMatcher.inRange('a', 'z')`.

此外，`CharMatcher`具有[`negate()`] （否定）、[`and(CharMatcher)`]和[`or(CharMatcher)`]。它们在 `CharMatcher`上提供简单的布尔操作。

### Using CharMatchers

`CharMatcher`提供了[wide variety]方法来操作任何`CharSequence`中指定字符的出现。提供的方法比我们在这里列出的要多，但其中一些最常用的方法是:

Method                                      | Description
:------------------------------------------ | :----------
[`collapseFrom(CharSequence, char)`]        | 用指定的字符替换每组连续匹配的字符。例如,`WHITESPACE.collapseFrom(string, ' ')`将空格压缩为一个空格。
[`matchesAllOf(CharSequence)`]              | 测试此匹配器是否匹配序列中的所有字符。例如，`ASCII.matchesAllOf(string)`测试字符串中的所有字符是否为ASCII。
[`removeFrom(CharSequence)`]                | 从序列中删除匹配的字符。
[`retainFrom(CharSequence)`]                | 从序列中删除所有不匹配的字符。
[`trimFrom(CharSequence)`]                  | 删除开头和结尾匹配的字符。
[`replaceFrom(CharSequence, CharSequence)`] | 用给定的序列替换匹配的字符。

(注意: 所有这些方法返回结果为 `String`, 除了 `matchesAllOf`返回结果为 `boolean`.)

## Charsets

不要这样做:

```java
try {
  bytes = string.getBytes("UTF-8");
} catch (UnsupportedEncodingException e) {
  // how can this possibly happen?
  throw new AssertionError(e);
}
```

而应该这样做:

```java
bytes = string.getBytes(Charsets.UTF_8);
```

[`Charsets`]提供对所有Java平台实现保证支持的六个标准 `Charset`实现的常量引用。
使用它们而不是按它们的名称引用字符集。

任务:字符集的解释和何时使用

(Note: If you're using JDK7, you should use the constants in [`StandardCharsets`]

## CaseFormat

`CaseFormat`是一个方便的小类之间的转换ASCII大小写约定-例如，编程语言的命名约定。支持的格式包括:

Format               | Example
:------------------- | :-----------------
[`LOWER_CAMEL`]      | `lowerCamel`
[`LOWER_HYPHEN`]     | `lower-hyphen`
[`LOWER_UNDERSCORE`] | `lower_underscore`
[`UPPER_CAMEL`]      | `UpperCamel`
[`UPPER_UNDERSCORE`] | `UPPER_UNDERSCORE`

使用它相对简单:

```java
CaseFormat.UPPER_UNDERSCORE.to(CaseFormat.LOWER_CAMEL, "CONSTANT_NAME")); // returns "constantName"
```

我们发现这特别有用，例如，当编写生成其他程序的程序时。

## Strings

有限数量的通用`String`实用程序驻留在[`Strings`]类中。

[`Joiner`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Joiner.html
[`Splitter`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Splitter.html
[`Splitter.on(char)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Splitter.html#on-char-
[`Splitter.on(CharMatcher)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Splitter.html#on-com.google.common.base.CharMatcher-
[`Splitter.on(String)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Splitter.html#on-java.lang.String-
[`Splitter.on(Pattern)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Splitter.html#on-java.util.regex.Pattern-
[`Splitter.onPattern(String)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Splitter.html#onPattern-java.lang.String-
[`Splitter.fixedLength(int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Splitter.html#fixedLength-int-
[`Splitter.splitToList(CharSequence)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Splitter.html#splitToList-java.lang.CharSequence-
[`Splitter.withKeyValueSeparator()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Splitter.html#withKeyValueSeparator-java.lang.String-
[`MapSplitter`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Splitter.MapSplitter.html
[`omitEmptyStrings()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Splitter.html#omitEmptyStrings--
[`trimResults()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Splitter.html#trimResults--
[`trimResults(CharMatcher)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Splitter.html#trimResults-com.google.common.base.CharMatcher-
[`limit(int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Splitter.html#limit-int-
[`any()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#any--
[`none()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#none--
[`whitespace()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#whitespace--
[`breakingWhitespace()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#breakingWhitespace--
[`invisible()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#invisible--
[`digit()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#digit--
[`javaLetter()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#javaLetter--
[`javaDigit()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#javaDigit--
[`javaLetterOrDigit()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#javaLetterOrDigit--
[`javaIsoControl()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#javaIsoControl--
[`javaLowerCase()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#javaLowerCase--
[`javaUpperCase()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#javaUpperCase--
[`ascii()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#ascii--
[`singleWidth()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#singleWidth--
[`anyOf(CharSequence)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#anyOf-java.lang.CharSequence-
[`is(char)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#is-char-
[`inRange(char, char)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#inRange-char-char-
[`negate()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#negate--
[`and(CharMatcher)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#and-com.google.common.base.CharMatcher-
[`or(CharMatcher)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#or-com.google.common.base.CharMatcher-
[wide variety]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#method_summary
[`collapseFrom(CharSequence, char)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#collapseFrom-java.lang.CharSequence-char-
[`matchesAllOf(CharSequence)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#matchesAllOf-java.lang.CharSequence-
[`removeFrom(CharSequence)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#removeFrom-java.lang.CharSequence-
[`retainFrom(CharSequence)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#retainFrom-java.lang.CharSequence-
[`trimFrom(CharSequence)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#trimFrom-java.lang.CharSequence-
[`replaceFrom(CharSequence, CharSequence)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CharMatcher.html#replaceFrom-java.lang.CharSequence-java.lang.CharSequence-
[`Charsets`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Charsets.html
[`StandardCharsets`]: http://docs.oracle.com/javase/7/docs/api/java/nio/charset/StandardCharsets.html
[`LOWER_CAMEL`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CaseFormat.html#LOWER_CAMEL
[`LOWER_HYPHEN`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CaseFormat.html#LOWER_HYPHEN
[`LOWER_UNDERSCORE`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CaseFormat.html#LOWER_UNDERSCORE
[`UPPER_CAMEL`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CaseFormat.html#UPPER_CAMEL
[`UPPER_UNDERSCORE`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/CaseFormat.html#UPPER_UNDERSCORE
[`Strings`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Strings.html
[`Predicate\<Character>`]: FunctionalExplained#predicate
