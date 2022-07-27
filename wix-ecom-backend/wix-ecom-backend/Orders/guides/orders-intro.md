---
title: Introduction
---
# Introduction

To use the Wix eCommerce Orders API, import `{ orders }` from the `wix-ecom-backend` module:

```javascript
import { orders } from 'wix-ecom-backend';
```

The eCommerce Orders API provides functionality for [retrieving](https://www.wix.com/velo/reference/wix-ecom-backend/orders/getorder?branch=autodocs-wix-ecom-backend) and [querying](https://www.wix.com/velo/reference/wix-ecom-backend/orders/queryorders?branch=autodocs-wix-ecom-backend) orders.

The order is the last phase of an eCommerce purchase flow, coming after cart and checkout. An order holds information about purchased items, price and tax summaries, shipping and billing info, any applied discounts, payment and fulfillment statuses, and more.

To assist in moving from the [Stores Orders API](https://www.wix.com/velo/reference/wix-stores/order) to the eCommerce Orders API, refer to the [Order Conversion Table](https://www.wix.com/velo/reference/wix-ecom-backend/orders/order-object-conversion?branch=autodocs-wix-ecom-backend).