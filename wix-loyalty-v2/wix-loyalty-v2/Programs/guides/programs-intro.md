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
The Loyalty Programs API allows you to activate and customize your loyalty program.

With the Loyalty Programs API, you can:
- [Activate](wix-loyalty-v2/programs/activateloyaltyprogram) your loyalty program.
- [Customize](wix-loyalty-v2/programs/updateloyaltyprogram) the name of the program, as well as the name and icon of the loyalty points unit.

To use the Loyalty Programs API, import `{ programs }` from the `wix-loyalty.v2` module. 

```javascript
import { programs } from 'wix-loyalty.v2';
```

## Before you begin

It’s important to note the following points before starting to code:
- A Wix Loyalty Program must first be installed through your [dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Floyalty-accounts/wizard/) or the [Wix App Market](https://www.wix.com/app-market/loyalty) before the Loyalty APIs can be used. 
- A loyalty program only works with certain apps, such as Wix Bookings, Wix Events, Wix Pricing Plans, Wix Restaurants, or Wix Stores. One of those must be installed on your site before the loyalty program can be used.

## Terminology

- **Program name:** Customizable name of the loyalty program.
- **Point:** The collectible unit of the program. Use `pointDefinition` to customize the name and icon of these loyalty points. The default name `”Points”` translates and adjusts to singular based on context. Since a customized name doesn’t adjust based on context it is recommended to use the plural, for example `”Stars”`.
