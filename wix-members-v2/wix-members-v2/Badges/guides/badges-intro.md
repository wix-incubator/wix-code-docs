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
> __Note__: This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.
-->

The Badges API enables you to create badges on your website, and assign them to site members, either from your site dashboard, or from your live site. Badges are set up in your site dashboard. Wix does not provide preset badges.

Badges assigned to specific site members help them stand out from other members. You can use badges to create specific categories of members within your site.

With the Badges API, you can customize how badges are created and assigned, including, for example, automating creation of specific categories of members who will recieve a given badge, or delegating assignment of badges to site members themselves.

Learn more [about member badges](https://support.wix.com/en/article/about-member-badges).

To use the Badges API,
import `badges` from wix-members.v2:

```js
import { badges } from 'wix-members.v2';
```

## Terminology

* **Badge**: a visible label to be displayed on a site member's profile. A badge has a name (mandatory), an icon, and a background color.

## Before you begin

* Badge permissions - badges can grant site members special permissions to access specific pages.  You can [set badge permissions](https://support.wix.com/en/article/setting-permissions-for-a-member-badge) in the Site Members area of the dashboard.  Badge permissions can't be set in the API.  Site members receive permissions once a permission-granting badge is assigned to them.  

* Member permissions cannot be managed via the badges API. You must set them in the site's dashboard.
