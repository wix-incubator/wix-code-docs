# Create and Access Repeated Item Data

A repeater displays multiple items, each with the same structure and design but different data. Every repeated item contains the same set of elements such as text, images, or buttons, all arranged the same way. However, the content of those elements can vary for each item.

## Repeated item template

Each repeater has an item template that defines the elements and initial data used to populate new items. The template's initial state matches the last repeated item that appears in the editor.

To edit default values of elements in the item template, use the [`$w()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/introduction) [global scope](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/selector-scope#velo-only-apis_$w_repeater_repeated_item_scope) selector method to select template elements. This allows you to get or set their properties, or call methods on the template elements which determines the initial appearance and content for all repeated items. If you want each repeated item to display different data, you can override these default values by connecting the repeater to a dataset or by using the `onItemReady()` event handler to set properties for each item individually.

## Retrieve repeater item data when clicked
 
Each repeated item in a repeater has a [`Container`](https://www.wix.com/velo/reference/$w.Container.html) element that holds all of its repeated elements. To retrieve the data associated with a specific repeated item when you click it, create an `onClick` event handler for the item's `Container`. Depending on how you populate the repeater with data, you either use the connected dataset or the repeater's `data` array to retrieve the clicked item's data in the event handler.
 
For a repeater populated by connecting it to a dataset:
 
 ```javascript
$w.onReady(function () {
  $w("#repeatedContainer").onClick( (event) => {
    const $item = $w.at(event.context);
    const clickedItemData = $item("#myDataset").getCurrentItem();
  });
});
```
 
For a repeater populated by setting its [`data`](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/data) property:
 
```javascript
$w.onReady(function () {
  $w("#repeatedContainer").onClick( (event) => {
    const data = $w("#myRepeater").data;
    const clickedItemData = data.find(item => item._id === event.context.itemId);
  });
});
```

## See also
[Read more about selector scope](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/selector-scope)
