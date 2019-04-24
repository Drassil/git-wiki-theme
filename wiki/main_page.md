---
redirect_from: "/"
---

# Welcome to git-wiki demo

This is both documentation and [demo](Demo.md) of git-wiki theme for jekyll.

it's a **modular and full featured wiki** powered by git, github & [gitlab](https://gitlab.com/drassil/git-wiki/)  pages and pull-requests!

It means: 

* Improvements in the **cooperative** aspect: forks, pull-requests and roles.
* You can **customize your wiki** as you want with style sheets and even changing the layout. (see customization section below) 
* **No databases!** Only static files that can be downloaded in a few seconds.
* **Blazing fast** and free thankfully to Github Pages and Jekyll Server Side Generation process!
* **Markdown and html** mixed together!
* **Multiple free search engines!** on a static site!
* **History, revision comparison** and everything you need from a wiki platform.
* You can **edit your pages** with the standard git editor, prose.io (integrated) or any kind of editor you prefer.
* Non-existent wiki page links are "[red](wiki/red.md)", you can **click on them to automatically create a new page**!
* [External links](http://www.google.it) get the right icon automatically
* **Component system with hooks** that allows you to totally customize your wiki UI. (see customization section below) 
* Some **nice internal themes** to change your entire wiki UI with 1 simple configuration (see customization section below)
* Integrated **Blogging** feature thanks to jekyll!
* You can download the entire wiki for **offline** usage and even navigate directly using a markdown reader

You can fork/copy the master branch now and start your wiki in just 1 minute*!

 *Github pages takes about 10 minutes to show up the first time you configure it

**Note:**
You can even include the [official github wiki](https://help.github.com/articles/about-github-wikis/) as a submodule and enable the option in our conf file to use github wiki pages in git-wiki system, but it's an experimental feature and it implies less advantages and greater disadvantages for now.

**GITLAB PORTING:** (https://gitlab.com/drassil/git-wiki/) 

## Who is using git-wiki

[List of git-wiki installations](examples.md)

[List of forked repository](https://github.com/Drassil/git-wiki/network/members)


### [share your wiki with us!](wiki/examples.md) and keep the "Power by Git-Wiki" footer link please. It will help both of us!


## Installation instructions

1. Fork or copy [this repository](https://github.com/drassil/git-wiki)

2. Use master branch of this repository to start instead of gh-pages that contains useless files for you! (you can delete that branch from your repository and re-create if you need)

3. **copy and rename** _config.yml.dist in _config.yml changing settings inside

4. **rename** wiki/main_page.md.dist in wiki/main_page.md

5. push your changes in your repository, then configure the github pages in your repository settings

6. Your wiki is ready!

### local development

If you need to work on git-wiki locally before publish, then clone your wiki repo and follow this instructions 
from official github article: <https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/>
Git wiki already contains the Gemfile for local installations.

You can also use our **docker files** to run git-wiki under **docker**, 
the easiest method is to run `docker-compose up` command in this folder

## Configuration and customization

Read documentation about [Customization HERE](customize.md)


## Current known limitations

* You can't use the wiki internal link format: [[example]]. Please, use gh-pages links instead: \[example\](example) . It's a known jekyll limitation: <https://jekyllrb.com/docs/templates/>


## Support & Collaboration

You can open a public issue on [github](https://github.com/Drassil/git-wiki/issues) , 
send a private <a href="mailto:staff-drassil@googlegroups.com">email</a>  or create a PR to improve it.

Thank you!

## Components used

- [jekyll-table-of-contents](https://github.com/ghiculescu/jekyll-table-of-contents)

- [jQuery](https://jquery.com/) for DOM manipulation


[MIT LICENSE](LICENSE)
