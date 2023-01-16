---
title: Introduction
---

# Introduction

The Loyalty Program API allows you to activate and customize your loyalty program.

With the Loyalty Program API, you can:
- [Activate](/activateloyaltyprogram) your loyalty program.
- [Customize](/updateloyaltyprogram) the name of the program, as well as the name and icon of the loyalty points unit.

To use the Program API, import `{ program }` from the 'wix-loyalty-backend' module. 

```javascript
import { program } from 'wix-loyalty-backend';
```

## Before you begin

It’s important to note the following points before starting to code:
- A Wix Loyalty Program must first be installed through your [dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Floyalty-accounts/wizard/) or the [Wix App Market](https://www.wix.com/app-market/loyalty) before the Loyalty APIs can be used. 
- A loyalty program only works with certain apps, such as Wix Bookings, Wix Events, Wix Pricing Plans, Wix Restaurants, or Wix Stores. One of those must be installed on your site before the loyalty program can be used.

## Terminology

- **Program name:** Customizable name of the loyalty program.
- **Point:** The collectible unit of the program. Use `pointDefinition` to customize the name and icon of these loyalty points. The default name `”Points”` translates and adjusts to singular based on context. Since a customized name doesn’t adjust based on context it is recommended to use the plural, for example `”Stars”`.
