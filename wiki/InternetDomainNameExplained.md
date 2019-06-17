# InternetDomainName Internet域名

## Introduction 介绍

[`InternetDomainName`]是解析和操作域名的有用工具。它可以用作验证器、组件提取器，也可以用作值类型，以一种类型安全的方式传递域名。

然而，`InternetDomainName`行为的某些方面可能会令人惊讶，并可能导致调用代码时出现错误。本文件解决了这些问题。

## Details

### Public suffixes and private domains 公共后缀和私有域

根据相关的RFC规范，`InternetDomainName`对象在语法上是有效的，但它**不**保证与Internet上的实际可寻址域相对应。
如果不进行域的净查找(net lookup)并尝试联系它，就不可能做到这一点，而且对于大多数常见情况来说，这是不可接受的开销。

不过，确定给定的域名**是否可能**表示Internet上的实际域通常非常有用。为此，我们使用[Public Suffix List (PSL)](http://publicsuffix.org/)中的数据，
这是Mozilla基金会维护的列表。在`InternetDomainName`上有方法确定给定域与PSL的关系。用最基本的术语来说，
如果`domain.hasPublicSuffix()`返回`true`，则域**可能**对应于真实的Internet地址；否则，几乎可以肯定
没有。

此时，我们需要备份并定义一些术语。有四个利息条款：

*   [Top-Level Domain (TLD)](http://en.wikipedia.org/wiki/Top_level_domain):没有子级的单标签域，如“com”或“au”。
*   注册后缀：由[domain name registry](https://en.wikipedia.org/wiki/Domain_name_registry)控制的域名，如“com”或“co.uk
    (例如，[Verisign](https://en.wikipedia.org/wiki/.com) 用于 `com`)，在此域下，人们可以通过
    [domain name registrar](https://en.wikipedia.org/wiki/Domain_name_registrar) 注册子域(例如：Namecheap）。
    此类域名注册受互联网管理机构的法律保护，如[ICANN](http://en.wikipedia.org/wiki/ICANN)。
*   [Public suffix](http://en.wikipedia.org/wiki/Public_Suffix_List)：这个类别是注册表后缀的超集，此外还包括`blogspot.com`等后缀，
    这些后缀不受注册控制，但允许公众注册子域名。在一些常见的情况下，使用公共后缀而不是注册表后缀对域进行分类更合适。例如，永远不要将cookie设置为公共后缀。
*   有效的顶级域名: “public suffix”的同义词已弃用。

在继续之前仔细阅读相关文章是值得的。

造成混淆的一个主要原因是，当人们说“TLD”时，他们的意思是"registry suffix"或"public suffix"。这三个都是独立的概念。举个例子,

*   `com` 这三个都是: 一个是 TLD, 一个是 registry suffix, 一个是 public suffix
*   `au` 是一个 TLD, 但不是注册表后缀或公共后缀
*   `com.au` 注册表后缀和公共后缀，而不是TLD
*   `blogspot.com` 是公共后缀，但既不是注册表后缀也不是TLD
*   `squerf` 三个都不是

这种混淆尤其危险，因为TLD和注册表后缀有清晰、正式的定义，而公共后缀没有。最后，一个可信的来源
要求PSL维护人员将一个公共后缀添加到列表中。可信的来源包括ICANN和国家域名管理器，但也包括提供服务的私营公司，
这些公司提供的服务具有(模糊地)定义公共后缀的特征 -- 独立子域名和[supercookie](http://en.wikipedia.org/wiki/HTTP_cookie#supercookie)抑制。
因此，举例来说，许多谷歌拥有的域名(例如:`blogspot.com`)包含在PSL中。

回到 `InternetDomainName`，只要我们限制自己使用`hasPublicSuffix()`来验证该域是一个合理的Internet域名，一切都很好。
危险来自于识别或提取“顶级私有域(top private domain)”的方法。从技术角度看，顶部的私有域只是公共后缀之前最右边的超域。
例如，`www.foo.co.uk`有一个公共后缀`co.uk`。以及一个顶级的私有域名`foo.co.uk`。

正如在`isUnderPublicSuffix()`,`isTopPrivateDomain()`, 和 `topPrivateDomain()`文档中指出的，
这些方法(大多数情况下)惟一可靠的地方是确定可以在何处设置cookie。然而，许多人实际上试图做的是从子域中找到
“真正的”域名或“所有者”域名。例如，在`mail.google.com`中，他们希望将`google.com` 标识为所有者域。
所以他们代码写为:

```java
InternetDomainName owner =
    InternetDomainName.from("mail.google.com").topPrivateDomain();
```

...果然，`owner`的域名是`google.com`。事实上，这个习语(以及类似的习语)在很多时候都很管用。
"公共后缀下的域名(the domain under the public suffix)"在语义上应该等同于“所有者域”，这似乎很直观。

但事实并非如此，这就是问题所在。考虑一下`blogspot.com`，它出现在PSL中。虽然它具有公共后缀的特点 
-- 人们可以注册域名下(博客),和cookies不应该允许设置(防止cross-blog cookie恶作剧),它本身就是一个可寻址域
在互联网上(这发生在重定向到`blogger.com`,但这很容易改变)。

因此，如果在`foo.blogspot.com`上使用上面的习语，`owner`将是相同的域`foo.blogspot.com`。
这是设置任何[many common applications](https://wiki.mozilla.org/Public_Suffix_List/Uses)的正确答案，但这显然让许多人感到惊讶。

对于那些目标实际上是确定从注册中心购买的域名的罕见应用程序，正确的抽象不是公共后缀，而是注册中心后缀。
如果我们改变上面的代码，使用注册表后缀的并行方法:

```java
InternetDomainName owner =
    InternetDomainName.from("foo.blogspot.com").topDomainUnderRegistrySuffix();
```

...然后我们将`owner`设置为`blogspot.com`。

这个方便的表格总结了不同类型后缀的区别:

`InternetDomainName` | `publicSuffix()` | `topPrivateDomain()` | `registrySuffix()` | `topDomainUnderRegistrySuffix()`
-------------------- | ---------------- | -------------------- | ------------------ | --------------------------------
`google.com`         | `com`            | `google.com`         | `com`              | `google.com`
`co.uk`              | `co.uk`          | N/A                  | `co.uk`            | N/A
`www.google.co.uk`   | `co.uk`          | `google.co.uk`       | `co.uk`            | `google.co.uk`
`foo.blogspot.com`   | `blogspot.com`   | `foo.blogspot.com`   | `com`              | `blogspot.com`
`google.invalid`     | N/A              | N/A                  | N/A                | N/A

这里最大的教训是:

*   TLDs, registry suffixes(注册后缀), 和 public suffixes(公共后缀) 是不同的事情.
*   公共后缀由人定义，用于严格限制的目的(主要是域验证和超级cookie预防)，并且不可预测地更改。
*   给定域名与公共后缀的关系、该域响应web请求的能力以及该域的“所有权ownership”之间没有定义映射。
*   注册表后缀可以帮助您确定域的“所有权”，即ICANN格式的域名注册;但是，对于大多数应用程序，此信息不如公共后缀合适。
*   您可以使用`InternetDomainName`来确定给定的字符串是否表示Internet上的可寻址域名，以及确定域的哪些部分可能允许设置cookie。
*   您不能使用`InternetDomainName`来确定某个域名是否作为可寻址主机存在于Internet上。

请记住，如果您不注意这个建议，您的代码将在各种各样的输入上运行...但是，失败案例都是等待发生的bug，
随着PSL更新被合并到底层的代码`InternetDomainName`中，失败案例集将发生更改。

[`InternetDomainName`]: http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/net/InternetDomainName.html
