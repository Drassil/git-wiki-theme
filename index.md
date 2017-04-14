# Welcome to git-wiki demo

This is a [demo](wiki/Demo.md) of git-wiki theme for jekyll

it's a full featured wiki that powered by git, github pages and pull-requests!

It means: 

* Better collaboration possibilities (than github wiki ) thanks to forks, pull-requests and roles.
* You can customize your wiki as you want with stylesheets and even change the layout
* No database! just static files that can be downloaded in few seconds
* Markdown and html mixed together!
* History, commits, and everything you need from a wiki platform
* You can edit pages with standard git editor, prose.io (integrated) or any kind of editor you prefere.

You can fork/copy the master branch now and start your wiki in just 1 minute.

Then please, [share your wiki with us!](wiki/Showreel.md)

**Note:**
You can even include the github wiki as a submodule and enable the conf, but it's an experimental feature and has few advantages but various drawbacks.

## Installation instructions

1. Fork or copy [this repository](https://github.com/drassil/git-wiki)

2. copy and rename _config.yml.dist in _config.yml changing settings inside

3. create your index.md in root directory

4. push your changes in your repo, configure the github pages in your repo settings

5. Your wiki is ready!

**Note:**

Is suggested the creation of a /wiki/ subfolder that will collects all your .md pages (except index.md)

## Current known limitations

* Unexistant wiki page links are not "red".

* You can't use the wiki link format: [[example]] , but you should use gh-pages links instead: \[example\](example) 

## Looking for collaboration

Do you like this project? then contact us via [chat](https://gitter.im/Drassil/general?utm_source=share-link&utm_medium=link&utm_campaign=share-link) <a href="mailto:staff-drassil@googlegroups.com">email</a>  or send us a PR to improve it.

Thank you!

[LICENSE](LICENSE.md)
