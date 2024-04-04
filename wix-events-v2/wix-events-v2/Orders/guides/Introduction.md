---
title: Introduction
---
# Introduction

With the Orders API you can manage and track ticket orders, create/cancel tickets reservations, and check out the reserved tickets.    

To get yourself comfortable with creating ticket reservation and checkout flows, you can check out these Velo example sites:

- [Custom Event Ticket Picker](https://www.wix.com/velo/example/custom-event-ticket-picker-on-events-frontend)
- [Custom Event Ticket Purchase Flow](https://www.wix.com/velo/example/custom-event-ticket-purchase-flow)

Even though these examples are for the `wix-events-frontend` module, they still can be a great start to practice the flows.

With the Orders API you can:

- Get a list of all orders.
- Update an order or change its status.
- Get a summary of total ticket sales.
- Create and cancel ticket reservation.
- Checkout tickets.
- Get an invoice.

## Before you begin

It’s important to note the following points before starting to code:  

- Install the **Wix Events & Tickets** app from [Wix App Market](https://www.wix.com/app-market/wix-events?referral=category&appIndex=5&referralTag=booking--events).
- If a site visitor closes a tab after placing an order, or the reservation time (20 minutes) runs out, the order is automatically cancelled after 2 hours.
- To use the Orders API, import `{ orders }` from the `wix-events.v2` module:

```javascript
import { orders } from 'wix-events.v2';
```

## Terminology

- **Order**: Process by which a customer or attendee purchases one or more tickets for an event or activity. It involves the selection of desired tickets, providing necessary information such as payment details and contact information, and completing the transaction to secure the tickets.
- **Event**: A gathering organized by an individual or business for a group of people.