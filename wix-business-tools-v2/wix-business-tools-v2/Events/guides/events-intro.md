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

Wix Business Tools events are fired in your site's backend when certain events occur in your site's Business Tools application. You can write event handlers that react to these events. Event handler functions receive data that correspond to the event that has occurred. Use event handlers to create custom responses to events.

To add an event handler, add an events.js file to the Backend section of your site if one does not already exist. All event handler functions for your site are defined in this file.

Event handler functions are defined using the following pattern:

```js
export function <wixAppName>_<eventName>(event) { }
```

For example, an event handler that handles a location update looks like this:

```js
export function wixLocations_onLocationUpdated(event) { }
```

> **Note:** Backend events don't work when previewing your site.