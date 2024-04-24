# Introduction

The Draft Posts API gives site members the ability to access and manage draft blog posts. A draft post is an article written by a site owner, blog editor, blog writer, or a guest writer that is not yet published.    

A blog can have up to 100K draft posts. The size limit of a single draft blog post is 400KB.

## Before you begin

It’s important to note the following points before starting to code:

- Install the **Wix Blog** app from [Wix App Market](https://www.wix.com/app-market/wix-blog).
- `translationId` will only be returned in the `draftPost` object if the [Multilingual](https://support.wix.com/en/article/wix-multilingual-an-overview) app is installed.
- To use the Draft Posts API, import `{ draftPosts }` from the `wix-blog-backend` module:

```javascript
import { draftPosts } from 'wix-blog-backend';
```