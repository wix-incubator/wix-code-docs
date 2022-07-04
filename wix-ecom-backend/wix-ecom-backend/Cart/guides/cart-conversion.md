---
title: Cart Object Conversion
---

# Old Cart to New Cart Conversion Table

To help with migration from the old [Stores Cart API](https://www.wix.com/velo/reference/wix-stores/cart) to the new eCommerce [Cart](https://www.wix.com/velo/reference/wix-ecom-backend/cart?branch=autodocs-wix-ecom-backend) and [Current Cart](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart?branch=autodocs-wix-ecom-backend) APIs, refer to the table below for field changes from the old Cart to the new.

Certain information that used to be held in the Cart, is now kept in the Checkout object. These fields are marked in the table below, with more information available in the [old Cart to new Checkout conversion table](LINK).

Fields marked with an asterisk (*) signify little to no change in semantics or service location.


| Old Stores Cart                                    | New eCommerce Cart                                              |
| ---------------------------------------------------|-------------------------------------------------------------|
| `id`*                                              | `id`                                                        |
| `status`                                           | All carts in the new Cart API have a status value of `INCOMPLETE`. After a purchase, the cart is deleted and the [onCartDeleted()](https://www.wix.com/velo/reference/wix-ecom-backend/events/oncartdeleted?branch=autodocs-wix-ecom-backend) event is triggered. Any attempts to retrieve it via the [getCart()](https://www.wix.com/velo/reference/wix-ecom-backend/cart/getcart?branch=autodocs-wix-ecom-backend) function will yield a 404 error code. In the old Cart API, the cart's status would change to `COMPLETE` after a purchase. |
| `weightUnit`*                                      | `weightUnit`                                               |
| `buyerNote`*                                       | `buyerNote`                                               |
| `currency.code`                                    | `currency`                                    |
| `currency.symbol`                                  | No need for currency symbol. For every price returned, we also provide the formatted price.                                             |
| `convertedCurrency.code`                           | `conversionCurrency`                          |
| `convertedCurrency.symbol`                         | No need for currency symbol. For every converted price returned, we also provide the formatted converted price.                                             |
| `billingAddress`                                   | Billing address is no longer kept in the Cart. This information is only kept in the [Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout?branch=autodocs-wix-ecom-backend) and Order.   |
| `appliedCoupon.couponId`                           | `appliedDiscounts[i].coupon.id` - Search the `appliedDiscounts` array for the only populated `coupon` field.                                               |
| `appliedCoupon.name`                               | `appliedDiscounts[i].coupon.name` - Search the `appliedDiscounts` array for the only populated `coupon` field.                                               |
| `appliedCoupon.code`                               | `appliedDiscounts[i].coupon.code` - Search the `appliedDiscounts` array for the only populated `coupon` field.                                               |
| `appliedCoupon.discountValue`                      | `appliedDiscounts[i].coupon.amount.amount` - Search the `appliedDiscounts` array for the only populated `coupon` field.                                 |
| `appliedCoupon.convertedDiscountValue`             | `appliedDiscounts[i].coupon.amount.convertedAmount` - Search the `appliedDiscounts` array for the only populated `coupon` field.                               |
| `appliedCoupon.couponType`                         | -                                              |
| `totals.subtotal`                                  | `subtotal.amount`                                               |
| `totals`                   | Totals are available by using the [estimateCurrentCartTotals()](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/estimatecurrentcarttotals?branch=autodocs-wix-ecom-backend) function or by passing the cart ID to the Cart API's [estimateTotals()](https://www.wix.com/velo/reference/wix-ecom-backend/cart/estimatetotals?branch=autodocs-wix-ecom-backend) function.                                              |
| `convertedTotals.subtotal`                         | `subtotal.convertedAmount`                                               |
| `convertedTotals`          | Totals are available by using the [estimateCurrentCartTotals()](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/estimatecurrentcarttotals?branch=autodocs-wix-ecom-backend) function or by passing the cart ID to the Cart API's [estimateCurrentCartTotals()](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/estimatecurrentcarttotals?branch=autodocs-wix-ecom-backend) function.                                                   |
| `shippingInfo`        | Shipping information is no longer kept in the Cart. This information is only kept in [Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout?branch=autodocs-wix-ecom-backend).                                              |
| `buyerInfo.id` && `buyerInfo.identityType: CONTACT`| `buyerInfo.contactId`                                               |
| `buyerInfo.id` && `buyerInfo.identityType: VISITOR`| `buyerInfo.visitorId`                                               |
| `buyerInfo.id` && `buyerInfo.identityType: MEMBER` | `buyerInfo.memberId`                                               |
| `buyerInfo.email`     | Buyer email is no longer kept in the Cart. This information is only kept in [Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout?branch=autodocs-wix-ecom-backend).                                               |
| `buyerInfo.phone`     | Buyer phone is no longer kept in the Cart. This information is only kept in [Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout?branch=autodocs-wix-ecom-backend).                                               |
| `buyerInfo.firstName` | Buyer first name is no longer kept in the Cart. This information is only kept in [Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout?branch=autodocs-wix-ecom-backend).                                               |
| `buyerInfo.lastName`  | Buyer last name is no longer kept in the Cart. This information is only kept in [Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout?branch=autodocs-wix-ecom-backend).                                               |
| `lineItems[i].id`                                | `lineItems[i].id` - Note: this `id` is of type GUID. In the old Stores Cart API, the `lineItem.id` was of type Int32.                                              |
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