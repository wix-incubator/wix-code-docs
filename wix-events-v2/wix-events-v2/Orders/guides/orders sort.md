# Orders: Supported Sorting and Faceting

Select endpoints allow sorting results by field. Use `field:asc` to sort results in **ascending** order, and `field:desc` to sort in **descending** order.

For example, to sort ticket definitions by created date in ascending order, and then by name in descending order: 

```
?sort=created:asc,name:desc
```

or 

```json
"sort": "created:asc,name:desc"
```

The following table shows property support for filters and sorting
for the Orders object:

| Field              | Sortable | Facetable |
|--------------------|----------|-----------|
| `created`          | Sortable |           |
| `name`             | Sortable |           |
| `score`            | Sortable |           |
| `orderNumber`      | Sortable |           |
| `status`           |          | Facetable |
| `archived`         |          | Facetable |
| `fullyCheckedIn`   |          | Facetable |

__Related content:__
[listOrders](https://www.wix.com/velo/reference/wix-events-v2/orders/listorders)