# Categories: Supported Filters and Sorting

The following table shows field support for filters and sorting
for the Category object:

| Field           | Supported Filters                             | Sortable |
| --------------- | --------------------------------------------- | -------- |
| `id`            | `$eq`, `$ne`, `$hasSome`                      | Sortable |
| `parentId`      | `$eq`, `$ne`, `$contains`, `$hasSome`, `$urlized`, `$startsWith`, `$endsWith`, `$hasSome`	   |  |
| `name`          | `$eq`, `$ne`, `$contains`, `$hasSome`, `$urlized`, `$startsWith`, `$endsWith`, `$hasSome`	  |          |
| `rank`          | `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`	  | Sortable |
| `headerTitle`   | `$eq`, `$ne`, `$contains`, `$hasSome`, `$urlized`, `$startsWith`, `$endsWith`, `$hasSome`	 |  |
| `headerType`    | `$eq`, `$ne`, `$contains`, `$hasSome`, `$urlized`, `$startsWith`, `$endsWith`, `$hasSome`	|          |
| `description`   | `$eq`, `$ne`, `$contains`, `$hasSome`, `$startsWith`, `$endsWith`, `$hasSome`   |          |
| `postCount`     | `$eq`, `$ne`, `$contains`, `$hasSome`, `$urlized`, `$startsWith`, `$endsWith`, `$hasSome`	   | Sortable |
| `postViewCount` | `$eq`, `$ne`, `$contains`, `$hasSome`, `$urlized`, `$startsWith`, `$endsWith`, `$hasSome`	 | Sortable |
| `slug`          | `$eq`, `$ne`, `$contains`, `$hasSome`, `$urlized`, `$startsWith`, `$endsWith`, `$hasSome`	 |          |

__Related content:__
[API Query Language](https://www.wix.com/velo/reference/api-overview/api-query-language),
[queryCategories( )](https://www.wix.com/velo/reference/wix-forum-v2/categories/querycategories)
