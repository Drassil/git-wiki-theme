# Guava Release 16.0: Release Notes

  * Release 16.0.1 was released on February 3, 2014.
  * Release 16.0 was released on January 17, 2014.
  * Release 16.0-rc1 was released on December 19, 2013.

(See [[ReleaseHistory]].)

[Full API Documentation](http://google.github.io/guava/releases/16.0.1/api/docs/)

## Using Guava in your project

This release is identified in the Maven Central repository as [com.google.guava:guava:16.0.1](http://search.maven.org/#artifactdetails%7Ccom.google.guava%7Cguava%7C16.0.1%7Cbundle) and [com.google.guava:guava-gwt:16.0.1](http://search.maven.org/#artifactdetails%7Ccom.google.guava%7Cguava-gwt%7C16.0.1%7Cbundle)

See [[UseGuavaInYourBuild]] for help integrating Guava into your build environment.

If you don't use managed dependencies, you can also just manually download JARs of the classes, sources and documentation from:

  * [guava-16.0.1.jar](http://search.maven.org/remotecontent?filepath=com/google/guava/guava/16.0.1/guava-16.0.1.jar)
  * [guava-gwt-16.0.1.jar](http://search.maven.org/remotecontent?filepath=com/google/guava/guava-gwt/16.0.1/guava-gwt-16.0.1.jar) (for GWT users)
  * [guava-16.0.1-javadoc.jar](http://search.maven.org/remotecontent?filepath=com/google/guava/guava/16.0.1/guava-16.0.1-javadoc.jar) (Javadoc)
  * [guava-16.0.1-sources.jar](http://search.maven.org/remotecontent?filepath=com/google/guava/guava/16.0.1/guava-16.0.1-sources.jar) (Source)

## Issues resolved

[19 issues](https://github.com/google/guava/issues?utf8=%E2%9C%93&q=milestone%3A16.0+is%3Aclosed+) are resolved in this release.

## API Changes

[Full JDiff Report](http://google.github.io/guava/releases/16.0/api/diffs/) of changes since release 15.0

To build a combined report of the API changes between release 16.0 and any older release, check out our docs tree and run `jdiff/jdiff.sh` with the previous release number as argument (example: `jdiff.sh 5.0`).

### Significant API additions

#### common.base

`Ascii.equalsIgnoreCase`

`Ascii.truncate`

`Converter`

`CaseFormat.converterTo(CaseFormat)`

`Enums.stringConverter`

`Utf8`

#### common.collect

`MultimapBuilder`

`Maps.asConverter(BiMap)`

#### common.eventbus

`SubscriberExceptionHandler`

#### common.hash

`HashingInputStream`

`HashingOutputStream`

#### common.io

`ByteSource.read(ByteProcessor)`

`CharSource.readLines(LineProcessor)`

#### common.primitives

`Booleans.countTrue(boolean...)`

`stringConverter()` for `Ints`, `Longs`, `Doubles`, `Floats` and `Shorts`

#### common.reflect

`ClassPath.getAllClasses()`

#### common.util.concurrent

`Runnables.doNothing()`

### Significant API changes

In `common.io`, `InputSupplier` and `OutputSupplier` and all methods that take one or the other as a parameter have been deprecated. `ByteSource`, `CharSource`, `ByteSink` and `CharSink` should be used instead. The methods will be removed in two releases (18.0) and the interfaces are scheduled to be removed after 18 months, in June 2015.
