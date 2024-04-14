---
title: Introduction
---

# Introduction
The Coupons API allows you to create and manage coupons to promote loyalty and increase sales. Customers can then apply the coupon codes at checkout to take advantage of your offers. With the Coupons API, you can [create](#createcoupon) and [update](#updatecoupon) your coupons.  

To use the Coupons API, import `{ coupons }` from the `wix-marketing.v2` module. 

```javascript
import { coupons } from 'wix-marketing.v2';
```

> **Note:**
> This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.

## Terminology

- **Scope:** The coupon scope defines the items a coupon applies to. You can apply a coupon to all items in a specific Wix application, a group within the application, or a single item within a group.  

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
