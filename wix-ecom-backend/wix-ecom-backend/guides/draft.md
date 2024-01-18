---
title: Introduction
---
# Introduction

The Wix eCommerce platform and the `wix-ecom-backend` Velo APIs are a comprehensive suite of services that address standard and specialized needs in online selling.

The platform serves as a foundational layer for Wix's own business solutions, such as [Stores](https://support.wix.com/en/article/wix-stores-about-wix-stores), [Bookings](https://support.wix.com/en/article/wix-bookings-about-wix-bookings), and [Restaurants Orders](https://www.wix.com/app-market/restaurants-orders-app).

The `wix-ecom-backend` Velo APIs provide developers with a comprehensive set of services for customizing eCommerce functionality on Wix sites. The APIs empower developers to extend functionality, create features, and build robust eCommerce solutions that meet the specific needs of their users.

With the `wix-ecom-backend` Velo APIs, you can do the following and more:

+ Access, manage, and create a site visitor's [cart](https://www.wix.com/velo/reference/wix-ecom-backend/cart/introduction). The same functionality also applies, without the use of a cart ID, to a site visitor's [current cart](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/introduction).
+ Access, manage, and create a site visitor's [checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout/introduction), and listen to an event when a checkout is [abandoned](https://www.wix.com/velo/reference/wix-ecom-backend/events/onabandonedcheckoutcreated) or [recovered](https://www.wix.com/velo/reference/wix-ecom-backend/events/onabandonedcheckoutrecovered).
+ Create and manage [discount rules](https://www.wix.com/velo/reference/wix-ecom-backend/discountrules/introduction).
+ [Promote and recommend](https://www.wix.com/velo/reference/wix-ecom-backend/recommendations/introduction) items to customers.
+ Create, access, and manage [orders](https://www.wix.com/velo/reference/wix-ecom-backend/orders), and retrieve information about order-related [transactions](https://www.wix.com/velo/reference/wix-ecom-backend/ordertransactions/introduction).
+ Manage [fulfillment](https://www.wix.com/velo/reference/wix-ecom-backend/orderfulfillments/introduction) (preparation and delivery) of orders.

The Wix eCommerce platform also incorporates SPIs for greater customization. Use the SPIs to:

+ Incorporate custom [additional fees](https://www.wix.com/velo/reference/spis/wix-ecom/ecom-additional-fees/introduction).
+ Integrate [shipping rates](https://www.wix.com/velo/reference/spis/wix-ecom/ecom-shipping-rates/introduction).
+ [Validate](https://www.wix.com/velo/reference/spis/wix-ecom/ecom-validations/introduction) a site visitor's cart and checkout.
+ Integrate external [payment](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/payment-settings-integration-spi/introduction) services.

## Before you begin

It's important to note the following points before starting to code:

+ For an overview of the Wix eCommerce platform and its capabilities, take a look at the [Wix eCommerce Platform Handbook](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/wix-e-commerce-platform-handbook/introduction).
+ The Wix eCommerce API is constantly being expanded with new capabilities. Check the API reference regularly to stay up to date with new functionality.

## Terminology

+ **Catalog:** A repository containing items for sale. A catalog can contain anything sellable, including physical products, services, gift cards, pricing plans, and custom items created for individual transactions like specialized project work. Wix business solutions, such as Wix Bookings and Wix Stores, provide built-in catalogs. <!--External business solutions can provide the Wix eCommerce platform with access to their catalogs via the [Catalog SPI](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/catalog-spi/introduction). This enables robust integration of the platform’s cart and checkout functionalities with diverse business types.-->
+ **Cart:** Once customers have found catalog items they want to purchase, they can add these items to their cart. A cart holds information about a potential transaction, including details about selected items, prices, and discounts, as well as the potential buyer. Site visitors can see their cart on the cart page. Developers can access and manage a customer's cart with the [Cart API](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/cart/introduction). Some purchasing flows bypass the cart entirely and proceed directly to checkout.
+ **Checkout:** Checkout is the page where a buyer finalizes a purchase. Each checkout holds information about the items to be purchased, price and tax summaries, shipping and billing information, any applied discounts, and more. Developers can access and manage checkout details and trigger checkout-related events with the [Checkout API](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/checkout/introduction).
+ **Order:** Once a customer has committed to a purchase, an order is created. An order holds information about purchased items, price and tax summaries, shipping and billing information, any applied discounts, and the status of payment and fulfillment. In the dashboard, business staff can create new orders, view and edit existing orders, track fulfillment, and manage the payments cycle. The [Orders API](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/orders/introduction) enables apps or site owners to customize management of the order lifecycle, including viewing, editing, approving, canceling, and charging.