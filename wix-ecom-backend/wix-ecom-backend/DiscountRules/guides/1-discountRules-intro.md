---
title: Introduction
---

# Introduction


The Discount Rules API allows you to create and manage discount rules.
Discount rules are sets of triggers and scopes that together define the necessary conditions for a discount to apply to items in the cart/checkout.
Discount rules are known as [automatic discounts](https://support.wix.com/en/article/wix-stores-creating-automatic-discounts) in the dashboard.

With the Discount Rules API, you can:

+ Create, update, and delete discount rules.
+ Retrieve discount rules.

## Before you begin

+ Currently only item-level discounts are supported. Discounts for an entire cart/checkout are not yet supported.
+ Up to 5 triggers can be chained together.

To use the Discount Rules API, import `{ discountRules }` from the `wix-ecom-backend` module:

```javascript
import { discountRules } from 'wix-ecom-backend';
```

## Terminology

- **Discount rule:** A set of conditions (scope and/or trigger) that dictate whether an item/product qualifies for a specified discount.

- **Discount:** The change applied to an item's price when conditions are met. Discount can reduce an item's price by percentage or a specified amount, and also by setting an item to a fixed price.
  - Discounts must have a defined scope/s.

- **Scope:** A group of Wix Stores catalog items that qualify for a discount.
  - Every catalog has 2 scopes "out of the box". For example, Wix Stores has `Specific Products` and `All Products` scopes.
  - Scopes are required in default triggers and discount objects.
  - Triggers and discounts can have multiple scopes.


- **Trigger**: A set of conditions that must be met for a discount to become applicable. Triggers can be chained so that more than 1 condition must be met.
  - **Default triggers:** These built-in triggers fire when a specified minimum/maximum item quantity (for example, "at least 5 items") or cart subtotal ("no more than $100") is reached. For this trigger to fire, the items must also be part of a defined scope.
