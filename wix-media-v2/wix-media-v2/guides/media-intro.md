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


The Wix Media API provides the functionality to manage media files and folders in a site's Media Manager.
Learn more about [Wix Media](https://support.wix.com/en/article/wix-media-about-the-media-manager).

With the Wix Media API, you can:
- Manage folders and files in your Media Manager.
- Generate URLs for uploading files and downloading files and folders.

Learn more about the [Media Manager](https://support.wix.com/en/article/wix-media-about-the-media-manager) and how to access it. 

## Before you begin

To use the wix-media API, import `wixMedia` from the `wix-media.v2` module:

```javascript
import wixMedia from 'wix-media.v2';
```

## Use cases

- Update a file's display name.
- Bulk Delete Files.
- Bulk restore all non-permanently deleted images.

## Terminology
**System folders:** Folders in the Media Manager's file system directory. 
There are 3 types of system folders:
* **Root Folders:** Main categories of folders the Media Manager. 
  * `MEDIA_ROOT`: Contains all files and folders in the Media Manager's 'Site Files' tab in the UI.
  * `TRASH_ROOT`: Contains all files and folders in the Media Manager's 'Trash' tab in the UI.
  * `VISITOR_UPLOADS_ROOT`: Contains all files and folders created by site visitors or members.
 
  >**Notes:** 
  >- The `MEDIA_ROOT` system folder is different from the `media-root` folder of the Media Manager. The `MEDIA_ROOT` system folder contains all media in all levels of the 'Site Files' tab in the UI, while the `media-root` folder of the Media Manager contains only the media in the root level of the 'Site Files' tab in the UI. Similar relationships exist between `TRASH_ROOT` and `trash-root`, and `VISITOR_UPLOADS_ROOT` and `visitor-uploads`.
  >- The `VISITOR_UPLOADS_ROOT` folder is located in the 'Site Files' tab in the UI. However, it is its own root folder and isn't returned when searching in the `MEDIA_ROOT` folder.

* **Virtual Folders:** Special categories of folders in the Media Manager that are hidden from the UI and can't be deleted.
  * `MOBILE_UPLOADS`: Contains all media uploaded using mobile devices. 
  * `PURCHASED_ITEMS`: Contains all media imported using a purchase flow.

* **Other Folders:** 
  * `VIDEO_MAKER`: Contains all videos created using Wix Video Maker. Located in the 'Site Files' tab in the UI.  

