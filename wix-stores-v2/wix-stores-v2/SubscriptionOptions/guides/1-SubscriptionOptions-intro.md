---
title: Introduction
---
# Introduction

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;

> **Note:** This module is [universal](https://support.wix.com/https://www.wix.com/velo/reference/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.

Wix site owners can create subscriptions to sell their products on a recurring basis. With the Subscription Options API, you can integrate with the store owner's subscriptions in their Wix store to create, delete, get, check and query the site owner's subscriptions.

## Subscription frequency and duration

Wix supports the following frequencies and durations of subscriptions:
- Every day for X days
- Every week for X weeks
- Every month for X months
- Every year for X years

## Subscription Settings

- `frequency` - How often the payment will be made/product will be provided as part of the subscription. Supported frequencies: daily, weekly, monthly, yearly.
- `billingCycle` - Number of billing cycles before subscription ends.
- `autoRenewal` - Allow for automatic renewal of a subscription at the end of its specified period. Can only be used if `billingCycle` is empty.

## Subscription Pricing

Each subscription option has a separate price that is set through a discount on the product’s price.
For example, a coffee bag can be sold for $20 as a regular one-time purchase.
However, with a monthly subscription (1 coffee bag per month) for 3 months the price of the coffee bag could be $18 per bag/month, and with a longer subscription of 12 months sold for $15 per bag/month.

### Current Limitations

The following list contains currently unavailable functionality:

- Providing/delivering a product X times per week/month/year (for example, 3 times a month).
- Suspending a subscription.
- Skipping a cycle.
- Applying the same subscriptions to multiple different products in bulk.
- Extending subscriptions (adding more billing cycles to an active subscription).
- Creating a subscription from the whole cart.
- Coupons on X first payments of a subscription.
- Adding a subscription to a cart. Currently the subscription goes straight to checkout, similar to using ‘buy now’.

## Import Statement

To use the wix-stores.v2 API, import `subscriptionOptions` from the `wix-stores.v2` module:

```javascript
import subscriptionOptions from 'wix-stores.v2';
```
