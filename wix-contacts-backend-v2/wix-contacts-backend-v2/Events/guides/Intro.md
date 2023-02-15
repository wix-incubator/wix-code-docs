---
title: Introduction
---
# Introduction

&nbsp;
Wix CRM events are fired on your site's backend when certain events occur related to site contacts.
  You can write event handlers that react to these events. Event handler functions
  receive data that corresponds to the event that fired. Use event handlers
  to create custom responses to contact events.

  To add a CRM event handler, add an **events.js** file to the **Backend** section
  of your site if one does not already exist. All event handler functions for your
  site are defined in this file.

  Event handler functions are defined using the following pattern:

  ```javascript
  export function <wixAppName>_<eventName>(event) { }
  ```

  For example, an event handler that handles site visitor form submittal looks
  like this:

  ```javascript
  export function wixCrm_onFormSubmit(event) { }
  ```

  Note that backend events don't work when previewing your site.