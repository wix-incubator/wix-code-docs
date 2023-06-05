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

> __Note__: This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.

The Activity Counters module allows you to keep track of site members' activity. See "Integrations" below for Wix App activities that are already counted.

The service allows public and private counters:
 - Public counters can be read by any site member.
 - Private counters can only be accessed by the site member who owns the counter.

The Activity Counters API gives you access to the counters on a site at a per-member, per-app level.

Counters are only activated when a site member actually performs the activity the counter tracks.

This means that the query and list endpoints for this API may return a large number of results, for sites with many members.

## Integrations

Activity Counters is currently integrated with these Wix apps and features:

### Wix Blog

Wix Blog counts blog posts, comments, and likes.

 - [Blog (API documentation)](https://dev.wix.com/api/rest/wix-blog/blog/introduction)

### Wix Forum

Wix Forum counts forum posts, comments, likes, and views.
 - [About Wix Forum](https://support.wix.com/en/article/wix-forum-about-wix-forum)

### Wix Members Area

Wix Members Area counts followers in both directions (followed by / following).
 - [Followers (Members Area feature)](https://support.wix.com/en/article/about-the-members-area)

## Access

Third-party developers can
 - read (but not set) public counts from any apps.
 - read **and** set all counts for their own apps.

## Initializing a counter

To create a new counter for an app, use the [Set Activity Counters function](https://www.wix.com/velo/reference/wix-activity-counters-v2/activitycounters/setactivitycounters).

## Use cases

**Most active writer widget.** 
You want to add a "most active writer" widget to your home page, based on the number of posts each member creates.

1. Get per-member post numbers for blog or forum app using the [Get Activity Counters function](https://www.wix.com/velo/reference/wix-activity-counters-v2/activitycounters/getactivitycounters).
2. Process counts and display in widget.
 
**Most influential member widget.** 
You wants to add a "most influential members" widget to your community, based on how many likes and comments each member's posts gets.

1. Get per-member reaction numbers for blog/forum app using [Get Activity Counters function](https://www.wix.com/velo/reference/wix-activity-counters-v2/activitycounters/getactivitycounters).
2. Process counts and display in widget.

## Import statement

To use Wix Marketing Tags,
import `{ activityCounters }` from the `wix-activity-counters.v2` module:

```js
import { activityCounters } from 'wix-activity-counters.v2';
```