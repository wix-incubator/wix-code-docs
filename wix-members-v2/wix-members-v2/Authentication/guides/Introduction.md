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


The Authentication API allows you to manage authentication for your site's members area.

With the Authentication API, you can:

- [Approve](wix-members-v2/authentication/approve) pending members.
- [Block](wix-members-v2/authentication/block) members from logging in. 
- [Register](wix-members-v2/authentication/register) and [login](wix-members-v2/authentication/login) members to your site.
- [Change](wix-members-v2/authentication/changeloginemail) a member's login email.
- [Send](wix-members-v2/authentication/sendsetpasswordemail) an email for members to set their passwords.

To use the Authentication API, import `{ authentication }` from the `wix-members.v2` module. 

```javascript
import { authentication } from 'wix-members.v2';
```

## Before you begin

It’s important to note the following points before starting to code:
- You must add the Members Area app on your site. 
- The `register()` function's behavior depends on your site's [member signup settings](https://dev.wix.com/docs/develop-websites/articles/wix-apps/wix-members/enabling-custom-site-registration). You can set your signup settings to either automatically or manually approve newly registered members. 
    | SIGNUP SETTING         | RESULT                                                               |
    | ---------------------- | -------------------------------------------------------------------- |
    | **Automatic approval** | &bull; Member `status` is `"ACTIVE"`.<br> &bull; Members can log into the site, or you can log members in by passing the returned `approvalToken` to [`applySessionToken`](https://www.wix.com/velo/reference/wix-members-frontend/authentication/applysessiontoken)                                          |
    | **Manual approval**    | &bull; Member `status` is `"PENDING"`. <br> &bull; Members must be approved. You can approve members by passing the `approvalToken` to [`approve()`](wix-members-v2/authentication/approve)  |


## Permissions information

Functions in the Authentication API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>


## Terminology

- **Members:** Site visitors who have signed up as members through your site's [Member Signup Form](https://support.wix.com/en/article/about-the-member-signup-form). Members have their own profiles and can interact with other members of the site community.
- **Site Community:** A platform on your site where members can interact with eachother. 