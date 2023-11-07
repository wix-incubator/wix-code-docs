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


The Files API allows you to manage files and generate file urls from your Media Manager. 

With the Files API, you can:
- [Get](https://www.wix.com/velo/reference/wix-media-v2/files/getfiledescriptor), [list](https://www.wix.com/velo/reference/wix-media-v2/files/listfiles), and [search](media/files/searchfiles) files.
- [Import](mhttps://www.wix.com/velo/reference/wix-media-v2/files/importfile), [update](https://www.wix.com/velo/reference/wix-media-v2/files/updatefiledescriptor), and [delete](https://www.wix.com/velo/reference/wix-media-v2/files/bulkdeletefiles) files.
- [Restore](https://www.wix.com/velo/reference/wix-media-v2/files/bulkrestorefilesfromtrashbin) files from the trash bin.
- Generate URLs for:
  - [Downloading files](https://www.wix.com/velo/reference/wix-media-v2/files/generatefiledownloadurl).
  - [Downloading a compressed file](https://www.wix.com/velo/reference/wix-media-v2/files/generatefilesdownloadurl).
  - [Uploading files](https://www.wix.com/velo/reference/wix-media-v2/files/generatefileuploadurl).
  - [Uploading files larger than 10MB](https://www.wix.com/velo/reference/wix-media-v2/files/generatefileresumableuploadurl).
  - [Streaming video files](https://www.wix.com/velo/reference/wix-media-v2/files/generatevideostreamingurl).


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
