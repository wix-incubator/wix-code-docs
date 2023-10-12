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

With Locations, site owners can define multiple physical locations for their business. This allows them to set individual opening hours for each location.

The Locations API allows you to:

+ [Get](wix-business-tools-v2/locations/getlocation), [list](wix-business-tools-v2/locations/listlocations), and [query](wix-business-tools-v2/locations/querylocations) existing locations.
+ [Create](wix-business-tools-v2/locations/createlocation), [update](wix-business-tools-v2/locations/updatelocation), and [archive](wix-business-tools-v2/locations/archivelocation) locations.
+ [Set a default location](wix-business-tools-v2/locations/setdefaultlocation) that is reflected in the site properties.

Read more about how site owners can manage their [location-specific bookings](https://support.wix.com/en/article/wix-bookings-offering-services-at-multiple-locations).

To use the Locations API, import `{ locations }` from `wix-business-tools.v2`:

```js
import { locations } from 'wix-business-tools.v2';
```

## Terminology

+ **Default location:** Location reflected in the site properties. This location is used on invoices.
+ **Type:** Describes whether a location is an office, reception, branch or the headquarters.
+ **Status:** Indicates whether a location is `ACTIVE` or `INACTIVE`.
+ **Business Schedule:** Describes the location's regular and exceptional opening hours.
+ **Period:** Regular, weekly recurring opening hours of the location.
+ **Special Hour Period:** Exception to the location's regular hours. The location can be either open or closed during the Special Hour Period.

## Before you begin

It’s important to note the following points before starting to code:

+ The Wix Bookings API doesn't support the `businessSchedule` object.
+ You can't delete a location. Instead, you can archive a location using the [`archiveLocation()`](wix-business-tools-v2/locations/archivelocation) function.
+ You can't archive the default location.
+ Archived locations can't be unarchived.
+ The [`updateLocation()`](wix-business-tools-v2/locations/updatelocation) function replaces an existing location with a new location. Currently, you can't partially update a location.
+ Currently, the location type is just informational and doesn't affect a location's functionality.
+ The status `INACTIVE` isn't currently supported.

## Permissions information

Functions in the Locations API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>
