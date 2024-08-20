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
The Loyalty Tiers API allows you to create a levels-based program that assigns loyalty accounts to different tiers based on the amount of points they have earned.  

With the Loyalty Tiers API, you can:
- [Create](#createtier) and [update](#updatetier) individual tiers.
- [Update](#updatetiersprogramsettings) settings that apply globally to the tiers program.  

For more information about loyalty tiers, see [Adding Tiers to Your Loyalty Program](https://support.wix.com/en/article/wix-loyalty-program-adding-tiers-to-your-loyalty-program).  

To use the Loyalty Tiers API, import `{ tiers }` from the `wix-loyalty.v2` module. 

```javascript
import { tiers } from 'wix-loyalty.v2';
```

## Before you begin  

It's important to note the following points before starting to code:
- The site must have a [Business VIP Premium Plan](https://support.wix.com/en/article/business-vip-premium-plan-overview) or a [Scale Premium Plan](https://support.wix.com/en/article/editor-x-scale-premium-plan-overview) to add tiers.
- The site must have at least one of these apps: Wix Bookings, Wix Events, Wix Pricing Plans, or Wix Stores.
  >**Note:** Currently, tiers cannot be added to Wix Restaurants loyalty programs.
- The tiers program `status` must be manually set to `ACTIVE`. Use [`updateTiersProgramSettings()`](#updatetiersprogramsettings) to update the `status` or enable tiers from a site owner's [dashboard](https://manage.wix.com/account/site-selector/?actionUrl=https%3A%2F%2Fwww.wix.com%2Fdashboard%2F%7BmetaSiteId%7D%2Floyalty-accounts%2Fmanage%3Ftab%3Dpoints-and-rewards&title=Select+a+Site&primaryButtonText=Select+Site).
- The Loyalty Tiers API does not handle rules for earning points based on your tier. A site owner may adjust those settings from their dashboard. See [Assign ways to earn to each tier](https://support.wix.com/en/article/wix-loyalty-program-adding-tiers-to-your-loyalty-program#step-2-assign-ways-to-earn-and-rewards-to-each-tier).

## Terminology  

- **Tiers program settings:** Settings that apply globally to the overall tiers program.  
- **Base tier:** A default tier for any loyalty account that is unassigned for not meeting the required points threshold of any other tier. The base tier requires `0` points, has no `tierId`, and is not returned as a tier when [`listTiers()`](#listtiers) is called. When a tiers program status is `PAUSED` or `DISABLED` all of the loyalty accounts are assigned to the base tier.
- **Rolling window:** Period of time used to calculate loyalty points for tier assignment. The total points earned and adjusted during this period determine if the account meets a tier's required point threshold. The window is recalculated every 15 minutes or if a new tier event triggers.
- **Points earned and adjusted:** Tier assignment is based on the total amount of loyalty points earned and adjusted over the period of time in a `rollingWindow`. If an account redeems points during that period, the points that were earned still count towards tier assignment even if that leaves the remaining points balance below the tier's required point threshold. Similarly, if the current points balance for a loyalty account is above a tier's required points threshold, but those points were earned in a time period earlier than the `rollingWindow` then those points are not considered for tier assignment.
