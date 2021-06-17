## Bringg Integration 

The Bringg Integration package allows you to easily integrate your Wix site with your Bringg account, helping you manage and send customer orders for delivery from your Wix Store.


### Setup 

Before using this package, set up the following:


#### Bringg Platform 

1. Create a [Bringg account](https://now.bringg.com/#/), or [login](https://app.bringg.com/#/login/) if you have an existing account.
2. On the top right corner of your dashboard, click your **avatar** and navigate to your profile **Settings**. On the left side, click the **Webhooks & API** tab.
3. Under **API Type**, use the **Action** dropdown and select **Create Order**. Click **Add Service**. To learn more, click [here](https://developers.bringg.com/reference#create-task). 
4. A URL is generated containing your 2 Bringg keys: 
  
    `https://us2-admin-api.bringg.com/services/6f15901b/{YOUR_SERVICE_UUID1}/{YOUR_SERVICE_UUID2}`.


#### Wix Platform 

1. Add a Wix Store to your site. 
2. **Config file**: In the config.js file located in your backend code, set the order `title` property to the name you want for your order's title. This order title will be displayed in your Bringg **Dispatch** panel. 


##### Secrets Manager  


*   Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager) and create 2 secrets. Store your Bringg keys with the following secret names: 

    `velo-bringg-serviceUUID1`: Your Bringg service UUID1

    `velo-bringg-serviceUUID2`: Your Bringg service UUID2



### Package Content 

The following backend files are included in the package. Note that the functions in this package don’t need to be called, they will run automatically when the specified events occur. 


##### events.js 

The code in this file contains an event that calls the internal package function `createBringgOrder()` with a customer’s order information upon payment of a new order in your Wix store. 



*   [wixStores_onOrderPaid(event)](https://www.wix.com/velo/reference/wix-stores-backend/events/onorderpaid)

    This event runs when when a customer submits payment for a new order in your Wix store. The event gets order information and calls the `createBringgOrder()` function with that information to send the new order to Bringg.

    ```js
    export async function wixStores_onOrderPaid(event) 
    ```


##### bringg-api.js 

The code in this file builds the relevant object with a customer’s order details and uses the [`fetch() API`](https://www.wix.com/velo/reference/wix-fetch/fetch) to send the new order to Bringg.


##### config.js 

The code in this editable file sets the text you want for your order's title.


### How to Use the Package  

This package does not require you to add any code to your site. To use this package, you only need to complete the tasks in the [Setup](#setup) section.

Once a customer submits payment for an order, you should see the order in your Bringg **Dispatch** panel:


![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/17/e8f770f0-38ec-423e-9a66-d15a0f31795e/5ec6f9c5-3f78-48b0-8842-38d860eb1dd2.png 'image_bringg-dispatch-dashboard')



### Release Notes

**1.0** Initial version.


### Tags

delivery, bringg, stores, orders, fulfillment
