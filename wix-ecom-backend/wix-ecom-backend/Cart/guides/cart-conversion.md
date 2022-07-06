---
title: Stores to eCommerce Cart Conversion Table
---

# Stores to eCommerce Cart Conversion Table

To help with migration from the soon-to-be deprecated [Stores Cart API](https://www.wix.com/velo/reference/wix-stores/cart) to the eCommerce [Cart](https://www.wix.com/velo/reference/wix-ecom-backend/cart?branch=autodocs-wix-ecom-backend) and [Current Cart](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart?branch=autodocs-wix-ecom-backend) APIs, refer to the table below for changes in name and/or location.

Certain information that used to be held in the Cart is now kept in the Checkout and/or Order. These properties are indicated in the table below, with more information available in the [Stores Cart to eCommerce Checkout Conversion Table - LINK NEEDED](LINK).

Fields that remain with the same name, in the same location, and with no changes in behavior are marked with an asterisk (*).


| Stores Cart                                        | eCommerce Cart                                              |
| ---------------------------------------------------|-------------------------------------------------------------|
| `_id`*                                             | `_id`                                                        |
| `status`                                           | All carts in the eCommerce Cart API have a status value of `INCOMPLETE`. After a purchase is completed (`order.paymentStatus` property value is `PAID`), the cart is deleted and the [onCartDeleted()](https://www.wix.com/velo/reference/wix-ecom-backend/events/oncartdeleted?branch=autodocs-wix-ecom-backend) event is triggered. Any attempts to retrieve it via the [getCart()](https://www.wix.com/velo/reference/wix-ecom-backend/cart/getcart?branch=autodocs-wix-ecom-backend) function will fail. In the Stores Cart API, the cart's status would change to `COMPLETE` after a purchase. |
| `weightUnit`*                                      | `weightUnit`                                               |
| `buyerNote`*                                       | `buyerNote`                                               |
| `currency.code`                                    | `currency`                                    |
| `currency.symbol`                                  | No need for currency symbol. For every price returned, we also provide the formatted price.                                             |
| `convertedCurrency.code`                           | `conversionCurrency`                          |
| `convertedCurrency.symbol`                         | No need for currency symbol. For every converted price returned, we also provide the formatted converted price.                                             |
| `billingAddress`                                   | Billing address is now kept in the [Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout?branch=autodocs-wix-ecom-backend) and [Order](https://www.wix.com/velo/reference/wix-ecom-backend/orders/getorder?branch=autodocs-wix-ecom-backend).   |
| `appliedCoupon.couponId`                           | `appliedDiscounts[i].coupon.id`.                                             |
| `appliedCoupon.name`                               | `appliedDiscounts[i].coupon.name`.                                               |
| `appliedCoupon.code`                               | `appliedDiscounts[i].coupon.code`.                                               |
| `appliedCoupon.discountValue`                      | `appliedDiscounts[i].coupon.amount.amount`.                                 |
| `appliedCoupon.couponType`                         | This property has been removed from eCommerce APIs.                                              |
| `totals`                   | All totals properties are available in the Checkout, by using the [estimateCurrentCartTotals()](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/estimatecurrentcarttotals?branch=autodocs-wix-ecom-backend) function, or by passing the cart ID to the Cart API's [estimateTotals()](https://www.wix.com/velo/reference/wix-ecom-backend/cart/estimatetotals?branch=autodocs-wix-ecom-backend) function.                                              |
| `shippingInfo`        | All `shippingInfo` properties are available in the Checkout, by using the [estimateCurrentCartTotals()](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/estimatecurrentcarttotals?branch=autodocs-wix-ecom-backend) function, or by passing the cart ID to the Cart API's [estimateTotals()](https://www.wix.com/velo/reference/wix-ecom-backend/cart/estimatetotals?branch=autodocs-wix-ecom-backend) function.                                              |
| `buyerInfo.id` when `buyerInfo.identityType` value is `CONTACT`| `buyerInfo.contactId`                                               |
| `buyerInfo.id` when `buyerInfo.identityType` value is `VISITOR`| `buyerInfo.visitorId`                                               |
| `buyerInfo.id` when `buyerInfo.identityType` value is `MEMBER` | `buyerInfo.memberId`                                               |
| `buyerInfo.id` when `buyerInfo.identityType` value is `ADMIN` | This identity is no longer supported.                                               |
| `buyerInfo.email`     | Buyer email is now kept in [Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout?branch=autodocs-wix-ecom-backend).                                               |
| `buyerInfo.phone`     | Buyer phone is now kept in [Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout?branch=autodocs-wix-ecom-backend).                                               |
| `buyerInfo.firstName` | Buyer first name is now kept in [Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout?branch=autodocs-wix-ecom-backend).                                               |
| `buyerInfo.lastName`  | Buyer last name is now kept in [Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout?branch=autodocs-wix-ecom-backend).                                               |
| `lineItems[i].id`                                | `lineItems[i].id` - Note: this `id` is of type GUID. In the Stores Cart API, the `lineItem.id` was of type Int32.                                              |
| `lineItems[i].productId`                         | `lineItems[i].catalogReference.catalogItemId` - Learn more about the [link waiting for catalog SPI functionality](LINK). |
| `lineItems[i].name`                              | `lineItems[i].productName.translated`                          |
| `lineItems[i].quantity`                          | `lineItems[i].quantity`                          |
| `lineItems[i].weight`                            | `lineItems[i].physicalProperties.weight`                  |
| `lineItems[i].sku`                               | `lineItems[i].physicalProperties.sku`                                               |
| `lineItems[i].lineItemType: "PHYSICAL"`          | `lineItems[i].itemType.preset: "PHYSICAL"`                                |
| `lineItems[i].lineItemType: "DIGITAL"`           | `lineItems[i].itemType.preset: "DIGITAL"`                               |
| `lineItems[i].lineItemType: "CUSTOM_AMOUNT_ITEM"`| `lineItems[i].catalogReference` is empty.                               |
| `lineItems[i].notes`                             | -                                               |
| `lineItems[i].customTextFields`                  | `lineItems[i].descriptionLines`                                             |
| `lineItems[i].mediaItem.mediaType`               | All line item media in the Cart API are images. |
| `lineItems[i].mediaItem.url`                     | `lineItems[i].media.url`                                               |
| `lineItems[i].mediaItem.width`                   | `lineItems[i].media.width`                                               |
| `lineItems[i].mediaItem.height`                  | `lineItems[i].media.height`                                               |
| `lineItems[i].options`                           | `lineItems[i].descriptionLines` - For more details see [link waiting for catalog SPI functionality](LINK).
| `lineItems[i].priceData.price`                   | `lineItems[i].price.amount`                                               |
| `lineItems[i].priceData.totalPrice`              | `lineItems[i].price.amount` X `lineItems[i].quantity`                                 |
| `lineItems[i].convertedPriceData.price`          | `lineItems[i].price.convertedAmount`                                               |
| `lineItems[i].convertedPriceData.totalPrice`     | `lineItems[i].price.convertedAmount` X `lineItems[i].quantity`                            |