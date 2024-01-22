---
title: Introduction
---

# About the Sessions API

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;

> **Note:** This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.

The Wix Sessions API enables you to access and manage sessions in the business calendar.

A session is any occupied period of time in a schedule. Sessions are the building blocks of appointments, classes, and courses.

With the Sessions API, you can:

+ Create, update, and delete sessions in the business calendar.
+ Retrieve information about a specific session or multiple sessions.
+ Query session instances in the calendar between specified dates.
+ Query sessions with advanced filtering and paging functionality.


To use the Sessions API, import `{ sessions }` from the `wix-bookings.v2` module:

```javascript
import { sessions } from 'wix-bookings.v2';
```

## Before you begin

It's important to note the following points before starting to code:

+ To query all event instances within a time range of up to 1 year, use [`querySessions()`](https://www.wix.com/velo/reference/wix-bookings-v2/sessions/querysessions) with the `options.startDate` and `options.endDate` parameters, and with `options.type` set to `EVENT`.
+ By default, [`getSession()`](https://www.wix.com/velo/reference/wix-bookings-v2/sessions/getsession), [`querySessions()`](https://www.wix.com/velo/reference/wix-bookings-v2/sessions/querysessions), and [`listSessions()`](https://www.wix.com/velo/reference/wix-bookings-v2/sessions/listsessions) return session objects without personal information. To retrieve full session objects including personal information, use the `ALL_PI` [fieldset](https://www.wix.com/velo/reference/wix-bookings-v2/sessions/fieldsets).
+ Use [`listSessions()`](https://www.wix.com/velo/reference/wix-bookings-v2/sessions/listsessions) for retrieving multiple sessions by their IDs. Use [`querySessions()`](https://www.wix.com/velo/reference/wix-bookings-v2/sessions/querysessions) to retrieve based on other filters.
+ The [`querySessions()`](https://www.wix.com/velo/reference/wix-bookings-v2/sessions/querysessions) function sorts results by `start.timestamp` in ascending order. You can't override this default sorting.

## Terminology

+ __Calendar:__ General overview about the availability and bookings of the business, including its services and resources.
+ __Session:__ An occupied period of time on a schedule. A session of type `EVENT` is a recurring or single session that appears in a specific block of time in a calendar, such as an appointment or class.
+ __Recurring session:__ A recurring session defines a pattern for repeating sessions that occur on a regular basis.
+ __Slot:__ An available period of time in a schedule that can be booked by a customer.
+ __Resource:__ Business asset like a staff member, room, or equipment that's needed to provide a service.
+ __Schedule:__ Collection of all sessions that belong to the same class, course, appointment, or resource.
