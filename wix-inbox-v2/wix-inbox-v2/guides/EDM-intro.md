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

<!--
> **Note:**
> This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.
-->


With Wix Inbox v2, site contributors
can communicate with the site's visitors, contacts, and members
through Wix Chat, SMS, a Facebook business page, or other channels.
Visitor activities on the site and 3rd-party services
can also be displayed in Inbox conversations.

The Inbox APIs expose functionality for working with a site's inbox.
With the Inbox APIs, you can:

- [Send messages](messages/sendmessage)
  on behalf of the business or a visitor.
- [Retrieve conversations](conversations/getorcreateconversation)
  between a visitor and the business.

<!-- - Handle webhooks when messages are sent to [a visitor](https://dev.wix.com/api/rest/inbox/messages/message-sent-to-participant-webhook) or [the business](https://dev.wix.com/api/rest/inbox/messages/message-sent-to-business-webhook), when a [message button is clicked](https://dev.wix.com/api/rest/inbox/messages/button-interacted-webhook), or when [conversations are merged](https://dev.wix.com/api/rest/inbox/conversations/conversations-merged-webhook). -->

[Read more about how site contributors work with Wix Inbox][kb-inbox].

## Terminology

- A **message** is sent from the business to the visitor
  or from the visitor to the business.
  Messages can be one of these types: `basic`, `minimal`, `template`, `form`, `system`.
  [Learn more about message types.][message-types]
- A **conversation** is a collection of messages that takes place between two or more participants.
  Conversations are displayed in the site's [Inbox][inbox-deeplink],
  one conversation per site visitor, contact, or member.
- A **participant** is the site visitor, contact, or member.
  [Learn more about types of participant IDs.][visitor-id-types]

[kb-inbox]: https://support.wix.com/en/article/wix-inbox-getting-started
[inbox-deeplink]: https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Finbox
[message-types]: messages/message-types
[visitor-id-types]: conversations/conversation-id