---
title: Introduction
---

# Introduction
The Reservations API provides all the functionality required to create and manage restaurant table reservations. 

The Reservations API contains the following APIs:
* [Reservation Locations](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/reservation-locations/introduction) - This API allows you to provide location information and configure reservation settings for individual restaurants. A `reservation location` object represents a physical restaurant, and at least 1 must be configured before using endpoints in the other Reservations APIs.
* [Time Slots](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/time-slots/introduction) - This API allows you to retrieve availability information for time slots at a reservation location. A `time slot` object represents the availability of a restaurant for a specific party size during a given window of time. 
* [Reservations](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/reservations/introduction) - This API allows you to create and manage reservations. A `reservation object` represents the reservation of 1 or more tables for a party of guests at a particular restaurant.
  
## Before you begin
These APIs require that the site owner installs the Wix Table Reservations app.

## Use Cases
[Reservation app for restaurants on a Wix site](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/sample-flows#reservation-app-for-restaurants-on-a-wix-site)

## Terminology
* **Reservation:** A set of tables and seats reserved for a party at a restaurant for a specific period of time.
* **Party:** A group of guests that come to dine together at a restaurant.
* **Time slot:** A period of time in a restaurant’s calendar. Restaurants generally split their calendar into time slots of equal lengths.
* **Reservation location:** A representation of a physical restaurant location at which reservations can be made.
