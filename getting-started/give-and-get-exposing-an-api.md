# Give&Get Example - Exposing an API

Let's take a look at an example of an API that we expose from the [Give&Get site](https://www.wix.com/velo-dev/giveandget) ([template](https://editor.wix.com/html/editor/web/renderer/new?siteId=bc57d791-a42d-4f8c-b74e-bd51b6dd0095&metaSiteId=398bcfa9-b93e-435a-95ea-9a0c15d56d36&autoDevMode=true)).

We expose an endpoint that our (fictitious) delivery service uses to update our site when a giveaway has been delivered. The delivery service makes an API call to our site letting us know that a giveaway was delivered. When we receive such an API call, we update the status of the giveaway in the **Giveaways** collection to **Delivered**.

The code for our HTTP function looks like this:

```javascript
import { updateGiveawayStatus } from 'backend/giveawaysModule';
import {ok, badRequest} from 'wix-http-functions';
import { decryptGiveawayID } from 'backend/deliveryServiceHelper';

export async function post_giveawayDelivered(request) {
    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const encryptedGiveawayID = request.path[0];
    const giveawayID = await decryptGiveawayID(encryptedGiveawayID);

    let response;
    try {
        await updateGiveawayStatus(giveawayID, 'Delivered');
        options.body = {
            success: true
        };

        response = ok(options);
    } catch (error) {
        options.body = {
            success: false,
            errorMessage: error.message
        };

        response = badRequest(options);
    }

    return response;
}
```

We begin by importing a function to update a giveaway's status in the **Giveaways** collection, the HTTP responses that we use, and a function to decrypt IDs. 

```javascript
import { updateGiveawayStatus } from 'backend/giveawaysModule';
import {ok, badRequest} from 'wix-http-functions';
import { decryptGiveawayID } from 'backend/deliveryServiceHelper';
```

Then we declare an HTTP function that handles POST requests to the **giveawayDelivered** endpoint.

The delivery service will call this endpoint using a URL like this:

**.../giveandget/\_functions-dev/giveawayDelivered/{giveawayId}**

```javascript
export async function post_giveawayDelivered(request) {
    // HTTP function implementation goes here
}
```

Next, we start building the response options by adding the appropriate header.

```javascript
const options = {
    headers: {
        'Content-Type': 'application/json'
    }
};
```

After that, we get an encrypted giveaway ID from the request path.

We decrypt the ID using the function we imported above.

We use encrypted IDs to prevent anyone other than the delivery service from updating our site that a delivery has been made. Other users will be able to call our API, but they won't send us the proper IDs, so their calls will have no effect.

```javascript
const encryptedGiveawayID = request.path[0];
const giveawayID = await decryptGiveawayID(encryptedGiveawayID);
```

Finally, we update the status of the specified giveaway to be **Delivered**.

Assuming the update goes smoothly, we return a 200 OK response and a success flag. If there was some sort of problem we add the error information to the response object and send a 400 Bad Request response.

```javascript
let response;
try {
    await updateGiveawayStatus(giveawayID, 'Delivered');
    options.body = {
        success: true
    };

    response = ok(options);
} catch (error) {
    options.body = {
        success: false,
        errorMessage: error.message
    };

    response = badRequest(options);
}

return response;
```