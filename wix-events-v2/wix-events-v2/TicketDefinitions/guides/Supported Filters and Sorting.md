# Ticket Definitions: Supported Filters and Sorting

The following table shows field support for filters and sorting
for the TicketDefinition object:

| Field           | Supported Filters                             | Sortable |
| --------------- | --------------------------------------------- | -------- |
| `created`            |    |   Sortable       |
| `price`   |  | Sortable |
| `orderIndex`   |  |     Sortable     |
| `ticketDefinitionId`        | `$eq` ,`$ne` ,`$hasSome` ,`$in`	 |  |
| `eventId` | `$eq` ,`$ne` ,`$hasSome` ,`$in`	 	 | Sortable |
| `name` | `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$hasSome`, `$in`, `$contains` ,`$urlized`		|      Sortable    |


__Related content:__
[API Query Language](https://www.wix.com/velo/reference/api-overview/api-query-language),
[queryTicketDefinitions( )](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/queryticketdefinitions)
