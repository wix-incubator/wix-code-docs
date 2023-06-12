---
title: Introduction
---

# About the Wix Bookings Attendance API

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>    

&nbsp;

> **Note:** This module is
> [universal](/api-overview/api-versions#universal-modules).
> Functions in this module can run on both the backend and frontend,
> unless specified otherwise.


With the Wix Bookings Attendance API,  you can retrieve and manage a booked session's attendance information by: 

* [Setting](https://www.wix.com/velo/reference/wix-bookings-v2/attendance/setattendance) the attendance for a given booked session.
* [Getting](https://www.wix.com/velo/reference/wix-bookings-v2/attendance/getattendance) the attendance information for a given booked session by ID.
* [Querying](https://www.wix.com/velo/reference/wix-bookings-v2/attendance/queryattendance) the attendance by given filters, sorting, and paging.

## About the attendance object

The `Attendance` object holds information about the attendance of a booked session, such as: 
* Did anyone attend the session? 
* How many people attended the session?

The number of session `Attendance` objects available depends on session types:  
+ Appointment sessions have 1 `Attendance` object per appointment.
+ Class sessions have an `Attendance` object for each session of the class. The number of sessions for a class is defined in Schedule and Sessions' `schedule.capacity` property.
+ Course sessions have an `Attendance` object for each session of the course. The number of sessions for a class is defined in Schedule and Sessions' `schedule.capacity` property.


## Use cases

Common business usages for this API include:

* Set the attendance for a given booked session to reflect how many attendees checked in.
* Query the attendance for a given participant in a course booking.
* Query attendance for a particular booking's sessions over time to see if a particular session has frequent no-shows. You can compare the number of attendees to the number of participants that signed up for that booking's sessions. 

## Terminology

For a comprehensive glossary of Wix Bookings terms, see [Terminology](https://www.wix.com/velo/reference/wix-bookings-v2/terminology).


## Before you begin

- Validation capabilities are limited. Make sure your code validates that: 
    + There is no mismatch between `numberOfAttendees` and `attendanceStatus` to make sure, for example, that `attendanceStatus` is not `NOT_ATTENDED` while `numberOfAttendees` is `5`. 
    + The attendance's `numberOfAttendees` and the booking's `numberOfParticipants` correspond. For example, the number of attendees usually should not exceed the booking's intended number of participants (unless perhaps you allow walk-ins that did not sign up in advance).
- To use the Bookings Services API, import `{ attendance }` from the `wix-bookings.v2` module in your Velo code:

    ```javascript
    import { attendance } from 'wix-bookings.v2';
    ```
