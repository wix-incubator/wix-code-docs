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

## Terminology

* **System folders:** Folders in the Media Manager's file system directory. 
  There are 3 types of system folders:
  * **Root Folders:** Main categories of folders in the Media Manager. 
    * `MEDIA_ROOT`: Contains all files and folders in the Media Manager's 'Site Files' tab in the Media Manager.

      >**Note:** The `MEDIA_ROOT` system folder is different from the `media-root` folder of the Media Manager.
      >The `MEDIA_ROOT` system folder contains all media in all levels of the **Site Files** tab in the Media Manager, while the `media-root` folder of the Media Manager contains only the media in the root level of the 'Site Files' tab in the Media Manager.

    * `TRASH_ROOT`: Contains all files and folders in the Media Manager's **Trash** tab in the Media Manager.
    * `VISITOR_UPLOADS_ROOT`: Contains all files and folders created by site visitors or members.

      >**Note:** The `VISITOR_UPLOADS_ROOT` folder is located in the 'Site Files' tab in the UI. However, it is its own root folder and doesn't return when searching in the `MEDIA_ROOT` folder.

  * **Virtual Folders:** Special categories of folders in the Media Manager that are hidden from the UI and can't be deleted.
    * `MOBILE_UPLOADS`: Contains all media uploaded using mobile devices. 
    * `PURCHASED_ITEMS`: Contains all media imported using a purchase flow.


  * **Other Folders:** 
    * `VIDEO_MAKER`: Contains all videos created using Wix Video Maker. Located in the 'Site Files' tab in the UI.                    