---
title: Sample Flows
---

# Introduction
This article shares a possible use case your app could support, as well as a sample flow that could support this use case. This can be a helpful jumping-off point as you plan your app's implementation.

## Reservation app for restaurants on a Wix site
A company wants to build an app that allows customers to see available time slots and make reservations at any restaurant on a Wix site.

### Prerequisites
The site owner must do the following:
* Install the Table Reservations app. 
* Configure at least 1 location in the dashboard.
* Disable manual approval for online reservations at all locations.

### Flow
To create an app that allows customers to make reservations at restaurants listed on a site’s business info page, follow this basic flow:

1. Call [`List Reservation Locations`](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/reservation-locations/list-reservation-locations) in the Reservation Locations API to get a list of restaurant locations and present them to the customer to choose from.
2. When the customer selects a reservation location, record its ID and direct them to a page where they can enter party size and date. Pre-fill the date with the current date, and party size with 2. 
3. When the page initially loads, and whenever the party size or date changes, use the reservation location’s ID along with the selected party size and date to call [`Get Time Slots`](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/time-slots/get-time-slots) in the Time Slots API. Set `slotsBefore` and `slotsAfter` to your preferred values.
4. Using the information returned from `Get Time Slots`, find the start dates of time slots with the status `AVAILABLE` and present them for the customer to choose from. 
5. When a customer selects a time slot, call [`Create Held Reservation`](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/reservations/create-held-reservation) in the Reservations API with the selected reservation location ID, date, and party size.
6. Redirect the customer to a new page where they can enter their details and confirm their request for a reservation. 
7. When the customer confirms the request, call [`Reserve Reservation`](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/reservations/reserve-reservation) in the Reservations API to add the additional details to the reservation and change its status to `RESERVED`.
8. Notify the customer that their reservation has been approved. 
