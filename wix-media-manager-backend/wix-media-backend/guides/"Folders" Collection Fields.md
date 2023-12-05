<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->



# "Folders" Collection Fields







When you add a file from your Media Manager to your site, the 'Folders' collection is automatically added to your site.

To use the Folders collection in code, refer to it as `"Media/Folders"`.

```javascript
wixData.query("Media/Folders")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

> Note:
> When using this collection, you can't set up the site to [link to the next or previous dynamic page](https://support.wix.com/en/article/linking-to-a-dynamic-page#linking-to-the-next-or-previous-dynamic-page).

This document describes the permissions and fields in your Folders collection. 

### Permissions 

The Folders collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Folders collection permissions.

### Fields 

> **Note:**
> This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard).

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default. 

#### ID (\_id) 

**Description**: Unique ID of the folder. Same as Folder ID. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq  
**Read-only**: Yes

#### Folder ID (folderId) 

**Description**: Unique Folder ID. Same as ID. This is the [Main field](https://support.wix.com/en/article/about-your-database-collection-fields#main-fields).  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq  
**Read-only**: Yes

#### Folder Name (folderName) 

**Description**: Unique name of the folder.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes

#### Parent Folder ID (parentFolderId) 

**Description**: The folder's parent folder ID.  
**Type**: String  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq  
**Read-only**: Yes

#### Created Date (\_createdDate) 

**Description**: Date and time the folder was created. This is a system field and is hidden by default.  
**Type**: Date  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Updated Date (\_updatedDate) 

**Description**: Date and time the folder was most recently updated (created or renamed). This is a system field and is hidden by default.  
**Type**: Date  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes