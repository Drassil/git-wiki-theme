# Guava Release 11.0.2: Release Notes

Release 11.0 was released on December 18, 2011. Release 11.0.1 was released on January 9, 2012. Release 11.0.2 was released on February 22, 2012. (See ReleaseHistory.)

[Full API Documentation](http://google.github.io/guava/releases/11.0.2/api/docs/)

## Using Guava in your project

This release will be identified in the Maven Central repository as [com.google.guava:guava:11.0.2](http://search.maven.org/#artifactdetails%7Ccom.google.guava%7Cguava%7C11.0.2%7Cjar) and [com.google.guava:guava-gwt:11.0.2](http://search.maven.org/#artifactdetails%7Ccom.google.guava%7Cguava-gwt%7C11.0.2%7Cjar)

See UseGuavaInYourBuild for help integrating Guava into your build environment.

If you don't use managed dependencies, you can also just manually download JARs of the classes, sources and documentation from:

  * [guava-11.0.2.jar](http://search.maven.org/remotecontent?filepath=com/google/guava/guava/11.0.2/guava-11.0.2.jar)
  * [guava-gwt-11.0.2.jar](http://search.maven.org/remotecontent?filepath=com/google/guava/guava-gwt/11.0.2/guava-gwt-11.0.2.jar) (for GWT users)
  * [guava-11.0.2-javadoc.jar](http://search.maven.org/remotecontent?filepath=com/google/guava/guava/11.0.2/guava-11.0.2-javadoc.jar) (Javadoc)
  * [guava-11.0.2-sources.jar](http://search.maven.org/remotecontent?filepath=com/google/guava/guava/11.0.2/guava-11.0.2-sources.jar) (Source)

## API Changes

[Full JDiff Report](http://google.github.io/guava/releases/11.0.2/api/diffs/) of changes since release 10.0.1

To build a combined report of the API changes between release 11.0.2 and any older release, check out our docs tree and run `jdiff/jdiff.sh` with the previous release number as argument (example: `jdiff.sh 5.0`).

### Changes between 11.0.1 and 11.0.2

  * Fix BloomFilter performance bug, breaking backwards compatibility in the process.
  * Fix GWT compilation of CacheBuilder.

### Changes between 11.0 and 11.0.1

  * Fix bug in Optional#presentInstances.
  * Make MessageDigestHashFunction thread-safe.
  * Fix Cache clear in the absence of a removal listener.
  * Cache documentation improvements.

### LoadingCache split out of Cache

The [Cache](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/cache/Cache.html) methods related to automatic cache loading have been split out into the [LoadingCache](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/cache/LoadingCache.html) interface. [CacheBuilder.build(CacheLoader)](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/cache/CacheBuilder.html#build(com.google.common.cache.CacheLoader)) now returns a LoadingCache, and [CacheBuilder.build()](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/cache/CacheBuilder.html#build()) was introduced, which returns a Cache.

When upgrading to version 11.0.2, all Cache references should be changed to LoadingCache.

## Issues resolved

[Issues fixed](https://github.com/google/guava/issues?utf8=%E2%9C%93&q=milestone%3A11.0+is%3Aclosed+)

## Additions

### New packages

  * [common.hash](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/hash/package-summary.html)
  * [common.math](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/math/package-summary.html)

### New classes

common.cache

  * [LoadingCache](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/cache/LoadingCache.html)
  * [AbstractLoadingCache](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/cache/AbstractLoadingCache.html)
  * [ForwardingLoadingCache](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/cache/ForwardingLoadingCache.html)
  * [Weigher](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/cache/Weigher.html)

common.collect

  * [ImmutableTable](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/collect/ImmutableTable.html)
  * [Queues](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/collect/Queues.html)
  * [SortedMultiset](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/collect/SortedMultiset.html)

common.net

  * [HttpHeaders](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/net/HttpHeaders.html)

common.primitives

  * [UnsignedInteger](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/primitives/UnsignedInteger.html)
  * [UnsignedInts](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/primitives/UnsignedInts.html)
  * [UnsignedLong](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/primitives/UnsignedLong.html)

common.util.concurrent

  * [AbstractScheduledService](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/util/concurrent/AbstractScheduledService.html)
  * [AsyncFunction](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/util/concurrent/AsyncFunction.html)
  * [AtomicDouble](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/util/concurrent/AtomicDouble.html)
  * [AtomicDoubleArray](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/util/concurrent/AtomicDoubleArray.html)
  * [AtomicLongMap](http://google.github.io/guava/releases/11.0.2/api/docs/com/google/common/util/concurrent/AtomicLongMap.html)

### New members

common.base

  * Objects.ToStringHelper.add/addValue primitive overloads
  * Optional.asSet, presentInstances
  * Strings.commonPrefix, commonSuffix

common.cache

  * Cache.get, getIfPresent, getAllPresent, invalidateAll, put
  * CacheBuilder.build, maximumWeight, refreshAfterWrite, weigher
  * CacheLoader.loadAll, reload
  * CacheStats.plus

common.collect

  * ImmutableMultimap.inverse
  * Iterables.mergeSorted, tryFind
  * Iterators.mergeSorted, tryFind
  * Maps.difference, filterEntries, filterKeys, filterValues, transformEntries, transformValues
  * Multimaps.filterEntries, filterKeys, filterValues
  * Multisets.copyHighestCountFirst, unmodifiableSortedMultiset
  * Ordering.max, min (Iterator overload)
  * Sets.filter (SortedSet overload), newLinkedHashSetWithExpectedSize
  * Tables.unmodifiableRowSortedTable, unmodifiableTable

common.io

  * Files.getFileExtension, simplifyPath

common.primitives

  * Ints.tryParse

common.util.concurrent

  * Futures.transform(..., AsyncFunction) (to replace Futures.chain)

