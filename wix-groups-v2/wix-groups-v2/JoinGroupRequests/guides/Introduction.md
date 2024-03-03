---
title: Introduction
---

# Introduction

> **Note:** This module is
> [universal](/api-overview/api-versions#universal-modules).
> Functions in this module can run on both the backend and frontend,
> unless specified otherwise.

The JoinGroupRequests API provides functionality for managing requests to join a group.

> **Notes:** 
+ This module is only relevant for private groups. 
+ When a group's `privacyStatus` is updated from `PRIVATE` to `PUBLIC`, all pending join requests for that group are automatically approved.
+ When a group's `privacyStatus` is updated from `PRIVATE` to `SECRET`, all pending join requests for that group are automatically rejected. 
+ A site member can only join a group if they have a [public profile](https://support.wix.com/en/article/wix-groups-member-privacy-settings-for-groups).
  
## Settings for a typical use case
+ Group members with group admin permissions determine who can join their group by setting their group [privacy level](https://support.wix.com/en/article/wix-groups-about-groups#your-groups-privacy-permissions).
+ If a group's privacy level is set to `PRIVATE`, a site member can request to join the group on your site's Groups List page.
+ Only site admins or group admins can approve or reject site member requests to join the group, unless the group setting `membersCanApprove` is set to `true`. 
+ **Note:** If the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function is used, all permissions are overridden,, and all site members (including non-group members) can approve or reject site member requests to join a group.  
+ When a site member's request to join the group is approved, the member is added to the group. 
+ If a group's privacy level is set to `PUBLIC`, a site member can join the group (no request necessary). 
+ If a group's privacy level is set to `SECRET`, only site members added by an existing group member can join the group (no request necessary). 
 
The JoinGroupRequests API provides functionality allowing you to:  
 + [Approve](wix-groups-v2/JoinGroupRequests/approveJoinGroupRequests) requests to join a group. 
 + [List](wix-groups-v2/JoinGroupRequests/listJoinGroupRequests) requests to join a group. 
 + [Query](wix-groups-v2/JoinGroupRequests/queryJoinGroupRequests) requests to join a group.
 + [Reject](wix-groups-v2/JoinGroupRequests/rejectJoinGroupRequests) requests to join a group. 

## Permissions information
Permission requirements for the functions in this API can be overridden using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function. This will have the following effects:
 + [`approveJoinGroupRequests()`](wix-groups-v2/JoinGroupRequests/approveJoinGroupRequests) - All site members (including non-group members) can approve site member requests to join a group.
 + [`listJoinGroupRequests()`](wix-groups-v2/JoinGroupRequests/listJoinGroupRequests) - All site members (including non-group members) can see requests to join a group.
 + [`queryJoinGroupRequests()`](wix-groups-v2/JoinGroupRequests/queryJoinGroupRequests) - All site members (including non-group members) can query requests to join a group.
 + [`rejectJoinGroupRequests()`](wix-groups-v2/JoinGroupRequests/rejectJoinGroupRequests) - All site members (including non-group members) can reject site member requests to join a group.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>

To use the JoinGroupRequests API, import `JoinGroupRequests` from the `wix-groups-v2` module:

```javascript
import { JoinGroupRequests } from "wix-groups-v2";
```
