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

The Ticket Definitions API allows you to manage ticket definitions for tickets to your site's events.

With the Ticket Definitions API you can:

- [Create](wix-events-v2/ticketdefinitions/createticketdefinition) and [update](wix-events-v2/ticketdefinitions/updateticketdefinition) the ticket definitions for tickets to an event.
- [Change the currency](wix-events-v2/ticketdefinitions/changecurrency) used for event tickets.


To use the Ticket Definitions API, import `{ ticketDefinitions }` from `'wix-events.v2'`:

```js
import { ticketDefinitions } from 'wix-events.v2';
```
