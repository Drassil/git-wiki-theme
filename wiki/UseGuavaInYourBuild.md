# Using Guava in your build

## How to configure your build

For any code snippet below, please substitute the version given with the version
of Guava you wish to use.

### [Maven](http://maven.apache.org)

Add the following snippet to the `<dependencies />` section:

```xml
<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>23.5-jre</version> <!-- or 23.5-android for the Android flavor -->
</dependency>
```

### [Gradle](http://www.gradle.org/)

Ensure the maven standard repositories are available like so:

```groovy
repositories {
  mavenCentral()
}
```

Then add the Guava dependency in the dependencies section like so:

```groovy
dependencies {
  compile group: 'com.google.guava', name: 'guava', version: '23.5-jre' # or 23.5-android for the Android flavor
}
```

### [Ivy](http://ant.apache.org/ivy/)

Add the following line to the dependencies section:

```xml
<dependency org="com.google.guava" name="guava" rev="23.5-jre" /> <!-- or rev="23.5-android" for the Android flavor -->
```

and make sure that the "public" resolver is used.

### [Buildr](http://buildr.apache.org)

Include this:

```buildr
compile.with 'com.google.guava:guava:jar:23.5-jre' # or '...:23.5-android' for the Android flavor
```

### Manual Dependencies

You can also just manually download JARs for the classes, sources and javadocs.
See the appropriate [release](https://github.com/google/guava/releases).

### What about GWT?

In all the examples above, leave "com.google.guava" as it is but replace the
other occurrence of "guava" with "guava-gwt". (There is no GWT artifact for the
Android flavor.)

## What about Guava's own dependencies?

Guava has one real dependency that is needed at runtime:
`com.google.guava:failureaccess:1.0`. This was needed as part of making
`ListenableFuture` available as a separate artifact from the rest of Guava.

Guava also depends on some artifacts that contain annotations. This is primarily
for use by static analysis tools and certain compilers, so these annotations
need not be present in your runtime classpath unless you want your app to
recognize those annotations. In many cases, they need not be present even in
your *compile-time* classpath. Yet we make them available in your compile-time
classpath by default to avoid errors in unusual cases. (For examples, see
[#2652](https://github.com/google/guava/pull/2652) /
[#2837](https://github.com/google/guava/issues/2837) (annotation processors),
[#2721](https://github.com/google/guava/issues/2721) /
[#2824](https://github.com/google/guava/issues/2824) (`-Xlint:all -Werror`), and
[#1095](https://github.com/google/guava/issues/1095) /
[#1127](https://github.com/google/guava/issues/1127) (Scala).) If you wish to
avoid the dependencies, you can usually safely exclude them.

(Ideally, we would make the annotations available at compile-time but not
runtime. However, this is [not currently
possible](https://issues.apache.org/jira/browse/MNG-2205?focusedCommentId=16267311&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-16267311)
in Maven's model.)

## How do I avoid conflicts between multiple versions of Guava?

In the simple case, just upgrade your project to the newest version of Guava.
Or, if you don't use Guava directly, use [dependency management] to select the
newest version of Guava for all your dependencies. However, this can fail in
some cases:

-   One of your dependencies uses `@Beta` APIs against [our
    warnings][important-warnings].
-   One of your dependencies uses a version of Guava from the days [when we were
    still removing non-`@Beta` APIs][important-warnings].

In these cases, you may be able to find an older version of Guava that satisfies
all your dependencies. However, the only general solution is for all projects to
update to at least Guava 21 and for those used as dependencies to avoid `@Beta`
APIs.

### What if I want to use `@Beta` APIs from a library that people use as a dependency?

First, please let us know. We may be able to remove `@Beta` from the APIs you
need. Even if we can't do it immediately, we'd like to know about your need so
that we can prioritize better.

Second, if you don't need to expose *Guava types* to users in your API (e.g.,
expose a `public` method that returns `ImmutableList`), you can configure your
build to *shade/relocate* Guava: You write your code against Guava as usual,
and your build creates a private copy of Guava, rewrites your compiled code to
use it, and includes it in your artifact. All you need is some Maven
configuration like that shown below. Just substitute in a package of your own
for `my.organization` in the `shadedPattern`:

```xml
      <plugin>
        <artifactId>maven-shade-plugin</artifactId>
        <version>3.1.0</version>
        <configuration>
          <artifactSet>
            <includes>
              <include>com.google.guava:*</include>
            </includes>
          </artifactSet>
          <relocations>
            <relocation>
              <pattern>com.google</pattern>
              <shadedPattern>my.organization.repackaged.com.google</shadedPattern>
            </relocation>
          </relocations>
        </configuration>
        <executions>
          <execution>
            <phase>package</phase>
            <goals>
              <goal>shade</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
```

Gradle users can do the same with the [Shadow Plugin].

[dependency management]: https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html#Transitive_Dependencies
[important-warnings]: https://github.com/google/guava/blob/master/README.md#important-warnings
[Shadow Plugin]: http://imperceptiblethoughts.com/shadow/#relocating_packages
