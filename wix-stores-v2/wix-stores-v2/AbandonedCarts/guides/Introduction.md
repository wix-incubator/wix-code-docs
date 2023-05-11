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


This service allows you to read and delete abandoned carts, and listen to abandoned-related events from Wix Stores.

## Permissions information

Functions in the Abandoned Carts API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>

## Events

Abandoned Carts API events are fired on your site’s backend
when certain events occur with Abandoned Carts.
See [`wix-stores-backend` events](https://www.wix.com/velo/reference/wix-stores-backend/events)
for more information related to these events.

To use the Abandoned Carts API,
import `abandonedCarts` from wix-stores.v2:

```js
import { abandonedCarts } from 'wix-stores.v2';
```
