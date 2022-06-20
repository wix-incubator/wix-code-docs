# Introduction 

The Post API provides funtionality for querying blog posts.
 
A post is a published article written by a site owner or member in a blog. It
is also referred to as a publication. The Post API allows a site visitor to 
query and list the posts in a blog. 
 
To use the Post API, import `post` from the `wix-blog-backend` module:
```javascript
import { post } from 'wix-blog-backend';
```

> **Note:** `translationId` will only be returned in the `post` object if the
[Multilingual](https://support.wix.com/en/article/wix-multilingual-an-overview) app is installed.
