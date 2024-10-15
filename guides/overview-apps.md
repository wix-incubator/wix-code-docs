# About Apps Made by Wix

Wix offers a range of powerful business solutions that extend the functionalities of its existing products or add new capabilities. Apps made by Wix are web apps created by Wix that site owners can use to enhance their sites. A site owner can install one or more apps made by Wix to manage specific data on their site. 

You may want to access site data that is managed by an app made by Wix. When making function calls to access Wix site data, some function calls require a reference to the specific app made by Wix. For example, to add a comment with the [`createComment()`](https://www.wix.com/velo/reference/wix-comments-v2/comments/createcomment) function, pass an `appId` to specify where to create the comment, such as in Wix Blogs. 

Other function calls may return a reference to the app made by Wix. For example, calling the [`getCoupon()`](https://www.wix.com/velo/reference/wix-marketing-v2/coupons/getcoupon) function returns a coupon object with an `appId` referring to the ID of the Wix app that created the coupon, such as Wix Bookings or Wix Events. 

See the following apps made by Wix and their corresponding IDs. Regardless of the function call, each app always has the same `app ID`.

| **App made by Wix**    | **App ID**                          |
|------------------------|--------------------------------------|
| Wix Bookings           | 13d21c63-b5ec-5912-8397-c3a5ddb27a97 |
| Wix Blog               | 14bcded7-0066-7c35-14d7-466cb3f09103 |
| Wix eCommerce          | 1380b703-ce81-ff05-f115-39571d94dfcd |
| Wix Events             | 140603ad-af8d-84a5-2c80-a0f60cb47351 |
| Wix Forms              | 14ce1214-b278-a7e4-1373-00cebd1bef7c |
| Wix Inbox              | 141fbfae-511e-6817-c9f0-48993a7547d1 |
| Wix Pricing Plans      | 1522827f-c56c-a5c9-2ac9-00f9e6ae12d3 |
| Wix Stores             | 215238eb-22a5-4c36-9e7b-e7c08025e04e |
