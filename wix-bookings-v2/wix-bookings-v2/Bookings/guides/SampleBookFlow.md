# Bookings: Sample Use Cases and Flows

This article shares basic flows your code could support. You're certainly not
limited to these use cases, but it can be a helpful jumping off point for your
planning. Your code could add bookings to your business calendar. These
bookings can be for appointment-based services, classes, and courses. They may
also use all payment methods that are supported in
[Wix eCommerce](https://dev.wix.com/docs/velo/api-reference/wix-ecom-backend/introduction)
in addition to
[Wix Pricing Plans](https://dev.wix.com/docs/velo/api-reference/wix-pricing-plans-v2/introduction).

## Book an appointment

Your could display available time slots for an appointment service to the
customer, let them select their slot of choice and create the related booking.

1. Use [queryServices()](https://dev.wix.com/docs/velo/api-reference/wix-bookings-v2/services/query-services)
   to retrieve all relevant services and display them to the customer. Then,
   save the ID of the service the customer wants to book.
1. Run [queryAvailability()](https://dev.wix.com/docs/velo/api-reference/wix-bookings-v2/availability-calendar/query-availability).
   Make sure to pass `serviceID`, the relevant `startDate` and `endDate` as filters.
1. Display the relevant time slots to the customer and let them select their
   preferred time. Save the corresponding `slot`.
1. Use [createBooking()](https://dev.wix.com/docs/velo/api-reference/wix-bookings-v2/bookings/create-booking) 
   and pass the `slot` from the previous step including `startDate`, `endDate`,
   `resource` and `location`. The status of the booking is
   `CREATED`.
1. Allow the customer to pay for the service, this can be done in 2 ways:
   - Using [Wix eCommerce](https://dev.wix.com/docs/velo/api-reference/wix-ecom-backend/introduction):
      1. Run [createCheckout()](https://dev.wix.com/docs/velo/api-reference/wix-ecom-backend/checkout/create-checkout).
      1. Redirect the customer to the checkout page (coming soon).
      1. Call Create Order (coming soon).
   - With your own Checkout:
      1. Implement your own checkout.
      1. Use [confirmOrDeclineBooking()](https://dev.wix.com/docs/velo/api-reference/wix-bookings-v2/bookings/confirm-or-decline-booking).
      1. Run createOrder() (coming soon) with your custom payment details.

## Book a class session

Your code could display available sessions for a class to the customer, let
them select their session of choice, create the related booking, and handle the
in-person payment flow.

1. Use [queryServices()](https://dev.wix.com/docs/velo/api-reference/wix-bookings-v2/services/query-services)
   to retrieve all relevant services and display them to the customer. Then,
   save the ID of the service the customer wants to book.
1. Run [queryAvailability()](https://dev.wix.com/docs/velo/api-reference/wix-bookings-v2/availability-calendar/query-availability).
   Make sure to pass `serviceID`, the business `timezone`, the relevant `startDate` and `endDate` as
   filters.
1. Display the retrieved sessions to the customer and let them select their
   preferred option. Make sure to save the corresponding `sessionId`.
1. Use [createBooking()](https://dev.wix.com/docs/velo/api-reference/wix-bookings-v2/bookings/create-booking) 
   and pass the relevant `sessionId`. If the call is successful, you will receive
   the created booking in the response. The status of the created booking is
   `CREATED`.
1. Allow the customer to pay for the service, this can be done in 2 ways:
   - Using [Wix eCommerce](https://dev.wix.com/docs/velo/api-reference/wix-ecom-backend/introduction):
      1. Run [createCheckout()](https://dev.wix.com/docs/velo/api-reference/wix-ecom-backend/checkout/create-checkout).
      1. Redirect the customer to the checkout page (coming soon).
      1. Call Create Order (coming soon).
   - With your own Checkout:
      1. Implement your own checkout.
      1. Use [confirmOrDeclineBooking()](https://dev.wix.com/docs/velo/api-reference/wix-bookings-v2/bookings/confirm-or-decline-booking).
      1. Run createOrder() (coming soon) with your custom payment details.

> __Notes__:
> - If you want to skip availability checks, for example when creating a 
>   booking on behalf of the site owner, you can call createBooking() while 
>   passing the relevant `options.flowControlSettings` like 
>   `{"skipAvailabilityValidation": true}`.
> - Passing other `flowControlSettings` lets you also override the maximum
>   number of participants per session, or the payment methods 
>   supported for a specific service.