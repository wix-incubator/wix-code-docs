

# "Coupons" Collection Fields







To use the Coupons collection in code, refer to it as `"Marketing/Coupons"`.

```javascript
wixData.query("Marketing/Coupons")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your Coupons collection.

### Permissions 

The Coupons collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Admin 
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Coupons collection's permissions. 

### Fields 

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

> **Note:**
> In addition to the filters listed below for each field, 

#### ID (\_id) 

**Description**: The ID of the coupon. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, contains, startsWith  
**Read-only**: Yes

#### Name (name) 

**Description**: Name of the coupon.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, contains, startsWith  
**Read-only**: Yes

#### Code (code) 

**Description**: Coupon code.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, contains, startsWith  
**Read-only**: Yes

#### Start Time (startTime) 

**Description**: Start date and time of the coupon.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, lt, lte, gt, gte  
**Read-only**: Yes

#### Expiration Time (expirationTime) 

**Description**: End date and time of the coupon.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, lt, lte, gt, gte  
**Read-only**: Yes

#### Usage Limit (usageLimit) 

**Description**: Maximum number of times a coupon can be used.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, lt, lte, gt, gte  
**Read-only**: Yes

#### Limit Per Customer (limitPerCustomer) 

**Description**: Maximum number of times the coupon can be used **per customer**.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, lt, lte, gt, gte  
**Read-only**: Yes

#### Applies to Subscriptions (appliesToSubscriptions) 

**Description**:   
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: 
**Can be sorted**: No  
**Can be filtered**: Yes
**Read-only**: Yes

#### Limited To One Item (limitedToOneItem) 

**Description**: Indicates whether the coupon is limited to 1 discount per order. If true and a customer buys multiple items that the coupon applies to, only the lowest priced item is discounted.  
**Type**: Boolean  
**Can connect to data**:  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne  
**Read-only**: Yes  
**Note:** This field only applies to coupons with Type "moneyOffAmount" or "percentOffRate".

#### Active (active) 

**Description**: Indicates whether the coupon is currently [active](https://support.wix.com/en/article/activating-and-deactivating-coupons-in-wix-stores).  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne
**Read-only**: Yes

#### Minimum Subtotal (minimumSubtotal) 

**Description**: The coupon can be used when the order subtotal is over this amount.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, lt, lte, gt, gte  
**Read-only**: Yes

#### Scope (scope) 

**Description**: Scope for the coupon as defined in a JSON object.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

```json
{
  "namespace": "string",
  "group": {
    "name": "string",
    "entityId": "string"
  }
}
```

The following table lists the available options for Namespace and Group:

| Namespace | Group |
| --- | --- |
| stores | product |
|  | collection |
| bookings | service |
| events | event |
|  | ticket |

You can define the scope for a coupon as an entire namespace, a group within a namespace, or an item within a group. See the examples below.

**Example:** Scope for the coupon is defined as all products sold in your store.

```json
{ 
  "namespace": "stores"
}
```

**Example:** Scope for the coupon is defined as a specific product sold in your store.

```json
{ 
  "namespace": "stores",
  "group": {
    "name":"product",
    "entityId": "82921602-92d2-1787-08c8-207d12ef41d2" // ID of product
  } 
}
```

Since the **events** namespace has both **ticket** and **event** groups, and you can't apply a single coupon to all tickets and events at the same time, you can't define the scope as just the namespace **events**. For events you need to define the scope as a group or a specific item in a group.

**Example:** Scope for the coupon is defined as all tickets for events.

```json
{ 
  "namespace": "events",
  "group": {
    "name":"ticket"
  }  
}
```

**Filtering with Scope**

You can filter using one of 3 scopes:

-   "scope.namespace"
-   "scope.group.name"
-   "scope.group.entity"

**Filtering Example:** Query the Coupons collection for coupons within the Stores namespace.

```javascript
wixData.query("Marketing/Coupons").eq("scope.namespace", "stores")
```

**Filtering Example:** Query the Coupons collection for coupons applied to a specific product.

```javascript
wixData.query("Marketing/Coupons").eq("scope.group.entity", "82921602-92d2-1787-08c8-207d12ef41d2")
```

#### Type (type) 

**Description**: The type of coupon (see note for available options).  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome  
**Read-only**: Yes  
**Note:** The "type" value is one of the following:

-   "BuyXGetY" - Free products when making a purchase
-   "FixedPrice" - Specific sale price
-   "FreeShipping" - Free shipping
-   "MoneyOff" - Fixed price discount
-   "PercentOff" - Discount as a percentage

#### Buy X Get Y (buyXGetY) 

**Description**: A JSON object representing X and Y in the following scenario: if a visitor purchases X number of products, they receive Y number of products for free.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

```json
{ 
  "x": 3,
  "y": 1
}
```

#### Fixed Price Amount (fixedPriceAmount) 

**Description**: A specific sale price.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Free Shipping (freeShipping) 

**Description**: Indicates whether shipping is free.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Money Off Amount (moneyOffAmount) 

**Description**: A fixed amount subtracted from the original price.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Percent Off Rate (percentOffRate) 

**Description**: A percentage subtracted from the original price.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Date Created (\_dateCreated) 

**Description**: The date the coupon was created.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, lt, lte, gt, gte  
**Read-only**: Yes

#### Number of Usages (numberOfUsages) 

**Description**: The total number of times a coupon was used by all customers.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, lt, lte, gt, gte  
**Read-only**: Yes

#### Expired (expired) 

**Description**: Indicates whether the expiration time passed and the coupon is expired.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne  
**Read-only**: Yes

#### Display Data (displayData) 

**Description**: Display information for the item the coupon is applicable for defined as a JSON object (e.g. a Stores product or a Bookings service).  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: Yes  
**Read-only**: Yes  
**Note:** This field is only relevant when the coupon is applied to a specific item. When the coupon is applied to all items in a group (e.g. all products), Display Data is empty. 

```json
"displayData": {
  "formattedPrice": "string",
  "mediaItem": "string",
  "name": "string"
}
```

#### App ID (appId) 

**Description**: The ID of the 3rd-party app that created the coupon. Empty if created by the site owner.  
**Type**: Text  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

### Related APIs

Use the following APIs to work with data from the Coupons collection:

-   [wix-marketing-backend.coupons](https://www.wix.com/corvid/reference/wix-marketing-backend.coupons.html)
-   [wix-data](https://www.wix.com/corvid/reference/wix-data.html)
-   [wix-dataset](https://www.wix.com/corvid/reference/wix-dataset.html)