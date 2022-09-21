---
title: Introduction
---

# Introduction


The Post API allows a site visitor to get and query blog posts.
A post is a published article written for a blog by a site owner or a site member. It
is also referred to as a publication. 

To use the Post API, import `post` from the `wix-blog-backend` module:

```javascript
import { post } from 'wix-blog-backend';
```

> **Note:** `translationId` will only be returned in the `post` object if the
[Multilingual](https://support.wix.com/en/article/wix-multilingual-an-overview) app is installed.
