---
articleType: concept
---
# The Lifecycle of Repeated Items


When you work with a [repeater](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/introduction) in code, it's important to understand how the items in the repeater are created, updated, and deleted. 

## Connect data

A repeater's data is an array of objects, which you get or set using the repeater's `data` property. Each object in this array must have a unique `_id` property that links the object to a specific repeated item in the repeater. The `_id` value can include only alphanumeric characters and hyphens (`-`). Besides `_id`, each object in the data array can include any other properties you need.

The repeater doesn't automatically connect data in the elements inside each repeated item. You control how to connect data in those elements by using the `onItemReady()`, `onItemRemoved()`, `forItems()`, and `forEachItem()` callback functions.


### Example:

```javascript
const data = [
  { _id: "1", name: "Alice" },
  { _id: "2", name: "Bob" }
];

$w.onReady(function () {
  $w('#myRepeater').data = data;
  $w('#myRepeater').onItemReady(($item, itemData) => {
    $item('#nameText').text = itemData.name;
  });
});
```

## Create new items

When you first add a repeater to your page, it displays repeated items using the design and default values from its [item template](https://github.com/wix-incubator/wix-code-docs/pull/3381/Repeated%20Item%20Template.md). At this stage, no custom data is shown.

To display your own data, set the repeater’s `data` property to an array of objects, each with a unique `_id`. When you do this, the repeater creates new items for each object in the array.

As each new item is created, the `onItemReady()` event handler runs. This is where you write code to update the elements inside each repeated item with the specific data you want to display, replacing the template's default values.

### Example:

```javascript
let data = [
  { _id: "1", name: "Alice" },
  { _id: "2", name: "Bob" },
];

$w.onReady(function () {
  $w('#myRepeater').data = data;
  $w('#myRepeater').onItemReady(($item, itemData) => {
    $item('#nameText').text = itemData.name;
  });

  // Example: Add a new item when a button is clicked
  $w('#addButton').onClick(() => {
    // Create a new item with a unique _id
    const newItem = { _id: "3", name: "John" };
    data = [...data, newItem]; // Add the new item to the array
    $w('#myRepeater').data = data; // Update the repeater with the new data
  });
   $w('#myRepeater').onItemReady(($item, itemData) => {
    $item('#nameText').text = itemData.name;
});
```


## Update existing items

When you update a repeater's `data` property, repeated items with the same _id values as before won't automatically display updated property values. Simply reassigning the `data` property doesn't refresh what's shown for those items.

To ensure that any changes in your data are reflected in the UI, use the repeater's `forEachItem()` or `forItems()` functions. These functions update the elements inside each repeated item, so that the displayed content always matches the latest data in your array.
### Example:

```javascript
const data = [
  { _id: "1", name: "Alice" },
  { _id: "2", name: "Bob" },
  {_id: "3", name: "John"}
];

$w.onReady(function () {
  $w('#myRepeater').data = data;
  $w('#myRepeater').onItemReady(($item, itemData) => {
    $item('#nameText').text = itemData.name;
  });
});

  data[0].name = "Alicia"; // Changed from Alice to Alicia

  // Reassigning the data array alone will NOT update the repeated items:
  $w("#myRepeater").data = data; // No visible change

  // To update the display, use forEachItem to manually refresh each element:
  $w("#myRepeater").forEachItem(($item, itemData, index) => {
    $item("#nameText").text = itemData.name; // This will now show "Alicia"
  });
```

## Remove items

When you want to remove an item from a repeater, set the repeater's `data` property to a new array that no longer includes the object with the `_id ` of the item you want to remove.

The repeater then checks which repeated items are represented in the new data array. For any repeated item whose `_id` is missing, the repeater removes the item.

As each item is removed, the `onItemRemoved()` event handler runs and the display reflects the repeater without those items.

```javascript
const data = [
  { _id: "1", name: "Alice" },
  { _id: "2", name: "Bob" },
  {_id: "3", name: "John"}
];

$w.onReady(function () {
  $w('#myRepeater').data = data;
  $w('#myRepeater').onItemReady(($item, itemData) => {
    $item('#nameText').text = itemData.name;
  });
});
// Remove the item with _id "2"
data = data.filter(item => item._id !== "2");
$w("#myRepeater").data = data; // The item for "Bob" is removed

$w("#myRepeater").onItemRemoved((itemData) => {
  console.log(`Removed: ${itemData.name}`); // Runs for "Bob"
});
```

  ## See also

- To learn more about connecting data to repeaters, see [Repeated Item Template](./Repeated%20Item%20Template.md).
