---
title: Querying Indexed Data
---

# Querying Indexed Data

Indexes accelerate filtering and sorting queries of certain types. For details of the query language used in Wix Data queries, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).

## Filtering

Indexes accelerate queries based on equality operators, such as `$eq` and `$in`. They also accelerate queries based on range operators, such as `$gt`, `$gte`, `$lt`, and `$lte` under certain circumstances. In Wix Data collections, indexes don't accelerate queries based on the case insensitive `$startsWith` operator.

The order of fields in an index determines when and how filter queries use the index to save time.

For example, consider a collection containing information about paintings. The collection has an index for fields called `artist` (in ascending order), `dateCompleted` (in ascending order), and `title` (in ascending order), respectively.

Queries that filter based on the fields in the following orders can use the index to find the resulting entries more quickly:
- `artist` alone.
- `artist` and `dateCompleted`.
- `artist`, `dateCompleted`, and `title`.

A query that filters based on the `dateCompleted` field or the `title` field first doesn't use the index and will iterate through all items in the collection.

A query based on `artist` and `title` uses the index for looking up values in the `artist` field, but then iterates through all of the resulting items for the query of the `title` field. The index thus improves the speed of this query, but only partially.

Note that queries can use an index to accelerate a range filter (such as `$gt`, `$gte`, `$lt`, or `$lte`) only if it is the last filtering action of the query. For example, in our example collection with an index for `artist`, `dateCompleted`, and `title`, the following queries would make full use of the index:
- A range filter for `artist` alone.
- An equality filter for `artist` and a range filter for `dateCompleted`.
- An equality filter for `artist`, an equality filter for `dateCompleted`, and a range filter for `title`.

## Sorting

An index also speeds up sorting operations in a query, if the following conditions are met:

- The query doesn't include filters that prevent the index from being used.
- The sorting order in the query either matches the order defined in the index or is its exact inverse.

For example, consider again a collection containing information about paintings, with an index for fields called `artist` (in ascending order), `dateCompleted` (in ascending order), and `title` (in ascending order), respectively.

A query that has no filters and sorts by `artist`, `dateCompleted`, and `title` uses the index if the query sorts all the fields in ascending order (corresponding to the index) or if sorts all fields in descending order (inversely corresponding to the index).

A query that contains an equality filter for `artist` and subsequently sorts by `dateCompleted` and `title` (in the appropriate order) also uses the index.

However, a query that contains a range filter for `artist` and subsequently sorts by `dateCompleted` and `title` doesn't use the index.

## Example

Consider again a collection with information about paintings. Each data item contains an `artist` field, a `dateCompleted` field, and a `title` field.

What indexes might be useful for this collection? The answer depends on which queries are likely to be carried out most often.

Suppose that users are most likely to carry out the following types of queries:

1. Show all paintings by a particular artist.
2. Show all paintings by all artists, ordered only by their date of completion.

Defining an index for `artist` (ascending order) and `dateCompleted` (ascending order) accelerates queries of the first kind. A query for all works by Michelangelo, for example, uses the index and returns results more quickly than if there was no index. The same index would also accelerate a more complex query which filters by `artist` and sorts the results by `dateCompleted`.

However, a query of the second kind isn't accelerated by this index, since the index first orders by `artist`. To speed up a query for all paintings ordered only by `dateCompleted`, we can create a second index with `dateCompleted` as its first (or only) field.