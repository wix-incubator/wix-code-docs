# Messaging Between a Site Page and an HTML iFrame Element

You can use code to send and receive messages between your page and your [HTML iFrame element](https://dev.wix.com/docs/develop-websites/articles/wix-editor-elements/other-elements/html-i-frame-element/working-with-the-html-iframe-element). You can send and receive data as any valid JavaScript type.


## Sending a Message from Page Code to an HTML Element

You can send a message from your page to an HTML element using the HTML element's `postMessage()` function.

For example, if your page contains an HTML element with the ID **myHtmlElement**:

```javascript
$w("#myHtmlElement").postMessage("Message for HTML Comp");
```

## Receiving a Message from Page Code in an HTML Element

You can receive a message in your HTML element by creating an event handler for the `window.onmessage` event in the element's code. You create the event handler within an HTML `<script>` tag. You get the received data by getting the `data` property of the event handler's `event` parameter.

For example, in your HTML element's HTML Code:

```html
<script type="text/javascript">
  window.onmessage = (event) => {
    if (event.data) {
       let receivedData = event.data;
    }
  };
  
  //...
  
</script>
```

## Sending a Message from an HTML Element to Page Code

You can send a message from your HTML element using the `postMessage()` function in the element's code. Generally, you will be calling `postMessage()` from within a function.

For example, in your HTML element's HTML Code:

```html
<script type="text/javascript">
  
  //...
  
  function respond() {
    window.parent.postMessage("To page code", "http://mysite.com");
  }
</script>
```

<blockquote class="important">

**Important:** 
When posting a message from within your HTML Component, you should specify your site's URL as the **targetOrigin**. If you use **"\*"** instead, your message can be intercepted by a malicious site. To learn more, see [Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

</blockquote>

## Receiving a Message from an HTML Element in Page Code

You can receive a message in your page code using the HTML element's `onMessage()` function to bind an event handler. You get the received data by getting the `data` property of the event handler's `event` parameter.

For example, if your page contains an HTML element with the ID **myHtmlElement**:

```javascript
$w("#myHtmlElement").onMessage( (event) => {
  let receivedData = event.data;
} );
```
