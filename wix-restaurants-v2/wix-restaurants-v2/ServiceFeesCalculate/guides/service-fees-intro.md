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

The Wix Restaurants API allows you to manage your service fees rules and apply them to orders.

With the Wix Restaurants API, you can:
* Create and manage rules for service fees on Wix sites.
* Implement custom pricing and fee structures for restaurant orders on Wix sites.
* Adjust service fees automatically based on certain rules or conditions.

To use the Wix Restaurants API, import `restaurants` from `wix-restaurants.v2`:

```js
import restaurants from 'wix-restaurants.v2';
```


## Before you begin
It's important to note the following point before starting to code:
* This API requires Wix Restaurants Orders to be installed on your site.

## Terminology
* **Order**: Information about an order that is placed by a customer. It contains necessary information to calculate service fees. The order has not yet been placed, it is in the pre-checkout stage.
* **Condition**: Evaluates a specific field in the order.
* **Condition Tree**: Contains two conditions and an operator.
* **Rule**: Defines the fee that is applied when specific conditions (also defined by the rule) are met.