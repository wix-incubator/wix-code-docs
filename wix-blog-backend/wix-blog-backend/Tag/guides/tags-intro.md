---
title: Introduction
---

# Introduction

The Tags API provides functionality for querying tags. Tags get assigned to blog posts. They are subsets of categories for organizing blog posts. 

The Tags API allows a site visitor to query and list tags giving them the ability to filter through blog posts. Tags also give site visitors an idea of what a post is about. 
You can assign up to 30 tags per post, and each tag is limited to 50 characters.

To use the Tags API, import `tag` from the `wix-blog-backend` module:

```javascript
import { tag } from 'wix-blog-backend';
```