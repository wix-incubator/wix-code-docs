---
title: Introduction
---

# Introduction

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;


The Wix Forum v2 API provides the functionality for retrieving posts and categories from a forum.
Learn more [about Wix Forum](https://support.wix.com/en/article/wix-forum-about-wix-forum).

<!--
> **Note:**
> This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.
-->

## Before you begin

Before using any `wix-forum.v2` functions, make sure to [install Wix Forum](https://support.wix.com/en/article/wix-forum-adding-and-setting-up-your-forum) on your site. 


To use the wix-forum-v2 API, import `wixForum` from the `wix-forum.v2` module. 

```javascript
import wixForum from 'wix-forum.v2';
```

## Terminology

- **Post**
  A post written by a site collaborator.

- **Category**
  A logical group assigned to similar and related posts in the forum.  