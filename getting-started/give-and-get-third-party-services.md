# Give&Get Example - Integrating With Third Party Services

Let's take a look at an example of how we integrate with third party services from our [Give&Get site](https://www.wix.com/velo-dev/giveandget) ([template](https://editor.wix.com/html/editor/web/renderer/new?siteId=bc57d791-a42d-4f8c-b74e-bd51b6dd0095&metaSiteId=398bcfa9-b93e-435a-95ea-9a0c15d56d36&autoDevMode=true)). 

We integrate with a (fictitious) delivery service to schedule deliveries for giveaways that visitors have requested.

The delivery service API works as follows:

-   It's called using the POST method.
-   Authentication is with an API key in the request header. The requesting URL includes one parameter, which is an encrypted ID of the giveaway to be delivered.
-   The request body is a JSON object containing the following information:
    -   `origin`: The address of the giveaway giver.
    -   `destination`: The address of the giveaway receiver.
    -   `callbackURL`: URL of our site's HTTP function that the delivery service will call when the item is delivered.
-   The API returns a JSON object containing the following information:
    -   `success`: Whether a delivery was successfully created.
    -   `trackingURL`: A URL to a page for tracking the delivery.

> **Note**
> 
> To retrieve an API key to use the (fictitious) delivery service, go to our [Blink Shipper](https://www.wix.com/velo-dev/fake-api) site. If you're working on your own version of the Give&Get site, add the key to the **Secrets Manager** using the name **deliveryKey**.

Let's take a look at the code that creates a delivery for a requested giveaway. The code is in the **deliveries.jsw** backend web module.

```javascript
// In backend/deliveries.jsw

import { getSecret } from 'wix-secrets-backend';
import { fetch } from 'wix-fetch';
import { createCallbackURL } from 'backend/deliveryServiceHelper';

export async function createDelivery(giveawayAddress, userAddress, giveawayId) { 
    const callbackURL = await createCallbackURL(giveawayId);
    const deliveryKey = await getSecret('deliveryKey');
    const APIEndpoint = 'https://www.wix.com/velo-dev/fake-api/_functions/delivery'; 

    const body = {
        origin: giveawayAddress,
        destination: userAddress,
        callbackURL
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${deliveryKey}`
        },
        body: JSON.stringify(body)
    };
  
    const httpResponse = await fetch(APIEndpoint, options);
  
    return httpResponse.json();
}
```

We begin by importing the `getSecret()`, `fetch()`, and `createCallbackURL()` functions.

The `createCallbackURL()` function is imported from some backend code we've written. We'll see the definition of this function in a later lesson.

```javascript
import { getSecret } from 'wix-secrets-backend';
import { fetch } from 'wix-fetch';
import { createCallbackURL } from 'backend/deliveryServiceHelper';
```

Next, in the exported `createDelivery()` function, we create a callback URL using the `createCallbackURL()` function.

```javascript
const callbackURL = await createCallbackURL(giveawayId);
```

After that, we get our key for the delivery API from the **Secrets Manager** and we store the URL of the API endpoint.

```javascript
const deliveryKey = await getSecret('deliveryKey');
const APIEndpoint = 'https://www.wix.com/velo-dev/fake-api/_functions/delivery';
```

Next, we build the request body.

```javascript
const body = {
    origin: giveawayAddress,
    destination: userAddress,
    callbackURL
};
```

Then, we build the request options.

We define the request method to be POST. In the headers we set the right content type and send the authorization with the key we retrieved from the **Secrets Manager**. We also add the body we built above.

```javascript
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${deliveryKey}`
    },
    body: JSON.stringify(body)
};
```

All that's left to do at this point is to make the API call and return the result.

```javascript
const httpResponse = await fetch(APIEndpoint, options);

return httpResponse.json();
```