---
title: The Reservation Lifecycle
---

Reservations progress from creation to completion through a series of phases. Each phase is represented by a status, which is stored as an enum in the `status` field of a `reservation` object. 

This article explains the available statuses, and how a reservation can progress using the Reservations API.

Note:
Reservations can also be created and progress through phases as a result of actions on a Wix site or dashboard. For more information see the Wix Restaurants [Table Reservations articles](https://support.wix.com/en/table-reservations).

## Statuses
The following statuses are listed roughly in order of their position in the reservation lifecycle:

* `HELD` - The reservation is temporary and will expire in 10 minutes if its status isn’t changed. This phase temporarily reserves the required number of seats and tables for a given party size at a chosen time while a customer enters details and/or confirms their reservation request.
* `REQUESTED` - A customer finished requesting this reservation, meaning they have added all necessary details and confirmed the request. Restaurant staff can now either approve or decline the reservation request.
* `DECLINED` - The restaurant’s owner or staff declined the customer’s request to make the reservation.
* `RESERVED` - The reservation is confirmed.
* `SEATED` - The customer is currently occupying the table.
* `CANCELED` - The reservation is canceled.
* `NO_SHOW` - The customer didn't show up for their reservation.
* `FINISHED` - The reservation completed successfully.

## Managing the reservation lifecycle

### Create a reservation
This API provides 2 endpoints for creating reservations.

[`createHeldReservation()`](#createHeldReservation) - This endpoint creates a reservation with the `HELD` status. Reservations with the `HELD` status are only valid for 10 minutes. Trying to change a `HELD` reservation’s status after 10 minutes returns an error. 

The Reservations pages created by the Table Reservations app on Wix sites use this endpoint to temporarily reserve time slots selected by customers while they enter further details.

After a customer completes the reservation process, call [`reserveReservation()`](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservations/reservereservation) to change the reservation’s status to `RESERVED` or `REQUESTED`, depending on whether the site requires manual approval for online reservations.

You cannot call [`updateReservation()`](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservations/updatereservation) to change a reservation’s status from `HELD`. Trying to do so will return an error.

[`createReservation()`](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservations/createreservation) - This endpoint creates a reservation with the status of your choice. Generally, a reservation should be created with either the `RESERVED` status or the `REQUESTED` status if manual approval is required for confirmation (see manual approval below).

`Create Reservation` allows you to provide more details than `Create Held Reservation`. It also gives you the option to override the restaurant’s rules regarding online availability and table management.

### Requiring manual approval
To require manual approval for `REQUESTED` reservations at a location before they’re confirmed (`RESERVED`), set `configuration.onlineReservations.manualApproval.enabled` to `true` for that reservation’s location. Manual approval can also be set through a site’s Table Reservations app.

If manual approval is enabled for online reservations at a reservation location, reservations made using the [`reserveReservation()`](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservations/reservereservation) endpoint or through the restaurant’s dashboard are automatically created with the `REQUESTED` status. This setting does not affect offline reservations.

### Reserving or declining reservations
To use the Reservations API to approve or decline a reservation, call [`updateReservation()`](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservations/updatereservation) and change the reservation’s status to `RESERVED` or `DECLINED` respectively.

### Seating customers

Once customers have been seated (or the equivalent if your restaurant doesn’t have seats), change the status of the reservation to `SEATED` using [`updateReservation()`](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservations/updatereservation).

### Ending a Reservation

A reservation can end as `DECLINED`, `CANCELED`, `NO_SHOW`, or `FINISHED`.
In each case, change  the status using [`updateReservation()`](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservations/updatereservation). Once any of the above statuses are set, the reservation is considered complete.

## Lifecycle flow examples

The following are examples of possible paths a reservation could take from creation to completion:

**Finished**

A customer selects a time slot for a reservation on the restaurant’s website. They proceed to enter their details and confirm their reservation request. The restaurant owner approves the reservation. The customer arrives and is seated. They finish their meal, pay, and leave. 

This flow would be represented by:
`HELD` > `REQUESTED` > `RESERVED` > `SEATED` > `FINISHED`

**Cancelation**

A customer calls the restaurant and makes a reservation, but their car breaks down and they call again to cancel.

This flow would be represented by:
`RESERVED` > `CANCELED`

**No Show**

A customer makes a reservation using the restaurant’s app. The restaurant owner approves the reservation, but the customer never shows up.

This flow would be represented by:
`REQUESTED` > `RESERVED` > `NO_SHOW`

