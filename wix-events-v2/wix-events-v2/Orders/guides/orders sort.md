# Orders: Supported Sorting and Faceting

Select functions allow sorting results by field. Use `field:asc` to sort results in **ascending** order, and `field:desc` to sort in **descending** order. 

For example, to sort orders by `created` date in ascending order, and then by `name` in descending order, use this format in the `options` parameter: 

```js
{
  sort: 'created:asc,name:desc'
}  
```

The following table shows property support for sorting for the `Order` object:

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
[`listOrders`](/wix-events-v2/orders/listorders)