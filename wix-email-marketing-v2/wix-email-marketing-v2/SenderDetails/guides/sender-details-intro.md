---
title: Introduction
---

# Introduction

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;
> **Note:** This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise. 


The Sender Details API contains the information that is displayed as the sender’s name and email address when sending an email from your Wix site. 

With the Sender Details API you can: 
- [Get](wix-email-marketing-v2/senderdetails/getsenderdetails) your email sender details.
- [Update](wix-email-marketing-v2/senderdetails/updatesenderdetails) your email sender details.
- [Verify](wix-email-marketing-v2/senderdetails/verifyemail) your sender email address.

## Before you begin

Before you begin, it is important to note the following information. 

If you send an email campaign with a public email domain (e.g. @gmail.com or @yahoo.com), the email address isn't displayed in the 'from' header. Instead, the email address is replaced with @wixemails.com (or @wixsitemail.com for free users), and the sender's email is placed in the 'reply-to' header.

If you send an email campaign with an email from a Wix managed domain, that email will be displayed in the 'from' header. If you send an email from a custom domain that is not managed by Wix, a line will be inserted that states that the email was sent via wixemails.com.

To use the Sender Details API, import `{ senderDetails }` from the `wix-email-marketing.v2` module:

```js
import { senderDetails } from `wix-email-marketing.v2`; 
```

## Permissions information

Functions in the Sender Details API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>