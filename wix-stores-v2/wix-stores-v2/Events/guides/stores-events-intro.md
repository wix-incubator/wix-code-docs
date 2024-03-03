---
title: Introduction
---

# Introduction

Wix Stores events are fired in your site's backend when certain events occur in your site's store. You can write event handlers that react to these events. Event handler functions receive data that corresponds to the event that has occurred. Use event handlers to create custom responses to store events.

To add a store event handler, add an **events.js** file to the **Backend** section of your site if one does not already exist. All event handler functions for your site are defined in this file.

Event handler functions are defined using the following pattern:
```javascript
export function <wixAppName>_<eventName>(event) { }
```
For example, an event handler that handles cart abandonment in a Wix Store looks
like this:
```javascript
export function wixStores_onCartAbandoned(event) { }
```

> **Note:** Backend events don't work when previewing your site.
