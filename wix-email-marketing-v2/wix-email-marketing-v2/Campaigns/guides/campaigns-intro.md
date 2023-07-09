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


The Campaigns API provides functionality for managing your email marketing campaigns. 

With the Campaigns API you can: 

- [Get](wix-email-marketing-v2/campaigns/getcampaign) or [list](wix-email-marketing-v2/campaigns/listcampaigns) email campaigns.
- [Create a draft copy](wix-email-marketing-v2/campaigns/reusecampaign) of an existing campaign. 
- [Permanently delete](wix-email-marketing-v2/campaigns/deletecampaign) a campaign. 
- [List statistics](wix-email-marketing-v2/campaigns/liststatistics) and [list recipients](wix-email-marketing-v2/campaigns/listrecipients) of campaigns.
- [Pause](wix-email-marketing-v2/campaigns/pausescheduling) a scheduled campaign.
- [Publish](wix-email-marketing-v2/campaigns/publishcampaign) a campaign or [send a test](wix-email-marketing-v2/campaigns/sendtest) email.


To use the Campaigns API, import `campaigns` from the `wix-email-marketing.v2` module:

```js
import { campaigns } from `wix-email-marketing.v2`;
```

## Permissions information

Functions in Campaign API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>