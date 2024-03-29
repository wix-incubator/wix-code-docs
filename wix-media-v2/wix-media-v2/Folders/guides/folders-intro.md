---
title: Introduction
---

# Introduction

<!-- &nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp; -->

<!-- > **Note:**
> This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise. -->

The Folders API allows you to manage the folders in your Media Manager. 

With the Folders API, you can:
- [Get](wix-media-v2/folders/getfolder), [list](wix-media-v2/folders/listfolders), and [search](wix-media-v2/folders/searchfolders) folders.
- [Create](wix-media-v2/folders/createfolder), [update](wix-media-v2/folders/updatefolder), and [delete](wix-media-v2/folders/bulkdeletefolders) folders. 
- [Restore](wix-media-v2/folders/bulkrestorefoldersfromtrashbin) folders from the trash bin.
- [Generate URLs](wix-media-v2/folders/generatefolderdownloadurl) for downloading folders from the Media Manager. 

Learn more about [Media Manager](https://support.wix.com/en/article/wix-media-about-the-media-manager) and how to access it. 

## Before You Begin

To use the Folders API, import `{ folders }` from the `wix-media.v2` module:

```javascript
import { folders } from 'wix-media.v2';
```              