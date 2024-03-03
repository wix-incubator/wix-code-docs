<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Typical Booking Sample Flow

The following list outlines a sample flow in a typical booking lifecycle:

1. Get a list of services from one of:
   + A dataset connected to the **Bookings/Services** collection.
   + A [query](wix-data.html#query) on the **Bookings/Services** collection.
   
   
1. A service is selected.
1. Get available slots by calling the [`getServiceAvailability()`](wix-bookings-frontend/getServiceAvailability) function
   using the selected service's **Service ID** (`_id`) value. (Optionally,
   you can pass a `AvailabilityOptions`
   object to change the limits on the slots that are returned.)
1. You can match the returned slots to their related staff member items using
   the **Bookings/Staff** collection.
1. A slot is selected.
1. Gather values for the selected service's form fields, if there are any.
   The list of form fields is found in the **form** property of the items
   in the **Bookings/Services** collection.
1. Get the available payment options for the currently logged-in user and
   the selected service with the
   [`getCheckoutOptions()`](wix-bookings-frontend/getCheckoutOptions) function.
1. A payment option is selected (offline, online, a pricing plan package, or a
   pricing plan membership).
1. Call the [`checkoutBooking()`](wix-bookings-frontend/checkoutBooking) 
   function. Pass the
   selected slot object, the values for the form fields, and the payment type
   if necessary. Note that the specified payment type must match the service's
   configuration in your site's **Dashboard**. You cannot book a paid service
   as if it were free.
  
   + If the service is free, you do not need to pass a `paymentOptions`
     object.
   + If the service is not free and you pass a `paymentOptions`
     object indicating the payment should be online, a payment popup is presented
     for the user to enter payment information, such as credit card details.
   + If the service is not free and you pass a `paymentOptions`
     object indicating the payment should be offline, the payment popup is not
     presented to the user.
