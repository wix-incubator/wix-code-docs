---
title: Introduction
---
# Introduction

> **Note**: This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.

With the Schedule Bookmarks API you can allow members to mark their favorite [schedule items](https://www.wix.com/velo/reference/wix-events-v2/schedule/introduction) to curate their own personalized agenda for your event.    

With the Schedule Bookmarks API you can:

- Create and delete bookmarks.
- List all bookmarks per member.

## Before you begin

It’s important to note the following points before starting to code:  

- Install the **Wix Events & Tickets** app from [Wix App Market](https://www.wix.com/app-market/wix-events?referral=category&appIndex=5&referralTag=booking--events).
- To use the Schedule Bookmarks API, import `{ scheduleBookmarks }` from the `wix-events.v2` module:

```javascript
import { scheduleBookmarks } from 'wix-events.v2';
```

## Terminology

- **Schedule**: A structured plan or timetable that outlines the sequence of activities, presentations, performances, or sessions scheduled to occur during an event.
- **Event**: A gathering organized by an individual or business for a group of people.