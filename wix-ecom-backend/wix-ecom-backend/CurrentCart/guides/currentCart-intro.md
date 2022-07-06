---
title: Introduction
---
# Introduction

To use the Wix eCommerce Current Cart API, import `{ currentCart }` from the `wix-ecom-backend` module:

```javascript
import { currentCart } from 'wix-ecom-backend';
```

The Current Cart API provides functionality for managing the current site visitor's cart and [creating a checkout](https://www.wix.com/velo/reference/wix-ecom-backend/cart/createcheckout?branch=autodocs-wix-ecom-backend).

A cart object is created whenever a product or service is added to the cart, or the [createCart()](https://www.wix.com/velo/reference/wix-ecom-backend/cart/createcart?branch=autodocs-wix-ecom-backend) function is called.

The cart is the first phase of an eCommerce purchase flow, followed by checkout, then order. A cart holds information about items for purchase, prices, discounts, site details, and more.

The Current Cart API differs from the Cart API in that there is no need for a `cart._id` to manage it. All methods in the Current Cart API automatically interact with the site visitor's cart that is currently being used.

To see an estimate of the current cart's totals (including shipping costs) use the [estimateCurrentCartTotals()](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/estimatecurrentcarttotals?branch=autodocs-wix-ecom-backend) function.

To create a checkout based on the current site visitor's cart, use the [createCheckoutFromCurrentCart()](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/createcheckoutfromcurrentcart?branch=autodocs-wix-ecom-backend) function.

To assist in moving from the soon-to-be deprecated [Stores Cart API](https://www.wix.com/velo/reference/wix-stores/cart) to the eCommerce Cart API, refer to the [Cart Conversion Table](https://www.wix.com/velo/reference/wix-ecom-backend/cart/cart-object-conversion?branch=autodocs-wix-ecom-backend).
