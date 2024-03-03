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

> __Note__: This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.

With Policies APIs, you can manage the policies for a particular event. For example, you can create, update, and delete policies. You can also reorder policies in the Event Dashboard and checkout form.    

Policies define terms & conditions for the events, such as terms for canceling attendance, transferring a ticket to another person, and so on. For example: "Participants are entitled to a 100% refund if canceling attendance 1 week prior to the event. After this date, participants will be refunded 50% of the ticket price."    

A policy agreement checkbox will be added to the RSVP or checkout form. The policy text can be read in a pop-up window if you click the policy name. By default, there are no policies when you first create an event.  

## Terminology

- **Policy**: text that defines terms & conditions, as relevant.
- **Event Dashboard**: controls center which allows users to manage their site events settings and features.
- **Checkout form**: the final step in the ticket purchasing process where the customer fills in personal info, reads policies and pays money.


## Before you begin

It’s important to note the following points before starting to code:  

- To use the Policies API, import `{ policies }` from the `wix-events.v2` module:

```javascript
import { policies } from 'wix-events.v2';
```

## Permissions information

The following functions in the Policies API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function:

- `createPolicy()`
- `deletePolicy()`
- `reorderEventPolicies`
- `updatePolicy()`

<blockquote class='warning'>
<p>
<strong>Warning:</strong>
Elevating a function allows it to be called by any site visitor.
Exercise caution to prevent security vulnerabilities.
</p>
</blockquote>
