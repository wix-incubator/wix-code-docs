---
title: Introduction
---

# Introduction

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>


This module is universal. Functions in this module can run on both the backend and frontend, unless specified otherwise.


The Sender Details API contains the information that is displayed as the sender’s name and email address when sending an email from your Wix site. Use the API to [get](/getsenderdetails) and [update](/updatesenderdetails) your email sender details, and [verify](/verifyemail) your sender email address.

If you send an email campaign with a public email domain (e.g. @gmail.com or @yahoo.com), the email address isn't displayed in the 'from' header. Instead, the email address is replaced with @wixemails.com (or @wixsitemail.com for free users), and the sender's email is placed in the 'reply-to' header.

If you send an email campaign with an email from a Wix managed domain, that email will be displayed in the 'from' header. If you send an email from a custom domain that is not managed by Wix, a line will be inserted that states that the email was sent via wixemails.com.

To use the Sender Details API, import `{ senderDetails }` from the `wix-sender-details.v2` module:

```js
import { senderDetails } from `wix-sender-details.v2`; 
```
