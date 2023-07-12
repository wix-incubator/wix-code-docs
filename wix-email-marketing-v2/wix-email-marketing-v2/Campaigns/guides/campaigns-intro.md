---
title: Introduction
---

# Introduction

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>


&nbsp;
> **Note:** This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise. 


The Campaigns API provides functionality for managing your email marketing campaigns. Use the API to [get](/getcampaign) and [publish](publishcampaign) a campaign, [list statistics](liststatistics), and [pause scheduling](pausescheduling). 


To use the Campaigns API, import `campaigns` from the `wix-email-marketing.v2` module:

```js
import { campaigns } from `wix-email-marketing.v2`;
```