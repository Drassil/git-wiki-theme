# Best Practices

A collection of best practices to use AzerothCore.


## Custom changes

- **NEVER** add custom changes to the AzerothCore sources. [Create modules](http://www.azerothcore.org/wiki/Create-a-Module) instead.

If you need new hooks to implement your custom changes into modules, feel free to send a PR that implements them.

Reasons:

1. keeping your base source code clean will make it easier for you to update it
2. keeping your customizations into modules will allow you to easily enable/disable them to troubleshoot any potential issue
3. modularized software is much easier to maintain


## Pull Requests (PR)

- [Sync your fork](http://www.azerothcore.org/wiki/Syncing-your-fork) before opening a PR

Reasons:

1. Helps preventing merge conflicts
2. You will implement (and test) your changes as they were applied to latest master version

- **NEVER** push changes to the `master` branch. Aalways your `master` branch clean.

When you create a new PR, do `git checkout master` and create a new branch using `git checkout -b new-branch`.

Reasons:

1. This will allow you to create multiple PRs that are independent from each other
2. This will allow you to easily update your branches with latest master by first synching your fork and then merging `master` into your PR branches.
