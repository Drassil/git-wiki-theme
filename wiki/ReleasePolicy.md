## Release Frequency

We intend to release a new version of Guava approximately every **two weeks**.

We may skip a release if there are no new changes since the last release that we consider worth doing a release for, such as if there are no changes at all or only extremely minor internal changes, typo fixes, and that sort of thing.

## Versioning

The version number for a new release will always be set just before creating that release and will be determined in accordance with [semantic versioning](http://semver.org). To put it simply:

- Version numbers will be of the form **major.minor<.patch>-flavor**, with the patch version left off if it would be 0.
- If there are no API additions or removals, the **patch** version from the previous release will be incremented.
- If there are API additions, but no removals or other incompatible API changes, the **minor** version from the previous release will be incremented and the patch version set to 0.
- If there are API removals or other incompatible API changes, the **major** version from the previous release will be incremented and the minor and patch versions set to 0.

Whether or not an API is annotated with `@Beta` is not taken into account when determining the version number. Removing or making an incompatible change to an `@Beta` API requires us to increase the major version number just as it does for a non-`@Beta` API.

### Flavors

Guava is currently released in two flavors: JRE and Android. For each release starting with release 23.1, there are two different version numbers available in Maven Central: `<version>-jre` and `<version>-android`. The JRE flavor currently targets Java 8, while the Android flavor currently targets an Android (API level 14) compatible subset of Java 7. The Android flavor does not _require_ Android, it is merely Android compatible and, to some extent, optimized for use on Android. Code depending on Guava that wants to be compatible with both Android and JRE should use the Android flavor. See [[Compatibility]] for more information.

## Documentation

Releases will be documented on Guava's [GitHub Releases](https://github.com/google/guava/releases) page, including links to generated Javadoc and JDiff and a list of notable changes.

## Release Candidates

We no longer provide release candidates prior to a release. If issues are found with a release, they can either be corrected in the next release in two weeks or in a patch release sooner, depending on the severity.