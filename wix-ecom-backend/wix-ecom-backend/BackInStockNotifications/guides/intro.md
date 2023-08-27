---
title: Introduction
---

# Introduction

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>  

The Back In Stock Notifications API allows you to manage customer requests to receive notifications when out-of-stock items become available. 

With this API, you can:
+ Increase sales and customer satisfaction with personalized notifications.
+ Collect insights on requested items that are currently unavailable.
+ Effectively manage inventory and adjust restocking strategy.

Learn more about [notifying customers when products are back in stock](https://support.wix.com/en/article/wix-stores-notifying-customers-when-products-are-back-in-stock).

To use the Back In Stock Notifications API, import { backInStockNotifications } from the ‘wix-ecom-backend’ module:
``` javascript 
import { backInStockNotifications } from `wix-ecom-backend`;
```

## Before you begin
It’s important to note the following points before starting to code:
+ To start collecting back in stock requests, the `collectionStates` must be set to `true`. Use [`startCollectingRequests()`](wix-ecom-backend/backinstocksettings/startcollectingrequests) to update collection states, or [update in a site’s dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Go%20to%20Back-in-Stock&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https://www.wix.com/dashboard/{{metaSiteId}}/store/back-in-stock).
+ For emails to send with the [`reportItemsBackInStock()`](wix-ecom-backend/backinstocknotifications/reportitemsbackinstock) function, automations must be [activated in the site’s dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Go%20to%20Back-in-Stock&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https://www.wix.com/dashboard/{{metaSiteId}}/store/back-in-stock) first.
+ [Customize the design of the notification email](https://support.wix.com/en/article/wix-stores-notifying-customers-when-products-are-back-in-stock#customizing-the-notification-email) that will be sent.

## Terminology
+ **Notification request:** The object that is created when a customer wants to be notified when an out-of-stock item becomes available. The back in stock notification request contains information about the item and an email address to contact when it’s back in stock.

## Permissions information
The following functions in Back In Stock Notifications API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function:

+ [`deleteBackInStockNotificationRequest()`](wix-ecom-backend/backinstocknotifications/deleteBackInStockNotificationRequest)
+ [`getBackInStockNotificationRequest()`](wix-ecom-backend/backinstocknotifications/getBackInStockNotificationRequest)
+ [`getBackInStockNotificationRequestsCountByCatalogReferences()`](wix-ecom-backend/backinstocknotifications/getBackInStockNotificationRequestsCountByCatalogReferences)
+ [`markAsNotificationSent()`](wix-ecom-backend/backinstocknotifications/markAsNotificationSent)
+ [`queryBackInStockNotificationRequests()`](wix-ecom-backend/backinstocknotifications/queryBackInStockNotificationRequests)
+ [`reportItemsBackInStock()`](wix-ecom-backend/backinstocknotifications/reportItemsBackInStock)

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>
