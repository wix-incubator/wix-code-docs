---
title: Stores to eCommerce Cart Conversion Table
---

# Stores to eCommerce Cart Conversion Table

To help with migration from the [Stores Cart API](https://www.wix.com/velo/reference/wix-stores/cart) to the eCommerce Cart and [Current Cart](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart) APIs, refer to the table below for changes in name and/or location.

Certain information that used to be held in the Cart is now kept in the Checkout and/or Order. These properties are indicated in the table below, with more information available in the [Stores Cart to eCommerce Checkout Conversion Table](https://www.wix.com/velo/reference/wix-ecom-backend/checkout/stores-cart-to-ecommerce-checkout-conversion-table).

The address object used in the eCommerce APIs is slightly different to the one used in the Stores APIs. For more details, refer to the [address object conversion table](https://www.wix.com/velo/reference/wix-ecom-backend/address-object-conversion-table).

Fields that remain with the same name, in the same location, and with no changes in behavior are marked with an asterisk (*).


| Stores Cart                                        | eCommerce Cart                                              |
| ---------------------------------------------------|-------------------------------------------------------------|
| `_id`*                                             | `_id`                                                        |
| `status`                                           | All carts in the eCommerce Cart API have a status value of `INCOMPLETE`. After a purchase is completed (`order.paymentStatus` property value is `PAID`), the cart is deleted and the [onCartDeleted()](https://www.wix.com/velo/reference/wix-ecom-backend/events/oncartdeleted) event is triggered. Any attempts to retrieve it via the [getCart()](https://www.wix.com/velo/reference/wix-ecom-backend/cart/getcart) function will fail. In the Stores Cart API, the cart's status would change to `COMPLETE` after a purchase. |
| `weightUnit`*                                      | `weightUnit`                                               |
| `buyerNote`*                                       | `buyerNote`                                               |
| `currency.code`                                    | `currency`                                    |
| `currency.symbol`                                  | For every price returned, we also provide the formatted price under `checkout.priceSummary` and/or `order.priceSummary`.                                             |
| `convertedCurrency.code`                           | `conversionCurrency`                          |
| `convertedCurrency.symbol`                         | For every converted price returned, we also provide the formatted converted price under `checkout.priceSummary` and/or `order.priceSummary`.                                             |
| `billingAddress`                                   | Billing address is now kept in the [Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout/getcheckout) and [Order](https://www.wix.com/velo/reference/wix-ecom-backend/orders/getorder).   |
| `appliedCoupon.couponId`                           | `appliedDiscounts[i].coupon._id`.                                             |
| `appliedCoupon.name`                               | `appliedDiscounts[i].coupon.name`.                                               |
| `appliedCoupon.code`                               | `appliedDiscounts[i].coupon.code`.                                               |
| `appliedCoupon.discountValue`                      | `appliedDiscounts[i].coupon.amount.amount`.                                 |
| `appliedCoupon.couponType`                         | This property has been removed from eCommerce APIs.                                              |
| `totals`                   | All totals properties are available by using the [estimateCurrentCartTotals()](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/estimatecurrentcarttotals) function, or by passing the cart ID to the Cart API's [estimateTotals()](https://www.wix.com/velo/reference/wix-ecom-backend/cart/estimatetotals) function.                                              |
| `shippingInfo`        | All `shippingInfo` properties are available by using the [estimateCurrentCartTotals()](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/estimatecurrentcarttotals) function, or by passing the cart ID to the Cart API's [estimateTotals()](https://www.wix.com/velo/reference/wix-ecom-backend/cart/estimatetotals) function.                                              |
| `buyerInfo.id` when `buyerInfo.identityType` value is `CONTACT`| `buyerInfo.contactId`                                               |
| `buyerInfo.id` when `buyerInfo.identityType` value is `VISITOR`| `buyerInfo.visitorId`                                               |
| `buyerInfo.id` when `buyerInfo.identityType` value is `MEMBER` | `buyerInfo.memberId`                                               |
| `buyerInfo.id` when `buyerInfo.identityType` value is `ADMIN` | This identity is no longer supported.                                               |
| `buyerInfo.email`     | Buyer email is now kept in [Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout/getcheckout).                                               |
| `buyerInfo.phone`     | Buyer phone is now kept in [Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout/getcheckout).                                               |
| `buyerInfo.firstName` | Buyer first name is now kept in [Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout/getcheckout).                                               |
| `buyerInfo.lastName`  | Buyer last name is now kept in [Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout/getcheckout).                                               |
| `lineItems[i].id`                                | `lineItems[i]._id`. **Note:** This `_id` is of type GUID. In the Stores Cart API, the `lineItem.id` is of type Int32.                                              |
| `lineItems[i].productId`                         | `lineItems[i].catalogReference.catalogItemId` |
| `lineItems[i].name`                              | `lineItems[i].productName.translated`                          |
| `lineItems[i].quantity`                          | `lineItems[i].quantity`                          |
| `lineItems[i].weight`                            | `lineItems[i].physicalProperties.weight`                  |
| `lineItems[i].sku`                               | `lineItems[i].physicalProperties.sku`                                               |
| `lineItems[i].lineItemType: "PHYSICAL"`          | `lineItems[i].itemType.preset: "PHYSICAL"`                                |
| `lineItems[i].lineItemType: "DIGITAL"`           | `lineItems[i].itemType.preset: "DIGITAL"`                               |
| `lineItems[i].lineItemType: "CUSTOM_AMOUNT_ITEM"`| When the line item is a custom one, `lineItems[i].catalogReference` is empty.                               |
| `lineItems[i].notes`                             | -                                               |
| `lineItems[i].customTextFields`                  | `lineItems[i].descriptionLines`                                             |
| `lineItems[i].mediaItem.mediaType`               | All line item media in the Cart API are type image. |
| `lineItems[i].mediaItem.url`                     | `lineItems[i].media.url`                                               |
| `lineItems[i].mediaItem.width`                   | `lineItems[i].media.width`                                               |
| `lineItems[i].mediaItem.height`                  | `lineItems[i].media.height`                                               |
| `lineItems[i].options`                           | `lineItems[i].descriptionLines`
| `lineItems[i].priceData.price`                   | `lineItems[i].price.amount`                                               |
| `lineItems[i].priceData.totalPrice`              | `lineItems[i].price.amount` X `lineItems[i].quantity`                                 |
| `lineItems[i].convertedPriceData.price`          | `lineItems[i].price.convertedAmount`                                               |
| `lineItems[i].convertedPriceData.totalPrice`     | `lineItems[i].price.convertedAmount` X `lineItems[i].quantity`                            |