# Welcome to git-wiki demo

This is a [demo](wiki/Demo.md) of git-wiki theme for jekyll.

it's a full featured wiki powered by git, github pages and pull-requests!

It means: 

* Improvements in the cooperative aspect: forks, pull-requests and roles.
* You can customize your wiki as you want with style sheets and even changing the layout.
* No databases! Only static files that can be downloaded in a few seconds.
* Markdown and html mixed together!
* History, revision comparison and everything you need from a wiki platform.
* You can edit your pages with the standard git editor, prose.io (integrated) or any kind of editor you prefer.
* Non-existent wiki page links are "[red](wiki/red.md)"

You can fork/copy the master branch now and start your wiki in just 1 minute.

**Note:**
You can even include the github wiki as a submodule and enable the conf, but it's an experimental feature and it implies less advantages and greater disadvantages for now.

## Who is using git-wiki

[List of git-wiki installations](wiki/examples.md)

[List of forked repository](https://github.com/Drassil/git-wiki/network/members)


### [share your wiki with us!](wiki/examples.md) and keep the "Power by Git-Wiki" footer link please. It will help both of us!


## Installation instructions

1. Fork or copy [this repository](https://github.com/drassil/git-wiki)

2. copy and rename _config.yml.dist in _config.yml changing settings inside

3. create your index.md in root directory

4. push your changes in your repository, then configure the github pages in your repository settings

5. Your wiki is ready!

**Note:**

We suggest the creation of a /wiki/ subfolder that collects all your .md pages (except index.md)

## Current known limitations

* You can't use the wiki internal link format: [[example]]. Please, use gh-pages links instead: \[example\](example) . It's a known jekyll limitation: <https://jekyllrb.com/docs/templates/>

## Customization

You can create following files in _includes folder to costumize git-wiki without patching original code:

* head.html  -> this file will be included in <head> tag allowing you to add **css/js** and any kind of head tags
* sidebar.html -> this file will be included in left sidebar allowing you to create your widgets
* comments.html -> this is mostly used to integrate social comments under page contents
* footer.html -> this file will be included in left side of the footer.

## Looking for collaboration

Do you like this project? then, contact us via [chat](https://gitter.im/Drassil/general?utm_source=share-link&utm_medium=link&utm_campaign=share-link) , <a href="mailto:staff-drassil@googlegroups.com">email</a>  or send us a PR to improve it.

Thank you!

## Components used

- [jekyll-table-of-contents](https://github.com/ghiculescu/jekyll-table-of-contents)

- [jQuery](https://jquery.com/)


[MIT LICENSE](LICENSE)
