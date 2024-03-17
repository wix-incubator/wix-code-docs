---
title: Constructing a Rule
---

# Constructing a Rule

A rule has two main parts: conditions and a fee. When [`/calculateServiceFees()`](/calculateservicefees) is called, it assesses each rule in relation to the specified order. When a rule is assessed, if the conditions are met, the fee is included in the API's response.

## Conditions

Conditions can be either a single condition or a condition tree.

A single condition evaluates a specific field in the order. For example, it could check if the value of the field is greater than a certain number.

A condition tree contains two conditions and an operator. The conditions can each be either a single condition or a condition tree. There are two operator values:
- `"AND"`: Both conditions must be met for the condition tree to be considered met.
- `"OR"`: At least one of the conditions must be met for the condition tree to be considered met.

### Condition tree example
#### Conditions
For the service fee to be applied, we would need to satisfy these conditions:
* The price subtotal is greater than `50` </br>
    AND
* Either:
    - Delivery type is `"DELIVERY"` </br>
        OR
    - Order is made in the mobile app

#### Example: Conditions are met
We have the following values:
- Subtotal is `70`
- Delivery type is `"DELIVERY"`
- Order is `"WEBSITE"`

In this case, the conditions are met, because the subtotal is greater than `50` and the delivery type is `"DELIVERY"`. It doesn't matter that the platform isn't `"MOBILE_APP"` because we only need that OR delivery type to be `"DELIVERY"`.

#### Example: Conditions are not met
We have the following values:
- Subtotal is `30`
- Delivery type is `"DELIVERY"`
- Order is `"MOBILE_APP"`

In this case, the conditions are not met, because even though the delivery type is `"DELIVERY"` and the platform is `"MOBILE_APP"`, the subtotal is not greater than `50`. 

## Fee

A fee is either a fixed amount or a percentage of the order's subtotal. It can also include tax.

If the conditions are met, the fee is calculated and applied when Calculate Service Fees is called.
