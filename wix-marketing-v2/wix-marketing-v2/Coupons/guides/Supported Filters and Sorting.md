# Coupons: Supported Filters and Sorting

The following table shows field support for filters and sorting
for the Coupon object:

| Field           | Supported Filters                             | Sortable |
| --------------- | --------------------------------------------- | -------- |
| `id`            | `$eq`,`$ne`,`$hasSome`,`$contains`,`$startsWith`   |     Sortable     |
| `dateCreated`   | `$eq`,`$ne`,`$hasSome`,`$lt`,`$lte`,`$gt`,`$gte`    | Sortable |
| `expired`       | `$eq`,`$ne` |          |
| `specification.active`  | `$eq`,`$ne`   |  |
| `specification.name` | `$eq`,`$ne`,`$hasSome`,`$contains`,`$startsWith` | Sortable |
| `specification.code` | `$eq`,`$ne`,`$hasSome`,`$contains`,`$startsWith`   |      Sortable    |
| `specification.usageLimit` | `$eq`,`$ne`,`$hasSome`,`$contains`,`$startsWith`  | Sortable |
| `specification.limitedToOneItem`   | `$eq`,`$ne`    |          |
| `scope.namespace` | `$eq`,`$ne`,`$hasSome`,`$contains`,`$startsWith`  | Sortable |
| `scope.group.name` | `$eq`,`$ne`,`$hasSome`,`$contains`,`$startsWith | Sortable` |
| `scope.group.entityId` | `$eq`,`$ne`,`$hasSome`,`$contains`,`$startsWith` |     Sortable     |


__Related content:__
[API Query Language](https://www.wix.com/velo/reference/api-overview/api-query-language),
[queryCoupons( )](https://www.wix.com/velo/reference/wix-marketing-v2/coupons/querycoupons)
