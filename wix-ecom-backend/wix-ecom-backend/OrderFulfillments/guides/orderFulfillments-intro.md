---
title: Introduction
---

# Introduction


The Order Fulfillments API allows a site visitor to retrieve and manage eCommerce order fulfillments.

An order fulfillment refers to the process of preparing and delivering orders to customers.
This process usually involves receiving orders, picking the products from inventory,
packing them securely, providing tracking information, and shipping them to the customer's address.

A fulfillment object contains information about an order's shipping provider, tracking details, and the line items associated with the fulfillment.

To use the Order Fulfillments API, import `{ orderFulfillments }` from the `wix-ecom-backend` module:

```javascript
import { orderFulfillments } from 'wix-ecom-backend';
```

## Permissions information

The following functions in the Order Fulfillments API
are restricted and only run if you elevate permissions
using the `wix-auth` [`elevate()`](https://dev.wix.com/docs/velo/api-reference/wix-auth/elevate)
function:

+ [`createFulfillment()`](/#create-fulfillment)
+ [`bulkCreateFulfillments()`](#bulk-create-fulfillments)
+ [`updateFulfillment()`](#update-fulfillment)
+ [`deleteFulfillment()`](#delete-fulfillment)

<blockquote class='warning'>
<p>
<strong>Warning:</strong>
Elevating a function allows it to be called by any site visitor.
Exercise caution to prevent security vulnerabilities.
</p>
</blockquote>