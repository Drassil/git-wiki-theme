# Changelogs

## 2.3.0

Changed #toc div, now it's called #git-wiki-toc. You've to change it too if you are using a totally custom theme.

New theme: github

Various fixes

## 2.2 - External Links

* Implemented external links icon (wikipedia style)

## 2.1.16 - Search with steroids

* Improved search engine with new async js data loading
* fixed page list

## 2.1.12 - Mobile Header
* Implemented collapsible responsive header

## 2.1.11 - Blog fixes

* various critical fixes to new blog system
* added "permalink" in config dist 

## 2.1.0 - Blog Refactoring

* Blog
* New search engine
* Button to add wiki page and post
* Page and post list in sidebar
* other minor fixes
* Improved SEO

See the list of changes here: [Article](../_posts/2018-12-17-blog-refactoring-v2.1.0.md)

## 2.0.3

* fixed bug on logo visualization
* fixed united and lux theme unwanted character

## 2.0.1 - Themed Wiki

* Created new themes from "united" and "lux" bootstrap styles
* minor fix to 404 page, fixed build warning

## 2.0.0 - Wiki Modules

* Splitted default layout in reusable partial files and modular architecture
* Created configurable including hooks to extend git-wiki theme
* Fixed some deprecation
* Crated Gemfile for local installations
* removed not used configurations
* compress css
* minor fixes


### How to upgrade from 1.0.5

you must upgrade your _config.xml changing following configurations:

```
# to add comments now you can include a file using inc_after_content configuration
# it's exactly the position where old comments.html file was placed i 1.0.5
comments : true -> inc_after_content : "path_of_comments_file.html"

# to add custom elements in <head> now you can use inc_after_head or inc_before_head to add
# your code
custom_head: true ->  inc_after_head : "path_of_head_file.html"

# custom sidebar can be added directly in <header> 
# via a custom file using inc_after_header
custom_sidebar: true -> inc_after_header : "path_of_sidebar_file.html" 

# if you need custom footer elements you can use inc_before_footer configuration now
custom_footer: true -> inc_before_footer : "path_of_footer_file.html"

# in new jekyll versions gems has been deprecated in favour of plugins
gems -> plugins
```

then you've to add following new configurations:

```
# change default layouts if you want to totally customize your wiki
defaults:
 -
    scope:
      path: "" # an empty string here means all files in the project
    values:
      layout: "git-wiki-default"
 -
    scope:
      path: ""
      type: "pages"
    values:
      layout: "git-wiki-default"
```

## 1.0.5 - ToC

* Improved ToC performances and fixed minor bugs

## 1.0.4 - Red

* Implemented red links for non-existing pages
* various style fixes

## 1.0.2

First public version of git-wiki with following features:

* Action buttons to edit page, see the history and search in wiki
* You can customize your wiki as you want with style sheets and even changing the layout.
* Improvements in the cooperative aspect: forks, pull-requests and roles.
* No databases! Only static files that can be downloaded in a few seconds.
* Markdown and html mixed together!
* History, revision comparison and everything you need from a wiki platform.
* You can edit your pages with the standard git editor, prose.io (integrated) or any kind of editor you prefer.



