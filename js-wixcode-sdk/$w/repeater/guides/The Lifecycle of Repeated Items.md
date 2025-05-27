---
articleType: concept
---
# Repeaters: The Lifecycle of Repeated Items



When you work with a repeater in code, it's important to understand how the items in the repeater are created, updated, and deleted. First, you need to know how each repeated item relates to the data that drives it.

A repeater's data is stored as an array of objects, which you get or set using the repeater’s `data` property. Each object in this array must have a unique `_id` property that links the object to a specific repeated item in the repeater. The `_id` value can include only alphanumeric characters and hyphens (`-`). Besides `_id`, each object in the data array can include any other properties you need.

For example, a simple array of repeater data may look like this:

```javascript
[
  {
    "_id": "1", 
    "firstName": "John", 
    "lastName": "Doe", 
    "image": "http://someImageUrl/john.jpg"
  },
  {    
     "_id": "2", 
     "firstName": "Jane",
     "lastName": "Doe",
     "image": "http://someImageUrl/jane.jpg"
  }
]
```

The repeater doesn't automatically bind data to the elements inside each repeated item. You control how to display data in those elements by using the `onItemReady()`, `onItemRemoved()`, `forItems()`, and `forEachItem()` callback functions.

For more information on these functions, see the [API Reference](https://www.wix.com/velo/reference/$w.Repeater.html).

## Supported IDEs
* IDE in the editor
* Wix IDE
* Local IDE

The following sections explain how items are created, updated, and removed throughout a typical repeater lifecycle.

## Create new items

When you first add a repeater to your page, each repeated item uses the design and default values from the repeater's [item template](https://NewRepeatedItemTemplatePlaceHolder). When you set the repeater's `data` property in your code and add items, `onItemReady()` runs for each new item and updates its elements with the specific data you provide, overriding the template values.


## Update existing items

When you update a repeater's `data` property, repeated items with IDs that already exist in the data array don't change, even if you update other properties. To update the elements in those repeated items, use the `forEachItem()` or `forItems()` functions.


## Remove items

When you set a repeater's `data` property, the repeater removes any repeated items whose IDs are no longer in the data array. For each removed item, the `onItemRemoved()` event handler runs.

### Example

To demonstrate the full lifecycle of repeated items, consider the following simplified example. 

<div style="text-align:center">

![](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/dfff8cbb-ddcb-4376-8cae-3fedb2dd4458/2017/11/29/1c9e7e93-ef4c-44aa-a495-ae82d5c10a91.png)

</div>

The example has the following page elements:

*   Three buttons:
    *   The **Add** button adds more items to the repeater.
    *   The **Remove** button removes the added items from the repeater.
    *   The **Update** button updates the first item in the repeater.
*   A repeater where each repeated item in the repeater contains 2 text elements:
    *   The text element on the left shows the item's ID.
    *   The text element on the right shows the item's content.

The example has the code shown below that:

*   Defines two static arrays of data that you will use for the repeater.
*   An `onReady()` function that:
    *   Sets the initial data of the repeater.
    *   Adds the event handlers that make the buttons work.
    *   Adds the repeater `onItemReady()` and `onItemRemoved()` event handlers that run when new items are created and removed.

```javascript
const sampleData1 = [
  {"_id": "1", "content": "First item"},
  {"_id": "2", "content": "Second item"}
];

const sampleData2 = [
  {"_id": "3", "content": "Third item"},
  {"_id": "4", "content": "Fourth item"}
];

$w.onReady(function () {
  $w("#myRepeater").data = sampleData1;
 
  $w("#addButton").onClick( (event, $w) => {
    let repeaterData = $w("#myRepeater").data;
    $w("#myRepeater").data = repeaterData.concat(sampleData2);
  } );
 
  $w("#removeButton").onClick( (event, $w) => {
    $w("#myRepeater").data = sampleData1;
  } );
 
  $w("#updateButton").onClick( (event, $w) => {
    let repeaterData = $w("#myRepeater").data;
    repeaterData[0].content = "Changed item";
    $w("#myRepeater").data = repeaterData;
      
    $w("#myRepeater").forItems( ["1"], ($w, itemData, index) => {
      $w("#repeatedId").text = itemData._id;
      $w("#repeatedText").text = itemData.content;
    } );
  } ); 

  $w("#myRepeater").onItemReady( ($w, itemData, index) => {
    $w("#repeatedId").text = itemData._id;
    $w("#repeatedText").text = itemData.content;
  } );
 
  $w("#myRepeater").onItemRemoved( (itemData) => {
    console.log(`Removed: ${itemData.content}`);
  } );
} );
```
## Retrieve repeater item data when clicked
 
Each repeated item in a repeater has a [`Container`](https://www.wix.com/velo/reference/$w.Container.html) element that holds all of its repeated elements. To retrieve the data associated with a specific repeated item when you click it, create an `onClick` event handler for the item's `Container`. Depending on how you populate the repeater with data, you either use the connected dataset or the repeater's `data` array to retrieve the clicked item's data in the event handler.
 
 For a repeater populated by connecting it to a dataset:
 
  ```javascript
  $w.onReady( function () {
    $w("#repeatedContainer").onClick( (event) => {
      let $item = $w.at(event.context);
     let clickedItemData = $item("#myDataset").getCurrentItem();
   } );
  } );
  ```
 
 For a repeater populated by setting its [`data`](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/data) property:
 
  ```javascript
  $w.onReady( function () {
    $w("#repeatedContainer").onClick( (event) => {
      const data = $w("#myRepeater").data;
      let clickedItemData = data.find(item => item._id === event.context.itemId);
    } );
  } );
  ```