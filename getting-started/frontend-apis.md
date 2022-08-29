# Frontend APIs

In addition to the $w API, there are a number of other frontend APIs that you can use on your site.

Some of the things you can do with frontend APIs are:

-   Animate the elements on a page.
-   Work with your site's contacts and members.
-   Customize a page's SEO.
-   And much more.

Here, we'll cover a few of the most common frontend APIs that you can use in your page code.

## Importing APIs

Before we start learning about other APIs, we need to see how to import them. 

To use any API other than the $w API, you need to import a module or just the functions you want to work with.

For example, to import the Location API, add this import to the top of your page code:

```javascript
import wixLocation from 'wix-location';
```

Or, to just import the `to()` function from the Location API, add this import instead:

```javascript
import {to} from 'wix-location';
```

## List of Frontend APIs

In the next few lessons, we'll take a deep dive into a few of the frontend APIs available with Velo.

We'll look at the following APIs:

-   wix-location - For working with the current page's URL and for navigating to other pages.
-   wix-window - For working with the current browser window.
-   wix-storage - For storing information in the visitor's  browser.

In addition to the APIs we'll cover, there are a number of other APIs that you can use on the frontend. The following is a list of general frontend APIs, excluding APIs that are used for customizing Wix Apps, such as the wix-stores API.

-   wix-animations - For animating the elements on a page. 
-   wix-crm - For working with contacts.
-   wix-data - For working with a site's database collections. We'll see some basic uses of this API later.
-   wix-fetch - For getting data from 3rd party services. We'll see a use of this API from backend code later.
-   wix-realtime - Used in conjunction with the wix-realtime-backend API to send and receive messages in real time.
-   wix-search - For adding search functionality to your site. We'll use datasets and the wix-data instead of wix-search to add search functionality to our Give & Get site.
-   wix-seo - For working with SEO.
-   wix-site - For working with the site as a whole.
-   wix-users - For working with logged-in members.