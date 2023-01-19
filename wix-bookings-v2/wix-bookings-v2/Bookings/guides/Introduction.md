# About the Wix Bookings V2 API


&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
  <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;



With the Wix Bookings V2 API you can manage bookings for a site's services. 
The booking object holds information about the customer and the session or 
schedule they have booked. You can then use the 
eCommerce APIs to handle the checkout and payment flow.

With Wix Bookings V2 API you can retrieve existing bookings and manage the booking's life cycle.


### Terminology


+ __Booking__: Information about the service that the customer has booked. 
  Includes details about the time, location, participants, and price.
+ __Booking Status__: Information about the booking's life cycle.
    + `CREATED`: The booking has been created, but doesn't yet appear in the 
      business calendar. 
      You need to create a booking before you can start the 
      checkout flow in [eCommerce](https://www.wix.com/velo/reference/wix-ecom-backend).
    + `CONFIRMED`: The site owner has confirmed the booking and it appears in 
      the business calendar.
        + You can manually confirm a booking via 
          [Confirm Booking()](#confirmBooking).
        + Bookings are automatically confirmed when the 
          service 
          is configured to do so and the [eCommerce order](https://www.wix.com/velo/reference/wix-ecom-backend/orders/introduction) 
          has been approved. An automatic confirmation includes checking the 
          slot's or schedule's availability.
    + `PENDING`: The booking is waiting to be confirmed or declined by the 
      owner and is displayed in the business calendar.
      You can't manually set bookings as `PENDING` via an API.
      Bookings are automatically set as `PENDING` when an eCommerce order related to the booking has been created.
    + `WAITING_LIST`: The booking is pending on a waiting list.
    + `DECLINED`: The booking has been declined by the site owner.
        + You can manually decline a booking with 
          [Decline Booking()](#declineBooking).
        + Bookings are automatically declined when an eCommerce order has been 
          declined or a double booking happened for free bookings.
    + `CANCELED`: The booking has been canceled by the site owner or the customer.
        You can cancel bookings with [Cancel Booking()](#cancelBooking).
+ __Double booked__:
  A double booking can happen in case of 2 or more simultaneous eCommerce checkout 
  processes or if the site owner manually accepts bookings that exceed the 
  service's capacity limit.
  + When a double booking happens for paying customers, the `doubleBooked` 
    boolean is set to `true` for the second booking and the owner is notified. 
    They must then manually resolve the situation.
  + When a double booking happens for free services, the second 
    booking's status is set to `DECLINED` while the first booking is retained.
+ __Service__: Business offering. For example, a fitness studio may offer a 
  1-hour yoga class, a 45 minute HIIT training session, and a 30 minute 1-on-1 
  personal training. Learn more about [services](https://support.wix.com/en/article/creating-the-right-booking-service-for-your-business).
+ __Variant__: Unique variation of the service. Each service variant may have 
  a different price.
+ __Availability__: Free time on a schedule that customers can book.
+ __Schedule__: Entity that holds availability information. A 
  schedule can 
  either belong to a resource (for example, a staff member) or a service. 
+ __Session__: An occupied period of time on a schedule. When 
  creating a booking (coming soon) 
  for a class you need to pass the service's relevant existing session as 
  `slot` in the body of the request.
+ __Slot__: An available period of time in a schedule that can be booked by a 
  customer.
+ __Deposit__: Amount the customer must pay immediately when checking out the 
  booking.
+ __Visitor__: Anyone who isn't registered as a member or hasn't logged in to 
  the Wix site. If a visitor creates a booking they're added as a contact.
+ __Member__: Someone who is a registered member in the Wix site and has a 
  login.
+ __[Wix Pricing Plans](https://support.wix.com/en/article/about-pricing-plans)__: 
  A pre-paid bundle of services or a membership that provides access to certain
  services.


To use the Bookings V2 API, import `{ bookings }` from the `wix-bookings.v2` module:

```javascript
import { bookings } from 'wix-bookings.v2';
```