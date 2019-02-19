# Customize git-wiki


From version 2.x Git-Wiki uses a **modular** architecture based on **components** and **"including hooks".**
This will allow you to **totally costumize** your wiki **adding new code** and/or **create your layout from scratch reusing every single piece** of git-wiki.

There are various methods to costumize and extends git-wiki, starting from the easiest one we will list them here:

## Configuration changes

First thing to do during git-wiki installation is copy and rename _config.yml.dist in _config.yml and changing its values.

If you like our theme as is you just need to set following configurations:

```
title
description
logo_url
```

It will allow you to define your brand.
Of course there are also other internal configurations to enable/disable features (you can see the complete list at bottom of this page)

## Internal themes

by default git-wiki includes some internal layout that you can set in your _config.yml to change your UI:

* [default theme](theme-default) (w3css)
* [lux theme](theme-lux) (bootstrap)
* [united theme](theme-united) (bootstrap)
* [github theme](theme-github) (bootstrap)

## Including hooks

If you need to extend git-wiki adding or replacing css rules, adding scripts or html elements you
can use the "including hooks" feature. It allows you to dynamically include a custom html code using the jekyll partials.
**NOTE**: Your file must be added inside the _include folder

### Style changes (head)

If you need a simple style change the easiest way to do it is including a custom css file that is able to add/overwrite default css rules.
  
To do it you can add in your _config.yml the following configuration:

```
inc_after_styles : "path/to/your/style.html" 
```
  
then in your _include folder you must add file defined above. It must be an html with
the <link> elements inside.
  
For example: <link rel="stylesheet" href="{{ 'assets/css/mystyle.css' | relative_url }}">
  
**NOTE**: as you can see we're using relative_url jekyll function allowing us to include the css file of our assets folder.


  
### Add your components
  
With the same method used to include styles file you are able to use our "including hooks" to add your code everywhere you want.

You can find the list of all hooks at the bottom of this page


#### Sidebar
  
If you need to add content inside sidebar of our default layout you can use following hook:

`inc_after_header: "my_sidebar_file.html"`

#### Comments
  
If you need to add a comment component (for example disqus) you can use following hook:
  
`inc_after_content: "my_comments_file.html"`


## Layout refactoring

Before working with layout refactoring you should learn:

* how to work with Jekyll: [https://jekyllrb.com/docs/](https://jekyllrb.com/docs/)
* which are the components of git-wiki, you can find them here: https://github.com/Drassil/git-wiki/tree/master/_includes
* Take a look at git-wiki default layouts to understand how to build your: https://github.com/Drassil/git-wiki/tree/master/_layouts

If you need to totally change the layout of your wiki you can create a custom file in _layout folder and reuse only components that you need in the place that you want.
  
You've just to change following config:

```
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
  
replacing **layout: "git-wiki-default"** with name of your custom layout.

## Configuration keys:
  
Read _config.yml.dist file of your git-wiki installation for detailed list of configuration values (commented)
