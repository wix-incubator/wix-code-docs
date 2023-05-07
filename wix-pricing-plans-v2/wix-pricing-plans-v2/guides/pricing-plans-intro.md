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



## Before you begin

To use the wix-pricing-plans-v2 API, import `wixPricingPlans` from the `wix-pricing-plans.v2` module. 

```javascript
import wixPricingPlans from 'wix-pricing-plans.v2';
```


Make sure to set up your site to:

+ Accept payments as described in [About Accepting Payments](https://support.wix.com/en/article/about-accepting-payments).         
+ Offer membership plans as described in [About Pricing Plans](https://support.wix.com/en/article/about-pricing-plans). 
 
When setting up your site to accept pricing plans, define the plans you want to offer [using the Dashboard](https://support.wix.com/en/article/creating-a-plan-in-pricing-plans) or [using the Pricing Plan's Plans APIs](wix-pricing-plans-v2/plans).
         

### Managing orders
         
Members can order pricing plans in 2 ways:
+ **Online**. Members order and pay for their plans on your site without manual intervention. 
+ **Offline**. Members place their order by phone, text, or email. You manually record each stage of the transaction.
         
>**Note:**Updating the properties of a pricing plan does not affect any current orders of the plan by members. The existing orders retain their existing terms and pricing.
         
 ### Pricing models
Pricing models contain the [pricing and duration options](https://support.wix.com/en/article/pricing-plans-creating-a-plan#step-3-setting-the-price-and-duration-of-your-plan) for a plan.

Plans are based on a pricing model, which is defined with the plan's `pricing` property. A pricing model can be one of the following:
+ **A subscription:** A plan with recurring payment cycles.
    
*Example:* A 1-year subscription with monthly, recurring payments. Each payment is $25, so the total price for the plan is $300. In this example, the subscription is in its third month.
 
`cycleDuration` is the length of one payment cycle. Multiply `cycleDuration`'s `count` by `cycleCount` to get the subscription duration. Currently, `cycleDuration` only supports a value of `1`.

`index` of `currentCycle` is the current payment cycle for the subscription. `index` is `0` when the order is in a free trial period. In all other cases, the `index` starts with `1` for the first payment cycle in the subscription. For orders with a single payment, the `index` will remain `1` throughout the duration.
```javascript
    "pricing": {
        "subscription": {
            "cycleDuration": {
                // Payment recurs every month
                "count": 1,
                "unit": "MONTH"
            },
            // for 12 times
            "cycleCount": 12
        },               
        "prices": [{              
            "duration": {
                "cycleFrom": 1,
                "numberOfCycles": 12
            },
            "price": {
                "subtotal": "25",
                "discount": "0",
                "total": "25",
                "currency": "USD"
            }
        }]
    }, 
    ...
    "currentCycle": {
        "index": 3,
        "startedDate": "2022-03-01T13:45:53.129Z",
        "endedDate": "2022-04-01T13:45:53.129Z"
    },
```
+ **A Single Payment for Duration plan:** A plan paid for with a single payment. The plan does not renew after the duration.
 
*Example:* A plan with a single payment of $35 for 3 months. 

The `duration` `cycleFrom` and `numberOfCycles` will both be `1`, as the single price applies to the entirety of the subscription.

`index` of `currentCycle` will remain `1` throughout the duration.
```javascript
    "pricing": {
        "singlePaymentForDuration": {
            // Plan duration is 3 months
            "count": 3,
            "unit": "MONTH"
        },
        "prices": [{              
            "duration": {
                "cycleFrom": 1,
                "numberOfCycles": 1
            },
            "price": {
                "subtotal": "35",
                "discount": "0",
                "total": "35",
                "currency": "USD"
            }
        }]
    },
    ...
    "currentCycle": {
        "index": 1,
        "startedDate": "2022-01-01T13:45:53.129Z",
        "endedDate": "2022-04-01T13:45:53.129Z"
    },        
```
+ **A Single Payment Unlimited plan:** A plan paid for with a single payment. The plan does not expire and remains valid until canceled.

*Example:* An unlimited plan that is paid for in advance with one payment of $200. 

`singlePaymentUnlimited` is `true`.

The `duration` `cycleFrom` and `numberOfCycles` will remain `1` throughout the duration of the plan.

`index` of `currentCycle` will remain `1` throughout the duration. `singlePaymentUnlimitedPlans` don't return an `endedDate` in `currentCycle`.
```javascript
    "pricing": {
        "singlePaymentUnlimited": true,
        "prices": [{
            "duration": {
                "cycleFrom": 1,
                "numberOfCycles": 1
            },                
            "price": {
                "subtotal": "200",
                "discount": "0",
                "total": "200",
                "currency": "USD"
            }
        }]
    },
    ...
    "currentCycle": {
        "index": 1,
        "startedDate": "2021-06-015T13:45:53.129Z"
    },        
```

### Free plans and free trial periods
A free plan that is valid until canceled is a `singlePaymentUnlimited` pricing model. A free plan with a limited duration is treated as a `singlePaymentForDuration` pricing model.

A site owner can also add a free trial period, in days, to a `subscription` pricing model. When the free trial is over, the first payment cycle begins and the buyer is billed. During the free trial period, the `index` of `currentCycle` is `0`. A buyer only receives the free trial period for the first time they purchase a plan. For example, a buyer purchases a monthly plan for 3 months that includes a 7-day free trial period. The buyer may purchase the same plan again, for another 3 months, but will not receive the 7-day free trial period.

When a buyer cancels their order during the free trial period, their subscription will expire at the end of the free trial period and they will not be billed. A site owner can [cancel an ordered plan](wix-pricing-plans-v2/orders/cancelorder) during the free trial period and choose to apply the cancellation `IMMEDIATELY` or at the `NEXT_PAYMENT_DATE`. 

Canceling `IMMEDIATELY` ends the subscription for the buyer immediately, even during the free trial period, and the buyer won't be billed. Canceling at the `NEXT_PAYMENT_DATE` allows the buyer to continue using the benefits of the subscription until the end of the free trial period. Then, the subscription ends and the buyer is not billed.

### Pricing plan types and visibility

+ **Public pricing plans** are visible plans that site members and visitors can see on the site and purchase. By default, pricing plans are public when created.
 
+ **Hidden pricing plans** are plans whose `public` property has been set to `false`. These plans cannot be seen on the site by the site member or visitor. For example, consider hiding a plan if it has reached its maximum capacity and temporarily is not available for purchase. 
 
    Changing a plan’s visibility with the `public` property does not impact existing purchases. All purchases for hidden plans are still active and keep their terms and payment options.
 
+ **Active pricing plans** include all non-archived plans, such as public plans and hidden plans.
 
+ **Archived pricing plans** are plans that are no longer needed on the site. For example, discontinued plans. When a plan is archived, it is no longer visible as a public plan that can be chosen by site visitors. 

The `public` property is automatically set to `false` when a plan is archived. Archived plans cannot be purchased. 

Site owners can see archived plans in the Dashboard under **Pricing Plans -> Archived Plans**. 

Archiving cannot be reversed. Once archived, a plan cannot be set as active again for purchase. Archiving does not impact existing purchases made for the plan. All purchases are still active and keep their pricing and terms.


### Orders and subscriptions
          
Actions related to basic pricing plan management are available from the [Pricing Plans](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fmembership%3FreferralInfo%3Dvelo-docs) page in the Dashboard. These actions correspond to the functions available in the [Plans APIs](wix-pricing-plans-v2/plans/introduction).
         

Every pricing plan order corresponds to a Wix subscription, including orders for single payment plans. You can see all orders from your site's [Subscriptions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fsubscriptions%3FreferralInfo%3Dvelo-docs) page in the Dashboard. Actions available on this page correspond to the functions available in the [Orders APIs](wix-pricing-plans-v2/orders/introduction). 


> **Notes**: 
>
> + Wix pricing plans are 1 of several Wix subscriptions available from the Subscriptions page. For example, the Subscriptions page also includes Wix Stores subscriptions and Wix invoice subscriptions.
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

