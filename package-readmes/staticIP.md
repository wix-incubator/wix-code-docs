## Static IP Request

Wix is a cloud-based platform with a dynamic IP address. With the Static IP Request package, you can easily get a static IP address for your Wix site, enabling you to perform HTTP requests from your Wix site to 3rd-party services that require a static IP address for authentication.


### Setup 

Before using this package, set up the following:



*   3rd-party Service: If applicable, get the endpoint API key from your 3rd-party service. 
*   Proxy Provider Account: Create an account with a proxy provider such as **webshare.io**. Your proxy should look something like this:  

![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/05/30/f318ef8e-bf65-48e1-8749-acdbeecb494b/e0462916-0541-4223-98d2-ae37971318c8.png "image_proxy_dashboard")

Copy the **Proxy Address,** **Port**, **Username**, and **Password** for later use.
*   Secrets Manager: Add the following from your 3rd-party service and proxy provider to the [Secrets Manager](https://support.wix.com/en/article/corvid-about-the-secrets-manager):
    *   `endpointApiKey`: Your 3rd-party service endpoint API key (if required by the 3rd-party service). 
    *   `proxyUsername`: Your proxy user name.
    *   `proxyPswd`: Your proxy password. 
*   Config file: Define the following property in the **config.js** file located in your site’s backend code:
    *   `baseURL`: 3rd-party service URL (optional).
    *   `Proxy host`: Proxy address from your proxy provider (required).
    *   `Proxy port`: Proxy port from your proxy provider (required).

### Package Content 


The following backend files are included in the package.


**static-ip.js**

The code in this file contains the function responsible for sending HTTP requests to a 3rd-party service that requires static IP authentication. The function can be used in your backend/page/public code by importing it with the following syntax:


```js
import { sendCustomHttpRequest } from '@velo/static-ip-request-backend'
```

Note that only the exported function you can use on your site is listed here.



*   **sendCustomHttpRequest(configs)**

    Sends an HTTP Request to the 3rd-party service that requires a static IP authentication with the provided configurations.


    ```js

    export async function sendCustomHttpReq(configs)
    ```

       ##### Parameters:

       * **`configs`:** Object containing the following configuration.

       * **`url`**: URL for the request. Can be an absolute URL, `https://some-domain.com/api-endpoint`, or just the endpoint `/api-endpoint`. If just the endpoint is provided, the `url` will be appended to the `baseUrl`, building the absolute URL for the request.
       * **`method`**: Request method. Can be POST, GET, PATCH, DELETE, PUT, HEAD, REQUEST, getUrl, or OPTIONS. Defaults to `GET`. 
       * **`data`**: Request body data. Only applicable for POST, PUT, DELETE, and PATCH methods.
       * **`params`**: Request parameters (optional).
       * **`headers`**: Request headers, `endpointAuthorization` from proxy provider’s **Username** and **Password** (required), and `endpointAuthorization` from the 3rd-party service endpoint API key (if applicable).
       * **`otherConfigs`**: Other configurations to add to the request (optional). For example, **timeout**.  


       ##### Returns: 
       If successful, a Promise that resolves to an object containing all configurations. Otherwise, an error message.


### npm Packages 

This Velo package uses the following npm package. To view the npm license, see the npm readme.



*   [axios](https://www.npmjs.com/package/axios) 
*   [btoa](https://www.npmjs.com/package/btoa) 


### 
Release Notes 


**1.0** Initial version.


### 
Tags 

#staticIP #IPauthentication, #proxy
