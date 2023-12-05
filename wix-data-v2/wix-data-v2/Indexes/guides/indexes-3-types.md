---
title: Index Types
---

# Index Types

The Indexes API allows you to create 2 kinds of indexes:

- A regular index accelerates queries for up to 3 fields in a collection.
- A unique index enforces unique values for 1 field in a collection and also functions as a regular index for that field.

## Regular indexes

You can create up to 3 regular indexes for each collection. A regular index can be created for up to 3 fields, with each field sorted either in ascending or descending order.

For example, consider a database containing information about many different products. Each data item contains `productName`, `category`, and `price` fields.

An index for the `productName` field in ascending order accelerates queries based on the `productName` field. Instead of searching through all of the data entries until one is found with the desired name, the index enables the query to jump based on alphabetical ordering.

An index for the `category` and `price` fields speeds up queries that include these fields. A general query for all products in a particular `category`, ordered by `price`, doesn't need to iterate through the entire collection to find all items in the specified `category`. The results of that search will already be ordered by `price` and thus will not need to be sorted again. For a large collection, this can save a significant amount of time.

## Unique indexes

A unique index enforces unique values for an indexed field. You can create 1 unique index for each collection, in addition to its regular indexes.

A unique index can only have 1 field. For that field, it functions like a regular index. For example, a unique index for the `productName` field in a product database enables faster queries based on that field.

In addition, a unique index enforces unique values for the indexed field in all data items across the collection. So if you created a unique index for the `productName` field, you will not be able to create more than one item with any given `productName` value.