---
title: Introduction
---
# Introduction

To use the Wix eCommerce Cart API, import `{ cart }` from the `wix-ecom-backend` module:

```javascript
import { cart } from 'wix-ecom-backend';
```

The eCommerce Cart API provides functionality for creating and managing carts, as well as for [creating a checkout](https://www.wix.com/velo/reference/wix-ecom-backend/cart/createcheckout) based on an existing cart. The cart is the first phase of an eCommerce purchase flow, followed by checkout, then order. A cart holds information about items for purchase, prices, discounts, site details, and more.

A cart can be created either by using the [createCart()](https://www.wix.com/velo/reference/wix-ecom-backend/cart/createcart) function, or by [adding an item to the cart](https://www.wix.com/velo/reference/wix-ecom-backend/cart/addtocart).

Estimate the cart's totals (including shipping costs) using the [estimateTotals()](https://www.wix.com/velo/reference/wix-ecom-backend/cart/estimatetotals) function.

To assist in moving from the [Stores Cart API](https://www.wix.com/velo/reference/wix-stores/cart) to the eCommerce Cart API, refer to the [Cart Conversion Table](#stores-to-ecommerce-cart-conversion-table).
