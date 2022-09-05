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
| `buyerNote`  *                                   | `buyerNote`                                               |
| `currency.code`                                 | `currency`                                                |
| `currency.symbol`                               | For every price returned, we also provide the formatted price under `checkout.priceSummary` and/or `order.priceSummary`.                                                         |
| `convertedCurrency.code`                        | `conversionCurrency`                                      |
| `convertedCurrency.symbol`                      | For every converted price returned, we also provide the formatted converted price under `checkout.priceSummary` and/or `order.priceSummary`.                                                         |
| `billingAddress.address`| `billingInfo.address` - See [address object conversion table](https://www.wix.com/velo/reference/wix-ecom-backend/address-object-conversion-table) for more details.
| `billingAddress.contactDetails.firstName`       | `billingInfo.contactDetails.firstName`              |
| `billingAddress.contactDetails.lastName`        | `billingInfo.contactDetails.lastName`               |
| `billingAddress.contactDetails.phone`           | `billingInfo.contactDetails.phone`              |
| `billingAddress.contactDetails.company`         | `billingInfo.contactDetails.company`              |
| `billingAddress.contactDetails.vatId`           | `billingInfo.contactDetails.vatId`              |
| `billingAddress.contactDetails.email`           | `billingInfo.buyerInfo.email`              |
| `appliedCoupon.couponId`                        | `appliedDiscounts[i].coupon._id`                                               |
| `appliedCoupon.name`                            | `appliedDiscounts[i].coupon.name`                                               |
| `appliedCoupon.code`                            | `appliedDiscounts[i].coupon.code`                                               |
| `appliedCoupon.discountValue`                   | `appliedDiscounts[i].coupon.amount.amount`                                 |
| `appliedCoupon.convertedDiscountValue`          | `appliedDiscounts[i].coupon.convertedAmount`                               |
| `appliedCoupon.couponType`                      | -                                              |
| `totals.subtotal`                               | `priceSummary.subtotal.amount`                                               |
| `totals.shipping`                               | `priceSummary.shipping.amount`                                               |
| `totals.tax`                                    | `priceSummary.tax.amount`                                               |
| `totals.discount`                               | `priceSummary.discount.amount`                                               |
| `totals.total`                                  | `priceSummary.total.amount`                                               |
| `totals.weight`                                 | `lineItems[i].physicalProperties.weight` X `lineItems[i].quantity`                                            |
| `totals.quantity`                               | `lineItems[0].quantity` + `lineItems[1].quantity` + `lineItems[2].quantity`                          |
| `convertedTotals.subtotal`                      | `priceSummary.subtotal.convertedAmount`                                               |
| `convertedTotals.shipping`                      | `priceSummary.shipping.convertedAmount`                                               |
| `convertedTotals.tax`                           | `priceSummary.tax.convertedAmount`                                               |
| `convertedTotals.discount`                      | `priceSummary.discount.convertedAmount`                                               |
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
| `buyerInfo.id` when `buyerInfo.identityType` value is `CONTACT` | `buyerInfo.contactId`                                               |
| `buyerInfo.id` when `buyerInfo.identityType` value is `VISITOR` | `buyerInfo.visitorId`                                               |
| `buyerInfo.id` when `buyerInfo.identityType` value is `MEMBER` | `buyerInfo.memberId`                                               |
| `buyerInfo.email`    *                              | `buyerInfo.email`                                               |
| `buyerInfo.phone`                                  | `billingInfo.contactDetails.phone`                                        |
| `buyerInfo.firstName`                              | `billingInfo.contactDetails.firstName`                                    |
| `buyerInfo.lastName`                               | `billingInfo.contactDetails.lastName`                                     |
| `lineItems[i].id`                                  | `lineItems[i]._id` - Note: this `_id` is of type GUID. In the Stores Cart API, the `id` is of type Int32.                                               |
| `lineItems[i].productId`                           | `lineItems[i].catalogReference.catalogItemId`
| `lineItems[i].name`                                | `lineItems[i].productName.original`                          |
| `lineItems[i].quantity`    *                        | `lineItems[i].quantity`                          |
| `lineItems[i].weight`                              | `lineItems[i].physicalProperties.weight`                  |
| `lineItems[i].sku`                                 | `lineItems[i].physicalProperties.sku`                                               |
| `lineItems[i].lineItemType: "PHYSICAL"`            | `lineItems[i].itemType.preset: "PHYSICAL"`                                |
| `lineItems[i].lineItemType: "DIGITAL"`             | `lineItems[i].itemType.preset: "DIGITAL"`                               |
| `lineItems[i].lineItemType: "CUSTOM_AMOUNT_ITEM`   | `lineItems[i].catalogReference`           |
| `lineItems[i].notes`                               | -                                               |
| `lineItems[i].customTextFields`                    | `lineItems[i].descriptionLines`                                             |
| `lineItems[i].mediaItem.mediaType`                 | All line item media in the eCommerce Cart, Checkout, and Order APIs are type image.
| `lineItems[i].mediaItem.url`                       | `lineItems[i].media.url`                                               |
| `lineItems[i].mediaItem.width`                     | `lineItems[i].media.width`                                               |
| `lineItems[i].mediaItem.height`                    | `lineItems[i].media.height`                                               |
| `lineItems[i].options`                             | `lineItems[i].catalogReference.options`
| `lineItems[i].priceData.price`                     | `lineItems[i].price.amount`                                               |
| `lineItems[i].priceData.totalPrice`                | `lineItems[i].price.amount` X `lineItems[i].quantity`                                 |
| `lineItems[i].convertedPriceData.price`            | `lineItems[i].price.convertedAmount`                                               |
| `lineItems[i].convertedPriceData.totalPrice`       | `lineItems[i].price.convertedAmount` X `lineItems[i].quantity`                       |