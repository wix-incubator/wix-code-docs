## HMAC Authentication

The HMAC Authentication package allows you to add a layer of security to your Wix site's exposed endpoints, by implementing [HMAC](https://en.wikipedia.org/wiki/HMAC) authentication checks on incoming requests and validating the integrity of their data. The authentication uses 1 or more secret keys defined by you, the host site, and shared with consumer sites that you authorize to make requests to your secured endpoints. 

The package defines interactions between 2 types of Wix sites: 

**Host site:** A site containing 1 or more endpoints exposed using the [Wix HTTP Functions API](https://www.wix.com/velo/reference/wix-http-functions). Note that there is only 1 host site for each implementation of the package.

**Consumer site**: A site that sends HTTP requests to the host site's exposed endpoints. There can be multiple consumer sites for each host site.

This package contains code for setting up the authentication service on a host site, and code for setting up and using the authentication service on consumer sites.

**Note:** To make things easier, we divided the package setup and content into 2 sections, one relevant for the host site, and the other for consumer sites.


### Host Site

The following setup instructions and package content are relevant for the host site only. For instructions about consumer sites, see the [**Consumer Sites**](#consumer-sites) section below.


#### Setup

Before using the package, set up the following:


##### Wix Platform

1. Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager).
2. Use an online tool such as [RandomKeygen](https://randomkeygen.com/), or another method to generate as many secret keys as you need for your site. 
3. Store your secret keys as secrets in the [Secrets Manager](https://support.wix.com/en/article/velo-working-with-the-secrets-manager). Note that you can name your secrets whatever you like, because you can specify them by name when implementing the package code. If you don't specify a secret name in your code, the package defaults to a secret with the name `hmac-authentication-secret-key`.


##### Configurations


1. In your site’s **http-functions.js** file, call the `validateAuth()` function in the code for any endpoint you want to secure. Call the function before executing any other logic.
2. Send the secret keys you generated for your sites to the owners of consumer sites authorized to access your endpoint. **Warning:** Be careful to send your secret keys securely! Exposing them is a serious security risk.

#### Package Content

This package includes 1 backend file for use on the host site. 


##### auth.js 

This file contains a function that validates the authenticity of requests received from a consumer site.

To use the function below in your code, import it with the following syntax:

`import { validateAuth } from '@velo/wix-http-functions-hmac-authentication-backend';`


* **validateAuth()**

    Validates incoming requests from the consumer site using HMAC authentication.

    **Syntax:**
    
    `async function validateAuth(httpRequest: WixHttpFunctionRequest, [options: object]) : Promise<void>`


    **Parameters:**
    
    * **httpRequest**: A [WixHttpFunctionRequest](https://www.wix.com/velo/reference/wix-http-functions/wixhttpfunctionrequest) object. This is the same request object that is passed as an argument to the HTTP function.
    * **options**: An object containing the following optional properties:
        * **secretName:** The name of the secret in the **Secrets Manager** that corresponds to the secret key you are using to secure a particular endpoint. If you don’t specify this name, the value defaults to `hmac-authentication-secret-key`.  
        * **maxTimeDiff:**  A number representing the maximum time, in milliseconds, allowed between when a consumer site creates a validation request and when the host site validates it. Requests that are older than this maximum fail. For example, setting `validTimeDiff` to `10000` causes any requests more than 10 seconds old to fail. Note that setting this value adds an extra element of security against man-in-the-middle attacks.

    **Returns:**
    A Promise that resolves to `void` for valid requests.

    Below is an example of an endpoint implementing `validateAuth()`:


    ```js
    import { ok, badRequest } from 'wix-http-functions';
    import { validateAuth } from '@velo/wix-http-functions-hmac-authentication-backend';

    export async function post_hostEndpoint(request) {
       const response = {
                "headers": {
                  "Content-Type": "application/json"
                },
                "body": ""
            }
      
        try {
            await validateAuth(request, { secretName: 'my-secret-name' });
            /* Add logic for authenticated requests. For example: */
            response.body = "Incoming request is valid";
            return ok(response);
        } catch (err) {
            /* Add logic for unauthenticated requests. For example: */
            console.error(err);
            response.body = "Incoming request is invalid";
            return badRequest(response);
        }
    }
    ```
    
### Consumer Sites

The following setup instructions and package content are relevant for consumer sites only. For instructions about the host site, see the [**Host Site**](#host-site) section above.


#### Setup

Before using the package, set up the following:


##### Wix Platform

1. Ask the host site’s owner for the secret keys they generated when setting up the package. These are the **values** of the secrets they stored in the **Wix Secrets Manager**, not their names.**Warning:** Be careful to receive your secret keys securely! Exposing them is a serious security risk.
2. Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager).
3. Store the host's keys in separate secrets. Note that you can name your secrets whatever you like, because you can specify them by name when implementing the package code. If you don't specify a secret name in your code, the package defaults to a secret with the name `hmac-authentication-secret-key`.


##### Configurations


1. Import the `invoke()` function from the **auth.js** file into your backend code files. 
2. Use `invoke()` to send requests to the host site’s secured endpoints.



#### Package Content

This package includes 1 backend file for use on consumer sites.


##### auth.js

This file contains a function that sends requests to the host site's secured endpoints.

To use the function below in your code, import it with the following syntax:

`import { invoke } from '@velo/wix-http-functions-hmac-authentication-backend'`



* **invoke()**

    Generates an HMAC signature using a secret key and optional data, and sends a request to the URL of the host site’s secured endpoint.
    

    **Syntax:**


    `async function invoke(endpointUrl: string, [fetchOptions: WixFetchRequest], [hmacOptions: object]) : Promise<WixFetchResponse>`
    
    **Parameters:**

    * **endpointUrl:** The URL of the host site’s secured endpoint.
    * **fetchOptions:** A WixFetchRequest object containing the following optional properties:
        * **method:**  The [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) to use. Defaults to 'GET'.
        * **headers:** An object containing the request headers. 
        * **body:** The request body as a string.
        * **mode:** The [request mode](https://developer.mozilla.org/en-US/docs/Web/API/Request/mode). One of:
          * "cors"
          * "no-cors"
          * "same-origin"
        * **credentials:** The [request credentials](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials). One of:
          * "omit"
          * "include"
          * "same-origin"
        * **cache:** The [request cache mode](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache). One of:
          * "default"
          * "force-cache"
          * "no-cache"
          * "no-store"
          * "only-if-cached"
          * "reload"
    * **hmacOptions:** An object containing the following optional properties: 
        * **secretName:** The name of the secret in the **Secrets Manager** that corresponds to the secret key you are using to access the host site’s endpoint. If you don’t specify this name, the value defaults to `hmac-authentication-secret-key`.  


    **Returns**:

    A Promise that resolves to a [WixFetchResponse](https://www.wix.com/velo/reference/wix-fetch/wixfetchresponse) object for valid requests.

    Below is a an example implementation of `invoke()`: 

    ```js
    import { invoke } from '@velo/wix-http-functions-hmac-authentication-backend';

    export async function callHostEndpoint() {
        try {
            const endpointUrl = 'https://www.wix-host-site.com/_functions/hostEndpoint';
            /* Add logic for creating the request. For example: */
            const hmacOptions = {
                secretName: 'my-secret-name'
            };
            const fetchOptions = {
                "method": "post"
            };
            const result = await invoke(endpointUrl, fetchOptions, hmacOptions); 
            return await result.json();
        } catch (err) {
            console.error(err);
        }
    }
    ```


### Release Notes

**1.0** Initial version


### Tags

securerequests, hmac, securehttp, httpfunctions
