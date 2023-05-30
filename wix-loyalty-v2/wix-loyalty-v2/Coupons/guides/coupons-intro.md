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

The Loyalty Coupons API allows you to create loyalty coupons when a customer [redeems their loyalty points](#redeempointsforcoupon) for loyalty rewards.

To use the Loyalty Coupons API, import `{ coupons }` from the `wix-loyalty.v2` module. 

```javascript
import { coupons } from 'wix-loyalty.v2';
```

## Terminology

- **Loyalty coupon:** A specific loyalty object that holds the specifications used to create a reference [coupon](https://dev.wix.com/api/rest/coupons/about-wix-coupons).
- **Reference coupon:** The actual [coupon](https://dev.wix.com/api/rest/coupons/about-wix-coupons) that is created when loyalty points are redeemed for a loyalty reward. The customer receives the reference coupon which they can apply to their order.
