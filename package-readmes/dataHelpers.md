## Wix Data Helpers

The Wix Data Helpers package allows you to easily add common wix-data operations to your site.

### Setup

This package does not require any initial setup.

### Package Content

This package includes a number of public files. To use the functions in the files in your backend/page/public code, import them with the following syntax:

```js
import { <functionName> } from '@velo/wix-data-helpers'
```

The following files are included in the package:

#### find-one-and-remove.js

This file contains a function for finding and removing a single item with a specified value from a database collection.

*   **findOneAndRemove()**

    Queries the specified collection to find and remove a single item whose specified property value matches the criteria defined in a [WixDataQuery](https://www.wix.com/velo/reference/wix-data/wixdataquery). If multiple items match the WixDataQuery criteria, only the first returned item (according to the current sort) is removed. Returns the removed item, or null if the item was not found.

    **Note:** Removed items are not recoverable.

    ```js
    function findOneAndRemove(collectionId: string): WixDataQuery
    ```

    **Example:**

    ```js
    findOneAndRemove('myCollection')
      .eq('title', 'Dr.')
      .find()
      .then((result) => {
        // removed item or null if item wasn't found
        const removedItem = result;
      })
       .catch((error) => {
        console.error(error);
      });
    ```

#### find-all-and-remove.js

This file contains a function for finding and removing all items with a specified value from a collection.

*   **findAllAndRemove()**

    Queries the specified database collection to find and remove all items whose specified property value matches the criteria defined in a [WixDataQuery](https://www.wix.com/velo/reference/wix-data/wixdataquery). Returns the removed items, or null if no matching items were found.

    **Note:** Removed items are not recoverable.

    ```js
    function findAllAndRemove(collectionId: string): WixDataQuery
    ```

    **Example:**

    ```js
    findAllAndRemove('myCollection')
      .eq('title', 'Dr.')
      .limit(10)
      .find()
      .then((results) => {
         const removed = results.removed;
         const removedIds = results.removedItemIds;
         const skipped = results.skipped;
       })
       .catch((error) => {
         console.error(error);
       });
    ```

#### find-database-item.js

This file contains a function for finding an item in a collection with the specific property name, search value, and optionally a reference field.

*   **findDatabaseItem()**

    Queries the specified collection with the specified propertyName, value, and reference field you want to include in your [WixDataQuery](https://www.wix.com/velo/reference/wix-data/wixdataquery) filter.

    ```js
    function findDatabaseItem(collectionId: string, propertyName: string, searchValue: any, referenceToInclude: string): Promise<Object>
    ```

    **Example:**

    ```js
    findDatabaseItem('myCollection', 'title', 'John')
      .then((result) => {
        const item = result;
      })
      .catch((error) => {
        console.error(error);
      });
    ```

##### Parameters:

*   **`collectionId`:** ID of the collection to search.
*   **`propertyName`:** Name of the property (field) to search in.
*   **`searchValue`:** Value to search for.
*   **`referenceToInclude`:** (Optional) Reference field. If the matching item includes the reference field, the search results will include the full referenced item.

#### get-and-update.js

This file contains a function for getting an item by ID from a collection, and updating the item’s property value with the specified value.

*   **getAndUpdate()**

    Gets an item by ID from a specified collection, and updates the item’s property value with the specified value.


    ```js
    function getAndUpdate(collectionId: string, itemId: string, callback: (item: Object) => Object): Promise<Object>
    ```

    **Example:**

    ```js
    getAndUpdate('myCollection', '000-000-001', (item) => {
      item.title = 'new value';
      return item;
    });
    ```

#### get-multiple-items.js

This file contains a function for getting multiple items by their IDs from a collection.

*   **getMultipleItems()**

    Gets multiple items from a specified database collection. Returns the items in an array.

    ```js
    function getMultipleItems(collectionId: string, itemIds: Array<string>): Promise<Object>
    ```

    **Example:**

    ```js
    getMultipleItems('myCollection', ['000-000-001', '000-000-002'])
      .then((results) => {
        const items = results;
      })
      .catch((error) => {
        console.error(error);
      });
    ```
#### get-random-item.js

This file contains a function for getting a random item from a collection.

*   **getRandomItem()**

    Gets a random item from a specified collection.

    ```js
    function getRandomItem(collectionId: string): Promise<Object>
    ```

    **Example:**

    ```js
    getRandomItem('myCollection')
      .then((result) => {
        const randomItem = result;
      })
      .catch((error) => {
        console.error(error);
      });
    ```

#### data-cache.js

This file contains an object you can use to make a cached query on a collection.

*   **DataCache**
1. Create a new instance of the DataCache object to cache a query for a specific amount of time.

    ```js
    const myDataCache = new DataCache(maxAge);
    ```

2. Build your data [query](https://www.wix.com/velo/reference/wix-data/query) with the findAndCache object.

    ```js
    type DataCache = {
      maxAge: number
      query: (collectionId: string) => WixDataQuery
      clear: () => void
    }
    ```

##### Parameter:

*   **`maxAge`:** Duration of the cache in milliseconds

**Example:**

```js
// Create a query builder with a cache of 5 minutes
const findAndCache = new DataCache(1000 * 60 * 5);

findAndCache.query('myCollection')
  .eq('title', 'Dr.')
  .limit(10)
  .find()
  .then((results) => {
    if(results.items.length > 0) {
      const items = results.items;
    } else {
      // handle case where no matching items found
    }
  })
  .catch((error) => {
    console.error(error);
  });
```

### How to Use the Package

This section demonstrates one example of how you can work with the package, by using the `getRandomItem()` function to select a random winner from your list of site visitors.

1. Create a database collection called ‘Visitors’ with your ’visitors’ names.
2. Add the following elements to your site:
    *   Button to trigger the get
    *   Text element for displaying the winner
3. Import the `getRandomItem()` function from the package to your page code and run it when the button is clicked.

    ```js
    import { getRandomItem } from '@velo/wix-data-helpers';

    //..

    $w('#getWinner').onClick((event) => {
      getRandomItem('Visitors')
        .then((randomVisitor) => {
          $w('#winnerText').text = randomVisitor.name;
        })
        .catch((error) => {
           console.error(error);
        });
    });
    ```

### Release Notes

**1.0** Initial version

### Tags

WixData, cache, random, update, queue, boilerplate
