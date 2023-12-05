<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->



# "Collections" Collection Fields







To use the Collections collection in code, refer to it as `"Stores/Collections"`.

```javascript
wixData.query("Stores/Collections")
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

-   **Read:** Anyone 
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Collections collection's permissions. 

### Fields 

> **Note:**
> This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard).

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### ID (\_id) 

**Description**: The collection ID that was created by the server. This is a system field and is hidden by default. This information also appears in the Products collection in a hidden field called "collections.id". You can copy the ID from here and then use it to query the Products collection by the collection ID.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Name (name) 

**Description**: The name of the collection.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes   
**Can be filtered**: Yes  
**Read-only**: Yes

#### Main Media (mainMedia) 

**Description**: Displays the main media item (image or video) for this collection as it appears in the Store Manager.  
**Type**: Image  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes