---
title: Introduction
---

# Introduction

Wix Sender Details events are triggered when certain events occur with sender details in your site's backend. You can write event handlers that react to these events. Event handler functions receive data that correspond to the backend event that has occurred. Use event handlers to create custom responses to sender detail events.

>**Note:** Backend events aren't triggered when previewing your site. 

## Working with Sender Details Event Handlers

To add a sender details event handler, add an **events.js** file to the **Backend** section of your site if one does not already exist. All event handler functions for your site are defined in this file.

Event handler functions are defined using the following pattern:

```js
export function <wixAppName>_<eventName>(event) { }
```

For example, an event handler that handles the creation of a site member looks like this:

```js
export function wixSenderDetails_onSenderDetailsUpdated(event) { }
```

