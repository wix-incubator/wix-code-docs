---
title: Introduction
---
# Introduction

&nbsp;

> __Note__: This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.

With Events Policies APIs, you can manage the policies for a particular event. For example, you can create, update, and delete policies. You can also reorder policies in the Event Dashboard and checkout form.    

Policies define terms & conditions for the events, such as terms for canceling attendance, transferring a ticket to another person, and so on. For example: "Participants are entitled to a 100% refund if canceling attendance 1 week prior to the event. After this date, participants will be refunded 50% of the ticket price."    

A policy agreement checkbox will be added to the RSVP or checkout form. The policy text can be read in a pop-up window if you click the policy name. By default, there are no policies when you first create an event.  

> __Note__: The following functions are restricted and only run if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function:  
>
> - [`createPolicy()`](https://www.wix.com/velo/reference/wix-events-v2/policies/createpolicy)
> - [`deletePolicy()`](https://www.wix.com/velo/reference/wix-events-v2/policies/deletepolicy)
> - [`reorderEventPolicies()`](https://www.wix.com/velo/reference/wix-events-v2/policies/reordereventpolicies)
> - [`updatePolicy()`](https://www.wix.com/velo/reference/wix-events-v2/policies/updatepolicy)

## Terminology

- **Policy**: text that defines terms & conditions, as relevant.
- **Event Dashboard**: controls center which allows users to manage their site events settings and features.
- **Checkout form**: the final step in the ticket purchasing process where the customer fills in personal info, reads policies and pays money.


## Import Statement

To use the Wix Policies API, import `{ policies }` from the `wix-events.v2` module:

```javascript
import { policies } from 'wix-events.v2';
```


