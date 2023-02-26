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

<!--
> __Note__: This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.
-->

The Checkout API allows you to manage and track ticket reservations.

With the Checkout API you can:

- Get lists of available tickets.
- Create, update, and cancel ticket reservations.
- Checkout reserved tickets.
- Preview reservation invoices.


To use the Checkout API,
import `checkout` from wix-events.v2:

```js
import { checkout } from 'wix-events.v2';
```
