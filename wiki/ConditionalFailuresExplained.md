# Conditional Failures(条件失败)

_条件失败_，或 _运行时检查_，是任何在布尔条件成立时抛出异常的代码。
当然，这种代码在设计良好的软件中很普遍。本页概述了此类检查的常见类型。


## Kinds of conditional failures(各种条件失效)

可以用同样的方法轻松地处理每个条件失败:`if (!condition) throw new RuntimeException();`
但是，如果您花一点时间来考虑正在执行的检查的性质，并以最合适的方式处理它，您将使代码更容易理解，更容易诊断错误。

以下是主要的运行时检查类型。

**先决条件检查(precondition check)**确保公共方法的调用者遵守了方法规范的要求。例如，`sqrt`函数可能只接受非负参数。

传统的**断言(assertion)**是一个检查，只有当 _类本身_ (包含该检查)以某种方式被破坏时才会失败。
(在某些情况下，这可以扩展到包(package).)这些可以采取各种形式，包括后置条件(postconditions)、

当您对所使用的API是否符合其(实际的或隐含的)规范缺乏足够的信心时，可以使用**验证检查(verification check)**。
将这种类型的检查理解为"几乎在所有方面都像一个断言，但是我们永远不想禁用它们"是最简单的。

只在测试代码中找到**测试断言(test assertion)**，并确保被测试的代码符合其自身规范的要求。
注意，这种"断言(assertion)"与生产代码中的真正断言几乎没有任何共同之处。

一个**不可能的条件检查(impossible-condition check)**是一个不可能失败的检查，除非稍后修改周围的代码，
或者严重违反我们对平台行为的最深层假设。这些应该是不必要的，但通常是强制的，因为编译器不能识别语句是不可访问的，
或者因为我们知道一些关于控制流的信息，而编译器不能推断这些信息。

最后，一个**异常结果(exceptional result)**意味着该方法不能提供预期的结果，这既不是由于它自身的错误，
也不一定是由于涉及到的任何其他代码的错误。这可能类似于先决条件检查(verification check)，只是在这种情况下，
调用者不应该知道得更多。它类似于验证检查，但是依赖项失败并不意外。例如，当已经到达文件末尾时，试图从文件中读取一行
并不是任何人的错;只是一个例外的结果。根据 _Effective Java, Second Edition_  Item 58, page 244中的建议，使用一个选中的或未选中的异常。

### Summary

| 检查类型       | 抛出方法是说...                     | 通常表示用...       |
|:--------------|:---------------------------------|:------------------|
| [Precondition] | "你搞砸了(调用者)。"        | [`IllegalArgumentException`], [`IllegalStateException`] |
| Assertion     | "我搞砸了。"                   | [`assert`], [`AssertionError`] |
| [Verification]  | "我所依赖的人搞砸了。" | [`VerifyException`] |
| Test assertion | "我测试的代码搞砸了。" | [`assertThat`], [`assertEquals`], [`AssertionError`] |
| Impossible condition | "这是什么?世界一团糟!" | [`AssertionError`] |
| Exceptional result | "没有人搞砸，完全正确(至少在这个虚拟机中)。" | other checked or unchecked exceptions |

### It's not the condition itself, it's the context(不是条件本身，而是环境)

请注意，相同的条件(例如负的员工ID)在系统的某个部分(用户界面或系统到系统界面)中可能是一个“异常结果”，
而在该点以下的所有公共API边界中，它是一个"先决条件(Precondition)"。如果出于某种原因对非公共方法参数执行相同的检查，
那么它将被正确地认为是一个"断言(Assertion)"，因为我们的先决条件应该防止异常值走得太远。
上下文才是最重要的，而使用不同种类的条件失败传达了上下文。

[Precondition]: https://github.com/google/guava/wiki/PreconditionsExplained
[`IllegalArgumentException`]: https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalArgumentException.html
[`IllegalStateException`]: https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html
[`assert`]: https://docs.oracle.com/javase/8/docs/technotes/guides/language/assert.html
[`AssertionError`]: https://docs.oracle.com/javase/8/docs/api/java/lang/AssertionError.html
[Verification]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/Verify.html
[`VerifyException`]: https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/VerifyException.html
[`assertThat`]: http://google.github.io/truth/
[`assertEquals`]: http://junit.sourceforge.net/javadoc/org/junit/Assert.html
