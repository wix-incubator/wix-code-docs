---
title: Introduction
---
# Introduction

Wix Stores events are fired on your site's backend when certain events occur related to Stores carts, current carts, and orders.
You can write event handlers that react to these events. Event handler functions
receive data that corresponds to the event that fired. Use event handlers
to create custom responses to Stores events.

To add a Stores event handler, add an **events.js** file to the **Backend** section of your site if one does not already exist. All event handler functions for your
site are defined in this file.

Event handler functions are defined using the following pattern:
```javascript
export function <wixAppName>_<eventName>(event) { }
```

For example, an event handler that handles the creation of a subscription option looks
like this:
```javascript
export function wixStores_onSubscriptionOptionCreated(event) { }
```

> **Note:** Backend events don't work when previewing your site.
