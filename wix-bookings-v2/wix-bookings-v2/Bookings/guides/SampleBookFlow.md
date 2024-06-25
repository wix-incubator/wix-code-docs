# Bookings: Sample Use Cases and Flows

This article shares basic flows your code could support. You're certainly not
limited to these use cases, but it can be a helpful jumping off point for your
planning. Your code could add bookings to the business calendar. These
bookings can be for all types of services, that means appointment-based,
classes, and courses. You can also use all payment methods that
[Wix eCommerce](https://dev.wix.com/docs/velo/api-reference/wix-ecom-backend/introduction)
supports in addition to
[Wix Pricing Plans](https://dev.wix.com/docs/velo/api-reference/wix-pricing-plans-v2/introduction).

## Book an appointment

Your code could display available time slots for an appointment-based service
to the customer, let them choose a slot, create the related booking, and handle the
payment flow.

1. Use [queryServices()](https://dev.wix.com/docs/velo/api-reference/wix-bookings-v2/services/query-services)
   to retrieve all relevant services and display them to the customer. Save the
   ID of the service the customer wants to book.
1. Run [queryAvailability()](https://dev.wix.com/docs/velo/api-reference/wix-bookings-v2/availability-calendar/query-availability).
   Make sure to pass `serviceID`, and the relevant `startDate` and `endDate` as filters.
1. Display the relevant time slots to the customer and let them select their
   preferred time. Make sure to save the `slot`.
1. Invoke [createBooking()](https://dev.wix.com/docs/velo/api-reference/wix-bookings-v2/bookings/create-booking).
   In `booking.bookedEntity.slot` pass `startDate`, `endDate`, `resource`
   and `location` from your saved slot. The status of the booking is now
   `CREATED`.
1. Allow the customer to pay for the service. You can do this in 2 ways:
   - Using [Wix eCommerce](https://dev.wix.com/docs/velo/api-reference/wix-ecom-backend/introduction):
      1. Run [createCheckout()](https://dev.wix.com/docs/velo/api-reference/wix-ecom-backend/checkout/create-checkout).
         Make sure to pass the
         [Wix Bookings app ID](https://dev.wix.com/docs/rest/articles/getting-started/wix-business-solutions#about-apps-made-by-wix)
         as `catalogReference.appId` and the relevant booking ID as
         `catalogReference.catalogItemId`. Save the checkout ID and
         `totalAfterGiftCard.amount`.
      1. Redirect the customer to the checkout page (coming soon).
      1. Use [createOrder()](https://dev.wix.com/docs/velo/api-reference/wix-ecom-backend/checkout/create-order)
         and pass the `checkoutId` as `_id`.
      1. Invoke [createPayment](https://dev.wix.com/docs/velo/api-reference/wix-pay-backend/create-payment)
         to set up the payment details before you ask the customer to pay. Make
         sure to pass `totalAfterGiftCard.amount` as `paymentInfo.amount`. You
         may pass information about the customer in `userInfo` to prefill the
         payment form that Wix displays to the customer.
      1. Run [startPayment()](https://dev.wix.com/docs/velo/api-reference/wix-pay-frontend/start-payment)
         to let the customer pay for the booking. Pass the `paymentId` from the previous step.
   - With your own checkout:
      1. Implement your own checkout.
      1. Use [confirmOrDeclineBooking()](https://dev.wix.com/docs/velo/api-reference/wix-bookings-v2/bookings/confirm-or-decline-booking).
      1. Run [createOrder()](https://dev.wix.com/docs/velo/api-reference/wix-ecom-backend/orders/create-order)
         with your custom payment details.

## Book a class session

Your code could display available sessions for a class to the customer, let
them choose the session, create the booking, and handle the payment flow.

1. Use [queryServices()](https://dev.wix.com/docs/velo/api-reference/wix-bookings-v2/services/query-services)
   to retrieve all relevant services and display them to the customer. Then,
   save the ID of the service the customer wants to book.
1. Run [queryAvailability()](https://dev.wix.com/docs/velo/api-reference/wix-bookings-v2/availability-calendar/query-availability).
   Make sure to pass `serviceID`, and relevant times for `startDate` and `endDate` as
   filters.
1. Display the retrieved sessions to the customer and let them select their
   preferred option. Make sure to save the corresponding `sessionId`.
1. Invoke [createBooking()](https://dev.wix.com/docs/velo/api-reference/wix-bookings-v2/bookings/create-booking).
   Pass the relevant `sessionId` in `booking.bookedEntity.slot.sessionId`.
   The status of the booking is now `CREATED`.
1. Allow the customer to pay for the service. You can do this in 2 ways:
   - Using [Wix eCommerce](https://dev.wix.com/docs/velo/api-reference/wix-ecom-backend/introduction):
      1. Run [createCheckout()](https://dev.wix.com/docs/velo/api-reference/wix-ecom-backend/checkout/create-checkout).
         Make sure to pass the
         [Wix Bookings app ID](https://dev.wix.com/docs/rest/articles/getting-started/wix-business-solutions#about-apps-made-by-wix)
         as `catalogReference.appId` and the relevant booking ID as
         `catalogReference.catalogItemId`. Save the checkout ID and
         `totalAfterGiftCard.amount`.
      1. Redirect the customer to the checkout page (coming soon).
      1. Use [createOrder()](https://dev.wix.com/docs/velo/api-reference/wix-ecom-backend/checkout/create-order)
         and pass the `checkoutId` as `_id`.
      1. Invoke [createPayment](https://dev.wix.com/docs/velo/api-reference/wix-pay-backend/create-payment)
         to set up the payment details before you ask the customer to pay. Make
         sure to pass `totalAfterGiftCard.amount` as `paymentInfo.amount`. You
         may pass information about the customer in `userInfo` to prefill the
         payment form that Wix displays to the customer.
      1. Use [startPayment()](https://dev.wix.com/docs/velo/api-reference/wix-pay-frontend/start-payment)
         to let the customer pay for the booking. Pass the `paymentId` from the previous step.
   - With your own checkout:
      1. Implement your own checkout.
      1. Use [confirmOrDeclineBooking()](https://dev.wix.com/docs/velo/api-reference/wix-bookings-v2/bookings/confirm-or-decline-booking).
      1. Run [createOrder()](https://dev.wix.com/docs/velo/api-reference/wix-ecom-backend/orders/create-order)
         with your custom payment details.

> __Notes__:
> - If you want to skip availability checks, for example when creating a 
>   booking on behalf of the site owner, you can call createBooking() while 
>   passing the relevant `options.flowControlSettings` like 
>   `{"skipAvailabilityValidation": true}`.
> - Passing other `flowControlSettings` lets you also override the maximum
>   number of participants per session, or the payment methods 
>   supported for a specific service.