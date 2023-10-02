---
title: Introduction
---

# Introduction

The Reservations API allows you to create and manage reservations at restaurants. 

This API provides all the necessary functionality to move a reservation through the phases of its [lifecycle](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/reservations/reservation-lifecycle), such as from the reservation request until completion.

The Reservations API works together with the [Reservation Locations API](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/reservation-locations/introduction), which provides information about the physical location of a restaurant, as well as that restaurant’s availability and reservation conditions. 

The Reservations API also works together with the [Time Slots API](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/time-slots/introduction), which allows you to retrieve availability information about time slots at a restaurant on a specific date and for a specific party size. 

With the Reservations API, you can:
* Create and manage reservations at a restaurant.
* Get information about existing reservations at a restaurant.

## Before you begin
This API requires that:
* The site owner installs the Wix Table Reservations app.
* The site owner configures at least 1 location configured in your site’s dashboard under Business Info.


## Use Cases
[Reservation app for restaurants on a Wix site](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/sample-flows#reservation-app-for-restaurants-on-a-wix-site)

## Terminology
* **Reservation:** A specific time period reserved for one or more guests to dine at a particular restaurant.
* **Time slot:** A period of time in a restaurant’s calendar. Restaurants generally split their calendar and reservation life-cycle into time slots of equal lengths.
* **Party**: A group of guests that come to dine together at a restaurant.
* **Status:** The status of a reservation represents its position in the reservation lifecycle. For example, `RESERVED`, `CANCELED`, or `FINISHED`.
* **Reservation location:** A representation of a physical restaurant location at which reservations can be made.
* **Manual approval:** Whether or not a reservation made online is automatically accepted, or requires manual approval from a human.
* **Source:** How the reservation was made. For example, if it was booked online, in person, through an app, and so on.
* **Table combination conflict:** An attempt to make a reservation that doesn’t comply with the restaurant’s table management or online reservation rules.
* **Reservation location conflict:** An attempt to make a reservation that doesn’t comply with the restaurant’s party pacing or seat pacing rules.
* **Seat pacing:** The maximum number of seats that can be filled by new reservations within a 15-minute period.
* **Party pacing:** The maximum number of party reservations that can start within a 15-minute period.
* **Reservee:** The person the reservation is made for. Not to be confused with the person making the reservation, although they may be the same.
