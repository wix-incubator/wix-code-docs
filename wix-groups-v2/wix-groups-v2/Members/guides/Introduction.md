---
title: Introduction
---

# Introduction

> **Note:** This module is
> [universal](/api-overview/api-versions#universal-modules).
> Functions in this module can run on both the backend and frontend,
> unless specified otherwise.

The Members API provides functionality for managing group members, inluding adding, removing, and querying group members.
 
## Settings for a typical use case
+ If a group's privacy level is set to `SECRET`, group admins or group members can add additional members to their group.
+ If a group's privacy level is set to `PUBLIC` or `PRIVATE`, group admins determine whether group members can add additional members to their group. 
+ This setting can be found in your site's Dashboard under **Groups Application > Your Group > Admin Tools > Member Permissions**. 
+ If set to all members, group members can add additional members to the group using the [`addGroupMembers()`](wix-groups-v2/members/addGroupMembers) function (no approval required). 
+ If set to admins only, only admins can add additional members to the group using the `addGroupMembers()` function.
+ The default is set to admins only. 
+ **Note:** If the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function is used, all permissions are overridden, and all site members (including non-group members) can add additional members to a group. 

The Members API provides functionality allowing you to:
 + [Add](/members/add-group-members) members to a group. 
 + [List](/members/list-group-members) all members of a group. 
 + [List](/members/list-memberships) a site member's group memberships. 
 + [Query](/members/query-group-members) members of a group. 
 + [Query](/members/query-memberships) a site member's group memberships. 
 + [Remove](/members/remove-group-members) members of a group.   

## Permissions information
Permission requirements for the functions in this API can be overridden using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function. This will have the following effects:
 + [`addGroupMembers()`](/members/add-group-members) - All site members (including non-group members) can add additional members to a group.
 + [`listGroupMembers()`](wix-groups-v2/members/listGroupMembers) - All site members (including non-group members) can see the list of group members.
 + [`listMemberships()`](wix-groups-v2/members/listMemberships) - All site members (including non-group members) can see a list of a site member's memberships.
 + [`queryGroupMembers()`](wix-groups-v2/members/queryGroupMembers) - All site members (including non-group members) can query group members.
 + [`queryMemberships()`](wix-groups-v2/members/queryMemberships) - All site members (including non-group members) can query a site member's memberships.
 + [`removeGroupMembers()`](wix-groups-v2/members/removeGroupMembers) - All site members (including non-group members) can remove members from a group.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>

To use the Members API, import `members` from the `wix-groups-v2` module:

```javascript
import { members } from "wix-groups-v2";
```
