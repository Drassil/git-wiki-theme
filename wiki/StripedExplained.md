# Striped 条纹

在Guava 13.0中发布的[`Striped`]是一个以可配置、灵活的方式为对象分配锁的工具。

当你想将一个锁与一个对象关联时，你需要的关键保证是，如果`key1.equals(key2)`，那么与`key1`关联的锁(lock)与`key2`关联的锁相同。

要做到这一点，最简单的方法是将每个键与相同的锁相关联，这将导致尽可能粗的同步。另一方面，您可以将每个不同的键与一个不同的锁相关联，
但这需要线性内存消耗和锁系统本身的并发管理，因为新的键被发现了。

`Striped`允许程序员选择一些锁(locks)，这些锁根据它们的哈希代码分布在键之间。这允许程序员在并发性和内存消耗之间动态选择一个折衷方案，同时保持密钥不变，
如果 `key1.equals(key2)`，则`striped.get(key1) == striped.get(key2)`。

`Striped`包含允许它用于 [`Lock`],[`ReadWriteLock`], 或 [`Semaphore`]的重载。

此外， `Striped`还提供了其中每种类型的变体，这些变体具有延迟初始化、弱引用的锁。本质上，当没有线程仍然引用某个锁时，它就不能等待或等待释放，因此可以安全地对其进行垃圾收集；如果在任何给定时间只使用几个锁，这可以减少内存消耗。

[`Striped`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Striped.html
[`Lock`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Striped.html#lock-int-
[`ReadWriteLock`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Striped.html#readWriteLock-int-
[`Semaphore`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Striped.html#semaphore-int-int-
