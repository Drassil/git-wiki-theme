# Guava Release 12.0: Release Notes

Release 12.0 was released on April 30, 2012. Release 12.0.1 was released on July 10, 2012. (See ReleaseHistory.)

[Full API Documentation](http://google.github.io/guava/releases/12.0/api/docs/)

## Using Guava in your project

This release will be identified in the Maven Central repository as [com.google.guava:guava:12.0.1](http://search.maven.org/#artifactdetails%7Ccom.google.guava%7Cguava%7C12.0.1%7Cjar) and [com.google.guava:guava-gwt:12.0.1](http://search.maven.org/#artifactdetails%7Ccom.google.guava%7Cguava-gwt%7C12.0.1%7Cjar)

See UseGuavaInYourBuild for help integrating Guava into your build environment.

If you don't use managed dependencies, you can also just manually download JARs of the classes, sources and documentation from:

  * [guava-12.0.1.jar](http://search.maven.org/remotecontent?filepath=com/google/guava/guava/12.0.1/guava-12.0.1.jar)
  * [guava-gwt-12.0.1.jar](http://search.maven.org/remotecontent?filepath=com/google/guava/guava-gwt/12.0.1/guava-gwt-12.0.1.jar) (for GWT users)
  * [guava-12.0.1-javadoc.jar](http://search.maven.org/remotecontent?filepath=com/google/guava/guava/12.0.1/guava-12.0.1-javadoc.jar) (Javadoc)
  * [guava-12.0.1-sources.jar](http://search.maven.org/remotecontent?filepath=com/google/guava/guava/12.0.1/guava-12.0.1-sources.jar) (Source)

## Issues resolved

[43 issues](https://github.com/google/guava/issues?utf8=%E2%9C%93&q=milestone%3A12.0+is%3Aclosed+) are resolved in this release (a record, among somewhat on-time releases).

Notably, [FinalizableReferenceQueue no longer keeps unused ClassLoader alive](https://github.com/google/guava/issues/92), [an OGSi bundle is included](https://github.com/google/guava/issues/688), and [CacheBuilder users must opt in to stats collection](https://github.com/google/guava/issues/863).

## Changes between 12.0 and 12.0.1
Resolved a major [performance regression](https://github.com/google/guava/issues/1055) in LoadingCache.

## API Changes

[Full JDiff Report](http://google.github.io/guava/releases/12.0/api/diffs/) of changes since release 11.0.2

To build a combined report of the API changes between release 12.0 and any older release, check out our docs tree and run `jdiff/jdiff.sh` with the previous release number as argument (example: `jdiff.sh 5.0`).

### CacheBuilder Cache stats

CacheBuilder users who use the Cache stats() method must now opt in by calling recordStats() (as of 12.0-rc2).

### JDK6 APIs

Guava 12.0 is the first release to require JDK6. Users requiring JDK5 compatibility may continue to use Guava 11.0.2 -- or contact us about maintaining a backport.

Here are the new APIs introduced along with our JDK6 dependency:

ImmutableSortedSet implements NavigableSet; ImmutableSortedMap implements NavigableMap.

Added forwarding classes for Deque, NavigableMap, NavigableSet.

Added type-inferring factory methods: newArrayDeque, newLinkedBlockingDeque, newCopyOnWriteArrayList, newCopyOnWriteArraySet.

Added Maps.unmodifiableNavigableMap, Sets.unmodifiableNavigableSet.

### Other significant API additions

Introducing common.reflect, especially TypeToken, a better java.lang.Class.

Introducing MediaType (which may be split into MediaType+MediaRange someday).

Introducing FluentIterable.

Introducing CacheBuilderSpec; see CacheBuilder.from(CacheBuilderSpec) and CacheBuilder.from(String) to make use of it.

Introducing ImmutableSortedMultiset.

Added Enums.getField, getIfPresent.

Added HashCodes.

Added BloomFilter.copy, equals, hashCode; plus, put now returns boolean.

Added Optional.transform.

Added ToStringHelper.omitNullValues.

Added Collections2.permutations, orderedPermutations.

Added FowardingSet.standardRemoveAll.

Added Cache.putAll.

Added JdkFutureAdapters.listenInPoolThread with custom executor.

### Other significant API changes

Sink is renamed to PrimitiveSink. Implementations of Funnel will need to be updated.

AbstractLinkedIterator has been deprecated in favor of the identical AbstractSequentialIterator.

ByteStreams and Files getDigest methods have been deprecated in favor of new hash methods.

ComparisonChain.compare(boolean, boolean) has been deprecated in favor new compareFalseFirst/compareTrueFirst methods.

### OSGi support

As of 12.0-rc2, Guava contains OSGi metadata.

