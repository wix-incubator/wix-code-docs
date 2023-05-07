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

The Checkout API allows you to manage and track ticket reservations.

With the Checkout API you can:

- Get lists of available tickets.
- Create, update, and cancel ticket reservations.
- Checkout reserved tickets.
- Preview reservation invoices.

## Before you begin

It’s important to note the following points before starting to code:  

- To use the Checkout API, import `checkout` from `wix-events.v2`:

```js
import { checkout } from 'wix-events.v2';
```

## Permissions information

The following functions in Policies are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function:

- `cancelReservation()`
- `checkout()`
- `createReservation()`
- `getCheckoutOptions()`
- `getInvoice()`
- `listAvailableTickets()`
- `queryAvailableTickets()`
- `updateCheckout()`

<blockquote class='warning'>
<p>
<strong>Warning:</strong>
Elevating a function allows it to be called by any site visitor.
Exercise caution to prevent security vulnerabilities.
</p>
</blockquote>