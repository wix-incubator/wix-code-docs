---
title: Introduction
---

# Introduction

The Loyalty API allows you to manage a customized loyalty program that lets customers earn loyalty points which can be redeemed for coupons.

With the Wix Loyalty API, you can:
- [Activate](/program/activateloyaltyprogram) and [manage](/program/updateloyaltyprogram) a loyalty program.
- [Create](/account/createaccount) new loyalty accounts for customers.
- [Adjust points](/account/adjustpoints) in individual loyalty accounts.

For more information, see [Wix Loyalty Program: An Overview](https://support.wix.com/en/article/wix-loyalty-program-an-overview).

To use the wix-loyalty-backend API, import `wixLoyaltyBackend` from the 'wix-loyalty-backend' module. 

```javascript
import wixLoyaltyBackend from 'wix-loyalty-backend';
```

## Before you begin

It’s important to note the following points before starting to code:
- A Wix Loyalty Program must first be installed through your [dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Floyalty-accounts/wizard/) or the [Wix App Market](https://www.wix.com/app-market/loyalty) before the Loyalty APIs can be used. 
- A loyalty program only works with certain apps, such as Wix Bookings, Wix Events, Wix Pricing Plans, Wix Restaurants, or Wix Stores. One of those must be installed on your site before the loyalty program can be used.
- A customer with a loyalty account can’t earn or redeem points while the loyalty program is in `DRAFT` status. You can change the program’s status to `ACTIVE` through your [dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Floyalty-accounts/wizard/) or with the `activateLoyaltyProgram()` function.

## Terminology

- **Program name:** Customizable name of the loyalty program.
- **Point:** The collectible unit of the program.
- **Account:** An individual customer’s loyalty account tracks their current point balance, as well as their total points earned and redeemed. You can only create loyalty accounts for site contacts.
