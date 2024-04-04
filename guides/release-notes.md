# Release Notes

We're always adding and updating the Velo APIs, and we want you to have one place to find all of our latest changes and cool additions.

We love hearing your feedback! You can help us improve the docs by reporting any issues that you notice. You can report bugs and other feedback through the following link found at the bottom of each section.

![Was this helpful, yes/no buttons](../media/feedback.png)

---
### New release: More Wix Events APIs

`wix-events.v2`

[Wix Events](https://www.wix.com/velo/reference/wix-events-v2/introduction) introduces new APIs that provide developers with a growing set of services for customizing Events functionality on Wix sites:

- [Categories](https://www.wix.com/velo/reference/wix-events-v2/categories/introduction): Create and assign various categories to their events.
- [Forms](https://www.wix.com/velo/reference/wix-events-v2/forms/introduction): Customize a registration form for site visitors to fill out with their contact details and other relevant information.
- [Orders](https://www.wix.com/velo/reference/wix-events-v2/orders/introduction): The **Checkout** module is now merged with **Orders**.
- [RSVP](https://www.wix.com/velo/reference/wix-events-v2/rsvp/introduction): Access the information on guests who have RSVP'ed to an event.
- [Schedule](https://www.wix.com/velo/reference/wix-events-v2/schedule/introduction): Share the lineup of an event’s activities, presentations, performances, or sessions.
- [Schedule Bookmarks](https://www.wix.com/velo/reference/wix-events-v2/schedulebookmarks/introduction): Allow members to mark their favorite schedule items to curate their own personalized agenda for your event.
- [Wix Events v2](https://www.wix.com/velo/reference/wix-events-v2/wixeventsv2/introduction): The updated [Wix Events](https://www.wix.com/velo/reference/wix-events-backend/wixevents/introduction) API where you can create and manage events on your site.

(April 4, 2024)

### New Developer Preview APIs: Mobile Elements

`Wix Editor Elements ($w)`

<blockquote class="important">

__Important:__
+ These APIs are only relevant for custom widgets in [Branded Apps](https://www.wix.com/app-builder).
+ Custom widgets are not yet available to all users. 
+ These APIs are in [Developer Preview](https://www.wix.com/velo/reference/api-overview/developer-preview) and are subject to change. 

</blockquote>

We added the following mobile APIs:

+ [`MobileButton`]($w/mobilebutton): A button element on a mobile app.
+ [`MobileContainer`]($w/mobilecontainer): A container element for repeater items on a mobile app.
+ [`MobileElement`]($w/mobileelement): Provides basic functionality for mobile elements.
+ [`MobileImage`]($w/mobileimage): An image element on a mobile app.
+ [`MobilePicker`]($w/mobilepicker): A picker for selecting items on a mobile app.
+ [`MobileRepeater`]($w/mobilerepeater): A repeater mobile element used for creating repeating layouts on a mobile app widget.
+ [`MobileSwitch`]($w/mobileswitch): A switch used for a single binary choice on a mobile app.
+ [`MobileText`]($w/mobiletext): A text element on a mobile app.
+ [`MobileTextInput`]($w/mobiletextinput): A text input element for capturing small amounts of text on a mobile app.

(April 3, 2024)

### New Developer Preview API: Wix Mobile 

`wix-mobile`

<blockquote class="important">

__Important:__
+ This API is only relevant for custom widgets in [Branded Apps](https://www.wix.com/app-builder).
+ Custom widgets are not yet available to all users. 
+ This API is in [Developer Preview](https://www.wix.com/velo/reference/api-overview/developer-preview) and is subject to change. 

</blockquote>

The [Wix Mobile API](https://www.wix.com/velo/reference/wix-mobile/introduction) provides the functionality required to work with your mobile app.

It contains the [showAlert()](https://www.wix.com/velo/reference/wix-mobile/showalert) API that creates and opens an alert modal on your mobile app.

(April 3, 2024)

### New Developer Preview API: Wix Navigate Mobile 

`wix-navigate-mobile`

<blockquote class="important">

__Important:__
+ This API is only relevant for custom widgets in [Branded Apps](https://www.wix.com/app-builder).
+ Custom widgets are not yet available to all users. 
+ This API is in [Developer Preview](https://www.wix.com/velo/reference/api-overview/developer-preview) and is subject to change. 

</blockquote>

The [Wix Navigate Mobile API](https://www.wix.com/velo/reference/wix-navigate-mobile/introduction) provides the functionality required to navigate through your mobile app.

It contains the [openUrl()](https://www.wix.com/velo/reference/wix-navigate-mobile/openurl) API that directs your mobile app to open the specified URL in the device's browser.

(April 3, 2024)

### Updated API: Wix Window Frontend

`wix-window-frontend`

We've added a new mode, `"Editor"`, to the [`viewMode`](https://www.wix.com/velo/reference/wix-window-frontend/viewmode) property of the [`wix-window-frontend`](https://www.wix.com/velo/reference/wix-window-frontend) module.

The `viewMode` property retrieves the `"Editor"` value when viewing a [Wix Blocks](https://support.wix.com/en/article/wix-blocks-check-out-our-articles) built widget in the editor. 

(March 18, 2024)

### New: Wix Blocks Panel Builder Elements

The following elements can be added to [Wix Blocks Custom Panels](https://support.wix.com/en/article/wix-blocks-about-panels#custom-panels) and managed in the [Wix Blocks Panel Code](https://support.wix.com/en/article/wix-blocks-adding-code-to-your-custom-panels):

* [PanelColorPicker]($w/panelcolorpicker) The panel color picker is used in the Wix Blocks panel builder for picking colors from a color palette.
* [PanelFontAndColorPicker]($w/panelfontandcolorpicker) The panel font and color picker is used in the Wix Blocks panel builder for picking fonts from a dropdown and colors from a color palette. 

(March 5, 2024)

### New SPI: Velo Action

The new [Velo Action SPI](https://www.wix.com/velo/reference/spis/wix-automations) lets you create your own custom action to use in your site's automations. You can create and test code directly in your site dashboard when creating or editing an automation.

(February 14, 2024)

### Updated API: Tasks V2

`wix-crm-v2`

We've updated the [Tasks API](/wix-crm-v2/tasks), which allows you to create and manage tasks on your site. Functionality includes:
- [Create](/wix-crm-v2/tasks/createtask), [update](/wix-crm-v2/tasks/updatetask), and [delete](/wix-crm-v2/tasks/deletetask) tasks.
- [Get](/wix-crm-v2/tasks/gettask) and [query](/wix-crm-v2/tasks/querytasks) tasks.
- [Count](/wix-crm-v2/tasks/counttasks) tasks.
- [Move](/wix-crm-v2/tasks/movetaskafter) a task's position in the display. 

(February 13, 2024)

### New APIs: Dashboard

The [Dashboard API](https://www.wix.com/velo/reference/wix-dashboard) has two new functions:
+ [`observeState()`](https://www.wix.com/velo/reference/wix-dashboard/observestate) allows you to react to changes in a dashboard page's environment.
+ [`getPageUrl()`](https://www.wix.com/velo/reference/wix-dashboard/getpageurl) allows you to retrieve the full URL for any dashboard page.

(February 12, 2024)


### New API: WixFormsV2 Element

`Wix Editor Elements ($w)`

The new WixFormsV2 Element displays customizable forms, collects all the info that a site visitor entered into the form fields, and lets you track all form submissions in the dashboard.

(February 7, 2024) 

### Deprecated: Workflows API

`wix-crm-backend` 

The Workflows API will be discontinued in the upcoming months. Our team is working to provide alternatives, and we'll provide timely updates before implementing any changes. We understand that this transition might present challenges, and we appreciate your patience and understanding.

(February 6, 2024)

### Updated API: Pricing Plans v2

`wix-pricing-plans.v2`

We've updated the [`wix-pricing-plans.v2`](https://www.wix.com/velo/reference/wix-pricing-plans-v2) module, which is currently released as a developer preview. Note that the changes break existing code that uses the following functions, which requires updates to your code:

- [`Orders`](https://www.wix.com/velo/reference/wix-pricing-plans-v2/orders):
  - [`createOfflineOrder()`](https://www.wix.com/velo/reference/wix-pricing-plans-v2/orders/createofflineorder): `memberId` has been taken out of the `options` parameter, and is now the second required parameter after `planId`.
  - [`getOfflineOrderPreview()`](https://www.wix.com/velo/reference/wix-pricing-plans-v2/orders/getofflineorderpreview): `memberId` has been taken out of the `options` parameter, and is now the second required parameter after `planId`.

  (February 6, 2024)

## New Release: More eCommerce APIs

`wix-ecom-backend`

[Wix eCommerce](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) introduces new functionality to the [Orders](https://www.wix.com/velo/reference/wix-ecom-backend/orders/introduction), [Order Transactions](https://www.wix.com/velo/reference/wix-ecom-backend/ordertransactions/introduction), and [Order Invoices](https://www.wix.com/velo/reference/wix-ecom-backend/orderinvoices/introduction) APIs that provide developers with a growing set of services for customizing eCommerce functionality on Wix sites. The APIs include the following endpoints and webhooks:

+ [Get](https://www.wix.com/velo/reference/wix-ecom-backend/orders/getorder), [create](https://www.wix.com/velo/reference/wix-ecom-backend/orders/createorder), and [update](https://www.wix.com/velo/reference/wix-ecom-backend/orders/updateorder) orders.
+ [Add payment](https://www.wix.com/velo/reference/wix-ecom-backend/ordertransactions/addpayments) records to an order.
+ [Update a payment status](https://www.wix.com/velo/reference/wix-ecom-backend/ordertransactions/updatepaymentstatus) or [bulk update multiple payment statuses](https://www.wix.com/velo/reference/wix-ecom-backend/ordertransactions/bulkupdatepaymentstatuses).
+ [List invoices for multiple orders](https://www.wix.com/velo/reference/wix-ecom-backend/orderinvoices/listinvoicesformultipleorders).
+ Events that trigger when an order is [created](https://www.wix.com/velo/reference/wix-ecom-backend/events/onordercreated), [updated](https://www.wix.com/velo/reference/wix-ecom-backend/events/onorderupdated), [approved](https://www.wix.com/velo/reference/wix-ecom-backend/events/onorderapproved), or [canceled](https://www.wix.com/velo/reference/wix-ecom-backend/events/onordercanceled).
+ Events that trigger when [payment or refund details are added to an order](https://www.wix.com/velo/reference/wix-ecom-backend/events/onordertransactionsupdated), or when an order's [payment status is updated](https://www.wix.com/velo/reference/wix-ecom-backend/events/onorderpaymentstatusupdated).

As part of this release, several [wix-stores-backend](https://www.wix.com/velo/reference/wix-stores-backend) functions and events have been deprecated and will be removed on June 30, 2024.

**Note:** This module is in [Developer Preview](./developer-preview.md).

(February 4, 2024)

### New API: Checkout Templates

`wix-ecom-backend`

The new [Checkout Templates API](/wix-ecom-backend/checkouttemplates) allows you to manage templates to share pre-populated checkouts with customers. When customers then create checkouts from these templates, the new checkouts already include information such as predefined line items, coupons, or other customizations. Functionality includes:

+ [Creating](/wix-ecom-backend/checkouttemplates/createcheckouttemplate), [updating](/wix-ecom-backend/checkouttemplates/updatecheckouttemplate), or [deleting](/wix-ecom-backend/checkouttemplates/deletecheckouttemplate) checkout templates.
+ [Creating a new checkout](/wix-ecom-backend/checkouttemplates/createcheckoutfromtemplate) from a checkout template.
+ [Getting](/wix-ecom-backend/checkouttemplates/getcheckouttemplate) or [querying](/wix-ecom-backend/checkouttemplates/querycheckouttemplates) checkout templates.
+ Events that trigger when a template is [created](/wix-ecom-backend/events/oncheckouttemplatecreated), [updated](/wix-ecom-backend/events/oncheckouttemplateupdated), [deleted](/wix-ecom-backend/events/oncheckouttemplatedeleted), or when a [template is used to create a checkout](/wix-ecom-backend/events/oncheckouttemplateused).

**Note:** This module is in [Developer Preview](./developer-preview.md).

(January 31, 2024)

### New APIs: Wix Bookings V2 Services Functions and Events

`wix-bookings.v2`

We added new APIs in the [Wix Bookings Services V2](/wix-bookings-v2/services) module that: 

+ [Create a service](/wix-bookings-v2/services/createservice)
+ [Update a service](/wix-bookings-v2/services/updateservice)
+ [Delete a service](/wix-bookings-v2/services/deleteservice)
+ Trigger events when a service is [created](/wix-bookings-v2/events/onservicecreated), [updated](/wix-bookings-v2/events/onserviceupdated), and [deleted](/wix-bookings-v2/events/onservicedeleted)


(January 29, 2024)


### New API: Rich Content Viewer Element

`Wix Editor Elements ($w)`

We added the new Rich Content Viewer Editor Element that allows you to display rich content created using the [Rich Content Editor](https://support.wix.com/en/article/cms-formerly-content-manager-working-with-rich-content-and-adding-it-to-a-dynamic-page) in the CMS (Content Management System). The [`content`]($w/richcontentviewer/content) property is an object used to set and get the content of the Rich Content Viewer element.

(January 11, 2024) 

### New Developer Preview API: Wix Blog Draft Posts

`wix-blog-backend`

The new [Draft Posts API](/wix-blog-backend/draftposts) allows you to manage unpublished blog posts. Functionality includes:

+ [Create](/wix-blog-backend/draftposts/createdraftpost), [update](/wix-blog-backend/draftposts/updatedraftpost), or [delete](/wix-blog-backend/draftposts/deletedraftpost) draft posts.
+ [Get](/wix-blog-backend/draftposts/getdraftpost), [list](/wix-blog-backend/draftposts/listdraftposts), or [query](/wix-blog-backend/draftposts/querydraftposts) draft posts.
+ [Get](/wix-blog-backend/draftposts/getdeleteddraftpost) or [list](/wix-blog-backend/draftposts/listdeleteddraftposts) deleted draft posts.
+ [Restore](/wix-blog-backend/draftposts/restorefromtrashbin) or [remove](/wix-blog-backend/draftposts/removefromtrashbin) draft posts from the trash bin.

**Note:** This module is in [Developer Preview](./developer-preview.md).

(December 31, 2023)

### Temporarily Removed: Tasks API

`wix-crm.v2`

The Tasks API is being temporarily removed in preparation for replacement by a new version.

(December 25, 2023)

### Removed: Workflows API

`wix-workflows.v2`

The Workflows v2 API is being discontinued and will no longer be supported moving forward. Please remove any code that uses `workflows.v2`. 

(December 19, 2023)

### New APIs: Hamburger Menu Element

`Wix Editor Elements ($w)`

We added the following new APIs that allow you to customize the [hamburger menu](https://support.wix.com/en/article/editor-x-using-hamburger-menus) element:

+ [`HamburgerOpenButton`]($w/hamburgeropenbutton): The icon button that opens the hamburger menu.
+ [`HamburgerCloseButton`]($w/hamburgerclosebutton): The icon button that closes the hamburger menu.
+ [`HamburgerMenuContainer`]($w/hamburgermenucontainer): The hamburger menu container, which holds the items of an expanded hamburger menu.
+ [`HamburgerOverlay`]($w/hamburgeroverlay): The fullscreen overlay that appears when the hamburger menu is open.

(December 18, 2023)

### New Function: [Media API](/wix-media-v2)

`wix-media.v2`

The Media Manager [Files API](/wix-media-v2/files) now includes a new function:

- [`bulkImportFile()`](/wix-media-v2/files/bulkimportfile) imports a bulk of files to the Media Manager using external URLs. This replaces [`bulkImportFiles()`](/wix-media-v2/files/bulkimportfiles) which has been deprecated and will be removed on March 31, 2024.

(December 14, 2023)

### Updated APIs: Pricing Plans Frontend and Pricing Plans Backend

`wix-pricing-plans-frontend`, `wix-pricing-plans-backend`

We've updated the [`wix-pricing-plans-frontend`](https://www.wix.com/velo/reference/wix-pricing-plans-frontend) and [`wix-pricing-plans-backend`](https://www.wix.com/velo/reference/wix-pricing-plans-backend) modules to reflect the actual function syntaxes.

`wix-pricing-plans-frontend`:
- [`Checkout`](https://www.wix.com/velo/reference/wix-pricing-plans-frontend/checkout):
  - [`createOnlineOrder`](https://www.wix.com/velo/reference/wix-pricing-plans-frontend/checkout/createonlineorder): `couponCode` has been removed and `startDate` has been taken out of the `options` parameter.
  - [`startOnlinePurchase()`](https://www.wix.com/velo/reference/wix-pricing-plans-frontend/checkout/startonlinepurchase): `couponCode` has been removed and `startDate` has been taken out of the `options` parameter.

`wix-pricing-plans-backend`:
- [`Checkout`](https://www.wix.com/velo/reference/wix-pricing-plans-backend/checkout):
  - [`createOnlineOrder`](https://www.wix.com/velo/reference/wix-pricing-plans-backend/checkout/createonlineorder): `couponCode` and `startDate` have been taken out of the `options` parameter.

### New Developer Preview API: Table Reservations

The [Table Reservations API](https://www.wix.com/velo/reference/wix-table-reservations-v2/introduction) provides all the functionality required to create and manage restaurant table reservations.

It contains the following APIs:

* [Reservations](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservations/introduction): Creates and manages restaurant table reservations.
* [Reservation Locations](https://www.wix.com/velo/reference/wix-table-reservations-v2/reservationlocations/introduction): Provides location information and configures reservation settings for individual restaurants.
* [Time Slots](https://www.wix.com/velo/reference/wix-table-reservations-v2/timeslots/introduction): Retrieves availability information for time slots at a reservation location.

(December 11, 2023)

### Updated API: Wix Inbox v2

`wix-inbox.v2`

We've updated the [`wix-inbox.v2`](https://www.wix.com/velo/reference/wix-inbox-v2) module, which is currently released as a developer preview. Note that the changes break existing code that uses the following functions, which requires updates to your code:

- [`Conversations`](https://www.wix.com/velo/reference/wix-inbox-v2/conversations):
  - [`getOrCreateConversation()`](https://www.wix.com/velo/reference/wix-inbox-v2/conversations/getorcreateconversation): `participantId` has been removed from the `options` parameter, and is now the first required parameter.
- [`Messages`](https://www.wix.com/velo/reference/wix-inbox-v2/messages):
  - [`listMessages()`](https://www.wix.com/velo/reference/wix-inbox-v2/messages/listmessages): `visibility` has been removed from the `options` parameter and is now the required second parameter after `conversationId`.
  - [`sendMessage()`](https://www.wix.com/velo/reference/wix-inbox-v2/messages/sendmessage): `message` has been removed from the `options` parameter and is now the required second parameter after `conversationId`.

(November 29, 2023)

### New Developer Preview API: Reviews

`wix-reviews.v2`

The new [Reviews API](/wix-reviews-v2) allows you to manage reviews for a site's services, content, or products. Functionality includes:

+ [Create](/wix-reviews-v2/reviews/createreview), [delete](/wix-reviews-v2/reviews/deletereview), [get](/wix-reviews-v2/reviews/getreview), or [update](/wix-reviews-v2/reviews/updatereview) a review.
+ [Query](/wix-reviews-v2/reviews/queryreviews) reviews.

**Note:** This module is in [Developer Preview](./developer-preview.md).

(November 28, 2023)

### New API: TextMask

`Wix Editor Elements ($w)`

The new [TextMask API]($w/textmask) allows you to mask images and videos in the background of your text. Use the [`text`]($w/textmask/text) property to set or get the TextMask's plain-text content. Use the [`background.src`]($w/textmask/background) property to set or get the source of the TextMask's background.

(November 27, 2023)

### New API: Slideshow Button

`Wix Editor Elements ($w)`

The new [SlideshowButton API]($w/slideshowbutton) allows you to customize the navigation buttons on your slideshow. Similar to the [Button]($w/button) element, you can manage the labels, styles, icons, and visibility settings of a slideshow button. Note that you can't set a link to a slideshow button. 

(October 17, 2023)

### Migration of legacy APIs, batch 3

In the past few weeks, we've re-released some more legacy APIs.
This follows the [May](#migration-of-legacy-apis), [June](#migration-of-legacy-apis-batch-2), [July](#migration-of-notifications-api), and [August](#migration-of-booking-resources-api) 2023 re-releases of
legacy APIs.

You don't need to take any action at this time.
As always, we'll continue to support the legacy APIs,
so your existing code will continue to work as it does today.

Behind the scenes, this is part of a large,
cross-Wix effort to move all of our APIs to a new infrastructure.
This migration will allow us to release APIs more quickly after they're developed,
and to align with established design patterns across all of Wix's APIs.
This means you can get your hands on better, more consistent APIs,
faster than before.

#### What's in this release

All the new modules are released as a
[developer preview](https://www.wix.com/velo/reference/api-overview/developer-preview)
and, unless otherwise mentioned, are
[universal modules](https://www.wix.com/velo/reference/api-overview/api-versions#api-overview_api-versions_universal-modules).

Most of the APIs contain the same functionality as the previous version.
In some rare cases, a regression was unavoidable.
This list outlines the modules (and their respective namespaces) that were released,
as well as any new or removed functionality as compared to the previous release:

`wix-business-tools.v2`:

- All functions are now in the `SiteProperties` namespace inside the module.
- Site Properties:
  - New: [`getSiteProperties()`](/wix-business-tools-v2/siteproperties/getsiteproperties).
    This function replaces all functions in the `GeneralInfo` namespace inside the `wix-site-backend`module.
  - New: [`updateBusinessContact()`](/wix-business-tools-v2/siteproperties/updatebusinesscontact).
  - New: [`updateBusinessProfile()`](/wix-business-tools-v2/siteproperties/updatebusinessprofile).
  - New: [`updateBusinessSchedule()`](/wix-business-tools-v2/siteproperties/updatebusinessschedule).
  - New: [`updateConsentPolicy()`](/wix-business-tools-v2/siteproperties/updateconsentpolicy).

`wix-members.v2`:

- Functions from the previous `CurrentMember` namespace are now in the `Members` namespace.
- Members: 
  - [`createMember()`](wix-members-v2/members/createmember).
  - [`listMembers()`](wix-members-v2/members/listmembers).
  - [`queryMembers()`](wix-members-v2/members/querymembers).
  - [`getCurrentMember()`](wix-members-v2/members/getcurrentmember) replaces `getMember()` from `CurrentMember`.
  - [`joinCommunity()`](wix-members-v2/members/joincommunity) replaces `makeProfilePublic()` from `CurrentMember`.
  - [`leaveCommunity()`](wix-members-v2/members/leavecommunity) replaces `makeProfilePrivate()` from `CurrentMember`.
  - [`updateCurrentMemberSlug()`](wix-members-v2/members/updatecurrentmemberslug) replaces `updateSlug()` from `CurrentMember`.
- `getRoles()` from `CurrentMember` is not available.

(October 15, 2023)
### New $w Product Page APIs

We added the following new $w Product Page APIs:

+ [getCustomText()](/$w/productpage/getcustomtext): Gets the values of a product's custom text fields.
+ [getQuantity()](/$w/productpage/getquantity): Gets the quantity of a product in the Product Page.
+ [getSelectedChoices()](/$w/productpage/getselectedchoices): Gets the selected product option choices of a product in the Product Page.
+ [getSelectedVariantId()](/$w/productpage/getselectedvariantid): Gets the variant ID of the selected product variant.
+ [onAddToCart()](/$w/productpage/onaddtocart): Adds an event handler that runs when the **Add To Cart** button in the Product Page is clicked.
+ [onBuyNow()](/$w/productpage/onbuynow): Adds an event handler that runs when the **Buy Now** button in the Product Page is clicked.
+ [onChoiceSelected()](/$w/productpage/onchoiceselected): Adds an event handler that runs when a product option choice is selected.
+ [onQuantityChanged()](/$w/productpage/onquantitychanged): Adds an event handler that runs when a product's quantity is changed.
+ [setAddToCartLabel()](/$w/productpage/setaddtocartlabel): Sets the Add To Cart button's label.
+ [setBuyNowLabel()](/$w/productpage/setbuynowlabel): Sets the Buy Now button's label.
+ [setQuantity()](/$w/productpage/setquantity): Sets the quantity of a product in the Product Page.

We also added a tutorial that uses some of the new $w Product Page APIs: [Tutorial: Adding a Request A Quote Option to a Wix Store Product Page](https://dev.wix.com/docs/develop-websites/articles/wix-apps/wix-e-commerce-stores/tutorial-request-a-quote). 

(October 10, 2023)

### New Developer Preview API: Recommendations

The new [Recommendations API](/wix-ecom-backend/recommendations) allows you to promote and recommend items to your customers using recommendation algorithms. It includes the following endpoints:

+ [List](/wix-ecom-backend/recommendations/listavailablealgorithms) available recommendation algorithms.
+ [Get](/wix-ecom-backend/recommendations/getrecommendation) a list of item recommendations from an algorithm.

**Note:** This module is in [Developer Preview](./developer-preview.md).

(September 21, 2023)

### New Developer Preview API: Back In Stock Notifications

The new [Back In Stock Notifications API](/wix-ecom-backend/backinstocknotifications) allows you to manage customer requests to receive back in stock notifications when out-of-stock items become available.  

Functionality includes:
+ [Settings](/wix-ecom-backend/backinstocksettings/introduction) that allow you to [start](/wix-ecom-backend/backinstocksettings/startcollectingrequests) and [stop](/wix-ecom-backend/backinstocksettings/stopcollectingrequests) collecting requests. 
+ [Creating](/wix-ecom-backend/backinstocknotifications/createbackinstocknotificationrequest) or [deleting](/wix-ecom-backend/backinstocknotifications/deletebackinstocknotificationrequest) a back in stock notification request.
+ [Getting](/wix-ecom-backend/backinstocknotifications/getbackinstocknotificationrequest) or [querying](/wix-ecom-backend/backinstocknotifications/querybackinstocknotificationrequests) back in stock notification requests.
+ Manually [reporting](/wix-ecom-backend/backinstocknotifications/reportitemsbackinstock) an item as back in stock, which triggers the requested notification to send.
+ Events when a back in stock notification request is [created](/wix-ecom-backend/events/onbackinstocknotificationrequestcreated), [updated](/wix-ecom-backend/events/onbackinstocknotificationrequestupdated), or [deleted](/wix-ecom-backend/events/onbackinstocknotificationrequestdeleted).

**Note:** This module is in [Developer Preview](./developer-preview.md).

(September 4, 2023)

### Migration of Booking Resources API

We've re-released another legacy API.
This follows the [May](#migration-of-legacy-apis), [June](#migration-of-legacy-apis-batch-2), and [July](#migration-of-notifications-api) 2023 re-releases of
legacy APIs.

This API is released as a
[developer preview](https://www.wix.com/velo/reference/api-overview/developer-preview) and is a 
[universal module](https://www.wix.com/velo/reference/api-overview/api-versions#api-overview_api-versions_universal-modules).

You don't need to take any action at this time.
As always, we'll continue to support the legacy APIs,
so your existing code will continue to work as it does today.

`wix-bookings.v1`:

- Resources:
    - [`updateSchedules`](https://www.wix.com/velo/reference/wix-bookings.v1/resources/updateschedule) replaces `updateResourceSchedule()`.
    - `queryResourceCatalog()` is not available. 

(August 31, 2023)

### Update: New fields in Pricing Plans

`wix-pricing-plans.v2`

The [Plans object](wix-pricing-plans-v2/plans) has a new `formId` field, which is the ID of the order form associated with a plan at checkout.

The [Orders object](wix-pricing-plans-v2/orders) has a new `formData` object, which contains the following fields: 
- `formId`: the ID of the order form associated with a plan at checkout. 
- `submissionId`: the ID of the plan's order form submitted at checkout. 
- `submissionData`: the data submitted to the plan's order form at checkout.

(August 31, 2023)  


### New API: Web Modules

> This API is only available for Wix Studio sites. Wix Studio is currently in beta and is not yet available to all users.

`wix-web-module`

The Web Modules API allows you to define functions in your backend code that can be called from your site's frontend code. Use the [`webMethod()`](wix-web-module/webmethod) function to define a backend function and the permissions needed to call it.

(August 23, 2023)


### New API: Forms Submissions

The new [Form Submissions API](wix-forms-v2/submissions/introduction) allows you to manage form submissions from your site visitors. 

Functionality includes: 
+ [Creating](wix-forms-v2/submissions/create-submission), [updating](wix-forms-v2/submissions/update-submission), or [deleting](wix-forms-v2/submissions/delete-submission) a submission.
+ [Getting](wix-forms-v2/submissions/get-submission) a submission or [querying](wix-forms-v2/submissions/query-submissions-by-namespace) submissions by namespace.
+ [Counting](wix-forms-v2/submissions/count-submissions) the number of submissions for a specific form. 
+ [Marking](wix-forms-v2/submissions/bulk-mark-submissions-as-seen) submissions as seen. 
+ [Confirming](wix-forms-v2/submissions/confirm-submission) a submission has been recorded. 
+ [Geting a media upload URL](wix-forms-v2/submissions/get-media-upload-url) to use when creating a submission with a field for uploading files. 

(August 21, 2023)


### New: Dashboard Builder Elements

`Wix Editor Elements ($w)`

You can now add these elements to dashboard pages in your Wix site or in Wix Blocks:

* [DashboardButton]($w/dashboardbutton)
* [DashboardHeading]($w/dashboardheading)
* [DashboardIconButton]($w/dashboardiconbutton)
* [DashboardInfoIcon]($w/dashboardinfoicon)
* [DashboardInput]($w/dashboardinput)
* [DashboardNumberInput]($w/dashboardnumberinput)
* [DashboardText]($w/dashboardtext)
* [DashboardTextButton]($w/dashboardtextbutton)
* [DashboardToggleSwitch]($w/dashboardtoggleswitch)

(August 13, 2023)

### New API: Accordion

`Wix Editor Elements ($w)`

>**Note:** This feature is currently only available in Wix Studio and Editor X.

The new [Accordion API]($w/accordion) allows you to display multiple, collapsible item elements 
in a vertical stack, each with different content.

(August 9, 2023)

### New Developer Preview API: Wix Comments v2

The new [Comments API](/wix-comments-v2/comments) allows you to manage a customized commenting program.  

Functionality includes:
+ [Creating](/wix-comments-v2/comments/createcomment), [updating](/wix-comments-v2/comments/updatecomment), or [deleting](/wix-comments-v2/comments/deletecomment) a comment.
+ [Getting](/wix-comments-v2/comments/getcomment) or [querying](/wix-comments-v2/comments/querycomments) comments.
+ [Marking](/wix-comments-v2/comments/markcomment) and [Unmarking](/wix-comments-v2/comments/unmarkcomment) a comment.
+ [Counting](/wix-comments-v2/comments/countcomments) comments.
+ Events when a comment is [created](/wix-comments-v2/events/oncommentcreated), [updated](/wix-comments-v2/events/oncommentupdated), [deleted](/wix-comments-v2/events/oncommentdeleted), [marked](/wix-comments-v2/events/oncommentmarked), or [unmarked](/wix-comments-v2/events/oncommentunmarked).

**Note:** This module is in [Developer Preview](./developer-preview.md).

(August 9, 2023)

### New SPI: eCommerce Validations

The new eCommerce [Validations SPI](https://www.wix.com/velo/reference/spis/wix-ecom/ecom-validations) is a [custom extension](https://support.wix.com/en/article/velo-custom-app-extensions-using-spis) that allows you to validate a site visitor's cart and checkout. 

The [`GetValidationViolations()`](https://www.wix.com/velo/reference/spis/wix-ecom/ecom-validations/getvalidationviolations) function validates a site visitor's cart or checkout and returns any validation violations. Site visitors can see the validation violations in their cart and checkout pages.

(July 30, 2023)

### Migration of Notifications API

We've re-released another legacy API.
This follows the [May](#migration-of-legacy-apis) and [June](#migration-of-legacy-apis-batch-2) 2023 re-releases of
legacy APIs.

This API is released as a
[developer preview](https://www.wix.com/velo/reference/api-overview/developer-preview) and is a 
[universal module](https://www.wix.com/velo/reference/api-overview/api-versions#api-overview_api-versions_universal-modules).

You don't need to take any action at this time.
As always, we'll continue to support the legacy APIs,
so your existing code will continue to work as it does today.

`wix-notifications.v2`:

- [notify](wix-notifications-v2/notifications/notify) has moved to the `Notifications` namespace within the module.
  
(July 24, 2023)

### New API: Effects

`Wix Editor Elements ($w)`

The new [Effects API]($w/effects) allows you to programmatically change the way supported elements are displayed on your site.

(July 19, 2023)

### CSS Styling and Custom Class List

`Wix Editor Elements ($w)`

>**Note:** This feature is currently in Beta and open to a limited number of users.
You can now add [CSS]($w/styling-elements-with-css) styling to customize the appearance of your website, 
from colors and fonts to the sizes and positions of different elements. Apply CSS to available 
[global classes](https://www.wix.com/velo/reference/$w/styling-elements-with-css#$w_styling-elements-with-css_available-classes) 
or create your own with the [Custom Class List]($w/customclasslist) element.

(July 19, 2023)

### New Module for Wix Blocks: Wix Application

>**Note:** Wix Blocks is currently in Beta and open to a limited number of users.

This module includes functions to manage and get information about Blocks applications that are installed on a site. 

It includes: 
* [`getDecodedAppInstance`](https://www.wix.com/velo/reference/wix-application/getdecodedappinstance): Gets an installed Blocks app's instance, including its current pricing plan.
* [`getAppPageUrl`](https://www.wix.com/velo/reference/wix-application/getapppageurl): Gets the page URL of a Blocks app that was installed as a new page.
* [`openAppLightbox`](https://www.wix.com/velo/reference/wix-application/openapplightbox): Opens the lightbox of a Blocks app that was installed as a lightbox.

(July 18, 2023)


### Migration of frontend-only APIs

We've migrated the frontend modules of legacy APIs
so they now end with `-frontend`
(for example, `wix-bookings-frontend` replaces `wix-bookings`).
Other than the name, these modules are identical to the modules they replace.

You don't need to take any action at this time.
As always, we'll continue to support the legacy APIs
so your existing code will continue to work as it does today.
The legacy APIs will be hidden in the docs,
so please refer to the new modules for reference.

What's in the release:

+ [`wix-animations-frontend`](/wix-animations-frontend) replaces `wix-animations`.
+ [`wix-bookings-frontend`](/wix-bookings-frontend) replaces `wix-bookings`.
+ [`wix-crm-frontend`](/wix-crm-frontend) replaces `wix-crm`.
+ [`wix-events-frontend`](/wix-events-frontend) replaces `wix-events`.
+ [`wix-location-frontend`](/wix-location-frontend) replaces `wix-location`.
+ [`wix-members-frontend`](/wix-members-frontend) replaces `wix-members`.
+ [`wix-pay-frontend`](/wix-pay-frontend) replaces `wix-pay`.
+ [`wix-pricing-plans-frontend`](/wix-pricing-plans-frontend) replaces `wix-pricing-plans`.
+ [`wix-realtime-frontend`](/wix-realtime-frontend) replaces `wix-frontend`.
+ [`wix-seo-frontend`](/wix-seo-frontend) replaces `wix-seo`.
+ [`wix-site-frontend`](/wix-site-frontend) replaces `wix-site`.
+ [`wix-storage-frontend`](/wix-storage-frontend) replaces `wix-storage`.
+ [`wix-stores-frontend`](/wix-stores-frontend) replaces `wix-stores`.
+ [`wix-window-frontend`](/wix-window-frontend) replaces `wix-window`.

(June 21, 2023)

### Migration of legacy APIs, batch 2

In the past few weeks, we've re-released some more legacy APIs.
This follows the May 2023 re-release of
[the first batch of APIs](#migration-of-legacy-apis).

You don't need to take any action at this time.
As always, we'll continue to support the legacy APIs,
so your existing code will continue to work as it does today.

Behind the scenes, this is part of a large,
cross-Wix effort to move all of our APIs to a new infrastructure.
This migration will allow us to release APIs more quickly after they're developed,
and to align with established design patterns across all of Wix's APIs.
This means you can get your hands on better, more consistent APIs,
faster than before.

#### What's in this release

All the new modules are released as a
[developer preview](https://www.wix.com/velo/reference/api-overview/developer-preview)
and, unless otherwise mentioned, are
[universal modules](https://www.wix.com/velo/reference/api-overview/api-versions#api-overview_api-versions_universal-modules).

Most of the APIs contain the same functionality as the previous version.
In some rare cases, a regression was unavoidable.
This list outlines the modules (and their respective namespaces) that were released,
as well as any new or removed functionality as compared to the previous release:

`wix-secrets.v2`:

- All functions are now in the `Secrets` namespace inside the module.

`wix-workflows.v2`:

- The `Workflows` namespace has been split into `Workflows`, `Tasks`, and `Cards`.
  Functions are now located in their respective namespaces.
- Workflows:
  - [`updateWorkflow()`](/wix-workflows-v2/workflows/updateworkflow) replaces `updateWorkflowFields()`.
  - [`listWorkflows()`](/wix-workflows-v2/workflows/listworkflows) replaces `listWorkflowsInfo()`.
  - [`getWorkflow()`](/wix-workflows-v2/workflows/getworkflow) replaces `getWorkflowInfo()`.
- Phases:
  - [`updatePhase()`](/wix-workflows-v2/phases/updatePhase) replaces `updatePhaseFields()`.
  - [`listPhases()`](/wix-workflows-v2/phases/listPhases) replaces `listPhasesInfo()`.
  - [`getPhase()`](/wix-workflows-v2/phases/getPhase) replaces `getPhaseInfo()`.
- Cards:
  - [`updateCard()`](/wix-workflows-v2/cards/gupdateCardetPhase) replaces `updateCardFields()`.

`wix-groups.v2`:

- CreateRequests:
  - [`approveGroupRequests()`](/wix-groups-v2/createrequests/approveGroupRequests) replaces `approveCreateRequests()`.
  - [`listGroupRequests()`](/wix-groups-v2/createrequests/listGroupRequests) replaces `listCreateRequests()`.
  - [`queryGroupRequests()`](/wix-groups-v2/createrequests/queryGroupRequests) replaces `queryCreateRequests()`.
  - [`rejectGroupRequests()`](/wix-groups-v2/createrequests/rejectGroupRequests) replaces `rejectCreateRequests()`.

`wix-crm.v2`:

- The previous `Contacts` namespace is split into `Contacts`, `Labels`, and `ExtendedFields`.
- Tasks:
  - [`updateTaskStatus()`](/wix-crm-v2/tasks/updatetaskstatus) replaces `completeTask()` and `resetTask()`.

`wix-captcha.v2`:

- [`authorize()`](/wix-captcha-v2/captcha/authorize) has moved to the `Captcha` namespace within the module.

(June 20, 2023)

### New API: Wix Dashboard

`wix-dashboard`

The new [Wix Dashboard API](/wix-dashboard) allows you to interact with your site's [dashboard pages](https://support.wix.com/en/article/velo-working-with-dashboard-pages) using Velo. You can use the API to [navigate](/wix-dashboard/navigate) users to dashboard pages, and [display toast](/wix-dashboard/showtoast) messages.

(June 13, 2023)

### New Developer Preview API: Guests

`wix-events.v2`

The new [Guests API](/wix-events-v2/guests) provides the ability to retrieve information about guests attending an event by using the [`queryGuests`](https://www.wix.com/velo/reference/wix-events-v2/guests/queryguests) method.

**Note:** This module is in [Developer Preview](./developer-preview.md).

(June 8, 2023)

### New Developer Preview API: Wix Bookings Attendance

`wix-bookings.v2`

The new [Wix Bookings Attendance APIs](/wix-bookings-v2/attendance) provide the following functionality: 

+ [Set the attendance](/wix-bookings-v2/attendance/setattendance) for a booked session, such as whether the session was attended and by how many participants. 
+ [Get the attendance information](/wix-bookings-v2/attendance/getattendance) for a booked session.
+ [Query the attendance information](/wix-bookings-v2/attendance/queryattendance) for a booked sessions by booking or by session.

**Note:** This module is in [Developer Preview](./developer-preview.md).

(June 8, 2023)


### New Developer Preview API: Wix Loyalty Tiers, Rewards, and Coupons

`wix-loyalty.v2`

The new [Wix Loyalty APIs](/wix-loyalty-v2) provide the following functionality: 

+ Manage a [loyalty tiers](/wix-loyalty-v2/tiers) program, including [creating](/wix-loyalty-v2/tiers/createtier) new tiers and [updating settings](/wix-loyalty-v2/tiers/updatetiersprogramsettings) that apply to all of the tiers in the program.
+ Manage the [loyalty rewards](/wix-loyalty-v2/rewards) and [loyalty coupons](/wix-loyalty-v2/coupons) that loyalty points can be redeemed for.

**Note:** This module is in [Developer Preview](./developer-preview.md).

(May 31, 2023)

### New Events for Wix Bookings v2

`wix-bookings.v2`

You can now handle events for when bookings are [created](wix-bookings-v2/events/onbookingcreated), [rescheduled](wix-bookings-v2/events/onbookingrescheduled), [confirmed](wix-bookings-v2/events/onbookingconfirmed), [declined](wix-bookings-v2/events/onbookingdeclined), [canceled](wix-bookings-v2/events/onbookingcanceled), and for when [the number of participants has been updated](wix-bookings-v2/events/onbookingnumberofparticipantsupdated). 

(May 30, 2023)



### New Developer Preview API: Wix Bookings v2 Service Options and Variants

`wix-bookings.v2`

The new [Wix Bookings v2 Service Options and Variants APIs](/wix-bookings-v2/serviceoptionsandvariants) provide functionality for retrieving and managing booking service options and variants. Functionality includes: 

+ Getting service options and variants by [ID](/wix-bookings-v2/serviceoptionsandvariants/getserviceoptionsandvariants) and by [service ID](/wix-bookings-v2/serviceoptionsandvariants/getserviceoptionsandvariantsbyserviceid)
+ [Querying](/wix-bookings-v2/serviceoptionsandvariants/queryserviceoptionsandvariants) service options and variants
+ [Creating](/wix-bookings-v2/serviceoptionsandvariants/createserviceoptionsandvariants) and [cloning](/wix-bookings-v2/serviceoptionsandvariants/cloneserviceoptionsandvariants) service options and variants
+ [Updating](/wix-bookings-v2/serviceoptionsandvariants/updateserviceoptionsandvariants) and [deleting](/wix-bookings-v2/serviceoptionsandvariants/deleteserviceoptionsandvariants) service options and variants
+ Backend events for [create](/wix-bookings-v2/events/onserviceoptionsandvariantscreated), [update](/wix-bookings-v2/events/onserviceoptionsandvariantsupdated), and [delete](/wix-bookings-v2/events/onserviceoptionsandvariantsdeleted) (CUD) operations

**Note:** This module is in [Developer Preview](./developer-preview.md).

(May 22, 2023)

### New Developer Preview API: Wix Data v2

`wix-data.v2`

The new [Wix Data API](/wix-data-v2), combined with the existing [`wix-data`](https://www.wix.com/velo/reference/wix-data), provides a complete solution for accessing, organizing, configuring, and managing data stored in a Wix site's database. It includes the following submodules:

+ [Data Collections](/wix-data-v2/collections): Create data collections and manage existing collections' structure.
+ [Indexes](/wix-data-v2/indexes): Create indexes for data collections, to make querying data faster.
+ [External Database Connections](/wix-data-v2/externaldatabaseconnections): Connect an external database and manage it with Wix Data APIs.

**Note:** This module is in [Developer Preview](./developer-preview.md). To access and manage items in a Wix site's data collections, please use the existing [`wix-data`](wix-data).

(May 17, 2023)

### New Feature: `fields()` function in Wix Data query

`wix-data`

A new feature in [`WixDataQuery`](https://www.wix.com/velo/reference/wix-data/wixdataquery) provides more control over query results. 
Previously queries returned all fields of the selected result. Now, you can choose which fields your query returns using the new [`fields()`](https://www.wix.com/velo/reference/wix-data/wixdataquery/fields) function.

(May 17, 2023)

### New Feature: Delete/Restore elements from the DOM

`Wix Editor Elements ($w)`

You can now delete and restore elements from the DOM.  

A new [deleted](https://www.wix.com/velo/reference/$w/element/deleted) property has been added.  
2 new functions have been added:
+ [`delete()`](https://www.wix.com/velo/reference/$w/element/delete)
+ [`restore()`](https://www.wix.com/velo/reference/$w/element/restore)  

(May 17, 2023)

### Migration of legacy APIs

In the past week, we've re-released a large number of legacy APIs.
Behind the scenes, this is part of a large,
cross-Wix effort to move all of our APIs to a new infrastructure.

This migration will allow us to release APIs more quickly after they're developed,
and to align with established design patterns across all of Wix's APIs.
This means you can get your hands on better, more consistent APIs,
faster than before.

As always, we'll continue to support the legacy APIs,
so your existing code will continue to work as it does today.

#### What's in this release

All the new modules are released as a
[developer preview](https://www.wix.com/velo/reference/api-overview/developer-preview)
and, unless otherwise mentioned, are
[universal modules](https://www.wix.com/velo/reference/api-overview/api-versions#api-overview_api-versions_universal-modules).

Most of the APIs contain the same functionality as the previous version.
In some rare cases, a regression was unavoidable.
This list outlines the modules (and their respective namespaces) that were released,
as well as any new or removed functionality as compared to the previous release:

`wix-groups.v2`:

- JoinGroupRequests replaces JoinRequests.
- Members:
  - [`members.queryMemberships()`](https://www.wix.com/velo/reference/wix-groups-v2/members/querymemberships)
    uses a different query syntax.
- Roles is not available.
- CreateRequests is not available.
- Events: All events are new.

`wix-stores.v2`:

- Inventory:
  - New: [`getInventoryVariants()`](https://www.wix.com/velo/reference/wix-stores-v2/inventory/getinventoryvariants).
  - New: [`queryInventory()`](https://www.wix.com/velo/reference/wix-stores-v2/inventory/queryinventory).
    This function uses a different query syntax.
- AbandonedCarts:
  - New: [`queryAbandonedCarts()`](https://www.wix.com/velo/reference/wix-stores-v2/abandonedcarts/queryabandonedcarts).
    This function uses a different query syntax.

`wix.members.v2`:

- Badges:
  - New: [`getBadge()`](https://www.wix.com/velo/reference/wix-members-v2/badges/getbadge) .
  - New: [`getMemberCountsPerBadge()`](https://www.wix.com/velo/reference/wix-members-v2/badges/getmembercountsperbadge).
  - New: [`listBadges()`](https://www.wix.com/velo/reference/wix-members-v2/badges/listbadges).
  - New: [`updateBadgesDisplayOrder()`](https://www.wix.com/velo/reference/wix-members-v2/badges/updatebadgesdisplayorder).
- Events: All events are new.

`wix.ecom.v2`:

- Currencies moved to `wix-ecom.v2` from `wix-pay`.
  - [`listCurrencies()`](https://www.wix.com/velo/reference/wix-ecom-v2/currencies/listcurrencies)
    replaces `getAllCurrencies()`.

`wix-marketing.v2`:

- Coupons:
  - New: [`bulkCreateCoupons()`](/wix-marketing-v2/coupons/bulkcreatecoupons).
  - New: [`bulkDeleteCoupons()`](/wix-marketing-v2/coupons/bulkdeletecoupons).
  - New: [`getCoupon()`](/wix-marketing-v2/coupons/getcoupon).
  - New: [`queryCoupons()`](/wix-marketing-v2/coupons/querycoupons).
    This function uses a different query syntax.

 `wix-pricing-plans.v2`

- Plans:
  - All plan functions moved to `wix-pricing-plans.v2` Plans from `wix-pricing-plans-backend`.
- Orders:
  - [`managementGetOrder()`](/wix-pricing-plans-v2/orders/managementgetorder) replaces `getOrder()`.
  - [`managementListOrders()`](/wix-pricing-plans-v2/orders/managementlistorders) replaces `listOrders()`.
  - [`memberGetOrder()`](/wix-pricing-plans-v2/orders/membergetorder) replaces `getCurrentMemberOrder()`.
  - [`memberListOrders()`](/wix-pricing-plans-v2/orders/memberlistorders) replaces `listCurrentMemberOrders()`.
  - [`requestCancellation()`](/wix-pricing-plans-v2/orders/requestcancellation) replaces `requestCurrentMemberOrderCancellation()`

  - [`createOfflineOrder()`](/wix-pricing-plans-v2/orders/createofflineorder) moved to Orders from Checkout.
  - [`getOfflineOrderPreview()`](/wix-pricing-plans-v2/orders/getofflineorderpreview) moved to Orders and replaces `previewOfflineOrder()` from Checkout.
  - [`getPricePreview()`](/wix-pricing-plans-v2/orders/getpricepreview) moved to Orders and replaces `previewPrice()` from Checkout.
- Checkout is not available.
- Events:
  - `onPlanPurchased()` is not available.
  - `onPlanUpdated()` is not available.

(May 15, 2023)

### New Bookings Custom Pricing Extension

SPI: `wix-bookings` 

The new [Wix Bookings Custom Pricing extension](https://www.wix.com/velo/reference/spis/wix-bookings/bookings-custom-pricing) gives you the ability to customize pricing for bookings. Use the [calculatePrice()](https://www.wix.com/velo/reference/spis/wix-bookings/bookings-custom-pricing/calculateprice) SPI function to integrate your own custom pricing logic, such as varied pricing for weekend rates or use of special equipment, and so on. Learn more with [this tutorial](https://support.wix.com/en/article/velo-tutorial-bookings-pricing-custom-extension).

(May 17, 2023)

### New Developer Preview API: Wix Currencies v2

`wix-ecom.v2`

The new [Wix Currencies API](/wix-ecom-v2/currencies) provides functionality
for getting exchange rates and converting between currencies.

This API is a newer version of Wix Pay's [Currencies](https://www.wix.com/velo/reference/wix-pay/currencies-obj?branch=jsdoc-migration-wix-pay-currencies-note) API.

Functionalities include:

+ [Listing currencies](/wix-ecom-v2/currencies/listcurrencies) supported on your site.
+ [Getting the exchange rate](/wix-ecom-v2/currencies/getconversionrate) between 2 currencies.
+ [Converting amounts](/wix-ecom-v2/currencies/convertcurrency) from 1 currency to another.


**Note:** This module is in [Developer Preview](./developer-preview.md).

(May 5, 2023)


### New Article: Shareable Booking Form Links

`wix-bookings`

The [Shareable Booking Form Links](https://www.wix.com/velo/reference/wix-bookings/shareable-booking-form-links) article explains how to use query parameters to create a custom shareable link to a Wix site's booking form page. This enables you to create a link to a Wix site's booking form page with preset values determined by you. (April 30, 2023)


### New Modules for Wix Blocks Panels

>**Note:** Wix Blocks is currently a Beta version, open to a limited number of users.

The `wix-widget` and `wix-editor` modules provide functionality for working with Blocks widgets from the [Blocks Panel code](https://support.wix.com/en/article/wix-blocks-adding-code-to-your-custom-panels).


* Use [`wix-widget`](/wix-widget) to control a widget's properties, Design Presets, and more. 
* Use [`wix-editor`](/wix-editor) to remove or restore widget elements, open Dashboard panels, and more.


(April 24, 2023)

### New: The $widget Namespace for Wix Blocks Widgets

>**Note:** Wix Blocks is currently a Beta version, open to a limited number of users.

The [`$widget`](/$widget) namespace contains functionality for working with your [Blocks widget's API](https://support.wix.com/en/article/wix-blocks-about-the-widget-api) from within the widget code. 

(April 24, 2023)

### New: Blocks Panel Builder Elements

>**Note:** Wix Blocks is currently a Beta version, open to a limited number of users.

The following elements can be added to [Blocks Custom Panels](https://support.wix.com/en/article/wix-blocks-about-panels#custom-panels) and managed in the [Blocks Panel Code](https://support.wix.com/en/article/wix-blocks-adding-code-to-your-custom-panels):

* [PanelButton]($w/panelbutton)
* [PanelCheckboxGroup]($w/panelcheckboxgroup)
* [PanelDropDown]($w/paneldropdown)
* [PanelRadioButtonGroup]($w/panelradiobuttongroup)
* [PanelRichText]($w/panelrichtext)
* [PanelSectionDivider]($w/panelsectiondivider)
* [PanelSlider]($w/panelslider)
* [PanelTextInput]($w/paneltextinput)
* [PanelThumbnails]($w/panelthumbnails)
* [PanelToggleSwitch]($w/paneltoggleswitch)

(April 24, 2023)

### New Developer Preview API: Query Wix Extended Bookings

`wix-bookings.v2`

The new [Wix Extended Bookings API](/wix-bookings-v2/extendedbookings) provides functionality for [querying](/wix-bookings-v2/extendedbookings/queryextendedbookings) bookings including additional details, such as attendance.

**Note:** This module is in [Developer Preview](./developer-preview.md).

(April 4, 2023)


### New Developer Preview API: Wix Media v2

`wix-media.v2`

The new [Wix Media API](/wix-media-v2) introduces functionality
for managing [files](/wix-media-v2/files) and [folders](/wix-media-v2/folders)
in your site's Media Manager.

Functionality includes: 
- Importing, updating, and deleting media files
- Getting and searching files
- Generating file upload and download URLs
- Creating, updating, and deleting folders in the Media Manager
- Getting and searching folders

**Note:** This module is in [Developer Preview](./developer-preview.md).

(April 3, 2023)

### New Developer Preview API: Wix Bookings Pricing 

`wix-bookings.v2`

The new [Wix Bookings Pricing API](/wix-bookings-v2/pricing) provides functionality for previewing and calculating pricing for bookings.

Functionality includes:

+ [Previewing](/wix-bookings-v2/pricing/previewprice) how much a booking will cost based on its line items.
+ [Calculating](/wix-bookings-v2/pricing/calculateprice) how much a booking will cost based on either: 
    + Standard pricing logic supplied with Wix Bookings.
    + Custom pricing logic you implement with the [Pricing Integration REST SPI](https://dev.wix.com/api/rest/wix-bookings/pricing-integration-spi).

**Note:** These modules are in [Developer Preview](./developer-preview.md).

(April 2, 2023)


### End of Life: Wix Paid Plans and Wix Paid Plans Backend

`wix-paid-plans`, `wix-paid-plans-backend`

The deprecated `wix-paid-plans` and `wix-paid-plans-backend` APIs have been removed from the documentation. Their functionality is available in the [`wix-pricing-plans`](wix-pricing-plans) and [`wix-pricing-plans-backend`](wix-pricing-plans-backend) APIs. Existing code containing these deprecated APIs will continue to work.

(March 27, 2023)


### End of Life: Wix Users and Wix Users Backend

`wix-users`, `wix-users-backend`

The deprecated `wix-users` and `wix-users-backend` APIs have been removed from the documentation. Their functionality is available as [noted below](#new-api-wix-members-and-wix-members-backend). Additionally, `getPricingPlans()` has moved to the [`Orders`](wix-pricing-plans-backend/orders) API as [`listCurrentMemberOrders()`](wix-pricing-plans-backend/orders/listcurrentmemberorders). Existing code containing these deprecated APIs will continue to work.

(March 27, 2023)


### New Article: Shareable Booking Calendar Links

`wix-bookings`

The [Shareable Booking Calendar Links](https://www.wix.com/velo/reference/wix-bookings/shareable-booking-calendar-links) article explains how to use query parameters to create a custom shareable link to a Wix site's booking calendar page. This enables you to create a link to a Wix site's booking calendar page with preset values you choose, or to create a link for rescheduling an existing booking. (Feb 12, 2023)

### New Developer Preview API: Wix Email Marketing v2

`wix-email-marketing.v2`

The new [Wix Email Marketing API](/wix-email-marketing-v2) provides functionality
for managing your email marketing campaigns.

Functionalities include:

+ [Getting](/wix-email-marketing-v2/accountdetails/getaccountdetails) your email marketing account details.
+ Getting a [list](/wix-email-marketing-v2/campaigns/listcampaigns) of your email campaigns.
+ [Pausing](/wix-email-marketing-v2/campaigns/pausescheduling) a scheduled campaign.
+ [Sending](/wix-email-marketing-v2/campaigns/sendtest) a test email for preview purposes.
+ Getting a [list](/wix-email-marketing-v2/campaigns/liststatistics) of statistics for up to 100 selected campaigns.

**Note:** This module is in [Developer Preview](./developer-preview.md).

(February 5, 2023)

### New APIs: Wix eCommerce Checkout

`wix-ecom-backend`

There are new APIs in the [Wix eCommerce module](wix-ecom-backend).

The new APIs provide the following functionality:
+ [Adding items to a checkout](wix-ecom-backend/checkout/addtocheckout)
+ [Marking a checkout as completed](wix-ecom-backend/checkout/markcheckoutascompleted)
+ [Removing the coupon from a checkout](wix-ecom-backend/checkout/removecoupon)
+ [Removing the gift card from a checkout](wix-ecom-backend/checkout/removegiftcard)
+ [Removing line items from a checkout](wix-ecom-backend/checkout/removelineitems)

(January 26, 2022)

### Platform update: Versions and universal modules

We've made 2 big changes to the Velo platform:

**Versions:**  
Versions are now available for Velo modules.
Modules from v2 and up include a version number in their names.
Older versions of the modules are still available.

**Universal modules:**  
New universal modules can be imported directly into any code file on your site.
This means that you can import modules
into public and page code without using web modules.

Learn more about [versions and universal modules](/api-overview/api-versions).

(January 19, 2023)

### Platform update: Developer Preview APIs

Today we can announce that we've started releasing APIs
with the new **Developer Preview** status!

Developer Preview APIs are available for testing,
but they're under active development and may change at any time.
For this reason, don't use Developer Preview APIs in production.

We want your feedback on the APIs in Developer Preview. Let us know about:

- What you're using the API for.
- Anything blocking you from using the API.
- Additions and features you would find useful.
- Bugs you've found in the API.

Please
[email us](mailto:velo-preview-feedback@wix.com)
with your feedback.

For more information, see [Developer Preview](./developer-preview.md).

(January 19, 2023)

### New Developer Preview API: Wix Sender Details v2

`wix-sender-details.v2`

The new [Wix Sender Details API](/wix-sender-details-v2) provides functionality
for the information that's displayed as the sender's name and email address
when sending an email from your Wix site.

Functionalities include:

- [Getting](/wix-sender-details-v2/senderdetails/getsenderdetails) and
  [updating](/wix-sender-details-v2/senderdetails/updatesenderdetails)
  your email sender details.
- [Verifying](/wix-sender-details-v2/senderdetails/verifyemail)
  your sender email address.

**Note:** This module is in [Developer Preview](./developer-preview.md).

(January 25, 2023)

### New Developer Preview API: Wix Loyalty v2

`wix-loyalty.v2`

The new [Loyalty API](/wix-loyalty-v2) provides functionality for:

- Activating and managing a site’s [loyalty program](/wix-loyalty-v2/programs).
- [Creating](/wix-loyalty-v2/accounts/createaccount) new loyalty accounts.
- [Adjusting points](/wix-loyalty-v2/accounts/adjustpoints) in a loyalty account.

**Note:** This module is in [Developer Preview](./developer-preview.md).

(January 25, 2023)

### New Developer Preview API: Wix Events v2

`wix-events.v2`

The new [Wix Events v2 API](/wix-events-v2) provides functionality for:

- Creating and managing [events](/wix-events-v2/events).
- Creating the types of tickets available for an event using
  [ticket definitions](/wix-events-v2/ticketdefinitions).
- Creating ticket reservations using [checkout](/wix-events-v2/checkout).
- Selling [tickets](/wix-events-v2/tickets).
- Tracking [orders](/wix-events-v2/orders).
- Creating and managing [policies](/wix-events-v2/policies).

**Note:** This module is in [Developer Preview](./developer-preview.md).

(January 25, 2023)

### New Developer Preview API: Wix Bookings v2

`wix-bookings.v2`

The new [Wix Bookings API](/wix-bookings-v2) provides functionality for: 

- Managing [bookings](/wix-bookings-v2/bookings),
  such as confirming, canceling, and rescheduling bookings.
- Retrieving the availability of a calendar's slots
  for appointments and classes with the
  [`queryAvailability()`](/wix-bookings-v2/availability-calendar/query-availability)
  function.

**Note:** This module is in [Developer Preview](./developer-preview.md).

(January 23, 2023)

### New Developer Preview API: Wix Marketing Tags v2

`wix-marketing-tags.v2`

The new [Wix Marketing Tags V2 API](/wix-marketing-tags-v2/introduction) provides functionality for:

- List marketing tags.
- Create and update marketing tags.
- Delete marketing tags.

**Note:** This module is in [Developer Preview](./developer-preview.md).

(January 23, 2023)

### New Developer Preview API: Wix Activity Counters v2

`wix-activity-counters.v2`

The new [Wix Activity Counters V2 API](/wix-activity-counters-v2/introduction)
provides functionality for
managing activity counters for site members.

**Note:** This module is in [Developer Preview](./developer-preview.md).

(January 23, 2023)

### New Developer Preview API: Wix Inbox v2

`wix-inbox.v2`

The new [Wix Inbox API](/wix-inbox-v2) introduces functionality
for managing [conversations](/wix-inbox-v2/conversations) and [messages](/wix-inbox-v2/messages)
between you and your visitors, contacts, and members.

**Note:** This module is in [Developer Preview](./developer-preview.md).

(January 23, 2023)

### New Developer Preview API: Wix Forum v2

`wix-forum.v2`

Use the new [Forum API](/wix-forum-v2) to get and query the following from your forum:

- [Posts](/wix-forum-v2/posts).
- [Categories](/wix-forum-v2/categories).

**Note:** This module is in [Developer Preview](./developer-preview.md).

(January 22, 2023)

### New Developer Preview API: Wix Business Tools v2

`wix-business-tools.v2`

The new
[Wix Business Tools API](/wix-business-tools-v2)
provides functionality for managing a site’s business information.
Currently it contains the Locations submodule, for managing a site’s business locations.

**Note:** This module is in [Developer Preview](./developer-preview.md).

(January 19, 2023)

### New API: Wix Auth

`wix-auth`

The new [Wix Auth API](wix-auth) provides functionality for working with permissions. The [`elevate()`](wix-auth/elevate) function enables any site visitor to call a function without the required permissions. **Note:** This function replaces the `suppressAuth` option used in some functions. Check a function's reference documentation to see if `elevate()` is supported.

(January 16, 2023)

### New API: Wix Pro Gallery Backend

`wix-pro-gallery-backend`

Use the new [Pro Gallery Backend API](wix-pro-gallery-backend) to create and manage pro galleries on your site's backend. You can also create and manage media items in the pro galleries. 

(January 11, 2023)

### New API: Dataset onReadyAsync()

`wix-dataset`

You can now use the new promise-based [`onReadyAsync()`](wix-dataset/dataset/onReadyAsync) function to load a dataset. 

(January 10, 2023)

### New API: Wix Blog

`wix-blog-backend`

Use the new [Blog API](wix-blog-backend) to get, list, and query the following from your blog:

- [Posts](wix-blog-backend/posts).
- [Categories](wix-blog-backend/categories).
- [Tags](wix-blog-backend/tags).

(December 22, 2022)

### Update: Apply a coupon to specific billing cycles

`wix-marketing-backend`

The new `discountCycleCount` parameter allows you to apply the discount of a coupon, created with the [`createCoupon()`](wix-marketing-backend/coupons-obj/createcoupon) function, to a specified amount of billing cycles.

(November 7, 2022)  

### New APIs: Menu and MenuContainer

`Wix Editor Elements ($w)`

The new [Menu API]($w/menu) and [MenuContainer API]($w/menucontainer) allow you to customize your menu items by changing their labels, links, where the item opens, and if an item displays as selected. This includes using Velo to modify site menus in real time during the visitor's stay on your site.

Use the [Menu API]($w/menu) for the menu on your regular site and use the [MenuContainer API]($w/menucontainer) for your mobile menu.

(October 19, 2022)

### Update: Wix Data consistentRead property

`wix-data`

The new `consistentRead` property in the `options` parameter allows data retrieval functions to read from the primary database instance. This decreases performance but ensures data retrieved is up to date even immediately after the database is updated. See [Wix Data and Eventual Consistency](https://www.wix.com/velo/reference/wix-data/introduction#wix-data_introduction_wix-data-and-eventual-consistency) for more information.

(October 2, 2022)

### New API: Section

`Wix Editor Elements ($w)`

The new [Section API]($w/section) allows you to divide your page into meaningful segments.
(September 28, 2022)

### New API: Wix Events

`Wix Editor Elements ($w)`

The [Wix Events]($w/wixevents) element allows you to display your site's events. The element can be set to display a specific set of events or all the events in an event category. Use the [`categoryId`]($w/wixevents/categoryid) property to dynamically change which event category to display. (September 20, 2022)


### New API: Apply a coupon to a pricing plan order

`wix-pricing-plans-backend`

The new [`applyCoupon()`](wix-pricing-plans-backend/checkout/applycoupon) function applies a coupon code to a draft order before it is purchased.
(September 20, 2022)

### New API: Tabs

`Wix Editor Elements ($w)`

The new Tabs Component allows users to display different content within one page without changing the URL and without the need to use code. With the [Tabs API]($w/tabs), you can reorder tabs or navigate between them using code. You can also define event handlers that run when tabs are navigated between or tab menu items are clicked.
(September 20, 2022)

### Updated: Members custom field structure

`wix-members`, `wix-members-backend`

The [wix-members](wix-members/introduction) and
[wix-members-backend](wix-members-backend/introduction) documentation
has been updated to reflect that the member `contactDetails.customField` object
contains key:object pairs,
not key:value pairs as was previously written.

We also wrote additional guidance on working with custom fields.

(September 19, 2022)

### New API: Pricing Plan Orders

`wix-pricing-plans`, `wix-pricing-plans-backend`

There are new APIs for managing pricing plan orders. The additions include order management functions both on the [frontend](wix-pricing-plans/) and the [backend](wix-pricing-plans-backend/), and more [backend events](wix-pricing-plans-backend/events).

The newly supported activities include:
* Creating and updating both [online](wix-pricing-plans-backend/checkout/createonlineorder) and [offline](wix-pricing-plans-backend/checkout/createofflineorder) orders
* [Purchasing orders](wix-pricing-plans/checkout/startonlinepurchase)
* [Canceling orders](wix-pricing-plans-backend/orders/cancelorder)
* [Getting](wix-pricing-plans-backend/orders/getorder) and [listing](wix-pricing-plans-backend/orders/listorders) orders
* [Postponing](wix-pricing-plans-backend/orders/postponeenddate), [pausing](wix-pricing-plans-backend/orders/pauseorder), and [resuming](wix-pricing-plans-backend/orders/resumeorder) orders
* [Marking offline orders as paid](wix-pricing-plans-backend/orders/markaspaid)

Please note the deprecation and migration instructions we added to the [Paid Plans](wix-paid-plans/) documentation. (August 28, 2022)

### New Article: Wix Data Error Codes

`wix-data`

The [Wix Data Error Codes](wix-data/error-codes) article lists all the error codes you might encounter while using the Wix Data API. The article explains what causes the errors and what you can do to resolve them. (July 27, 2022)

### New API: Lottie

`Wix Editor Elements ($w)`

With the new [Lottie API]($w/lottie), you can now [add a Lottie element to your site](https://support.wix.com/en/article/wix-editor-importing-lottie-animations-to-your-site) and customize it. You can [`play()`]($w/lottie/play), [`pause()`]($w/lottie/pause), and [`stop()`]($w/lottie/stop) your animation. You can also set the [`speed`]($w/lottie/speed) of your Lottie animation and whether it plays in a [`loop`]($w/lottie/loop).
(June 22, 2022)

### New API: Check whether a member is logged in

`wix-members`

You can now check whether the current site visitor is a logged-in member
by calling the new wix-members
[`loggedIn()`](wix-members/authentication/loggedin) function.
This allows you to quickly confirm a member is logged in
before calling another function that requires a logged-in member.
(June 21, 2022)

### New API: Refine search fields

`wix-search`

You can now use the [`searchFields()`](https://www.wix.com/velo/reference/wix-search/wixsearchbuilder/searchfields) function to refine a `WixSearchBuilder` to search only in specified collection fields. (May 30, 2022)

### New API: Retrieve package configuration data

`wix-configs-backend`

When building a [Velo package](https://support.wix.com/en/article/creating-a-velo-package-3964385) in Wix Blocks, you can use the [`getPackageConfig()`](https://www.wix.com/velo/reference/wix-configs-backend/getpackageconfig) function in your backend code to retrieve data from the package's `config.json` file. (April 14, 2022)

### New API: Date Picker onViewChange() 

`Wix Editor Elements ($w)`

You can now use the [`onViewChange()`](https://www.wix.com/velo/reference/$w/datepicker/onviewchange) function to add an event handler that triggers when the date picker's view changes. (April 10, 2022)

### New API: sendSetPasswordEmail() from the frontend

`wix-members`

You can now use the [`sendSetPasswordEmail()`](https://www.wix.com/velo/reference/wix-members/authentication/sendsetpasswordemail) function from the frontend code to send a site member an email with a link to set, or reset, their password. (April 1, 2022)

### New API: Button Icon

`Wix Editor Elements ($w)`

You can now [set/get](https://www.wix.com/velo/reference/$w/button/icon), [expand](https://www.wix.com/velo/reference/$w/button/expandicon), and [collapse](https://www.wix.com/velo/reference/$w/button/collapseicon) a button's icon in your code. The [`iconCollapsed`](https://www.wix.com/velo/reference/$w/button/iconcollapsed) property allows you to check if an icon is currently collapsed. (March 29, 2022)

### New Feature: Show/Hide number spinner on textInput elements

`Wix Editor Elements ($w)`

You can now show and hide the number spinner on a textInput element when the element is for numeric input.  

A new [numberSpinnerHidden](https://www.wix.com/velo/reference/$w/textinput/numberspinnerhidden) property has been added.  
2 new functions have been added:
+ [hideNumberSpinner()](https://www.wix.com/velo/reference/$w/textinput/hidenumberspinner)
+ [showNumberSpinner()](https://www.wix.com/velo/reference/$w/textinput/shownumberspinner)  

(March 23, 2022)

### New Event: Contact Merged

`wix-crm-backend`

You can now handle events when one or more source contacts are
[merged](wix-crm-backend/events/oncontactmerged) into a target contact.

A new `originatedFrom` property has also been introduced to the existing
[`onContactUpdated()`](wix-crm-backend/events/oncontactupdated) and
[`onContactDeleted()`](wix-crm-backend/events/oncontactdeleted) events.
When an update or delete event is triggered by a merge,
`metadata.originatedFrom` is sent as `"merge"`,
allowing you to ignore redundant events.
(February 3, 2022)

### New API: Delete files and folder from Media Manager

`wix-media-backend`

You can now use the Media Manager API to move [files](https://www.wix.com/velo/reference/wix-media-backend/mediamanager-obj/movefilestotrash) and [folders](https://www.wix.com/velo/reference/wix-media-backend/mediamanager-obj/movefolderstotrash) to the Media Manager's trash bin. (January 12, 2022)

<!-- ### New API: Pricing Plan Orders

`wix-pricing-plans`, `wix-pricing-plans-backend`

We added new APIs for order management of pricing plans. The additions include order management functions both on the [frontend](https://www.wix.com/velo/reference/wix-pricing-plans) and the [backend](https://www.wix.com/velo/reference/wix-pricing-plans-backend), and more [backend events](https://www.wix.com/velo/reference/wix-pricing-plans-backend/events).

The newly supported activities include:
* Creating and updating both [online](https://www.wix.com/velo/reference/wix-pricing-plans-backend/checkout/createonlineorder) and [offline](https://www.wix.com/velo/reference/wix-pricing-plans-backend/checkout/createofflineorder) orders
* [Purchasing orders](https://www.wix.com/velo/reference/wix-pricing-plans/checkout/startonlinepurchase)
* [Canceling orders](https://www.wix.com/velo/reference/wix-pricing-plans-backend/orders/cancelorder)
* [Getting](https://www.wix.com/velo/reference/wix-pricing-plans-backend/orders/getorder) and [listing](https://www.wix.com/velo/reference/wix-pricing-plans-backend/orders/listorders) orders
* [Postponing](https://www.wix.com/velo/reference/wix-pricing-plans-backend/orders/postponeenddate), [pausing](https://www.wix.com/velo/reference/wix-pricing-plans-backend/orders/pauseorder), and [resuming](https://www.wix.com/velo/reference/wix-pricing-plans-backend/orders/resumeorder) orders
* [Marking offline orders as paid](https://www.wix.com/velo/reference/wix-pricing-plans-backend/orders/markaspaid)

Please note the deprecation and migration instructions we added to the [Paid Plans](https://www.wix.com/velo/reference/wix-paid-plans) documentation. (January 12, 2022) -->


### New API: Date Picker API improvements

`Wix Editor Elements ($w)`

You can now use the Date Picker API to set date ranges. Use the [enabledDateRanges](https://www.wix.com/velo/reference/$w/datepicker/enableddateranges) property to set which dates a user can select. Use the [disabledDateRanges](https://www.wix.com/velo/reference/$w/datepicker/disableddateranges) property to set which dates users can't select. (January 12, 2022)

### New API: Set enabledTimes for Time Picker

`Wix Editor Elements ($w)`

You can now set the enabled times for a time slot using the [enabledTimes](wix.com/velo/reference/$w/timepicker/enabledtimes) property of the Time Picker API. (December 29, 2021)

### Update: Using forEachItem() with repeater data from a dataset

`Wix Editor Elements ($w)`

We noted that when using [`forEachItem()`](https://www.wix.com/velo/reference/$w/repeater/foreachitem) with repeater data populated by a dataset, you should call it within the dataset's `onReady()` function. (December 28, 2021)

### Update: Upload Button file types

`Wix Editor Elements ($w)`

The reference now lists the [file types](https://www.wix.com/velo/reference/$w/uploadbutton/filetype) supported by the Upload Button element. (December 20, 2021)


### New API: Generate download URLs with the Media Manager

`wix-media-backend`

The Media Manager API now includes 2 new backend functions, [downloadFiles](https://www.wix.com/velo/reference/wix-media-backend/mediamanager-obj/downloadfiles) and [downloadFolder](https://www.wix.com/velo/reference/wix-media-backend/mediamanager-obj/downloadfolder), that generate URLs for downloading Wix media. (December 20, 2021)

### Update: formFactor doesn't return Editor X breakpoint values

`wix-window`

The [`formFactor`](https://www.wix.com/velo/reference/wix-window/formfactor) property only returns the type of a site visitor's device. This doesn't correspond to the site's [Editor X breakpoint values](https://support.wix.com/en/article/editor-x-managing-breakpoints). (December 14, 2021)

### New API: Access the site from the frontend

`wix-site`

You can access a site's name in frontend code using the new [`getSiteDisplayName()`](https://www.wix.com/velo/reference/wix-site/getsitedisplayname) function. (December 9, 2021)

### New API: Direct navigation to the cart page

`wix-stores`

The [`navigate.toCart()`](https://www.wix.com/velo/reference/wix-stores/navigate/tocart) function directs a site visitor's browser directly to their cart page without needing to supply a URL path. (December 7, 2021)


### New API: Wix Groups

`wix-groups-backend`

Use the new [Groups API](https://www.wix.com/velo/reference/wix-groups-backend) to create and manage groups on your site. Here are some things you can do:
  * Create a group
  * Join a group
  * Add members to a group
  * Assign an admin role to a group member

(December 7, 2021)

### New API: Open Quick View with code

`wix-stores`

Use the [`product.openQuickView()`](https://www.wix.com/velo/reference/wix-stores/product/openquickview) function to open a product's Quick View modal from directly within your code. (November 30, 2021)

### Update: Wix Storage items accept numbers

`wix-storage`

The `value` parameter of the [`setItem()`](https://www.wix.com/velo/reference/wix-storage/storage/setitem) function accepts numbers as well as strings. (November 15, 2021)

### New API: Wix Members and Wix Members Backend

`wix-members` , `wix-members-backend`

The `wix-users` and `wix-users-backend` APIs have been deprecated. Most of their functionality has moved to the new [`wix-members`](https://www.wix.com/velo/reference/wix-members) and [`wix-members-backend`](https://www.wix.com/velo/reference/wix-members-backend) APIs. The `emailContact()` and `emailUser()` (now `emailMember()`) functions have moved to the respective `TriggeredEmails` APIs of [`wix-crm`](https://www.wix.com/velo/reference/wix-crm/triggeredemails-obj) and [`wix-crm-backend`](https://www.wix.com/velo/reference/wix-crm-backend/triggeredemails-obj). Functions that handle consent policy have moved to the [`ConsentPolicy`](https://www.wix.com/velo/reference/wix-window/consentpolicy) API in `wix-window`. 
Finally, `wix-members` and `wix-members-backend` have several new functions: 
* [`changeLoginEmail()`](https://www.wix.com/velo/reference/wix-members-backend/authentication-obj/changeloginemail) changes a site member's login email address. 
* [`sendSetPasswordEmail()`](https://www.wix.com/velo/reference/wix-members-backend/authentication-obj/sendsetpasswordemail) sends a site member an email with a link to set their password. 
* [`makeProfilePrivate()`](https://www.wix.com/velo/reference/wix-members/currentmember-obj/makeprofileprivate) removes a logged-in member from the site community and sets their profile to private.
* [`makeProfilePublic()`](https://www.wix.com/velo/reference/wix-members/currentmember-obj/makeprofilepublic) adds a logged-in member to the site community and sets their profile to public.
* [`onLogout()`](https://www.wix.com/velo/reference/wix-members/authentication-obj/onlogout) sets the function that runs when a member logs out.

(November 2, 2021)


### New API: Optional override parameter for onCustomValidation()

`Wix Editor Elements ($w)`

The [`onCustomValidation()`](https://www.wix.com/velo/reference/$w/validatablemixin/oncustomvalidation) function now has an `override` parameter which allows you write a series of custom element validations and set which ones will run. (October 28, 2021)

### Updated: Maximum size for collection items

`wix-data`

The maximum size for collection items when running [`insert()`](https://www.wix.com/velo/reference/wix-data/insert) or [`update()`](https://www.wix.com/velo/reference/wix-data/update) is 500 KB, not 200 KB. (October 17, 2021)


### Updated: getUser() may return undefined for memberName

`wix-users-backend`

When a user is registered with an email address but no name the object returned by [`getUser()`](https://www.wix.com/velo/reference/wix-users-backend/getuser) has a value of `undefined` for `memberName`. (October 13, 2021)

### New API: Product brand field

`wix-stores-backend`

The `Product` object in [`wix-stores-backend`](https://www.wix.com/velo/reference/wix-stores-backend) now accepts a value for `brand`. Including a brand name can help improve a site's (and product's) visibility in search results. (October 12, 2021)

### Updated: Dataset functions save draft data
`wix-dataset`

When using a read-write dataset, calling the following functions saves any changes made to linked input elements: [`setFilter()`](https://www.wix.com/velo/reference/wix-dataset/dataset/setfilter), [`setSort()`](https://www.wix.com/velo/reference/wix-dataset/dataset/setsort), [`nextPage()`](https://www.wix.com/velo/reference/wix-dataset/dataset/nextpage), [`previousPage()`](https://www.wix.com/velo/reference/wix-dataset/dataset/previouspage), [`loadPage()`](https://www.wix.com/velo/reference/wix-dataset/dataset/loadpage), [`setPageSize()`](https://www.wix.com/velo/reference/wix-dataset/dataset/setpagesize), [`setCurrentItemIndex()`](https://www.wix.com/velo/reference/wix-dataset/dataset/setcurrentitemindex), [`next()`](https://www.wix.com/velo/reference/wix-dataset/dataset/next), [`previous()`](https://www.wix.com/velo/reference/wix-dataset/dataset/previous), [`save()`](https://www.wix.com/velo/reference/wix-dataset/dataset/save) (October 6, 2021)

### Updated: Premium account required to use checkoutBooking()

`wix-bookings`

You need a premium account to [checkout bookings](https://www.wix.com/velo/reference/wix-bookings/checkoutbooking) of any type. (October 5, 2021)

### Updated: Using scrollTo() with header elements

`Wix Editor Elements ($w)`

You can only use [`scrollTo()`](https://www.wix.com/velo/reference/$w/header/scrollto) with Header Elements when the [Header Scroll Setting](https://support.wix.com/en/article/wix-editor-changing-the-header-scroll-settings) is set to **Scrolls with site**. To scroll to the header with other settings, use the `wix-window` [`scrollTo()`](https://www.wix.com/velo/reference/wix-window/scrollto) function. (October 5, 2021)


### Updated: Realtime channel naming requirements

`wix-realtime-backend`

Channel names in [Wix Realtime](https://www.wix.com/velo/reference/wix-realtime-backend/introduction) cannot include spaces or special characters. (October 5, 2021)


### Updated: Security best practices for createSecret(), updateSecret(), and listSecretInfo()

`wix-secrets-backend`

Make sure not to leave information about secrets in your code when running [`createSecret()`](https://www.wix.com/velo/reference/wix-secrets-backend/createsecret) or [`updateSecret()`](https://www.wix.com/velo/reference/wix-secrets-backend/updatesecret)! Do not expose functions that call [`listSecretInfo()`](https://www.wix.com/velo/reference/wix-secrets-backend/listsecretinfo) to frontend code without setting permissions to **Admin**! See the reference for more details. (October 3, 2021)


### Updated: WixHttpFunctionRequestBody is available as binary

`wix-http-functions`

The [`WixHttpFunctionRequestBody.buffer()`](https://www.wix.com/velo/reference/wix-http-functions/wixhttpfunctionrequest-obj/wixhttpfunctionrequestbody/buffer) function returns the body of the http request in binary as a Node.js Buffer object. (September 14, 2021)

### Updated: Wix Realtime functions support both synchronous and asynchronous calls

`wix-realtime-backend`

You can call the `WixRealtimeBackend` functions [`publish()`](https://www.wix.com/velo/reference/wix-realtime-backend/publish) and [`realtime_check_permission()`](https://www.wix.com/velo/reference/wix-realtime-backend/realtime_check_permission) as well the `PermissionsRouter` functions [`add()`](https://www.wix.com/velo/reference/wix-realtime-backend/permissionsrouter-obj/add) and [`check()`](https://www.wix.com/velo/reference/wix-realtime-backend/permissionsrouter-obj/check) either synchronously or asynchronously. (August 17, 2021)

### Updated: Coupon limits unsupported in Wix Bookings

`wix-marketing-backend`

You can't set the `limitPerCustomer` parameter when using coupons in Wix Bookings. (August 11, 2021)

### Updated: Working with promptLogin() and promptForgotPassword()

`wix-users`

Resolve promises returned when calling the [`promptLogin()`](https://www.wix.com/velo/reference/wix-users/promptlogin) and [`promptForgotPassword()`](https://www.wix.com/velo/reference/wix-users/promptforgotpassword) functions within the `onReady()` block using `.then()` and `.catch()`. If you `await` or `return` the results, the page will not load. (August 11, 2021)

### Updated: SuppressAuth for WixDataAggregate

`wix-data`

[`WixData.aggregate.run()`](https://www.wix.com/velo/reference/wix-data/wixdataaggregate/run) supports supressAuth functionality. (August 10, 2021)

### Updated: VideoBox src property is read & write

`$w.VideoBox`

You can both get and set the VideoBox [`src`](https://www.wix.com/velo/reference/$w/videobox/src) property. (August 10, 2021)

### New API: Wix Events Backend

`wix-events-backend`

The new [Wix Events Backend API](https://www.wix.com/velo/reference/wix-events-backend/wixevents) provides functionality for creating, updating, deleting, canceling, and querying Wix events. For example, you can create RSVP and ticketed events whose locations and/or dates are "To Be Announced" (TBA), you can customize registration messages, and you can configure settings for online conferencing. (July 20, 2021)

### Updated: Dataset new() function replaced by add() function

`wix-dataset`

The Dataset and Dynamic Dataset [`new()`](https://www.wix.com/velo/reference/wix-dataset/dataset/new) functions were replaced by the [`add()`](https://www.wix.com/velo/reference/wix-dataset/dataset/add) function. We replaced the function to avoid confusion with the JavaScript [new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) operator. Functionality of the `add()` and `new()` functions is identical.  (July 20, 2021)

### New API: Media Manager list files & folders

`wix-media-backend`

The [`listFiles()`](https://www.wix.com/velo/reference/wix-media-backend/mediamanager-obj/listfiles), [`listFolders()`](https://www.wix.com/velo/reference/wix-media-backend/mediamanager-obj/listfolders), and [`getFolderInfo()`](https://www.wix.com/velo/reference/wix-media-backend/mediamanager-obj/getfolderinfo) functions allow you to get information about specific files and folders in the Media Manager. (July 6, 2021)

### Updated: seoMarkup property is read & write

`$w.CustomElement`

You can both get and set the Custom Element [`seoMarkup`](https://www.wix.com/velo/reference/$w/customelement/seomarkup) property. (July 6, 2021)

### Updated: Use application/json for HTTP function response content-type in free sites

`wix-http-functions`

`text/html` is not supported for the `content-type` header in an [HTTP function response](https://www.wix.com/velo/reference/wix-http-functions/wixhttpfunctionresponse/headers). Use `application/json` instead. Premium sites support all content types. (July 6, 2021)

### Updated: listPlans() and listPublicPlans() return an array of objects

`wix-pricing-plans-backend`

The [`listPlans()`](https://www.wix.com/velo/reference/wix-pricing-plans-backend/listplans) and [`listPublicPlans()`](https://www.wix.com/velo/reference/wix-pricing-plans-backend/listpublicplans) functions return an array of objects. (July 6, 2021)

### Updated: Wix Location to() has a new option

`wix-location`

The [`disableScrollToTop`](https://www.wix.com/velo/reference/wix-location/to) option lets you decide if the page scrolls to the top when navigating to another Wix page. When true, the page remains at the same Y-axis position as the previously viewed page. (July 5, 2021)

### Added Velo Package Readmes

By popular requests we've added the [readme files](https://www.wix.com/velo/reference/velo-package-readmes/about-velo-packages) for [Velo Packages](https://support.wix.com/en/article/velo-about-packages) to the API Reference. This will allow you to keep the readme file open side by side with your code file.

### Updated: Clarified path and prefix

`wix-location`

We updated the [path](https://www.wix.com/corvid/reference/wix-location/path) graphics to show the correct path and included a statement that prefix is for dynamic pages only. (June 14, 2021)

### New API: Multi-file upload

`Wix Editor Elements ($w)`

You can now upload multiple image, video, and gallery (images and video) files at a time. This [function](https://www.wix.com/velo/reference/$w/uploadbutton/uploadfiles) replaces the now deprecated startUpload function. (June 14, 2021)


### Updated: Stores: Add "ribbon" field to product entity

`wix-stores-backend`

On the Product entity, the `ribbons` field, which took an array and was read-only, has been deprecated. The new field [`ribbon`](https://www.wix.com/velo/reference/wix-stores-backend/createproduct), which takes a string and is writable upon product creation, replaces it. (June 13, 2021)

### Updated: Fixed Bookings hasNext example

`wix-bookings`

We fixed the import statement in the examples. (June 10, 2021)

### Update: onBeforeSave returns a promise

`wix-data`

We fixed the description of [`onBeforeSave`](https://www.wix.com/velo/reference/wix-dataset/dataset/onbeforesave) to say it returns a promise that resolves to a boolean not a boolean. (June 6, 2021)

### New API: Manage Bookings resources and sessions

`wix-bookings-backend`

The bookings backend API now includes functionality to add, delete, manage, and query [resources](https://www.wix.com/velo/reference/wix-bookings-backend/resources) and [sessions](https://www.wix.com/velo/reference/wix-bookings-backend/sessions). (May 10, 2021)

### New APIs: Stores showMinicart and hideMinicart

`wix-stores`

With the new [`cart.showMiniCart()`](https://www.wix.com/velo/reference/wix-stores/cart/hideminicart) and [`cart.hideMiniCart()`](https://www.wix.com/velo/reference/wix-stores/cart/hideminicart) APIs you can easily show and hide the Mini Cart from appearing on the page. (May 10, 2021)

### New API: Stores updateLineItemQuantity

`wix-stores`
With the new [`cart.updateLineItemQuantity()`](https://www.wix.com/velo/reference/wix-stores/cart/updatelineitemquantity) function you can set the quantity of a certain line item of the store cart. (May 10, 2021)

### New API: Stores addProducts

`wix-stores`

With the new [`cart.addProducts()`](https://www.wix.com/velo/reference/wix-stores/cart/addproducts) function you can add one or more products to the store cart by passing the productId, the desired quantity, and if necessary, any specific product options. (May 10, 2021)

### Update: Stores: Migrate to wix-stores.cart/product

`wix-stores`

As part of a redesign of the Wix-Stores API, several new functions have been added and existing functions have been migrated to either the Cart or Product modules.

The API ref has been updated with migration instructions for users using the old functions.

Several new functions have been added as well: cart.addProducts(), cart.apply/removeCoupon(), cart.showMiniCart, cart.hideMiniCart(), and cart.updateLineItemQuantity().

Learn more:

* [https://www.wix.com/velo/reference/wix-stores/cart/introduction](https://www.wix.com/velo/reference/wix-stores/cart/introduction)

* [https://www.wix.com/velo/reference/wix-stores/product/introduction](https://www.wix.com/velo/reference/wix-stores/product/introduction)

(May 10, 2021)

### New API: Stores apply & remove coupon

`wix-stores`

With the new [`cart.applyCoupon()`](https://www.wix.com/velo/reference/wix-stores/cart/applycoupon) and [`cart.removeCoupon()`](https://www.wix.com/velo/reference/wix-stores/cart/applycoupon) functions you can add a coupon to the store cart by passing the coupon code, or remove a previously applied coupon. (May 10, 2021)

### Updated: Removed tip to use onInput with richTextBox

`Wix Editor Elements ($w)`

onInput is not supported for richTextBox. We removed a [tip](https://www.wix.com/velo/reference/$w/richtextbox/onkeypress) to use onInput to get the value of the latest keyboard event for a richTextBox. (May 5, 2021)

### Updated: Effect options for show and hide are optional

`Wix Editor Elements ($w)`

We updated the [show and hide functions](https://www.wix.com/velo/reference/$w/hiddenmixin) to indicate that the effectOptions are optional. (May 5, 2021)

### Updated: afterUpdate supports the currentItem property

`wix-data`

We added back information that the [`afterUpdate`](https://www.wix.com/velo/reference/wix-data/hooks/afterupdate) hook supports the currentItem property in the updateHookContext parameter. (May 5, 2021)

### Updated: isReferenced supports the wixDataOptions parameter

`wix-data`

We added information that [`isReferenced`](https://www.wix.com/velo/reference/wix-data/isreferenced) supports the wixDataOptions parameter, which enables suppressAuth and suppressHooks. (May 5, 2021)

### Updated: queryReferenced options parameter is listed as optional

`wix-data`

The options parameter of [`queryReferenced()`](https://www.wix.com/velo/reference/wix-data/queryreferenced) was mistakenly listed as required. We fixed it to be optional. (May 5, 2021)

### Updated: New env property added to WixRouterRequest object

`wix-router`

We added a new [`env`](https://www.wix.com/velo/reference/wix-router/wixrouterrequest/env) property to WixRouterRequest.

When possible, the rendering process is split in two, to improve performance. The first cycle in the process is initiated from backend rendering, and the second cycle is initiated from client-side rendering. You can use the env property to check whether the current rendering cycle is occurring on the backend or the client side. (May 5, 2021)

### Updated: Size property of File object for UploadButton is Number

`Wix Editor Elements ($w)`

We changed the type of the size property of the object that is returned by the [`value`](https://www.wix.com/velo/reference/w/uploadbutton/value) property from string to number. (May 5, 2021)

### Updated: Pricing Plans setPlanVisibility returns a complete pricing plan

`wix-pricing-plans-backend`

The [`setPlanVisibility`](https://www.wix.com/velo/reference/wix-pricing-plans-backend/setplanvisibility) function now returns a complete pricing plan object when its visibility is set. (May 5, 2021)

### New API: warmupData

`wix-window`

With the new [`warmupData`](https://www.wix.com/velo/reference/wix-window/warmupdata) API, you can optimize data loading for sites that render both in the backend code and in the client-side code, allowing costly data fetching operations to be done only once. (April 13, 2021)

### Updated: insertReference() only works with multi-reference fields

`wix-data`

We added a note that [`insertReference()`](https://www.wix.com/velo/reference/wix-data/insertreference) only works with multi-reference fields. (April 13, 2021)

### Update: 512 KB limit for http functions

`wix-http-functions`

We added note that [http function requests](https://www.wix.com/velo/reference/wix-http-functions/wixhttpfunctionrequest-obj/body) have a request payload limit of 512 KB. (April 12, 2021)

### New API: Login as a popup option

`wix-users`

With the new [modal option](https://www.wix.com/velo/reference/wix-users/promptlogin) for the wix-users [`promptLogin()`](https://www.wix.com/velo/reference/wix-users/promptlogin) function, you can let visitors log in using a modal popup. (April 12, 2021)

### New API: CRM Contacts

`wix-crm-backend`

We released new [CRM Contacts APIs](https://www.wix.com/velo/reference/wix-crm-backend) allowing you to:

- Create, update, get, query, and delete contacts
- Label/unlabel contacts
- Manage labels
- Manage custom fields

This replaces most of the existing Contacts functions, and those functions have been updated with migration instructions. Existing functions are supported so you don't need to migrate immediately. (April 12,2021)

### Updated: Added the suppressAuth option to createInvoicePreviewUrl()

`wix-billing-backend`

We added suppressAuth options to [`createInvoicePreviewUrl()`](https://www.wix.com/velo/reference/wix-billing-backend/invoices-obj/createinvoicepreviewurl) to allow customers to generate the invoice preview link. (April 12, 2021)

### Updated: Added note that setFilter() on a read-write dataset saves changes in the input field

`wix-dataset`

When you call [`setFilter()`](https://www.wix.com/velo/reference/wix-dataset/dataset/setfilter) on a dataset with a connected input field, any changes made in the input field are also saved. (April 11, 2021)

### Update: Remove read-only fields from updateUserFields parameters

`wix-users-backend`

We removed the read-only fields from the list of parameters for [`updateUserFields()`](https://www.wix.com/velo/reference/wix-users-backend/updateuserfields). (April 11, 2021)

### New Wix Stores Variants Collection in the Content Manager and Velo Databases

`wix-stores`

Alongside Orders, Products, and other Stores collections, Variants are now available for access and query using Velo and the Content Manager.

Variants are combinations of product options, and until now they were only accessible per product. The new Variants collection includes all of a store's variants.

Learn more about the new [Wix Stores Variants Collection](https://support.wix.com/en/article/velo-wix-stores-variants-collection-fields). (April 1, 2021)

### Updated: Added updatedItemsIds to WixDataBulkResult

We added the `updatedItemIds` property to the `WixDataBulkResult` object,  which is returned by the [`bulkInsert()`](https://www.wix.com/velo/reference/wix-data/bulkinsert), [`bulkSave()`](https://www.wix.com/velo/reference/wix-data/bulksave), and [`bulkUpdate()`](https://www.wix.com/velo/reference/wix-data/bulkupdate) functions. (March 15, 2021)

### Updated: Added information when getItem() returns null

We added information that if an item doesn't exist, [`getItem()`](https://www.wix.com/velo/reference/wix-storage/storage/getitem) returns null. (March 15, 2021)

### New API: onAudioTranscoded

`wix-media-backend`

In addition to video files, audio files that are imported or uploaded to the Media Manager require transcoding, and are not immediately available until the transcoding has completed.

Similar to the onVideoTranscoded() API, the new [`onAudioTranscoded`](https://www.wix.com/velo/reference/wix-media-backend/events/onaudiotranscoded) API event handler runs when an uploaded audio file has finished transcoding. (March 10, 2021)

### New API Reference Feature: Show Members open by default
The table that lists the properties in a returned object used to be closed by default and would require you to click **Show Members** to view it. The expandable is now open by default. You can see an example in the **Returns** table for [`createProduct`](https://www.wix.com/velo/reference/wix-stores-backend/createproduct). (March 7, 2021)

### New Release Notes information 

We will now label the latest updates in the Release Notes with &nbsp; <svg viewBox="0 0 6 6" fill="currentColor" width="6" height="10" data-hook="changelog-pimple" class="_28uM4"><circle cx="3" cy="12" r="3" transform="translate(0 -9)" fill="#EA5F0E" fill-rule="evenodd"></circle></svg> &nbsp; in the heading to make it easier to find the latest changes. (March 7, 2021)

### Remove mention of currentItem from the context of some data hooks

`wix-data`

The `context.currentItem` parameter is only relevant for `beforeUpdate()` and `beforeRemove()` hooks. The property was removed from the documentation for all other hooks. (March 4, 2021)

### New API: Bookings Events

`wix-bookings-backend`

[Backend events](https://www.wix.com/velo/reference/wix-bookings-backend/events) have been added to Wix Bookings.
The events  are fired for the following actions:

* A new booking request is created.
* A booking request is confirmed or declined.
* A booking is canceled.
* A booking  schedule is updated.
* Booking attendance information is updated.

(March 2, 2021)

### Clarified opacity and hidden for timeline

`wix-animations`

* Updated the target parameter type to `Element` from `mixin`.  
* Clarified that only elements that mix in the `hiddenMixin` can be the target.
* Clarified that the unit for opacity is from 0.0 - 1.0.

(March 2, 2021)

### New API: Price per unit data fields added to product object

`wix-stores-backend`

Price Per Unit data fields were added to APIs returning product objects and product variant objects. These APIs mirror the Dashboard feature that allows you to display a product's base and total quantity/weight/area. Complies with requirements in the German market. (February 22, 2021)

### New API: Pricing Plans: Plan management

`wix-pricing-plans-backend`

With the new [pricing-plans-backend](https://www.wix.com/velo/reference/wix-pricing-plans-backend) APIs, you can manage your APIs in ways that before, you could only do from the Dashboard.

Now you can create, update, hide, and archive pricing plans. You can set and clear which pricing plan is the primary plan and rearrange the order in which plans are displayed on the site. And we now supply different ways for you to get information about existing plans, such as getting a single plan, getting statistics for a plan, listing public/all plans, and performing queries. (February 7, 2021)

### New API Reference Feature: Release Notes change indicator

A red dot now appears next to the **Release Notes** section in the left tree when it is updated. More enhancements on the way. (February 3, 2021)

### Updated: getSecret does not require Members Area

`wix-secret-backend`

We removed a note that said you need the Members Area on your site to work with the [`getSecret()`](https://www.wix.com/velo/reference/wix-secrets-backend/getsecret) API. (February 3, 2021)

### Updated: Slot Id parameter fixed

`wix-bookings`

We changed `slot_id` to `slotId` in [`getCheckoutOptions()`](https://www.wix.com/velo/reference/wix-bookings/getcheckoutoptions). (February 3, 2021)

### Updated: getCurrentMemberOrders returns a promise

`wix-paid-plans`

[`getCurrentMemberOrders()`](https://www.wix.com/velo/reference/wix-paid-plans/getcurrentmemberorders) returns a promise that resolves to an array. We previously stated that the function returns an array.  (February 3, 2021)

### Updated: cancelOrder throws an error

`wix-paid-plans`

We clarified that [`cancelOrder`](https://www.wix.com/velo/reference/wix-paid-plans/cancelorder) throws an error when **[Allow Plan Cancellation](https://support.wix.com/en/article/pricing-plans-allowing-clients-to-cancel-plans)** is set to False in the Dashboard. (February 3, 2021)

### Updated: Recommend using getCurrentGeolocation with setTimeout 

`wix-window`

In cases where the site visitor's browser is set to not detect locale, the promise does not resolve or reject. We added a note recommending using [`getCurrentGeoLocation()`](https://www.wix.com/velo/reference/wix-window/getcurrentgeolocation) with `setTimeout` to handle the unresolved Promise. (February 3, 2021)

### Updated: Hooks run when data is imported

`wix-data`

We added a note that the [`beforeInsert`](https://www.wix.com/velo/reference/wix-data/hooks/beforeinsert) and [`afterInsert`](https://www.wix.com/velo/reference/wix-data/hooks/afterinsert) hooks run when data is imported to either Live or Sandbox collections. (February 3, 2021)

### Updated: queryReferenced() only works with multiple-item reference fields

`wix-data`

We added a note that you can only use the [`queryReferenced()`](https://www.wix.com/velo/reference/wix-data/queryreferenced) function with multiple-item reference fields and not with single-item (regular) reference fields. (February 3, 2021)

### Updated: Use the checked property with the Switch element

`Wix Editor Elements ($w)`

The `value` property does not work with the [`Switch`](https://www.wix.com/velo/reference/w/switch) element. We added a note to use the `checked` property instead. We also added an example for using the `checked` property to set the `Switch` state. (February 3, 2021)

### Updated: RichTextBox does not support KeyboardEvent and onInput

`Wix Editor Elements ($w)`

`KeyboardEvent` doesn’t fire and `onInput` is not supported for [`RichTextBox`](https://www.wix.com/velo/reference/w/richtextbox) elements. We removed a reference to the `RichTextBox` element from the `KeyboardEvent` documentation and added a note to `onInput` that it is not supported for `RichTextBox` elements. (February 3, 2021)

### Updated: SelectionTags options property changes

`Wix Editor Elements ($w)`

Setting the [`options`](https://www.wix.com/velo/reference/$w/selectiontags/options) property no longer clears the `value` and `selectedIndices` of the selection tags. This allows users to add and reorder choices without clearing the visitor's selection. Only values that no longer match the new options are cleared.

Setting `value` no longer lets you set values that do not match any of the options. (February 3, 2021)

### Updated: formattedPrice and formattedDiscountedPrice are read-only

`wix-stores-backend`

We removed a reference to `formattedPrice` and `formattedDiscountedPrice` fields for [`updateVariantData()`](https://www.wix.com/velo/reference/wix-stores-backend/updatevariantdata) since they are read-only and can't be set. (February 3, 2021)

### Updated: SSL note in wixWindow.openModal() 

`wix-window`

It is not possible to turn SSL off with Velo. We removed a part of the note that was misleading. (January 20, 2021)

### New API: Coupons events

`wix-marketing-backend`

With the new [Coupon backend events](https://www.wix.com/velo/reference/wix-marketing-backend/events) you can write code that is triggered when a coupon is created, updated, deleted, or applied. (January 19, 2021)

### New API: Added appID to Coupons API

`wix-marketing-backend`

Added the `appID` property to the CouponEvent object. The ID of the app that created the coupon. Empty if created by the site owner. (January 19, 2021)

### Updated: update

erInfo deletes any non-updated properties

`wix-bookings-backend`

Updated an example and added a note that [`updateCustomerInfo`](https://www.wix.com/velo/reference/wix-bookings-backend/bookings/updatecustomerinfo) updates the entire object and that any properties not included in the object passed will be deleted. (January 14, 2021)

### New API: Cancel & Refund events

`wix-stores-backend`

With the new [`onOrderRefunded()`](https://www.wix.com/velo/reference/wix-stores-backend/events/onorderrefunded) & [`onOrderCanceled()`](https://www.wix.com/velo/reference/wix-stores-backend/events/onorderrefunded) backend events you can now write code that is triggered when an order is refunded and/or canceled. (January 14, 2021)

### New API: Bookings backend

`wix-bookings-backend`

Backend APIs are now available to manage Bookings. The [`wix-bookings-backend`](https://www.wix.com/velo/reference/wix-bookings-backend) API provides bookings functionality allowing you to:

- List and query booking information.
- Confirm pending booking requests.
- Decline pending booking requests.
- Cancel a booking.
- Set attendance for booked sessions.
- Mark a booking as paid.
- Update the customer's booking information.

(January 12, 2021)

### New API: Increment inventory

`wix-stores-backend`

With the new Wix Stores [`incrementInventory()`](https://www.wix.com/velo/reference/wix-stores-backend/incrementinventory) API you can increment a product variant's stock in the store's inventory. Pass a variantId and either a productID or an inventoryId, as well as the integer to increment by. (December 31, 2020)

### Updated: Added multiple locations to ServiceAvailability object

`wix-bookings`

The `ServiceAvailability` object returned by [`getServiceAvailability`](https://www.wix.com/velo/reference/wix-bookings/getserviceavailability) now includes a location property. If the service is offered in multiple locations, a slot is returned for each location. (December 30, 2020)

### Updated: Upload button now indicates if a file fails to upload

`Wix Editor Elements ($w)`

The `valid` property of [`UploadButton`](https://www.wix.com/velo/reference/$w/uploadbutton) is set to `false` when a file fails to upload. Previously this was only set if `required == TRUE`. (December 27, 2020)

### Updated: openLightbox requires onReady

`wix-window`

Even though [`openLightbox`](https://www.wix.com/velo/reference/wix-window/openlightbox) is not part of `$w` it can only be called after the `onReady` event has fired. (December 27, 2020)

### Updated: Wix Data is eventually consistent

`wix-data`

The wix-data API is [eventually consistent](https://www.wix.com/velo/reference/wix-data/introduction#wix-data_introduction_wix-data-and-eventual-consistency), meaning that sometimes updates to your database collection are not immediate. There may be a short delay until the system is up-to-date with your recent changes. During the delay, the data you get back may not reflect those changes. (December 27, 2020)

### API Updated: Added seoData field to the Product object

We added the `seoData` field to the Product object. This mirrors the SEO data added in the dashboard and allows for adding custom SEO tags when using [`createProduct()`](https://www.wix.com/velo/reference/wix-stores-backend/createproduct). (December 27, 2020)

### Updated: Editor elements ($w) progressBar.value is a get or set

`Wix Editor Elements ($w)`

We incorrectly stated that you could only “get” the `value` of the [`ProgressBar`](https://www.wix.com/velo/reference/$w/progressbar/value) element. We clarified that you can both “get” and “set” the `value` property. (December 24, 2020)

### Updated: bulkUpdate clarification

`wix-data`

We were a bit vague about how [`bulkUpdate`](https://www.wix.com/velo/reference/wix-data/bulkupdate) works. We now stress in the explanation that `bulkUpdate` replaces all properties of the existing, matching items. When specifying which properties you want to update, the values of any properties that are not specified are lost. (December 24, 2020)

### New API: privacyStatus property for register function in wix-users and wix-users-backend

`wix-users`

`wix-users-backend`

There is a new privacyStatus parameter for the [`register`](https://www.wix.com/velo/reference/wix-users/register) function. Options are `PUBLIC` and `PRIVATE`. (December 24, 2020)

### Updated: Clarified creation of routers.js file

`wix-router`

The [introduction](https://www.wix.com/velo/reference/wix-router/introduction) implied that the user needs to create the `routers.js` file. Actually, when you set up your router, the file is created for you. We clarified that you do not need to manually create the `routers.js` file.

We also reviewed the existing explanations and made some updates, including: 

- How to work with routers, based on changes made in the Editor. 
- How we explain the URL needed for [WixRouterRequest](https://www.wix.com/velo/reference/wix-router/wixrouterrequest/introduction). 
- Adding and fixing links.
- Fixing a typo in an example.

(December 24, 2020)

### New API: wix-users-backend Roles

`wix-users-backend`

We added the [`assignRole()`](https://www.wix.com/velo/reference/wix-users-backend/roles-obj/assignrole) and [`removeRole()`](https://www.wix.com/velo/reference/wix-users-backend/roles-obj/removerole) functions to the new `Roles` API in `wix-users-backend`, allowing you to manage site member access to restricted pages. (December 24, 2020)

### New API: VideoBox

`Wix Editor Elements ($w)`

Velo's APIs are now available to control how videos play in [`VideoBox`](https://www.wix.com/velo/reference/$w/videobox) elements on your site. Video boxes allow you to showcase your videos in beautifully-designed video containers. Unlike VideoPlayer elements, VideoBox elements do not have controls, text descriptions, titles and cannot be displayed in full screen mode. This gives video boxes a clean look.
You can use the APIs to manage video boxes for: 

- Videos uploaded to your site
- Transparent videos uploaded to your site
- Videos/Transparent videos from the  Wix Media library

(December 7, 2020)

### Updated: textInput.maxLength remove max length

`Wix Editor Elements ($w)`

The instructions to remove the [`maximum length`](https://www.wix.com/velo/reference/$w/textinput/maxlength) restriction incorrectly stated to set maxLength to 0. We clarified that you can format the text using the html property. (December 7, 2020)

### Updated: text styles

We listed the supported styles and formats for [`text type elements`](https://www.wix.com/velo/reference/$w/text/introduction) but did not explain how to use them. We clarified that you can format the text using the html property. (December 7, 2020)

### Updated: uploadButton.reset 

`Wix Editor Elements ($w)`

We clarified that the [`reset()`](https://www.wix.com/velo/reference/$w/uploadbutton/reset) function clears the files in the value property. (December 7, 2020)

### Updated: radioButtonGroup options 

`Wix Editor Elements ($w)`

The description incorrectly stated that [`options`](https://www.wix.com/velo/reference/$w/radiobuttongroup/options) is an object. We clarified that options is an array of option objects. (December 7, 2020)

### Updated: getCheckoutOptions slotID

`wix-bookings`

In the [`getCheckoutOptions`](https://www.wix.com/velo/reference/wix-bookings/getcheckoutoptions) parameter table, slot_ID was formatted incorrectly. The correct format is slotID. (December 7, 2020)

### Updated: wixWindow.scrollTo coordinates

`wix-window`

In the [`scrollTo`](https://www.wix.com/velo/reference/wix-window/scrollto) function we didn’t mention how to get the coordinates of a given location. We added how to get the coordinates of a location on the page using the Editor toolbar. (December 7, 2020)

### Updated: wixLocation URL structure

`wix-location`

The layout for describing the different parts of the [`URL`](https://www.wix.com/velo/reference/wix-location/introduction) was a bit confusing. We changed the URL breakdown to match the same layout as the wixHttpFunctionRequest object in the wix-http-functions API for consistency. (December 7, 2020)

### New API: Wix Forum Backend Event APIs

`wix-forum-backend`

With the new [Forum Backend Events](https://www.wix.com/velo/reference/wix-forum-backend) you can react to activity on your forum. You can run custom code when forum categories, posts, and comments are created, updated, deleted, posted, pinned, voted on, liked, reported, and more. For example, you can send a custom email to a poster when their post is liked, display a message when a comment is marked as best, or set up an alert when a post or comment is reported. (November 1, 2020)

### New API: removeProductFromCart

`wix-stores`

With [`removeProductFromCart()`](https://www.wix.com/velo/reference/wix-stores/removeproductfromcart) you can remove a line item/product from the cart. (November 1, 2020)

### New API: onWixFormSubmit() event handler in the WixForms API

`wix-crm`

With the new [`onWixFormSubmit()`](https://www.wix.com/velo/reference/wix-crm/$w-wixforms/onwixformsubmit) event handler in the WixForms API, you can perform validations on your forms immediately after visitors submit the form yet before the server starts any processing. (October 20, 2020)

### Updated: wixLocation.to() does not work in preview

`wix-location`

Added a note that [`wixLocation.to()`](https://www.wix.com/velo/reference/wix-location/to) only works on a published site and not while previewing. (October 13, 2020)

### Updated: htmlComponent can only embed a PDF file with a Premium account

`$w.HtmlComponent`

To embed a PDF in an [HtmlComponent](https://www.wix.com/velo/reference/$w/htmlcomponent/introduction) you must upgrade your site to a Premium Plan. (October 13, 2020)

### New API: Decrement inventory

`wix-stores-backend`

Manually [decrement](https://www.wix.com/velo/reference/wix-stores-backend/decrementinventory) a product variant's stock in inventory. This functionality is helpful for creating an inventory management page on your site. (October 11, 2020)

### Updated: Added Stackdriver information to Site Monitoring introduction

`site-monitoring`

Added [information](https://www.wix.com/velo/reference/spis/site-monitoring/introduction) about connecting Wix site events to Google's Stackdriver external monitoring tool. (September 16, 2020)

### Updated: Changed slider.value from read only to read & write

`$w.slider` 

The [`value`](https://www.wix.com/velo/reference/$w/slider/value) property for the Slider element was described as read only but it should be read and write. (September 15, 2020)

### Updated: Added more information for returned object properties from Validity property

`ValidatableMixin`

Added more content to the table that displays details of the object returned by [`validity`](https://www.wix.com/velo/reference/$w/validatablemixin/validity). (September 15, 2020)

### Updated: Added information that some getProductVariants() parameter fields are optional

`wix-stores`

Added information that some of the parameter fields for [getProductVariants()](https://www.wix.com/velo/reference/wix-stores/getproductvariants) are optional. (September 14, 2020)

### Updated: createProduct() SKU is a string

`stores-backend`

The `sku` property for [createProduct()](https://www.wix.com/velo/reference/wix-stores-backend/createproduct) was described as a number, but it is a string. (September 14, 2020)

### Updated: Added information about getFileURL token expiring

`wix-media-backend`

Added information that the token returned by [`getFileUrl()`](https://www.wix.com/velo/reference/wix-media-backend/mediamanager-obj/getfileurl) expires after 600 minutes. Described the alternative of creating a static URL without a token. (September 10, 2020)

### Updated: The URL table for wixHttpFunctionRequest

`wix-http-functions`

The table that described the URL structure of a [wixHttpFunctionRequest](https://www.wix.com/velo/reference/wix-http-functions/wixhttpfunctionrequest) was difficult to parse. We've updated the content to make it easier to understand. (September 10, 2020)

### New API: On cart changed event

`wix-stores`

With the new [`onCartChanged()`](https://www.wix.com/velo/reference/wix-stores/oncartchanged) client-side event in wix-stores, you can access information about the site's shopping cart every time an item is added or removed. Useful for creating a promotional lightbox - if product X is added to the cart, offer product Y. (September 7, 2020)

### New API: Consent policy (privacy laws)

`wix-users`

To help your site conform to GDPR and CCPA standards, we now provide Velo APIs for [checking](https://www.wix.com/velo/reference/wix-users/getcurrentconsentpolicy) and [setting](https://www.wix.com/velo/reference/wix-users/setconsentpolicy) visitors' current consent policies. These policies include which cookies the visitor allows and if the visitor allows data transfer to third parties. (September 7, 2020)

### Updated: Added examples to listMemberBadges()

`wix-users-backend`

Added more robust examples to [`listMemberBadges()`](https://www.wix.com/velo/reference/wix-users-backend/badges-obj/listmemberbadges) for how to handle the results. (August 30, 2020)

### New API: Coupon limit per customer

`wix-marketing-backend`

Use the new [limitPerCustomer](https://www.wix.com/velo/reference/wix-marketing-backend/coupons-obj/createcoupon) property that allows for limiting coupon use per customer. Helpful if you'd like to create a coupon to be used only once, or any number of times per customer. (August 23, 2020)

### New API: Custom fulfiller email 

`wix-stores-backend`

Use the new [`sendFulfillmentEmail()`](https://www.wix.com/velo/reference/wix-stores-backend/sendfulfillmentemail) function to send an email containing fulfillment details (products to ship, shipping details, etc.) to a custom fulfiller (a fulfiller not integrated with Wix, like ShipBob or ShipStation). (August 20, 2020)

### New API: Order paid event 

`wix-stores-backend`

Added a new [event](https://www.wix.com/velo/reference/wix-stores-backend/events/onorderpaid) that fires when an order is marked as paid. (August 20, 2020)

### Updated: New array and object data types

`wix-data`

Added information about new array and object types to the [wix-data Introduction](https://www.wix.com/velo/reference/wix-data/introduction). (August 12, 2020)

### New API: Print packing slip

`wix-stores-backend`

Use the new [`getPackingSlipLink()`](https://www.wix.com/velo/reference/wix-stores-backend/getpackingsliplink) function to generate and print a PDF file of an order's packing slip. Especially useful in the ThankYouPage, after an order is completed. (August 11, 2020)

### Updated: New validations for file upload

`wix-media-backend`

The [Upload](https://www.wix.com/velo/reference/wix-media-backend/mediamanager-obj/upload) button can now perform certain validations right after file selection. (August 9, 2020)

### Updated: Mark createContact() parameters as optional

`wix-crm`

Changed the `contactInfo` parameters for [`createContact()`](https://www.wix.com/velo/reference/wix-crm/createcontact) to be optional. (August 9, 2020)

### New API: Print orders

`wix-stores-backend`

Use the new [`getOrdersLink()`](https://www.wix.com/velo/reference/wix-stores-backend/getorderslink) function to generate a PDF file containing information about one of more of your store's orders. (August 6, 2020)

### Updated: New example for onItemReady()

`$w.repeater`

Added a simple [`onItemReady()`](https://www.wix.com/velo/reference/$w/repeater/onitemready) example where `onItemReady()` is triggered when repeater data is set. (August 3, 2020)

### Updated: New example for WixDataQuery.include()

`wix-data`

Added new example in [`WixData.query.include()`](https://www.wix.com/velo/reference/wix-data/wixdataquery/include) to show how to use a reference field from another collection when populating a table with DataPath. (August 3, 2020)

### Updated: Router examples should use https for imageSite links

`wix-router`

The **A router with static data** example for the [`router()`](https://www.wix.com/velo/reference/wix-router/router) function used http URLs in the example for imageSite. They were updated to use https. (August 3, 2020)

### Updated: Secrets API

`wix-secrets-backend`

With the new [Secrets API functions](https://www.wix.com/velo/reference/wix-secrets-backend) you can manage your site secrets with code. Create, update, and delete secrets in the Secrets Manager programmatically without opening the UI. List all your site secrets to find the one you need. (August 2, 2020)

### New API: Fulfillment

`wix-stores-backend`

Use the [`createFulfillment()`](https://www.wix.com/velo/reference/wix-stores-backend/createfulfillment) function to create, update, and delete order fulfillments (as well as set up events for each). (July 30, 2020)

### New API: Create order

`wix-stores-backend`

Use the [`createOrder()`](https://www.wix.com/velo/reference/wix-stores-backend/createorder) function to have more control over various order properties, allowing for more custom order flows. (July 30, 2020)

### New API: Form Builder

`wix-crm` `wix-crm-backend`

With the new Wix Forms APIs,  you can access Wix Form app functionality with code. You can customize how site visitors work with the Wix Form, while taking advantage of the Wix Forms app's ease of design, automatic creation of submission collections, payment receipt, automatic setup of email notifications, and more. You can perform actions both on the [client side](https://www.wix.com/velo/reference/wix-crm/$w-wixforms) and in the [backend](https://www.wix.com/velo/reference/wix-crm-backend/events/onformsubmit). (July 28, 2020)

### Updated: Badges

`wix-users-backend`

With the new [Badges APIs](https://www.wix.com/velo/reference/wix-users-backend/badges)  you can manage your member badges with code. Create, update, and delete badges, assign and remove badges from members, and see which members are associated with each badge. (July 9, 2020)

### Updated: Add information about import and export triggering before and after query hooks 

`wix-data`

Added information that [before](https://www.wix.com/velo/reference/wix-data/hooks/beforequery) and [after](https://www.wix.com/velo/reference/wix-data/hooks/afterquery) query hooks are triggered when items are exported from a collection. (July 9, 2020)
