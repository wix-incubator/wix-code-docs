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

> **Note:** This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.


The Members API allows you to create and manage a site's members.

With the Members API, you can:
- [Create](wix-members-v2/members/createmember), [update](wix-members-v2/members/updatemember), and [delete](wix-members-v2/members/deletemember) site members.
- [Retrieve](wix-members-v2/members/querymembers) member's information from your site.
- [Add](wix-members-v2/members/joincommunity) or [remove](wix-members-v2/members/leavecommunity) the currently logged in member from your site community. 

To use the Members API, import `{ members }` from the `wix-members.v2` module. 

```javascript
import { members } from 'wix-members.v2';
```

## Before you begin

It’s important to note the following points before starting to code:
- You need to add the Members Area app on your site. 

## Permissions information

The following function in Members is restricted and only runs if you elevate permissions
using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate)
function:
- [createMember](wix-members-v2/members/createmember)


## Terminology

- **Members:** Site visitors who have signed up as members through your site's [Member Signup Form](https://support.wix.com/en/article/about-the-member-signup-form). Members have their own profiles and can interact with other members of the site community.
- **Site Community:** A platform on your site where members can interact with eachother. 