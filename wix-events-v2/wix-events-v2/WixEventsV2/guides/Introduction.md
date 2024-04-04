---
title: Introduction
---
# Introduction

With the Wix Events v2 API you can create and manage events on your site. This API can be used to create sites for concerts, sport camps, city tours, weddings, and so on.    

The Wix Events v2 API allows you to:  

- **Create/clone an event**. Create an event by defining some properties, such as location, date and time, registration type, etc. In case you have several similar events, you don't have to create a new one each time. You can quickly clone an existing event and refine it by changing some of the properties.
- **Update event** with the newest information about the event.
- **Publish draft event** if you initially created an event as a draft.
- **List events by category** to have a full list of events that belong to the same category.
- **Get/Query events** to get information about each individual event that matches a filter.
- **Bulk delete/cancel events** by filter. Save time and effort when managing event by removing/canceling multiple events at once based on specific filters.

## More about events

The main defining characteristics for events are:

- **Registration types**. These registration types define what type of event they are registering for:
    - **Ticketing**: Customers register by buying tickets. You can create and sell tickets, set currency, handle taxes. For more information, see the [Ticket Definitions](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/introduction) API.
    - **RSVP**: Customers register by responding with an RSVP without buying tickets. Invitees can RSVP whether they're going to an event. If the guest limit is reached, you can open a waitlist. Additionally, user can set whether guests can see other guests attending the event.
    - **External**: Customers register by either buying tickets or RSVPing on an external platform. You can display events on your site, while enabling ticket sales or RSVP management through an external platform.
    - **No registration**: Customers do not register. This is for displaying events only.

- **Date and time**. When defining an event, the event must have a date and time. The event can be either single, or recurring:
    - **Single event**: Happens once and can last multiple days, like a 3-day conference.
    - **Recurring event**: A series of events that repeat, like a workshop that happens once a week. Once you publish the recurring event, you can manage the dates for each individual separately.

- **Location**. The event can happen in:
    - **Physical location**: The event happens in a specific venue or physical space, like a conference hall or concert venue.
    - **Online**: The event happens online through a video conference.

## When defining event registration

- All events initially have a `registration.type` of either `RSVP` or `TICKETING`, which is the same as the `registration.initialType` property (this property remains unchanged). 
- To manage event registration externally using another platform, provide an external event registration URL in the `registration.external.url` field. After doing this, the registration type becomes `EXTERNAL`, and directs guests to the specified external URL for registration. The existing guest list, originally managed by the Events API, still exists but no longer is maintained by the API. Make sure to manage the guest list from the external platform.
- To indicate that guests do not need to register for the event, you can set the `registration.registrationDisabled` property to `true`. After doing this, the `registration.type` value becomes `NONE`.

## Before you begin

It’s important to note the following points before starting to code:  

- Install the **Wix Events & Tickets** app from [Wix App Market](https://www.wix.com/app-market/wix-events?referral=category&appIndex=5&referralTag=booking--events).
- When an event is created as a ticketed event, it cannot be updated to an RSVP event and vice versa.
- When there is 1 day left until the event, an automated reminder notification is sent to your customer.
- To use the Wix Events v2 API, import `{ wixEventsV2 }` from the `wix-events.v2` module:

```javascript
import { wixEventsV2 } from 'wix-events.v2';
```

## Terminology

- **Event**: A gathering that an individual or a business holds for a group of people.
- **RSVP**: A response from the guest indicating whether they plan to attend the event.
- **Registration**: The process by which individuals sign up to attend an event.  
- **Attendee**: An individual who plans, to or has registered to, participate in an event.
- **Category**: A classification assigned to events based on their purpose or theme.
- **Organizer**: The person or entity responsible for planning and hosting the event.
- **TBD**: Event locations and dates can be “to be determined” yet the event can still be created and offered.