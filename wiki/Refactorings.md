# Refactorings 重构


Guava作为一个库，频繁地反对api，尽管我们(不再删除)没有标注`@Beta`的api。在谷歌中，我们更积极地弃用和删除api，
因为我们有适当的基础设施来重构整个谷歌代码库，使之远离我们希望消除的api，所以我们可以使api发挥作用。(关于这个基础设施的一些背景可以在[here][monolithic]找到。)

为了减少升级Guava版本的痛苦，并帮助用户从我们认为不受欢迎的api迁移，我们正在尝试发布一些内部重构。目前，这些重构使用[Refaster][refaster]，这是我们开发的一个重构工具，它基于Java中简单的before-and-after代码示例进行重构。

目前，Refaster是作为谷歌的Java编译器工具项目，[Error Prone]的一部分发布的。我们对
Refaster还处于实验阶段，但我们希望您对它感兴趣。文档可以在[here][refaster-docs]找到。Guava释放的[refactorings released with Guava][refactorings]应该直接按照这些说明来应用。

这是一个实验，我们希望你会发现它有用。如果这些重构对您有用——或者不奏效!请让我们知道。

[monolithic]: https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext
[refaster]: https://research.google.com/pubs/archive/41876.pdf
[refaster-docs]: https://errorprone.info/docs/refaster
[refactorings]: https://github.com/google/guava/tree/master/refactorings
[no longer delete]: https://groups.google.com/forum/?utm_medium=email&utm_source=footer#!msg/guava-discuss/rX-QXo-67ZU/gLEvfV4CAwAJ
[Error Prone]: https://github.com/google/error-prone
