# Ticket Definitions: Supported Sorting and Faceting

Select endpoints allow sorting results by field. Use `field:asc` to sort results in **ascending** order, and `field:desc` to sort in **descending** order.

For example, to sort ticket definitions by created date in ascending order, and then by modified date in descending order: 

```
?sort=created:asc,modified:desc
```

or 

```json
"sort": "created:asc,modified:desc"
```

The following table shows property support for filters and sorting
for the Ticket Definitions object:


| Field           | Sortable | Facetable |
|--  -------------|----------|-----------|
| `created`       | Sortable |           |
| `modified`      | Sortable |           |
| `orderIndex`    | Sortable |           |
| `saleStatus`    |          | Facetable |
| `saleStartDate` | Sortable |           |
| `saleEndDate`   | Sortable |           |
| `state`         |          |           |

__Related content:__
[`listTicketDefinitions`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/listticketdefinitions)