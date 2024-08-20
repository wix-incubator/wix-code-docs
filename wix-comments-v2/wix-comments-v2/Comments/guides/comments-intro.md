---
title: Introduction
---

# Introduction 

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


The Comments API allows you to manage a customized commenting program that lets site visitors share feedback or engage in discussions around different types of resources, including blog posts, forum threads, or other site content.

With the Wix Comments API, you can:
+ Allow commenting on any page of your site.
+ Mark specific comments to highlight and feature to your readers.
+ Engage with visitors who are not site members through guest commenting.  

To use the Comments API, import { comments } from the `wix-comments.v2` module:
```javascript
import { comments } from `wix-comments.v2`;
```

## Integrations
The Comments API is fully integrated with several Wix solutions. Each integration uses a slightly different configuration to work with Comments.  

The following table details the currently supported integrations:
| Wix App | `appId` | `contextId` | `resourceId` |
| --- | --- | --- | --- |
| Wix Blog | 14bcded7-0066-7c35-14d7-466cb3f09103 | `internalId` | `internalId` |
| Wix Comments | 91c9d6a7-6667-41fb-b0b4-7d3b3ff0b02e | `contentId` | `contentId` |
| Wix Forum | 14724f35-6794-cd1a-0244-25fd138f9242 | `forumPostId` | `forumPostId` |
| Wix Groups | 148c2287-c669-d849-d153-463c7486a694 | `groupId` | `feedItemId` |

## Terminology
+ **Marked comments:** When a comment's `marked` field is set to `TRUE`, it indicates that the comment has been flagged or marked for special attention. No additional automated behavior or action is taken with the comment. However, you can manually filter for comments marked as such with the [`queryComments()`](wix-comments-v2/comments/querycomments) function and highlight them to your visitors as needed.
+ **Parent comments:** Parent comments refer to comments that have subsequent comments directly responding to them. They serve as the original or initial comments in a conversation thread. The parent comment's unique identifier is stored in the `parentComment.id` field of the corresponding reply comment.
+ **Replies:** Replies are comments that are made in direct response to earlier comments within a discussion. They are specifically intended as responses to a particular parent comment and contribute to the ongoing conversation. Replies help maintain the hierarchical structure of comment threads and enhance the engagement and interactivity among users.

## Permissions information

Functions in Comments API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>
