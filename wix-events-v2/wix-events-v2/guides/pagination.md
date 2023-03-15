# Pagination

The standard Wix API pagination includes:

- **limit**: amount of items per response (default is `0`)

- **offset**: number of items to skip

The following examples:

```
?limit=100&offset=20
```

and

```json
    "limit": 100, 
    "offset": 20 
```

Should return items 21-120 in the results.
