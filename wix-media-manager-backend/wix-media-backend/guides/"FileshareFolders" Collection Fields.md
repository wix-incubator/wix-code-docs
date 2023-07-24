<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->



# "FileshareFolders" Collection Fields







When you add the [Wix File Share application](https://support.wix.com/en/article/about-the-file-share-app) to your site, the FileshareFolders collection is automatically added to your site.

To use the FileshareFolders collection in code, refer to it as `"Media/FileshareFolders"`.

```javascript
wixData.query("Media/FileshareFolders")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your FileshareFolders collection. 

### Permissions 

The FileshareFolders collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the FileshareFolders collection permissions.

### Fields 

> **Note:**
> This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard).

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default. 

#### Name (name) 

**Description**: Name of folder. This is the [Main field](https://support.wix.com/en/article/about-your-database-collection-fields#main-fields).  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte, hasSome, hasAll, contains, startsWith, endsWith  
**Read-only**: Yes

#### Owner (\_owner) 

**Description**: Unique identifier of the user who created the folder. Can be a site owner, [contributor](https://support.wix.com/en/article/about-roles-permissions-contributors), or member. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, hasAll, contains  
**Read-only**: Yes

#### Date Created (\_createdDate) 

**Description**: The date and time the folder was created. This is a system field and is hidden by default.  
**Type**: Date  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte, hasSome, hasAll, contains, startsWith, endsWith  
**Read-only**: Yes

#### Parent Folder (parentFolder) 

**Description**: Reference to the folder's parent folder, as listed in this collection.  
**Type**: Reference  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Path (path) 

**Description**: Array of objects representing the full path from root to folder.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

```json
[
  {
    "id": "f3788ddf-8615-4ea9-8baf-db57252f89d7", 
    "name": "/"
  }, 
  {
    "id": "7b1a6e48-56fd-4e33-ba2e-39fe1227190f",
    "name": "pictures"
  }
]
```

#### Favorite Count (favoriteCount) 

**Description**: The number of times the folder was marked as a favorite. Both site members and visitors can mark a folder as a favorite.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte, hasSome, hasAll, contains, startsWith, endsWith  
**Read-only**: Yes

#### Favorite (favorite) 

**Description**: Indicates whether the folder was marked as a favorite by the current visitor.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### View Count (viewCount) 

**Description**: The number of times unique visitors viewed (drilled down to) the folder. Note that multiple views by the same visitor and downloading the folder do not increment the view count.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte, hasSome, hasAll, contains, startsWith, endsWith  
**Read-only**: Yes

#### Viewed (viewed) 

**Description**: Indicates whether the current visitor viewed (drilled down to) the folder.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Children Count (childrenCount) 

**Description**: The number of files and folders directly inside this folder. Note that subfolder children are not included in the count.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte, hasSome, hasAll, contains, startsWith, endsWith  
**Read-only**: Yes

#### Last Modified (lastModified) 

**Description**: Date and time the folder was most recently changed (created or renamed). Note that subfolder activity does not affect this field.  
**Type**: Date  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte, hasSome, hasAll, contains, startsWith, endsWith  
**Read-only**: Yes

#### \_id (\_id) 

**Description**: Folder ID. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome, hasAll, contains  
**Read-only**: Yes