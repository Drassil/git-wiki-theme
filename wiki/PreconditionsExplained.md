# Preconditions 先决条件

Guava提供了一些前置条件检查实用程序。我们强烈建议静态导入这些。

每种方法都有三个变体:

1.  没有额外的参数。在没有错误消息的情况下抛出任何异常。
2.  一个额外的`Object`参数。任何异常都会抛出错误消息`object.toString()`.
3.  一个额外的`String`参数，带有任意数量的额外`Object`参数。它的行为类似于printf，但是对于GWT的兼容性和效率，它只允许`%s`指示器。
    *   注意: `checkNotNull`, `checkArgument` 和 `checkState`有大量重载，它们使用的是原始参数和`Object`参数的组合，
        而不是varargs数组&mdash;在绝大多数情况下，这允许上述调用避免原语装箱和varags数组分配。

第三种变体的例子:

```java
checkArgument(i >= 0, "Argument was %s but expected nonnegative", i);
checkArgument(i < j, "Expected i < j, but %s > %s", i, j);
```

Signature (not including extra args)                   | Description                                                                                                                                                                                                                                                                 | Exception thrown on failure
:----------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------
[`checkArgument(boolean)`]                             | 检查`boolean`是否为`true`。用于验证方法的参数。 | `IllegalArgumentException`
[`checkNotNull(T)`]                                    | 检查值是否为空(null)。直接返回值，因此可以内联使用`checkNotNull(value)`。 | `NullPointerException`
[`checkState(boolean)`]                                | 检查对象的某些状态，不依赖于方法参数。例如，一个`Iterator`可能使用它来检查在调用`remove`之前是否调用了`next`。 | `IllegalStateException`
[`checkElementIndex(int index, int size)`]             | 检查`index`是否为具有指定大小的列表、字符串或数组中的有效 _元素索引_。元素索引的范围可以从0(包括0)到`size`(**不包括size**) 。您不直接传递列表、字符串或数组;你只要通过它的大小。<br> 返回`index`。| `IndexOutOfBoundsException`
[`checkPositionIndex(int index, int size)`]            | 检查`index`是否为具有指定大小的列表、字符串或数组中的有效 _position位置_ 索引。位置索引的范围从0(含0)到`size`**(含size)**。您不直接传递列表、字符串或数组;你只要通过它的大小。.<br> 返回`index`。 | `IndexOutOfBoundsException`
[`checkPositionIndexes(int start, int end, int size)`] | 检查`[start, end)`是否是具有指定大小的列表、字符串或数组的有效子范围。带有自己的错误消息。 | `IndexOutOfBoundsException`

我们倾向于滚动我们自己的前置条件检查，而不是类似的Apache Commons实用程序，原因如下。简述:

*   在静态导入之后，Guava方法变得清晰明了。`checkNotNull`表明正在执行什么操作，以及将抛出什么异常。
*   `checkNotNull`在验证后返回它的参数，允许构造函数中使用简单的一行程序:`this.field = checkNotNull(field);`。
*   简单，varargs "printf-style"异常消息。(这也是为什么我们建议继续在[`Objects.requireNonNull`]上使用`checkNotNull`)

我们建议您将先决条件分割成不同的行，这可以帮助您确定在调试过程中哪个先决条件失败了。此外，您应该提供有用的错误消息，当每次检查都在它自己的行上时，这将更容易。

[`checkArgument(boolean)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Preconditions.html#checkArgument-boolean-
[`checkNotNull(T)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Preconditions.html#checkNotNull-T-
[`checkState(boolean)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Preconditions.html#checkState-boolean-
[`checkElementIndex(int index, int size)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Preconditions.html#checkElementIndex-int-int-
[`checkPositionIndex(int index, int size)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Preconditions.html#checkPositionIndex-int-int-
[`checkPositionIndexes(int start, int end, int size)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Preconditions.html#checkPositionIndexes-int-int-int-
[`Objects.requireNonNull`]: http://docs.oracle.com/javase/7/docs/api/java/util/Objects.html#requireNonNull(java.lang.Object,java.lang.String)
