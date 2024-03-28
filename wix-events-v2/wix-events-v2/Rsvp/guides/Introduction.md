---
title: Introduction
---
# Introduction

With the RSVP API you can access the information on guests who have RSVP'ed to an event. This API is useful for managing guests lists and to see who has already checked in an event.    

When a guest responds to a RSVP registration form then a new RSVP is created, and a confirmation email is sent.    

If you limit the number of guests, the registration will close once the guest list reaches capacity. You have the option to enable a waitlist, allowing site visitors to sign up and receive email notifications when additional space becomes available for the event.    

With the RSVP API you can:

- Create, delete, update RSVP.
- Check-in a guest.
- Get the information about RSVP.

## Before you begin

It’s important to note the following points before starting to code:  

- Install the **Wix Events & Tickets** app from [Wix App Market](https://www.wix.com/app-market/wix-events?referral=category&appIndex=5&referralTag=booking--events).
- To use the RSVP API, import `{ rsvp }` from the `wix-events.v2` module:

```javascript
import { rsvp } from 'wix-events.v2';
```
- Once you create an RSVP event, it cannot be updated to a ticketed event.

## Terminology

- **Guest**: The individual who has been invited to the event.
- **RSVP**: A response from the guest indicating whether they plan to attend the event.
- **Check-in**: The process of verifying a guest's attendance at the event.
- **Guest list**: A summary of all guests who have been invited to the event.
- **Event**: A gathering organized by an individual or business for a group of people.