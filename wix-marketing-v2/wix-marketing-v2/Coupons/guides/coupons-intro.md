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
> **Note:**
> This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.

The Coupons API allows you to create and manage coupons to promote loyalty and increase sales. Customers can then apply the coupon codes at checkout to take advantage of your offers. With the Coupons API, you can [create](#create) and [update](#update) your coupons.  

To use the Coupons API, import `{ coupons }` from the `wix-marketing.v2` module. 

```javascript
import { coupons } from 'wix-marketing.v2';
```

## Terminology

- **Scope:** The coupon scope defines the items a coupon applies to. You can apply a coupon to all items in a specific Wix application, a group within the application, or a single item within a group. See [Scope Values](#scopevalues) for a table of currently supported coupon scopes.  
