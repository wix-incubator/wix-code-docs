---
title: Introduction
---
# Introduction

With the RSVP API you can access the information on guests who have RSVP'ed to an event. This API is useful for managing guests lists and to see who has already checked into an event.    

When a guest responds to a RSVP registration form, a new RSVP is created and a confirmation email is sent.    

If you limit the number of guests, the registration will close once the guest list reaches capacity. You have the option to enable a waitlist, allowing site visitors to sign up and receive email notifications when additional space becomes available for the event.    

With the RSVP API you can:

- Create, delete, and update RSVPs.
- Check-in guests.
- Get the information about RSVPs.

## Before you begin

It’s important to note the following points before starting to code:  

- Install the **Wix Events & Tickets** app from [Wix App Market](https://www.wix.com/app-market/wix-events?referral=category&appIndex=5&referralTag=booking--events).
- Once you create an RSVP event, it can't be updated to a ticketed event.
- To use the RSVP API, import `{ rsvp }` from the `wix-events.v2` module:

```javascript
import { rsvp } from 'wix-events.v2';
```

## Terminology

- **Guest**: The individual who has been invited to the event.
- **RSVP**: A response from the guest indicating whether they plan to attend the event.
- **Check-in**: The process of verifying a guest's attendance at the event.
- **Guest list**: A summary of all guests who have been invited to the event.
- **Event**: A gathering organized by an individual or business for a group of people.