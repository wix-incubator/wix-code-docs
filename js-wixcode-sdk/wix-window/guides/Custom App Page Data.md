# Custom App Page Data

You can use the [getAppPageData()](#getAppPageData) function in code for custom app pages to retrieve data you can use to customize the page. The data passed to each type of custom app page is different. This article lists the objects passed to each type of custom app page.

## Product Page

The object passed to a custom product page contains the following properties:

| Property | Type | Description |
| --- | --- | --- |
| image | String | URL of the product image. |
| title | String | Product title. |
| description | String | Product description. |
| price | String | Product price. |
| nextUrl | String | URL for adding the product to the site visitor's cart and returning to main store page. |

Learn more about [creating a custom product page]().