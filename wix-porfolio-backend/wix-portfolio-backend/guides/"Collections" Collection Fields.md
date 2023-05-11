<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->



# "Projects" Collection Fields







To use the Collections collection in code, refer to it as `"Porfolio/Collections"`.

```javascript
wixData.query("Portfoilio/Collections")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your Collections collection.

> **Important:**
> -   You can query up to 100 items from the Collections collection. Trying to query more than 100 items by raising the wix-data [limit](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#limit) will result in an error.

### Permissions 

The Collections collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Admin 
-   **Create:** Admin
-   **Update:** Admin
-   **Delete:** Admin

You cannot change the Collections collection's permissions. 

### Fields 

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### ID (\_id) 

**Description**: The collection ID that was created by the server. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, startsWith  
**Read-only**: Yes  
**Required**: No  

#### Revision (revision) 

**Description**: The current state of an item in the collection. The revision's state changes every time an item is modified.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  
**Required**: No

#### Title (title) 

**Description**: The title of the collection.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, startsWith  
**Read-write**: Yes  
**Required**: No  

#### Description (description) 

**Description**: The description of the collection.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome  
**Read-write**: Yes  
**Required**: No  

#### Slug (slug) 

**Description**: The collection's slug. The slug is the URL-friendly name that is unique across the portfolio.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, startsWith  
**Read-write**: Yes  
**Required**: No  

#### Cover Image (coverImage) 

**Description**: A JSON object that represents the cover image of the collection.  
**Type**: Object  
**Can connect to data**: Yes by the cover image's focal points  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-write**: Yes  
**Required**: No  

```json
{
  "imageInfo": "wix:image://v1/8b7eef_3deb121802514be7b698d0447559f9da~mv2.png/avatar-ga890ac591_1280.png#originWidth=1280&originHeight=1280",
  "focalPoint": {
    "x": "number",
    "y": "number"
  }
}
```

#### Hidden (hidden) 

**Description**: Whether the collection is hidden.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome  
**Read-write**: Yes  
**Required**: No  

#### Sort Order (sortOrder) 

**Description**: The collection sort order.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, lt, le, gt, ge  
**Read-write**: Yes  
**Required**: No  

#### Created Date (\_createdDate) 

**Description**: The date the collection was created. This is a system field and is hidden by default.  
**Type**: Date  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, lt, gt  
**Read-only**: Yes  
**Required**: No  

#### Updated Date (\_updatedDate) 

**Description**: The date the collection was last updated. This is a system field and is hidden by default.  
**Type**: Date  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, lt, gt  
**Read-only**: Yes  
**Required**: No

#### Url (url) 

**Description**: The url of the collection page.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  
**Required**: No  


#### Seo Data (seoData) 

**Description**: A JSON object that represents Seo data of the collection.  
**Type**: Object  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-write**: Yes  
**Required**: No  

```json
{
  "settings": {
    "preventAutoRedirect": "true"
  },
  "tags": {
    [
      "children": "",
      "custom": "", 
      "disabled":"",
      "meta": {},
      "props": {},
      "type":""
    ]
  }
}
```
