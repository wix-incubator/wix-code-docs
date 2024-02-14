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


The Pricing Plans Plans API allows you to manage your [Plans](wix-pricing-plans-v2/plans) and [Orders](wix-pricing-plans-v2/orders). 


## Before you begin

To use the wix-pricing-plans-v2 API, import `wixPricingPlans` from the `wix-pricing-plans.v2` module. 

```javascript
import wixPricingPlans from 'wix-pricing-plans.v2';
```


Make sure to set up your site to:

+ Accept payments as described in [About Accepting Payments](https://support.wix.com/en/article/about-accepting-payments).         
+ Offer membership plans as described in [About Pricing Plans](https://support.wix.com/en/article/about-pricing-plans). 
 
When setting up your site to accept pricing plans, define the plans you want to offer [using the Dashboard](https://support.wix.com/en/article/creating-a-plan-in-pricing-plans) or [using the Pricing Plans' Plans APIs](wix-pricing-plans-v2/plans).
         

### Managing orders
         
Members can order pricing plans in 2 ways:
+ **Online**. Members order and pay for their plans on your site without manual intervention. 
+ **Offline**. Members place their order by phone, text, or email. You manually record each stage of the transaction.
         
> **Note:**
> Updating the properties of a pricing plan does not affect any current orders of the plan by members. The existing orders retain their existing terms and pricing.
         
### Orders and subscriptions
          
Actions related to basic pricing plan management are available from the [Pricing Plans](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fmembership%3FreferralInfo%3Dvelo-docs) page in the Dashboard. These actions correspond to the functions available in the [Plans APIs](wix-pricing-plans-v2/plans/introduction).
         

Every pricing plan order corresponds to a Wix subscription, including orders for single payment plans. You can see all orders from your site's [Subscriptions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fsubscriptions%3FreferralInfo%3Dvelo-docs) page in the Dashboard. Actions available on this page correspond to the functions available in the [Orders APIs](wix-pricing-plans-v2/orders/introduction). 


> **Notes**: 
>
> + Wix pricing plans are 1 of several Wix subscriptions available from the [Subscriptions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fsubscriptions%3FreferralInfo%3Dvelo-docs) page. For example, the Subscriptions page also includes Wix Stores subscriptions and Wix invoice subscriptions.
>
> + Pricing plans can be 1 of 3 different pricing models: `singlePaymentForDuration`, `singlePaymentUnlimited`, or `subscription`. Orders for all pricing plan models are displayed on the Subscriptions page, not just `subscription` type models. See [Pricing Models](wix-pricing-plans-v2/introduction#pricing-models) to learn more.  


## Terminology
- **Plan**: Type of plan, including: One-time Payment, Recurring Payment, or Free/Trial.
- **Pricing Models**: The pricing and duration options for a plan.
    - **Subscription**: A plan with recurring payment cycles.
    - **Single Payment For Duration**: A set plan that does not renew, paid for with a single payment.
    - **Single Payment Unlimited**: An unlimited plan, paid for with a single payment. The plan does not expire and remains valid until canceled.
- **Free Trial**: A plan's free trial period that can be added to a subscription pricing model.
- **Free Plan**: A free plan that is valid until canceled (single payment unlimited), or a free plan with a limited duration (single payment for duration).
- **Order**: A member's order or purchase of a pricing plan. An order can be made in 1 of 2 ways:
    - **Online**: When members order and pay for their plans without manual intervention.
    - **Offline**: When members place their order by phone, text, or email.

