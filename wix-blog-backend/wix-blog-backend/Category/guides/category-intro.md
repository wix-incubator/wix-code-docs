---
title: Introduction
---

# Introduction

The Categories API allows a site visitor to get and query blog categories. 
Categories allow you to sort your blog posts into different topics. They give your 
readers a general idea of what your blog posts are about. 
A [Category Menu](https://support.wix.com/en/article/wix-blog-adding-and-customizing-a-category-menu) provides your blog with extra organization and structure.

Use the Categories API to search for the different topics your blog covers.  
There can be up to 100 categories per language for a blog, and up to 10 categories per post. 
Categories will appear in the Category Menu in the order they were created. 

To use the Categories API, import `categories` from the `wix-blog-backend` module:

```javascript
import {category} from 'wix-blog-backend';
```