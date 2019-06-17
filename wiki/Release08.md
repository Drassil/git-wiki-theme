# Guava Release 08: Release Notes

Release 08 was released on January 27, 2011.  (See ReleaseHistory.)

[Download it](https://github.com/google/guava/archive/v8.0.zip)

Javadocs are included, but more complete javadocs (using the "-linksource" and "-use" javadoc options) are always available on-line:

[Full API Documentation](http://google.github.io/guava/releases/8.0/api/docs/)

## Using Guava in your project

Here are some code/config snippets for how to UseGuavaInYourBuild.

This release is identified in the Maven "central" repository used by maven, ivy, gradle, ant (with maven ant tasks) as [com.google.guava:guava:r08](http://mavencentral.sonatype.com/#artifactdetails%7Ccom.google.guava%7Cguava%7Cr08).  (Note: the GWT artifact is not yet released to the maven central repository.  Stay tuned.)

## API Changes

[Full JDiff Report](http://google.github.io/guava/releases/8.0/api/diffs/) of changes since release 07

To build a combined report of the API changes between release 08 and any older release, check out our source tree and run `svn/tags/release08/javadoc/jdiff/jdiff.sh` with the previous release number as argument (example: `jdiff.sh 05`).

## Issues resolved

[Issues fixed](https://github.com/google/guava/issues?utf8=%E2%9C%93&q=milestone%3A8.0+is%3Aclosed+)
