
# Terminology

+ __Availability__: Free time on a schedule that customers can book.
+ __Booking__: Information about the service that the customer has booked. 
  Includes details about the time, location, participants, and price.
+ __Bookings Policy__: Terms the business wants to enforce when 
  customers try to book a service. For example, how far in advance customers 
  may book a service or until what point before the start of a session 
  customers can cancel.
+ __Booking Status__: Information about the booking's life cycle.
    + `CREATED`: The booking has been created, but doesn't yet appear in the 
      business calendar. 
      You can create bookings with [Create Booking()](#createbooking) 
    + `PENDING`: The booking is waiting to be confirmed or declined by the 
      site owner and is displayed in the business calendar.
      Bookings are automatically set as `PENDING` when an eCommerce order related to the booking has been created.
    + `CONFIRMED`: The site owner has confirmed the booking and it appears in 
      the business calendar.
      You can confirm your bookings in one of the following ways:
       + __Automatically__. Bookings are automatically confirmed when the 
          service 
          is configured to do so and the order is approved during the checkout process. An automatic confirmation includes checking availability.
        + __Manually__. You can manually confirm a booking using 
          [Confirm Or Decline Booking()](#confirmordeclinebooking).
          slot's or schedule's availability.
    + `WAITING_LIST`: The booking is on a waiting list.
    + `DECLINED`: The booking has been declined by the site owner.
    You can decline your bookings in one of the following ways:
        + __Manually__. You can manually decline a booking with 
          [Decline Booking()](#declineBooking).
        + __Automatically__.Bookings are automatically declined when an eCommerce order has been 
          declined or a double booking happened for free bookings.
    + `CANCELED`: The booking has been canceled by the site owner or the customer.
        Cancel bookings with [Cancel Booking()](#cancelBooking).
+ __Calendar__: General overview about the availability and bookings of the 
  business, including its services and resources. Manage your appointments, classes 
  and courses on the calendar.
+ __Double booked__:
  A double booking can happen in case of 2 or more simultaneous eCommerce checkout 
  processes or if the site owner manually accepts bookings that exceed the 
  service's capacity limit.
  + When a double booking happens for paying customers, the `doubleBooked` 
    boolean is set to `true` for the second booking and the owner is notified. 
    They must then manually resolve the situation.
  + When a double booking happens for free services, the second 
    booking's status is set to `DECLINED` while the first booking is retained.
+ __Deposit__: Amount the customer must pay immediately when checking out the 
  booking.
+ __Locked Sessions__: Sessions that customers cannot book due to business reasons, such 
  as the session being full and having a waitlist, or because an administrator 
  wants to manually screen each customer before adding a customer to a session.
+ __Member__: Someone who is a registered member in the Wix site and has a 
  login.
+ __Merchant__: The business that offers services that the public (customers) can book. The merchant's business is on a Wix site.
+ __Pricing Provider__: A 3rd-party app that implements custom logic for determining the price of a booking.
+ __Resource__: Business asset like a staff member, room, or equipment that's 
  needed to provide a service.
+ __Service__: Business offering. For example, a fitness studio may offer a 
  1-hour yoga class, a 45 minute HIIT training session, and a 30 minute 1-on-1 
  personal training. Learn more about [services](https://support.wix.com/en/article/creating-the-right-booking-service-for-your-business).
    + __Appointments__: Appointments take place whenever a customer books a specific 
      time slot. For example, your hair salon may be open for business from 9:00 AM 
      to 7:00 PM and a customer can book a session at any available time during the day.
    + __Classes__: Classes can be scheduled on different days, at different times, 
      with different resources, such as staff members. Customers can sign up for single sessions
      or a class's recurring sessions. For example, a language school offers a beginner's Spanish 
      class every Monday at 8:00 PM. Clients can join the session they want and don't have to commit
      to attending all sessions.
    + __Courses__: A limited number of sessions for the same service that starts and ends 
      on a particular day. Customers sign up for the entire course and not one session. For example, 
      a 12-session introductory course to Pilates, starting on February 1st and
      ending on March 17th.
+ __Schedule__: A collection of all sessions that belong to the same class, course,
  appointment, or resource. Schedules also comprise available slots that can still be booked.
    + __Session__: An _occupied_ period of time in a schedule. Sessions are the 
      building blocks of appointments, classes, and courses. Each of these types of 
      services comprise sessions. The collection of related sessions for a service represent the 
      service's schedule. 
    + __Slot__: An _available_ period of time in a schedule that can be booked by a 
      customer. While this includes existing sessions that are available for
      booking, it can also represent a period of time that can be booked based on
      the availability of a resource, such as a barber with appointments of 30 
      minutes each that are open for booking every weekday between 8:00 - 17:00.
      These slots are calculated according to the constraints of the schedule.
+ __Variant__: Unique variation of the service. Each service variant may have 
  a different price.
+ __Visitor__: Anyone who isn't registered as a member or hasn't logged in to 
  the Wix site. If a visitor creates a booking they're added as a contact.
+ __[Wix Pricing Plans](https://support.wix.com/en/article/about-pricing-plans)__: 
  A pre-paid bundle of services or a membership that provides access to certain
  services.
+ __Wix Site Owner__: The person managing the merchant's Wix site.

