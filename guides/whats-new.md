# What's New

We're always adding and updating the Corvid APIs, and we want you to have one place to find all of our latest changes and cool additions.

## 🗓️ October 13, 2020
### Update: Add information that wix-location > to does not work in Preview

[wixLocation.to](https://www.wix.com/corvid/reference/wix-location/to): Added a note that the `to` function only works on a published site and not while previewing.

## 🗓️ September 15, 2020
### Bug: Change Slider > value from read only to read & write

`$.slider` 

The [value](https://www.wix.com/corvid/reference/$w/slider/value) property for the Slider element was described as read only but it should have been read and write.

## 🗓️ September 10, 2020
### Update: Add information about getFileURL token expiring

`wix-media-backend`

Added information that the token returned by [getFileUrl()](https://www.wix.com/corvid/reference/wix-media-backend/mediamanager-obj/getfileurl) expires after 600 minutes. Describe the alternative of creating a static URL without a token.

## 🗓️ September 10, 2020
### Fix: The URL table for wixHttpFunctionRequest

`wix-http-functions`

The table that described the URL structure of a [wixHttpFunctionRequest](https://www.wix.com/corvid/reference/wix-http-functions/wixhttpfunctionrequest) was difficult to parse. We've updated the content to make it easier to understand. 

## 🗓️ August 20, 2020
### New API: Custom Fulfiller Email 

`wix-stores-backend`

Use the new [sendFulfillmentEmail](https://www.wix.com/corvid/reference/wix-stores-backend/sendfulfillmentemail) function to send an email containing fulfillment details (products to ship, shipping details, etc.) to a custom fulfiller (a fulfiller not integrated with Wix, like ShipBob or ShipStation). 

## 🗓️ August 11, 2020
### New API: Print Packing Slip

`wix-stores-backend`

Use the new [getPackingSlipLink](https://www.wix.com/corvid/reference/wix-stores-backend/getpackingsliplink) function to generate and print a PDF file of an order's packing slip. Especially useful in the ThankYouPage, after an order is completed.