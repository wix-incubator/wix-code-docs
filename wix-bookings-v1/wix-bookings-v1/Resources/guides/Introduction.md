---
title: Introduction
---

# About the Bookings Resources API

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;

> **Note:** This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.

The Bookings Resources API provides functionality for creating and managing resources.

A resource is a business asset like a staff member, or equipment needed to provide a service. Each resource owns a schedule. The schedule defines the resource's availability using the business's default working hours. Resources have tags that you can use for grouping. For example, add a `"room"` tag for classroom resources, and an `"equipment"` tag for resources like computers and projectors.

With the Resources API, you can:

- [Create](https://www.wix.com/velo/reference/wix-bookings.v1/resources/createresource) and [delete](https://www.wix.com/velo/reference/wix-bookings.v1/resources/deleteresource) resources.
- [Update](https://www.wix.com/velo/reference/wix-bookings.v1/resources/updateresource) a resource. 
- [Update](https://www.wix.com/velo/reference/wix-bookings.v1/resources/updateschedule) a resource's schedule.


To use the Resources API, import `{ resources }` from the `wix-bookings.v1` module:

```javascript
import { resources } from 'wix-bookings.v1';
```

## Before you begin

It's important to note the following points before starting to code:

- There are 2 tags that are used by the Wix Bookings app:
    - `"staff"`: Resources with the `"staff"` tag appear in the Bookings app's **Staff** page.
    - `"business"`: The Bookings app creates a resource with a name and tag value of `"business"`. This resource owns a schedule that contains the operating hours of the business and cannot be deleted. This schedule is used when creating resources that use the business’s operating hours for the resource's working hours.
- You can have up to 135 active resources and an additional 135 deleted resources.
- A resource can have one schedule only.
- When updating a resource's schedule you cannot change the system tags used by the Wix Bookings app. Tags used by the app have the values `"INDIVIDUAL"`, `"GROUP"`, and `"COURSE"`.


## Terminology

+ __Resource:__ Business asset like a staff member, room, or equipment that's needed to provide a service.
+ __Schedule:__ Collection of all sessions that belong to the same class, course, appointment, or resource.


## Permissions information

Functions in the Bookings Resources API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>