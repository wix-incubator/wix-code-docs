---
title: Introduction
---

# Introduction

&nbsp;

<div style=“background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block”>
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href=“https://www.wix.com/velo/reference/api-overview/developer-preview”>Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href=“mailto:velo-preview-feedback@wix.com”>Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;

Events are triggered in your site’s backend when certain changes occur to your site’s members. You can write event handlers that react to these events. Event handler functions receive data that correspond to the backend event that has occurred. Use event handlers to create custom responses to the events. 

> **Note:** Backend events don’t work when previewing your site.


## Working with Members Event Handlers

To add a members event handler, add an **events.js** file to the **Backend** or your site if one does not already exist. All event handler functions for your site are defined in this file. 

Event handler functions are defined using the following pattern:
```javascript
export function <wixAppName>_<eventName>(event) { }
```

For example, an event handler that handles the creation of a member looks
like this:
```javascript
export function wixMembers_onMemberCreated(event) { }
```