---
title: Introduction
---

# Introduction

The Loyalty Account API allows you to create and manage your customer loyalty accounts.

With the Loyalty Account API, you can:
- [Create](wix-loyalty-backend/account/createaccount) a loyalty account for a site contact.
- Manually [adjust points](wix-loyalty-backend/account/adjustpoints) in a loyalty account.
- Set up functions that allow loyalty accounts to [earn points](wix-loyalty-backend/account/earnpoints) through their actions.
- Trigger an event handler to run any time an account has a reward available.

To use the Account API, import `{ account }` from the 'wix-loyalty-backend' module. 

```javascript
import { account } from 'wix-loyalty-backend';
```

## Before you begin

It’s important to note the following points before starting to code:
- To create a new loyalty account, a customer must first be a site contact with a contact ID.

## Terminology

- **Account ID:** Every loyalty account gets a new account ID which is different from that customer's contact ID and member ID.
- **Transaction:** A loyalty transaction includes any activity that changes a loyalty account point balance, such as adjusting, earning, or redeeming loyalty points.
