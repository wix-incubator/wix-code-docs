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

With the Checkout Settings API, you can retrieve and update the checkout settings for sites that have installed your app. These settings include adding or removing eCommerce policies, and setting checkbox behavior for a checkout.    

Policies will appear as clickable links in the footer of your checkout, while checkboxes can be found when selecting the payment method. The policy text can be read in a pop-up window if you click the policy name. The default checkout settings are provided when you first create a Wix eCommerce site.  

## Terminology

- **Checkout:** The second stage of the eCommerce purchase flow: cart, checkout, order. A checkout holds information about items to be purchased, price and tax summaries, shipping and billing info, any applied discounts, and more. 
- **Policy:** Set of guidelines, rules, or principles established by an organization or authority to govern behavior, decision-making, and specific actions.


## Before you begin

It’s important to note the following points before starting to code:  

- To use the Checkout Settings API, import `{ checkoutSettings }` from the `wix-ecom-backend` module:

```javascript
import { checkoutSettings } from 'wix-ecom-backend';
```

## Permissions information

The following functions in the Checkout Settings API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function:

- `updateCheckoutSettings()`

<blockquote class='warning'>
<p>
<strong>Warning:</strong>
Elevating a function allows it to be called by any site visitor.
Exercise caution to prevent security vulnerabilities.
</p>
</blockquote>
