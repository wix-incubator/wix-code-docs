---
title: Introduction
---

# About the Data Items API

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;

The Data Items API allows you to access and manage items in a Wix site's data collections.

With the Data Items API, you can:

+ Create and manage data items in a site's collections.
+ Retrieve data items from a collection individually or with filtering and sorting queries.
+ Create and manage reference fields.
+ Perform aggregations and calculations on data in collections.
+ Truncate a data collection, removing all its contents.

The Data Items API only works with existing collections. To create and manage data collections, use the [Data Collections API](https://www.wix.com/velo/reference/wix-data-v2/collections).

## Before you begin

It's important to note the following points before starting to code:

+ The maximum size of an item you can save to a collection is 500 kb.
+ We don't recommend updating a data item more than once per second.
+ When using data retrieval functions such as [`queryDataItems()`](https://www.wix.com/velo/reference/wix-data-v2/items/querydataitems) or [`getDataItem()`](https://www.wix.com/velo/reference/wix-data-v2/items/getdataitem) following an update to a collection's data, the data retrieved may not yet contain the most recent changes. See [Wix Data and Eventual Consistency](https://www.wix.com/velo/reference/wix-data-v2/eventual-consistency) for more information and instructions for overriding this.
+ When querying Wix App Collections, check which fields can be filtered in the relevant collection field article.
+ Updating a data item replaces the existing item entirely. If the existing item had fields with values and those fields aren't included in the updated item, the values in those properties are lost.
+ Aggregations can't be performed on Wix App collections.
+ After connecting external database collections to a Wix site using the [External Database Connections API](https://www.wix.com/velo/reference/wix-data-v2/externaldatabaseconnections), you can use the Data Items API to manage and retrieve data from those collections as if they were Wix Data collections.
