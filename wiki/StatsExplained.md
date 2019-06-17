# Computing statistical values 计算统计值


这个页面列出了一些常见的统计计算以及如何执行它们，通常使用`com.google.common.math`中的统计支持库。

在下面的示例中，具有`intArray` 或 `collectionOfDouble`等名称的变量是该名称所暗示的类型。标识符`values`可以表示`int[]`, `long[]`, `double[]`,`Collection<? extends Number>`，或者可以用基本变量替换。(在某些情况下，甚至可以接受更多的变化;请检查Javadoc以获得详细信息。)

指向指定类的链接位于页面的[[bottom](#links)。


<a name="mean"></a>
## Mean (only) of existing values (仅)现有值的平均值

```java
double mean = Stats.meanOf(values);

double mean = doubleStream.average().getAsDouble();
```

<a name="max"></a>
## Maximum (only) of existing values 现有值的最大值(仅限)

```java
double max = doubleStream.max().getAsDouble();

double max = Doubles.max(doubleArray);

double max = immutableDoubleArray.stream().max().getAsDouble();

double max = Collections.max(collectionOfDouble);

double max = Ordering.natural().max(iterableOfDouble);
```

<a name="sum"></a>
## Sum (only) of existing values 现有值的和(仅)

```java
double sum = doubleStream.sum();

double sum = Arrays.stream(doubleArray).sum();

double sum = Stats.of(values).sum();
```

<a name="mean_max"></a>
## Both mean and maximum of existing values 现有值的平均值和最大值

```java
DoubleSummaryStatistics stats = doubleStream.summaryStatistics();
double mean = stats.getAverage();
double max = stats.getMax();

Stats stats = Stats.of(values);
double mean = stats.mean();
double max = stats.max();
```

<a name="stddev"></a>
## Standard deviation of existing values 现有值的标准偏差

选择`populationStandardDeviation`和`sampleStandardDeviation`;请参阅这些方法的Javadoc以了解它们之间的区别。

```java
double stddev = Stats.of(values).populationStandardDeviation();
```

<a name="accumulate"></a>
## Mean and sample standard deviation of incoming values 输入值的平均值和样本标准差

当您不想预先存储所有值时，这种方法非常有用。相反，创建一个"累积器acccumulator"，当您获得值时，您可以将它们输入，然后丢弃它们。

```java
StatsAccumulator accum = new StatsAccumulator();
...

// any number of times, over time
accum.add(value); // or addAll
...

double mean = accum.mean();
double stddev = accum.sampleStandardDeviation();

// or use accum.snapshot() to get an immutable Stats instance
```

<a name="median"></a>
## Median (only) of existing values 现有值的中值(仅)

```java
double median = Quantiles.median().compute(values);
```

<a name="percentile"></a>
## 95th percentile of existing values 现有值的95%

```java
double percentile95 = Quantiles.percentiles().index(95).compute(values);
```

<a name="percentiles"></a>
## Find the 90th, 99th, and 99.9th percentile 找出第90、99和99百分比

```java
Map<Integer, Double> largeValues =
    Quantiles.scale(1000).indexes(900, 990, 999).compute(values);
double p99 = largeValues.get(990); // for example
```

<a name="correlation"></a>
## Find the statistical correlation between two sets of values 找出两组值之间的统计相关性

```java
PairedStatsAccumulator accum = new PairedStatsAccumulator();

for (...) {
  ...
  accum.add(x, y);
}

double correl = accum.pearsonsCorrelationCoefficient();
```

<a name="linear"></a>
## Find a linear approximation for a set of ordered pairs 求一组有序对的线性近似

```java
PairedStatsAccumulator accum = new PairedStatsAccumulator();

for (...) {
  ...
  accum.add(x, y);
}

LinearTransformation bestFit = accum.leastSquaresFit();
double slope = bestFit.slope();
double yIntercept = bestFit.transform(0);
double estimateXWhenYEquals5 = bestFit.inverse().transform(5);
```

<a name="links"></a>
## Links to classes used in these examples 链接到这些示例中使用的类

*   [`Arrays`]
*   [`Collections`]
*   [`Doubles`]
*   [`DoubleStream`]
*   [`DoubleSummaryStatistics`]
*   [`ImmutableIntArray`]
*   [`LinearTransformation`]
*   [`Longs`]
*   [`Ordering`]
*   [`PairedStatsAccumulator`]
*   [`Quantiles`]
*   [`Stats`]
*   [`StatsAccumulator`]
*   [`Streams`]

[`Arrays`]: https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html
[`Collections`]: https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html

[`Doubles`]: http://google.github.io/guava/releases/snapshot-jre/api/docs/com/google/common/primitives/Doubles.html

[`DoubleStream`]: https://docs.oracle.com/javase/8/docs/api/java/util/stream/DoubleStream.html
[`DoubleSummaryStatistics`]: https://docs.oracle.com/javase/8/docs/api/java/util/DoubleSummaryStatistics.html

[`ImmutableIntArray`]: http://google.github.io/guava/releases/snapshot-jre/api/docs/com/google/common/primitives/ImmutableIntArray.html
[`LinearTransformation`]: http://google.github.io/guava/releases/snapshot-jre/api/docs/com/google/common/math/LinearTransformation.html
[`Longs`]: http://google.github.io/guava/releases/snapshot-jre/api/docs/com/google/common/primitives/Longs.html
[`Ordering`]: http://google.github.io/guava/releases/snapshot-jre/api/docs/com/google/common/collect/Ordering.html
[`PairedStatsAccumulator`]: http://google.github.io/guava/releases/snapshot-jre/api/docs/com/google/common/math/PairedStatsAccumulator.html
[`Quantiles`]: http://google.github.io/guava/releases/snapshot-jre/api/docs/com/google/common/math/Quantiles.html
[`Stats`]: http://google.github.io/guava/releases/snapshot-jre/api/docs/com/google/common/math/Stats.html
[`StatsAccumulator`]: http://google.github.io/guava/releases/snapshot-jre/api/docs/com/google/common/math/StatsAccumulator.html
[`Streams`]: http://google.github.io/guava/releases/snapshot-jre/api/docs/com/google/common/collect/Streams.html
