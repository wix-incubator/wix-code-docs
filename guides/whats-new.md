# What's New

We're always at work adding and updating the Corvid APIs and we want you to have one place where you can see all the latest changes and check out our latest coolness. 

## 🗓️ Sept 15, 2020
### Bug: Change Slider > value from read only to read & write

The value property for the Slider element was described as read only but it should have been read and write.

## 🗓️ Sept 10, 2020
### Update: Add information about getFileURL token expiring

Added information that the token returned by [getFileUrl()](https://www.wix.com/corvid/reference/wix-media-backend/mediamanager-obj/getfileurl) expires after 600 minutes. Describe the alternative of creating a static URL without a token.

## 🗓️ Sept 10, 2020
### Fix: The URL table for wixHttpFunctionRequest

The table that described the URL structure of a [wixHttpFunctionRequest](https://www.wix.com/corvid/reference/wix-http-functions/wixhttpfunctionrequest) was difficult to parse. We've updated the content to make it easier to understand.

## 🗓️ Aug 20, 2020
### New API: Custom Fulfiller Email

Use the new [sendFulfillmentEmail](https://www.wix.com/corvid/reference/wix-stores-backend/sendfulfillmentemail) function to send an email containing fulfillment details (products to ship, shipping details, etc.) to a custom fulfiller (a fulfiller not integrated with Wix, like ShipBob or ShipStation). 

## 🗓️ Aug 11, 2020
### New API: Print Packing Slip

Use the new [getPackingSlipLink](https://www.wix.com/corvid/reference/wix-stores-backend/getpackingsliplink) function to generate and print a PDF file of an order's packing slip. Especially useful in the ThankYouPage, after an order is completed.