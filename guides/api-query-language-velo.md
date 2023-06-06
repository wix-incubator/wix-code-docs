# API Query Language 

The query language described in this article
is implemented partially or in full by certain Wix Velo APIs that support query 
capabilities.

## Velo query techniques

2 types of query techniques are available in Velo. See your specific API to check which technique the query function supports. 
    
* **With query builders**: Call query functions that build a query to retrieve a list of items. You can recognize these query functions because they have associated `<item>QueryBuilder` and `<item>QueryResult` class objects. This is the standard Velo querying technique.
    
    These query functions do not use the API query language syntax described here.  
    
* **Without query builders**: Some query functions retrieve a list of items using the API Query Language described in this article. For these queries, pass an object defining the query to the query function.

## Query syntax

You can pass some or all of the following properties to the query function to define the query:

* [`filter`](#the-filter-object):
  Which results to return.
* [`sort`](#the-sort-array):
  In what order.
* [`paging`](#the-paging-object):
  Return only some of the matched entities.
* [`fields`](#the-fields-array):
  Field projection. Returns only part of each entity.
* [`fieldsets`](#the-fieldsets-array):
  Predefined, named sets of fields for common use cases.
  This is a shorthand provided by individual APIs.

Usually these query properties are contained in a `query` object. 

+ In some cases, the `query` object might be wrapped inside an `options` object.
+ In other cases, the query's properties might be defined directly inside an `options` object (without being wrapped in a `query` object). 

See your specific API for information on how to define the object you need to pass to the query function. 


Specifying an empty object as a parameter to a query function returns all items according to the API's default paging and sort order.


## The filter object

The `filter` is a single object `{ }` with the following syntax for specifying operators:

### Equality

The format `{ "<field>": <value> }` specifies an equality condition.

For example, `{ "status": "DONE" }`
matches all entities where `status` is `"DONE"`.

### Operators

Operators use the format `{ "<field>": { "$<operator>": <value> } }`.

For example, `{ "status": { "$in": ["PENDING", "DONE"] } }`
matches all entities where status is `"PENDING"` or `"DONE"`.

The operators specified below are supported. See the specific API for information on supported filter options for the query function you are using. 

#### Comparison operators

* `$eq`: Matches values that are equal to a specified value.
* `$ne`: Matches all values that are not equal to a specified value.
* `$gt`: Matches values that are greater than a specified value.
* `$gte`: Matches values that are greater than or equal to a specified value.
* `$lt`: Matches values that are less than a specified value.
* `$lte`: Matches values that are less than or equal to a specified value.
* `$in`: Matches any of the values specified in an array.
* `$nin`: Matches none of the values specified in an array.
* `$startsWith`: Matches strings that start with a specified value. Not case-sensitive.
* `$isEmpty`: Matches strings or arrays that are empty or not empty,
  depending on whether the specified operand is `true` or `false`.

#### Logical operators

* `$and`: Joins query clauses with a logical _AND_
  and returns all items that match the conditions of both clauses.
* `$or`: Joins query clauses with a logical _OR_
  and returns all items that match the conditions of either clause.
* `$not`: Inverts the effect of a query expression
  and returns items that don't match the query expression.

#### Element operators

* `$exists`: Matches items where the specified field exists and has a non-null value.

#### Array operators

* `$hasAll`: Matches arrays that contain all elements specified in the query.
* `$hasSome`: Matches arrays that contain at least one element specified in the query.

### Sample queries

In the following example, the compound query returns all entities where the status equals `"A"` and either `qty` is less than `30` or `item` starts with the character `p`:

```json
{
  "status": "A",
  "$or": [
    {
      "qty": { "$lt": 30 }
    },
    {
      "item": { "$startsWith": "p" }
    }
  ]
}
```

The following example queries entities where the field `tags` value is an array with exactly two elements, `"red"` and `"blank"`, in the specified order:

```json
{
  "tags": [ "red", "blank" ]
}
```

The following example queries for all entities where `tags` is an array that contains the string `"red"` as one of its elements, or that `tags` is the string `"red"`:

```json
{
  "tags": "red"
}
```

The following query matches entities that do not contain the `item` field, or where the `item` field has no value:

```json
{
  "item": { "$exists": false }
}
```

## The sort array

`sort` is an array of field names and sort order.
If `order` is not specified for a field, the field is sorted in ascending order.
Sorting is applied to the first `sort` item, then the second, and so on:

```json
{
  "sort": [
    {
      "fieldName": "sortField1"
    },
    {
      "fieldName": "sortField2",
      "order": "DESC"
    }
  ]
}
```

## The paging object

The `paging` object describes the size of the data set to return per response
and how many records to skip.
Each API can support **offset paging**, **cursor paging**, or both.
See your specific API for information on supported paging options.

### Offset paging

With offset paging, you provide a `limit` and `offset` with each request.
To retrieve additional pages,
submit subsequent requests with an increased `offset`
equal to the previous page's `limit` plus `offset`.

For example, this offset request returns records 41 through 60:

```json
{
  "paging": {
    "limit": 20,
    "offset": 40
  }
}
```

### Cursor paging

With cursor paging, each request returns a `cursors` object
that contains cursor strings that point to the next page, previous page, or both.
To retrieve either page, use the returned `next` or `prev` cursor
in the next request's `cursor` parameter.

Take this response object, for example:

```json
{
  "pagingMetadata": {
    "count": 10,
    "offset": 0,
    "cursors": {
      "next": "eyJmaWx0ZXIiOnsiJGFuZCI6W3sibGFuZ3VhZ2UiOnsiJGluIjpbImVuIiwiaGUiXX19LHsic3RhdHVzIjoicHVibGlzaGVkIn1dfSwidmFsdWUiOnsiaXNQaW5uZWQiOmZhbHNlLCJmaXJzdFB1Ymxpc2hlZERhdGUiOiIyMDIyLTA2LTAyVDA2OjQ2OjAyLjgwMloifSwib3JkZXIiOnsiaXNQaW5uZWQiOi0xLCJmaXJzdFB1Ymxpc2hlZERhdGUiOi0xLCJpZCI6LTF9fQ=="
    }
  }
}
```

You can use the returned `next` cursor to retrieve the next page of results
by forming your request like this:

```json
{
  "query": {
    "cursorPaging": {
      "cursor": "eyJmaWx0ZXIiOnsiJGFuZCI6W3sibGFuZ3VhZ2UiOnsiJGluIjpbImVuIiwiaGUiXX19LHsic3RhdHVzIjoicHVibGlzaGVkIn1dfSwidmFsdWUiOnsiaXNQaW5uZWQiOmZhbHNlLCJmaXJzdFB1Ymxpc2hlZERhdGUiOiIyMDIyLTA2LTAyVDA2OjQ2OjAyLjgwM1oifSwib3JkZXIiOnsiaXNQaW5uZWQiOi0xLCJmaXJzdFB1Ymxpc2hlZERhdGUiOi0xLCJpZCI6LTF9fQ"
    }
  }
}
```

## The fields array

`fields` is an array of field paths to return.

If a field path points to an object, the entire sub-object is returned.
Subsets of sub-objects can be returned by using dot notation.
In this example,
the returned entities contain `firstName` from the `name` sub-object
and the entire `address` object:

```json
{
  "fields": [
    "name.firstName",
    "address"
  ]
}
```

## The fieldsets array

An API may provide named projections to save clients from specifying individual fields in common cases.

For example,
the Contacts API implements a fieldset named `BASIC` that contains only
`id`, `revision`, `info.name.first`, `info.name.last`,
`primaryInfo.email`, and `primaryInfo.phone`.

To use a fieldset, specify its name in the `fieldsets` array.

If both `fieldsets` and `fields` arrays exist, the union of both is returned.
For example:

```json
{
  "fieldsets": [
    "BASIC"
  ]
}
```
