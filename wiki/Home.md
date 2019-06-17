# 用户指南

Guava项目包含几个我们在基于java的项目中依赖的谷歌核心库:集合、缓存、原语支持、并发库、公共注释、字符串处理、I/O等等。在生产服务中，谷歌人每天都在使用这些工具。

但是遍历Javadoc并不总是学习如何充分利用库的最有效方法。在这里，我们试图提供可读性和愉快的解释，一些最受欢迎和最强大的功能Guava。


_这个wiki正在进行中，部分内容可能还在构建中.

  * Basic utilities: 基本实用程序:使使用Java语言变得更愉快.
    * [[Using and avoiding null|UsingAndAvoidingNullExplained]]: `null`可能是含糊不清的，可能会导致令人困惑的错误，有时甚至是令人不愉快的。许多Guava工具集拒绝和在nulls迅速失败，而不是盲目地接受他们。
    * [[Preconditions|PreconditionsExplained]]: 更容易地测试方法的先决条件。
    * [[Common object methods|CommonObjectUtilitiesExplained]]: 简化实现`Object`方法，比如`hashCode()`和`toString()`。
    * [[Ordering|OrderingExplained]]: Guava强大的"流畅的 `Comparator`"  类.
    * [[Throwables|ThrowablesExplained]]: 简化异常和错误的传播和检查.
  * Collections: Guava对JDK collection生态系统的扩展。这些是Guava最成熟和最受欢迎的部分。
    * [[Immutable collections|ImmutableCollectionsExplained]], 用于防御性编程、常量收集和提高效率。
    * [[New collection types|NewCollectionTypesExplained]], 对于JDK集合不能很好地处理的用例:多集合(multisets)、多映射(multimaps)、表(tables)、双向映射(bidirectional maps)等等。
    * [[Powerful collection utilities|CollectionUtilitiesExplained]], 针对 `java.util.Collections`中未提供的通用操作.
    * [[Extension utilities|CollectionHelpersExplained]]: 编写一个“集合(`Collection`)”装饰器?实施“迭代器(`Iterator`)”?我们可以让它更简单。
  * [[Graphs|GraphsExplained]]: 用于建模[graph](https://en.wikipedia.org/wiki/Graph_\(discrete_mathematics\))结构化数据的库 ，即实体及它们之间的关系。主要功能包括：
    * [Graph](https://github.com/google/guava/wiki/GraphsExplained#graph): 一个图形，其边缘是匿名实体，没有自己的身份或信息。
    * [ValueGraph](https://github.com/google/guava/wiki/GraphsExplained#valuegraph): 边与非唯一值关联的图。
    * [Network](https://github.com/google/guava/wiki/GraphsExplained#network): 边是唯一对象的图。
    * 支持可变和不可变、有向和无向以及其他一些属性的图。
  * [[Caches|CachesExplained]]: 本地缓存，正确完成，并支持各种过期行为
  * [[Functional idioms|FunctionalExplained]]: 谨慎使用,Guava的函数习惯用法可以显著简化代码。
  * Concurrency: 强大、简单的抽象，使编写正确的并发代码变得更容易。
    * [[ListenableFuture|ListenableFutureExplained]]: 未来契约，完成后回调
    * [[Service|ServiceExplained]]: 启动和关闭的东西，为您处理困难的状态逻辑。
  * [[Strings|StringsExplained]]: 一些非常有用的字符串实用程序:分割、连接、填充等等。
  * [[Primitives|PrimitivesExplained]]: 在原始类型，如操作`int`和`char`，而不是由JDK提供的，包括某些类型的无符号的变种。
  * [[Ranges|RangesExplained]]: Guava强大的API，用于处理`Comparable`类型的范围，包括连续和离散。
  * [[I/O|IOExplained]]: 简化的I / O操作，尤其是对于Java 5和6的整个I / O流和文件。
  * [[Hashing|HashingExplained]]: 用于比`Object.hashCode()`提供的更复杂的散列的工具，包括Bloom过滤器。
  * [[EventBus|EventBusExplained]]: 组件之间的发布-订阅式通信，而不需要组件彼此显式注册。
  * [[Math|MathExplained]]: 优化了JDK没有提供的经过全面测试的数学实用程序。
  * [[Reflection|ReflectionExplained]]: 用于Java反射功能的Guava实用程序。
  * 小贴士:用Guava让你的应用程序按照你想要的方式运行。
    * [[Philosophy|PhilosophyExplained]]: Guava是什么，不是什么，以及我们的目标。
    * [[Using Guava in your build|UseGuavaInYourBuild]], 使用Maven、Gradle等构建系统。
    * [[Using ProGuard|UsingProGuardWithGuava]] 避免捆绑您不使用JAR的Guava部分。。
    * [[Apache Commons equivalents|ApacheCommonCollectionsEquivalents]], 帮助您使用Apache Commons Collections翻译代码
    * [[Compatibility|Compatibility]], Guava版本之间的细节.
    * [[Idea Graveyard|IdeaGraveyard]], 功能请求已被最终拒绝。
    * [[Friends|FriendsOfGuava]], open-source projects we like and admire.
    * [[HowToContribute|HowToContribute]], how to contribute to Guava.

**NOTE:** To discuss the contents of this wiki, please just use the guava-discuss mailing list.
