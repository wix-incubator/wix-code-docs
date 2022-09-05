---
title: Introduction
---
# Introduction

To use the Wix eCommerce Checkout API, import `{ checkout }` from the `wix-ecom-backend` module:

```javascript
import { checkout } from 'wix-ecom-backend';
```

The eCommerce Checkout API provides functionality for [creating](https://www.wix.com/velo/reference/wix-ecom-backend/checkout/createcheckout) and [retrieving](https://www.wix.com/velo/reference/wix-ecom-backend/checkout/getcheckout) a checkout.

The checkout is the second phase of an eCommerce purchase flow, coming after cart and before order. A checkout holds information about items to be purchased, price and tax summaries, shipping and billing info, any applied discounts, and more.

Some fields in the [Stores Cart API](https://www.wix.com/velo/reference/wix-stores/cart) cart object are held in the checkout object. For more info, refer to the [Stores Cart to eCommerce Checkout Conversion Table](#stores-cart-to-ecommerce-checkout-conversion-table).
