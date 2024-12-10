---
title: Introduction
---
# Introduction

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
 <b>Developer Preview</b>
 <br/>
 <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;

The Order Transactions API allows you to manage records and details of payments and refunds associated with your orders.

With the Order Transactions API you can:

* Retrieve transactions related to one or more orders.
* Add payment records to an order.
* Listen to events when an [order's transactions are updated](https://www.wix.com/velo/reference/wix-ecom-backend/events/onordertransactionsupdated).

## Terminology

* **Transaction**: Global term for a transfer of funds. Can be either a:
  * **Payment**: A transfer of funds from customer to merchant/seller when making a purchase.
  * **Refund** A reimbursing transfer of funds back to the buyer.

To use the Order Transactions API, import `{ orderTransactions }` from the `wix-ecom-backend` module:

```javascript
import { orderTransactions } from 'wix-ecom-backend';
```

## Permissions information

Functions in the Order Transactions API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>