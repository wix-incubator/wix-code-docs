---
title: Introduction
---
# Introduction

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="https://discord.com/channels/1114269395317968906/1288424315838005259">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;  

With the Orders Settings API, you can retrieve and update settings that apply to a site’s eCommerce orders. These settings include adding or removing customer email notifications about order status, defining when to update the store inventory, and creating invoices.    

The default orders settings are provided when you first create a Wix eCommerce site.      

## Terminology

- **Order**: The final stage of the eCommerce purchase flow: cart, checkout, and order. An order represents a customer's request to purchase one or more products or services from a seller. It typically includes details such as the type and quantity of items, shipping address, payment information, and any other relevant transaction details.
- **eCommerce**: Buying and selling of goods and services over the internet.
- **Invoice**: Commercial document issued by a seller to a buyer, providing a detailed account of products or services rendered, along with the corresponding costs.
- **Inventory**: List of goods, products, or materials that a business holds for the purpose of resale or use in its operations.


## Before you begin

It’s important to note the following points before starting to code:  

- To use the Orders Settings API, import `{ ordersSettings }` from the `wix-ecom-backend` module:

```javascript
import { ordersSettings } from 'wix-ecom-backend';
```

## Permissions information

The following functions in the Orders Settings API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function:

- `updateOrdersSettings()`

<blockquote class='warning'>
<p>
<strong>Warning:</strong>
Elevating a function allows it to be called by any site visitor.
Exercise caution to prevent security vulnerabilities.
</p>
</blockquote>
