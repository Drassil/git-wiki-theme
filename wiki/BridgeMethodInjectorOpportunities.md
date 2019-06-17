# 桥接方法注入机会

## 在Guava中我们可以在哪里使用 [Bridge Method Injector](http://bridge-method-injector.infradna.com/) ?

我们还不确定我们是否想要使用它，但是做出这个决定的一部分是在我们面前有一个可能的用途列表。

请注意，任何这些更改都可能引入源代码不兼容性(例如，对于那些调用“ImmutableSet.of(immediateFuture(…))”的人)。
Note that any of these changes might introduce source incompatibilities (e.g.,
for people who call `ImmutableSet.of(immediateFuture(...)))`.

*   `Iterables.(various)` -> `FluentIterable`
*   `ImmutableMultiset.elementSet` -> `ImmutableSet`
*   `Iterators.forArray, singletonIterator` -> `UnmodifiableListIterator`
*   `Splitter.split` -> `List` (or `FluentIterable` if we could depend on
    `collect` from `base`)
*   `Sets.filter` (etc.) -> `SetView`
*   `Futures.immediate*Future` -> `ListenableScheduledFuture`?
