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

Wix Loyalty events are fired in your site's backend when certain events related to loyalty occur in your site's backend. You can write event handlers that react to these events. Event handler functions receive data that corresponds to the event that has occurred. Use event handlers to create custom responses to loyalty events.

> **Note:** Backend events don't work when previewing your site.

To add a loyalty event handler, add an **events.js** file to the **Backend** section of your site if one does not already exist. All event handler functions for your
site are defined in this file.

Event handler functions are defined using the following pattern:
```javascript
export function <wixAppName>_<eventName>(event) { }
```

For example, an event handler that handles loyalty account updates looks like this:
```javascript
export function wixLoyalty_onAccountUpdated(event) { }
```
