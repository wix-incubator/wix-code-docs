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


With the Files API you can:
* Manage files in the Media Manager.
* Generate temporary URLS for:
  * Streaming video files from the Media Manager.
  * Downloading files from the Media Manager.


Learn more [about the Media Manager](https://support.wix.com/en/article/wix-media-about-the-media-manager) and how to access it. 

<!-- 
> **Note:**
> This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise. -->

## Before You Begin

To use the Files API, import `{ files }` from the `wix-media.v2` module:

```javascript
import { files } from 'wix-media.v2';
```

## Permissions information

The following functions in Files are restricted and only run if you elevate permissions
using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate)
function:

- [`bulkRestoreFilesFromTrashBin()`](wix-media-v2/files/bulkrestorefilesfromtrashbin)
- [`listDeletedFiles()`](wix-media-v2/files/listdeletedfiles)


<blockquote class='warning'>
<p>
<strong>Warning:</strong>
Elevating a function allows it to be called by any site visitor.
Exercise caution to prevent security vulnerabilities.
</p>
</blockquote>