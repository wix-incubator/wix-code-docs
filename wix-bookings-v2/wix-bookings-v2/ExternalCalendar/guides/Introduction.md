# About the External Calendars API

The External Calendars API enables an app to connect and sync a Wix site with external calendars.

With External Calendars, you can:

+ Establish a connection between a Wix site and an external calendar account.
+ Import events to a Wix site from a connected external calendar.
+ Export events from a Wix site's calendar to a connected external calendar.
+ Retrieve information about calendars belonging to an external calendar account.
+ Retrieve information about support for external calendar providers.

The External Calendars API provides built-in support for Google, Microsoft, and Apple calendars. Integration with additional external calendars can be enabled by installing a calendar integration app from the Wix App Market.

## Before you begin

It’s important to note the following points before starting to code:

+ External calendar providers have different requirements for authentication. Use [List Providers](https://dev.wix.com/api/rest/wix-bookings/external-calendars-v2/list-providers) to find out whether to connect with a provider using [Connect By OAuth](https://dev.wix.com/api/rest/wix-bookings/external-calendars-v2/connect-by-o-auth) or [Connect By Credentials](https://dev.wix.com/api/rest/wix-bookings/external-calendars-v2/connect-by-credentials).
+ A connection’s `syncConfig` property contains settings for the external calendar connection, including whether importing and/or exporting of calendar events is enabled.

## Terminology

+ **External calendar**: A calender hosted by a third-party calendar service.
+ **External calendar provider**: The third-party service providing an external calendar. For example: Google, Apple, or Microsoft.
+ **External calendar connection**: A linkage established between a Wix site’s calendar and one or more external calendars, to enable importing and/or exporting calendar events.
+ **Event**: A single session or recurring session instance that appears in a specific block of time in a calendar, such as an appointment or class.
+ **Schedule**: Collection of all sessions that belong to the same class, course, appointment, or resource in a Wix site's calendar.
