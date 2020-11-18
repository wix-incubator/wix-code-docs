# What's New

We're always adding and updating the Corvid APIs, and we want you to have one place to find all of our latest changes and cool additions.

We also keep a list of **doc bugs** that are in our backlog, with information that can be helpful to our users even before they are fixed. You can see them [here](https://view.monday.com/97005963-d254f39325f60e6d86ffb64c39192f84).

## 🗓️ November 1, 2020
### New API: Wix Forum Backend Event APIs

`wix-forum-backend`

With the new [Forum Backend Events](https://www.wix.com/corvid/reference/wix-forum-backend) you can react to activity on your forum. You can run custom code when forum categories, posts, and comments are created, updated, deleted, posted, pinned, voted on, liked, reported, and more. For example, you can send a custom email to a poster when their post is liked, display a message when a comment is marked as best, or set up an alert when a post or comment is reported. 

## 🗓️ November 1, 2020
### New API: removeProductFromCart

`wix-stores`

With [`removeProductFromCart()`](https://www.wix.com/corvid/reference/wix-stores/removeproductfromcart) you can remove a line item/product from the cart. 

## 🗓️ October 20, 2020
### New API: onWixFormSubmit() event handler in the WixForms API

`wix-crm`

With the new [`onWixFormSubmit()`](https://www.wix.com/corvid/reference/wix-crm/$w-wixforms/onwixformsubmit) event handler in the WixForms API, you can perform validations on your forms immediately after visitors submit the form yet before the server starts any processing.  

## 🗓️ October 13, 2020
### Updated: wixLocation.to() does not work in preview

`wix-location`

Added a note that [`wixLocation.to()`](https://www.wix.com/corvid/reference/wix-location/to) only works on a published site and not while previewing.

## 🗓️ October 13, 2020
### Updated: htmlComponent can only embed a PDF file with a Premium account

`$w.HtmlComponent`

To embed a PDF in an [HtmlComponent](https://www.wix.com/corvid/reference/$w/htmlcomponent/introduction) you must upgrade your site to a Premium Plan.

## 🗓️ October 11, 2020
### New API: Decrement inventory

`wix-stores-backend`

Manually [decrement](https://www.wix.com/corvid/reference/wix-stores-backend/decrementinventory) a product variant's stock in inventory. This functionality is helpful for creating an inventory management page on your site.

## 🗓️ September 16, 2020
### Updated: Added Stackdriver information to Site Monitoring introduction

`site-monitoring`

Added [information](https://www.wix.com/corvid/reference/spis/site-monitoring/introduction) about connecting Wix site events to Google's Stackdriver external monitoring tool.

## 🗓️ September 15, 2020
### Updated: Changed slider.value from read only to read & write

`$w.slider` 

The [`value`](https://www.wix.com/corvid/reference/$w/slider/value) property for the Slider element was described as read only but it should be read and write.

## 🗓️ September 15, 2020
### Updated: Added more information for returned object properties from Validity property

`ValidatableMixin`

Added more content to the table that displays details of the object returned by [`validity`](https://www.wix.com/corvid/reference/$w/validatablemixin/validity).

## 🗓️ September 14, 2020
### Updated: Added information that some getProductVariants() parameter fields are optional

`wix-stores`

Added information that some of the parameter fields for [getProductVariants()](https://www.wix.com/corvid/reference/wix-stores/getproductvariants) are optional.

## 🗓️ September 14, 2020
### Updated: createProduct() SKU is a string

`stores-backend`

The `sku` property for [createProduct()](https://www.wix.com/corvid/reference/wix-stores-backend/createproduct) was described as a number, but it is a string.

## 🗓️ September 10, 2020
### Updated: Added information about getFileURL token expiring

`wix-media-backend`

Added information that the token returned by [`getFileUrl()`](https://www.wix.com/corvid/reference/wix-media-backend/mediamanager-obj/getfileurl) expires after 600 minutes. Described the alternative of creating a static URL without a token.

## 🗓️ September 10, 2020
### Updated: The URL table for wixHttpFunctionRequest

`wix-http-functions`

The table that described the URL structure of a [wixHttpFunctionRequest](https://www.wix.com/corvid/reference/wix-http-functions/wixhttpfunctionrequest) was difficult to parse. We've updated the content to make it easier to understand. 

## 🗓️ September 7, 2020
### New API: On cart changed event

`wix-stores`

With the new [`onCartChanged()`](https://www.wix.com/corvid/reference/wix-stores/oncartchanged) client-side event in wix-stores, you can access information about the site's shopping cart every time an item is added or removed. Useful for creating a promotional lightbox - if product X is added to the cart, offer product Y.

## 🗓️ September 7, 2020
### New API: Consent policy (privacy laws)

`wix-users`

To help your site conform to GDPR and CCPA standards, we now provide Corvid APIs for [checking](https://www.wix.com/corvid/reference/wix-users/getcurrentconsentpolicy) and [setting](https://www.wix.com/corvid/reference/wix-users/setconsentpolicy) visitors' current consent policies. These policies include which cookies the visitor allows and if the visitor allows data transfer to third parties. 

## 🗓️ August 30, 2020
### Updated: Added examples to listMemberBadges()

`wix-users-backend`

Added more robust examples to [`listMemberBadges()`](https://www.wix.com/corvid/reference/wix-users-backend/badges-obj/listmemberbadges) for how to handle the results.


## 🗓️ August 23, 2020
### New API: Coupon limit per customer

`wix-marketing-backend`

Use the new [limitPerCustomer](https://www.wix.com/corvid/reference/wix-marketing-backend/coupons-obj/createcoupon) property that allows for limiting coupon use per customer. Helpful if you'd like to create a coupon to be used only once, or any number of times per customer.

## 🗓️ August 20, 2020
### New API: Custom fulfiller email 

`wix-stores-backend`

Use the new [`sendFulfillmentEmail()`](https://www.wix.com/corvid/reference/wix-stores-backend/sendfulfillmentemail) function to send an email containing fulfillment details (products to ship, shipping details, etc.) to a custom fulfiller (a fulfiller not integrated with Wix, like ShipBob or ShipStation). 

## 🗓️ August 20, 2020
### New API: Order paid event 

`wix-stores-backend`

Added a new [event](https://www.wix.com/corvid/reference/wix-stores-backend/events/onorderpaid) that fires when an order is marked as paid.

## 🗓️ August 12, 2020
### Updated: New array and object data types

`wix-data`

Added information about new array and object types to the [wix-data Introduction](https://www.wix.com/corvid/reference/wix-data/introduction).

## 🗓️ August 11, 2020
### New API: Print packing slip

`wix-stores-backend`

Use the new [`getPackingSlipLink()`](https://www.wix.com/corvid/reference/wix-stores-backend/getpackingsliplink) function to generate and print a PDF file of an order's packing slip. Especially useful in the ThankYouPage, after an order is completed.

## 🗓️ August 2, 2020
### Updated: Secrets API

`wix-secrets-backend`

With the new [Secrets API functions](https://www.wix.com/corvid/reference/wix-secrets-backend) you can manage your site secrets with code. Create, update, and delete secrets in the Secrets Manager programmatically without opening the UI. List all your site secrets to find the one you need.

## 🗓️ August 9, 2020
### Updated: New validations for file upload

`wix-media-backend`

The [Upload](https://www.wix.com/corvid/reference/wix-media-backend/mediamanager-obj/upload) button can now perform certain validations right after file selection.

## 🗓️ August 9, 2020
### Updated: Mark createContact() parameters as optional

`wix-crm`

Changed the `contactInfo` parameters for [`createContact()`](https://www.wix.com/corvid/reference/wix-crm/createcontact) to be optional.

## 🗓️ August 6, 2020
### New API: Print orders

`wix-stores-backend`

Use the new [`getOrdersLink()`](https://www.wix.com/corvid/reference/wix-stores-backend/getorderslink) function to generate a PDF file containing information about one of more of your store's orders.

## 🗓️ August 3, 2020
### Updated: New example for onItemReady()

`$w.repeater`

Added a simple [`onItemReady()`](https://www.wix.com/corvid/reference/$w/repeater/onitemready) example where `onItemReady()` is triggered when repeater data is set.

## 🗓️ August 3, 2020
### Updated: New example for WixDataQuery.include()

`wix-data`

Added new example in [`WixData.query.include()`](https://www.wix.com/corvid/reference/wix-data/wixdataquery/include) to show how to use a reference field from another collection when populating a table with DataPath.

## 🗓️ August 3, 2020
### Updated: Router examples should use https for imageSite links

`wix-router`

The **A router with static data** example for the [`router()`](https://www.wix.com/corvid/reference/wix-router/router) function used http URLs in the example for imageSite. They were updated to use https.

## 🗓️ July 30, 2020
### New API: Fulfillment

`wix-stores-backend`

Use the [`createFulfillment()`](https://www.wix.com/corvid/reference/wix-stores-backend/createfulfillment) function to create, update, and delete order fulfillments (as well as set up events for each). 

## 🗓️ July 30, 2020
### New API: Create order

`wix-stores-backend`

Use the [`createOrder()`](https://www.wix.com/corvid/reference/wix-stores-backend/createorder) function to have more control over various order properties, allowing for more custom order flows. 

## 🗓️ July 28, 2020
### New API: Form Builder

`wix-crm` `wix-crm-backend`

With the new Wix Forms APIs,  you can access Wix Form app functionality with code. You can customize how site visitors work with the Wix Form, while taking advantage of the Wix Forms app's ease of design, automatic creation of submission collections, payment receipt, automatic setup of email notifications, and more. You can perform actions both on the [client side](https://www.wix.com/corvid/reference/wix-crm/$w-wixforms) and in the [backend](https://www.wix.com/corvid/reference/wix-crm-backend/events/onformsubmit).

## 🗓️ July 9, 2020
### Updated: Badges

`wix-users-backend`

With the new [Badges APIs](https://www.wix.com/corvid/reference/wix-users-backend/badges)  you can manage your member badges with code. Create, update, and delete badges, assign and remove badges from members, and see which members are associated with each badge.

## 🗓️ July 9, 2020
### Updated: Add information about import and export triggering before and after query hooks 

`wix-data`

Added information that [before](https://www.wix.com/corvid/reference/wix-data/hooks/beforequery) and [after](https://www.wix.com/corvid/reference/wix-data/hooks/afterquery) query hooks are triggered when items are exported from a collection.
