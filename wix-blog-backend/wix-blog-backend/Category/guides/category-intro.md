---
title: Introduction
---

# Introduction

The Category API provides the functionality for creating, deleting, updating, and 
querying blog categories. 

Categories allow you to sort your blog posts into different topics. They give your 
readers a general idea of what your blog posts are about. 
You can add a **Category Menu** element to your blog using the **Add** icon in your **Editor**.
A Category Menu can provide your blog with extra organization and structure.

Use the Category API to create categories for different topics your blog covers. 
You can create up to 100 categories in a blog, and you can assign up to 10 categories per post. 

Unless specified otherwise, your categories appear in the Category Menu in the order that you create them. 
However, you can update the order at any time. You can delete categories you no longer want in your blog. 
Deleting a category will not delete the post it was assigned to. 

To use the Category API, import `category` from the `wix-blog-backend` module:

```javascript
import {category} from 'wix-blog-backend';
```