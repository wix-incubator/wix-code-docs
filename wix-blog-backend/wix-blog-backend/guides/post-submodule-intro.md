---
title: Introduction
---
# Introduction 

The Post API provides funtionality for querying blog posts.
 
A post is a published article written for a blog by a site owner or a site member. It
is also referred to as a publication. The Post API allows a site visitor to 
query and list the posts of a blog. 
 
To use the Post API, import `post` from the `wix-blog-backend` module:
```javascript
import { post } from 'wix-blog-backend';
```

> **Note:** `translationId` will only be returned in the `post` object if the
[Multilingual](https://support.wix.com/en/article/wix-multilingual-an-overview) app is installed.
