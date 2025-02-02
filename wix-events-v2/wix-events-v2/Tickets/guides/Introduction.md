---
title: Introduction
---
# Introduction

The Tickets API allows you to manage tickets for your site's events.

With the Tickets API you can:

- Archive tickets.
- Check in tickets, and delete ticket check-ins.
- Get the information about purchased tickets.


## Before you begin

It’s important to note the following points before starting to code:  

- Install the **Wix Events & Tickets** app from [Wix App Market](https://www.wix.com/app-market/wix-events?referral=category&appIndex=5&referralTag=booking--events).
- This API is not relevant for RSVP events.
- To use the Tickets API, import `tickets` from the `wix-events.v2` module:

```js
import { tickets } from 'wix-events.v2';
```
