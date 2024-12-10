---
title: Introduction
---
# Introduction

With Policies APIs, you can manage the policies for a particular event. For example, you can create, update, and delete policies. You can also reorder policies in the Event Dashboard and checkout form.    

Policies define terms & conditions for the events, such as terms for canceling attendance, transferring a ticket to another person, and so on. For example: "Participants are entitled to a 100% refund if canceling attendance 1 week prior to the event. After this date, participants will be refunded 50% of the ticket price."    

A policy agreement checkbox will be added to the RSVP or checkout form. The policy text can be read in a pop-up window if you click the policy name. By default, there are no policies when you first create an event.  

## Terminology

- **Policy**: Text that defines terms & conditions.
- **Event Dashboard**: Control center which allows users to manage their site events settings, and features.
- **Checkout form**: The final step in the ticket purchasing process where the customer fills in personal info, reads policies and pays money.


## Before you begin

It’s important to note the following points before starting to code:  

- To use the Policies API, import `{ policies }` from the `wix-events.v2` module:

```javascript
import { policies } from 'wix-events.v2';
```

