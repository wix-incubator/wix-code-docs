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

The Notifications API provides functionality for sending notifications. Notifications are messages that are sent to the site dashboard, Wix app, or browser of your site's [contributors](https://support.wix.com/en/article/roles-permissions-overview).

To learn more about notifications, see [About Your Dashboard Notifications](https://support.wix.com/en/article/about-your-dashboard-notifications).

## Permissions information

Functions in the Notifications API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>

## Before you begin

To use the Notifications API, import `notifications` from the `wix-notifications.v2` module:

```javascript
import { notifications } from "wix-notifications.v2";
```