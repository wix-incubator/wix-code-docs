---
title: Introduction
---

# Introduction


The Discount Rules API allows Velo developers to create and manage discount rules.
Discount rules are sets of triggers and scopes that together define the necessary conditions for a discount to apply to items in a site's cart/checkout.

With the Discount Rules API, you can:

+ Create, update, and delete discount rules
+ Retrieve discount rules

To use the Discount Rules API, import `{ discountRules }` from the `wix-ecom-backend` module:

```javascript
import { discountRules } from 'wix-ecom-backend';
```

## Terminology

- **Discount rule:** A set of conditions (scope and/or trigger) that dictate whether an item/product qualifies for a specified discount.

- **Discount:** The change applied to an item's price when conditions are met. Discount can reduce an item's price by percentage or a specified amount, and also by setting an item to a fixed price.
  - Discounts must have a defined scope/s
  - Currently only item-level discounts are supported. Discounts for an entire cart/checkout will be supported in the future. 


- **Scope:** A group of Wix Stores catalog items that qualify for a discount.
  - Every catalog has 2 scopes "out of the box" that differ slightly. For example, Wix Stores has `Specific Products` and `All Products` scopes.
  - Scopes are required in default triggers and discount objects.
  - Triggers and discounts can have multiple scopes.


- **Trigger**: A set of conditions that must be met for a discount to become applicable. Triggers can be chained so that more than 1 condition must be met. 2 types of trigger are supported:
  - **Default triggers:** These built-in triggers fire when a specified minimum/maximum item quantity (e.g., "at least 5 items") or cart subtotal (e.g., "no more than $100") is reached. For this trigger to fire, the items must also be part of a defined scope. 
  - **Custom triggers:** Using the [Custom Trigger Integration SPI](LINK) you can create any condition you want. For example, a trigger that only fires between 8pm-10pm on Mondays and Thursdays, and only on a rainy day.