---
title: Introduction
---
# Introduction

With the Schedule API you can share the lineup of an event’s activities, presentations, performances, or sessions. Guests can make a personalized agenda with their chosen items by [bookmarking them](https://www.wix.com/velo/reference/wix-events-v2/schedulebookmarks/introduction). The created schedule will appear on your Event Details page.    

With the Schedule API you can:

- Add, delete, update schedule items.
- Adjust time of all draft schedule items at once.
- Publish or discard draft schedule.
- Get the information about schedules.

## Before you begin

It’s important to note the following points before starting to code:  

- Install the **Wix Events & Tickets** app from [Wix App Market](https://www.wix.com/app-market/wix-events?referral=category&appIndex=5&referralTag=booking--events).
- To use the Schedule API, import `{ schedule }` from the `wix-events.v2` module:

```javascript
import { schedule } from 'wix-events.v2';
```

## Terminology

- **Schedule**: A structured plan or timetable that outlines the sequence of activities, presentations, performances, or sessions scheduled to occur during an event.
- **Schedule item**: A specific activity, presentation, performance, or session listed within the overall schedule of an event. Each schedule item represents a distinct component of the event's agenda and may include details such as the activity name, time slot, location, and any additional information relevant to the event's program.
- **Event**: A gathering organized by an individual or business for a group of people.