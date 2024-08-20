---
title: Eventual Consistency
---

# Wix Data and Eventual Consistency

Wix Data stores your data in a primary database instance, as well as several geographically dispersed mirror instances. The Wix Data API is eventually consistent, meaning that it always updates your data in the primary database instance first, then propagates your changes to the mirror instances. When you update your database collection, there may be a short delay (typically a few seconds) until all mirror instances are up to date with your recent changes.

When you call a data retrieval function, your request goes to the closest mirror database instance. This saves time, as the request and response don't have to travel as far. However, if you attempt to retrieve data shortly after updating it, your latest changes may not yet be reflected in the data you get back.

If you need a data retrieval function to get fully up-to-date data immediately after an update, you can set the `consistentRead` body parameter to `true`. This slows down the operation but ensures the data is retrieved from the up-to-date primary database instance.