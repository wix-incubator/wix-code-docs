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


The Create Requests API provides functionality for managing requests to create a group.
 
With the Create Requests API, you can:
+ [Approve](wix-groups-v2/createrequests/approvegrouprequests) requests to create a group. 
+ [List](wix-groups-v2/createrequests/listgrouprequests) requests to create a group. 
+ [Query](wix-groups-v2/createrequests/querygrouprequests)  requests to create a group.
+ [Reject](wix-groups-v2/createrequests/rejectgrouprequests)  requests to create a group. 


> **Note:** This module is only relevant if admin approval is required for creating a group. 


To use the Create Requests API, import `{ createRequests }` from the `wix-groups.v2` module. 

```javascript
import { createRequests } from 'wix-groups.v2';
```

## Before you begin
Before you begin coding, make sure to add the [Wix Groups](https://support.wix.com/en/article/wix-groups-adding-and-setting-up-wix-groups) application to your site. 


### Settings for Typical Use Case
+ Site admins determine who can create groups. They can choose to require that site members request approval when creating a group. 
+ This setting can be found in your site's Dashboard under **Groups Application > General Settings > Group Creation**. 
+ If set to admin approval required, a site member uses the [`createGroup()`](wix-groups-v2/groups/creategroup) function to create a group, and the group becomes a `groupRequest` with a status of `PENDING`. 
+ Only a site admin can approve or reject requests to create a group. 
+ When a site member's request to create a group is approved, the `groupRequest` status changes to `APPROVED`, and the newly created group is added to the Groups List page of your site. 

## Terminology

- **Group Request**: A request made by a site member to create the group.
- **Site Admin**: A site owner or site collaborator with admin permissions. Site admins determine who can create groups.
