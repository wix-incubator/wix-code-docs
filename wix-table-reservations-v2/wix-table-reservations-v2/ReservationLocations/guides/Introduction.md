---
title: Introduction
---

# Introduction

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
It’s important to note the following points before starting to code:
* You must install the Wix Table Reservations app.
* To use the Reservation Locations API, import `reservationLocations` from `wix-table-reservations.v2`:

```js
import { reservationLocations } from 'wix-table-reservations.v2';
```
## Permissions information

The following functions may require [elevated permissions](https://www.wix.com/velo/reference/wix-auth/elevate) to run depending on which fields are included, or the value of certain fields.

### getReservationLocation()

Calling [`getReservationLocation()`](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservationlocations/getreservationlocation) with `fieldsets` set to `FULL` requires [elevated permissions](https://www.wix.com/velo/reference/wix-auth/elevate).

### listReservationLocations()

Calling [`listReservationLocations()`](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservationlocations/listreservationlocations) with `fieldsets` set to `FULL` requires [elevated permissions](https://www.wix.com/velo/reference/wix-auth/elevate).

### queryReservationLocations()

Calling [`queryReservationLocations()`](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservationlocations/queryreservationlocations) with `fieldsets` set to `FULL` requires [elevated permissions](https://www.wix.com/velo/reference/wix-auth/elevate).

## Terminology
For a comprehensive glossary of Table Reservations terms, see [Terminology](https://www.wix.com/velo/reference/wix-table-reservations-v2/terminology).
