---
title: Introduction
---

# Introduction


The Order Fulfillments API allows a site visitor to retrieve and manage eCommerce order fulfillments.

An order fulfillment refers to the process of preparing and delivering orders to customers. This process usually involves receiving orders, picking the products from inventory, packing them securely, providing tracking information, and shipping them to the customer's address.

A fulfillment object contains information about an order's shipping provider, tracking details, and the line items associated with the fulfillment.

To use the Order Fulfillments API, import `{ orderFulfillments }` from the `wix-ecom-backend` module:

```javascript
import { orderFulfillments } from 'wix-ecom-backend';
```