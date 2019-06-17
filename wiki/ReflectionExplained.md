# Reflection 反射

## TypeToken

由于类型擦除，您不能在运行时传递泛型的`Class`对象 -- 您可以转换它们并假装它们是泛型的，但实际上它们不是。

For example:

```java
ArrayList<String> stringList = Lists.newArrayList();
ArrayList<Integer> intList = Lists.newArrayList();
System.out.println(stringList.getClass().isAssignableFrom(intList.getClass()));
// returns true, even though ArrayList<String> is not assignable from ArrayList<Integer>
```

**Guava 提供** [`TypeToken`], 它使用基于反射的技巧来允许您操作和查询泛型类型，即使在运行时也是如此。
**可以将`TypeToken`看作一种创建、操作和查询`Type`(以及隐式的`Class`)对象的方法，这种方法尊重泛型。**

Guice用户注意:`TypeToken`类似于[Guice]的[`TypeLiteral`]类，但有一个重要的区别:它支持非具体化类型，
比如`T`,`List<T>` 或者甚至 `List<? extends Number>`;而`TypeLiteral`则不然。`TypeToken`也是可序列化的，并提供了许多额外的实用方法。

#### Background: Type Erasure and Reflection 类型擦除和反射

Java在运行时不保留  _objects_ 的泛型类型信息。如果在运行时有一个 `ArrayList<String>`对象，则不能确定它是否具有泛型类型`ArrayList<String>`，
而可以使用不安全的原始类型将其转换为`ArrayList<Object>`。

但是，反射允许您检测方法和类的泛型类型。如果您实现了一个返回`List<String>`的方法，并且使用反射来获得该方法的返回类型，
那么您将返回一个表示`List<String>`的[`ParameterizedType`]。

`TypeToken`类使用这种解决方案，允许以最少的语法开销操作泛型类型。

#### Introduction 介绍

为基本的原始类获取`TypeToken`非常简单：

```java
TypeToken<String> stringTok = TypeToken.of(String.class);
TypeToken<Integer> intTok = TypeToken.of(Integer.class);
```

要获得泛型类型的`TypeToken`(当您在编译时知道泛型类型参数时)，需要使用一个空的匿名内部类:

```java
TypeToken<List<String>> stringListTok = new TypeToken<List<String>>() {};
```

或者，如果您有意引用通配符类型:

```java
TypeToken<Map<?, ?>> wildMapTok = new TypeToken<Map<?, ?>>() {};
```

`TypeToken` 提供了一种动态解析泛型类型参数的方法，如下所示:

```java
static <K, V> TypeToken<Map<K, V>> mapToken(TypeToken<K> keyToken, TypeToken<V> valueToken) {
  return new TypeToken<Map<K, V>>() {}
    .where(new TypeParameter<K>() {}, keyToken)
    .where(new TypeParameter<V>() {}, valueToken);
}
...
TypeToken<Map<String, BigInteger>> mapToken = mapToken(
   TypeToken.of(String.class),
   TypeToken.of(BigInteger.class));
TypeToken<Map<Integer, Queue<String>>> complexToken = mapToken(
   TypeToken.of(Integer.class),
   new TypeToken<Queue<String>>() {});
```

注意，如果`mapToken`只返回`new TypeToken<Map<K, V>>()`，它实际上不能具体化分配给`K`和`V`的类型，例如:

```java
class Util {
  static <K, V> TypeToken<Map<K, V>> incorrectMapToken() {
    return new TypeToken<Map<K, V>>() {};
  }
}

System.out.println(Util.<String, BigInteger>incorrectMapToken());
// just prints out "java.util.Map<K, V>"
```

另外，您可以使用一个(通常是匿名的)子类捕获泛型类型，然后根据一个知道类型参数的上下文类解析它。

```java
abstract class IKnowMyType<T> {
  TypeToken<T> type = new TypeToken<T>(getClass()) {};
}
...
new IKnowMyType<String>() {}.type; // returns a correct TypeToken<String>
```

例如，使用这种技术，您可以获得知道其元素类型的类。

### Queries

`TypeToken`支持`Class`支持的许多查询，但适当考虑了通用约束。

支持的查询操作包括:

Method                   | Description
:----------------------- | :----------
`getType()`              | Returns the wrapped `java.lang.reflect.Type`.
`getRawType()`           | Returns the most-known runtime class.
`getSubtype(Class<?>)`   | Returns some subtype of `this` that has the specified raw class. For example, if this is `Iterable<String>` and the argument is `List.class`, the result will be `List<String>`.
`getSupertype(Class<?>)` | Generifies the specified raw class to be a supertype of this type. For example, if this is `Set<String>` and the argument is `Iterable.class`, the result will be `Iterable<String>`.
`isSupertypeOf(type)`    | Returns true if this type is a supertype of the given type. "Supertype" is defined according to [the rules for type arguments](http://docs.oracle.com/javase/specs/jls/se8/html/jls-4.html#jls-4.5.1) introduced with Java generics.
`getTypes()`             | Returns the set of all classes and interfaces that this type is or is a subtype of. The returned `Set` also provides methods `classes()` and `interfaces()` to let you view only the superclasses and superinterfaces.
`isArray()`              | Checks if this type is known to be an array, such as `int[]` or even `<? extends A[]>`.
`getComponentType()`     | Returns the array component type.

#### resolveType

`resolveType`是一个功能强大但复杂的查询操作，可以用来"substitute替换"上下文令牌中的类型参数。例如,

```java
TypeToken<Function<Integer, String>> funToken = new TypeToken<Function<Integer, String>>() {};

TypeToken<?> funResultToken = funToken.resolveType(Function.class.getTypeParameters()[1]));
  // returns a TypeToken<String>
```

`TypeToken`将Java提供的`TypeVariable`与来自"context"令牌的那些类型变量的值统一起来。这可以用来推断一个类型上方法的返回类型:

```java
TypeToken<Map<String, Integer>> mapToken = new TypeToken<Map<String, Integer>>() {};
TypeToken<?> entrySetToken = mapToken.resolveType(Map.class.getMethod("entrySet").getGenericReturnType());
  // returns a TypeToken<Set<Map.Entry<String, Integer>>>
```

## Invokable

Guava的[`Invokable`]是`java.lang.reflect.Method`和`java.lang.reflect.Constructor`的流畅包装。使用这两种方法都可以简化常见的反射代码。下面是一些用法示例:

#### Is the method public?

JDK:

```java
Modifier.isPublic(method.getModifiers())
```

`Invokable`:

```java
invokable.isPublic()
```

#### Is the method package private?

JDK:

```java
!(Modifier.isPrivate(method.getModifiers()) || Modifier.isPublic(method.getModifiers()))
```

`Invokable`:

```java
invokable.isPackagePrivate()
```

#### Can the method be overridden by subclasses?

JDK:

```java
!(Modifier.isFinal(method.getModifiers())
    || Modifiers.isPrivate(method.getModifiers())
    || Modifiers.isStatic(method.getModifiers())
    || Modifiers.isFinal(method.getDeclaringClass().getModifiers()))
```

`Invokable`:

```java
invokable.isOverridable()
```

#### Is the first parameter of the method annotated with @Nullable?

JDK:

```java
for (Annotation annotation : method.getParameterAnnotations()[0]) {
  if (annotation instanceof Nullable) {
    return true;
  }
}
return false;
```

`Invokable`:

```java
invokable.getParameters().get(0).isAnnotationPresent(Nullable.class)
```

#### How to share the same code for both constructors and factory methods?

您是否想要重复自己的代码，因为您的反射代码需要以相同的方式为构造函数和工厂方法工作?

`Invokable`提供了一个抽象概念。以下代码可用于方法或构造函数:

```java
invokable.isPublic();
invokable.getParameters();
invokable.invoke(object, args);
```

#### What's the return type of List.get(int) for List\<String\>?

`Invokable` provides type resolution out of the box:

```java
Invokable<List<String>, ?> invokable = new TypeToken<List<String>>() {}.method(getMethod);
invokable.getReturnType(); // String.class
```

## Dynamic Proxies

#### newProxy()

实用方法[`Reflection.newProxy(Class, InvocationHandler)`]是一个更安全、更方便的API，用于在只代理一个接口类型时创建Java动态代理。

JDK:

```java
Foo foo = (Foo) Proxy.newProxyInstance(
    Foo.class.getClassLoader(),
    new Class<?>[] {Foo.class},
    invocationHandler);
```

Guava:

```java
Foo foo = Reflection.newProxy(Foo.class, invocationHandler);
```

#### AbstractInvocationHandler

有时候，您可能希望您的动态代理以直观的方式支持equals()、hashCode()和toString()，即:
*如果一个代理实例与另一个代理实例具有相同的接口类型，并且具有相同的调用处理程序，那么它们就等于另一个代理实例。*
代理的toString()委托给调用处理程序的toString()，以便更容易地进行定制。

[`AbstractInvocationHandler`]实现此逻辑。

此外，`AbstractInvocationHandler`确保传递给[`handleInvocation(Object, Method, Object[])`][handleInvocation]的参数数组从不为null，
因此`NullPointerException`的几率更小。

## ClassPath

严格地说，Java没有独立于平台的方法来浏览类或类路径资源。然而，有时需要能够遍历特定包或项目下的所有类，例如，检查是否遵循了特定的项目约定或约束。

[`ClassPath`]是一个提供最佳类路径扫描的实用程序。使用很简单:

```java
ClassPath classpath = ClassPath.from(classloader); // scans the class path used by classloader
for (ClassPath.ClassInfo classInfo : classpath.getTopLevelClasses("com.mycomp.mypackage")) {
  ...
}
```

在上面的例子中， [`ClassInfo`]是要加载的类的句柄。它允许程序员检查类名或包名，并只在必要时加载类。

值得注意的是，`ClassPath`是一个非常有用的实用程序。它只扫描jar文件或文件系统目录下的类。它也不能扫描由非URLClassLoader的自定义类加载器管理的类。
**所以不要把它用于任务关键的生产任务。**

## Class Loading

实用程序方法 [`Reflection.initialize(Class...)`]确保初始化指定的类 -- 例如，执行任何静态初始化。

这种方法的使用带有代码的味道，因为静态会损害系统的可维护性和可测试性。在与遗留框架进行互操作时别无选择的情况下，此方法有助于降低代码的丑陋程度。

[`TypeToken`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/reflect/TypeToken.html
[Guice]: https://github.com/google/guice
[`TypeLiteral`]: https://google.github.io/guice/api-docs/latest/javadoc/com/google/inject/TypeLiteral.html
[`ParameterizedType`]: http://docs.oracle.com/javase/8/docs/api/java/lang/reflect/ParameterizedType.html
[`Invokable`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/reflect/Invokable.html
[`Reflection.newProxy(Class, InvocationHandler)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/reflect/Reflection.html#newProxy-java.lang.Class-java.lang.reflect.InvocationHandler-
[`AbstractInvocationHandler`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/reflect/AbstractInvocationHandler.html
[handleInvocation]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/reflect/AbstractInvocationHandler.html#handleInvocation-java.lang.Object-java.lang.reflect.Method-java.lang.Object[]-
[`ClassPath`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/reflect/ClassPath.html
[`ClassInfo`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/reflect/ClassPath.ClassInfo.html
[`Reflection.initialize(Class...)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/reflect/Reflection.html#initialize-java.lang.Class...-
