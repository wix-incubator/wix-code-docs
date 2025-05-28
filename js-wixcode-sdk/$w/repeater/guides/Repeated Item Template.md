# Repeaters: Repeated Item Template

Each repeater has an item template which defines the elements and initial data used when the repeater displays new items.
The initial state of the template is based on the last repeated item shown in the Editor. In your code, you can set or get properties, or call functions on the template's elements by selection them with [`$w()`]($w.html#w-find-this-link), the [global scope](#global-scope-new-link-soon) selector function.

  ## Supported IDEs
* IDE in the editor
* Wix IDE
* Local IDE

  ## Example

To demonstrate how the item template affects your items and how you can change the item template with code, we will use the following simplified example.

<div style="text-align:center">

![](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/dfff8cbb-ddcb-4376-8cae-3fedb2dd4458/2017/11/29/dc996ffc-debf-4afc-a4e5-409206ad2e00.png)

</div>

The example has the following page elements:

- Two buttons:
  - The **Add next item** button adds an item to the repeater from a static array of data.
  - The **Change content globally** button changes the repeater's item template by setting a value in one of its element's properties from a [global scope](../Wix%20Editor%20Elements%20with%20Velo/Understanding%20the%20Scope%20of%20Selector%20Functions.md#global-scope) selector.
- A repeater where each repeated item in the repeater contains two text elements:
  - The text element on the left shows the item's ID.
  - The text element on the right shows the item's content.

The example has the code shown below that:

- Defines the static data that will be used in the repeater.
- Defines an `onReady()` event handler that:
  - Sets the initial data of the repeater to be an empty array.
  - Adds the event handlers that make the buttons work.
  - Adds a repeater `onItemReady()` event handler, which runs when new items are created. It sets the `text` values of the text elements to values from the new item's corresponding data. If there is no `content` value, the new item will have the default value given to it by the repeater's item template.

```javascript
const exampleData = [
  { _id: "1", content: "First item" },
  { _id: "2" },
  { _id: "3", content: "Third item" },
  { _id: "4" },
];

let added = 0;

$w.onReady(function () {
  $w("#myRepeater").data = [];

  $w("#addNext").onClick((event) => {
    $w("#myRepeater").data = exampleData.slice(0, ++added);
  });

  $w("#changeGlobally").onClick((event) => {
    $w("#repeatedText").text = "New template text";
  });

  $w("#myRepeater").onItemReady(($item, itemData, index) => {
    $item("#repeatedId").text = itemData._id;
    if (itemData.content) {
      $item("#repeatedText").text = itemData.content;
    }
  });
});
```