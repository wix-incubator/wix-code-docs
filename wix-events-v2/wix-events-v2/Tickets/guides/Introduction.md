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

The Tickets API allows you to manage tickets for your site's events.

With the Tickets API you can:

- Access and update the tickets for an event.
- Check in tickets, and delete ticket check-ins.

## Before you begin

It’s important to note the following points before starting to code:  

- To use the Tickets API, import `{ tickets }` from `'wix-events.v2'`:

```js
import { tickets } from 'wix-events.v2';
```
