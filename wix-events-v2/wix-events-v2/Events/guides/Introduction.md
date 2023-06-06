# Introduction

Backend events are fired in your site's backend when certain changes occur in your site's Wix events. You can write event handlers that react to these backend events. Event handler functions receive data that corresponds to the backend event that has occurred. Use event handlers to create custom responses to the backend events.

> **Note**: For clarity, this reference refers to:
>
> - "backend events" when discussing events that get fired and are handled by event handlers.  
> - "Wix events" when discussing events that people attend.

Backend events are **not** fired when previewing your site.

To add an event handler, add an **events.js** file to the **Backend** section of your site if one does not already exist. All event handler functions for your site are defined in this file.

Event handler functions are defined using the following pattern:

```javascript
export function <wixAppName>_<eventName>(event) { }
```

For example, an event handler that handles the start of a site event looks like this:

```javascript
export function wixEvents_onEventStarted(event) { }
```