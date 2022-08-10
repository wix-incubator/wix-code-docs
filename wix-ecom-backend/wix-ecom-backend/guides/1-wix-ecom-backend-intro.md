---
title: Introduction
---
# Introduction

The wix-ecom-backend Velo API allows you to create, manage, and/or retrieve 3 elements of the eCommerce purchase flow: **cart**; **checkout**; **order**.

## Wix eCommerce API and Wix Stores API

The main difference between the two APIs is that while **Wix eCommerce manages the cart, checkout, and order** phases of the online store experience, **Wix Stores continues to manage product catalogs, inventories and collections**. The following table outlines the differences between the two APIs.

| Element                                  | Previous Location                                | Current Location            |
| -----------------------------------------|--------------------------------------------------|-----------------------------|
| Cart                                     | [Wix Stores](https://www.wix.com/velo/reference/wix-stores)                                  | [Wix eCommerce Cart](https://www.wix.com/velo/reference/wix-ecom-backend/cart)
| Checkout                                 | No Stores functionality                          | [Wix eCommerce Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout)
| Order                                    | [Wix Stores Backend](https://www.wix.com/velo/reference/wix-stores-backend)                                       | [Wix eCommerce Orders](https://www.wix.com/velo/reference/wix-ecom-backend/orders)
| Catalog                                  | [Wix Stores Backend](https://www.wix.com/velo/reference/wix-stores-backend)                                       | Wix Stores - no change
| Inventory                                | [Wix Stores Backend](https://www.wix.com/velo/reference/wix-stores-backend)                                       | Wix Stores - no change
| Collections                              | [Wix Stores Backend](https://www.wix.com/velo/reference/wix-stores-backend)                                       | Wix Stores - no change

> **Note:** Further functionality will be coming soon.

## Import Statement

To use the wix-ecom-backend API, import `wixEcomBackend` from the `wix-ecom-backend` module:

```javascript
import wixEcomBackend from 'wix-ecom-backend';
```
