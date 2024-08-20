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

> **Note:** This module is
> [universal](/api-overview/api-versions#universal-modules).
> Functions in this module can run on both the backend and frontend,
> unless specified otherwise.

&nbsp;

The Order Invoices API allows you to retrieve the IDs of invoices, and IDs of the external invoice apps that created them.


## Terminology

+ __Invoice ID__: Used to retrieve the invoice itself from the service that created it.
+ __Invoice App ID__: ID of the external invoice app that created the invoice.

To use the Order Invoices API, import `{ orderInvoices }` from the `wix-ecom-backend` module:

```javascript
import { orderInvoices } from 'wix-ecom-backend';
```