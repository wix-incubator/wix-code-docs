<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->



# "FullData" Collection Fields









To use the FullData collection in code, refer to it as `"Members/FullData"`.

```javascript
wixData.query("Members/FullData")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your FullData collection.

<!-- > - This collection has some read-write fields. This means you can use the [Wix Data](/wix-data) and [Wix Dataset](/wix-dataset) APIs to manage these fields. 
> - For read-only fields,  -->
> **Note:**
> You manage your Members in the [Site Members](https://support.wix.com/en/article/viewing-your-member-list) section of your dashboard.

> **Important:**
>  You can query up to 100 items from the Collections collection. Trying to query more than 100 items by raising the wix-data [limit](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#limit) will result in an error.
    
### Permissions 

The FullData collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the FullData collection permissions.

### Fields 

> **Note:**
> This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard).

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default. 


#### ID (\_id) 

**Description**: The member ID that was created by the server. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: No  
**Can be filtered**: eq, hasSome  
**Read-only**: Yes  


#### Login Email (loginEmail) 

**Description**: Email used by the member to log into the site.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: hasSome, eq  
**Read-only**: Yes  

#### First Name (firstName) 

**Description**: Member's first name.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: hasSome, eq  
**Read-only**: Yes  

#### Last Name (lastName) 

**Description**: Member's last name.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: hasSome, eq  
**Read-only**: Yes  

#### Phone (phone) 

**Description**:  Member's phone number.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No    
**Read-only**: Yes  

#### Email (email) 

**Description**: Member's email address.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  

#### Nickname (nickname) 

**Description**: The name that is displayed on the member's profile page, forum and or blog.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: hasSome, eq  
**Read-only**: Yes  

#### Slug (slug) 

**Description**: The member's URL-friendly name that is unique across your site. Typically this is made up of the member's email prefix.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq     
**Read-only**: Yes  

#### Profile Photo (profilePhoto) 

**Description**: Displays the member's profile photo, if they uplodaded one.  
**Type**: Image  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No    
**Read-only**: Yes  

```json
{
  "url": "wix:image://v1/8b7eef_3deb121802514be7b698d0447559f9da~mv2.png/avatar-ga890ac591_1280.png",
  "height": 400,
  "width": 450,
  "offsetX": 0,
  "offsetY": 0,
}
```

#### Cover Photo (coverPhoto) 

**Description**: Displays the member's cover photo on their profile page.  
**Type**: Image  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  

#### Satus (status) 

**Description**: Member site access status.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  
**Note**: Field value is one of: 
-   "PENDING" - Member created and waiting for approval by site owner.
-   "APPROVED" - Member approved and able to log in.
-   "OFFLINE" - Member is a guest author of the site and cannot log in.
-   "BLOCKED" - Member is blocked and cannot log into the site.
-   "UNKNOWN" - Insufficient permissions to get the status. 

#### Privacy Status (privacyStatus) 

**Description**: Member's privacy status.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  
**Note**: Field value is one of: 
-   "PUBLIC" - The member profile is visible to everyone.
-   "PRIVATE" - The member profile is hidden from site visitors and members. The member is only returned to site contributors and apps with the appropriate permoissions.

####  Activity Status (activityStatus) 

**Description**: Member's activity status.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  
**Note**: Field value is one of: 
-   "ACTIVE" - The member can write forum posts and blog comments.
-   "MUTED" - The member cannot write forum posts or blog comments.


#### Last Login Date (lastLoginDate) 

**Description**: Displays the last date and time the member last logged into the site.  
**Type**: Date  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes  

#### Title (title) 

**Description**: Member's title.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  

#### Created Date (\_createdDate) 

**Description**: Displays the date and time the member registered to the site. This is a system field and is hidden by default.  
**Type**: Date  
**Can** **connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes  

#### Updated Date (\_updatedDate) 

**Description**: Displays the last date and time the member's details were updated. This is a system field and is hidden by default.  
**Type**: Date  
**Can** **connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  

#### About Plain Text (aboutPlain) 

**Description**: Displays the **About** information from the member's profile as plain text.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  

#### About Rich Text (aboutRich) 

**Description**: Displays the **About** information from the member's profile as rich text.  
**Type**: Rich Content (object)  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  