---
title: Introduction
---

The Reservations Locations API allows you to configure reservation settings for a restaurant location. 

A reservation location represents a physical restaurant and holds the ID of a [`location`](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/introduction) object. The location object holds the address that corresponds to the on-site location of that restaurant (except when the restaurant has no on-site location). Each reservation location has its own calendar, scheduling rules, table management settings, and other attributes that can be set and modified by the API.

With the Reservations Locations API, you can:
* Query or list reservation locations.
* Update the configuration of existing reservation locations.
  
>**Note:** Reservation locations can only be created and archived through the Dashboard, or using the [Locations API](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/introduction).

Once a reservation location has been configured, you can:
* Retrieve time slots for the location using the [Time Slots API](https://www.wix.com/velo/reference/wix-table-reservations-v2/timeslots).
* Make reservations for the location using a Wix site, or the [Reservations API](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservations).

## Before you begin
This API requires that you install the Wix Table Reservations app.
## Terminology
* **Reservation:** A specific time period reserved for one or more guests to dine at a particular restaurant.
* **Turnover time:** How much time a party needs for the entire reservation - from being seated to leaving the restaurant.
* **Time slot:** A period of time in a restaurant’s calendar.
* **Party:** A group of guests that come to dine together at a restaurant.
* **Seat:** A chair or place for one person in the restaurant.
* **Seat pacing:** The maximum number of seats that can be filled by new reservations within a 15-minute period.
* **Party pacing:** The maximum number of party reservations that can start within a 15-minute period.
