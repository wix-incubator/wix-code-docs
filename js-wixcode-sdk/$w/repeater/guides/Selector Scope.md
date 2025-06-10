# Selector Scope

Selector methods are used to select specific page elements so you can work with them in code. Depending on which selector you use, you are able to select elements from the different scopes described below.
 
There are two types of selector methods:
 
+ [Global scope selectors](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/selector-scope#velo-only-apis_$w_repeater_global-scope)
+ [Repeated item scope selectors](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/selector-scope#velo-only-apis_$w_repeater_repeated-item-scope)
 
 
## Global Scope
 
The [`$w()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/$w) method selects elements in the global scope. A selector with global scope can be used to select any element that isn't contained in a repeater. You can also use it to select an element that is contained in a repeater, but it's important to understand what that selection means.
 
When you select an element contained in a repeater from the global scope and you get the value of one of the element's properties, you receive the value of that element's property from the repeater's [item template](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/create-and-access-repeated-item-data).
 
For example, here `templateText` is the `text` value of the `myRepeatedText` element from the repeater's item template.

```javascript
$w.onReady(function () {
  let templateText = $w("#myRepeatedText").text;
});
```
 
When you select an element contained in a repeater from the global scope and you set the value of one of the element's properties or call one of the element's methods, the value is set or the method is called on the repeater's [item template](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/create-and-access-repeated-item-data) and all repeated instances of that element.
 
 
For example, here the item template is changed so that `"New Text"` is the `text` value of the `myRepeatedText` element. Also, all existing repeated items have the `text` value of their `myRepeatedText` element set to `"New Text"`.
 
```javascript
$w.onReady(function () {
  $w("#myRepeatedText").text = "New Text";
});
```
 
And here the item template is changed so that the `myRepeatedImage` element is hidden. Also, all existing repeated items have their `myRepeatedImage` element hidden.
 
```javascript
$w.onReady(function () {
  $w("#myRepeatedImage").hide();
});
```
 
## Repeated item scope
  
There are two ways to get a repeated-item-scope selector:
 
   + The `$item` parameter of the [`forEachItem()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/for-each-item),
     [`forItems()`](#forItems), and [`onItemReady()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/on-item-ready) event handlers.
   + When calling the [`$w.at()`](https://dev.wix.com/docs/velo/velo-only-apis/$w/at) method and passing it an event whose [`context`](https://dev.wix.com/docs/velo/velo-only-apis/$w/at) is `COMPONENT_SCOPE`. This is usually done in an event handler that handles an event on an element inside a repeater.
 
 
A selector with repeated item scope can be used to select a specific instance of a repeating element.
 
For example, here when the `myRepeatedImage` element is clicked, the value of a text element in the same repeated item where the image was clicked is changed to "Selected". All the other text elements with the ID `myRepeatedText` in the other items of the repeater aren't affected.
 
```javascript
$w.onReady(function () {
  $w("#myRepeatedImage").onClick( (event) => {
    let $item = $w.at(event.context);
    $item("#myRepeatedText").text = "Selected";
  });
});
```
 
And here, when each item is ready, the value of a text element is set to a value found in that specific item's data.
 
```javascript
$w("#myRepeater").onItemReady( ($item, itemData, index) => {
  $item("#myRepeatedText").text = itemData.textField;
});
```

### Control what you select with repeated item scope

You can also use a selector with repeated item scope to select non-repeating elements from the global scope. However, you can't change a repeater's [item template](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/create-and-access-repeated-item-data) using a selector with repeated item scope.
 
You can also restrict a selector with repeated item scope to only select elements from the current repeated items and their descendants, but not elements from the global scope, by adding `.scoped()` to the selector.

For example, to select only the element with ID `#myElement` in the current repeated item, use:

```javascript
$w('#myRepeater').onItemReady(($item) => {
  const scopedElement = $item.scoped('#myElement');
});
```

## See also

[Learn how to create repeated items and access their data using selector scope](https://dev.wix.com/docs/velo/velo-only-apis/$w/repeater/create-and-access-repeated-item-data)