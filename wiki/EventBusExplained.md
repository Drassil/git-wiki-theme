# EventBus

`EventBus`允许组件之间进行发布-订阅-式的通信，而不需要组件彼此显式注册(因此可以相互感知)。
它专门用于使用显式注册替代传统的Java进程内(in-process)事件分发。它 _不_ 是一个通用的发布-订阅系统，也不是用于进程间通信。

## Example

```java
// Class is typically registered by the container.
class EventBusChangeRecorder {
  @Subscribe public void recordCustomerChange(ChangeEvent e) {
    recordChange(e.getChange());
  }
}
// somewhere during initialization
eventBus.register(new EventBusChangeRecorder());
// much later
public void changeCustomer()
  ChangeEvent event = getChangeEvent();
  eventBus.post(event);
}
```

## One-Minute Guide(一分钟指南)

将现有的基于`EventListener`的系统转换为使用`EventBus`很容易。

### For Listeners(针对监听者)

要侦听事件的特定类型(例如，`CustomerChangeEvent`)...

*   **...在传统Java事件中**:实现用事件定义的接口——例如`CustomerChangeEventListener`。
*   **...使用`EventBus`:** 创建一个接受`CustomerChangeEvent`的方法作为它唯一的参数，并使用[`@Subscribe`](http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/eventbus/Subscribe.html)注释标记它。

将侦听器方法注册到事件生产者...

*   **...在传统Java events中:** 将对象传递给每个生产者的`registerCustomerChangeEventListener`方法。
    这些方法很少在公共接口中定义，所以除了知道每个可能的生成器外，还必须知道它的类型。
*   **...使用`EventBus`:** 将对象传递到“EventBus”上的[' EventBus.register(object) ' (http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/eventbus/EventBus.html#register-java.lang.Object-)方法。您需要确保您的对象与事件生成器共享一个`EventBus`实例。

要侦听公共事件超类型(如`EventObject` 或 `Object`)，请执行以下操作:

*   **...在传统 Java 事件中:**  不容易.
*   **...使用 `EventBus`:** 事件被自动分配给任何超类型的侦听器，允许侦听器用于接口类型或"通配符侦听器"用于`Object`。

侦听和检测在没有侦听器的情况下发出的事件...

*   **...在传统的 Java 事件中:** 向每个事件调度方法添加代码(可能使用AOP)。
*   **...使用 `EventBus`:** 订阅[`DeadEvent`](http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/eventbus/DeadEvent.html)。`EventBus`将通知您任何已发布但未交付的事件。(方便调试。)

### For Producers(针对生产者)

跟踪事件的监听者...

*   **...在传统Java事件中:** 编写代码来管理对象的监听器列表，包括同步，或者使用像`EventListenerList`这样的实用程序类。
*   **...使用 `EventBus`:** `EventBus` 这是为你做的.

要向侦听器发送事件...

*   **...在传统Java事件中s:** 编写一个方法来将事件分派给每个事件侦听器，包括错误隔离和(如果需要的话)异步性。
*   **...使用 `EventBus`:** 将事件对象传递给`EventBus`的[`EventBus.post(Object)`](http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/eventbus/EventBus.html#post-java.lang.Object-) 方法.

## Glossary(术语表)

`EventBus`系统和代码使用以下术语来讨论事件分布:

Event            | Any object that may be <em>posted</em> to a bus.
:--------------- | :-----------------------------------------------
Subscribing      | 将一个<em>listener</em>注册为一个`EventBus`，以便其<em>handler methods</em>将接收事件的操作。
Listener         | 一个希望通过公开<em>handler methods</em>来接收事件的对象。
Handler method   | 一个公共方法，`EventBus`应该使用它来交付<em>posted</em>事件。处理程序方法由[`@Subscribe`](http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/eventbus/Subscribe.html)注释标记。
Posting an event | 通过`EventBus`使事件对任何<em>listeners</em>可用。

## FAQ(常见问题解答)

#### 为什么我必须创建自己的事件总线，而不是使用单例?

`EventBus`没有指定如何使用它;没有什么可以阻止您的应用程序为每个组件拥有单独的`EventBus`实例，
或者使用单独的实例根据上下文或主题分隔事件。这也使得在测试中设置和删除`EventBus`对象变得非常简单。

当然，如果您希望有一个进程范围的`EventBus` 单例，那么没有什么可以阻止您这样做。
只需让您的容器(比如Guice)在全局范围内创建`EventBus`作为一个单例(或者将它保存在一个静态字段中，如果您对这类东西感兴趣的话)。

简而言之，`EventBus`不是一个单例对象，因为我们不愿意为您做出这样的决定。你喜欢怎么用就怎么用。

#### 我可以从事件总线注销侦听器吗?

是的,使用`EventBus.unregister`,但我们发现很少需要这样做:

*   大多数监听器在启动或延迟初始化时注册，并在应用程序的生命周期中持续存在。
*   特定于作用域的`EventBus`实例可以处理临时事件分发(例如，在请求作用域(request-scoped)对象之间分发事件)
*   对于测试，可以很容易地创建和丢弃`EventBus`实例，从而消除了显式取消注册的需要。

#### 为什么使用注释来标记处理程序方法，而不要求侦听器实现接口?

我们认为，事件总线的`@Subscribe`注释传达了您的意图，就像实现接口一样明确(或者更明确)，
同时允许您随意放置事件处理程序方法，并为它们提供具有意图的名称。

传统的Java事件使用侦听器接口，该接口通常只支持少数几个方法 -- 通常是一个。这有一些缺点:

*   任何一个类都只能实现对给定事件的单个响应。
*   侦听器接口方法可能会冲突。
*   方法必须以事件命名(例如`handleChangeEvent`)，而不是它的目的(`recordChangeInJournal`)。
*   每个事件通常都有自己的接口，而没有用于一系列事件(例如所有UI事件)的公共父接口。

干净地实现这一点的困难导致了一种模式的出现，尤其是在Swing应用程序中，这种模式使用很小的匿名类来实现事件监听器接口。

比较这两种情况:

```java
class ChangeRecorder {
  void setCustomer(Customer cust) {
    cust.addChangeListener(new ChangeListener() {
      public void customerChanged(ChangeEvent e) {
        recordChange(e.getChange());
      }
    };
  }
}
```

与

```java
// Class is typically registered by the container.
class EventBusChangeRecorder {
  @Subscribe public void recordCustomerChange(ChangeEvent e) {
    recordChange(e.getChange());
  }
}
```

在第二种情况下，意图实际上更清晰:噪音代码更少，事件处理程序有一个清晰而有意义的名称。

#### 通用的`Handler<T>`接口怎么样?

一些人已经为`EventBus`侦听器提出了一个通用的`Handler<T>`接口。这与Java使用类型擦除有关，更不用说可用性方面的问题了。

假设接口如下:

```java
interface Handler<T> {
  void handleEvent(T event);
}
```

由于擦除，没有一个类可以使用不同的类型参数多次实现泛型接口。这是对传统Java事件的巨大倒退，
在传统Java事件中，即使`actionPerformed`和`keyPressed`不是很有意义的名称，至少您可以实现这两个方法!

#### 难道`EventBus`不会破坏静态类型并消除自动重构支持吗?

有些人对`EventBus`的`register(Object)`和`post(Object)`方法使用`Object`类型感到非常害怕。

这里使用`Object`有一个很好的理由:事件总线库对事件监听器(如`register(Object)`)或事件本身(如`post(Object)`)的类型没有任何限制。

另一方面，事件处理程序方法必须显式声明它们的参数类型 -- 所需的事件类型(或其超类型之一)。
因此，搜索对事件类的引用将立即找到该事件的所有处理程序方法，重新命名类型将影响IDE视图中的所有处理程序方法(以及创建该事件的任何代码)。

确实，您可以随意重命名您的`@Subscribed`事件处理程序方法;事件总线不会停止此操作或执行任何传播重命名的操作，
因为对于事件总线，处理程序方法的名称是不相关的。当然，直接调用方法的测试代码将受到重命名的影响，但这正是重构工具的作用。
我们认为这是一个特性，而不是一个bug:能够随意重命名处理程序方法可以让您更清楚地理解它们的含义。

#### 如果我`register`一个没有任何处理程序方法的侦听器，在这种情况下会发生什么? 

什么都没有。

该事件总线以Guice为原型，与容器和模块系统集成。在这些情况下，让容器/工厂/环境(container/factory/environment)将 _每_ 个创建的对象
传递给`EventBus`的`register(Object)`方法非常方便。

这样，容器/工厂/环境创建的任何对象都可以通过公开处理程序方法挂接到系统的事件模型中。

#### 在编译时可以检测到哪些事件总线问题?

任何可以被Java类型系统明确检测到的问题。例如，为不存在的事件类型定义处理程序方法。

#### 在注册时可以立即检测到哪些事件总线问题?

在调用`register(Object)`时，将立即检查被注册的侦听器的处理程序方法的 _格式是否良好_ 。
特别地，任何标记为`@Subscribe`的方法必须只接受一个参数。

任何违反此规则的行为都会引发 `IllegalArgumentException` 异常抛出。

(这个检查可以使用APT(我们正在研究的解决方案)转移到编译时。)

#### 什么`EventBus`问题只有在稍后的运行时才能检测到?

如果一个组件在没有注册侦听器的情况下发布事件，那么它 _可能_ 表明一个错误(通常表示您错过了一个`@Subscribe`注释，或者侦听组件没有加载)。

(注意，这并不是问题的必要指示。在许多情况下，应用程序会故意忽略已发布的事件，特别是当事件来自您无法控制的代码时。)

要处理此类事件，请为`DeadEvent`类注册一个处理程序方法。每当`EventBus`接收到没有注册处理程序的事件时，它就会将其转换为`DeadEvent`，并将其传递给您
 -- 允许您对其进行日志记录或以其他方式进行恢复。

#### 如何测试事件监听器及其处理程序方法?

因为侦听器类上的处理程序方法是普通方法，所以您可以简单地从测试代码中调用它们来模拟`EventBus`。

### Why can't I do \<magic thing\> with `EventBus`?

`EventBus`被设计用来很好地处理大量的用例。对于大多数用例，我们更喜欢抓住问题的要害，而不是在所有用例上都做得很得体。

此外，让`EventBus`具有可扩展性 -- 让扩展变得有用和高效，同时 _仍然_ 允许我们向核心的`EventBus`API添加不与任何扩展冲突的内容 -- 是一个极其困难的问题。

如果你真的，真的需要神奇的东西X，而`EventBus`目前无法提供，你应该提交一个问题，然后设计你自己的替代方案。
