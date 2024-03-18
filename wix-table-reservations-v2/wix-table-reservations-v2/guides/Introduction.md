---
title: Introduction
---

# Introduction

The Table Reservations API provides all the functionality required to create and manage restaurant table reservations. 

The Reservations API contains the following APIs:

* [Reservation Locations](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservationlocations) - This API allows you to provide location information and configure reservation settings for individual restaurants. A reservation location represents a physical restaurant, and at least 1 must be configured before using functions in the other Reservations APIs.
* [Time Slots](https://www.wix.com/velo/reference/wix-table-reservations-v2/timeslots) - This API allows you to retrieve availability information for time slots at a reservation location. A time slot represents the availability of a restaurant for a specific party size during a given window of time. 
* [Reservations](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservations) - This API allows you to create and manage reservations. A `reservation object` represents the reservation of 1 or more tables for a party of guests at a particular restaurant.
  
## Before you begin

It’s important to note the following points before starting to code:

* You must install the Wix Table Reservations app.

## Use cases

Using this API include, you could:

* Update the minimum required notice for reservations at all locations.
* Create a held reservation with a given time, location, and party size.
* Close a restaurant and cancel all reservations on a given day.

## Terminology

For a comprehensive glossary of Table Reservations terms, see [Terminology](https://www.wix.com/velo/reference/wix-table-reservations-v2/terminology).
