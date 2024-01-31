---
title: Introduction
---
# Introduction

The Orders API allows apps or site owners to customize management of the order lifecycle, including viewing, updating, and canceling. In the dashboard, business staff can create new orders, view and edit existing orders, track fulfillment, and manage the payments cycle.

An order holds information about purchased items, price and tax summaries, shipping and billing information, any applied discounts, and the status of payment and fulfillment.

With the Orders API you can:

* Get and search for orders.
* Update and cancel an order.
* Create an order for your records.
* Listen to events when an order is [approved](https://www.wix.com/velo/reference/wix-ecom-backend/events/onorderapproved), [updated](https://www.wix.com/velo/reference/wix-ecom-backend/events/onorderupdated), or [canceled](https://www.wix.com/velo/reference/wix-ecom-backend/events/onordercanceled).
* Listen to events when an order's transactions are [updated](https://www.wix.com/velo/reference/wix-ecom-backend/events/onordertransactionsupdated). This event is part of the [Order Transactions API](https://www.wix.com/velo/reference/wix-ecom-backend/ordertransactions).

To use the Orders API, import `{ orders }` from the `wix-ecom-backend` module:

```javascript
import { orders } from 'wix-ecom-backend';
```

## Permissions information

Functions in the Orders API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>