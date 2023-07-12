---
title: Introduction
---
# Introduction

To use the Wix eCommerce Current Cart API, import `{ currentCart }` from the `wix-ecom-backend` module:

```javascript
import { currentCart } from 'wix-ecom-backend';
```

The Current Cart API provides functionality for managing the current site visitor's cart and [creating a checkout](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/createcheckoutfromcurrentcart) based on the current cart.

A cart object is created whenever a product or service is [added to the current cart](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/addtocurrentcart), or the [`cart.createCart()`](https://www.wix.com/velo/reference/wix-ecom-backend/cart/createcart) function is called.

The cart is the first phase of an eCommerce purchase flow, followed by checkout, then order. A cart holds information about items for purchase, prices, discounts, site details, and more.

The Current Cart API differs from the Cart API in that there is no need for a `cart._id` to manage it. All methods in the Current Cart API automatically interact with the site visitor's cart that is currently being used.

To see an estimate of the current cart's totals (including shipping costs) use the [estimateCurrentCartTotals()](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/estimatecurrentcarttotals) function.

To create a checkout based on the current site visitor's cart, use the [createCheckoutFromCurrentCart()](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/createcheckoutfromcurrentcart) function.

To assist in moving from the soon-to-be deprecated [Stores Cart API](https://www.wix.com/velo/reference/wix-stores/cart) to the eCommerce Cart API, refer to the [Cart Conversion Table](#stores-to-ecommerce-cart-conversion-table). Other than the `cartId`, cart and current cart objects are identical.
