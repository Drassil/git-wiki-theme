# Guava Release 10.0.1: Release Notes

Release 10.0 was released on September 28, 2011. Release 10.0.1 was released on October 10, 2011.  (See ReleaseHistory.)

[Full API Documentation](http://google.github.io/guava/releases/10.0.1/api/docs/)

## Using Guava in your project

This release will be identified in the Maven Central repository as [com.google.guava:guava:10.0.1](http://search.maven.org/#artifactdetails%7Ccom.google.guava%7Cguava%7C10.0.1%7Cjar) and [com.google.guava:guava-gwt:10.0.1](http://search.maven.org/#artifactdetails%7Ccom.google.guava%7Cguava-gwt%7C10.0.1%7Cjar)

See UseGuavaInYourBuild for help integrating Guava into your build environment.

If you don't use managed dependencies, you can also just manually download JARs of the classes, sources and documentation from:

  * [guava-10.0.1.jar](http://search.maven.org/remotecontent?filepath=com/google/guava/guava/10.0.1/guava-10.0.1.jar)
  * [guava-gwt-10.0.1.jar](http://search.maven.org/remotecontent?filepath=com/google/guava/guava-gwt/10.0.1/guava-gwt-10.0.1.jar) (for GWT users)
  * [guava-10.0.1-javadoc.jar](http://search.maven.org/remotecontent?filepath=com/google/guava/guava/10.0.1/guava-10.0.1-javadoc.jar) (Javadoc)
  * [guava-10.0.1-sources.jar](http://search.maven.org/remotecontent?filepath=com/google/guava/guava/10.0.1/guava-10.0.1-sources.jar) (Source)

## API Changes

[Full JDiff Report](http://google.github.io/guava/releases/10.0.1/api/diffs/) of changes since release 9.0

To build a combined report of the API changes between release 10.0.1 and any older release, check out our docs tree and run `jdiff/jdiff.sh` with the previous release number as argument (example: `jdiff.sh 5.0`).

### Changes between 10.0 and 10.0.1

  * Fixed serialization of MapMaker eviction listeners (issue 712 (on Google Code))
  * Allow write operations on Cache.asMap view of CacheBuilder-generated Caches
  * Don't deprecate FinalizableReferenceQueue and associated classes

## Issues resolved

[Issues fixed](https://github.com/google/guava/issues?utf8=%E2%9C%93&q=milestone%3A10.0+is%3Aclosed+)

## Additions

### Runnable tests!

### New packages

  * [common.cache](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/cache/package-summary.html)
  * [common.eventbus](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/eventbus/package-summary.html)

### New classes

Ranges

  * [Range](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/collect/Range.html)
  * [Ranges](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/collect/Ranges.html)
  * [ContiguousSet](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/collect/ContiguousSet.html)
  * [DiscreteDomain](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/collect/DiscreteDomain.html)
  * [DiscreteDomains](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/collect/DiscreteDomains.html)
  * [BoundType](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/collect/BoundType.html)

Forwarding Helpers

  * [ForwardingExecutorService](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/util/concurrent/ForwardingExecutorService.html)
  * [ForwardingListeningExecutorService](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/util/concurrent/ForwardingListeningExecutorService.html)
  * ForwardingMap.StandardEntrySet
  * ForwardingMap.StandardKeySet
  * ForwardingMap.StandardValues
  * ForwardingMultiset.StandardElementSet

Other Collections

  * [ArrayTable](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/collect/ArrayTable.html)
  * ImmutableCollection.Builder

Futures

  * [ListeningExecutorService](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/util/concurrent/ListeningExecutorService.html)
  * [ListeningScheduledExecutorService](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/util/concurrent/ListeningScheduledExecutorService.html)
  * [FutureCallback](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/util/concurrent/FutureCallback.html)
  * [UncheckedExecutionException](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/util/concurrent/UncheckedExecutionException.html)
  * [ExecutionError](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/util/concurrent/ExecutionError.html)

Other Concurrency

  * [Atomics](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/util/concurrent/Atomics.html)
  * [Monitor](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/util/concurrent/Monitor.html)
  * [Uninterruptibles](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/util/concurrent/Uninterruptibles.html)

Miscellaneous

  * [Stopwatch](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/base/Stopwatch.html)
  * [UnsignedLongs](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/primitives/UnsignedLongs.html)
  * [Optional](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/base/Optional.html)
  * [HostAndPort](http://google.github.io/guava/releases/10.0.1/api/docs/com/google/common/net/HostAndPort.html)
  * Splitter.MapSplitter
  * Equivalence.Wrapper

### New members

  * Futures.addCallback
  * Futures.allAsList
  * Futures.get
  * Futures.getUnchecked
  * Futures.successfulAsList

  * Predicates.assignableFrom

  * Multisets.containsOccurrences
  * Multisets.removeOccurrences
  * Multisets.retainOccurrences

  * ByteStreams.copy(InputStream, OutputSupplier)

  * Maps.difference using an `Equivalence`
  * Maps.uniqueIndex for an `Iterator`
  * Multimaps.index for an `Iterator`
  * MapJoiner.join for an `Iterable<Entry>`

  * Functions.forSupplier

  * AbstractExecutionThreadService.getServiceName

  * InetAddresses.increment
  * InetAddresses.isMappedIPv4Address
  * InetAddresses.isMaximum
  * InetAddresses.toAddrString

  * AbstractFuture.interruptTask

  * Doubles.isFinite
  * Floats.isFinite

  * MoreExecutors.listeningDecorator

  * Tables.newCustomTable
  * Tables.transformValues

  * Ticker.systemTicker

  * Splitter.withKeyValueSeparator

  * BYTES (Doubles, Floats)
  * MAX\_POWER\_OF\_TWO (Int, Longs, Shorts, SignedBytes, UnsignedBytes)

