# Ten Things About Immutable Collections 关于不变集合的十件事

(In progress. rough outline.)

1. 内存效率。如果没有易变性，就不需要为稍后可能添加的元素留出空间。不可变集合总是比可变等价集合更紧凑。
1. 排序保留。每个不可变的集合（当然，除了排序的集合）按照元素添加到生成器中的顺序迭代元素。
1. copyOf() 短路。对于传递给方法的集合，可以始终以防御的方式调用ImmutableXXX.copyOf，如果集合已经是不可变的，并且集合不是更大集合的局部视图，那么它实际上不会进行复制。
1.  它们是类型，而不是实现 -- 将它们看作接口。
1.  ImmutableCollections 有一个 asList() 视图
1.  他们不喜欢 null.
1.  它们是如何比unmodifiable()（即不可修改）的要好
1.  ImmutableList 有个一个反转方法 reverse() 视图
1.  他们有构造者 builders
1.  它们不会试图保护您免受equals()或hashCode()方法运行缓慢的影响。
1.  与所有不可变对象一样，没有线程安全问题(只要内容是线程安全的)
