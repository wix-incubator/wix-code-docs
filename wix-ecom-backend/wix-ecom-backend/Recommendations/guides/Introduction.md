# Introduction

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
<b>Developer Preview</b>
<br/>
<span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview"> Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving these functions. Your feedback is valuable to us.</span>
</div>

&nbsp;

The Recommendations API allows you to promote and recommend items to your customers.  You can get item recommendations from catalogs on your site using algorithms provided by apps. 

>**Note:** Currently, the Recommendations API is for use with Wix Stores only.

With the Recommendations API, you can:
* Get a [list of algorithms](https://www.wix.com/velo/reference/wix-ecom-backend/recommendations/listavailablealgorithms) available for use on your site.
* Get a [list of recommended items](https://www.wix.com/velo/reference/wix-ecom-backend/recommendations/getrecommendation) suggested by a given algorithm.



## Algorithms

Algorithms are programs that identify and return a set of item recommendations based on a catalog. There are different types of algorithms, identified by their `algorithmType` that calculate different kinds of recommendations. For example, Algorithms with the `RELATED_ITEMS` `algorithmType` also take a list of items as input and use those to calculate recommendations.

For example, Wix Stores provides the following algorithms:

| Name                         | Description                                                                        | Algorithm Type  |
|------------------------------|------------------------------------------------------------------------------------|-----------------|
| “From the same categories”   | Returns items that share the most categories with items in the list provided.      | `RELATED_ITEMS` |
| “Frequently bought together” | Returns items that are frequently bought together with the first item in the list provided. | `RELATED_ITEMS` |
| “Frequently viewed together” | Returns items that are frequently viewed together with the first item in the list provided. | `RELATED_ITEMS` |
| “Best sellers”               | Returns the items from the catalog with the highest number of sales.               | `GLOBAL`        |



<blockquote class="tip">
  
__Tip:__
If you want to display item recommendations on your site, you can use the Wix Stores [“Slider Product Gallery”](https://support.wix.com/en/article/wix-stores-adding-store-elements#slider-product-gallery) and [“Related Products”](https://support.wix.com/en/article/wix-stores-adding-a-related-products-gallery) elements. These elements use Recommendations API functionality without the need for manual coding. In these elements' settings, you can choose which algorithm to use from among those available on your site.

On your Product, Cart, and Thankyou pages you can use `RELATED_ITEMS` type algorithms to get recommendations related to the product/s shown on the page.
On other pages, you can get recommendations from `GLOBAL` type algorithms.

</blockquote>


## Before you begin
* You must have a Wix app that provides algorithms installed on your site, and you must have a Wix app whose catalogs are supported by those algorithms installed on your site. For more information see [`listAvailableAlgorithms()`](https://www.wix.com/velo/reference/wix-ecom-backend/recommendations/listavailablealgorithms). Currently, the only app providing algorithms and their supported catalogs is Wix Stores.
* No caching is implemented, so repeat calls take the same time to complete as the first call.

We To use the Recommendations API,
import `{ recommendations }` from `wix-ecom-backend`:

```js
import { recommendations } from 'wix-ecom-backend';
```

## Use cases
[Send emails to customers recommending related products.](https://www.wix.com/velo/reference/wix-ecom-backend/recommendations/sample-flow)

## Terminology
* **Catalog:** A set of products or services available for purchase in a Wix app. For example, a set of products in Wix Stores.
* **Algorithm:** A program implemented by a Wix app, such as Wix Stores, which returns a list of item recommendations.


## Permissions information


Functions in the Recommendations API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.


<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>
