---
title: Introduction
---
# Introduction

When your site's cart is interacted with — such as when they add a product or service, or after using the [createCart()](https://www.wix.com/velo/reference/wix-ecom-backend/cart/createcart?branch=autodocs-wix-ecom-backend) function — the current cart is created. Once that happens, it can be managed through the Current Cart API.

The Current Cart API differs from the Cart API in that there is no need for a `cart.id` to manage it. All methods in the Current Cart API automatically interact with the site visitor's cart that is currently being used.

A cart holds information about items for purchase, prices, discounts, site details, and more.

To see an estimate of the current cart's totals (including shipping costs) use the [estimateCurrentCartTotals()](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/estimatecurrentcarttotals?branch=autodocs-wix-ecom-backend) function.

To create a checkout based on the current site visitor's cart, use the [createCheckoutFromCurrentCart()](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/createcheckoutfromcurrentcart?branch=autodocs-wix-ecom-backend) function.

To assist in moving from the old [Stores Cart API](https://www.wix.com/velo/reference/wix-stores/cart) to the new, please refer to the [cart conversion table](https://www.wix.com/velo/reference/wix-ecom-backend/cart/cart-object-conversion?branch=autodocs-wix-ecom-backend).
