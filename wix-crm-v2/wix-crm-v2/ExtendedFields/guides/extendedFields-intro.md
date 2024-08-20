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


The Extended Fields API provides functionality for creating and managing extended field definitions. Extended fields enable you to retrieve and store specific information relevant to your site. Basic fields, such as name, email, and phone, are stored in the contact's default properties. Additional custom contact properties are stored in extended fields. 

With the Extended Fields API, you can:
+ [Create](wix-crm-v2/extendedfields/findorcreateextendedfield) a new extended field.
+ [Delete](wix-crm-v2/extendedfields/deleteextendedfield) an extended field.
+ [Update](wix-crm-v2/extendedfields/renameextendedfield) an extended field by renaming its display name.
+ [Query](wix-crm-v2/extendedfields/queryextendedfields) extended fields.

## Before you begin

It is important to note the following points before you begin to code:
- When you create a new extended field, it becomes available to use for all contacts. The field is blank by default. 
- Possible data types of extended fields include: 
    - text
    - number
    - date
    - url
- Extended fields are represented as key-value pairs in the contact's object in `info.extendedfields`. To manage the extended fields of an individual contact, use the [Contacts API](wix-crm-v2/contacts). 


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

- **Extended field**: A customized field that can store additional information for a contact. A contact’s extended field data is available in the `contact` object under `info.extendedFields`. There are 2 types of extended fields:
    - **System field**: An extended field added by Wix apps. System fields often enrich contacts with data from Wix apps, such as Wix Stores or Wix Members. System fields cannot be renamed and are typically read-only.
    - **Custom field**: An extended field added by site admins or 3rd-party apps. Custom fields can be renamed, and their data can be written by any site admin or 3rd-party app.