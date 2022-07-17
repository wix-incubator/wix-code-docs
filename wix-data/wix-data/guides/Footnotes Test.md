# Wix Data Error Codes

When you use the Wix Data API, you may encounter console errors. This list includes the error codes and messages returned by the API, and more information to help you resolve the issue. If the errors persist, [contact support]() for help.

|<div style="min-width:100px">Code</div>| Message | More Information|
|---------------------------------------|---------|-----------------|
|WDE0001|`Collection name must be a string.`|The provided collection name isn't a valid string value.
|WDE0002|`Item ID must be a string.`|The provided item's `_id` isn't a valid string value.
|WDE0003|`Field name must be a string.`|The provided field name isn't a valid string value.
|WDE0004|`Failed to save {your item name} into {your collection name}. Items must be JavaScript objects.`|The item must be a valid JavaScript object.
|WDE0005|`Failed to bulk save items into {your collection name}. Items must be an array of JavaScript objects and item IDs must be strings if present.`|See the note for an example [^1] 

```js
const items = [
  {
    "title":        "Mr.",
    "first_name":   "John",
    "last_name":    "Doe"
  },
  {
    "_id": "ffdkj9c2-df8g-f9ke-lk98-4kjhfr89keedb",
    "title":        "Ms.",
    "first_name":   "Jane",
    "last_name":    "Doe"
  }
]
```




[^1]: Here is an example of a valid array of items:
    ```js
    const items = [
      {
        "title":        "Mr.",
        "first_name":   "John",
        "last_name":    "Doe"
      },
      {
        "_id": "ffdkj9c2-df8g-f9ke-lk98-4kjhfr89keedb",
        "title":        "Ms.",
        "first_name":   "Jane",
        "last_name":    "Doe"
      }
    ]
    ```
    
    
  
