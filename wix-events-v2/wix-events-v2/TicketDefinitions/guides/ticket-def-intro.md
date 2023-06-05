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

The Ticket Definitions API allows you to manage ticket definitions for tickets to your site's events.

With the Ticket Definitions API you can:

- Create and update the ticket definitions for tickets to an event.
- Change the currency used for event tickets.
- Get ticket settings information.

## Before you begin

It’s important to note the following points before starting to code:  

- To use the Ticket Definitions API, import `{ ticketDefinitions }` from `'wix-events.v2'`:

```js
import { ticketDefinitions } from 'wix-events.v2';
```

## Permissions information

The following functions in the Ticket Definitions API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function:

- `changeCurrency()`
- `createTicketDefinition()`
- `deleteTicketDefinition()`
- `updateTicketDefinition()`

<blockquote class='warning'>
<p>
<strong>Warning:</strong>
Elevating a function allows it to be called by any site visitor.
Exercise caution to prevent security vulnerabilities.
</p>
</blockquote>