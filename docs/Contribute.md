You can contribute in several ways to AzerothCore:

- [commenting an open issue](Contribute#how-to-comment-an-issue)

- [opening an issue](Contribute#how-to-open-an-issue)

- [testing a pull request](How-to-test-a-PR)

- [testing DB-only changes](How-to-test-DB-only-changes)

- [creating a pull request](Contribute#how-to-create-a-pull-request)

- [improving our wiki](Contribute#improve-the-wiki)
## General information

To contribute, you obviously need a github account.

## How to comment an issue

You can help much by checking the [issues](https://github.com/azerothcore/azerothcore-wotlk/issues) and joining their discussions.

One thing you can do is to update your core and check if the issue is still valid on your revision, then you can write a comment **including the commit hash**.

## How to open an issue

Important things to do before reporting a bug:

**1) Update your core to the latest AzerothCore revision and check whether the bug is still there**

**2) Search among the [issues](https://github.com/azerothcore/azerothcore-wotlk/issues) to check if someone has already reported the bug, in that case you have just to comment the issue to confirm the bug (including your core revision)**

If **(and only if)** the bug hasn't been reported yet, you can [open an issue](https://github.com/azerothcore/azerothcore-wotlk/issues/new) and include:

- the **description of the bug**, including any useful **links** and **IDs/GUIDs/names** of any related entities (NPCs, spells, gameobjects, etc..)
- the **core revision (commit hash)** of the AzerothCore you are running on, **do not write just "latest version"** even if you have just updated your core
- if it is about a build problem, it would be useful to know also your **operating system** and **compiler version**

## How to test a Pull Request

- Read [How to test a PR](How-to-test-a-PR).

## How to create a Pull Request

- Read [How to test a PR](How-to-create-a-PR).

### Giving credit to the author of code

If you want to submit code written by someone else, you can give credits to the author when you commit:

`git commit --author="AuthorName <authoremail@address.com>" -am "Commit message here"`

Update: unfortunately, when merging a PR by squashing the commit, GitHub automatically sets the author of the resulting commit as the person who opened the PR. Because of this reason, please mention the original author (and commit, if applicable) in the PR description.

## Improve the Wiki

Do you want to improve or add a page to our wiki? Good! Let's discuss it using [our chat](https://discord.gg/PaqQRkd).
