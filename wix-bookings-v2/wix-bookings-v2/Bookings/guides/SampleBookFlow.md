# Bookings: Sample Use Cases and Flows

This article shares basic flows your app could support. You're certainly not limited to these use cases, but it can be 
a helpful jumping off point as you plan your app's implementation. Your app 
could help site owners add bookings to their business calendar. These bookings 
can be for appointment based services, classes, and courses. They may also 
use all payment methods that are supported in 
[Wix eCommerce](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/about-the-wix-e-commerce-platform) in addition to 
[Wix Pricing Plans](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/introduction). 

## Book an appointment

Your app could display available time slots for an appointment service to the 
customer, let them select their slot of choice and create the related booking. 

1. Call [Get Site Properties](https://dev.wix.com/docs/rest/api-reference/business-info/site-properties/properties/get-site-properties) to retrieve the `timeZone` of the business location.
1. Call [Query Services](https://dev.wix.com/docs/rest/api-reference/wix-bookings/services/services-v-2/query-services) 
   to retrieve all relevant services and display them to the customer. Then, save the 
   ID of the service the customer wants to book.
1. Call [Query Availability](https://dev.wix.com/docs/rest/api-reference/wix-bookings/time-slots-and-bookings/time-slots/availability-calendar/query-availability). 
   Make sure to pass `serviceID`, the business `timezone`, the relevant `startDate` and `endDate` as 
   filters.
1. Display the relevant time slots to the customer and let them select their 
   preferred time. Save the correspondent `slot` information. 
1. Call [Create Booking](https://dev.wix.com/docs/rest/api-reference/wix-bookings/time-slots-and-bookings/bookings-v-2/bookings-v-2-and-confirmation/create-booking) 
   and pass `startDate`, `endDate` , `timezone` , `resource` and `location` using the data from the `slot`. If the call is successful, you will receive the created booking in the response. The status of the created booking is `CREATED`.
1. Allow the customer to pay for the service, this can be done in 2 ways:
   - Using [Wix eCommerce](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/about-the-wix-e-commerce-platform)
      1. Call [Create Checkout](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/checkout/create-checkout)
      1. Redirect the customer to the checkout page (coming soon)
      1. Call Create Order (coming soon)
   - With your own Checkout:
      1. Implement your own checkout
      1. Call [Confirm or decline Booking](https://dev.wix.com/docs/rest/api-reference/wix-bookings/time-slots-and-bookings/bookings-v-2/bookings-v-2-and-confirmation/confirm-or-decline-booking)
      1. Call Create Order (coming soon) with your custom payment details
   
## Book a class session

Your app could display available sessions for a class to the customer, let 
them select their session of choice, create the related booking, and handle the 
in-person payment flow.

1. Call [Get Site Properties](https://dev.wix.com/docs/rest/api-reference/business-info/site-properties/properties/get-site-properties) to retrieve the `timeZone` of the business location.
1. Call [Query Services](https://dev.wix.com/docs/rest/api-reference/wix-bookings/services/services-v-2/query-services) 
   to retrieve all relevant services and display them to the customer. Save the 
   ID of the service the customer wants to book.
1. Call [Query Availability](https://dev.wix.com/docs/rest/api-reference/wix-bookings/time-slots-and-bookings/time-slots/availability-calendar/query-availability). 
   Make sure to pass `serviceID`, the business `timezone`, the relevant `startDate` and `endDate` as 
   filters.
1. Display the retrieved sessions to the customer and let them select their 
   preferred option. Make sure to save the corresponding `sessionId`.
1. Call [Create Booking](https://dev.wix.com/docs/rest/api-reference/wix-bookings/time-slots-and-bookings/bookings-v-2/bookings-v-2-and-confirmation/create-booking) 
   and pass `startDate`, `endDate` , `timezone` , `resource` and `location` using the data from the `slot`. If the call is successful, you will receive the created booking in the response. The status of the created booking is `CREATED`.
1. Allow the customer to pay for the service, this can be done in 2 ways:
   - Using [Wix eCommerce](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/about-the-wix-e-commerce-platform)
      1. Call [Create Checkout](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/checkout/create-checkout)
      1. Redirect the customer to the checkout page (coming soon)
      1. Call Create Order (coming soon)
   - With your own Checkout:
      1. Implement your own checkout
      1. Call [Confirm or decline Booking](https://dev.wix.com/docs/rest/api-reference/wix-bookings/time-slots-and-bookings/bookings-v-2/bookings-v-2-and-confirmation/confirm-or-decline-booking)
      1. Call Create Order (coming soon) with your custom payment details




> __Notes__:
> - If you want to skip availability checks, for example when creating a 
>   booking on behalf of the site owner, you can call the endpoint while 
>   passing the relevant `flowControlSettings` like 
>   `skipAvailabilityValidation=true`.
> - Passing other `flowControlSettings` lets you also override more limits such 
>   as the maximum number of participants per session, the payment methods 
>   supported for a specific service.
> - Don't forget about [permissions](https://dev.wix.com/docs/rest/articles/getting-started/access-types-and-permissions). Each endpoint
>   has their own requirements.