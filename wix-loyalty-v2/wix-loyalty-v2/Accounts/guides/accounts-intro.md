---
title: Introduction
---

# Introduction

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>  

> **Note:** This module is [universal](https://support.wix.com/https://www.wix.com/velo/reference/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.  

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
