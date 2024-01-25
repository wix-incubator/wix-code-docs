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



The Pricing Plans Orders API allows you to manage orders for your pricing plans. 

With the Pricing Plans Orders API, you can:
- [Get](wix-pricing-plans-v2/orders/managementgetorder) and [list](wix-pricing-plans-v2/orders/managementlistorders) orders.
- [Create](wix-pricing-plans-v2/orders/createofflineorder) offline orders.
- [Mark](wix-pricing-plans-v2/orders/markaspaid) offline orders as paid. 
- [Preview](wix-pricing-plans-v2/orders/getpricepreview) the pricing details of an order.
- [Pause](wix-pricing-plans-v2/orders/pauseorder), [resume](wix-pricing-plans-v2/orders/resumeorder), or [cancel](requestcancellation) orders.
- [Extend the duration](wix-pricing-plans-v2/orders/postponeenddate) of orders. 


To use the Pricing Plans Orders API, import `{ orders }` from the `wix-pricing-plans.v2` module. 

```javascript
import { orders } from 'wix-pricing-plans.v2';
```

