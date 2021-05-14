# git-wiki

Git-wiki is a **modular and full featured wiki** powered by Git, [GitHub](https://pages.github.com/)/[Gitlab](https://about.gitlab.com/product/pages/) Pages and pull requests!

The git-wiki project is composed by 3 different repository:

- [git-wiki-theme](https://github.com/Drassil/git-wiki-theme): This is the repository of the theme that implements the wiki functionalities. You would have not fork it unless you need to send a Pull Request or create your wiki project from scratch.

- [git-wiki-skeleton](https://github.com/Drassil/git-wiki-skeleton): This is the repo that you should fork or use as a template. It uses the [jekyll remote theme](https://github.com/benbalter/jekyll-remote-theme) functionality that allows you to create your own wiki based on git-wiki-theme. By using the remote functionality you can automatically keep your wiki always updated with latest features from the **git-wiki-theme**, but you can also fully customize it. 

- [git-wiki](https://github.com/Drassil/git-wiki): This is the documentation repository and website of the **git-wiki-theme** project. You would have not fork it unless you want to contribute to the git-wiki project documentation.

## Getting started

The easier and faster way to use git-wiki is the "skeleton" method.

**You don't need to install anything locally!**

1. Simply fork/clone [skeleton repo](https://github.com/Drassil/git-wiki-skeleton) or click on the "Use this template" button to create your copy of the skeleton project.

2. Edit _config.yml and other pages as you need and then deploy it on GitHub/Gitlab Pages.

**Done**! Now wait that your page will be published and you're ready **_to wiki_**!

## Features 

* Improvements in the **cooperative** aspect: forks, pull requests and roles.
* You can **customize your wiki** as you want with stylesheets and even changing the layout (see customization section below).
* **No databases!** Only static files that can be downloaded in a few seconds.
* **Blazing fast** and free thankfully to GitHub/Gitlab Pages and Jekyll Server Side Generation process!
* **Markdown and HTML** mixed together!
* **Multiple free search engines!** on a static site!
* **History, revision comparison** and everything you need from a wiki platform.
* You can **edit your pages** with the standard git editor, prose.io (integrated) or any kind of editor you prefer.
* Non-existent wiki page links are "[red](red.md)", you can **click on them to automatically create a new page**!
* [External links](http://example.com) get the right icon automatically.
* **Component system with hooks** that allows you to completely customize your wiki UI (see customization section below).
* Some **nice internal themes** to change your entire wiki UI with 1 simple configuration (see customization section below).
* Integrated **Blogging** feature thanks to Jekyll!
* Automatically generated **TOC**!
* You can download the entire wiki for **offline** usage and even navigate directly using a Markdown reader!


You can use it with the Jekyll ["remote_theme"](https://github.com/benbalter/jekyll-remote-theme) feature or fork/copy the master branch and start your wiki in just 1 minute.



Instructions and full documentation: [http://drassil.github.io/git-wiki](http://drassil.github.io/git-wiki)


