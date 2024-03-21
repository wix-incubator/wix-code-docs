---
title: Introduction
---

# Introduction

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;

<!-- > __Note:__
> This module is [universal](/api-overview/api-versions#universal-modules).
> Functions in this module can run on both the backend and frontend,
> unless specified otherwise. -->

The Conversations API provides functionality for managing conversations with visitors on your site. 

With the Conversations API you can: 
- [Retrieve](/wix-inbox-v2/conversations/getconversation) exisiting conversations. 
- [Create](/wix-inbox-v2/conversations/gerorcreateconversation) a new conversation in your site's inbox. 

## Before you begin

Conversations are held between the business and one of the following types of participants: 
- **Anonymous visitor**
- [**Contact**](https://support.wix.com/en/article/understanding-the-differences-between-contacts-members-and-subscribers#contacts)
- [**Member**](https://support.wix.com/en/article/understanding-the-differences-between-contacts-members-and-subscribers#members)

> **Note:** A conversation's ID changes when the type of participant changes, such as when an anonymous visitor becomes a member. [Learn more about Conversation IDs](/wix-inbox-v2/conversations/conversation-id).


To use the Conversations API, import `{ conversations }` from the `wix-inbox.v2` module:

```javascript
import { conversations } from 'wix-inbox.v2';
```


## Terminology

- **Conversation:** A collection of message exchanges between a business and a participant. Conversations are displayed in your site's [Inbox][inbox-deeplink]. 
- **Channel:** A communication channel, such as email or chat boxes in which a visitor, contact, or member can receive messages.
- **Business:** Your Wix site.
- **Participant:** An anonymous visitor, contact, or site member. 



[inbox-deeplink]: https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Finbox