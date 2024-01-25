---
title: Stores Cart to eCommerce Checkout Conversion Table
---

# Stores Cart to eCommerce Checkout Conversion Table

Some fields in the the [Stores Cart API](https://www.wix.com/velo/reference/wix-stores/cart) cart object are now held in the [eCommerce Checkout API](https://www.wix.com/velo/reference/wix-ecom-backend/checkout) checkout object. To learn more, refer to the table below for changes in name and/or location.

The address object used in the eCommerce APIs is slightly different to the one used in the Stores APIs. For more details, refer to the [address object conversion table](https://www.wix.com/velo/reference/wix-ecom-backend/address-object-conversion-table).

Fields that remain with the same name, in the same location, and with no changes in behavior are marked with an asterisk (*).

| Stores Cart Object                              | eCommerce Checkout Object                                 |
| ------------------------------------------------|-----------------------------------------------------------|
| `id`                                            | -                                                         |
| `status`                                        | -                                                         |
| `weightUnit` *                                  | `weightUnit`                                              |
| `buyerNote`  *                                  | `buyerNote`                                               |
| `currency.code`                                 | `currency`                                                |
| `currency.symbol`                               | No longer returned. Instead, for every price returned, we also provide the formatted price in `checkout.priceSummary` and/or `order.priceSummary`.|
| `billingAddress.address`| `billingInfo.address` - See [address object conversion table](https://www.wix.com/velo/reference/wix-ecom-backend/address-object-conversion-table) for more details.
| `billingAddress.contactDetails.firstName`       | `billingInfo.contactDetails.firstName`              |
| `billingAddress.contactDetails.lastName`        | `billingInfo.contactDetails.lastName`               |
| `billingAddress.contactDetails.phone`           | `billingInfo.contactDetails.phone`              |
| `billingAddress.contactDetails.company`         | `billingInfo.contactDetails.company`              |
| `billingAddress.contactDetails.vatId`           | `billingInfo.contactDetails.vatId`              |
| `billingAddress.contactDetails.email`           | `billingInfo.buyerInfo.email`              |
| `appliedCoupon.couponId`                        | `appliedDiscounts[i].coupon._id` - The coupon is now an item in the `appliedDiscounts` array. To get it, search the `appliedDiscounts` array for the `coupon` field.|
| `appliedCoupon.code`                            | `appliedDiscounts[i].coupon.code` - The coupon is now an item in the `appliedDiscounts` array. To get it, search the `appliedDiscounts` array for the `coupon` field.|
| `appliedCoupon.name`                            | `appliedDiscounts[i].coupon.name` - The coupon is now an item in the `appliedDiscounts` array. To get it, search the `appliedDiscounts` array for the `coupon` field.|
| `appliedCoupon.discountValue`                   | `appliedDiscounts[i].coupon.amount.amount` - The coupon is now an item in the `appliedDiscounts` array. To get it, search the `appliedDiscounts` array for the `coupon` field.|
| `appliedCoupon.couponType`                      | No longer returned.                                              |
| `totals.subtotal`                               | `priceSummary.subtotal.amount`                                               |
| `totals.shipping`                               | `priceSummary.shipping.amount`                                               |
| `totals.tax`                                    | `priceSummary.tax.amount`                                               |
| `totals.discount`                               | `priceSummary.discount.amount`                                               |
| `totals.total`                                  | `priceSummary.total.amount`                                               |
| `totals.weight`                                 | `lineItems[i].physicalProperties.weight` X `lineItems[i].quantity` |
| `totals.quantity`                               | `lineItems[0].quantity` + `lineItems[1].quantity` + `lineItems[2].quantity`|
| `convertedTotals.subtotal`                      | `priceSummary.subtotal.convertedAmount`|
| `convertedTotals.shipping`                      | `priceSummary.shipping.convertedAmount`|
| `convertedTotals.tax`                           | `priceSummary.tax.convertedAmount`                                               |
| `convertedTotals.discount`                      | `priceSummary.discount.convertedAmount`|
| `convertedTotals.total`                         | `priceSummary.total.convertedAmount`                                               |
| `convertedTotals.weight`                        | No weight conversion in checkout. Same value as Stores `cart.totals.weight`.|
| `convertedTotals.quantity`                      | Same value as Stores `cart.totals.quantity`.                        |
| `shippingInfo.shippingRuleDetails.ruleId`                | `ֿֿֿֿֿֿֿֿshippingInfo.region._id`                                               |
| `shippingInfo.shippingRuleDetails.optionId`              | `ֿֿֿֿֿֿֿֿshippingInfo.selectedCarrierServiceOption.title`                                              |
| `shippingInfo.shippingRuleDetails.deliveryOption`        | `ֿֿֿֿֿֿֿֿshippingInfo.selectedCarrierServiceOption.title`                                                |
| `shippingInfo.shippingRuleDetails.estimatedDeliveryTime` | `ֿֿֿֿֿֿֿֿshippingInfo.logistics.deliveryTime`                                              |
| `shippingInfo.pickupDetails.pickupAddress`               | `shippingInfo.selectedCarrierServiceOption.logistics.pickupDetails.address` - See [address object conversion table](https://www.wix.com/velo/reference/wix-ecom-backend/address-object-conversion-table) for more details.  |
| `shippingInfo.pickupDetails.buyerDetails.firstName`      | `shippingInfo.shippingDestination.contactDetails.firstName`                                     |
| `shippingInfo.pickupDetails.buyerDetails.lastName`       | `shippingInfo.shippingDestination.contactDetails.lastName`                                     |
| `shippingInfo.pickupDetails.buyerDetails.email`          | `buyerInfo.email`                                     |
| `shippingInfo.pickupDetails.buyerDetails.phone`          | `shippingInfo.shippingDestination.contactDetails.phone`                                     |
| `shippingInfo.pickupDetails.pickupInstructions`    | `shippingInfo.logistics.instructions`                                     |
| `shippingInfo.shippingAddress.address`             | `shippingInfo.shippingDestination.address` - See [address object conversion table](https://www.wix.com/velo/reference/wix-ecom-backend/address-object-conversion-table) for more details.  |
| `shippingInfo.shippingAddress.contactDetails`      | `shippingInfo.shippingDestination.contactDetails` |          |
| `buyerInfo.id` and `buyerInfo.identityType: CONTACT`| `buyerInfo.contactId` only.                                               |
| `buyerInfo.id` and `buyerInfo.identityType: VISITOR`| `buyerInfo.visitorId` only.                                               |
| `buyerInfo.id` and `buyerInfo.identityType: MEMBER` | `buyerInfo.memberId` only.                                              |
| `buyerInfo.email`    *                              | `buyerInfo.email`                                               |
| `buyerInfo.phone`                                  | `billingInfo.contactDetails.phone`                                        |
| `buyerInfo.firstName`                              | `billingInfo.contactDetails.firstName`                                    |
| `buyerInfo.lastName`                               | `billingInfo.contactDetails.lastName`                                     |
| `lineItems[i].id`                                  | `lineItems[i]._id` - **Note:** this `_id` is of type GUID. In the Stores Cart API, the `id` is of type Int32.|
| `lineItems[i].productId`                           | `lineItems[i].catalogReference.catalogItemId`
| `lineItems[i].name`                                | `lineItems[i].productName.original`                          |
| `lineItems[i].quantity`*                        | `lineItems[i].quantity`                          |
| `lineItems[i].weight`                              | `lineItems[i].physicalProperties.weight`                  |
| `lineItems[i].sku`                                 | `lineItems[i].physicalProperties.sku`                                               |
| `lineItems[i].lineItemType: "PHYSICAL"`            | `lineItems[i].itemType.preset: "PHYSICAL"`                                |
| `lineItems[i].lineItemType: "DIGITAL"`             | `lineItems[i].itemType.preset: "DIGITAL"`                               |
| `lineItems[i].lineItemType: "CUSTOM_AMOUNT_ITEM` | `lineItems[i].itemType.custom` and `lineItems[i].catalogReference` is empty.|
| `lineItems[i].notes`                               | `lineItems[i].descriptionLines[i].plainText.original`|
| `lineItems[i].customTextFields`                    | `lineItems[i].descriptionLines`                                             |
| `lineItems[i].mediaItem.mediaType`                 | All line item media in the eCommerce Cart, Checkout, and Order APIs are images.|
| `lineItems[i].mediaItem.url`                       | `lineItems[i].media.url`                                               |
| `lineItems[i].mediaItem.width`                     | `lineItems[i].media.width`                                               |
| `lineItems[i].mediaItem.height`                    | `lineItems[i].media.height`                                               |
| `lineItems[i].options`                             | `lineItems[i].catalogReference.options`
| `lineItems[i].priceData.price`                     | `lineItems[i].price.amount`                                               |
| `lineItems[i].priceData.totalPrice`                | `lineItems[i].price.amount` X `lineItems[i].quantity`                                 |
| `lineItems[i].convertedPriceData.price`            | `lineItems[i].price.convertedAmount`                                               |
| `lineItems[i].convertedPriceData.totalPrice`       | `lineItems[i].price.convertedAmount` X `lineItems[i].quantity`                       |