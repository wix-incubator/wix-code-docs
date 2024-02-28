---
title: Introduction
---

# Introduction

Wix Forms events are fired in your site's backend when certain events related to forms occur in your site's backend. You can write event handlers that react to these events. Event handler functions receive data that corresponds to the event that has occurred. Use event handlers to create custom responses to forms events.

> **Note:** Backend events don't work when previewing your site.

To add a forms event handler, add an **events.js** file to the **Backend** section of your site if one does not already exist. All event handler functions for your
site are defined in this file.

Event handler functions are defined using the following pattern:
```javascript
export function <wixAppName>_<eventName>(event) { }
```

For example, an event handler that handles form submission updates looks like this:
```javascript
export function wixForms_onSubmissionUpdated(event) { }
```
