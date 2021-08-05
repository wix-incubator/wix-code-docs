## ShareASale Integration 

The ShareASale Integration package provides easy integration with your ShareASale account. You can track purchases made on your site through affiliate links, and manage commissions for your affiliates.


### Setup 

Before using the package, set up the following:


#### ShareASale Platform 


1. Create a ShareASale [Merchant Account](https://account.shareasale.com/merchant/signup.cfm), or log in if you have an existing account.
2. In your dashboard on the left corner you should see your ShareASale Merchant ID number following “ID#”. 
3. Go to **Tools > Merchant API** to get your ShareASale **Token** and **API Secret**.


#### Wix Platform 



*   Add a **Wix Store** to your site.
*   Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager), and store your Merchant ID, ShareASale token, and API secret as new secrets with the following names: 

	`velo-shareasale-merchantId`: YOUR_SHAREASALE_MERCHANT_ID

 	`velo-shareasale-token`: YOUR_SHAREASALE_TOKEN

 	`velo-shareasale-apiSecret`: YOUR_SHAREASALE_API_SECRET


### Package Content 

This package contains the following backend and public files. Note that only exported functions that you can use in your site are listed here. 


#### Backend Files 

This package contains the following backend files:


##### share-a-sale.js 

The code in this file contains unexposed functions that make the HTTP request from your site to ShareASale.


##### share-a-sale-api.jsw 

The code in this file contains the functions needed to create a sales report and send it to ShareASale. 

To use the function below, import them with the following syntax:

```js
import { reportSaleToShareASale } from '@velo/wix-stores-shareasale-backend'
```

The file contains the following function: 



*   **reportSaleToShareASale()**

    Creates a sales report and sends it to ShareASale. You can call this function when a customer payment is validated. 


    Syntax:


    ```js
    export function reportSaleToShareASale(sscid: string, orderId: number, buyerId: number, reportOptions: object):Promise<string>
    ```


    Parameters:

*   **`sscid`:** Affiliate ID obtained from the retrieveStoredAffiliateId() function in the share-a-sale-public.js file.
*   **`orderId`:** **Wix Store** order ID. Note that each order ID can only be used for a single report. Additional requests with the same order ID will be ignored.
*   **`buyerId`:** Contact ID of the buyer. Can be obtained by calling the Velo [`appendOrCreateContact()`](https://www.wix.com/velo/reference/wix-crm/contacts-obj/appendorcreatecontact) API. 
*   **`reportOptions`:** An object containing optional parameters to report to ShareASale. The object can only contain the following keys. The API call will be rejected if other keys are provided.

       *  **`currency`:** The 3-letter [ISO-4217](https://www.iban.com/currency-codes) currency code used by the customer. For example, EUR for Euros. Defaults to USD if the value is blank, or if the specified currency code is invalid.
       *  **`commissionOverridePercentage`:** Number of the commission percentage you want in the report.
       *  **`commissionOverrideAmount`:** Number of the commission amount you want in the report.

    Returns:

    A promise that resolves to a string with either an error message or a success message from ShareASale. 


#### Public File 

This package contains the following public file:


##### share-a-sale-public.js 
The code in this file contains functions needed to detect when a site visitor is using an affiliate ID, and to store and retrieve an affiliate ID. 

To use the functions below in your code, import it with the following syntax:

```js
import { <functionName> } from '@velo/wix-stores-shareasale'
```

The file contains the following functions: 



*   **detectAndStoreAffiliateId()**

    Checks if a site visitor is accessing your website through an affiliate, and stores that affiliate's ID in **[Wix Session Storage](https://www.wix.com/velo/reference/wix-storage/session)**. This function should be called in the **[masterPage.js](https://support.wix.com/en/article/velo-where-do-i-put-my-code#i-want-some-code-to-run-on-every-page)** code file to cover all pages of your site.


    Syntax:


    ```js
    export function detectAndStoreAffiliateId()
    ```

    **Note:** The site's [$w.onReady()](https://www.wix.com/velo/reference/$w/onready) function runs twice. To prevent the function from being called twice, add the following `if` statement before calling the function in the **masterPage.js** file. [Learn more.](https://www.wix.com/velo/reference/wix-window/rendering-obj/env)
 
    ```js
    if (wixWindow.rendering.env === 'browser') {
      detectAndStoreAffiliateId();
    }
    ```

*   **retrieveStoredAffiliateId()**

    Returns the detected affiliate ID currently stored in the session, or otherwise null.

    Syntax:

	```js
	export function retrieveStoredAffiliateId(): <String>
	```

    Returns:

    Returns the affiliate ID `sscid` needed for the `reportSaleToShareASale()` function.


### npm Packages 
This Velo package uses the following npm package. To view the npm license, see the npm readme. 

*   [crypto-js](https://www.npmjs.com/package/crypto-js) 


### Change Notes 

**1.0** Initial version.


## Tags

share-a-sale, affiliates, store, order
