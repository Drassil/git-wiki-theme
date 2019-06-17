# 图,解释

Guava的`common.graph`是一个用于建模[graph](https://en.wikipedia.org/wiki/Graph_\(discrete_mathematics\))结构化数据的库，
即实体及其之间的关系。例子包括网页和超连结;科学家和他们写的论文;机场及其之间的航线;
以及人和他们的家庭关系(家谱)。其目的是为处理此类数据提供一种通用的可扩展语言。


## Definitions 定义

图由一组**节点 node**(也称为顶点 vertices)和一组**边 edges**(也称为链接或弧 links, or arcs)组成;
每条边都将节点彼此连接起来。与边关联的节点称为其**端点 endpoints**。

(当我们在下面介绍一个称为`Graph`的接口时，我们将使用"graph"(小写字母“g”)作为一般术语来指代这种类型的数据结构。
当我们想要引用这个库中的特定类型时，我们将它大写。)

如果一条边有一个定义好的开始(它的**源 source**)和结束(它的**目标 target**，也称为它的目标)，
那么它就是**定向的 directed**。否则，它是**无定向的 undirected**。
有向边适用于建模非对称关系("descended from","links to", "authored by")，
无向边适用于建模对称关系("coauthored a paper with", "distance between", "sibling of")。

如果一个图的每条边都是有向的，那么它就是有向的;如果每条边都是无向的，那么它就是无向的。(`common.graph`不支持同时具有有向和无向边的图)。

举个例子:

```java
graph.addEdge(nodeU, nodeV, edgeUV);
```

*   `nodeU` and `nodeV` are mutually **adjacent**
*   `edgeUV` is **incident** to `nodeU` and to `nodeV` (and vice versa)

If `graph` is directed, then:

*   `nodeU` is a **predecessor** of `nodeV`
*   `nodeV` is a **successor** of `nodeU`
*   `edgeUV` is an **outgoing** edge (or out-edge) of `nodeU`
*   `edgeUV` is an **incoming** edge (or in-edge) of `nodeV`
*   `nodeU` is a **source** of `edgeUV`
*   `nodeV` is a **target** of `edgeUV`

If `graph` is undirected, then:

*   `nodeU` is a predecessor and a successor of `nodeV`
*   `nodeV` is a predecessor and a successor of `nodeU`
*   `edgeUV` is both an incoming and an outgoing edge of `nodeU`
*   `edgeUV` is both an incoming and an outgoing edge of `nodeV`

所有这些关系都与`graph`有关。

一个**自循环self-loop**是一个连接一个节点和它自己的边；等价地说，它是一个端点是相同节点的边。
如果一个自循环是定向的，则它既是它的事件节点的传出边缘，也是它的事件节点，并且它的事件节点既是自循环边缘的源，也是自循环边缘的目标。

如果两条边按相同的顺序连接相同的节点（如果有的话），则它们是**平行的parallel**；
如果它们按相反的顺序连接相同的节点，则它们是**反平行的 antiparallel**。（无向边不能是反平行的。）

举个例子:

```java
directedGraph.addEdge(nodeU, nodeV, edgeUV_a);
directedGraph.addEdge(nodeU, nodeV, edgeUV_b);
directedGraph.addEdge(nodeV, nodeU, edgeVU);

undirectedGraph.addEdge(nodeU, nodeV, edgeUV_a);
undirectedGraph.addEdge(nodeU, nodeV, edgeUV_b);
undirectedGraph.addEdge(nodeV, nodeU, edgeVU);

```

在`directedGraph`中，`edgeUV_a` 和 `edgeUV_b`相互平行，并且每个都与`edgeVU`相反。
在`undirectedGraph`中，`edgeUV_a`, `edgeUV_b`, 和 `edgeVU`中的每一个都与另两个相互平行。

## Capabilities 能力

`common.graph`专注于提供接口和类来支持使用图。它不提供诸如I/O或可视化支持之类的功能，而且它的实用程序选择非常有限。
有关此主题的更多信息，请参见[FAQ](#faq)。

总的来说，`common.graph`支持下列品种的图:

*   directed graphs 有向图
*   undirected graphs 无向图 
*   nodes and/or edges with associated values (weights, labels, etc.) 具有关联值(权重、标签等)的节点和/或边
*   graphs that do/don't allow self-loops 允许/不允许自循环的图
*   graphs that do/don't allow parallel edges (graphs with parallel edges are sometimes called multigraphs) 允许/不允许并行边的图(具有并行边的图有时称为多图)
*   graphs whose nodes/edges are insertion-ordered, sorted, or unordered 节点/边是插入顺序、排序或无序的图

由特定的`common.graph`类型支持的图类型在其javadoc中指定。每个图类型的内置实现支持的图类型在javadoc中为其关联的`Builder`类型指定。
此库中类型的特定实现（尤其是第三方实现）不需要支持所有这些类型，并且可能还支持其他类型。

库对底层数据结构的选择是不可知的:关系可以存储为矩阵、邻接表、邻接图等。根据实现者想要优化的用例而定。

`common.graph`目前不包括对以下图形变量的 _显式_ 支持，尽管可以使用现有类型对它们进行建模：

*   trees, forests 树、森林
*   graphs with elements of the same kind (nodes or edges) that have different types (for example: bipartite/k-partite graphs, multimodal graphs) 具有相同类型元素（节点或边）且具有不同类型的图（例如：二分图/K分图、多模图）
*   hypergraphs 超图

`common.graph` 不允许同时具有有向和无向边的图.

[`Graphs`]类提供了一些基本的实用程序（例如，复制和比较图形）。

## Graph Types 图类型

有三个顶层图形接口，它们通过边的表示来区分：`Graph`, `ValueGraph`, 和 `Network`。这些是兄弟类型，也就是说，没有是任何其他类型的子类型。
这些“顶级”接口中的每一个都扩展了[`SuccessorsFunction`]和[`PrecessorsFunction`]。这些接口被用作图算法（如广度优先遍历）的参数类型，该算法只需要访问图形中节点的继承者/前置者(successors/predecessors)的方法。当一个图的所有者已经有一个对他们有效的表示，并且不特别希望将其表示序列化为`common.graph`类型以运行一个图算法时，这一点尤其有用。

### Graph

[`Graph`]是最简单和最基本的图形类型。它定义了处理节点-到-节点(node-to-node)关系的低级运算符，例如`successors(node)`, `adjacentNodes(node)`, 和 `inDegree(node)`。它的节点是first-class唯一的对象；您可以认为它们类似于将`Map`键映射到`Graph`内部数据结构中。

`Graph`的边是完全匿名的；它们只根据端点定义。

示例用例：`Graph<Airport>`,它的边连接可以乘坐直飞航班的机场

### ValueGraph

[`ValueGraph`]拥有所有与节点相关(node-related)的方法，就像[`Graph`]所做的那样，但是添加了一些方法来检索指定边的值。

[`ValueGraph`]的每个边都有一个关联的用户指定值。这些值不必是唯一的（因为节点是唯一的）；`ValueGraph` 和 `Graph`之间的关系类似于`Map` 和 `Set`之间的关系；`Graph的边是一组端点，而`ValueGraph`的边是从端点对到值的映射。

[`ValueGraph`]提供了一个`asGraph()`方法，该方法返回`ValueGraph`的`Graph`视图。这也允许对`Graph`实例进行操作的方法对`ValueGraph`实例也起作用。

示例用例：`ValueGraph<Airport, Integer>`，其边缘值表示边缘连接的两个`Airport`之间所需的时间。

### Network

[`Network`]具有`Graph`所做的所有与节点相关的方法，但添加了处理边(edges)和节点到边(node-to-edge)的关系的方法，例如`outEdges（node）`，`incidentNodes（edge）`，以及 `edgesConnecting（nodeU，nodeV）`。

`Network`的边是第一类（first-class,唯一）对象，就像所有图类型中的节点一样。 边的唯一性约束允许[`Network`]本地支持并行边，以及与边和节点到边的关系有关的方法。

[`Network`]提供了一个`asGraph()`方法，它返回`Network`的`Graph`视图。 这允许在`Graph`实例上操作的方法也适用于`Network`实例。

示例用例：`Network <Airport，Flight>`，其中边缘表示可以从一个机场到另一个机场的特定航班。

### Choosing the right graph type 选择正确的图类型

三种图形类型之间的本质区别在于它们的边表示。

[`Graph`]的边是节点之间的匿名连接，没有自己的身份或属性。 如果每对节点最多由一条边连接，则应使用`Graph`，并且不需要将任何信息与边相关联。

[`ValueGraph`]具有边，其具有可能或可能不是唯一的值（例如，边权重或标签）。 如果每对节点最多连接一条边，则应使用 `ValueGraph`，并且需要将信息与不同边可能相同的边相关联（例如，边权重）。

[`Network`]的边是第一类唯一对象，就像节点一样。如果边对象是唯一的，并且您希望能够发出引用它们的查询，则应使用`Network`。 （请注意，这种唯一性允许`Network`支持并行边。）

## Building graph instances 构造图实例

`common.graph`提供的实现类在设计上不公开。 这减少了用户需要了解的公共类型的数量，并且可以更轻松地导航构建实现提供的各种功能，而不会让只想创建图的用户感到不知所措。

要创建一个图类型的内置实现的实例，请使用相应的`Builder`类：[`GraphBuilder`]，[`ValueGraphBuilder`]或[`NetworkBuilder`]。 例子：

```java
// Creating mutable graphs
MutableGraph<Integer> graph = GraphBuilder.undirected().build();

MutableValueGraph<City, Distance> roads = ValueGraphBuilder.directed().build();

MutableNetwork<Webpage, Link> webSnapshot = NetworkBuilder.directed()
    .allowsParallelEdges(true)
    .nodeOrder(ElementOrder.natural())
    .expectedNodeCount(100000)
    .expectedEdgeCount(1000000)
    .build();

// Creating an immutable graph
ImmutableGraph<Country> countryAdjacencyGraph =
    GraphBuilder.undirected()
        .<Country>immutable()
        .putEdge(FRANCE, GERMANY)
        .putEdge(FRANCE, BELGIUM)
        .putEdge(GERMANY, BELGIUM)
        .addNode(ICELAND)
        .build();
```

*   您可以通过以下两种方式之一获得图`Builder`的实例:
    *   调用静态方法`directed()`或`undirected()`。 `Builder`提供的每个Graph实例都将被定向或不定向。
    *   调用静态方法`from()`，它给你一个基于现有图实例的`Builder`。
*   在创建`Builder`实例后，您可以选择指定其他特征和功能。
*   构建可变图
    *   您可以多次在同一个`Builder`实例上调用`build()`来构建具有相同配置的多个图实例。
    *   您不需要在`Builder`上指定元素类型;在图类型本身上指定它们就足够了。
    *   `build()`方法返回关联图类型的`Mutable`子类型，它提供了变异方法; 更多关于["`Mutable` and `Immutable` graphs"](#mutable-and-immutable-graphs)的内容，如下所示。
*   构建不可变图
    *   你可以多次在同一个`Builder`实例上调用`immmutable()`来创建具有相同配置的多个`ImmutableGraph.Builder`实例。
    *   您需要在`immutable`调用中指定元素类型。

### Builder constraints vs. optimization hints 构建器约束与优化提示

`Builder`类型通常提供两种类型的选项：约束和优化提示。

约束指定由给定的`Builder`实例创建的图必须满足的行为和属性，例如：

*   图表是否有针对性
*   此图是否允许自循环
*   此图表的边缘是否已排序

等等。

实现类可以可选地使用优化提示来提高效率，例如，确定内部数据结构的类型或初始大小。 它们不能保证有任何效果。

每种图形类型都提供与其 `Builder`指定约束相对应的访问器，但不提供优化提示的访问器。

## `Mutable` and `Immutable` graphs

### `Mutable*` types

每个图形类型都有一个相应的`Mutable *`子类型：[`MutableGraph`]，[`MutableValueGraph`]和[`MutableNetwork`]。 这些子类型定义了变异方法：

*   methods for adding and removing nodes:
    *   `addNode(node)` and `removeNode(node)`
*   methods for adding and removing edges:
    *   [`MutableGraph`]
        *   `putEdge(nodeU, nodeV)`
        *   `removeEdge(nodeU, nodeV)`
    *   [`MutableValueGraph`]
        *   `putEdgeValue(nodeU, nodeV, value)`
        *   `removeEdge(nodeU, nodeV)`
    *   [`MutableNetwork`]
        *   `addEdge(nodeU, nodeV, edge)`
        *   `removeEdge(edge)`

这与Java Collections Framework（以及Guava的新集合类型）历史上的工作方式背道而驰;每种类型都包括（可选）突变方法的签名。我们选择将可变方法分解为子类型，以鼓励防御性编程：
一般来说，如果你的代码只检查或遍历一个图并且不改变它，它的输入应该被指定为[`Graph`]，[`ValueGraph`]或[`Network`]而不是它们的可变子类型。另一方面，如果你的代码确实需要改变一个对象，那么你的代码必须通过使用一个标记自己为"Mutable"的类型来引起对这个事实的注意。

由于[`Graph`]等是接口，即使它们不包含变异方法，向调用者提供此接口的实例并不能保证它不会被调用者变异，因为（如果它在事实上，一个`Mutable *`子类型）调用者可以将它转换为该子类型。如果您想提供合约保证，无法修改作为方法参数或返回值的图形，您应该使用`Immutable`实现;

更多内容如下。

### `Immutable*` implementations `不可变*` 实现

每种图类型也有相应的`Immutable`实现。 这些类类似于Guava的`ImmutableSet`，`ImmutableList`，`ImmutableMap`等：一旦构造，它们就无法修改，并且它们在内部使用高效的不可变数据结构。

然而，与其他Guava `Immutable`类型不同，这些实现没有任何方法签名用于变异方法，因此它们不需要为尝试的变异抛出`UnsupportedOperationException`。

您可以通过以下两种方式之一创建`ImmutableGraph`等实例：

使用 `GraphBuilder`:

```java
ImmutableGraph<Integer> immutableGraph1 =
    GraphBuilder.undirected()
        .<Country>immutable()
        .putEdge(FRANCE, GERMANY)
        .putEdge(FRANCE, BELGIUM)
        .putEdge(GERMANY, BELGIUM)
        .addNode(ICELAND)
        .build();
```

使用 `ImmutableGraph.copyOf()`:

```
ImmutableGraph<Integer> immutableGraph2 = ImmutableGraph.copyOf(otherGraph);
```

#### Guarantees 担保

每个`Immutable *`类型都有以下保证：

*   **浅不变性**：永远不能添加，删除或替换元素（这些类不实现`Mutable *`接口）
*   **确定性迭代**：迭代次序总是与输入图的次序相同
*   [**线程安全**]（＃同步）：从多个线程同时访问此图表是安全的
*   **完整性**：此类型不能在此包之外进行子类化（这将允许违反这些保证）

#### Treat these classes as "interfaces", not implementations 将这些类视为“接口”，而不是实现

每个`Immutable *`类都是一种提供有意义的行为保证的类型 - 而不仅仅是一个特定的实现。您应该将它们视为每个重要意义上的接口。

存储`Immutable *`实例（例如`ImmutableGraph`）的字段和方法返回值应该声明为`Immutable *`类型而不是相应的接口类型（例如`Graph`）。这向呼叫者传达了上面列出的所有语义保证，这几乎总是非常有用的信息。

另一方面，参数类型`ImmutableGraph`通常对呼叫者来说是一种麻烦。相反，接受`Graph`。

**警告**：正如[elsewhere](#elements-and-mutable-state)所述，修改一个元素（以一种影响其`equals()`行为的方式）几乎总是一个坏主意。包含在一个集合中。将导致未定义的行为和错误。最好避免使用可变对象作为`Immutable*`实例的元素，因为用户可能期望你的“不可变”对象是完全不可变的。

## Graph elements (nodes and edges)

### Elements must be useable as `Map` keys 元素必须可用作`Map`键

用户提供的图元素应被视为图实现维护的内部数据结构的关键。 因此，用于表示图元素的类必须具有`equals()`和`hashCode()`实现，这些实现具有或诱导下面列出的属性。

#### Uniqueness

如果`A`和`B`满足`A.equals(B) == true`那么这两个中最多只有一个可能是图的一个元素。

#### Consistency between `hashCode()` and `equals()`

`hashCode()`必须与`Object.hashCode()`](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)]定义的`equals()`一致。

#### Ordering consistency with `equals()`

如果节点被排序（例如，通过`GraphBuilder.orderNodes()`），则排序必须与[`Comparator`]和[`Comparable`]定义的`equals()`一致。

#### Non-recursiveness 非递归性

`hashCode` 和 `equals()` _不能_ 递归引用其他元素，如下例所示：

```java
// DON'T use a class like this as a graph element (or Map key/Set element)
public final class Node<T> {
  T value;
  Set<Node<T>> successors;

  public boolean equals(Object o) {
    Node<T> other = (Node<T>) o;
    return Objects.equals(value, other.value)
        && Objects.equals(successors, other.successors);
  }

  public int hashCode() {
    return Objects.hash(value, successors);
  }
}
```

使用这样的类作为`common.graph`元素类型（例如，`Graph <Node <T >>`）存在以下问题：

*   **冗余**：`common.graph`库提供的`Graph`的实现已经存储了这些关系
*   **效率低**：添加/访问这些元素调用`equals()`（可能还有`hashCode()`），这需要O（n）时间
*   **不可行**：如果图中有循环，`equals()`和`hashCode()`可能永远不会终止

相反，只需使用`T`值本身作为节点类型（假设`T`值本身是有效的`Map`键）。

### Elements and mutable state 元素和可变状态

如果图元素具有可变状态：

*   可变状态不得反映在`equals()/hashCode()`方法中（这在`Map`文档中有详细讨论）
*   不要构造彼此相等的多个元素，并期望它们可以互换。 特别是，当将这些元素添加到图形时，如果在创建期间需要多次引用这些元素（而不是将`new MyMutableNode(id)`传递给每个`add*()`调用），则应该创建它们一次并存储引用。 

如果需要存储可变的每元素状态，则一个选项是使用不可变元素并将可变状态存储在单独的数据结构中（例如，element-to-state）。

### Elements must be non-null 元素必须为非null

向图表添加元素的方法在契约上需要拒绝null元素。

## Library contracts and behaviors 库契约和行为

本节讨论`common.graph`类型的内置实现的行为。

### Mutation 变种

您可以添加事件节点之前未添加到图形中的边。如果它们尚未存在，则会以静默方式添加到图表中：

```java
Graph<Integer> graph = GraphBuilder.directed().build();  // graph is empty
graph.putEdge(1, 2);  // this adds 1 and 2 as nodes of this graph, and puts
                      // an edge between them
if (graph.nodes().contains(1)) {  // evaluates to "true"
  ...
}
```

### Graph `equals()` and graph equivalence

As of Guava 22, `common.graph`'s graph types each define `equals()` in a way
that makes sense for the particular type:

*   `Graph.equals()` defines two `Graph`s to be equal if they have the same node
    and edge sets (that is, each edge has the same endpoints and same direction
    in both graphs).
*   `ValueGraph.equals()` defines two `ValueGraph`s to be equal if they have the
    same node and edge sets, and equal edges have equal values.
*   `Network.equals()` defines two `Network`s to be equal if they have the same
    node and edge sets, and each edge object has connects the same nodes in the
    same direction (if any).

In addition, for each graph type, two graphs can be equal only if their edges
have the same directedness (both graphs are directed or both are undirected).

Of course, `hashCode()` is defined consistently with `equals()` for each graph
type.

If you want to compare two `Network`s or two `ValueGraph`s based only on
connectivity, or to compare a `Network` or a `ValueGraph` to a `Graph`, you can
use the `Graph` view that `Network` and `ValueGraph` provide:

```java
Graph<Integer> graph1, graph2;
ValueGraph<Integer, Double> valueGraph1, valueGraph2;
Network<Integer, MyEdge> network1, network2;

// compare based on nodes and node relationships only
if (graph1.equals(graph2)) { ... }
if (valueGraph1.asGraph().equals(valueGraph2.asGraph())) { ... }
if (network1.asGraph().equals(graph1.asGraph())) { ... }

// compare based on nodes, node relationships, and edge values
if (valueGraph1.equals(valueGraph2)) { ... }

// compare based on nodes, node relationships, and edge identities
if (network1.equals(network2)) { ... }
```

### Accessor methods

Accessors which return collections:

*   may return views of the graph; modifications to the graph which affect a
    view (for example, calling `addNode(n)` or `removeNode(n)` while iterating
    through `nodes()`) are not supported and may result in throwing
    `ConcurrentModificationException`.
*   will return empty collections if their inputs are valid but no elements
    satisfy the request (for example: `adjacentNodes(node)` will return an empty
    collection if `node` has no adjacent nodes).

Accessors will throw `IllegalArgumentException` if passed an element that is not
in the graph.

While some Java Collection Framework methods such as `contains()` take `Object`
parameters rather than the appropriate generic type specifier, as of Guava 22,
the `common.graph` methods take the generic type specifiers to improve type
safety.

### Synchronization 同步

由每个图实现决定自己的同步策略。 默认情况下，未定义的行为可能是由于调用另一个线程正在变异的图上的任何方法而导致的。

一般来说，内置的可变实现不提供同步保证，但是 `Immutable*` 类（由于是不可变的）是线程安全的。

### Element objects

您添加到图中的节点，边和值对象与内置实现无关; 它们只是用作内部数据结构的关键。 这意味着节点/边可以在图实例之间共享。

默认情况下，节点和边缘对象是按插入顺序排列的（也就是说，`Iterator` 为`nodes（）`和`edges（）`按照它们被添加到图的顺序访问，就像`LinkedHashSet`）。

## Notes for implementors

### Storage models

`common.graph`支持多种机制来存储图的拓扑，包括：

*   图实现存储拓扑（例如，通过存储将maps映射到其相邻节点上的`Map<N, Set<N>>`; 这意味着节点只是键，可以在图形之间共享
*   节点存储拓扑（例如，通过存储相邻节点的`List<E>`）; 这（通常）意味着节点是特定于图的
*   单独的数据存储库（例如，数据库）存储拓扑

注意：`Multimap`s 不足以支持孤立节点（没有事件边的节点）的Graph实现的内部数据结构，因为它们限制了一个键映射到至少一个值，或者不存在于`Multimap`。

### Accessor behavior

对于返回集合的访问器，语义有几种选择，包括：

1.  集合是一个不可变的副本（例如`ImmutableSet`）：尝试以任何方式修改集合都会引发异常，对图的修改**不会**反映在集合中。
2.  集合是一个不可修改的视图（例如`Collections.unmodifiableSet()`）：尝试以任何方式修改集合都会引发异常，对图的修改将反映在集合中。
3.  集合是一个可变副本：它可能被修改，但对集合的修改**不会**反映在图中，反之亦然。
4.  集合是一个可修改的视图：它可以被修改，对集合的修改将反映在图形中，反之亦然。

(理论上，人们可以返回一个集合，它通过一个方向的写入而不是另一个方向(集合到图，反之亦然collection-to-graph or vice-versa)，但这基本上永远不会有用或清晰，所以请不要。:))

（1）和（2）通常是优选的;在撰写本文时，内置实现通常使用（2）。

（3）是一个可行的选项，但如果用户希望修改会影响图形，或者对图形的修改将反映在集合中，则可能会使用户感到困惑。

（4）是一种危险的设计选择，只能在极其谨慎的情况下使用，因为保持内部数据结构的一致性可能很棘手。

### `Abstract*` classes

每个图类型都有一个对应的`Abstract`类：`AbstractGraph`等。

如果可能，图接口的实现者应该扩展适当的抽象类，而不是直接实现接口。 抽象类提供了几个关键方法的实现，这些方法可能很难正确执行，或者对于实现一致的实现很有帮助，例如：

*   `*degree()`
*   `toString()`
*   `Graph.edges()`
*   `Network.asGraph()`

## Code examples

### Is `node` in the graph?  节点是否在图中？

```java
graph.nodes().contains(node);
```

### Is there an edge between nodes `u` and `v` (that are known to be in the graph)? 节点“u”和“v”之间是否存在边缘（已知在图中）？

在图是无向的情况下，下面例子中参数`u`和`v`的排序是无关紧要的。

```java
// This is the preferred syntax since 23.0 for all graph types.
// 对于所有图类型，这是自23.0以来的首选语法。
graphs.hasEdgeConnecting(u, v);

// These are equivalent (to each other and to the above expression).
// 这些是相同的（彼此和上面的表达式）。
graph.successors(u).contains(v);
graph.predecessors(v).contains(u);

// This is equivalent to the expressions above if the graph is undirected.
// 如果图是无向的，这相当于上面的表达式。
graph.adjacentNodes(u).contains(v);

// This works only for Networks.
!network.edgesConnecting(u, v).isEmpty();

// This works only if "network" has at most a single edge connecting u to v.
network.edgeConnecting(u, v).isPresent();  // Java 8 only
network.edgeConnectingOrNull(u, v) != null;

// These work only for ValueGraphs.
valueGraph.edgeValue(u, v).isPresent();  // Java 8 only
valueGraph.edgeValueOrDefault(u, v, null) != null;
```

### Basic `Graph` example

```java
ImmutableGraph<Integer> graph =
    GraphBuilder.directed()
        .<Integer>immutable()
        .addNode(1)
        .putEdge(2, 3) // also adds nodes 2 and 3 if not already present
        .putEdge(2, 3) // no effect; Graph does not support parallel edges
        .build();

Set<Integer> successorsOfTwo = graph.successors(2); // returns {3}
```

### Basic [`ValueGraph`] example

```java
MutableValueGraph<Integer, Double> weightedGraph = ValueGraphBuilder.directed().build();
weightedGraph.addNode(1);
weightedGraph.putEdgeValue(2, 3, 1.5);  // also adds nodes 2 and 3 if not already present
weightedGraph.putEdgeValue(3, 5, 1.5);  // edge values (like Map values) need not be unique
...
weightedGraph.putEdgeValue(2, 3, 2.0);  // updates the value for (2,3) to 2.0
```

### Basic [`Network`] example

```java
MutableNetwork<Integer, String> network = NetworkBuilder.directed().build();
network.addNode(1);
network.addEdge("2->3", 2, 3);  // also adds nodes 2 and 3 if not already present

Set<Integer> successorsOfTwo = network.successors(2);  // returns {3}
Set<String> outEdgesOfTwo = network.outEdges(2);   // returns {"2->3"}

network.addEdge("2->3 too", 2, 3);  // throws; Network disallows parallel edges
                                    // by default
network.addEdge("2->3", 2, 3);  // no effect; this edge is already present
                                // and connecting these nodes in this order

Set<String> inEdgesOfFour = network.inEdges(4); // throws; node not in graph
```

### Traversing an undirected graph node-wise

```java
// Return all nodes reachable by traversing 2 edges starting from "node"
// (ignoring edge direction and edge weights, if any, and not including "node").
Set<N> getTwoHopNeighbors(Graph<N> graph, N node) {
  Set<N> twoHopNeighbors = new HashSet<>();
  for (N neighbor : graph.adjacentNodes(node)) {
    twoHopNeighbors.addAll(graph.adjacentNodes(neighbor));
  }
  twoHopNeighbors.remove(node);
  return twoHopNeighbors;
}
```

### Traversing a directed graph edge-wise

```java
// Update the shortest-path weighted distances of the successors to "node"
// in a directed Network (inner loop of Dijkstra's algorithm)
// given a known distance for {@code node} stored in a {@code Map<N, Double>},
// and a {@code Function<E, Double>} for retrieving a weight for an edge.
void updateDistancesFrom(Network<N, E> network, N node) {
  double nodeDistance = distances.get(node);
  for (E outEdge : network.outEdges(node)) {
    N target = network.target(outEdge);
    double targetDistance = nodeDistance + edgeWeights.apply(outEdge);
    if (targetDistance < distances.getOrDefault(target, Double.MAX_VALUE)) {
      distances.put(target, targetDistance);
    }
  }
}
```

## FAQ

### Why did Guava introduce `common.graph`?

对于Guava所做的许多其他事情，相同的参数适用于图：

*   代码重用/互操作性/范式统一：很多东西都与图处理有关
*   效率：使用低效图表示的代码数量是多少？ 空间太大（例如矩阵表示）？
*   正确性：图分析错误的代码是多少？
*   推广使用图作为ADT：如果简单，有多少人会使用图表？
*   简单性：如果明确使用该隐喻，处理图形的代码更容易理解。

### What kinds of graphs does `common.graph` support?

This is answered in the ["Capabilities"](#capabilities) section, above.

### `common.graph` doesn’t have feature/algorithm X, can you add it?

Maybe. You can email us at `guava-discuss@googlegroups.com` or [open an issue on
GitHub](https://github.com/google/guava/issues).

Our philosophy is that something should only be part of Guava if (a) it fits in
with Guava’s core mission and (b) there is good reason to expect that it will be
reasonably widely used.

`common.graph` will probably never have capabilities like visualization and I/O;
those would be projects unto themselves and don’t fit well with Guava’s mission.

Capabilities like traversal, filtering, or transformation are better fits, and
thus more likely to be included, although ultimately we expect that other graph
libraries will provide most capabilities.

### Does it support very large graphs (i.e., MapReduce scale)? 它是否支持非常大的图（即MapReduce量表）？

不是在这个时候。 数百万个节点中的图表应该是可行的，但您应该将此库视为类似于Java Collections Framework类型（`Map`，`List`，`Set`等）。

### Why aren't successors/predecessors/in-edges/out-edges sorted/ordered? 为什么后续/前任/边缘/外边缘 没有排序/排序？

**tl;dr**: Returning sorted/ordered sets of incident edges or adjacent nodes
would be quite expensive or infeasible in our implementations, since those sets
are live views. That said, you could create a custom implementation of the
`common.graph` interfaces that would have this behavior.

For more discussion, see
[this issue](https://github.com/google/guava/issues/2650).

### Why should I use it instead of something else?

**tl;dr**: you should use whatever works for you, but please let us know what
you need if this library doesn't support it!

The main competitors to this library (for Java) are:
[JUNG](https://github.com/jrtom/jung) and [JGraphT](http://jgrapht.org/).

`JUNG` was co-created by Joshua O'Madadhain (the `common.graph` lead) in 2003,
and he still maintains it. JUNG is fairly mature and full-featured and is widely
used, but has a lot of cruft and inefficiencies. Now that `common.graph` has
been released externally, he is working on a new version of `JUNG` which uses
`common.graph` for its data model.

`JGraphT` is another third-party Java graph library that’s been around for a
while. We're not as familiar with it, so we can’t comment on it in detail, but
it has at least some things in common with `JUNG`.

Rolling your own solution is sometimes the right answer if you have very
specific requirements. But just as you wouldn’t normally implement your own hash
table in Java (instead of using `HashMap` or `ImmutableMap`), you should
consider using `common.graph` (or, if necessary, another existing graph library)
for all the reasons listed above.

## Major Contributors

`common.graph` has been a team effort, and we've had help from a number of
people both inside and outside Google, but these are the people that have had
the greatest impact.

*   **Omar Darwish** did a lot of the early implementations, and set the
    standard for the test coverage.
*   [**James Sexton**](https://github.com/bezier89) has been the single most
    prolific contributor to the project and has had a significant influence on
    its direction and its designs. He's responsible for some of the key
    features, and for the efficiency of the implementations that we provide.
*   [**Joshua O'Madadhain**](https://github.com/jrtom) started the
    `common.graph` project after reflecting on the strengths and weaknesses of
    [JUNG](http://jung.sf.net), which he also helped to create. He leads the
    project, and has reviewed or written virtually every aspect of the design
    and the code.

[`Comparable`]: https://docs.oracle.com/javase/8/docs/api/java/lang/Comparable.html
[`Comparator`]: https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html
[`Graph`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/graph/Graph.html
[`Graphs`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/graph/Graphs.html
[`GraphBuilder`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/graph/GraphBuilder.html
[`ImmutableGraph`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/graph/ImmutableGraph.html
[`ImmutableNetwork`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/graph/ImmutableNetwork.html
[`MutableGraph`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/graph/MutableGraph.html
[`MutableNetwork`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/graph/MutableNetwork.html
[`MutableValueGraph`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/graph/MutableValueGraph.html
[`Network`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/graph/Network.html
[`NetworkBuilder`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/graph/NetworkBuilder.html
[`PredecessorsFunction`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/graph/PredecessorsFunction.html
[`SuccessorsFunction`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/graph/SuccessorsFunction.html
[`ValueGraph`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/graph/ValueGraph.html
[`ValueGraphBuilder`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/graph/ValueGraphBuilder.html
