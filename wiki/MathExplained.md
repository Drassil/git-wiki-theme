# Math

这个包包含各种数学实用程序。

## Contents 内容概览

*   基本的独立数学函数根据涉及的主要数字类型分为类[`IntMath`],    [`LongMath`], [`DoubleMath`], 和 [`BigIntegerMath`]。
    这些类具有并行结构，但每个类只支持函数的相关子集。注意，本质上不那么*mathematica(数学)*的类似函数可能会
    在`com.google.common.primitives`类中找到，比如[`Ints`]。
*   为单个和成对的数据集提供了各种统计计算(平均值、中位数等)。从阅读这个[overview][Stats]开始，而不仅仅是浏览Javadoc。
*   [`LinearTransformation`]表示形式`y = mx + b`的`double`值之间的线性转换;例如，英尺和米之间的换算，或者凯尔文和华氏度之间的换算。

## Examples 例子

```java
int logFloor = LongMath.log2(n, FLOOR);

int mustNotOverflow = IntMath.checkedMultiply(x, y);

long quotient = LongMath.divide(knownMultipleOfThree, 3, RoundingMode.UNNECESSARY); // fail fast on non-multiple of 3

BigInteger nearestInteger = DoubleMath.roundToBigInteger(d, RoundingMode.HALF_EVEN);

BigInteger sideLength = BigIntegerMath.sqrt(area, CEILING);
```

## Why use these? 为什么使用这些?

*   这些实用程序已经对异常溢出条件进行了详尽的测试。溢出语义(如果相关)在相关文档中明确指定。当前置条件失败时，它会很快失败。
*   它们已经过基准测试和优化。虽然性能不可避免地会因特定的硬件细节而变化，但它们的速度与Apache Commons中的
    类似函数`MathUtils`相比是有竞争力的，在某些情况下，甚至比后者要好得多。
*   它们的目的是鼓励可读的、正确的编程习惯。`IntMath.log2(x, CEILING)`是明确和明显的，即使在休闲阅读。
   `32 - Integer.numberOfLeadingZeros(x - 1)`不是。

_注意: 由于不同的溢出逻辑，这些实用程序与GWT并不特别兼容，也不针对GWT进行优化。_

## Math on Integral Types 关于积分类型的数学

这些实用程序主要处理三种整数类型:`int`, `long`,和 `BigInteger`。
这些类型上的数学实用程序被方便地命名为[`IntMath`], [`LongMath`], 和 [`BigIntegerMath`]。

### Checked Arithmetic Checked Arithmetic

我们为`IntMath`和`LongMath`提供算术方法，它们在溢出时失败得很快，而不是静静地忽略它。

`IntMath`                   | `LongMath`
:-------------------------- | :---------------------------
[`IntMath.checkedAdd`]      | [`LongMath.checkedAdd`]
[`IntMath.checkedSubtract`] | [`LongMath.checkedSubtract`]
[`IntMath.checkedMultiply`] | [`LongMath.checkedMultiply`]
[`IntMath.checkedPow`]      | [`LongMath.checkedPow`]

```java
IntMath.checkedAdd(Integer.MAX_VALUE, Integer.MAX_VALUE); // throws ArithmeticException
```

## Real-valued methods 实值法

`IntMath`, `LongMath`, 和 `BigIntegerMath`支持具有“精确实值(precise real value)”的各种方法，但这些方法将结果四舍五入为整数。
这些方法接受[`java.math.RoundingMode`]。这与JDK中使用的`RoundingMode`相同，是一个具有以下值的枚举：

*   `DOWN`: 向0取整。（这是Java分区的行为。）
*   `UP`: 从0四舍五入.
*   `FLOOR`: 向负无穷大取整.
*   `CEILING`: 向正无穷大取整.
*   `UNNECESSARY`: 四舍五入不应该是必需的；如果是，则通过抛出`ArithmeticException`来快速失败。
*   `HALF_UP`: 四舍五入到最接近的一半，从0四舍五入到 `x.5`.
*   `HALF_DOWN`: 四舍五入到最近的一半，四舍五入`x.5`到0.
*   `HALF_EVEN`: 四舍五入到最近的一半，四舍五入`x.5`到最近的偶数邻居.

这些方法在使用时应该是可读的:例如，`divide(x, 3,CEILING)`即使是在非正式的通读中也是完全明确的。

此外，这些函数内部都只使用整数算术，除了在构造`sqrt`中使用的初始近似时。

| Operation         | `IntMath`          | `LongMath`      | `BigIntegerMath`     |
| :---------------- | :----------------- | :-------------- | :------------------- |
| Division(除法)     | [`divide(int, int, RoundingMode)`] | [`divide(long, long, RoundingMode)`] | [`divide(BigInteger, BigInteger, RoundingMode)`] |
| Base-2 logarithm(以2为底的对数)  | [`log2(int, RoundingMode)`] | [`log2(long, RoundingMode)`] | [`log2(BigInteger, RoundingMode)`] |
| Base-10 logarithm(以10为底的对数) | [`log10(int, RoundingMode)`] | [`log10(long, RoundingMode)`] | [`log10(BigInteger, RoundingMode)`] |
| Square root(平方根)       | [`sqrt(int, RoundingMode)`] | [`sqrt(long, RoundingMode)`] | [`sqrt(BigInteger, RoundingMode)`] |

```java
BigIntegerMath.sqrt(BigInteger.TEN.pow(99), RoundingMode.HALF_EVEN);
   // returns 31622776601683793319988935444327185337195551393252
```

### Additional functions 额外的函数

我们还为其他一些我们发现有用的数学函数提供了支持。

Operation                                             | `IntMath`                                            | `LongMath`                                            | `BigIntegerMath`
:---------------------------------------------------- | :--------------------------------------------------- | :---------------------------------------------------- | :---------------
Greatest common divisor -- 最大公约数                   | [`gcd(int, int)`]                                    | [`gcd(long, long)`]                                   | In JDK: [`BigInteger.gcd(BigInteger)`]
Modulus (always nonnegative, -5 mod 3 is 1) -- 模(总是非负的，-5模3等于1)          | [`mod(int, int)`]                                    | [`mod(long, long)`]                                   | In JDK: [`BigInteger.mod(BigInteger)`]
Exponentiation (may overflow) -- 求幂(可能溢出)         | [`pow(int, int)`]                                    | [`pow(long, int)`]                                    | In JDK: [`BigInteger.pow(int)`]
Power-of-two testing -- 2次方测试                     | [`isPowerOfTwo(int)`]                                | [`isPowerOfTwo(long)`]                                | [`isPowerOfTwo(BigInteger)`]
Factorial (returns `MAX_VALUE` if input too big) -- 阶乘(如果输入太大，返回' MAX_VALUE ')      | [`factorial(int)`][`IntMath.factorial(int)`]         | [`factorial(int)`][`LongMath.factorial(int)`]         | [`factorial(int)`][`BigIntegerMath.factorial(int)`]
Binomial coefficient (returns `MAX_VALUE` if too big) -- 二项式系数(如果太大，返回' MAX_VALUE ') | [`binomial(int, int)`][`IntMath.binomial(int, int)`] | [`binomial(int, int)`][`LongMath.binomial(int, int)`] | [`binomial(int, int)`][`BigIntegerMath.binomial(int, int)`]

## Floating-point arithmetic 浮点算术

JDK已经完全涵盖了浮点运算，但是我们向[`DoubleMath`]添加了一些有用的方法。

| Method                                | Description                           |
| :------------------------------------ | :------------------------------------ |
| [`isMathematicalInteger(double)`]     | 测试输入是否为有限的整数。                 |
| [`roundToInt(double, RoundingMode)`]  | 将指定的数字四舍五入并将其转换为整数(如果它与整数相匹配)，否则将很快失败。|
| [`roundToLong(double, RoundingMode)`] | 将指定的数字四舍五入并将其转换为long(如果它与long匹配，则很快会失败)。|
| [`roundToBigInteger(double, RoundingMode)`] | 将指定的数字四舍五入为`BigInteger`(如果它是有限的)，否则会很快失败。|
| [`log2(double, RoundingMode)`]       | 取以2为底的对数，并使用指定的`RoundingMode`四舍五入到`int`。速度比`Math.log(double)`快。 |

[`BigIntegerMath`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/BigIntegerMath.html
[`DoubleMath`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/DoubleMath.html
[`IntMath`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/IntMath.html
[`Ints`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/primitives/Ints.html
[Stats]: StatsExplained
[`LinearTransformation`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/LinearTransformation.html
[`LongMath`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/LongMath.html
[`IntMath.checkedAdd`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/IntMath.html#checkedAdd-int-int-
[`LongMath.checkedAdd`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/LongMath.html#checkedAdd-long-long-
[`IntMath.checkedSubtract`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/IntMath.html#checkedSubtract-int-int-
[`LongMath.checkedSubtract`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/LongMath.html#checkedSubtract-long-long-
[`IntMath.checkedMultiply`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/IntMath.html#checkedMultiply-int-int-
[`LongMath.checkedMultiply`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/LongMath.html#checkedMultiply-long-long-
[`IntMath.checkedPow`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/IntMath.html#checkedPow-int-int-
[`LongMath.checkedPow`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/LongMath.html#checkedPow-long-long-
[`java.math.RoundingMode`]: http://docs.oracle.com/javase/8/docs/api/java/math/RoundingMode.html
[`divide(int, int, RoundingMode)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/IntMath.html#divide-int-int-java.math.RoundingMode-
[`divide(long, long, RoundingMode)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/LongMath.html#divide-long-long-java.math.RoundingMode-
[`divide(BigInteger, BigInteger, RoundingMode)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/BigIntegerMath.html#divide-java.math.BigInteger-java.math.BigInteger-java.math.RoundingMode-
[`log2(int, RoundingMode)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/IntMath.html#log2-int-java.math.RoundingMode-
[`log2(long, RoundingMode)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/LongMath.html#log2-long-java.math.RoundingMode-
[`log2(BigInteger, RoundingMode)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/BigIntegerMath.html#log2-java.math.BigInteger-java.math.RoundingMode-
[`log10(int, RoundingMode)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/IntMath.html#log10-int-java.math.RoundingMode-
[`log10(long, RoundingMode)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/LongMath.html#log10-long-java.math.RoundingMode-
[`log10(BigInteger, RoundingMode)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/BigIntegerMath.html#log10-java.math.BigInteger-java.math.RoundingMode-
[`sqrt(int, RoundingMode)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/IntMath.html#sqrt-int-java.math.RoundingMode-
[`sqrt(long, RoundingMode)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/LongMath.html#sqrt-long-java.math.RoundingMode-
[`sqrt(BigInteger, RoundingMode)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/BigIntegerMath.html#sqrt-java.math.BigInteger-java.math.RoundingMode-
[`gcd(int, int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/IntMath.html#gcd-int-int-
[`gcd(long, long)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/LongMath.html#gcd-long-long-
[`BigInteger.gcd(BigInteger)`]: http://docs.oracle.com/javase/8/docs/api/java/math/BigInteger.html#gcd-java.math.BigInteger-
[`mod(int, int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/IntMath.html#mod-int-int-
[`mod(long, long)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/LongMath.html#mod-long-long-
[`BigInteger.mod(BigInteger)`]: http://docs.oracle.com/javase/8/docs/api/java/math/BigInteger.html#mod-java.math.BigInteger-
[`pow(int, int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/IntMath.html#pow-int-int-
[`pow(long, int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/LongMath.html#pow-long-int-
[`BigInteger.pow(int)`]: http://docs.oracle.com/javase/8/docs/api/java/math/BigInteger.html#pow-int-
[`isPowerOfTwo(int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/IntMath.html#isPowerOfTwo-int-
[`isPowerOfTwo(long)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/LongMath.html#isPowerOfTwo-long-
[`isPowerOfTwo(BigInteger)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/BigIntegerMath.html#isPowerOfTwo-java.math.BigInteger-
[`IntMath.factorial(int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/IntMath.html#factorial-int-
[`LongMath.factorial(int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/LongMath.html#factorial-int-
[`BigIntegerMath.factorial(int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/BigIntegerMath.html#factorial-int-
[`IntMath.binomial(int, int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/IntMath.html#binomial-int-int-
[`LongMath.binomial(int, int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/LongMath.html#binomial-int-int-
[`BigIntegerMath.binomial(int, int)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/BigIntegerMath.html#binomial-int-int-
[`DoubleMath`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/DoubleMath.html
[`isMathematicalInteger(double)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/DoubleMath.html#isMathematicalInteger-double-
[`roundToInt(double, RoundingMode)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/DoubleMath.html#roundToInt-double-java.math.RoundingMode-
[`roundToLong(double, RoundingMode)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/DoubleMath.html#roundToLong-double-java.math.RoundingMode-
[`roundToBigInteger(double, RoundingMode)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/DoubleMath.html#roundToBigInteger-double-java.math.RoundingMode-
[`log2(double, RoundingMode)`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/math/DoubleMath.html#log2-double-java.math.RoundingMode-
