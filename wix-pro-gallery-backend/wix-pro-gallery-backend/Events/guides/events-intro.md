---
title: Introduction
---

# Introduction


Wix Pro Gallery backend events are triggered when certain events occur with pro galleries in your site's backend. You can write event handlers that react to these events. Event handler functions receive data that correspond to the backend event that has occurred. Use event handlers to create custom responses to pro gallery events. Note that changes made to a pro gallery component trigger backend events when your site is published. To learn more, see [How the API Works](#introduction_how-the-api-works). 

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

