---
title: Introduction
---
# Introduction

&nbsp;

## Permissions information

The following functions in the Resources API are restricted and only run if you elevate permissions
using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate)
function:

- [`createResource()`](https://www.wix.com/velo/reference/wix-bookings-v2/resources/createResource)
- [`updateResource()`](https://www.wix.com/velo/reference/wix-bookings-v2/resources/updateResource)
- [`updateResourceSchedule()`](https://www.wix.com/velo/reference/wix-bookings-v2/resources/updateResourceSchedule)
- [`deleteResource()`](https://www.wix.com/velo/reference/wix-bookings-v2/resources/deleteResource)

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>


The Bookings Resources API provides functionality for creating, managing, and querying resources.

A resource is a business asset like a staff member, or equipment needed to provide a service.
Each resource owns a schedule. The schedule defines the resource's availability. You can set up a custom schedule for a resource, use the business's default working hours, or combine the two.

Resources have tags that you can use for grouping. For example, add a `"room"` tag for classroom resources and an `"equipment"` tag for resources like computers and projectors.

There are 2 tags that are used by the Wix Bookings app:
- `"staff"`: Resources with the `"staff"` tag appear in the Bookings app's **Staff** page. 
- `"business"`: The Bookings app creates a resource with a name and tag value of `"business"`. This resource owns a schedule that contains the operating hours of the business and cannot be deleted. This schedule is used when creating resources that use the business’s operating hours for the resource's working hours.

You can have up to 135 active resources and an additional 135 deleted resources.

To use the Resources API, import `resources` from the `wix-bookings.v2` module:

```javascript
import { resources } from "wix-bookings.v2";
```