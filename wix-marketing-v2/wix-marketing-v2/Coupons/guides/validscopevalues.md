---
title: Valid Scope Values
---

# Valid Scope Values

You can define the coupon to apply to a specific product, a collection of products, or to all of the products within a specific Wix Business Solution.

Coupons are available for the following Wix business solutions:

+ Wix Stores
+ Wix Bookings
+ Wix Events
+ Wix Pricing Plans

When creating a coupon, you will need to include a coupon `scope`. The `scope` should include:

+ Namespace (required)
+ Group (optional - if not listed, the coupon will apply to all items in the namespace)
+ Entity ID (required only when group is listed)  

The following table lists the currently supported coupon scopes:
| namespace | group | entityId | Result |
|---|---|---|---|
| stores | -- | -- | Applies to all store products |
| stores | product | product ID | Applies to the specific store product with the provided ID |
| stores | collection | collection ID | Applies to the specific store collection with the provided ID |
| bookings | -- | -- | Applies to all bookings services |
| bookings | service | service ID | Applies to the specific bookings service with the provided ID |
| events | event | event ID | Applies to the specific event with the provided ID |
| events | ticket | -- | Applies to all event tickets |
| events | ticket | ticket ID | Applies to the specific event ticket with the provided ID |
| pricingPlans | -- | -- | Applies to all pricing plans |
| pricingPlans | plan | plan ID | Applies to the specific pricing plan with the provided ID |
