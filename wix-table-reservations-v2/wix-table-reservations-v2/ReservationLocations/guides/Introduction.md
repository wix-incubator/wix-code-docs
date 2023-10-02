---
title: Introduction
---

# Introduction

The Reservations Locations API allows you to configure reservation settings for a restaurant location. 

A reservation location represents a physical restaurant and holds an address that corresponds to the on-site location of that restaurant (except when the restaurant has no on-site location). Each reservation location has its own calendar, scheduling rules, table management settings, and other attributes that can be set and modified by the API.

With the Reservations Locations API, you can:
* Query or list reservation locations.
* Update the configuration of existing reservation locations.
  
>**Note:** Reservation locations can only be created and archived through the Dashboard, or using the [Locations API](https://dev.wix.com/docs/rest/api-reference/business-info/locations/introduction).

Once a reservation location has been configured, you can:
* Retrieve time slots for the location using the [Time Slots API](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/time-slots/introduction).
* Make reservations for the location using a Wix site, or the [Reservations API](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/reservations/introduction).

## Before you begin
This API requires that the site owner installs the Wix Table Reservations app.

## Use cases
[Reservation app for restaurants on a Wix site](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/sample-flows#reservation-app-for-restaurants-on-a-wix-site)

## Terminology
* **Reservation:** A specific time period reserved for one or more guests to dine at a particular restaurant.
* **Turnover time:** How much time a party needs for the entire reservation - from being seated to leaving the restaurant.
* **Time slot:** A period of time in a restaurant’s calendar. Restaurants generally split their calendar and reservation life-cycle into time slots of equal lengths.
* **Party:** A group of guests that come to dine together at a restaurant.
* **Seat:** A chair or place for one person in the restaurant.
* **Seat pacing:** The maximum number of seats that can be filled by new reservations within a 15-minute period.
* **Party pacing:** The maximum number of party reservations that can start within a 15-minute period.


