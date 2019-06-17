# Hashing

## Overview 概览

Java内置的哈希码概念被限制为32位，并且没有在哈希算法和它们所作用的数据之间提供分离，
因此无法轻松替换替代的哈希算法。而且，hashCode的实现往往质量很差，部分原因是它们
最终依赖于其他质量很差的hashCode实现，包括许多JDK类中的实现。

Object.hashCode实现往往非常快，但是具有较弱的冲突预防能力，并且没有位分散的预期。
这使得它们非常适合在哈希表中使用，因为额外的冲突只会对性能造成轻微的影响，而使用辅助哈希函数
(Java中所有合理的哈希表实现都使用这个函数)可以很容易地纠正糟糕的位分散。然而，对于简单哈希表之外的哈希函数的许多用法，
`Object.hashCode`几乎总是不够，因此[`com.google.common.hash`]。


## Organization 组织

查看Javadoc包，我们可以看到很多不同的类型，但是不清楚它们是如何组合在一起的。

让我们看一段使用这个库的示例代码。

```java
HashFunction hf = Hashing.md5();
HashCode hc = hf.newHasher()
       .putLong(id)
       .putString(name, Charsets.UTF_8)
       .putObject(person, personFunnel)
       .hash();
```

#### HashFunction

[`HashFunction`]是一个纯粹的无状态函数，它将任意数据块映射到固定数量的位，其属性是相等的输入总是产生相等的输出，而不相等的输入总是产生不相等的输出。

#### Hasher

可以要求`HashFunction` 提供有状态的[`Hasher`]，它提供了流畅的语法来将数据添加到散列中，然后检索散列值。
`Hasher`可以接受任何基本输入、字节数组、字节数组切片、字符序列、某些字符集中的字符序列等等，或者任何其他`Object`，只要提供适当的`Funnel`即可。

`Hasher`实现了`PrimitiveSink`接口，它为接受原始值流的对象指定了一个流畅的API。

#### Funnel

[`Funnel`]描述如何将特定对象类型分解为基本字段值。例如，如果我们有:

```java
class Person {
  final int id;
  final String firstName;
  final String lastName;
  final int birthYear;
}
```

我们的`Funnel`可能是这样的:

```java
Funnel<Person> personFunnel = new Funnel<Person>() {
  @Override
  public void funnel(Person person, PrimitiveSink into) {
    into
        .putInt(person.id)
        .putString(person.firstName, Charsets.UTF_8)
        .putString(person.lastName, Charsets.UTF_8)
        .putInt(birthYear);
  }
};
```

_注意:_ `putString("abc", Charsets.UTF_8).putString("def", Charsets.UTF_8)` 完全等价于
 `putString("ab", Charsets.UTF_8).putString("cdef",Charsets.UTF_8)`, 因为它们产生相同的字节序列。
 这可能导致意外的哈希冲突。添加某种类型的分隔符可以帮助消除意外的哈希冲突。

#### HashCode

一旦`Hasher`获得了所有输入，就可以使用它的[`hash()`]方法检索[`HashCode`]。
`HashCode`支持相等测试等，以及[`asInt()`], [`asLong()`], [`asBytes()`]方法，
此外还有[`writeBytesTo(array, offset, maxLength)`]，它将散列的第一个 `maxLength`字节写入数组。

### BloomFilter

Bloom过滤器(Bloom filters)是一个可爱的散列应用程序，不能简单地使用`Object.hashCode()`来完成。
简单地说，Bloom过滤器是一种概率数据结构，允许您测试对象是否确实不在过滤器中，或者是否添加到了Bloom过滤器中。
[Wikipedia page](http://en.wikipedia.org/wiki/Bloom_filter)相当全面，我们推荐[本教程](http://llimllib.github.com/bloomfilter-tutorial/)。

我们的哈希库有一个内置的Bloom filter实现，它只需要您实现一个`Funnel`来将您的类型分解为基本类型。
您可以使用[`create(Funnel funnel, int expectedInsertions, double falsePositiveProbability)`]获得一个新的[`BloomFilter<T>`]，
或者接受3%的默认错误概率。`BloomFilter<T>`提供了[`boolean mightContain(T)`] 和 [`void put(T)`]方法，这两个方法非常容易解释。

```java
BloomFilter<Person> friends = BloomFilter.create(personFunnel, 500, 0.01);
for (Person friend : friendsList) {
  friends.put(friend);
}
// much later
if (friends.mightContain(dude)) {
  // 如果一个人不是朋友，他到达这个地方的概率是1%(the probability that dude reached this place if he isn't a friend is 1%)
  // 例如，我们可以在进行更昂贵的精确检查时，开始为dude异步加载内容(we might, for example, start asynchronously loading things for dude while we do a more expensive exact check)
}
```

## Hashing

`Hashing`实用程序类提供了许多股票哈希函数和实用程序来操作`HashCode`对象。

### 提供的HASH函数

*   [`md5()`]
*   [`murmur3_128()`]
*   [`murmur3_32()`]
*   [`sha1()`]
*   [`sha256()`]
*   [`sha512()`]
*   [`goodFastHash(int bits)`]

### HashCode 运算

Method                                            | Description
:------------------------------------------------ | :----------
[`HashCode combineOrdered(Iterable<HashCode>)`]   | 以有序的方式组合散列代码，因此，如果从该方法获得的两个散列是相同的，那么很可能每个散列都是按照相同的顺序从相同的散列计算出来的。
[`HashCode combineUnordered(Iterable<HashCode>)`] | 以无序的方式组合散列代码，因此，如果从该方法获得的两个散列是相同的，那么很可能每个散列都是按某种顺序从相同的散列计算出来的。
[`int consistentHash(HashCode, int buckets)`]     | 为哈希代码分配一个一致的“桶(bucket)”，这样可以在桶的数量增加时最小化重新映射的需要。更多详情访问 [Wikipedia](http://en.wikipedia.org/wiki/Consistent_hashing)。

[`com.google.common.hash`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/package-summary.html
[`HashFunction`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/HashFunction.html
[`Hasher`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/Hasher.html
[`Funnel`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/Funnel.html
[`hash()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/Hasher.html#hash--
[`HashCode`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/HashCode.html
[`asInt()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/HashCode.html#asInt--
[`asLong()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/HashCode.html#asLong--
[`asBytes()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/HashCode.html#asBytes--
[`writeBytesTo(array, offset, maxLength)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/HashCode.html#writeBytesTo-byte[]-int-int-
[`BloomFilter<T>`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/BloomFilter.html
[`create(Funnel funnel, int expectedInsertions, double falsePositiveProbability)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/BloomFilter.html#create-com.google.common.hash.Funnel-int-double-
[`boolean mightContain(T)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/BloomFilter.html#mightContain-T-
[`void put(T)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/BloomFilter.html#put-T-
[`md5()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/Hashing.html#md5--
[`murmur3_128()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/Hashing.html#murmur3_128--
[`murmur3_32()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/Hashing.html#murmur3_32--
[`sha1()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/Hashing.html#sha1--
[`sha256()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/Hashing.html#sha256--
[`sha512()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/Hashing.html#sha512--
[`goodFastHash(int bits)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/Hashing.html#goodFastHash-int-
[`HashCode combineOrdered(Iterable<HashCode>)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/Hashing.html#combineOrdered-java.lang.Iterable-
[`HashCode combineUnordered(Iterable<HashCode>)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/Hashing.html#combineUnordered-java.lang.Iterable-
[`int consistentHash(HashCode, int buckets)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/hash/Hashing.html#consistentHash-com.google.common.hash.HashCode-int-
