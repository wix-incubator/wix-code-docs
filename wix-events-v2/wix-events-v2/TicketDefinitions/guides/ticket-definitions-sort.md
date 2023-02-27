# Ticket Definitions: Supported Sorting and Faceting

Select functions allow sorting results by field. Use `field:asc` to sort results in **ascending** order, and `field:desc` to sort in **descending** order. 

For example, to sort ticket definitions by `created` date in ascending order, and then by `modified` date in descending order, use this format in the `options` parameter: 

```js
{
  sort: 'created:asc,modified:desc'
}  
```

The following table shows property support for sorting for the `Ticket Definition` object:


| Field           | Sortable | Facetable |
|-----------------|----------|-----------|
| `created`       | Sortable |           |
| `modified`      | Sortable |           |
| `orderIndex`    | Sortable |           |
| `saleStatus`    |          | Facetable |
| `saleStartDate` | Sortable |           |
| `saleEndDate`   | Sortable |           |
| `state`         |          |           |

__Related content:__
[`listTicketDefinitions`](/wix-events-v2/ticketdefinitions/listticketdefinitions)