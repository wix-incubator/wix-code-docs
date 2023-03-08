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


Wix Forum events are triggered on your site's backend when certain events occur on your site's forum.
You can write event handlers that react to these events. Event handler functions receive data
that corresponds to the event that was fired. Use event handlers to create custom responses
to forum events. 

To add a Forum event handler, add an **events.js** file to the **Backend** section of your site
if one does not already exists. All event handler functions for your site are defined in this
file. 

<!--Recplace with note below when universal modules are working -->
> **Note:** Backend events don't work when previewing your site.

<!--
> **Notes:**
> - This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.
> - Backend events don't work when previewing your site.
-->


Event handler functions are defined using the following pattern:
```javascript
export function <wixAppName>_<eventName>(event) {}
```

For example, an event handler that handles the creation of a category looks like:
```javascript
export function wixForum_onCategoryCreated(event) {}
```