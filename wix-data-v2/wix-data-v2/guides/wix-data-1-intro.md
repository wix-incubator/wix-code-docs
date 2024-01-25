---
title: Introduction
---

# About the Wix Data API

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;

The Wix Data API provides a complete solution for accessing, organizing, configuring, and managing data stored in a Wix site's database.

With the Wix Data API, you can:

+ Create, modify, and delete [data collections](https://www.wix.com/velo/reference/wix-data-v2/collections).
+ Create [indexes](https://www.wix.com/velo/reference/wix-data-v2/indexes) for data collections, to speed up data queries.
+ Connect [external databases](https://www.wix.com/velo/reference/wix-data-v2/externaldatabaseconnections) to a Wix site.

> **Note:** Use our existing [`wix-data`](https://www.wix.com/velo/reference/wix-data) API to access, manage, and perform aggregations on data stored in a site's existing data collections.

## Before you begin

It's important to note the following points before starting to code:

+ A Wix site's database can store up to 10 GB of data.
+ A Wix site's database can hold up to 1000 data collections.
+ The maximum size of an item you can save to a collection is 500 kb.
+ When naming fields in data collections, we recommend avoiding special characters. You can do this by using field names that match this regex pattern: `[a-zA-Z_][a-zA-Z0-9_-]{0,63}`.
+ Each data collection defines a schema of fields for the items it contains. However, this schema isn't enforced. This means that if you add or update an item containing a field or data type that doesn't match the collection's schema specification, your data is stored anyway.
+ When using data retrieval functions following an update to a collection's data, the data retrieved may not yet contain the most recent changes. See [Wix Data and Eventual Consistency](https://www.wix.com/velo/reference/wix-data-v2/eventual-consistency) for more information and instructions for overriding this.
+ After connecting external database collections to a Wix site using the [External Database Connections API](https://www.wix.com/velo/reference/wix-data-v2/externaldatabaseconnections), you can use [`wix-data`](https://www.wix.com/velo/reference/wix-data) to manage and retrieve data from those collections as if they were Wix Data collections.

## Terminology

+ **Data collection:** A schema determining the structure of data items to be stored, defining the fields each item should contain and the data type of each field.
+ **Data item:** A single data entry in a collection, in JSON format.
+ **Index:** A map of a collection's data, organized according to selected fields. An index is used to increase query speed, and in some cases, to enforce unique values.
+ **External database connection:** An adaptor that translates Wix data requests from a Wix site into an external database's protocol, and translates the response back into a format that Wix APIs can read. This enables Wix APIs, projects, and sites to treat the external database exactly as if it was an internal data collection.