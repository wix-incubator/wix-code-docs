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


Use the Email Marketing API to manage your email marketing campaigns and retrieve your account details. 

With the Email Marketing API, you can:

* [Get](wix-email-marketing-v2/accountdetails/getaccountdetails) your email marketing account details. 
* [Manage](wix-email-martketing-v2/campaigns) your email marketing campaigns.
* [Manage](wix-email-marketing-v2/senderdetails) the sender details for your email marketing campaigns. 


## Terminology
- **Account Details:** Email marketing account information.
- **Email Campaigns:** A way to email subscribers of a site in order to provide them with valuable content and relevant offers. 
- **Sender Details:** Information that is displayed as the sender’s name and email address when sending an email from your site.

## Permissions information

Functions in the Email Marketing API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>