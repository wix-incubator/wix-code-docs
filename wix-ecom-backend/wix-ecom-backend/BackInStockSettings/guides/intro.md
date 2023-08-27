---
title: Introduction
---

# Introduction

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
  <b>Developer Preview</b>
  <br/>
  <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>  


The Back In Stock Settings API allows you to manage whether or not to collect requests from customers to receive back in stock notifications. 

Learn more about [back in stock notification settings](https://support.wix.com/en/article/wix-stores-notifying-customers-when-products-are-back-in-stock#collecting-customer-requests).

To use the Back In Stock Settings API, import { backInStockSettings } from the ‘wix-ecom-backend’ module:
``` javascript 
import { backInStockSettings } from `wix-ecom-backend`;
```

## Before you begin
It’s important to note the following points before starting to code:
+ To start collecting back in stock requests, the `collectionStates` must be set to `true`. Use [`startCollectingRequests()`](wix-ecom-backend/backinstocksettings/startcollectingrequests) to update collection states.
+ [Customize the design of the notification email](https://support.wix.com/en/article/wix-stores-notifying-customers-when-products-are-back-in-stock#customizing-the-notification-email) that will be sent.

## Terminology
+ **Collection state:** The collection state determines whether the selected app is actively collecting requests for back in stock notifications. When the collection state is set to `true``, collecting requests is enabled and customers may request notifications for out of stock products.

## Permissions information
The following functions in Back In Stock Settings API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function:

+ [`startCollectingRequests()`](wix-ecom-backend/backinstocksettings/startcollectingrequests)
+ [`stopCollectingRequests()`](wix-ecom-backend/backinstocksettings/stopcollectingrequests)

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>
