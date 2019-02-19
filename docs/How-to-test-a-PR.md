# How to test a PR

## Introduction

At AzerothCore we care about game quality and stability. Because of this, **we do not push changes directly to the master branch**. Instead, whenever introducing a new change, we create a new [Pull Request](https://help.github.com/articles/about-pull-requests/) (often shortened in PR).

This allow us to properly **review and test** any change before it gets into production environments. Everyone who is able to install AzerothCore is also able to contribute by testing PRs. This guide will explain how to do it.

The more users help us with testing the PRs, the better will be our development activity in terms of speed and quality.

## What PRs need to be tested?

We label as [**Waiting to be tested**](https://github.com/azerothcore/azerothcore-wotlk/pulls?q=is%3Apr+is%3Aopen+label%3A%22Waiting+to+be+tested%22) all PRs that have already been completed by the author and had their code reviewed.

Clicking on the label above will show you the list of all PRs that need to be tested in order to get to the `master` branch.

## What do I need before testing a PR?

You need to:

- have AzerothCore installed in your system (either using the [traditional setup](Installation) or the [Docker setup](Install-with-Docker)).
- have a GitHub account, you can [register one here](https://github.com/join) for free.

### What if the PR has only DB changes?

Some PRs have only database changes (no C++ changes). If that's the case, there is a [simplified procedure to test such changes](How-to-test-DB-only-changes).

If you're not sure, just keep reading here and do the traditional PR test which will work for all kind of PRs.

### Notes who cloned a fork of AzerothCore instead of the main repo:

It is typical to create and clone your own fork of AzerothCore if you are also a developer.
If that is your case, then you have to 

- add the main AzerothCore remote using:
```
git remote add upstream https://github.com/azerothcore/azerothcore-wotlk.git
```
- replace `origin` with `upstream` in all commands listed below

## Get the PR code to be tested

- Open a terminal and move to the directory of your AzerothCore sources, for example using `cd azerothcore-wotlk`.

![image](https://user-images.githubusercontent.com/75517/52176403-b6708480-27b2-11e9-93b0-9f3d3232e817.png)

- Here we assume that you are starting from a clean, updated `master` branch. You can verify which branch you are in by typing `git checkout`. If you are not in master already, go back to master using `git checkout master`. While you're here, you can also `git pull` to make sure you have the latest master. And remember, **never add custom changes to the master branch** (always create a new, separate branch if you have to).

- Check the ID of the PR that you want to test, it will appear in the URL and title of the PR. For example the ID of this PR is **1383**:  [https://github.com/azerothcore/azerothcore-wotlk/pull/1383](https://github.com/azerothcore/azerothcore-wotlk/pull/1383)

![image](https://user-images.githubusercontent.com/75517/52176395-9ccf3d00-27b2-11e9-9600-64206e7b33bc.png)

- Now you need to run the following commands by replacing "XXXX" with the ID of the PR that you want to test:

```git checkout -b pr-XXXX```

```git pull origin pull/XXXX/head```

The commands above will create a new local branch called `pr-XXXX` which will contain all the changes that need to be tested.

The terminal might prompt an editor (usually `nano`) that asks to save the merge commit message. Just save the changes and exit the editor. If the editor is `nano`, you can do it by simply using `CTRL+O` and `ENTER` to save then `CTRL+X` to exit.

## Update your local server to apply the changes

Now you simply need to update your local server with the new changes. The procedure is analogue to a normal server update.

Basically you need to **recompile your sources** and **update the DB**.

### Using traditional setup

If you are using the traditional setup, you have to recompile following the steps of the [3) Compiling](Installation#3-compiling) from the main setup guide.

You also need to update your DB. You can use the DB assembler to do that, but usually it's quicker to just manually importing the pending sql file(s) that the PR includes. Such file(s) are located under `data/sql/updates/pending_db_*`.

**Tip**: typically a PR consists of one new world update file located under `data/sql/updates/pending_db_world`. You can check which files have been added to spot any added sql files going to the "Files changed" tab of the PR page:

![File Changes](https://user-images.githubusercontent.com/75517/52176720-ea4da900-27b6-11e9-8459-d58adf7fd50c.png)

Then start the server just the way you always do.

### Using Docker setup

If you are using the Docker setup, you can simply trigger the recompilation by running:

```./bin/acore-docker-build```

then to launch the server you have to destroy and recreate the containers using `docker-compose down` and `docker-compose up`.

**Note**: this will also automatically update your DB.

-----

To make sure you are correctly running your server with the PR, check the date and branch name in the output of the `server info` command. They should match with the PR.

Now log in game and do your tests!

## What needs to be tested?

Instructions about what needs to be tested in the scope of a PR should be provided by the PR's author in the PR description. If that is not the case, feel free to leave a comment in the PR description asking for testing istructions.

For advanced users: you can also have a look at what has actually been changed in the PR and decide yourself what to test. Sometimes it's good to have a different point of view! Just make sure you describe what you have tested in your report.

## Reporting your test results

It is important to report your test results by leaving a comment **in the PR page**.

You should write:

- what you have tested
- do the things that you've tested work as intented?
- sometimes you may also want to specify how things worked **before** and **after** the PR
- please insert as many details as possible
- you can also insert screenshot or videos

## Examples of good testing reports

![image](https://user-images.githubusercontent.com/75517/52176856-1702c000-27b9-11e9-9030-48fe01669247.png)

![image](https://user-images.githubusercontent.com/75517/52176862-3bf73300-27b9-11e9-8852-51624d882ccd.png)

![image](https://user-images.githubusercontent.com/75517/52176828-980d8780-27b8-11e9-9fcc-071d64176022.png)

![image](https://user-images.githubusercontent.com/75517/52176837-becbbe00-27b8-11e9-9b42-94a9521b6647.png)

![image](https://user-images.githubusercontent.com/75517/52176842-cee39d80-27b8-11e9-97e6-25f272a346bd.png)

![image](https://user-images.githubusercontent.com/75517/52176846-ea4ea880-27b8-11e9-9497-919cec1e22ff.png)

![image](https://user-images.githubusercontent.com/75517/52176849-02262c80-27b9-11e9-927f-687dcc43cb26.png)

![image](https://user-images.githubusercontent.com/75517/52176867-44e80480-27b9-11e9-9f43-070e4edcb77d.png)

