---
title: Introduction
---

# Introduction

An abandoned checkout is created when:

+ A customer begins an eCommerce Checkout process but doesn't complete it (for example, after closing their browser tab before putting in their payment details and making a payment).

+ A customer who is also a site member creates a cart and closes their browser tab before proceeding to the checkout page. (Wix eCommerce creates an abandoned checkout entity with the cart details).

The eCommerce Abandoned Checkouts API allows you to help a customer recover their abandoned checkout. When a customer completes their checkout and makes a purchase, the checkout becomes an [order](https://dev.wix.com/api/rest/wix-ecommerce/orders).

An abandoned checkout contains buyer details, prices, reference to the initial cart or checkout, a URL for accessing the abandoned checkout, and more.

With the Abandoned Checkouts API, you can:

+ [Get information about an abandoned checkout](https://www.wix.com/velo/reference/wix-ecom-backend/abandonedcheckouts/getabandonedcheckout).
+ [Retrieve a list of abandoned checkouts](https://www.wix.com/velo/reference/wix-ecom-backend/abandonedcheckouts/queryabandonedcheckouts). 
+ Listen for events when an abandoned checkout is [created](https://www.wix.com/velo/reference/wix-ecom-backend/events/onabandonedcheckoutcreated) and [recovered](https://www.wix.com/velo/reference/wix-ecom-backend/events/onabandonedcheckoutrecovered). 

## Terminology

+ **Recovered**: When a customer returns to their abandoned checkout and completes the checkout.

+ **Activities**: This property is only relevant if you've set up [automations in the Dashboard](https://support.wix.com/en/article/wix-automations-creating-a-new-automation). The `activities` property is a list of all automation activities performed by [Wix Automations](https://support.wix.com/en/article/wix-automations-getting-started) regarding the abandoned checkout. Wix Automations updates the `activities` field for each actvity in the automation flow. For example, if you set up an automation to send a notification to a site visitor an hour after their abandoned checkout is created, Wix automations does the following:
  + Updates the `activities` field to `SCHEDULED` when the abandoned checkout is created. 
  + Updates the `activities` field to `NOTIFICATION_SENT` after an hour, when the notification is sent to the site visitor.

  Other `actvities` include:
    + `EMAIL_SENT` 
    + `EMAIL_NOT_SENT`
    + `TASK_CREATED` 

To use the Abandoned Checkouts API, import `{ abandonedCheckouts }` from the `wix-ecom-backend` module. 

```javascript
import { abandonedCheckouts } from 'wix-ecom-backend';
```