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



The Pricing Plans Plans API allows you to manage your pricing plans. 

With the Pricing Plans Plans API, you can:
- [Create](wix-pricing-plans-v2/plans/createplan) and [update](wix-pricing-plans-v2/plans/updateplans) orders.
- [Get](wix-pricing-plans-v2/plans/getplan), [list](wix-pricing-plans-v2/plans/listplans) and [query](wix-pricing-plans-v2/plans/querypublicplans) plans. 
- [Set visibility](wix-pricing-plans-v2/plans/setplanvisibility) for which plans are public and which are hidden.
- [Archive](archivePlan) plans.
- [Set](wix-pricing-plans-v2/plans/makeplanprimary) or [clear](wix-pricing-plans-v2/plans/clearprimary) the primary plan. This determines if a plan is highlighted with a custom ribbon when viewing the plans on a site.
- [Get statistics](wix-pricing-plans-v2/plans/getplanstats) about the plans.
- [Arrange](arrangeplans) the order in which you want plans to be displayed. 


To use the Pricing Plans Plans API, import `{ plans }` from the `wix-pricing-plans.v2` module. 

```javascript
import { plans } from 'wix-pricing-plans.v2';
```

