## Zapier Integration

The Zapier Integration package lets you trigger a Zap from your Wix site.



### Setup
Before using this package, set up the following:

#### Zapier Platform


1. Set up a Zapier account.
2. Create a Zap that is triggered by a webhook.
3. Choose the Zap’s trigger event from the dropdown menu. Select `Catch Raw Hook` to receive a raw JS object, or `Catch Hook` to let Zapier format the object.
4. Retrieve the Zap’s URL address. For example: `https://hooks.zapier.com/hooks/catch/10257786/bbojhnh/`.

   > **Note:** The URL must start with `https://hooks.zapier.com/hooks/catch/`.

5. Define the desired actions of your Zap.

#### Wix Platform



1. Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager) and store the retrieved URL as a new secret in the Secrets Manager. Give the secret a meaningful name.


### Package Content

The following backend file is included in the package. Note that only the exported function that you can use in your site is listed here.


#### zapier.js

The code in this file contains a function for triggering a Zap from your site.

To use the function in your backend code, import it with the following syntax:

```js
import { postToZapier } from '@velo/zapier-integration-backend'
```



* **postToZapier()**

    This function retrieves the relevant URL from the Wix Secrets Manager. Then it validates it and checks that the payload is not an empty object. If the checks succeed, it sends a POST request to the URL, passing the payload in the request’s body.


    ##### Syntax:


    ```js
    function postToZapier(urlSecretName: string; payload: object): Promise <object | string>
    ```


    ##### Parameters:

    * **`urlSecretName`**: Name of the secret that securely stores the relevant URL in the Wix Secrets Manager.


    * **`payload`**: Data that is sent to your Zap in the request’s body.

        > **Note:** The payload must be a non-empty JS object.


    ##### Returns:


    A promise that if successful resolves to an [object containing the HTTP response](https://www.wix.com/velo/reference/wix-fetch/wixfetchresponse), or if rejected resolves to a string describing the error.


    ##### Example:


    ```js
    import { postToZapier } from '@velo/zapier-integration-backend'

    export function zapierWrapper() {
        postToZapier('gmailZapUrl', {
            "first_name": "John",
            "last_name": "Doe",
            "age": 22
        });
    }
    ```

### Change Notes

**1.0** Initial version.


### Tags

zapier, automation, trigger, webhook, http