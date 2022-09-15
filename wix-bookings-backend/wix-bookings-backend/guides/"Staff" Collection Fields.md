

# "Staff" Collection Fields







To use the Staff collection in code, refer to it as `"Bookings/Staff"`.

```javascript
wixData.query("Bookings/Staff")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your Staff collection.

### Permissions 

The Staff collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone 
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Staff collection's permissions. 

### Fields 

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

> **Note**
> You cannot create a dynamic page based on the Staff collection.

#### ID (\_id) 

**Description**: Unique staff member ID.  
**Type**: Text  
**Can connect to data**: Yes  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Staff Name (name) 

**Description**: The staff member's name.  
**Type**: Text  
**Can connect to data**: Yes  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Staff Image (image) 

**Description**: The staff member's image.  
**Type**: Image  
**Can connect to data**: Yes  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes