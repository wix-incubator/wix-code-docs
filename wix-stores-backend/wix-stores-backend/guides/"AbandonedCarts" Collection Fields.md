

# "Collections" Collection Fields







To use the AbandonedCarts collection in code, refer to it as `"Stores/AbandonedCarts"`.

```javascript
wixData.query("Stores/AbandonedCarts")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your AbandonedCarts collection.





> **Important:**
> -   You can query up to 100 items from the AbandonedCarts collection. Trying to query more than 100 items by raising the wix-data [limit](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#limit) will result in an error.



### Permissions 

The AbandonedCarts collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Admin 
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the AbandonedCarts collection's permissions. 

### Fields 

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### ID (\_id) 

**Description**: The ID of the abandoned cart. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, contains, startsWith  
**Read-only**: Yes

#### Buyer Info (buyerInfo) 

**Description**: Buyer information as a JSON object.  
**Type**: Object  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes**Note:** "identityType" is one of the following:
-   "MEMBER": Buyer is a logged-in site member.
-   "CONTACT": A contact has been created for the buyer.

```json
{
  "id": "4kf9ka09-4e9f-a02d-972f-9a5844d9d9a2",
  "identityType": "CONTACT",
  "firstName": "John",
  "lastName":"Doe",
  "phone": "5555555555",
  "email": "john.doe@somedomain.com"
}
```

```javascript
// filter a dataset by Buyer Info ID

import wixData from 'wix-data';

$w("#myDataset").setFilter(wixData.filter()
    .eq("buyerInfo.id", ["5ceea2d0-a537-41dc-a51e-51fc8645afd9"]))
```

#### Date Abandoned (abandonTime) 

**Description**: Time the cart was abandoned.  
**Type**: Date  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Status (status) 

**Description**: Status of the abandoned cart.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne  
**Read-only**: Yes  
**Notes**: Either "ABANDONED" or "RECOVERED".

#### Activities (activities) 

**Description**: List of activities for this order in an array of JSON objects.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  
**Notes:** The "type" value is one of:  
-   "UNRECOGNIZED\_TYPE"
-   "SCHEDULED"
-   "EMAIL\_SENT"
-   "EMAIL\_NOT\_SENT"
-   "NOTIFICATION\_SENT"
-   "TASK\_CREATED"
-   "CUSTOM\_ACTIVITY"

```json
[
  {
    "type": "SCHEDULED",
    "timestamp": "2019-01-28T15:43:28.986Z"
  },
  {
    "type": "EMAIL_SENT",
    "timestamp": "2019-01-28T15:53:24.347Z"
  }
]
```

#### Total (total) 

**Description**: The order total.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes