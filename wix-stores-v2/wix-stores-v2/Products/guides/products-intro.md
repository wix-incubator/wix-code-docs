---
title: Introduction
---

# Introduction

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>Some functions in this module are in Developer Preview.<br/> APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview"> Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving these functions. Your feedback is valuable to us.</span>
</div>

&nbsp;
> **Note:**
> This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.

The eCommerce Products API allows you to manage products to sell.  

With the Products API, you can:
- [create](#createproduct) and [update](#updateproduct) products
- [add](#addproductmedia) media, such as images or GIFs, to products  

See [Managing Products](https://support.wix.com/en/managing-products-and-categories) for more information.  

## Before you begin

To use the Products API, import `{ products }` from the `wix-ecom.v2` module:
```js
import { products } from 'wix-stores.v2';
```

## Terminology
+ **Options:** Property types that customers can select within the specific product. For example, color and size.
+ **Choices:** Available selections within each option. For example, red, green, and blue as choices under the color option.
+ **Variants:** Combinations of different product options and choices. For example, a red shirt in size large.

## Permissions Information
The following functions in the Products API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function:

+ [addProductMedia()](#addproductmedia)
+ [addProductMediaToChoices()](#addproductmediatochoices)
+ [addProductsToCollection()](#addproductstocollection)
+ [createCollection()](#createcollection)
+ [createProduct()](#createproduct)
+ [deleteCollection()](#deletecollection)
+ [deleteProduct()](#deleteproduct)
+ [deleteProductOptions](#deleteproductoptions)
+ [removeBrand()](#removebrand)
+ [removeProductMedia()](#removeproductmedia)
+ [removeProductMediaFromChoices()](#removeproductmediafromchoices)
+ [removeProductsFromCollection()](#removeproductsfromcollection)
+ [removeRibbon()](#removeribbon)
+ [resetAllProductVariantData()](#resetallproductvariantdata)
+ [updateCollection()](#updatecollection)
+ [updateProduct()](#updateproduct)
+ [updateProductVariants()](#updateproductvariants)

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>

## Events

Products API events are fired on your site’s backend when certain events occur with products.
See [`wix-stores-backend` events](https://www.wix.com/velo/reference/wix-stores-backend/events) 
for more information related to these events.
