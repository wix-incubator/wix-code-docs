---
title: Introduction
---

# About the External Calendars API


&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
  <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;


The External Calendars API enables you to connect and sync a Wix site with external calendars.

With External Calendars, you can:

+ Establish a connection between a Wix site and an external calendar account.
+ Import events to a Wix site from a connected external calendar.
+ Export events from a Wix site's calendar to a connected external calendar.
+ Retrieve information about calendars belonging to an external calendar account.
+ Retrieve information about support for external calendar providers. 

The External Calendars API provides built-in support for Google, Microsoft, and Apple calendars. Integration with additional external calendars can be enabled by installing a calendar integration app from the Wix App Market.

## Before you begin

It’s important to note the following points before starting to code:

+ External calendar providers have different requirements for authentication. Use [`listProviders()`](#listProviders) to find out whether to connect with a provider using [`connectByOAuth()`](#connectByOAuth) or [`connectByCredentials()`](#connectByCredentials).
+ A connection’s `syncConfig` property contains settings for the external calendar connection, including whether importing and/or exporting of calendar events is enabled.
* Only site collaborators with [Bookings roles](https://support.wix.com/en/article/roles-permissions-overview) can book or edit their bookings. You can override the permissions with the [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.


## Terminology

+ **External calendar**: A calender hosted by a third-party calendar service.
+ **External calendar provider**: The third-party service providing an external calendar. For example: Google, Apple, or Microsoft.
+ **External calendar connection**: A linkage established between a Wix site’s calendar and one or more external calendars, to enable importing and/or exporting calendar events.
+ **Event**: A single session or recurring session instance that appears in a specific block of time in a calendar, such as an appointment or class.
+ **Schedule**: Collection of all sessions that belong to the same class, course, appointment, or resource in a Wix site's calendar.

To use the External  Calendar API, import `{ externalCalendars }` from the `wix-bookings.v2` module:

```javascript
import { externalCalendars } from 'wix-bookings.v2';
```