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


The Wix Media API provides the functionality to manage media files and folders in a site's Media Manager.
Learn more about [Wix Media](https://support.wix.com/en/article/wix-media-about-the-media-manager).


<!-- > **Note:**
> This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise. -->


## Before you begin

To use the wix-media API, import `wixMedia` from the `wix-media.v2` module. 

```javascript
import wixMedia from 'wix-media.v2';
```

## Terminology

* **Generate File Download Url** vs. **Generate Files Download Url**
  The Generate Files Download Url generates a permanent URL for downloading a compressed file containing specific files in the Media Manager. However, the [Generate File Download Url](wix-media-v2/files/generatefiledownloadurl) generates one or more temporary URLs for downloading a specific file in the Media Manager. You can use the `expirationInMinutes` parameter to set the URL expiration time, making it more secure than the [Generate Files Download Url](wix-media-v2/files/generatefilesdownloadurl). Therefore, to download private files, use the Generate File Download Url for each private file that you want to generate a download Url for, instead of the Generate Files Download Url.

* **Generate File Resumable Upload Url** vs. **Generate File Upload Url**
  The [Generate File Upload Url](wix-media-v2/files/generatefileuploadurl) generates an upload URL to allow external clients to upload a file to the Media Manager. However, any interruption in the upload process stops the file upload. For files larger than 10MB, or when network connection is poor, use the [Generate File Resumable Upload Url](wix-media-v2/files/generatefileresumableuploadurl) instead. With the resumable upload URL, any interruption in the upload process pauses the file upload, and resumes the file upload process after the interruption. 

  **Using the generated upload and resumable upload URLs**
  When you get the `uploadUrl` response from Generate File Upload Url, learn how you can use it to [upload a file to the Media Manager](wix-media-v2/files/guides/upload-api). When you get the `uploadUrl` response from Generate File Resumable Upload Url, learn how you can use it to [resumably upload a file to the Media Manager](wix-media-v2/files/guides/resumable-upload-api). 


* **System folders:** Folders in the Media Manager's file system directory. 
  There are 3 types of system folders:
  * **Root Folders:** Main categories of folders in the Media Manager. 
    * `MEDIA_ROOT`: Contains all files and folders in the Media Manager's 'Site Files' tab in the UI.

      >**Note:** The `MEDIA_ROOT` system folder is different from the `media-root` folder of the Media Manager. The `MEDIA_ROOT` system folder contains all media in all levels of the 'Site Files' tab in the UI, while the `media-root` folder of the Media Manager only contains the media in the root level of the 'Site Files' tab in the UI.

    * `TRASH_ROOT`: Contains all files and folders in the Media Manager's 'Trash' tab in the UI.
    * `VISITOR_UPLOADS_ROOT`: Contains all files and folders created by site visitors or members.

      >**Note:** The `VISITOR_UPLOADS_ROOT` folder is located in the 'Site Files' tab in the UI. However, it is its own root folder and doesn't return when searching in the `MEDIA_ROOT` folder.

  * **Virtual Folders:** Special categories of folders in the Media Manager that are hidden from the UI and can't be deleted.
    * `MOBILE_UPLOADS`: Contains all media uploaded using mobile devices. 
    * `PURCHASED_ITEMS`: Contains all media imported using a purchase flow.


  * **Other Folders:** 
    * `VIDEO_MAKER`: Contains all videos created using Wix Video Maker. Located in the 'Site Files' tab in the UI.  

                                                                                                                                                                          
* **File Assets** Wix Media files are optimized for web use. When a file is imported or uploaded to the Media Manager, it is processed and may produce several variations of the file for use in different circumstances.    
  For example:   
    * A video file can have different resolutions and formats.
    * An audio file can have different formats and qualities.
    * Video or audio files can have a preview asset containing only a portion of the file.
  
  With the [Generate File Download Url](wix-media-v2/files/generatefiledownloadurl), you can use the `assetKeys` parameter to download different assets of a file.  

* **Media Types:** Supported media types include the following:
  * Image
  * Video
  * Audio
  * Document
  * Vector
  * Archive
  * Model 3D
  Learn more about [media file types and size limits](https://support.wix.com/en/article/wix-media-supported-media-file-types-and-file-sizes).