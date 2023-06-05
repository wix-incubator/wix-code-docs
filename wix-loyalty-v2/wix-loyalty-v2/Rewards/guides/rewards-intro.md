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

# Introduction

The Loyalty Rewards API allows you to manage rewards that customers can redeem with their loyalty points. For example, you can create a reward that is redeemed for a coupon for free shipping or for a coupon with a discount that applies to an entire purchase.

With the Loyalty Rewards API, you can [create](#createreward) and [update](#updatereward) the rewards you offer.

To use the Loyalty Rewards API, import `{ rewards }` from the `wix-loyalty.v2` module. 

```javascript
import { rewards } from 'wix-loyalty.v2';
```

## Terminology

- **Discount amount:** A specific reward type that is only available for Wix Restaurants.
- **Coupon reward:** All other types of rewards other than “discount amount.” The details included here dictate what type of coupon will be created when this reward is redeemed.
