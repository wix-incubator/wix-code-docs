---
title: Introduction
---

# Introduction
&nbsp;
<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>  

&nbsp;
<!--
> **Note:**
> This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.
-->

The Loyalty API allows you to manage a customized loyalty program that lets customers earn loyalty points.

With the Loyalty API, you can:
- [Activate](wix-loyalty-v2/programs/activateloyaltyprogram) and [manage](wix-loyalty-v2/programs/updateloyaltyprogram) a loyalty program.
- [Create](wix-loyalty-v2/accounts/createaccount) new loyalty accounts for customers.
- [Adjust points](wix-loyalty-v2/accounts/adjustpoints) in individual loyalty accounts.
- Manage the [loyalty rewards](wix-loyalty-v2/rewards) and [loyalty coupons](wix-loyalty-v2/coupons) that points can be redeemed for.
- Manage [loyalty tiers](wix-loyalty-v2/tiers) and [update](#updatetiersprogramsettings) the global settings for a tiers program.

For more information, see [Wix Loyalty Program: An Overview](https://support.wix.com/en/article/wix-loyalty-program-an-overview).

To use the wix-loyalty API, import `wixLoyalty` from the `wix-loyalty.v2` module. 

```javascript
import wixLoyalty from 'wix-loyalty.v2';
```

## Before you begin

It’s important to note the following points before starting to code:
- A Wix Loyalty Program must first be installed through your [dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Floyalty-accounts/wizard/) or the [Wix App Market](https://www.wix.com/app-market/loyalty) before the Loyalty APIs can be used. 
- A loyalty program only works with certain apps, such as Wix Bookings, Wix Events, Wix Pricing Plans, Wix Restaurants, or Wix Stores. One of those must be installed on your site before the loyalty program can be used.
- A customer with a loyalty account can’t earn or redeem points while the loyalty program is in `"DRAFT"` status. You can change the program’s status to `"ACTIVE"` through your [dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Floyalty-accounts/wizard/) or with the [`activateLoyaltyProgram()`](wix-loyalty-v2/programs/activateloyaltyprogram) function.
