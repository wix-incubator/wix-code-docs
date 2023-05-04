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

The Groups API provides functionality for managing groups, including creating, deleting, updating, and querying groups.

## Settings for Typical Use Case
Site admins determine who can create a group. This setting can be found in your site's Dashboard under **Groups Application > General Settings > Group Creation**.
If set to site members with admin approval, site members can create a group using the `createGroup()` function, and the group becomes a `createRequest` with a name of `PENDING`. The site admin either approves or rejects the request to create a group.
If set to all site members, site members can create a group using the `createGroup()` function (no approval required).
If set to only admins, only site admins can create a group using the `createGroup()` function.
The default is set to site members with admin approval.

When a group is created, the newly created group is added to the Groups List page of your site.

The Groups API provides functionality allowing you to:
* Create a new group.
* Delete an existing group.
* Get group information by ID.
* Get group information by slug.
* List all groups.
* Query groups.
* Update group information.

### Permissions Information
>**Note:** You can override the permissions below by using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

| Functions   | Permissions   
| --- | --- |
| `createGroup()`                  | Manage in your site's Dashboard. **Note:** If you override this permission with the `elevate()` function, you must provide a creatorId when running the function.
| `deleteGroup()`, `updateGroup()` | Site admin, group admin.
| `listGroups()`, `getGroup()`, `queryGroups()` | For public & private groups: any site member. For secret groups: group members, site admin.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>


To use the Groups API,
import `groups` from wix-groups.v2:

```js
import { groups } from 'wix-groups.v2';  
```


