<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->



# "InventoryItems" Collection Fields







To use the InventoryItems collection in code, refer to it as `"Stores/InventoryItems"`.

```javascript
wixData.query("Stores/InventoryItems")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your InventoryItems collection. 





> **Important:**
> -   You can query up to 100 items from the InventoryItems collection. Trying to query more than 100 items by raising the wix-data [limit](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#limit) will result in an error.



### Permissions 

The InventoryItems collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone 
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the InventoryItems collection's permissions. 

### Fields 

> **Note:**
> This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard). 

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### ID (\_id) 

**Description**: The inventory item ID (GUID) that was created by the server. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome  
**Read-only**: Yes

#### Updated Date (\_updatedDate) 

**Description**: Date and time the inventory item was last changed.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte, hasSome  
**Read-only**: Yes

#### External ID (externalId) 

**Description**: An external ID for the inventory ID in some other system.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome  
**Read-only**: Yes

#### Product ID (productId) 

**Description**: Unique identifier of the shopping cart.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**:  
**Can be sorted**: No  
**Can be filtered**: eq  
**Read-only**: Yes

#### Track Quantity (trackQuantity) 

**Description**: Indicates whether inventory is tracked for this item.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Variants (variants) 

**Description**: Displays the defined inventory item's variants and its inventory tracking information as a complex JSON object.  
**Type**: Text  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

Format of the JSON object

```javascript
{
  "variantId" : "abc-123-456",
  "inStock" : true,
  "quantity" : 30
},
{
  "variantId" : "def-456-789",
  "inStock" : false
},
{
  "variantId" : "ghi-789-000",
  "inStock" : true,
  "quantity" : 1
}
```

### Related APIs 

The following APIs can return data from the InventoryItems collection:

-   [wix-stores-backend](https://www.wix.com/code/reference/wix-stores-backend.html)
-   [$w.ProductPage](https://www.wix.com/code/reference/$w.ProductPage.html?draft=_#getProduct)