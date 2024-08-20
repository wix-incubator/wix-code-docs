---
title: Introduction
---

# Introduction

The Reservations API allows you to create and manage reservations at restaurants. 

This API provides all the necessary functionality to move a reservation through the phases of its [lifecycle](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservations/the-reservation-lifecycle), such as from the reservation request until completion.

The Reservations API works together with the [Reservation Locations API](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservationlocations), which provides information about the physical location of a restaurant, as well as that restaurant’s availability and reservation conditions. 

The Reservations API also works together with the [Time Slots API](https://www.wix.com/velo/reference/wix-table-reservations-v2/timeslots), which allows you to retrieve availability information about time slots at a restaurant on a specific date and for a specific party size. 

With the Reservations API, you can:
* Create and manage reservations at a restaurant.
* Get information about existing reservations at a restaurant.

## Before you begin
It’s important to note the following points before starting to code:
* You must install the Wix Table Reservations app.
* You must have at least 1 location configured in your Dashboard under [Business Info](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fbusiness-info).
* To use the Reservations API, import `reservations` from `wix-table-reservations.v2`:

```js
import { reservations } from 'wix-table-reservations.v2';
```

## Permissions information

The following functions may require [elevated permissions](https://www.wix.com/velo/reference/wix-auth/elevate) to run depending on which fields are included, or the value of certain fields.

### createReservation()

Calling [`createReservation()`](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservations/createreservation) with the following fields requires [elevated permissions](https://www.wix.com/velo/reference/wix-auth/elevate): 
* `status`
* `source`
* `reservation.details.tableIds`
* `reservation.details.endDate`
* `ignoreReservationLocationConflicts`
* `ignoreTableCombinationConflicts`

If you do not provide a `source`, the value assigned to it depends on whether you called `createReservation()` with elevated permissions. With elevated permissions, `source` is set to `UNDEFINED`. Otherwise, `source` is set to `ONLINE`.

### getReservation()

Calling [`getReservation()`](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservations/getreservation) with `fieldsets` set to `FULL` requires [elevated permissions](https://www.wix.com/velo/reference/wix-auth/elevate).

## Terminology
For a comprehensive glossary of Table Reservations terms, see [Terminology](https://www.wix.com/velo/reference/wix-table-reservations-v2/terminology).
