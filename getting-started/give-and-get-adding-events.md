# Give & Get Example - Adding Events to Elements

Let's take a look at an example of adding event handlers to an element from our [Give & Get site](https://www.wix.com/velo-dev/giveandget) ([template](https://editor.wix.com/html/editor/web/renderer/new?siteId=bc57d791-a42d-4f8c-b74e-bd51b6dd0095&metaSiteId=398bcfa9-b93e-435a-95ea-9a0c15d56d36&autoDevMode=true)).

In our site, the **Home** page contains a search box that site visitors use to search for giveaways. The page has the following elements that are used to perform a search:

-   Text input (**#searchTermInput**) - for entering a search term
-   Dropdown (**#searchButton**) - for performing the search

Site visitors perform a search by entering a term in the search box and then clicking the search button. We need to add an event handler to handle the button's `onClick` event.

We add the button's event handler in the page's `onReady` event handler. This is the earliest time we can work with the button element and it will add the event handler before the page is displayed to visitors. That way, the button is ready to be used as soon as the page loads.

```javascript
$w.onReady(function () {
    $w('#searchButton').onClick(() => {
        const searchTerm = $w('#searchTermInput').value;
        wixLocation.to(`/all-giveaways?searchTerm=${searchTerm}`);
    });

    // Continue to set up the page   
});

```

The code on the page starts by calling the `$w.onReady()` function and passes it an event handler.

```javascript
$w.onReady(function () {});
```

Then, it selects the **#searchButton** element and calls the `onClick()` function to add an event that handles clicks on the search button.

```javascript
$w('#searchButton').onClick(() => {});
```

Inside the event handler, it retrieves the value that's been entered into the search box. 

Once it has the value, it builds a URL with a query parameter based on the search term and navigates to the **All Giveaways** page where the search results are displayed.

```javascript
const searchTerm = $w('#searchTermInput').value;
wixLocation.to(`/all-giveaways?searchTerm=${searchTerm}`);
```