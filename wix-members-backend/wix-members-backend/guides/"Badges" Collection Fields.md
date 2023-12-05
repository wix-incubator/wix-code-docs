<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->



# "Badges" Collection Fields







To use the Badges collection in code, refer to it as `"Members/Badges"`.

```javascript
wixData.query("Members/Badges")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your Badges collection. 

### Permissions

The Badges collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Admin
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Badges collection's permissions. 

### Fields 

> **Note:**
> This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard).

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### ID (\_id) 

**Description**: Badge ID.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome  
**Read-only**: Yes

#### Title (title) 

**Description**: Badge title.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne  
**Read-only**: Yes

#### Description (description) 

**Description**: Badge description.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Background Color (backgroundColor) 

**Description**: Background color of the badge.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Text Color (textColor) 

**Description**: Text color of the badge.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Icon (icon) 

**Description**: Badge icon.  
**Type**: Image  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Role ID (roleId) 

**Description**: ID of the badge's associated member [role](https://support.wix.com/en/article/creating-member-roles-6943237).  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Slug (slug) 

**Description**: The badge's unique URL as used in a dynamic page.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, gt, lt  
**Read-only**: Yes

#### Created Date (\_createdDate) 

**Description**: Date and time the badge was created.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Updated Date (\_updatedDate) 

**Description**: Date and time the badge was last updated.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Members (members) 

**Description**: List of members the badge is assigned to. An array of member IDs.  
**Type**: Tags  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: hasSome  
**Read-only**: Yes

```javascript
[
    "23ab456c-de7f-890g-hi12-3j45kl6m7n8o",
    "3bc4567d-8e9f-0g12-3456-789012hijk34",
    "c45678d9-f0ef-1ghi-2345-678j9012kl3m"
]
```