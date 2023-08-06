---
title: Introduction
---

# Introduction

```html
<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>Some functions in this module are in Developer Preview. APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview"> Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving these functions. Your feedback is valuable to us.</span>
</div>
```

An abandoned checkout is created when:

+ A customer begins an eCommerce Checkout process but doesn't complete it (for example, after closing their browser tab before putting in their payment details and making a payment).

+ A customer who is also a site member creates a cart and closes their browser tab before proceeding to the checkout page. (Wix eCommerce creates an abandoned checkout entity with the cart details).

The Abandoned Checkouts API allows you to help a customer recover their abandoned checkout. When a customer completes their checkout and makes a purchase, the checkout becomes an [order](https://www.wix.com/velo/reference/wix-ecom-backend/orders).

An abandoned checkout contains buyer details, prices, reference to the initial cart or checkout, a URL for accessing the abandoned checkout, and more.

The eCommerce Abandoned Checkout API provides functionality for [getting information about an abandoned checkout](https://www.wix.com/velo/reference/wix-ecom-backend/abandonedcheckouts/getabandonedcheckout) and [retrieving a list of abandoned checkouts](https://www.wix.com/velo/reference/wix-ecom-backend/abandonedcheckouts/queryabandonedcheckouts). You can also listen for events when an abandoned checkout is [created](https://www.wix.com/velo/reference/wix-ecom-backend/events/onabandonedcheckoutcreated) and [recovered](https://www.wix.com/velo/reference/wix-ecom-backend/events/onabandonedcheckoutrecovered). 

To use the Abandoned Checkouts API, import { abandonedCheckouts } from the wix-ecom-backend module.

```js
import { abandonedCheckouts } from 'wix-ecom-backend';
```

## Terminology

+ **Recovered**: When a customer returns to their abandoned checkout and completes the checkout.

+ **Activities**: This property is only relevant if you set up [automations in the Dashboard](https://support.wix.com/en/article/wix-automations-creating-a-new-automation). The `activities` property is a list of all automation activities performed by [Wix Automations](https://support.wix.com/en/article/wix-automations-getting-started) regarding the abandoned checkout. Wix Automations updates the `activities` field for each actvity in the automation flow. For example, if you set up an automation to send a notification to a site visitor an hour after their abandoned checkout is created, Wix automations does the following:
  + Updates the `activities` field to `SCHEDULED` when the abandoned checkout is created. 
  + Updates the `activities` field to `NOTIFICATION_SENT` after an hour, when the notification is sent to the site visitor.

  Other `actvities` include:
    + `EMAIL_SENT` 
    + `EMAIL_NOT_SENT`
    + `TASK_CREATED` 


## Permissions information

Functions in the Abandoned Checkouts API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>