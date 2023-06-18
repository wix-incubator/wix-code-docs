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

> **Note:** This module is
> [universal](/api-overview/api-versions#universal-modules).
> Functions in this module can run on both the backend and frontend,
> unless specified otherwise.


The Extended Fields API provides functionality for managing extended fields for your contacts. Basic contact information is stored in the contact’s default properties, including information such as name, company, phone numbers, addresses, and email addresses. Additional properties are stored in extended fields. 

With the Extended Fields API, you can:
+ [Find or create ](wix-crm-v2/extendedfields/findorcreateextendedfiels) an extended field. 
+ [Delete](wix-crm-v2/extendedfields/deleteextendedfield) an extended field.
+ [Get](wix-crm-v2/extendedfields/getextendedfield) an extended field.
+ [Rename](wix-crm-v2/extendedfields/renameextendedfield) an extended field.
+ [Query](wix-crm-v2/extendedfields/queryextendedfields) extended fields.


To use the Labels API, import `{ extendedFields }` from the `wix-crm.v2` module. 

```javascript
import { extendedFields } from ‘wix-crm.v2’;
```

## Permissions information

Functions in the Extended Fields API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>


## Terminology

- **Extended Fields**: Additional properties that store additional contact information. A contact’s extended field data is available in the `contact` object under `info.extendedFields`. There are 2 types of extended fields:
    - **System fields**: Extended fields added by Wix apps. System fields often enrich contacts with data from Wix apps, such as Wix Stores or Wix Members. System fields cannot be renamed and are typically read-only.
    - **Custom fields**: Extended fields added by site collaborators or 3rd-party apps. Custom fields can be renamed, and their data can be written by any site collaborators or 3rd-party app.