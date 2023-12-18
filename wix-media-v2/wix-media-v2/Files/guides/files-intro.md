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

<!-- 
> **Note:**
> This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise. -->

The Files API allows you to manage files and generate file urls from your Media Manager. 

With the Files API, you can:
- [Get](/wix-media-v2/files/getfiledescriptor), [list](/wix-media-v2/files/listfiles), and [search](/wix-media-v2/files/searchfiles) files.
- [Import](/wix-media-v2/files/importfile), [update](/wix-media-v2/files/updatefiledescriptor), and [delete](/wix-media-v2/files/bulkdeletefiles) files.
- [Restore](/wix-media-v2/files/bulkrestorefilesfromtrashbin) files from the trash bin.
- Generate URLs for:
  - [Downloading files](/wix-media-v2/files/generatefiledownloadurl).
  - [Downloading a compressed file](/wix-media-v2/files/generatefilesdownloadurl).
  - [Uploading files](/wix-media-v2/files/generatefileuploadurl).
  - [Uploading files larger than 10MB](/wix-media-v2/files/generatefileresumableuploadurl).
  - [Streaming video files](/wix-media-v2/files/generatevideostreamingurl).


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

## Terminology

* **Generate File Download Url** vs. **Generate Files Download Url**
  The Generate Files Download Url generates a permanent URL for downloading a compressed file containing specific files in the Media Manager. However, the [Generate File Download Url](wix-media-v2/files/generatefiledownloadurl) generates one or more temporary URLs for downloading a specific file in the Media Manager. You can use the `expirationInMinutes` parameter to set the URL expiration time, making it more secure than the [Generate Files Download Url](wix-media-v2/files/generatefilesdownloadurl). Therefore, to download private files, use the Generate File Download Url for each private file that you want to generate a download Url for, instead of the Generate Files Download Url.

* **Generate File Resumable Upload Url** vs. **Generate File Upload Url**
  The [Generate File Upload Url](wix-media-v2/files/generatefileuploadurl) generates an upload URL to allow external clients to upload a file to the Media Manager. However, any interruption in the upload process stops the file upload. For files larger than 10MB, or when network connection is poor, use the [Generate File Resumable Upload Url](wix-media-v2/files/generatefileresumableuploadurl) instead. With the resumable upload URL, any interruption in the upload process pauses the file upload, and resumes the file upload process after the interruption. 

  **Using the generated upload and resumable upload URLs**
  When you get the `uploadUrl` response from Generate File Upload Url, learn how you can use it to [upload a file to the Media Manager](wix-media-v2/files/upload-api). When you get the `uploadUrl` response from Generate File Resumable Upload Url, learn how you can use it to [resumably upload a file to the Media Manager](wix-media-v2/files/resumable-upload-api). 

                                                                                                                                                                
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