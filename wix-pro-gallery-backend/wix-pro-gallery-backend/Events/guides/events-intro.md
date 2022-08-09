---
title: Introduction
---

# Introduction


Wix Pro Gallery Backend events are triggered in your site's backend when certain events occur with pro galleries on your backend. You can write event handlers that react to these events. Event handler functions receive data that correspond to the backend event that has occurred. Use event handlers to create custom responses to pro gallery events.

>**Note:** Backend events aren't triggered when previewing your site. 

## Working with Pro Gallery Event Handlers
To add a pro gallery event handler, add an **events.js** file to the **Backend** section of your site if one does not already exits. All event handler functions for your site are defined in this file.

Event handler functions are defined using the following pattern:

```js
export function <wixAppName>_<eventName>(event) { }
```

For example, an event handler that handles the creation of a site member looks like this:

```js
export function wixProGallery_onGalleryCreated(event) { }
```

