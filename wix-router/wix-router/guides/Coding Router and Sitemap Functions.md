# Coding Router and Sitemap Functions
  
The functions are named with the following convention:

``` javascript
export function <router prefix>_<function name>()
```

These are not functions that you call in your code, rather they are functions
that you define. They are called when your users browse to a URL that is handled
by a router as described below.

For example, the following code creates a router on the myRouter [prefix](#prefixes) that
shows a page when the path begins with the word "good" and returns a 404 in
all other cases.

```javascript
import {ok, notFound} from "wix-router";

export function myRouter_Router(request) {

  // URL looks like:
  // https://mysite.com/myRouter/good
  // or:
  // https://user.wixsite.com/mysite/myRouter/good
  const status = request.path[0];

  if(status === "good") {
    // Show a page
    return ok("myRouter-page");
  }
  else {
    // Return 404
    return notFound();
  }
}
```

### Code Router
Code your own [`router()`](#router) and [`sitemap()`](#sitemap) functions for a
[router](https://support.wix.com/en/article/routers) that handles all incoming
requests with a specified URL [prefix](#prefixes). Your code decides what actions to
perform, what responses to return, where to route the request, and what data
to pass to pages.

You might want to use a router to:

+ Display a dynamic page using content from any data source.
+ Customize your URLs to make them more meaningful and yield better SEO results.
+ Authenticate users and then display content just for them.
+ Return custom HTTP response codes.


### Data Binding Router Hooks
When a request comes in for a page that a router handles, either a code router
or a dynamic page, you can add [data binding router hooks](https://support.wix.com/en/article/data-binding-router-hooks)
to intercept the process of the data getting bound to the page at certain
points and insert additional logic.

The hooks you can use are listed here in the order they are triggered:

+ [`beforeRouter`](/wix-router/beforeRouter) - Before the data binding router logic.
+ [`customizeQuery`](/wix-router/customizeQuery) - As the data binding router prepares a data query.
+ [`afterRouter`](/wix-router/afterRouter) - After the data binding router completes its logic, but before the page is displayed.
+ [`afterSitemap`](/wix-router/afterSitemap) - After the data binding sitemap function completes preparing the list of urls.

### Prefixes
When using the `wix-router` API you often need to know the prefix of your code router
or dynamic pages. You can find prefixes as follows:

+ **Code router**:

    1. Go to  in the Page Code's Router Pages section of the Velo Sidebar.
    1. Click the ellipsis &nbsp; ![ellipsis](../assets/images/ellipses.png) &nbsp; icon that appears when you hover over the title of the router's grouped router pages.
    1. Click **Change Router**.

  The router's prefix is displayed.


+ **Dynamic pages**:

  1. Go to  in the Page Code's Dynamic Pages section of the Velo Sidebar.

  1. Click the ellipsis &nbsp; ![ellipsis](../assets/images/ellipses.png) &nbsp; icon that appears when you hover over the dynamic page.

  1. Click **Settings**.

  The **Page Info** tab shows the page URL. The prefix is the
  first editable section of the URL up until the first forward slash (/).