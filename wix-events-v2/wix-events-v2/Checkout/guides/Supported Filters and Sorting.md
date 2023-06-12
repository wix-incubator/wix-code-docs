# Checkout: Supported Filters and Sorting

The following table shows field support for filters and sorting
for the Ticket object:

| Field           | Supported Filters                             | Sortable |
| --------------- | --------------------------------------------- | -------- |
| `created`            |              |      Sortable    |
| `price`         |     | Sortable |
| `orderIndex`   |    |      Sortable    |
| `ticketDefinitionId`        |   $eq, $ne, $hasSome, $in  |  |
| `eventId` | $eq, $ne, $hasSome, $in |  |
| `name` | $eq, $ne, $lt, $lte, $gt, $gte, $hasSome, $in, $contains, $urlized |    Sortable      |


__Related content:__
[API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language),
[queryAvailableTickets( ) endpoint](https://www.wix.com/velo/reference/wix-events-v2/checkout/queryavailabletickets),
[listAvailableTickets( ) endpoint](https://www.wix.com/velo/reference/wix-events-v2/checkout/listavailabletickets)