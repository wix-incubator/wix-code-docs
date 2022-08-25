# Give&Get Example - Packages

[Learning Center](https://learn-code.wix.com/en/)

On our site, we've installed: 

-   The [**jsonwebtoken**](https://www.npmjs.com/package/jsonwebtoken) npm package to encrypt and decrypt giveaway IDs that we send to the (fictitious) delivery service.
-   The **@velo/wix-animation-helper** Velo package to create a spinning animation on the Home page.

## npm Package

When we send a giveaway ID to the delivery service we use the **jsonwebtoken** npm package to encrypt the ID before sending it. We create a callback URL that includes the encrypted ID. The delivery service will use this URL to let us know the giveaway has been delivered.

```javascript
// In backend/deliveryServiceHelper.jsw

import { getSecret } from 'wix-secrets-backend';
import { verify, sign } from 'jsonwebtoken';

export async function createCallbackURL(giveawayID) {
    const secretKey = await getSecret('secretKey');
    const encryptedGiveawayID = sign(giveawayID, secretKey);

    const baseURL = 'https://www.wix.com/corvid-pro/agora/';
  
    return `${baseURL}_functions/giveawayDelivered/${encryptedGiveawayID}`;
}
```

Then, when the delivery service lets us know that the giveaway has been delivered, we decrypt the ID so we can update the delivered giveaway's data in the **Giveaways** collection.

```javascript
// In backend/deliveryServiceHelper.jsw

export async function decryptGiveawayID(encryptedGiveawayID) {
    const secretKey = await getSecret('secretKey');
    return verify(encryptedGiveawayID, secretKey);
}
```

## Velo Package

Towards the bottom of the Home page, we add a little pizzazz to our site by creating some text that rotates around our logo. Thanks to the **wix-animation-helper** Velo package we can create this effect with a single import and one line of code.

```javascript
import {spin} from '@velo/wix-animation-helpers';

$w.onReady(function () {
   // ...
  
   spin('#rotateBadge', { duration: 30000 });
});
```

We start by importing the `spin()` function from the Velo package.

```javascript
import {spin} from '@velo/wix-animation-helpers';
```

Then, inside the `onReady` event handler, we simply call the rotate function. When we call it, we pass the element that we want to spin and how long, in milliseconds, each rotation should take.

```javascript
$w.onReady(function () {
   // ...
  
   spin('#rotateBadge', { duration: 30000 });
});
```