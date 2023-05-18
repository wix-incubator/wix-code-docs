---
title: Indexes and Query Speed
---

# Indexes and Query Speed

Every time you query a data collection, you are initiating filtering and sorting operations that take time to carry out because they iterate through every item in the collection. For a small collection, the time it takes to execute a query and receive its results might be negligible. But as the quantity of data in a collection increases, each query takes longer to process, and this can impact the performance of your app.

An index is a map of the collection's data, organized according to fields that you select. An index increases the speed of queries by providing a query with a shortcut to the information it is looking for. Instead of iterating through every data item in the collection, a query can use the index to skip to potentially relevant items. The larger a collection is, the more time this saves.

The best fields to use for indexes are those with a wide range of values. Indexes of fields with a narrow range of values, such as booleans, don't speed up queries significantly.
