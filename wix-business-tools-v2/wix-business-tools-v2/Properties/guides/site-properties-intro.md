---
title: Introduction
---

# Introduction

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>Some functions in this module are in Developer Preview. APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview"> Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving these functions. Your feedback is valuable to us.</span>
</div>

&nbsp;

The Site Properties API
holds all the public information about the site and business in a single place,
including profile, contact details, schedule information, and consent policy.

You can manage your site properties
using the [Business Info][dashoard-business-info] page in the site dashbaord.

The Site Properties API allows you to:

- Read all site properties.
- Manage your business contact details, business schedule,
  region and locale settings, and default consent policy for visitors.

For more information about managing your site properties,
see [Adding Your Site's Business Information][kb-adding-business-info].

To use the Site Properties API,
import `{ properties }` from wix-business-tools.v2:

```js
import { properties } from 'wix-business-tools.v2';
```

## About consent policy

To help you comply with regulation guidelines such as GDPR and CCPA,
Wix has enabled a consent policy and adherence to the GDPR.
You can access and manage the default consent policy set for a site.

The consent policy includes these types:

- **Functional**:
  Used to remember choices users make to improve their experience
  (for example, language).
- **Analytics**:
  Lets you and installed apps understand how visitors use the website
  (for example, which pages they visit),
  provide statistics on how the website is used,
  and improve the website by identifying any errors and performance issues.
- **Advertising/Marketing**:
  Used to collect information about the impact of marketing campaigns
  performed in other websites on users and non-users.
- **Essential**:
  Lets the visitor move around the website
  and use essential features like secure and private areas.
- **Data To Third Parties**:
  Lets you and installed apps share data with other parties.
  This includes the sale of data,
  as well sharing data for essential or enhanced functionality
  (for example, Google Analytics).
  Specifically for CCPA compliance.

For more information about the consent policy process, see the following:

- [Displaying a Cookie Banner On Your Site](https://support.wix.com/en/article/displaying-a-cookie-banner-on-your-site)
- [Adding a "Do Not Sell Data" Link to Your Wix Site](https://support.wix.com/en/article/adding-a-do-not-sell-data-link-to-your-wix-site)
- [Important Information About Editor Elements - Third Party Apps](https://support.wix.com/en/article/important-information-about-editor-elements-third-party-apps-custom-code-and-the-cookie-banner#third-party-apps)

[dashboard-business-info]: https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fsettings/business-info
[kb-adding-business-info]: https://support.wix.com/en/article/adding-your-sites-business-information