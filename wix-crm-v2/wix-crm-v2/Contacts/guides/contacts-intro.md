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

<!-- > **Note:** This module is
> [universal](/api-overview/api-versions#universal-modules).
> Functions in this module can run on both the backend and frontend,
> unless specified otherwise. -->

The Contacts API provides functionality for adding and managing contacts on your site. 
When a new visitor shares contact information with your site, they're added to your Contact List. 
You can then access their contact details using the API. 

A site visitor can become a contact through various methods, including but not limited to:
 - Completing forms such as event registrations, membership sign-ups, customer support inquiries, or billing address submissions.
 - Being manually added by a site collaborator.
 - Engaging with 3rd-party integrations that leverage the Contacts API, for example, logging in with social media. 
Learn more about how you can manage your [contact list](https://support.wix.com/en/article/about-your-contact-list). 


With the Contacts API, you can:
+ [Create](wix-crm-v2/contacts/createcontact), [update](wix-crm-v2/contacts/updatecontact), and [remove](wix-crm-v2/contacts/deletecontact) contacts.
+ [Retrieve](wix-crm-v2/contacts/getcontact) contacts to access their contact information. 
+ [Merge](wix-crm-v2/contacts/mergecontacts) duplicate contacts.
+ [Label](wix-crm-v2/contacts/labelcontact) and [unlabel](wix-crm-v2/contacts/unlabelcontact) contacts for categorization purposes. 


## Before you begin

It is important to note the following points before you begin to code:
- You can't label or unlabel a contact if the label does not yet exist. To create a label, use the [Labels API](wix-crm-v2/labels/introduction).
- Merging a contact is irreversible. 
- Site members and collaborators can only be used as the target contact when merging contacts.


To use the Contacts API, import `{ contacts }` from the `wix-crm.v2` module. 

```javascript
import { contacts } from 'wix-crm.v2';
```


## Permissions information

Functions in the Labels API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>


## Terminology

- **Label:** A tag that enables site admins to organize and group contacts. 
- **Extended field:** An additional property that store contact information.
- **Source contact:** A contact you intend to merge into a target contact. These contacts get deleted after being merged. 
- **Target contact:** A contact that receives merged data from source contacts. 