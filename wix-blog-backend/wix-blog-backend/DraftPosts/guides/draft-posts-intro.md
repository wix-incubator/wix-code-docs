---
title: Introduction
---

# Introduction

The Draft Posts API gives site members the ability to access and manage draft blog posts.
A draft post is an unpublished article written for a blog by site collaborators. 
A blog can have up to 100K draft posts. The size limit of a single draft blog post is 400KB.

To use the Draft Posts API, import `{ draftPosts }` from the `wix-blog-backend` module:

```javascript
import { draftPosts } from 'wix-blog-backend';
```

> **Note:** `translationId` will only be returned in the `post` object if the
[Multilingual](https://support.wix.com/en/article/wix-multilingual-an-overview) app is installed.