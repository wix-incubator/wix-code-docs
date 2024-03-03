# Posts: Supported Filters and Sorting

The following table shows field support for filters and sorting
for the Post object:

| Field           | Supported Filters                             | Sortable |
| --------------- | --------------------------------------------- | -------- |
| `id`            | `$eq`, `$ne`, `$hasSome`                      | Sortable |
| `categoryId`    | `$eq`, `$ne`                                  | Sortable |
| `title`         | `$eq`, `$ne`, `$contains`, `$hasSome`, `$urlized`, `$startsWith`, `$endsWith`, `$hasSome`  |          |
| `ownerId`       | `$eq`, `$ne`  |  |
| `contentText`   | `$eq`, `$ne`, `$contains`, `$hasSome`, `$startsWith`, `$endsWith`, `$hasSome` |  |
| `bestAnswerCommentId` | `$eq`, `$ne`	|          |
| `pinned`        | `$eq`, `$ne` |      Sortable    |
| `commentingEnabled`        | `$eq`, `$ne`  |  |
| `commentCount`  | `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte` | Sortable |
| `likeCount`     | `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte` |     Sortable     |
| `viewCount`     | `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`	|     Sortable     |
| `createdDate`   | `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`  |      Sortable    |
| `updatedDate`   | `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`  |  |
| `lastActivityDate` | `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte` | Sortable |
| `slug`          | `$eq`, `$ne`, `$contains`, `$hasSome`, `$urlized`, `$startsWith`, `$endsWith`, `$hasSome` |     Sortable     |

__Related content:__
[API Query Language](https://www.wix.com/velo/reference/api-overview/api-query-language),
[queryPosts( )](https://www.wix.com/velo/reference/wix-forum-v2/posts/queryposts)
