# I/O utilities I/O实用程序

## `ByteStreams` 和 `CharStreams`

Guava使用术语“流stream”来指代I/O数据的`Closeable`流，这些数据在底层资源中具有位置状态。
术语"`byte` stream"指的是`InputStream`或`OutputStream`，而"`char` stream"指的是`Reader`或`Writer`
(尽管它们的超类型`Readable`和`Appendable`通常用作方法参数类型)。相应的实用程序分为实用程序类[`ByteStreams`] 和 [`CharStreams`]。

大多数Guava流相关的实用程序一次处理整个流，并/或处理自己的缓冲以提高效率。还要注意，获取流的Guava方法 _不会_ 关闭流:关闭流通常由打开流的代码负责。

这些类提供的一些方法包括:

| **`ByteStreams`**                                   | **`CharStreams`**                      |
| :-------------------------------------------------- | :------------------------------------- |
| [`byte[] toByteArray(InputStream)`][ByteStreams.toByteArray] | [`String toString(Readable)`] |
| N/A                                                 | [`List<String> readLines(Readable)`]   |
| [`long copy(InputStream, OutputStream)`]            | [`long copy(Readable, Appendable)`]    |
| [`void readFully(InputStream, byte[])`][ByteStreams.readFully] | N/A                         |
| [`void skipFully(InputStream, long)`]               | [`void skipFully(Reader, long)`]       |
| [`OutputStream nullOutputStream()`]                 | [`Writer nullWriter()`]                |

## Sources and sinks

创建I/O实用程序方法可以帮助您在执行基本操作时完全避免处理流，这是很常见的。例如，Guava有
`Files.toByteArray(File)`和`Files.write(File, byte[])`。然而，您最终会得到分散在各地的类似方法，
每个方法都处理不同类型的数据 _source_ 或数据 _sink_，可以将数据写入这些数据源 ( _source_ ) 或接收器( _sink_ )。
例如，Guava有`Resources.toByteArray(URL)`，它的作用与`Files.toByteArray(File)`相同，但使用`URL`作为数据源而不是文件。

为了解决这个问题，Guava在不同类型的数据源(sources)和接收器(sinks)上有一组抽象。源或接收器是某种您知道如何打开新流的资源，
例如`File` 或 `URL`。源是可读的，而汇是可写的。此外，根据处理的是`byte`数据还是`char`数据，可以分解源和接收器。

**Operations** | **Bytes**      | **Chars**
:------------- | :------------- | :-------------
**Reading**    | [`ByteSource`] | [`CharSource`]
**Writing**    | [`ByteSink`]   | [`CharSink`]

这些api的优点是它们提供了一组通用的操作。例如，一旦您将数据源包装为`ByteSource`，无论数据源是什么，您都会得到相同的方法集。

#### Creating sources and sinks

番石榴提供了许多源(source)和接收器(sink)的实现:

**Bytes**                                       | **Chars**
:---------------------------------------------- | :--------
[`Files.asByteSource(File)`]                    | [`Files.asCharSource(File, Charset)`]
[`Files.asByteSink(File, FileWriteMode...)`]    | [`Files.asCharSink(File, Charset, FileWriteMode...)`]
[`MoreFiles.asByteSource(Path, OpenOption...)`] | [`MoreFiles.asCharSource(Path, Charset, OpenOption...)`]
[`MoreFiles.asByteSink(Path, OpenOption...)`]   | [`MoreFiles.asCharSink(Path, Charset, OpenOption...)`]
[`Resources.asByteSource(URL)`]                 | [`Resources.asCharSource(URL, Charset)`]
[`ByteSource.wrap(byte[])`][ByteSource.wrap]    | [`CharSource.wrap(CharSequence)`]
[`ByteSource.concat(ByteSource...)`]            | [`CharSource.concat(CharSource...)`]
[`ByteSource.slice(long, long)`]                | N/A
[`CharSource.asByteSource(Charset)`]            | [`ByteSource.asCharSource(Charset)`]
N/A                                             | [`ByteSink.asCharSink(Charset)`]

此外，您可以自己扩展源类和接收器类来创建新的实现。

**注意:** 虽然创建一个封装 _open_ stream(例如`InputStream`)的源或接收器很诱人，但是应该避免这样做。
您的源/接收器应该在每次调用它的`openStream()` 方法时打开一个新的流。这允许源或接收器控制该流的整个生命周期，
并允许它多次可用，而不是在第一次调用其上的任何方法时就变得不可用。此外,如果你打开流在创建源或接收器之前你可能
仍然需要正确处理确保流关闭代码中的其他地方如果抛出一个异常,这首先就破坏了使用源或接收器的许多优点。。

#### Using Sources and Sinks

一旦有了源或接收器实例，就可以访问许多读写操作。

##### Common operations

所有的源和接收器都提供了为读写打开新流的能力。默认情况下，其他操作都是通过调用
这些方法中的一个来获得流、执行一些操作，然后确保流是关闭的。

这些方法都已命名:

*   `openStream()` - 返回 `InputStream`, `OutputStream`, `Reader` 或
    `Writer` ,具体取决于源或接收器的类型。
*   `openBufferedStream()` - 根据源或接收器的类型返回`InputStream`, `OutputStream`,
    `BufferedReader` 或 `Writer`。如果需要，返回的流保证被缓冲。例如，从字节数组读取的源不需要额外的内存缓冲。
    这就是为什么这些方法不返回`BufferedInputStream`等，除非是在`BufferedReader`的情况下，因为它定义了`readLine()`方法。

##### Source operations

| **`ByteSource`**                          | **`CharSource`**                          |
| :---------------------------------------- | :---------------------------------------- |
| [`byte[] read()`][ByteSource.read]        | [`String read()`]                         |
| N/A                                       | [`ImmutableList<String> readLines()`]     |
| N/A                                       | [`String readFirstLine()`]                |
| [`long copyTo(ByteSink)`]                 | [`long copyTo(CharSink)`]                 |
| [`long copyTo(OutputStream)`]             | [`long copyTo(Appendable)`]               |
| [`Optional<Long> sizeIfKnown()`]          | [`Optional<Long> lengthIfKnown()`]        |
| [`long size()`]                           | [`long length()`]                         |
| [`boolean isEmpty()`][ByteSource.isEmpty] | [`boolean isEmpty()`][CharSource.isEmpty] |
| [`boolean contentEquals(ByteSource)`]     | N/A                                       |
| [`HashCode hash(HashFunction)`]           | N/A                                       |

##### Sink operations

| **`ByteSink`**                         | **`CharSink`**                                                |
| :------------------------------------- | :------------------------------------------------------------ |
| [`void write(byte[])`][ByteSink.write] | [`void write(CharSequence)`]                                  |
| [`long writeFrom(InputStream)`]        | [`long writeFrom(Readable)`]                                  |
| N/A                                    | [`void writeLines(Iterable<? extends CharSequence>)`]         |
| N/A                                    | [`void writeLines(Iterable<? extends CharSequence>, String)`] |

#### 例子

```java
// Read the lines of a UTF-8 text file
ImmutableList<String> lines = Files.asCharSource(file, Charsets.UTF_8)
    .readLines();

// Count distinct word occurrences in a file
Multiset<String> wordOccurrences = HashMultiset.create(
    Splitter.on(CharMatcher.whitespace())
        .trimResults()
        .omitEmptyStrings()
        .split(Files.asCharSource(file, Charsets.UTF_8).read()));

// SHA-1 a file
HashCode hash = Files.asByteSource(file).hash(Hashing.sha1());

// Copy the data from a URL to a file
Resources.asByteSource(url).copyTo(Files.asByteSink(file));
```

## `Files`

除了创建文件源和接收的方法之外，`Files`类还包含许多您可能感兴趣的方便方法。

| Method                              | Description                                                       |
| :---------------------------------- | :---------------------------------------------------------------- |
| [`createParentDirs(File)`]          | 创建文件的必要但不存在父目录。                                         |
| [`getFileExtension(String)`]        | 获取路径描述的文件的文件扩展名。                                       |
| [`getNameWithoutExtension(String)`] | 获取删除扩展名的文件的名称                                            |
| [`simplifyPath(String)`]            | 清理路径。不总是与文件系统一致；请仔细测试！                             |
| [`fileTraverser()`]                 | 返回可遍历文件树的`Traverser`                                        |

[`ByteStreams`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteStreams.html
[`CharStreams`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharStreams.html
[ByteStreams.toByteArray]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteStreams.html#toByteArray-java.io.InputStream-
[`String toString(Readable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharStreams.html#toString-java.lang.Readable-
[`List<String> readLines(Readable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharStreams.html#readLines-java.lang.Readable-
[`long copy(InputStream, OutputStream)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteStreams.html#copy-java.io.InputStream-java.io.OutputStream-
[`long copy(Readable, Appendable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharStreams.html#copy-java.lang.Readable-java.lang.Appendable-
[ByteStreams.readFully]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteStreams.html#readFully-java.io.InputStream-byte:A-
[`void skipFully(InputStream, long)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteStreams.html#skipFully-java.io.InputStream-long-
[`void skipFully(Reader, long)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharStreams.html#skipFully-java.io.Reader-long-
[`OutputStream nullOutputStream()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteStreams.html#nullOutputStream--
[`Writer nullWriter()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharStreams.html#nullWriter--
[`ByteSource`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSource.html
[`CharSource`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSource.html
[`ByteSink`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSink.html
[`CharSink`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSink.html
[`Files.asByteSource(File)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/Files.html#asByteSource-java.io.File-
[`Files.asCharSource(File, Charset)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/Files.html#asCharSource-java.io.File-java.nio.charset.Charset-
[`MoreFiles.asByteSource(Path, OpenOption...)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/MoreFiles.html#asByteSource-java.nio.file.Path-java.nio.file.OpenOption...-
[`MoreFiles.asCharSource(Path, Charset, OpenOption...)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/MoreFiles.html#asCharSource-java.nio.file.Path-java.nio.charset.Charset-java.nio.file.OpenOption...-
[`Files.asByteSink(File, FileWriteMode...)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/Files.html#asByteSink-java.io.File-com.google.common.io.FileWriteMode...-
[`MoreFiles.asByteSink(Path, OpenOption...)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/MoreFiles.html#asByteSink-java.nio.file.Path-java.nio.file.OpenOption...-
[`Files.asCharSink(File, Charset, FileWriteMode...)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/Files.html#asCharSink-java.io.File-java.nio.charset.Charset-com.google.common.io.FileWriteMode...-
[`MoreFiles.asCharSink(Path, Charset, OpenOption...)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/MoreFiles.html#asCharSink-java.nio.file.Path-java.nio.charset.Charset-java.nio.file.OpenOption...-
[`Resources.asByteSource(URL)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/Resources.html#asByteSource-java.net.URL-
[`Resources.asCharSource(URL, Charset)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/Resources.html#asCharSource-java.net.URL-java.nio.charset.Charset-
[ByteSource.wrap]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSource.html#wrap-byte:A-
[`CharSource.wrap(CharSequence)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSource.html#wrap-java.lang.CharSequence-
[`ByteSource.concat(ByteSource...)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSource.html#concat-com.google.common.io.ByteSource...-
[`CharSource.concat(CharSource...)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSource.html#concat-com.google.common.io.CharSource...-
[`ByteSource.slice(long, long)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSource.html#slice-long-long-
[`CharSource.asByteSource(Charset)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSource.html#asByteSource-java.nio.charset.Charset-
[`ByteSource.asCharSource(Charset)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSource.html#asCharSource-java.nio.charset.Charset-
[`ByteSink.asCharSink(Charset)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSink.html#asCharSink-java.nio.charset.Charset-
[ByteSource.read]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSource.html#read--
[`String read()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSource.html#read--
[`ImmutableList<String> readLines()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSource.html#readLines--
[`String readFirstLine()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSource.html#readFirstLine--
[`long copyTo(ByteSink)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSource.html#copyTo-com.google.common.io.ByteSink-
[`long copyTo(CharSink)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSource.html#copyTo-com.google.common.io.CharSink-
[`long copyTo(OutputStream)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSource.html#copyTo-java.io.OutputStream-
[`long copyTo(Appendable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSource.html#copyTo-java.lang.Appendable-
[`Optional<Long> sizeIfKnown()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSource.html#sizeIfKnown--
[`Optional<Long> lengthIfKnown()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSource.html#lengthIfKnown--
[`long size()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSource.html#size--
[`long length()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSource.html#length--
[ByteSource.isEmpty]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSource.html#isEmpty--
[CharSource.isEmpty]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSource.html#isEmpty--
[`boolean contentEquals(ByteSource)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSource.html#contentEquals-com.google.common.io.ByteSource-
[`HashCode hash(HashFunction)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSource.html#hash-com.google.common.hash.HashFunction-
[ByteSink.write]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSink.html#write-byte:A-
[`void write(CharSequence)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSink.html#write-java.lang.CharSequence-
[`long writeFrom(InputStream)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/ByteSink.html#writeFrom-java.io.InputStream-
[`long writeFrom(Readable)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSink.html#writeFrom-java.lang.Readable-
[`void writeLines(Iterable<? extends CharSequence>)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSink.html#writeLines-java.lang.Iterable-
[`void writeLines(Iterable<? extends CharSequence>, String)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/CharSink.html#writeLines-java.lang.Iterable-java.lang.String-
[`createParentDirs(File)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/Files.html#createParentDirs-java.io.File-
[`getFileExtension(String)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/Files.html#getFileExtension-java.lang.String-
[`getNameWithoutExtension(String)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/Files.html#getNameWithoutExtension-java.lang.String-
[`simplifyPath(String)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/Files.html#simplifyPath-java.lang.String-
[`fileTraverser()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/io/Files.html#fileTraverser--
