# Handle events and exchange data

Your site can interact with a custom element by handling events, updating attributes, and exchanging data.

Custom elements use standard ES6 class syntax, meaning you can't call Velo APIs directly within their code. However, you can use Velo in your page to pass data to the custom element through attributes.

## Listen for events

Custom elements can respond to both internal and site events:

* **Internal events (DOM Events)**: Events related to the lifecycle of the custom element, like when it's attached or detached from the DOM. To handle these events, use lifecycle methods like `connectedCallback()` and `attributeChangedCallback()`.
* **Site events**: The `$w.onReady()` event notifies the custom element when the page is fully loaded. Then, you can listen for other page-specific events, like scrolling or mouse actions, and pass data to your custom element by updating its attributes.

The following example shows how to pass data from your site to the custom element. When the button `#myButton` is clicked, it updates the `customData` attribute of the custom element `#myCustomElement`. This data can then be accessed by the custom element via the `attributeChangedCallback()` method.

```javascript
// Page code
$w.onReady(function () {
  // When button is clicked, update attributes
  $w("#myButton").onClick(() => {
    $w("#myCustomElement").setAttribute("customData", "Hello from the site!");
  });
});
```

## Dispatch custom events

Custom elements can dispatch custom events using the [`CustomEvent` API](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent). These events can be handled in your page code by setting up event listeners.ss

The following example shows how to pass data from the custom element to your site.

```javascript
// Custom element code
class MyCustomElement extends HTMLElement {
  connectedCallback() {
    // Dispatch a custom event to send data to the site
    const event = new CustomEvent('dataFromElement', { detail: "Hello from the custom element!" });
    this.dispatchEvent(event);
  }
}

// Page code to listen for the event
$w.onReady(function () {
  $w("#myCustomElement").on("dataFromElement", (event) => {
    const data = event.detail;
    console.log("Data from custom element:", data);
  });
});
```
