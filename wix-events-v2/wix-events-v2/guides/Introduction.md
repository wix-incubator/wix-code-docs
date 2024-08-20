---
title: Introduction
---
# Introduction

[Wix Events](https://support.wix.com/en/article/about-wix-events) allows site owners to create and manage events, including ticket sales, order tracking, and event policy management.    

Wix Events include the following APIs:  
- [WixEvents](https://www.wix.com/velo/reference/wix-events-v2/wixeventsv2): Manage events.
- [Ticket Definitions](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions): Manage the types of tickets available for purchase (for ticketed events).
- [Tickets](https://www.wix.com/velo/reference/wix-events-v2/tickets): Retrieve information about the purchased tickets and check them in.
- [RSVP](https://www.wix.com/velo/reference/wix-events-v2/rsvp): Manage guest RSVP statuses (for RSVP events).
- [Categories](https://www.wix.com/velo/reference/wix-events-v2/categories): Create and assign various categories for events.
- [Orders](https://www.wix.com/velo/reference/wix-events-v2/orders): Manage and track ticket reservations, checkout, and orders.
- [Forms](https://www.wix.com/velo/reference/wix-events-v2/forms): Manage event registration forms.
- [Schedule](https://www.wix.com/velo/reference/wix-events-v2/schedule): Create a detailed schedule for an event.
- [Schedule Bookmark](https://www.wix.com/velo/reference/wix-events-v2/schedulebookmarks): Bookmark a schedule item for a site member.
- [Guests](https://www.wix.com/velo/reference/wix-events-v2/guests): Get information about all guests who bought tickets to an event or who RSVP'ed.
- [Policies](https://www.wix.com/velo/reference/wix-events-v2/policies): Create and reorder event policies in the dashboard or checkout form.  

## Before you begin

It’s important to note the following points before starting to code:  

- Install the **Wix Events & Tickets** app from [Wix App Market](https://www.wix.com/app-market/wix-events?referral=category&appIndex=5&referralTag=booking--events).
- A Wix service fee of 2.5% is charged for each ticket sold in ticketed events. This fee can either be passed on to the buyer or absorbed by the event owner.
- To use the `wix-events.v2` API, import the `wix-events.v2` module.

```js
import * from 'wix-events.v2';
```

## Terminology
- **Event**: A gathering organized by an individual or business for a group of people. Our APIs support the following types of events:
  - **RSVP**: Non-ticketed events for which guests indicate whether they plan to attend.
  - **Ticketed events**: Events with tickets available for sale.
  - **External registration events**: Events where registration occurs on a different website, and Wix only displays event information.
- **Ticket definition**: Settings defining the ticket options available for purchase for ticketed events. Each ticket definition requires a name, price, and currency.
- **Policy**: Text that defines terms & conditions, as relevant.
- **Guest**: The individual who has been invited to the event.
- **Ticket buyer**: An individual who purchases 1 or more tickets to the event.
- **Check-in:** The process of verifying a guest's attendance at the event.
- **Guest list**: A summary of all guests who have been invited to the event.
- **Organizer**: The person or entity responsible for planning and hosting the event.
- **Event Dashboard**: Control center, which allows you to manage your site events settings and features.
- **Checkout form**: The final step in the ticket purchasing process where the customer fills in personal info, reads policies, and pays.