---
title: Introduction
---
# Introduction

With the Categories API, you can create and assign various categories to their events. This API is great for displaying similar events on different site pages and sorting events in your dashboard. For example, you can create separate pages for jazz, blues, and folk events, but also pages for different venues. The same jazz event can be displayed on your jazz page and also on your downtown location page.    

The Categories API allows you to:  

* Assign/unassign events to a category or multiple categories.
* Create, delete, update categories.
* [Reorder events that are assigned to the same category on the Events widget](https://support.wix.com/en/article/creating-and-displaying-event-categories).
* Get the details about all categories.

## Before you begin

It’s important to note the following points before starting to code:  

- To use the Categories API, import `{ categories }` from the `wix-events.v2` module:

```javascript
import { categories } from 'wix-events.v2';
```

## Terminology

- **Category**: A way to organize or classify events based on their characteristics or themes.
- **Event**: A gathering organized by an individual or business for a group of people.

