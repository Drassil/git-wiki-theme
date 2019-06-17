# Closing Resources(关闭资源)

正确地关闭`Closeable`资源对于确保套接字连接被关闭、文件描述符不会泄漏等非常重要。
以及确保正确的程序行为。在jdk7之前，这是非常困难的，有许多陷阱可能不是很明显。
这是出了名的几乎从未正确地执行过，即使在JDK本身中也是如此。

下面是在JDK6中打开、使用和关闭`InputStream`的一些典型代码的例子:

```java
InputStream in = null;
try {
  in = openInputStream();
  // do something with in
} finally {
  if (in != null) {
    in.close();
  }
}
```

这段代码虽然比我们想要的复杂得多，但它是使用标准JDK api所能得到的最简单的代码。
不幸的是,即使它有一个问题:如果抛出一个异常在`try`块,然后抛出异常当调用`in.close()`的 `finally`,
`try`的异常块将吞下异常抛出的`finally`,你不会看到的细节错误甚至得到任何迹象表明它发生!

如果有两条流必须同时打开，情况会变得更糟:

```java
InputStream in = null;
try {
  in = openInputStream();
  OutputStream out = null;
  try {
    out = openOutputStream();
    // do something with in and out
  } finally {
    if (out != null) {
      out.close();
    }
  }
} finally {
  if (in != null) {
    in.close();
  }
}
```

这里嵌套的`try`/`finally`块非常不可读，代码仍然存在与上面一样的异常问题。

## Input vs. output streams

在关闭资源时，输入流和输出流之间有一个重要的区别。

对于 _输入(input)_ 流，当试图关闭流时发生的错误不太可能对程序有重大影响:您已经完成了它，您已经阅读了所需的所有内容。

对于 _输出(output)_ 流，关闭流时抛出的异常必须与实际使用流时抛出的异常同等重要。这样做的原因是，输出流可能会缓冲写入它们的数据，
并且需要在调用`close()`时将缓冲后的数据刷新到底层输出接收器。换句话说，`close()`调用可能触发对文件或其他接收器的实际写操作，
因此从该调用引发的异常可能表明实际未能完成预期的写操作。

# Solutions(解决方案)

## try-with-resources

_如果使用JDK7+_, 这很简单:使用
[try-with-resources](http://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html).
下面是一个使用try-with-resources打开和关闭多个资源的例子:

```java
try (InputStream in = openInputStream();
     OutputStream out = openOutputStream()) {
  // do stuff with in and out
}
```

两个流都将在`try`块结束时自动关闭，如果抛出多个异常，第一个异常将抑制其他两个异常，
所有异常的堆栈跟踪将出现在从`try`块抛出的单个异常中。它很简单，它解决了所有的问题，使用它!

## Sources and Sinks

`ByteSource`和`CharSource`分别表示二进制和字符数据的可读源。`ByteSink`和`CharSink`分别表示二进制和字符数据的可写接收器。
所有这些都应该能够打开多个独立的流(例如。`InputStream`或`Writer`)用于读取或写入它们。

在可能的情况下,建立一个实现这些类型之一(或使用提供的实现如`Files.asByteSource(File)`)允许你绕过的问题完全打开和关闭流,
允许您使用这些类的方法为您处理打开和关闭资源。例如，你可以使用以下方法将`File`的内容复制到一些`ByteSink`:

```java
ByteSink sink = ...
Files.asByteSource(file).copyTo(sink);
```

## Closer(关闭)

`Closer`是在14.0版本中添加到Guava的一个类。它的目的是为必须在JDK6下编译和运行的代码提供一个穷人使用资源的试运行块。
下面是一个使用它的例子:

```java
Closer closer = Closer.create();
try {
  InputStream in = closer.register(openInputStream());
  OutputStream out = closer.register(openOutputStream());
  // do stuff with in and out
} catch (Throwable e) { // must catch Throwable
  throw closer.rethrow(e);
} finally {
  closer.close();
}
```

在`closer`上调用`close()`将安全地关闭所有已注册的`Closeable`对象。在Java 7下运行时，
它甚至使用相同的机制来抑制使用 try-with-resources 时使用的其他异常，从而产生应该相同的行为。
请注意，在使用`Closer`时，遵循规定的使用模式是非常重要的:在调用`closer.close()`之前，
必须从使用`Closeable`资源的块中捕获并通过`Closer`的`rethrow`方法重新抛出任何`Throwable`。
还请注意，如果您希望捕获从这整个代码块抛出的异常，您应该将整个异常封装在 _另一个_ `try`块中。
