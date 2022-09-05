# Storage API

Now let's talk a bit about storing data locally in your site visitors' browsers. Usually, you'll store local data to save a visitor's state between browser sessions or to pass data from one page to another while the visitor navigates your site.

To store data locally, use the Storage API. There are three types of storage you can use. The types of storage differ in how long the data is stored for and how much data can be stored. The type you choose in a specific situation depends on what you're trying to achieve.

The three storage types are:

| Type | Expires | Size Limit | Typical Usage |
| --- | --- | --- | --- |
| Local | Never, unless manually cleared by the site visitor. | 50kb | Store visitor state between sessions. |
| Session | When the browser tab or window is closed. | 50kb | Pass data between pages on the site. |
| Memory | When the visitor leaves the site or a page is reloaded or refreshed. | 1mb | Pass data between pages on the site. |

If you're using storage to store state between visitor sessions, keep in mind that the state is stored locally in the visitor's browser. So, if the same visitor visits your site from different devices, you won't be able to restore the proper state.

For cases where you need to store state per visitor across devices, you need to know who your visitors are and store their state remotely on the server. That means having users identify themselves, usually done through a member login process, and using a database collection to track their states.

> **Learn more**
>
> -   Want to read more about adding membership capabilities to your site? See [About the Member Area](https://support.wix.com/en/article/about-the-members-area) in the Help Center.
> -   Want to read more about database collections? See [About the Content Manager](https://support.wix.com/en/article/about-the-content-manager-7160473) in the Help Center.

## Usage

To use the Storage API, start by importing the type of storage you want to use. Then use the storage functions to set, get, and remove stored data. All of the storage types use the same four storage functions:

-   `setItem()`: Adds an item to storage
-   `getItem()`: Gets an item from storage
-   `removeItem()`: Removes all the items from storage
-   `clear()`: Removes all the items from storage

Storage items must be string data. If you need to store JSON data, use the [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) function when storing the item and the [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) function when retrieving the item.

## Example

Let's see how you can use the Storage API to pass data from one page to another.

Suppose you have a site where you want to show the previous item visitors have viewed when they are viewing the next item. Each time a visitor views an item, you can retrieve the previous item from local storage and then replace it with the current item.

Here's some code you can use to show the previously viewed item on a [dynamic page](https://learn.wix.com/en/article/displaying-detailed-site-content-3824279#dynamic-pages). It assumes that the previous item is displayed using an image and a text element.

The elements that will show the previous item are collapsed when the page loads to account for the case where the current page is the first item page that a visitor is visiting.

> **Tip**
>
> To learn more about dynamic pages, see the [Content Manager Learning Center](https://learn.wix.com/en/article/displaying-detailed-site-content-3824279#dynamic-pages). 

```javascript
import { local as storage } from 'wix-storage';

$w.onReady(function () {
    let previousItem = JSON.parse(storage.getItem(previousItem));

    if(previousItem){
        $w('#previousTitle').text = previousItem.title;
        $w('#previousImage').src = previousItem.image;

        $w('#previousTitle').expand();
        $w('#previousImage').expand();
    }

    const currentItem = $w('#dynamicDataset').getCurrentItem();
    storage.setItem('previousItem', JSON.stringify(currentItem));
});
```

This code begins by importing the local storage module. We import it with an alias just in case we ever want to change the storage type. If we do decide to switch it, all we need to do is change the type in this line.

```javascript
import {local as storage} from 'wix-storage';
```

The rest of the code is included in an `onReady` event handler, which begins by retrieving the recently viewed item from storage.

Remember, all data stored in storage must be stored as a string. So, we use the [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) function to parse the string and convert it to an array that we can use in code.

```javascript
$w.onReady(function () {
    let previousItem = JSON.parse(storage.getItem('previousItem'));

    // ...
});
```

Then, we check to see if any data was retrieved from storage. If this isn't the first item the visitor is viewing, we'll find the previous item in storage. 

If we have a stored item, we populate its contents into some page elements and expand those elements so they'll be seen on the page. If we don't have a stored item, we do nothing.

```javascript
if(previousItem){
    $w('#previousTitle').text = previousItem.title;
    $w('#previousImage').src = previousItem.image;

    $w('#previousTitle').expand();
    $w('#previousImage').expand();
} 
```

Lastly, we reset the local storage with the current item's data. Since the storage requires a string, we use the [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) function to convert the item object before setting it into storage.

> **Learn more**
>
> Want to read more about the Storage API? See [wix-storage](https://www.wix.com/velo/reference/wix-storage) in the API Reference.