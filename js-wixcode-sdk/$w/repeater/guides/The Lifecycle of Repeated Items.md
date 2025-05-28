---
articleType: concept
---
# The Lifecycle of Repeated Items



When you work with a [repeater](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/introduction) in code, it's important to understand how the items in the repeater are created, updated, and deleted. First, you need to understand how a repeater's items connect to its data. 

A repeater's data is stored as an array of objects, which you get or set using the repeater's `data` property. Each object in this array must have a unique `_id` property that links the object to a specific repeated item in the repeater. The `_id` value can include only alphanumeric characters and hyphens (`-`). Besides `_id`, each object in the data array can include any other properties you need.

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

The repeater doesn't automatically display data in the elements inside each repeated item. You control how to display data in those elements by using the `onItemReady()`, `onItemRemoved()`, `forItems()`, and `forEachItem()` callback functions.


## You can work with repeaters in the following IDEs:
* IDE in the editor
* Wix IDE
* Local IDE

The following sections explain how items are created, updated, and removed throughout a typical repeater lifecycle.

## Create new items

When you first add a repeater to your page, each repeated item uses the design and default values from the repeater's [item template](./Repeated%20Item%20Template.md). When you set the repeater's `data` property in your code `onItemReady()` runs for any new item and updates its elements with the specific data you provide, overriding the template values.


## Update existing items

When you update a repeater's `data` property, repeated items with IDs that already exist in the data array don't change, even if you update other properties. To update the elements in those repeated items, use the `forEachItem()` or `forItems()` functions.


## Remove items

When you set a repeater's `data` property, the repeater removes any repeated items whose IDs are no longer in the data array. For each removed item, the `onItemRemoved()` event handler runs.

## Example

To demonstrate the full lifecycle of repeated items, consider the following simplified example of a page with a repeater.

<div style="text-align:center">

![](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/dfff8cbb-ddcb-4376-8cae-3fedb2dd4458/2017/11/29/1c9e7e93-ef4c-44aa-a495-ae82d5c10a91.png)

</div>

The page has the following elements:

*   Three buttons:
    *   The **Add** button, which adds more items to the repeater.
    *   The **Remove** button, which removes the added items from the repeater.
    *   The **Update** button, which updates the first item in the repeater.
*   A repeater where each repeated item in the repeater contains 2 text elements:
    *   The text element on the left, which shows the item's ID.
    *   The text element on the right, which shows the item's content.

The page has the following code:

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

    ## See also

    - To learn more about connecting data to repeaters, see [Repeated Item Template](./Repeated%20Item%20Template.md).
