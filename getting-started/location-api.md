# Location API

The Location API contains functionality for working with a page's URL and for navigating visitors to other pages. 

Let's take a look at some of the functionality that's available in the Location API.

## Query Parameters

There are many situations where you might want to read query parameters from a page's URL or to edit the query parameters in the URL. 

For example, you might want to send information between pages using query parameters. Or you might want to update the query parameters on a page that displays dynamic content to reflect the current content shown on the page.

### Reading Query Parameters

To read query parameters from a URL, use the `query` property. The `query` property returns an object where the keys of the object are the keys in the URL's query string and the values in the object are the corresponding values in the query string.

For example, let's say you have a URL like this:

```
www.mysite.com/page?key1=value1&key2=value2
```

You can retrieve the query parameters like this:

```javascript
const query = wixLocation.query;
```

The `query` variable will then contain the following object:

```javascript
{ key1: "value1", key2: "value2" }
```

### Editing Query Parameters

To edit the query parameters of a URL, use the `queryParams` property. The `queryParams` property returns an object with functions for adding and removing query parameters.

The `add()` function adds new key:value pairs to the query string or replaces existing ones. You call the function by passing an object that contains the key:value pairs you want to add or update.

So, if you start with a URL like this:

```
www.mysite.com/page?key1=value1&key2=value2
```

Then, you call the `add()` function like this:

```javascript
wixLocation.queryParams.add({ key2: "new2", key3: "value3" });
```

The URL will look this this:

```
www.mysite.com/page?key1=value1&key2=new2&key3=value3
```

As you can see, the following occurs:

-   The value for `key1` remains the same since it was not included in the object passed to the `add()` function.
-   The value for the original `key2` is replaced by the new value passed to the `add()` function.
-   The key `key3` and its value are added because `key3` did not exist in the original URL.

The `remove()` function removes existing key:value pairs from the query string. You call the function by passing an array of the keys you want to remove.

So, if you start with a URL like this:

```
www.mysite.com/page?key1=value1&key2=value2&key3=value3
```

Then call the `remove()` function like this:

```javascript
wixLocation.queryParams.remove(["key1", "key3"]);
```

The URL will look this this:

```
www.mysite.com/page?key2=value2
```

## Navigating

Often times you'll want to write code that sends visitors to another page in your site or to an external address. There are a couple of ways to accomplish this.

If you want to send a site visitor to another page in response to a click on an element that has a `link` property, you can use that property to define where the visitor will be sent.

For example, this code sets the link for a button, depending on whether the current user is logged in:

```javascript
import {currentUser} from 'wix-users';

$w.onReady(function () {
    $w('#button').link = currentUser.loggedIn ? '/account/my-account' : '/signup';
});
```

When a visitor clicks on the button, the browser will navigate to the appropriate page.

However, there are some situations where you can't use an element's `link` property to send a visitor to another page, such as when:

-   The element you want to use to trigger the navigation does not have a `link` property, like a `Box` or a `Container`.
-   You want to navigate a visitor to another page in response to an action that is not a click.
-   You want to run some other code in response to a visitor action and then navigate the visitor when that code has finished running.

In these cases, you need to use the `to()` function. To use the `to()` function, simply pass it the URL you want to navigate to. You can use relative URLs if you're navigating to a page in the current site.

For example, to implement a submit button for a form, you might want to submit the form data to a database collection and then navigate the visitor to a thank you page. Your code might look something like this:

```javascript
$w('#submitButton').onClick( async () => {
    await submitFormData();
    wixLocation.to('/thank-you');
} );
```

Here you can see that the `onClick` event handler first calls a function to submit the form data to a database collection. When the submission is complete, the visitor is sent to a thank you page.

We've now seen a couple of ways to handle element clicks with code. These are in addition to the ways clicks might be handled using the Editor that we haven't discussed.

That leaves you with lots of options when it comes to clickable elements:

-   Set the `link` property in code.
-   Set an `onClick` event handler in code.
-   Set the link behavior using the Editor's [link panel](https://support.wix.com/en/article/wix-editor-adding-a-link-to-an-element).
-   Connect the **Click action** or **Link connection** to a dataset.

Because there are multiple options, and some of them might conflict with each other, it is important to choose only one option per element. If you use more than one option on the same element, the results may be unpredictable. 

> **Learn more**
> 
> Want to read more about the Location API? See [wix-location](https://www.wix.com/velo/reference/wix-location) in the API Reference.