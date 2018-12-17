---
published: true
---

# Blog Refactoring v2.1.0

Version 2.1.0 of git-wiki includes with following features:

* Complete Blog solution
* New search engine based on javascript
* Buttons to add new Wiki page and post
* Configurable Page and post list in sidebar
* other minor fixes

Configurations added (modify your _config.yml):

```
# (boolean) Enable/disable wiki page list in sidebar
show_wiki_pages: true
# (integer) Maximum number of wiki page to shown in sidebar
show_wiki_pages_limit: 10
# (boolean) Enable/disable blog feature
blog_feature: true
# (boolean) Enable/disable wiki posts list in sidebar (needs blog_feature enabled)
show_wiki_posts: true
# (integer) Maximum number of wiki posts to shown in sidebar
show_wiki_posts_limit: 10
# from jekyll (read jekyll doc)
paginate: 5
paginate_path: "/blog/page:num"
# Select search_engine component from:
# - js: it uses a built in javascript component that uses generated sitemap_full.xml to search inside your wiki
# - github : it uses internal github repository search
# - google : it uses cse search bar, you need to configure google_cse_token
#
search_engine : "js"

defaults:
 -
    scope:
      path: ""
      type: "posts"
    values:
      layout: "git-wiki-post"
      
plugins:
 - jekyll-feed
 - jekyll-redirect-from
 - jekyll-seo-tag
 - jekyll-sitemap
 - jekyll-avatar
 - jemoji
 - jekyll-mentions
 - jekyll-include-cache
 
inc_before_page_list :
inc_after_page_list :
inc_before_post_list :
inc_after_post_list :
```
