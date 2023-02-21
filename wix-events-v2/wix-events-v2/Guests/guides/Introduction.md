---
title: Introduction
---
# Introduction

&nbsp;
<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div> . 

&nbsp;

>**Note**: This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.

With Events Guests APIs, site owners can get information about all guests who bought tickets to an event or who RSVP'ed.  

The Events Guests APIs allow you to:  

- Retrieve a list of guests by event ID.
- Get information about each individual ticket buyer.
- Find out the attendance status of each guest.

## Import Statement

To use the Events Guests API, import `{ guests }` from the `wix-events.v2` module:

```javascript
import { guests } from 'wix-events.v2';
```


