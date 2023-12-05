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

> **Note:** This module is
> [universal](/api-overview/api-versions#universal-modules).
> Functions in this module can run on both the backend and frontend,
> unless specified otherwise.

The Wix Business Tools API enables you to retrieve and manage business information for a Wix site.

With the Wix Business Tools API, you can:
+ Retrieve, create, modify, and delete [locations](https://www.wix.com/velo/reference/wix-business-tools-v2/locations).
+ Retrieve and modify [site properties](https://www.wix.com/velo/reference/wix-business-tools-v2/siteproperties).

Access and manage your site's [business info](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fsettings/business-info) in the site dashboard. For more information about managing your site's business info, see [Adding Your Site's Business Information](https://support.wix.com/en/article/adding-your-sites-business-information).

To use the Business Tools API, import `businessTools` from `wix-business-tools.v2`:

```js
import businessTools from 'wix-business-tools.v2';
```

## Terminology

+ **Business schedule:** Describes the location's regular and exceptional opening hours.
+ **Period:** Recurring, weekly opening hours of the location.
+ **Special hour period:** Exception to the location's regular hours. The location can be either open or closed during the special hour period.
+ **Default location:** Location reflected in the site properties. This location is used on invoices.
