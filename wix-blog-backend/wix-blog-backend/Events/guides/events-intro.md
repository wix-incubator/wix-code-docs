---
title: Introduction
---

# Introduction

Wix Blog events are fires on your site's backend when certain events occur to your site's blog.
You can write event handlers that react to these events. Event handler functions receive data
that corresponds to the event that was fired. Use event handlers to create custom responses
to blog events. 

To add a Blog event handler, add an **events.js** file to the **Backend** section of your site
if one does not already exists. All event handler functions for your site are defined in this
file. 

Backend events are **not** triggered when previewing your site.

Event handler functions are defined using the following pattern:
```javascript
export function <wixAppName>_<eventName>(event) {}
```

For example, an event handler that handles the created of a post looks like:
```javascript
export function wixBlog_onPostCreated(event) {}
```
*/