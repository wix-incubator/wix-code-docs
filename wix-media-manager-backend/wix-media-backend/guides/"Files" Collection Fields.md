

# "Files" Collection Fields







When you add a file from your Media Manager to your site, the 'Files' collection is automatically added to your site.

To use the Files collection in code, refer to it as `"Media/Files"`.

```javascript
wixData.query("Media/Files")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

> Note:
> When using this collection, you can't set up the site to [link to the next or previous dynamic page](https://support.wix.com/en/article/linking-to-a-dynamic-page#linking-to-the-next-or-previous-dynamic-page).

This document describes the permissions and fields in your Files collection. 

### Permissions 

The Files collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Files collection permissions.

### Fields 

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default. 

#### ID (\_id) 

**Description**: Unique File ID. This is a system field and is hidden by default. This is the [Main field](https://support.wix.com/en/article/about-your-database-collection-fields#main-fields).  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq  
**Read-only**: Yes

#### Media Type (mediaType) 

**Description**: The file's media type, such as image and document.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq  
**Read-only**: Yes

#### Is Private (isPrivate) 

**Description**: The file's privacy setting.  
**Type**: Boolean  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq  
**Read-only**: Yes

#### Size in Bytes (sizeInBytes) 

**Description**: The file's size in bytes.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Mime Type (mimeType) 

**Description**: The file's mime type such as 'image/png', or 'audio/webm'.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### File URL (fileUrl) 

**Description**: The file's Wix media URL.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

Example URL: `wix:image://v1/8b7eef_3deb121802514be7b698d0447559f9da~mv2.png/avatar-ga890ac591_1280.png#originWidth=1280&originHeight=1280`

#### Original File Name (originalFileName) 

**Description**: The file's original file name.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Hash (hash) 

**Description**: The file's checksum/hash.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Labels (labels) 

**Description**: The file's labels assigned to the file by the Media Manager.  
**Type**: Array of Strings  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Parent Folder ID (parentFolderId) 

**Description**: The file's parent folder ID.  
**Type**: String  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq  
**Read-only**: Yes

#### Parent Folder (parentFolder) 

**Description**: Reference to the file's parent folder item, as listed in the Folders collection.  
**Type**: Reference  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Icon URL (iconUrl) 

**Description**: The file icon's URL.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Icon Image (iconImage) 

**Description**: The file's icon as an image.  
**Type**: Image  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Source URL (sourceUrl) 

**Description**: The file's source URL, such as an external link where the file was imported from.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Width (width) 

**Description**: The file's width in pixels.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Height (height) 

**Description**: The file's height in pixels.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Op Status (opStatus) 

**Description**: Status of the file being uploaded, for example, 'READY' or 'IN-QUEUE'.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Created Date (\_createdDate) 

**Description**: Date and time the file was created. This is a system field and is hidden by default.  
**Type**: Date  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Updated Date (\_updatedDate) 

**Description**: Date and time the file was most recently updated (created or renamed). This is a system field and is hidden by default.  
**Type**: Date  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes