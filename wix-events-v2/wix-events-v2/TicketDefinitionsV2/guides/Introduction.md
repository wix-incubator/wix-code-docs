---
title: Introduction
---
# Introduction

With the Ticket Definitions v2 API, you can define tickets for your event. A definition includes the following ticket settings:

- Fee type. Determine whether the fee will be paid by a guest or a seller.
- Pricing. Define different ticket prices based on factors such as early bird discounts, VIP packages, group rates, or special promotions. Several pricing methods are available for you to select from: **Fixed price**, **Guest price**, **Free**. Additionally, you can customize prices for different groups of people using **Price options**.
- Availability. Set the ticket limit available to buy. Also, you are able to check number of purchased or reserved tickets.
- Sale period. Set the sale start and end dates. Also, when defining the sale period, it is possible to choose to display event tickets to customers even before the sale starts.  

With the Ticket Definitions v2 API you can:

- Create, delete, and update definitions.
- Change the definitions order in an event dashboard and the list of available tickets in the ticket picker.
- Get the information about ticket definitions.

## Before you begin

It’s important to note the following points before starting to code:  

- Install the **Wix Events & Tickets** app from [Wix App Market](https://www.wix.com/app-market/wix-events?referral=category&appIndex=5&referralTag=booking--events).
- Once you create a ticketed event, it cannot be updated to a RSVP event.
- Ticket definition is not the same as ticket. Ticket definitions are used to define settings for a set of tickets. After paying for selected tickets, the [`checkout`](https://www.wix.com/velo/reference/wix-events-v2/orders/checkout) function automatically generates the ticket.
- To use the Ticket Definitions v2 API, import `{ ticketDefinitionsV2 }` from the `wix-events.v2` module:

```javascript
import { ticketDefinitionsV2 } from 'wix-events.v2';
```

## Terminology

- **Pricing method**: Different pricing methods are available for an event:
    - **Fixed price**: All tickets in the same definition are sold at the exact same price, regardless of when they are purchased or other factors.
    - **Guest price**: A minimum price a guest must pay for a ticket. For example, money goes to donation.
    - **Price options**: All tickets in the same ticket definition are priced at different rates, such as different prices for adults, children, and students.
- **Ticket availability**: The status of ticket inventory, indicating whether tickets are available or sold out. This type can also include availability limits and timeframes for ticket sales.
- **Sale period**: Duration of time during which event tickets are available for purchase. 
- **Event Dashboard**: Control center in the Wix site UI for managing site event settings and features.