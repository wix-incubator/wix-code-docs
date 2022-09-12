

# "Variants" Collection Fields







To use the Variants collection in code, refer to it as `"Stores/Variants"`.

```javascript
wixData.query("Stores/Variants")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your Variants collection. 





> **Important:**
> You can query up to 100 items from the Variants collection. Trying to query more than 100 items by raising the wix-data [limit](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#limit) will result in an error.



### Permissions 

The Products collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone 
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Variants collection's permissions. 

### Fields 

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### ID (\_id) 

**Description**: The store variant ID (GUID) created by the server. It is a system field comprised of the product ID and the product variant ID, separated by a hyphen.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome  
**Read-only**: Yes

#### Variant ID (variantId) 

**Description**: The variant ID (GUID) that was created by the server.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome  
**Read-only**: Yes

#### Full Variant Name (fullVariantName) 

**Description**: The full name of the variant.  
**Type**: Text   
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Product ID (productId) 

**Description**: The product ID (GUID) that was created by the server.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome  
**Read-only**: Yes

#### Variant Name (variantName) 

**Description**: The name of the variant.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome  
**Read-only**: Yes

#### Product Name (productName) 

**Description**: The name of the product.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome  
**Read-only**: Yes

#### Managed Variant (managedVariant) 

**Description**: Indicates whether the variant is being managed for the product - enables unique SKU, price, and weight per variant. Also affects inventory data.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq  
**Read-only**: Yes

#### SKU (sku) 

**Description**: Variant stock-keeping unit number.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome  
**Read-only**: Yes

#### Stock (stock) 

**Description**: Stock data for this variable in a JSON object.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

```json
"stock": {
      "trackQuantity": true,
      "quantity": 50,
      "inStock": true
}
```

#### Choices (choices) 

**Description**: Displays the defined product options and choices as a JSON object.  
**Type**: JSON  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

```json
{
  "Size": "Medium",
  "Color": "Black"
}
```

#### Media (media) 

**Description**: Displays the main media item (image or video) for this product as it appears in the Store Manager.  
**Type**: Image  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Collections (collections) 

**Description**: The collections the variant belongs to.  
**Type**: Reference (Multiple Items)  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: Yes  
**Read-only**: Yes