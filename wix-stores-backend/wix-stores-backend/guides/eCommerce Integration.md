# Integration with wix-ecom-backend

Passing product details from the Stores catalog to a `wix-ecom-backend` cart, checkout, or order, must follow the structure of the `catalogReference` object.

* `catalogItemId` - When passing Wix Stores products, this is the `productId`.
* `appId` - The Stores app ID. When passing products from the Wix Stores catalog, this must always be `"215238eb-22a5-4c36-9e7b-e7c08025e04e"`.
* `options` - This field can hold different key:value pairs, depending on variant management and whether the product/variant has custom text fields.

Refer to the following `catalogReference` object examples for more details:

## Managed Variants

When the inventory of a product's variants is managed (`product.manageVariants: true`), the `catalogReference.options` field should contain the `variantId`. In the following example, the variant also has `customTextFields`:

```json
{
  "catalogReference": {
    "catalogItemId": "5376f9ec-b92e-efa9-e4a1-f4f480aa0d3a",
    "appId": "215238eb-22a5-4c36-9e7b-e7c08025e04e",
    "options": {
      "variantId": "00000000-0000-0020-0005-ad9cdc10d3b8",
      "customTextFields": {
        "What would you like written on the custom label?": "Hope you enjoy the coffee! :)"
      }
    }
  }
}
```

## Non-Managed Variants

When the inventory of a product's variants is not managed (`product.manageVariants: false`), the `catalogReference.options` field should contain the variant's options and choices:

```json
{
  "catalogReference": {
    "catalogItemId": "4d93fb7e-e612-612f-5c27-81b35b503ad7",
    "appId": "215238eb-22a5-4c36-9e7b-e7c08025e04e",
    "options": {
      "options": {
        "Size": "Medium",
        "Color": "Red"
      }
    }
  }
}
```

## Velo Code Example

The following example uses frontend code on the Stores Product Page to dynamically populate the `catalogReference.options` field:

```js
import { currentCart } from 'wix-ecom-backend';

export async function customAddToCart_click(event) {

    // Get info for the currently displayed product
    const product = await $w('#productPage1').getProduct();

    let itemOptions = {
        variantId: undefined,
        options: undefined,
    };

    // Populate itemOptions with variant ID or product choice, depending on whether product has managed variants
    if (product.manageVariants) {
        itemOptions.variantId = await $w('#productPage1').getSelectedVariantId();
    } else {
        itemOptions.options = await $w('#productPage1').getSelectedChoices();
    }

    // Populate addToCurrentCart payload 
    let data = {
        lineItems: [{
            catalogReference: {
                appId: "215238eb-22a5-4c36-9e7b-e7c08025e04e",
                catalogItemId: product._id,
                options: itemOptions
            },
            // gut current selected quantity
            quantity: await $w('#productPage1').getQuantity()
        }]
    };
    
    currentCart.addToCurrentCart(data)
        .then((updatedCurrentCart) => {
            console.log('Success! Updated cart:', updatedCurrentCart);
            return updatedCurrentCart;
        })
        .catch((error) => {
            console.error(error);
            // Handle the error
        });
}
```
