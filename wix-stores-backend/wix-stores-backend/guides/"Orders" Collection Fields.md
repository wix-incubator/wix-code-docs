

# "Orders" Collection Fields







To use the Orders collection in code, refer to it as `"Stores/Orders"`.

```javascript
wixData.query("Stores/Orders")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your Orders collection.





> **Important:**
> -   You can query up to 100 items from the Orders collection. Trying to query more than 100 items by raising the wix-data [limit](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#limit) will result in an error.



### Permissions 

The Order collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Admin 
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Order collection's permissions. 

### Fields 

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### Number (number) 

**Description**: Running order number.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, le, lt, gt, ge  
**Read-only**: Yes

#### ID (\_id) 

**Description**: The ID of the order. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome  
**Read-only**: Yes

#### Updated Date (\_updatedDate) 

**Description**: The date and time the order was last updated. This is a system field and is hidden by default.  
**Type**: Date  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, lt, le, gt, ge  
**Read-only**: Yes

#### Billing Info (billingInfo) 

**Description**: Billing information as a JSON object.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

```json
{
  "address": {
    "formatted": "235 W 23rd St, NYC, New York 10011, USA",
    "city": "NYC",
    "country": "USA",
    "addressLine": "235 W 23rd St",
    "addressLine2": "Apt 3",
    "postalCode": "10011",
    "subdivision": "NY"
  }
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@somedomain.com",
  "phone": "5555555555",
  "company" : "Company Name",
  "vatId": {
    "number": "452.765.395-39",
    "type": "CPF"
  },
  "paidDate": "2000-05-24T21:00:00.000Z",
  "paymentMethod": "VISA",
  "paymentGatewayTransactionId": "29A06193U6234935D",
  "paymentProviderTransactionId": "7c03ca74-eaf5-4541-8678-9b857634fdcb"
}
```

#### Buyer Info (buyerInfo) 

**Description**: Buyer information as a JSON object.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  
**Note:** "identityType" is one of the following:  
-   "MEMBER": A logged-in site member.
-   "CONTACT": A Wix contact.

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

#### Buyer Note (buyerNote) 

**Description**: A note added by the buyer on the cart page when creating the order.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Date Created (\_dateCreated) 

**Description**: Date and time the order was created.  
**Type**: Date  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, lt, le, gt, ge  
**Read-only**: Yes

#### Currency (currency) 

**Description**: Currency of the order.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Fulfillment Status (fulfillmentStatus) 

**Description**: The status of the order's fulfillment.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  
**Note**: Value is one of:
-   "FULFILLED" - Order was fulfilled successfully.
-   "NOT\_FULFILLED" - Order is not yet fulfilled.
-   "CANCELLED" - Order was cancelled.
-   "PARTIALLY\_FULFILLED": Order was partially fulfilled.

#### Archived (archived) 

**Description**: Whether the order is archived.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne  
**Read-only**: Yes

#### Line Items (lineItems) 

**Description**: Lists all the line items for this order in an array of JSON objects.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  
**Note**: The "lineItemType" value is one of:
-   "PHYSICAL"
-   "DIGITAL"
-   "CUSTOM\_AMOUNT\_ITEM" - Item with a custom price.

```json
[
  {
    "index": 1,
    "quantity": 1,
    "discount": 0,
    "tax": 5,
    "taxGroupId": "4",
    "name": "Black T-Shirt",
    "translatedName": "Nombre traducido",
    "productId": "28e0d578-64ac-7c12-b675-d1944d1c4155",
    "sku": "364215376135191",
    "weight": 5.2,
    "lineItemType": "PHYSICAL",
    "notes": "Some notes here",
    "variantId": "0042-0005-a316f7c67df7",
    "fulfillerId": "0000-0420-0005-a3dcfd7e6930",
    "priceData": {
      "price": 35,
      "totalPrice": 40,
      "taxIncludedInPrice": true
    },
    "options": [
      {
        "option": "Color",
        "selection": "Red"
      },
      {
        "option": "Size",
        "selection": "Small"
      }
    ],
    "customTextFields": [
      {
        "title": "Notes for delivery",
        "value": "Please leave at front door"
      }
    ],
    "mediaItem": {
      "altText": "A description of the image",
      "id": "nsplsh_5386255~mv2_d_2977_3951_s_4_2.jpg",
      "externalImageUrl": "http://static.wixstatic...al_c,q_90/file.jpg",
      "src": "wix:image://v1/.../jpg#originWidth=1000&originHeight=1000",
      "type": "IMAGE"
    }
  }, ...
]
```

#### Activities (activities) 

**Description**: List of activities for this order in an array of JSON objects.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  
**Notes:** The "type" value is one of:
-   "MERCHANT\_COMMENT" - A merchant comment.
-   "ORDER\_PLACED" - Order placed.
-   "ORDER\_PAID" - Order marked as paid, either by the store owner (for offline orders), or when an online transaction is confirmed.
-   "ORDER\_FULFILLED" - Order shipping status set as fulfilled.
-   "ORDER\_NOT\_FULFILLED" - Order shipping status set as not fulfilled.
-   "DOWNLOAD\_LINK\_SENT" - Download link was sent (relevant for orders with digital line items).
-   "PICKUP\_READY\_EMAIL\_SENT" - Email notification for pickup was sent.
-   "TRACKING\_NUMBER\_ADDED" - Shipping tracking number was set.
-   "TRACKING\_NUMBER\_EDITED" - Shipping tracking number was edited.
-   "TRACKING\_LINK\_WAS\_SET" - Shipping tracking link was set.
-   "SHIPPING\_CONFIRMATION\_EMAIL\_SENT" - An email confirmation of the order shipment was sent.
-   "INVOICE\_WAS\_SET" - Invoice was added to the order.
-   "INVOICE\_WAS\_REMOVED" - Invoice was removed from the order.
-   "INVOICE\_WAS\_SENT" - Invoice was sent to customer via email.

```json
[
  {
    "type": "ORDER_PLACED",
    "timestamp": "2019-01-28T15:43:28.986Z"
  },
  {
    "type": "MERCHANT_COMMENT",
    "author": "jane.doe@somedomain.com",
    "message": "Enjoy you purchase!",
    "timestamp": "2019-01-28T15:53:24.347Z"
  }
]
```

#### Payment Status (paymentStatus) 

**Description**: Status of the order's payment.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome  
**Read-only**: Yes  
**Note**: One of: 
-   "PAID"
-   "NOT\_PAID"
-   "PARTIALLY\_REFUNDED"
-   "FULLY\_REFUNDED"

The "NOT\_PAID" status is only for manual payment orders. Other non-paid orders, such as declined payments, do not appear in the orders collection.

#### Shipping Info (shippingInfo) 

**Description**: The order's shipping information as a JSON object.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  
**Notes**: 
-   Either "shipmentDetails" or "pickupDetails" will be present, but not both.

```json
{      
  "deliveryOption": "PPP",
  "estimatedDeliveryTime": "1 day",
  "shippingRegion": "Domestic",
  "shipmentDetails": {
    "address": {
      "formatted": "235 W 23rd St, NYC, New York 10011, USA",
      "city": "NYC",
      "country": "USA",
      "addressLine": "235 W 23rd St",
      "addressLine2": "Apt 3",
      "postalCode": "10011",
      "subdivision": "NY"
    },
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@somedomain.com",
    "phoneNumber": "55555555555",
    "company" : "Some Company",
    "vatId": {
      "number": "294.593.590-21",
      "type": "CPF"
    },
  },
  "pickupDetails": {
    "buyerDetails": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@somedomain.com",
      "phoneNumber": "55555555555"
    },
    "pickupInstructions": "Some instructions",
    "pickupAddress": { 
      "formatted": "235 W 23rd St, NYC, New York 10011, USA"
      "city": "New York",
      "country": "USA",
      "addressLine": "235 W 23rd St",
      "postalCode": "10011",
      "subdivision": "NY"
    }
  }
}
```

#### Totals (totals) 

**Description**: The order's total information as a JSON object.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

```json
{
  "discount": 0.0,
  "quantity": 1,
  "shipping": 0.0,
  "subtotal": 1.0,
  "tax": 0.0,
  "total": 1.0,
  "weight": 0.0
}
```

#### Weight Unit (weightUnit) 

**Description**: The unit in which the order's weight is measured ("KG" or "LB").  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Custom Field (customField) 

**Description**: Information about a custom field added to the checkout process as a JSON object.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

```json
{
  "title": "Notes for delivery",
  "translatedTitle": "Notas de entrega",
  "value": "Please call when outside"
}
```

#### Fulfillments (fulfillments) 

**Description**: Lists of fulfillments for this order in an array of JSON objects.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

```json
[
  {
    "id": "8",
    "dateCreated": "2020-04-20T21:00:00.000Z",
    "lineItems": [
      {
        "index": 1,
        "quantity": 1
      }
    ],
    "trackingInfo": {
      "trackingNumber": "449044304137821",
      "shippingProvider": "FEDEX",
      "trackingLink": "https://www.fedex.com/...trackingnumber=449044304137821",
    }
  }
]
```

#### Buyer Language (buyerLanguage) 

**Description**: The site's displayed language.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Cart ID (cartId) 

**Description**: The shopping cart's unique ID.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Channel Info (channelInfo) 

**Description**: Information about the sales channel that submitted the order, as a JSON object.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

```json
{
  "externalOrderId": "03-04896-40604",
  "externalOrderUrl": "http://www.eBay.com/sh/ord/details?orderid=03-04896-40604",
  "type": "EBAY"
}
```

#### Entered By (enteredBy) 

**Description**: Information about the identity of the order's operator as a JSON object.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  
**Note**: The identityType value - the order was created by one of the following:
-   "USER" - Wix user who performed a POS transaction on behalf of the buyer.
-   "MEMBER" - Logged-in site member.
-   "CONTACT" - A Wix contact.

```json
{
  "id": "f6c2c0f9-4e9f-a58d-a02d-9af2497294d9",
  "identityType": "MEMBER"
}
```

#### Refunds (refunds) 

**Description**: Information about order refunds in an array of JSON objects.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  
**Note**: Details about externalRefund boolean field:
-   Indicates whether the refund was made externally.
-   An external refund refers to refunds processed by the payment provider and reported to the Wix orders system.
-   When the value is false, the refund was reported to the Wix orders system but was not processed by the payment provider.

```json
[
  {
    "id": "caa2918c-6d38-08df-b484-09b702099e2b",
    "dateCreated": "2021-01-13T08:20:31.638Z",
    "amount": "26.4",
    "reason": "returned",
    "externalRefund": true,
    "paymentProviderTransactionId": "19615318-2134-4160-b886-cdde9c7ae88e"
  },
  {
    "id": "7079923b-1c65-1c7a-37c9-3733de32ea1d",
    "dateCreated": "2021-01-13T08:26:09.419Z",
    "amount": "60.0",
    "externalRefund": false
  }
]
```

#### Subscription Information (subscriptionInfo) 

**Description**: Information about an order's subscription as a JSON object.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  
**Note**: 'frequency' field - frequency of recurring payment. One of:
-   "DAY" - Daily
-   "WEEK" - Weekly
-   "MONTH" - Monthly
-   "YEAR" - Yearly

```json
{
  "subscriptionInfo": {
    "id": "9275fb37-5377-434e-a484-6b6933896bc3",
    "cycleNumber": 3,
    "subscriptionSettings": {
      "frequency": "WEEK",
      "autoRenewal": true,
      "billingCycles": 1
    },
    "subscriptionOptionInfo": {
      "id": "0a7c4732-09c8-430c-b94e-f189cc0ce25a",
      "title": "Weekly",
      "description": "Weekly subscription"
    }
  }
}
```