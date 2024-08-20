---
title: Introduction
---
# Introduction

The Wix eCommerce API is a comprehensive suite of services that address standard and specialized needs in online selling.

The APIs serve as a foundational layer for Wix's own business solutions, such as [Stores](https://support.wix.com/en/article/wix-stores-about-wix-stores), [Bookings](https://support.wix.com/en/article/wix-bookings-about-wix-bookings), and [Restaurants Orders](https://www.wix.com/app-market/restaurants-orders-app).

The Wix eCommerce API provides developers with a comprehensive set of services for customizing eCommerce functionality on Wix sites. The API empowers developers to extend functionality, create features, and build robust eCommerce solutions that meet the specific needs of their users.

With the Wix eCommerce API, you can do the following and more:

+ Access, manage, and create any customer's [cart](https://www.wix.com/velo/reference/wix-ecom-backend/cart/introduction), including a site visitor's [current cart](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/introduction).
+ Access, manage, and create a site visitor's [checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout/introduction), and handle events when a checkout is [abandoned](https://www.wix.com/velo/reference/wix-ecom-backend/events/onabandonedcheckoutcreated), or an abandoned checkout is [recovered](https://www.wix.com/velo/reference/wix-ecom-backend/events/onabandonedcheckoutrecovered).
+ Create and manage [discount rules](https://www.wix.com/velo/reference/wix-ecom-backend/discountrules/introduction).
+ [Promote and recommend](https://www.wix.com/velo/reference/wix-ecom-backend/recommendations/introduction) items to customers.
+ Create, access, and manage [orders](https://www.wix.com/velo/reference/wix-ecom-backend/orders), and retrieve information about order-related [transactions](https://www.wix.com/velo/reference/wix-ecom-backend/ordertransactions/introduction).
+ Manage [fulfillment](https://www.wix.com/velo/reference/wix-ecom-backend/orderfulfillments/introduction) (preparation and delivery) of orders.

The Wix eCommerce platform also incorporates SPIs for greater customization. Use the SPIs to:

+ Integrate your own [custom catalog](https://www.wix.com/velo/reference/spis/wix-ecom/ecom-catalog/introduction) of sellable items.
+ Incorporate custom [additional fees](https://www.wix.com/velo/reference/spis/wix-ecom/ecom-additional-fees/introduction).
+ Integrate [shipping rates](https://www.wix.com/velo/reference/spis/wix-ecom/ecom-shipping-rates/introduction).
+ [Validate](https://www.wix.com/velo/reference/spis/wix-ecom/ecom-validations/introduction) a site visitor's cart and checkout.

The Wix eCommerce API is constantly being expanded with new capabilities. Check the API reference regularly to stay up to date with new functionality.

To use the wix-ecom-backend API, import `wixEcomBackend` from the `wix-ecom-backend` module:

```javascript
import wixEcomBackend from 'wix-ecom-backend';
```

## Before you begin

Wix eCommerce and Wix Stores handle different parts of the eCommerce flow for an online store:

+ **Wix eCommerce:** Carts, checkouts, and order.
+ **Wix Stores:** Product catalogs, inventories, and collections.

If your code still uses the legacy Wix Stores Cart and Orders APIs, we recommend you migrate them to the new Wix eCommerce APIs as soon as possible. The following tables outline the differences and required migrations:

### API Migration

| Service     | Previous Location                                                           | Current Location            |
| ------------|-----------------------------------------------------------------------------|-----------------------------|
| Cart       | [Wix Stores](https://www.wix.com/velo/reference/wix-stores) (Deprecated)     | [Wix eCommerce Cart](https://www.wix.com/velo/reference/wix-ecom-backend/cart/introduction) and [Current Cart](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/introduction)
| Checkout    | -                                                                           | [Wix eCommerce Checkout](https://www.wix.com/velo/reference/wix-ecom-backend/checkout)
| Orders      | [Wix Stores Backend](https://www.wix.com/velo/reference/wix-stores-backend) (Deprecated) | [Wix eCommerce Orders](https://www.wix.com/velo/reference/wix-ecom-backend/orders)
| Catalog     | [Wix Stores Backend](https://www.wix.com/velo/reference/wix-stores-backend) | Wix Stores - no change
| Inventory   | [Wix Stores Backend](https://www.wix.com/velo/reference/wix-stores-backend) | Wix Stores - no change
| Collections | [Wix Stores Backend](https://www.wix.com/velo/reference/wix-stores-backend) | Wix Stores - no change

### API Event Migration

The table below shows [Wix Stores events](https://www.wix.com/velo/reference/wix-stores-backend/events/introduction) and their equivalent [Wix eCommerce events](https://www.wix.com/velo/reference/wix-ecom-backend/events/introduction) that are triggered at the same time.

| `wix-stores-backend` Order Events                                                                   | `wix-ecom-backend` Order Events                                                     |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`onNewOrder()`](https://www.wix.com/velo/reference/wix-stores-backend/events/onneworder)           | [`onOrderApproved()`](https://www.wix.com/velo/reference/wix-ecom-backend/events/onorderapproved)  |
| [`onOrderCanceled()`](https://www.wix.com/velo/reference/wix-stores-backend/events/onordercanceled) | [`onOrderCanceled()`](https://www.wix.com/velo/reference/wix-ecom-backend/events/onordercanceled) |
| [`onOrderPaid()`](https://www.wix.com/velo/reference/wix-stores-backend/events/onorderpaid)         | [`onOrderTransactionsUpdated()`](https://www.wix.com/velo/reference/wix-ecom-backend/events/onordertransactionsupdated)  |
| [`onOrderRefunded()`](https://www.wix.com/velo/reference/wix-stores-backend/events/onorderrefunded) | [`onOrderTransactionsUpdated()`](https://www.wix.com/velo/reference/wix-ecom-backend/events/onordertransactionsupdatedd) |

## Terminology

+ **Catalog:** A repository containing items for sale. A catalog can contain anything sellable, including physical products, services, gift cards, pricing plans, and custom items created for individual transactions like specialized project work. Wix business solutions, such as Wix Bookings and Wix Stores, provide built-in catalogs. External business solutions can provide the Wix eCommerce platform with access to their catalogs via the [Catalog SPI](https://www.wix.com/velo/reference/spis/wix-ecom/ecom-catalog/introduction). This enables robust integration of the platform’s cart and checkout functionalities with diverse business types.
+ **Cart:** Once customers have found catalog items they want to purchase, they can add these items to their cart. A cart holds information about a potential transaction, including details about selected items, prices, and discounts, as well as the potential buyer. Site visitors can see their cart on the cart page. Developers can access and manage a customer's cart with the [Cart API](https://www.wix.com/velo/reference/wix-ecom-backend/cart/introduction). Some purchasing flows bypass the cart entirely and proceed directly to checkout.
+ **Current Cart:** The [Current Cart API](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/introduction) automatically interacts with the site visitor's cart that is currently being used. This means you can use the same functionality as the Cart API, but without the need for a cart ID.
+ **Checkout:** Checkout is the page where a buyer finalizes a purchase. Each checkout holds information about the items to be purchased, price and tax summaries, shipping and billing information, any applied discounts, and more. Developers can access and manage checkout details and trigger checkout-related events with the [Checkout API](https://www.wix.com/velo/reference/wix-ecom-backend/checkout/introduction).
+ **Order:** Once a customer has committed to a purchase, an order is created. An order holds information about purchased items, price and tax summaries, shipping and billing information, any applied discounts, and the status of payment and fulfillment. In the dashboard, business staff can create new orders, view and edit existing orders, track fulfillment, and manage the payments cycle. The [Orders API](https://www.wix.com/velo/reference/wix-ecom-backend/orders/introduction) enables apps or site owners to customize management of the order lifecycle, including viewing, editing, approving, canceling, and charging.