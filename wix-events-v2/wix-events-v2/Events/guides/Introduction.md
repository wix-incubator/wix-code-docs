---
title: Introduction
---
# Introduction

Wix Events events are fired on your site's backend when certain actions occur to Wix Events. You can write event handlers that react to these events. Event handler functions receive data that corresponds to the event that fired. Use event handlers to create custom responses to Wix Events events.

To add an activity counters event handler, add an **events.js** file to the **Backend** section of your site if one does not already exist. All event handler functions for your site are defined in this file.

Event handler functions are defined using the following pattern:

```js
export function <wixAppName>_<eventName>(event) { }
```

For example, an event handler that handles the event cancellation looks like this:

```js
export function wixEvents_onEventCanceled(event) { }
```

> **Note:** Backend events don't work when previewing your site.