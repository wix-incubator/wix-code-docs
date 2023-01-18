---
title: Introduction
---

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

> **Note:** This module is [universal](https://support.wix.com/https://www.wix.com/velo/reference/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.

Before using the `wix-stores.v2` functions, set up your site for Wix Stores. To learn more, see [Adding Wix Stores](https://support.wix.com/en/article/adding-wix-stores). When setting up your Wix Stores site, be sure to select the payment methods you want to offer and [set your payment currency](https://support.wix.com/en/article/setting-your-currency-for-accepting-payments).

## Import Statement

To use the Stores API, import `wixStoresV2` from the `wix-stores.v2` module:

```javascript
import wixStoresV2 from 'wix-stores.v2';
```
