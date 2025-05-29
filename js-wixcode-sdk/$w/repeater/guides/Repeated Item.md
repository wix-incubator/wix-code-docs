# Repeated Item 

## Repeated item template

Each repeater has an item template that defines the elements and initial data used to populate new items.

The template’s initial state matches the last repeated item that appears in the Editor.

By default, new repeated items use the values from the item template. You can override these values by connecting the repeater to a dataset or by using the `onItemReady()` event handler.

In your code, use the [`$w()`]($w.html#w-find-this-link) [global scope](#global-scope-new-link-soon) selector function to select template elements. This allows you to get or set their properties, or call functions on the template elements.

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

## See also
[Learn more about scope](#comingsoon)
