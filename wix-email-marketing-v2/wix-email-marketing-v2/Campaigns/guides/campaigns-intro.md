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

- [Get](/campaigns/get-campaign) or [list](/campaigns/list-campaigns) email campaigns.
- [Create a draft copy](/campaigns/reuse-campaign) of an existing campaign. 
- [Permanently delete](/campaigns/delete-campaign) a campaign. 
- [List statistics](/campaigns/list-statistics) and [list recipients](/campaigns/list-recipients) of campaigns.
- [Pause](/campaigns/pause-scheduling) a scheduled campaign.
- [Publish](/campaigns/publish-campaign) a campaign or [send a test](/campaigns/send-test) email.


To use the Campaigns API, import `campaigns` from the `wix-email-marketing.v2` module:

```js
import { campaigns } from `wix-email-marketing.v2`;
```
