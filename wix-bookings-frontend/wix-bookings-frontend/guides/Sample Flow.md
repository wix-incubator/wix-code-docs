# Typical Booking Sample Flow

The following list outlines a sample flow in a typical booking lifecycle:

1. Get a list of services from one of:
   + A dataset connected to the **Bookings/Services** collection.
   + A query ([SDK](https://dev.wix.com/docs/sdk/backend-modules/data/items/query) | [Velo](https://dev.wix.com/docs/velo/apis/wix-data/query)) on the **Bookings/Services** collection.
1. Allow the customer to select a service.
1. Get available slots by calling getServiceAvailability() ([SDK](https://dev.wix.com/docs/sdk/frontend-modules/bookings/get-service-availability) | [Velo](https://dev.wix.com/docs/velo/apis/wix-bookings-frontend/get-service-availability)),
   specifying the selected service ID as `_id`. Optionally, you can specify a
   `AvailabilityOptions` object to change the limits on the slots that are
   returned.
1. You can match the returned slots to their related staff member items using
   the **Bookings/Staff** collection.
1. The customer selects a slot.
1. Gather values for the selected service's form fields, if there are any.
   The list of form fields is found in the **form** property of the items
   in the **Bookings/Services** collection.
1. Get the available payment options for the currently logged-in user and
   the selected service with
   getCheckoutOptions() ([SDK](https://dev.wix.com/docs/sdk/frontend-modules/bookings/get-checkout-options) | [Velo](https://dev.wix.com/docs/velo/apis/wix-bookings-frontend/get-checkout-options)).
1. The customer selects a payment option (offline, online, a pricing plan package, or a
   pricing plan membership).
1. Call checkoutBooking() ([SDK](https://dev.wix.com/docs/sdk/frontend-modules/bookings/checkout-booking) | [Velo](https://dev.wix.com/docs/velo/apis/wix-bookings-frontend/checkout-booking)).
   Specify the selected slot object, the values for the form fields, and the payment type
   if necessary. Note that the specified payment type must match the service's
   configuration in the site's dashboard. You cannot book a paid service
   as if it were free.
  
   + If the service is free, you do not need to pass a `paymentOptions`
     object.
   + If the service is not free and you pass a `paymentOptions`
     object indicating the payment should be online, a payment popup is presented
     for the user to enter payment information, such as credit card details.
   + If the service is not free and you pass a `paymentOptions`
     object indicating the payment should be offline, the payment popup is not
     presented to the user.
