---
title: Introduction
---

# Introduction


The Posts API allows a site visitor to get and query blog posts.
A post is a published article written for a blog by site collaborators. 
It is also referred to as a publication. The size limit of a single blog post is 400KB.

To use the Posts API, import `{ posts }` from the `wix-blog-backend` module:

```javascript
import { posts } from 'wix-blog-backend';
```

> **Note:** `translationId` will only be returned in the `post` object if the
[Multilingual](https://support.wix.com/en/article/wix-multilingual-an-overview) app is installed.
