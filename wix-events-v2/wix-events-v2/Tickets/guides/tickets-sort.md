# Tickets: Supported Sorting and Faceting

Select functions allow sorting results by field. Use `field:asc` to sort results in **ascending** order, and `field:desc` to sort in **descending** order. 

For example, to sort tickets by `price` in ascending order, and then by `guestFullName` in descending order, use this format in the `options` parameter: 


```js
{
  sort: 'price:asc,guestFullName:desc'
}  
```

The following table shows property support for sorting for the `Ticket` object:


| Field           | Sortable | Facetable |
|-----------------|----------|-----------|
| `ticketNumber`  | Sortable |           |
| `orderStatus`   | Sortable |           |
| `price`         | Sortable |           |
| `orderFullName` | Sortable |           |
| `guestFullName` | Sortable |           |
| `score`         | Sortable |           |
| `free`          |          | Facetable |
| `archived`      |          | Facetable |
| `checkedIn`     |          | Facetable |
| `eventId`       |          | Facetable |

__Related content:__
[`listTickets`](/wix-events-v2/tickets/listtickets)