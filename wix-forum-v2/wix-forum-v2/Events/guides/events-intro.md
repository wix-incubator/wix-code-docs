---
title: Introduction
---

# Introduction

Wix Forum events are triggered on your site's backend when certain events occur on your site's forum.
You can write event handlers that react to these events. Event handler functions receive data
that corresponds to the event that was fired. Use event handlers to create custom responses
to forum events. 

To add a Forum event handler, add an **events.js** file to the **Backend** section of your site
if one does not already exists. All event handler functions for your site are defined in this
file. 

> **Note:** Backend events don't work when previewing your site.

Event handler functions are defined using the following pattern:
```javascript
export function <wixAppName>_<eventName>(event) {}
```

For example, an event handler that handles the creation of a category looks like:
```javascript
export function wixForum_onCategoryCreated(event) {}
```