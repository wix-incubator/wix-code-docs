

# "PublicData" Collection Fields







To use the PublicData collection in code, refer to it as `"Members/PublicData"`.

```javascript
wixData.query("Members/PublicData")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your PublicData collection.

> **Note:**
> You manage your Members in the [Site Members](https://support.wix.com/en/article/viewing-your-member-list) section of your dashboard.

### Permissions 

The PublicData collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the PublicData collection permissions.

### Fields 

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default. 

#### \[Custom Fields\] 

Custom fields from your Contacts collection can be added in your site's dashboard. You can define custom fields however you like. These fields are optional. They are **not** automatically added. Custom fields from your site's Contacts can be [added to your site Members in your site's dashboard](https://support.wix.com/en/article/customizing-your-member-profile-fields).

#### ID (\_id) 

**Description**: The member ID that was created by the server. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome, contains, lt, gt  
**Read-only**: Yes

#### Created Date (\_createdDate) 

**Description**: Displays the date and time the member registered to the site.  
**Type**: Date and Time  
**Can** **connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes

#### Updated Date (\_updatedDate) 

**Description**: Displays the last date and time the member's details were updated.  
**Type**: Date and Time  
**Can** **connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Profile Photo (profilePhoto) 

**Description**: Displays the image the member uploaded to their profile, if any.  
**Type**: Image  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Cover Photo (coverPhoto) 

**Description**: Displays the cover / banner image the member uploaded to their profile, if any.  
**Type**: Image  
**Can connect to data**: Yes   
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Nickname (nickname) 

**Description**: Displays the name the member specified on their profile.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, hasSome, contains  
**Read-only**: No

#### Title (title) 

**Description**:  The member's title.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Slug (slug) 

**Description**: The member's URL-friendly name that is unique across your site. Typically this is made up of the member's email prefix.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq  
**Read-only**: Yes