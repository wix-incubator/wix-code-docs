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


The Labels API provides functionality for managing labels for your site. Labels allow site admins to segment or categorize the contacts in their Contact List. Using Labels enchances the CRM by allowing site admins to customize data organization according to their needs. 
For example, you can use labels to target specific audiences for email campaigns or bulk actions. Learn more about [labels](https://support.wix.com/en/article/adding-labels-to-contacts-in-your-contact-list).
 
With the Labels API, you can:
- [Create](wix-crm-v2/labels/findorcreatelabel) a new label.
- [Update](wix-crm-v2/labels/renamelabel) a label by renaming its display name.
- [Delete](wix-crm-v2/labels/deletelabel) a label.
- [Query](wix-crm-v2/labels/querylabels) labels.


## Before you begin

It is important to note the following points before you begin to code:
- When you delete a label from your site, you also remove that label from all contacts it applies to.
- Label keys can't be changed once created. 


To use the Labels API, import `{ labels }` from the `wix-crm.v2` module. 

```javascript
import { labels } from 'wix-crm.v2';
```

## Permissions information

Functions in the Labels API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>


## Terminology

- **Label**: A tag that is applied to contacts to help site admins organzie and group contacts with shared characteristics. Labels can be user-defined or system-defined. 
    - **User-defined label**: A label that is custom created by site admins.
    - **System-defined label**: A label that is pre-defined in your site and cannot be deleted from the CRM.