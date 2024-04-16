---
title: Introduction
---
# Introduction

> **Note**: This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.

With the Event Guests API, site owners can get information about all guests who bought tickets to an event or who RSVP'ed. The information includes guest names, email addresses, tickets, RSVP status, and so on. This makes it easier to build custom functionality around event management, such as sending custom notifications to guests, managing event capacity, and generating reports on attendance.

The Event Guests API allows you to:  

* Retrieve a list of guests by event ID.
* Get information about each individual ticket buyer.
* Find out the attendance status of each guest.

## Terminology

- **Guest**: The individual who has been invited to the event.
- **RSVP**: A response from the guest indicating whether they plan to attend the event.
- **Ticket buyer**: The individual who bought 1 or more tickets to the event.
- **Check-in**: The process of verifying a guest's attendance at the event.
- **Guest list**: A summary of all guests who have been invited to the event.
- **Organizer**: The person or entity responsible for planning and hosting the event.

## Before you begin

It’s important to note the following points before starting to code:  

- To use the Events Guests API, import `{ guests }` from the `wix-events.v2` module:

```javascript
import { guests } from 'wix-events.v2';
```



