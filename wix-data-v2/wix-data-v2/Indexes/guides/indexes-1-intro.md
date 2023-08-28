---
title: Introduction
---

# About the Indexes API

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;

The Indexes API enables you to create indexes for data collections, to make querying data faster.

An index is a map of a collection's data, organized according to fields that you select. An index [increases the speed of queries](https://www.wix.com/velo/reference/wix-data-v2/indexes/indexes-and-query-speed) by providing a query with a shortcut to the information it is looking for. Instead of iterating through every data item in the collection, a query can use the index to skip to potentially relevant items. The larger a collection is, the more time this saves.

With the Indexes API, your app can:

- Create regular indexes to accelerate query speed.
- Create unique indexes to enforce unique values.
- Access and drop existing indexes.

To learn about the differences between regular and unique indexes, see [Index Types](https://www.wix.com/velo/reference/wix-data-v2/indexes/index-types).

## Before you begin

It's important to note the following points before starting to code:

- A collection can have up to 3 regular indexes (for up to 3 fields per index). It may also have 1 unique index (for 1 field).
- The value contained in an indexed field can't be larger than 982 bytes, including the collection name. For example, in a collection named "Products", the maximum length of each value in the indexed fields is 974 bytes.
- When an index creation fails, the failed index still occupies a slot. To remove the failed index and free up the slot for a new index, use the [`dropIndex()`](https://www.wix.com/velo/reference/wix-data-v2/indexes/dropindex) function.
- Case-insensitive filters, such as `$startsWith`, aren't accelerated by an index.

## Terminology

- **Regular index:** An index that increases query speed for up to 3 fields.
- **Unique index:** An index that increases query speed and enforces unique values for 1 field.