## ActiveCampaign Integration

The ActiveCampaign Integration package allows you to integrate Wix Stores with the e-commerce marketing automation service, ActiveCampaign. 

With this package you can set up a 3rd-party integration (connection) for your Wix Store in ActiveCampaign. When a customer submits payment for a new order in your Wix Store, the order information is sent to ActiveCampaign. ActiveCampaign creates a customer profile with the order information, or adds the order information to the existing customer’s profile.  


### Setup 

Before using the package, set up the following:


#### ActiveCampaign Platform 

1. Go to the [ActiveCampaign site](https://www.activecampaign.com/) and complete the registration process, or sign in if you already have an ActiveCampaign account.
2. On the dashboard, go to **Settings > Developer** and get the following information from the **API Access** section:  
    +   URL
    +   Key


#### Wix Platform 

##### Secrets Manager  

*   Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager) and create a new secret with the name `velo-activecampaign-key`. Store your ActiveCampaign key in the secret. 


##### Wix Stores 

*   Add a Wix Store to your site.


##### Configurations 

Do the following in your **config.json** backend file to create a connection from your Wix Store to ActiveCampaign: 
    
1.  Set the `apiAccessUrl` value to your ActiveCampaign API Access URL.
2.  Set the properties of the `initData` object to the values specified below. 

    *   **`service`:** The name of your service (for example, Wix Store).
    *   **`externalid`:** The ID of your store. Must be a string (for example, `’myWixStoreId’`.
    *   **`name`:** The name associated with the account such as your company name (for example, `’Toys Store’`).
    *   **`logoUrl`:** The image URL of your store logo. 
    *   **`linkUrl`:** Link to a URL where your integration can be managed. For example, you can link to the Wix Store Products page in your Dashboard. The link is for tracking purposes.

Note that the information you define in the config file will be displayed as follows in your ActiveCampaign **Integrations** panel once you finish creating a connection. To get to the Integrations panel, on the left side of your dashboard click **Settings > Integrations**. 

 ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/15/d5e8b3f0-ff64-4305-980a-222ce030a8a9/93f7479c-401b-4118-ad15-e32c043b0c70.png "image_Wix_Store_integration_in_AC")

3.  Set the `id` value. You will get this value after you create your connection. Follow these steps to create your connection:

    a.  Create a new **'.js' file** in the backend section of your site (for example, ‘test.js’).

    b.  Add the following code to this file: 
        
      ```js
      import { createConnection } from '@velo/wix-stores-activecampaign-backend';

      export function init() {
        return createConnection();
      }
      ```

    c.  To run this function from the **Editor**, click the green arrow next to the function. A new tab will open in the code panel for running the function. 

      ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/17/87417e30-d64f-476a-892b-590a0cf1fde7/dc4f20bd-ee07-466e-9834-8c7762d89fb6.png "image_click_green_arrow_by_createConnection_function")

    d.  Click **Run** in the right column to run the function. You will find your **id** in the function output. This is your connection ID. Set it as the `id` value in the **config.json** file.

      ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/15/fb2574fd-e58c-49d4-b9ae-2742f90545d1/142b17fb-6ca4-4d80-a05b-266bd9441374.png "image_run_createConnection_function_in_editor")


### Package Content 

The following backend files are included in the package. Note that only exported package functions that you can use in your site are listed here. 


#### config.js 

The code in this editable file contains the configurations needed to use this package. Follow the instructions in the [Setup](#setup) section to set up the configurations. 


#### activecampaign-api.js 

The code in this file defines functions used to work with the ActiveCampaign API.


#### create-connection.js 

The code in this file contains a function that uses the information you set in your config.js file to create a 3rd-party integration (connection) for your Wix Store in ActiveCampaign API. 


#### events.js 

The code in this file contains an event that calls the `orderHandler()` function to handle and send a customer’s order information from your Wix Store to ActiveCampaign upon payment of a new order. This file contains the following function:



*   **[wixStores_onOrderPaid(event)](https://www.wix.com/velo/reference/wix-stores-backend/events/onorderpaid)**

    Sends customer order information (customer number and ID) to ActiveCampaign when a customer submits payment for a new order in your Wix store.

    ```js
    export async function wixStores_onOrderPaid(event)
    ```


#### order-handler.js 

The code in this file contains functions that handle orders and send them to ActiveCampaign.


#### test-order.js 

The code in this file contains a function that creates a test order from your Wix Store. You can run this function before your site is live to make sure the package is working properly.

  * **makeTestOrder()** 
  
    Creates a test order from your Wix Store and sends it to ActiveCampaign.
    
    ```js
    async function makeTestOrder()
    ```


### How to Use the Package  

This section demonstrates how you can work with the package. Note that this package does not require you to add any code. To use this package, you need to complete all steps of the [Setup](#setup) section. 

Once a customer submits payment for an order, you should see the order in your ActiveCampaign site. To see the order, click **Contacts** and then click the contact whose order you want to see. In the example below, you can see Jane Doe’s order made from our Wix Toys Store.

![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/16/4617c330-abd3-4d3f-9d6d-1b5dcc02f91a/fdcfb228-5f92-4088-80dd-d4e6bed6cb22.png "image_AC_contacts_Jane_Doe")


To test the package and see orders from your Wix Store in ActiveCampaign without a customer order, follow the steps below: 



1. Complete the steps in the [Setup](#setup) section, if you haven't already. 
2. Create a new **'.js' file** in the backend section of your site (for example, ‘order.js’).
3. Add following code to this file: 
    
    ```js
    import { makeTestOrder } from '@velo/wix-stores-activecampaign-backend';

    export function test() {
      return makeTestOrder();
    } 
    ```

4. To run this function in the **Editor,** click the green arrow next to the function like you did in step 3c. of the [Setup](#setup).
5. Click **Run** in the right column to run the function.
   The function will run a test order with sample customer information listed in the package’s **test.js** file. 
6. Check the order by going to **ActiveCampaign >** Click **Contacts** and you should see our test order under the email address, ‘john.doe@somedomain.com’.  




### npm Packages 

This Velo package uses the following npm package. To view the npm license, see the npm readme. 

*   [number-precision](https://www.npmjs.com/package/number-precision)


### Release Notes 

**1.0.0** Initial version.

**1.6.0** Add Name and Phone Syncing.

### Tags 
wixStores, activeCampaign, e-commerce, marketing, automation
