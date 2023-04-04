---
title: Introduction
---

# About Wix Bookings Services
  

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

The Wix Bookings Services API enables you to retrieve the services your business offers.

The service contains the information customers need to decide whether to book the business offering. This includes the type of offering (appointment, class, course), scheduling information, locations, booking policies (such as the latest possible time a session can be booked), payment information, and more. Creating and managing your services is the cornerstone for working with Wix Bookings.

Once services are created, you can: 

- Use these Services APIs to retrieve information about the service(s), enabling you to make the information available to your customers.

- Use other Bookings APIs to process customer bookings, manage schedules and calendars, check availability, and more.

## More About Services

A service is an online or in-person offering that a business provides to its customers, such as courses and private sessions. 

For example, a fitness studio may offer the following services: 
- A 1-hour Pilates class
- A 30-minute 1-on-1 personal training session
- A 4-month Yoga course for instructors

Alternatively, a hair salon may offer the following services: 
- A 30-minute haircut appointment
- A 2-hour hair coloring appointment
- A 3-week hair styling course
    
Services may differ in the offering they provide, but the API differentiates between 3 main types of services:

- **Appointments**: An appointments is a 1-time session that can be booked and scheduled by a customer. The appointment takes place whenever a customer books a specific time slot. 

    For example, a 30-minute haircut.

- **Classes**: Recurring sessions of multiple participants scheduled by the business. Customers can book any session of the class. Classes can be scheduled on different days, at different times, with different resources, such as staff members. Customers can sign up for single sessions or a class's recurring sessions. 
            
    For example, a language school offers a beginner's Spanish class every Monday at 8:00 PM. Customers can join the session they want and don't have to commit to attending all sessions.

- **Courses**: A limited number of sessions for the same service that starts and ends on a particular day. Customers sign up for the entire course and not just one session. 

    For example, a 12-session introductory course to Pilates, starting on February 1st and ending on March 17th.



## Before You Begin

- Before using the API, make sure to set up [Wix Bookings](https://support.wix.com/en/article/wix-bookings-about-wix-bookings) and [create the right services for your business](https://support.wix.com/en/article/creating-the-right-booking-service-for-your-business). 

- To use the Bookings Services API, import `{ services }` from the `wix-bookings.v2` module in your Velo code:

    ```javascript
    import { services } from 'wix-bookings.v2';
    ```

## Terminology

- **Booking**: Information about the service that the customer has booked. Includes details about the time, location, participants, and price.

- **Schedule**: A collection of sessions that belong to the same class, course, appointment, or resource. Schedules also comprise available slots that can still be booked. Additional information required to calculate availability is also contained in a schedule. Read more about [schedules](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions/introduction#wix-bookings_schedules-and-sessions_introduction_terminology).

    - **Appointment schedules**: The schedule determines when customers can book a session. Bookability is determined using the specified session's duration, the time between sessions, and the schedules of staff members who provide the service. 
    
        For example, given the following scheduling criteria for a business offering haircuts, the schedule allows customers to book sessions from 9:00 to 17:30 with the possibility of booking a maximum of 9 sessions per day: 
    
        - The business offers a 30-minute haircut service.
        - The schedule allows customers to book 30-minute sessions with 30 minutes between each session. 
        - The staff members are available from 9:00 to 18:00.
    
    
    - **Class and course schedules**: For classes and courses, the business decides when to schedule a session. This is in contrast to appointments, where the customer decides when to book a session. For classes and courses, the schedule is used to manage the available sessions and holds some aggregated information, such as the start time and end time of a course.
    
    
- **Session:** An occupied period of time in a schedule. A session is a term we use for any occupied period of time, whether that period is an appointment, class, or course. 

    For example, if a “Vinyasa Yoga” class-type service is offered every Monday between 6-7pm, the class on Monday June 5, 2023 from 6-7pm is 1 session in a schedule. 
    
    Therefore, sessions are the building blocks of appointments, classes, and courses. Each of these types of services comprise sessions. The collection of related sessions for a service represent the service's schedule. Read more [about sessions](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions/introduction#wix-bookings_schedules-and-sessions_introduction_terminology).

- **Slot**: An available period of time in a schedule that can be booked by a customer. While this includes existing sessions that are available for booking, it can also represent a period of time that can be booked based on the availability of a resource, such as a barber with appointments of 30 minutes each that are open for booking every weekday between 8:00 - 17:00. These slots are calculated according to the constraints of the schedule.

- **Bookings Policy**: Terms the business wants to enforce when customers try to book a service. For example, how far in advance customers may book a service or until what point before the start of a session customers can cancel.

