---
articleType: concept
---
# The Lifecycle of Repeated Items


When you work with a [repeater](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/introduction) in code, it's important to understand how the items in the repeater are created, updated, and deleted. 

## Connect data

A repeater's data is an array of objects, which you get or set using the repeater's `data` property. Each object in this array must have a unique `_id` property that links the object to a specific repeated item in the repeater. The `_id` value can include only alphanumeric characters and hyphens (`-`). Besides `_id`, each object in the data array can include any other properties you need.

The repeater doesn't automatically populate it's data into the elements inside each repeated item. You control how to populate the data into those elements by using the `onItemReady()`, `onItemRemoved()`, `forItems()`, and `forEachItem()` callback functions.


### Example

Connect 2 items to a repeater.

```javascript
const data = [
  { _id: "1", name: "Item 1" },
  { _id: "2", name: "Item 2" }
];

$w.onReady(function () {
  $w('#myRepeater').onItemReady(($item, itemData) => {
    $item('#nameText').text = itemData.name;
  });

  $w('#myRepeater').data = data;
  });
```

## Create new items

When you first add a repeater to your page, it displays repeated items using the design and default values from its [item template](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/create-and-access-repeated-item-data#velo-only-apis_$w_repeater_repeated_item_template). At this stage, no custom data is shown.

To display your own data, set the repeater's `data` property to an array of objects, each with a unique `_id`. When you do this, the repeater creates new items for each object in the array.

### Example

Set a repeater with initial data. When the `addButton` is clicked, add another item to the repeater.

```javascript
const data = [
  { _id: "1", name: "Item 1" },
  { _id: "2", name: "Item 2" }
];
$w.onReady(function () {
  let counter = data.length; 

  $w('#myRepeater').onItemReady(($item, itemData) => {
    $item('#nameText').text = itemData.name;
  });

  $w('#myRepeater').data = data;

  $w('#addButton').onClick(() => {
    counter++;

    const repeaterData = $w('#myRepeater').data;
    const newItem = { _id: String(counter), name: `Item ${counter}` };
    $w('#myRepeater').data = [...repeaterData, newItem];

  });
});
```


## Update existing items

When you update a repeater's `data` property, repeated items with the same `_id` values as before won't automatically populate the updated values into the elements of each repeated item. Simply reassigning the `data` property doesn't refresh what's shown for those items if the `_id` values don't change.

To ensure that changes to your data are populated into the repeated elements, use the repeater's `forEachItem()` or `forItems()` methods. You can use these methods to update the elements inside each repeated item, so that the displayed content always matches the latest data in your array.

### Example

Set a repeater with initial data. When the `updateButton` is clicked, update an item in the repeater.

```javascript
const data = [
  { _id: "1", name: "Item 1" },
  { _id: "2", name: "Item 2" }
];

$w.onReady(function () {
  $w('#myRepeater').onItemReady(($item, itemData) => {
    $item('#nameText').text = itemData.name;
  });

  $w("#myRepeater").data = data;

  $w('#updateButton').onClick(() => {
    const repeaterData = $w('#myRepeater').data;
    repeaterData[0].name = "Item 3";
    $w("#myRepeater").data = repeaterData;

    $w("#myRepeater").forEachItem(($item, itemData) => {
      $item("#nameText").text = itemData.name;
    });
  });
});
```

## Remove items

When you want to remove an item from a repeater, set the repeater's `data` property to a new array that no longer includes the object with the `_id ` of the item you want to remove.

The repeater then checks which repeated items are represented in the new data array. For any repeated item whose `_id` is missing, the repeater removes the item.

As each item is removed, the `onItemRemoved()` event handler runs and the display reflects the repeater without those items.

### Example 

Set a repeater with initial data. When the `removeButton` is clicked, remove the last item from the repeater. 

```javascript
const data = [
  { _id: "1", name: "Item 1" },
  { _id: "2", name: "Item 2" },
  { _id: "3", name: "Item 3" }
];

$w.onReady(function () {
  $w('#myRepeater').onItemReady(($item, itemData) => {
    $item('#nameText').text = itemData.name;
  });

  $w("#myRepeater").data = data;

  $w('#removeButton').onClick(() => {
    const repeaterData = $w("#myRepeater").data;
    const filteredData = repeaterData.slice(0, -1);
    $w("#myRepeater").data = filteredData;
  });

  $w("#myRepeater").onItemRemoved((itemData) => {
    console.log(`Removed: ${itemData.name}`);
  });
});
```

  ## See also

- To learn more about connecting data to repeaters, see [Create and Access Repeated Item Data](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/create-and-access-repeated-item-data).
