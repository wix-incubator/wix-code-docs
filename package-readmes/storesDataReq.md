## Wix Stores Data Requests 

The Wix Stores Data Requests package allows you to expose your Wix store’s data to one or more consumer sites using HTTP requests. When a consumer site makes an HTTP request to the exposed endpoints on your store’s site, they can do the following:

* Get a list of your store’s products.
* Get your store’s business information such as name, logo, location, and description.
* Securely update information for a specific product in your store.

This package contains the code for both setting up the endpoints on your Wix store’s site, and for sending HTTP requests from consumer sites to those endpoints.

**Note:** To make things easier, we divided the package setup and content into 2 sections, one relevant for your store site, and the other for consumer sites.


### Store Site 

The following setup instructions and package content are relevant for the store site only. For instructions about consumer sites, see the [Consumer Sites](#consumer-sites) section below.


#### Setup 


##### Before using the package, set up the following: 


1. Add a Wix Store to your site.
2. In your **config.json** backend file, set the `storeUrl` property to a string with your Wix store’s URL. For example, `https://some-account.wixsite.com/store`.
3. Create a secret key for your store to share with consumer sites. You can use a GUID generator.
4. Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager) and create a new secret called `store-secret`. Store the secret key from step 3 above in this secret.
5. Send the secret key you generated for your store to the owners of the consumer sites authorized to access your endpoints. **Warning:** Be careful to send your secret key securely! Exposing it is a serious security risk.
6. If you don’t already have one, create a new backend file called **http-functions.js**. Copy the code below and paste it into the file. 

    ```js
    import {
        get_storeInfo as _get_storeInfo,
        put_updateProduct as _put_updateProduct,
        get_products as _get_products
    } 
    from '@velo/wix-stores-data-requests-backend';
    

    export async function get_storeInfo(request) {
        return await _get_storeInfo(request);
    }

    export async function put_updateProduct(request) {
        return await _put_updateProduct(request);
    }

    export async function get_products(request) {
        return await _get_products(request);
    }
    ```

### Package Content 

The following backend files are included in the package for use on your store site. Note that only exported functions that you can use in your site are listed here.  


#### config.json

The code in this file contains configurations needed to use this package. Follow the instructions in step 2 of the [Setup](#setup) section to edit the file with your configurations.


#### store-data-methods.js
The code in this file contains unexposed functions that get a list of your store’s products, get your store’s business information, and update a specific product’s data.


#### http-functions-helpers.js

The code in this file contains functions that receive and process incoming HTTP requests from consumer sites to your store’s endpoints. To use the functions below in your code and receive HTTP requests, follow the instructions in step 6 of the [Setup](#setup) section. 


* **get_products()** 

  Implements a `GET` HTTP endpoint that returns a list of store products.
 
  Syntax: 
   ```js
   function get_products(request: object): response
   ```

  Parameter:
    * **`request`**: A [WixHttpFunctionRequest](https://www.wix.com/velo/reference/wix-http-functions/wixhttpfunctionrequest-obj) object.
  
  Returns:
  
  A [WixHttpFunctionResponse](https://www.wix.com/velo/reference/wix-http-functions/wixhttpfunctionresponse) object. If the request is successful, the object’s `body` property contains a list of store products.


* **get_storeInfo()**
  
  Implements a `GET` HTTP endpoint that returns your store’s business information. 

  Syntax: 
    ```js
    function get_storeInfo(request: object): response
    ```

  Parameter:

    * **`request`**: A [WixHttpFunctionRequest](https://www.wix.com/velo/reference/wix-http-functions/wixhttpfunctionrequest-obj) object.

  Returns: 
  
  A [WixHttpFunctionResponse](https://www.wix.com/velo/reference/wix-http-functions/wixhttpfunctionresponse) object. If the request is successful, the object’s `body` property contains an object with your store’s business information.  
 
  For example:  
 
  ```js 
  const product = {
      "_id": "82b25997-b918-4ee9-a6b7-79aa1c56fb8d",
      "_updatedDate": "2021-11-10T14:25:00.457Z",
      "name": "Bacon Hamburger",
      "description": "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
      "currency": "ILS",
      "price": 70,
      "discountedPrice": 70,
      "formattedPrice": "₪70٫00",
      "formattedDiscountedPrice": "₪70٫00",
      "trackInventory": false,
      "inStock": true,
      "ribbon": "Sale",
      "inventoryItem": "7d4da668-46e7-b116-5948-8655e3a90472"
    }
    ```


* **put_updateProduct()**
  
  Implements a `PUT` HTTP endpoint that updates a specific product’s data. Requests to this function are authenticated with HMAC using the crypto npm package. 
 
  Syntax: 
    ```js
    function put_updateProduct(request: object): response
    ```

  Parameter:

    * **`request`**: A [WixHttpFunctionRequest](https://www.wix.com/velo/reference/wix-http-functions/wixhttpfunctionrequest-obj) object.

  Returns: 
  
  A [WixHttpFunctionResponse](https://www.wix.com/velo/reference/wix-http-functions/wixhttpfunctionresponse) object. If the request is successful, the object’s `body` property contains the updated product object. 
    

#### utils.js
The code in this file contains unexposed global helper functions and constants that provide functionality for various files in the package. 



### Consumer Sites

The following setup instructions and package content are relevant for consumer sites only. For instructions about the store site, see the [Store Site](#store-site) section above.


#### Setup 


##### Before using the package, set up the following:

1. Ask the Wix store’s owner for the secret key they generated when setting up the package. This is the value of the secret they stored in the Wix Secrets Manager, not its name. **Warning:** Be careful to receive your secret key securely! Exposing it is a serious security risk.
2. Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager) and create a new secret called `store-secret`. Store the secret key from step 1 above in this secret.


### Package Content 

The following backend files are included in the package for use on consumer sites. Note that only exported functions that you can use in your site are listed here. 
#### store-client-methods.js 

This file contains functions that consumer sites can use to send HTTP requests to the store site’s endpoints. Supported requests include getting store data and updating a specific product’s data. 
 
To use the functions below in your code, import them with the following syntax:


```js
import { <function name> } from '@velo/wix-stores-data-requests-backend';
```

* **getStoreData()**
  
  Gets the store’s data.

  Syntax: 
    ```js
    function getStoreData(storeUrl: string, scope: string): Promise<response: object>
    ```

  Parameters:
    * **`storeUrl`**: The store site’s URL string. For example, `https://some-account.wixsite.com/store`.
    * **`scope`**: A string representing the type of data you want to retrieve. One of the following:
        * **`products`**: A list of all store products.
        * **`storeInfo`**: The store’s business information.

  Returns: 
  
  A promise that resolves to either an array of store products or an object containing store information based on the given scope. ` 


* **updateProductData()**
  
  Securely updates a specific product’s data. Requests sent by this function are authenticated with HMAC using the crypto npm package. 
 
  Syntax: 
    ```js
  function updateProductData(storeUrl: string, product: object): Promise<response: object>
    ```

  Parameters:

    * **`storeUrl`**: The site store’s URL string. For example, `https://some-account.wixsite.com/store`. 

    * **`product`**: An object containing the product’s ID, and the information you want to update. 
        * **`_id`**: The ID of the product you want to update (required). 
        * The list of properties you can update for the product can be found in the `productInfo` parameter of the [`updateProductFields()`](https://www.wix.com/velo/reference/wix-stores-backend/updateproductfields) API. 

  Returns: 
  
  A promise that resolves to an object with the updated product data and a success message.
  

#### utils.js
The code in this file contains unexposed global helper functions and constants that provide functionality for various files in the package. 


### NPM Packages
* [crypto-js](https://www.npmjs.com/package/crypto-js)
* [btoa](https://www.npmjs.com/package/btoa)
* [atob](https://www.npmjs.com/package/atob)


### Release Notes
**1.0** Initial version.


### Tags
Wix store, http-functions