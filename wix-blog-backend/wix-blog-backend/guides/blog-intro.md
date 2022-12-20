---
title: Introduction
---

# Introduction

Wix Blog allows site owners and collaborators to create and manage blogs. Site owners and collaborators can create and manage posts, categories and tags on their blog site or in the dashboard. Site collaborators must be assigned a blog role. There are 3 types of blog roles: 
- **Blog Editors** can fully manage the blog, but not other areas of a site.
- **Blog Writers** can create and publish their own posts on a blog.
- **Guest Writers** can only create posts. Posts written by guest writers must be reviewed and published by a blog editor. 


The Wix Blog Backend API provides the functionality for getting and querying posts, categories, and tags from a blog.


## Before you begin

Before using any `wix-blog-backend` functions, make sure to [install Wix Blog](https://support.wix.com/en/article/wix-blog-adding-and-setting-up-your-blog) on your site. 


To use the wix-blog-backend API, import `wixBlogBackend` from the `wix-blog-backend` module. 

```javascript
import wixBlogBackend from 'wix-blog-backend';
```


## Terminology

- **Post**: A published article on a blog site. It is also referred to as a publication. A blog can have up to 100K posts. 
- **Category**: A grouping of similar and related posts. A post can be assigned to a maximum of 10 categories.
- **Tag**: A way to further sort and organize blog posts. Tags provide the ability to filter a blog's articles.


## Additional Information

With [Wix Multilangual](https://support.wix.com/en/article/wix-multilingual-an-overview), a blog can be translated into multiple languages. 
Learn more about [translating a blog](https://support.wix.com/en/article/wix-multilingual-translating-your-blog).


With [Wix Pricing Plans](https://support.wix.com/en/article/pricing-plans-an-overview), exclusive content can only be accessed by readers with a subscription. 
Learn more about [creating blog post subscriptions](https://support.wix.com/en/article/wix-blog-creating-blog-post-subscriptions).