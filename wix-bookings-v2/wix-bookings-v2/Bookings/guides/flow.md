
# How Bookings Are Confirmed or Declined

The following flow presents how `confirmOrDeclineBooking()` determines the booking status.    

![flow](../media/confirmator_flow.png)

Calling a checkout after creating a booking, is optional, `confirmOrDeclineBooking()` can be called after `createBooking()`

+ **Whether the availability check is required** If  `skipAvailability` is `true`, it will skip the check and it will never be a `doublebooking`.
+ **Whether the booking is paid for**.If the payment status is `PAID` or `PARTIALLY_PAID`, the booking is confirmed regardless of the `doubleBooking` parameter.    
+ **Wether the booking requires business confirmation**. Instead of `CONFIRMED` the status is set to `PENDING`. This happens since it needs to always be manually approved by the owner. You can bypass the confirmation check by setting the `skipBusinessConfirmation` property to `true` when [creating a booking](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/createbooking).    


