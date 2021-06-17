## LionWheel Integration 

The LionWheel Integration package allows you to easily integrate your Wix site with your LionWheel account, helping you manage and deliver orders from your Wix Store.

**Note:** LionWheel is currently only available for use in Israel.

### Setup

Before using this package, set up the following:

#### LionWheel Platform 
1. [Login](http://members.lionwheel.com) to your LionWheel account.
2. In the dashboard, click the **Customers** tab on the right:

    ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/03/04/9cc35294-907a-4afd-b4cd-d8372b936035/43863493-36cb-4f54-8afd-ed6216da0081.png "Image_Customers_dashboard_tab")

3. In the Customers panel, click the **Edit** icon on the left to access your LionWheel API Key.

    ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/03/04/696671b8-8bed-4882-8c46-451a428b1327/8c21e81e-450f-47cf-92f3-91b00858fc47.png "Image_Edit_dashboard_tab") 


#### Wix Platform 

* Add a Wix Store to your site.

##### Secrets Manager

* Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager) and create 2 secrets. Store your LionWheel key and endpoint with the following secret names. Note that LionWheel will provide you with your account endpoint. 

*  `velo-lionwheel-endpoint`: Your LionWheel endpoint. For example, `https://members.lionwheel.com/api/v1/wix/order_paid`.
*  `velo-lionwheel-key`: Your LionWheel API key



### Package Content

The following backend files are included in the package. Note that the functions in this package don’t need to be called, they will run automatically when the specified events occur. 


##### events.js

The code in this file contains an event that calls the `sendOrderToLionwheel()` function with a customer’s order information upon payment of a new order in your Wix store. 

*   **wixStores_onOrderPaid(event)**

    Gets customer order information and calls the `sendOrderToLionwheel()` function with that information when a customer submits payment for a new order in your Wix store.

    ```js
    export function wixStores_onOrderPaid(event)
    ```

##### lionwheel.js

The functions in this file send the new order to LionWheel and create a fulfillment for the order when the order is paid. You don't call these functions directly, they run when the `onOrderPaid` event is triggered. The file includes the following functions: 

* **sendOrderToLionwheel(data)** 

    Uses the [`fetch()` API](https://www.wix.com/velo/reference/wix-fetch/fetch) to send the customer’s order details to LionWheel.

    ```js
    export async function sendOrderToLionwheel(data)
    ```
    
* **createFulfillmentl(fulfillmentData, orderData)** 
    
    Uses the [`createFulfillment()` API](https://www.wix.com/velo/reference/wix-stores-backend/createfulfillment) to create a fulfillment for the customer’s order with data from LionWheel.

    ```js
    export async function createFulfillment(fulfillmentData, orderData)
    ```

### How to Use the Package

This package does not require you to add any code to your site. To use this package, you only need to complete the tasks in the [Setup](#setup) section.

Once a customer submits payment for an order, the following occurs:

* You should see the order in your LionWheel Deliveries panel.

   ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/03/15/9b52c58e-d5c8-47bd-b9ca-c3abc49abdd0/04b5903f-2801-4e52-9b8a-6658b042c774.png "Image_Deliveries_panel")

* A fulfillment is created with LionWheel as the shipping provider.

### Release Notes

**1.0** Initial version.


### Tags

lionWheel, delivery, order, distribution