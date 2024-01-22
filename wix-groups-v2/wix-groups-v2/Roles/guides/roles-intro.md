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


The Roles API provides functionality for managing roles of group [members](https://www.wix.com/velo/reference/wix-members-v2). 
 
With the Roles API, you can:
- [Assign](wix-groups-v2/roles/assignrole) a role to specific group members.
- [Unassign](wix-groups-v2/roles/unassignrole) a role from specific group members.


> **Note:** This module is only relevant for site admins and group admins.


To use the Roles API, import `{ roles }` from the `wix-groups.v2` module. 

```javascript
import { roles } from 'wix-groups.v2';
```

## Before you begin
Before you begin coding, make sure to add the [Wix Groups](https://support.wix.com/en/article/wix-groups-adding-and-setting-up-wix-groups) application to your site. 


## Terminology

- **Site Admin**: A site owner or site collaborator with admin permissions.
- **Group Member**: A site member belonging to a group.
- **Group Admin**: A group member that was assigned the 'group admin' role by either the site admin, or another group admin. The creator of a group is automatically a group admin. The group admin has the same permissions as a site admin, but only for the specified group.
