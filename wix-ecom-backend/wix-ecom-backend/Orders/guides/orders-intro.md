---
title: Introduction
---
# Introduction

To use the Wix eCommerce Orders API, import `{ orders }` from the `wix-ecom-backend` module:

```javascript
import { orders } from 'wix-ecom-backend';
```

The eCommerce Orders API provides functionality for [retrieving](https://www.wix.com/velo/reference/wix-ecom-backend/orders/getorder) orders.

The order is the last phase of an eCommerce purchase flow, coming after cart and checkout. An order holds information about purchased items, price and tax summaries, shipping and billing info, any applied discounts, payment and fulfillment statuses, and more.