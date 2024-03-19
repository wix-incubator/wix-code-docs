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

The Messages API allows you to send messages to participants and read previously sent messages. 

With the Messages API, you can: 
- [List](/wix-inbox-v2/messages/listmessages) messages from a conversation. 
- [Send](/wix-inbox-v2/messages/sendmessage) a message. 

## Before you begin

To send a message you must specify the message's direction, visibility, and the message type. 

Messages can be sent in 1 of 2 directions:
- **Business to participant:** Messages sent from your site to your site visitors. 
- **Participant to Business:** Messages sent from your site visitors to your site. 

You can control who sees the messages being sent by setting the `visibility` field in the `message` object to one of the following:
- `BUSINESS_AND_PARTICIPANT`
- `BUSINESS`

Messages can be sent in one of the following types:
- Basic
- Template
- Minimal
- Form
- System

[Learn more about message types](wix-inbox-v2/messages/message-types) and how to structure messages in the `message` object.

## Terminology
- **Message:** A message exchanged between the business and the participant. 
- **Business:** Your Wix site.
- **Participant:** The site visitor. 
