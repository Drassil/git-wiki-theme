# Service

Guava [`Service`]接口表示具有操作状态的对象，具有启动和停止方法。例如，web服务器、RPC服务器和定时器可以实现`Service`接口。
管理这样的服务状态(需要正确的启动和关闭管理)可能不是一件小事，尤其是涉及多个线程或调度时。Guava提供了一些框架来为您管理状态逻辑和同步细节。

## Using a Service

`Service`的正常生命周期是

*   [`Service.State.NEW`][NEW] to
*   [`Service.State.STARTING`][STARTING] to
*   [`Service.State.RUNNING`][RUNNING] to
*   [`Service.State.STOPPING`][STOPPING] to
*   [`Service.State.TERMINATED`][TERMINATED]

已停止的服务可能无法重新启动。如果服务在启动、运行或停止时失败，则进入状态[`Service.State.FAILED`][FAILED]。

如果服务是[`NEW`][NEW]，则可以使用[`startAsync()`] _异步 asynchronously_  启动服务。
因此，您应该构造应用程序，使其具有每个服务启动的惟一位置。

停止服务类似，使用 _异步_ [`stopAsync()`]方法。但是与[`startAsync()`]不同，多次调用这个方法是安全的。这将使处理关闭服务时可能发生的竞争成为可能。

Service还提供了一些方法来等待服务转换完成。

*   _异步_ 使用[`addListener()`]。`addListener()`允许您添加一个[`Service.Listener`]将在服务的每个状态转换时调用。
    注意:如果在添加侦听器时服务不是[`NEW`][NEW]，那么已经发生的任何状态转换都 _不_ 会在侦听器上重播。
*   _同步_ 使用[`awaitRunning()`]。这是不可中断的，不会抛出任何已检查的异常，并在服务启动后返回。如果服务无法启动，将抛出一个`IllegalStateException`。
    类似地，[`awaitTerminated()`]等待服务到达终端状态[`TERMINATED`][TERMINATED] 或 [`FAILED`][FAILED])。这两种方法都有允许指定超时的重载。

[`Service`]接口微妙而复杂。_我们不建议直接实现它_。相反，请使用Guava中的抽象基类之一作为实现的基类。每个基类都支持特定的线程模型。

## Implementations 实现

### AbstractIdleService 空闲服务抽象类

[`AbstractIdleService`]框架实现了一个`Service`，该服务在"运行running"状态下不需要执行任何操作，因此在运行时不需要线程，但是需要执行启动和关闭操作。
实现这样的服务与扩展`AbstractIdleService`和实现[`startUp()`] 和 [`shutDown()`]方法一样简单。

```java
protected void startUp() {
  servlets.add(new GcStatsServlet());
}
protected void shutDown() {}
```

注意，对`GcStatsServlet`的任何查询都已经有一个线程可以运行。在服务运行时，我们不需要该服务执行任何操作。

### AbstractExecutionThreadService

[`AbstractExecutionThreadService`]在一个线程中执行启动、运行和关闭操作。您必须覆盖[`run()`]方法，并且它必须响应stop请求。
例如，您可能在工作循环中执行操作:

```java
public void run() {
  while (isRunning()) {
    // perform a unit of work
  }
}
```

另一种方法是，您可以以任何方式覆盖，从而导致`run()`返回。

覆盖`startUp()` 和 `shutDown()`是可选的，但是将为您管理服务状态。

```java
protected void startUp() {
  dispatcher.listenForConnections(port, queue);
}
protected void run() {
  Connection connection;
  while ((connection = queue.take() != POISON)) {
    process(connection);
  }
}
protected void triggerShutdown() {
  dispatcher.stopListeningForConnections(queue);
  queue.put(POISON);
}
```

注意，`start()`调用您的`startUp()`方法，为您创建一个线程，并在该线程中调用`run()`。`stop()` 调用 `triggerShutdown()`，并等待线程死亡。

### AbstractScheduledService

[`AbstractScheduledService`]在运行时执行一些周期性任务。
子类实现[`runOneIteration()`]来指定任务的一个迭代，以及熟悉的`startUp` 和 `shutDown()`方法。

要描述执行计划，必须实现[`scheduler()`]方法。通常，您将使用[`AbstractScheduledService.Scheduler`]，
或者[`newFixedRateSchedule(initialDelay, delay, TimeUnit)`]，或者[`newFixedDelaySchedule(initialDelay, delay, TimeUnit)`]提供的调度之一，
对应于`ScheduledExecutorService`中的常见方法。可使用`CustomScheduler`]实现自定义调度;有关详细信息，请参阅Javadoc。

### AbstractService

当您需要执行自己的手动线程管理时，请直接覆盖[`AbstractService`]。通常，您应该能够很好地使用上述实现之一，
但是当您有自己特定的线程需求时，建议您实现“ `AbstractService`，例如，您将提供自己线程语义的东西建模为`Service`时。

实现 `AbstractService` 您必须实现两个方法.

*   [`doStart()`]: `doStart()`被`startAsync()`的第一个调用直接调用，你的`doStart()` 方法应该执行所有的初始化，
    然后最终调用[`notifyStarted()`] 如果启动成功或[`notifyFailed()`]如果启动失败。
*   [`doStop()`]: `doStop()`是由对`stopAsync()`的第一个调用直接调用的，您的 `doStop()`方法应该关闭您的服务，
    然后最终调用[`notifyStopped()`] 如果关闭成功，或[`notifyFailed()`]如果关闭失败。

你的`doStart` 和 `doStop`方法应该是 _快速的_。如果需要进行昂贵的初始化，例如读取文件、打开网络连接或任何可能阻塞的操作，则应该考虑将该工作转移到另一个线程。

## Using ServiceManager

除了`Service`框架实现之外，Guava还提供了一个[`ServiceManager`]类，使涉及多个`Service`实现的某些操作更加容易。
用一组`Service`创建一个新的`ServiceManager`。然后你可以管理他们:

*   [`startAsync()`][`ServiceManager.startAsync()`] 将启动所管理的所有服务。 
    很像 [`Service#startAsync()`][`startAsync()`] 如果所有服务都是`NEW`，则只能调用此方法一次.
*   [`stopAsync()`][`ServiceManager.stopAsync()`] 将停止所管理的所有服务.
*   [`addListener`][`ServiceManager.addListener`] 将添加一个[`ServiceManager.Listener`] 将在主要状态转换时调用。
*   [`awaitHealthy()`] 将等待所有服务达到`RUNNING`状态。
*   [`awaitStopped()`] 将等待所有服务到达终止状态。

或检查他们:

*   [`isHealthy()`] 如果所有服务都在`RUNNING`，则返回`true`.
*   [`servicesByState()`] 返回按状态索引的所有服务的 _一致_ 快照.
*   [`startupTimes()`] 返回管理的`Service`到该服务启动所需时间(以毫秒为单位)的映射.

虽然建议通过`ServiceManager`管理服务生命周期，但是通过其他机制启动的状态转换 **不会影响其方法的正确性。**
例如，如果服务是由除`startAsync()`之外的其他机制启动的，侦听器将在适当的时候被调用，而`awaitHealthy()` 仍将按预期工作。
`ServiceManager`强制执行的惟一要求是，在构造`ServiceManager`时，所有`Services`必须是`NEW`。

[`Service`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Service.html
[NEW]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Service.State.html#NEW
[STARTING]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Service.State.html#STARTING
[RUNNING]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Service.State.html#RUNNING
[STOPPING]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Service.State.html#STOPPING
[TERMINATED]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Service.State.html#TERMINATED
[FAILED]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Service.State.html#FAILED
[`startAsync()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Service.html#startAsync--
[`stopAsync()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Service.html#stopAsync--
[`addListener()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Service.html#addListener--
[`Service.Listener`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Service.Listener.html
[`awaitRunning()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Service.html#awaitRunning--
[`awaitTerminated()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/Service.html#awaitTerminated--
[`AbstractIdleService`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractIdleService.html
[`startUp()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractIdleService.html#startUp--
[`shutDown()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractIdleService.html#shutDown--
[`AbstractExecutionThreadService`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractExecutionThreadService.html
[`run()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractExecutionThreadService.html#run--
[`triggerShutdown()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractExecutionThreadService.html#triggerShutdown--
[`AbstractScheduledService`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractScheduledService.html
[`runOneIteration()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractScheduledService.html#runOneIteration--
[`scheduler()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractScheduledService.html#scheduler--
[`AbstractScheduledService.Scheduler`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractScheduledService.Scheduler.html
[`newFixedRateSchedule(initialDelay, delay, TimeUnit)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractScheduledService.Scheduler.html#newFixedRateSchedule-long-long-java.util.concurrent.TimeUnit-
[`newFixedDelaySchedule(initialDelay, delay, TimeUnit)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractScheduledService.Scheduler.html#newFixedDelaySchedule-long-long-java.util.concurrent.TimeUnit-
[`CustomScheduler`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractScheduledService.CustomScheduler.html
[`AbstractService`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractService.html
[`doStart()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractService.html#doStart--
[`notifyStarted()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractService.html#notifyStarted--
[`notifyFailed()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractService.html#notifyFailed-java.lang.Throwable-
[`doStop()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractService.html#doStop--
[`notifyStopped()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/AbstractService.html#notifyStopped--
[`ServiceManager`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/ServiceManager.html
[`ServiceManager.startAsync()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/ServiceManager.html#startAsync--
[`ServiceManager.stopAsync()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/ServiceManager.html#stopAsync--
[`ServiceManager.addListener`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/ServiceManager.html#addListener-com.google.common.util.concurrent.ServiceManager.Listener-java.util.concurrent.Executor-
[`ServiceManager.Listener`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/ServiceManager.Listener.html
[`awaitHealthy()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/ServiceManager.html#awaitHealthy--
[`awaitStopped()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/ServiceManager.html#awaitStopped--
[`isHealthy()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/ServiceManager.html#isHealthy--
[`servicesByState()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/ServiceManager.html#servicesByState--
[`startupTimes()`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/util/concurrent/ServiceManager.html#startupTimes--
