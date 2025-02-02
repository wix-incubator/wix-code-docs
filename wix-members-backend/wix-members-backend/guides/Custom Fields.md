# Custom fields

Member profiles can contain custom data,
located in the member object at `contactDetails.customFields`.
The member object is returned when calling these functions:

- [`currentMember.getMember()`](/current-member/get-member)
- [`members.getMember()`](/members/get-member)
- [`members.updateMember()`](/members/update-member)

The Members API works with [custom fields](https://support.wix.com/en/article/adding-custom-fields-to-contacts) that are
[added to the member profile in the Dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fmembers-account).
Custom fields that haven't been added to the member profile
aren't available through the Members API.
When retrieving members, empty fields are not returned.
You can query, create, rename, and delete custom field definitions with the Contacts
[Extended Fields API](/contacts/about-extended-fields).

## Data structure

The member's `customFields` object contains key:object pairs.
The key is defined in the Contacts Extended Fields API.
The paired object is structured as follows:

```js
{
  // ...
  customFields: {
    <key_1>: {
      name: 'Field 1 Display Name',
      value: 'string' // Value stored for the member
    },
    <key_2>: {
      name: 'Field 2 Display Name',
      value: 12345 // Value stored for the member
    }
  }
}
```

The paired object contains these properties:

- `name`: Display name. Read only.
- `value`: Value stored for the member.

## Retrieve custom field IDs

For a list of your site's custom field IDs, use this function in your backend code:

```js
import { contacts } from "wix-crm-backend";

export async function listCustomFieldKeys() {
  const queryResults = await contacts.queryExtendedFields().find();
  // Filters for custom fields (where fieldType is USER_DEFINED), then converts to an array of keys
  return queryResults.items
    .filter((field) => field.fieldType === "USER_DEFINED")
    .map((field) => field.key);
}
```

## Set a custom field for a new site member

You can set the value of a custom field for a new site member in the `contactInfo` object
using the [`authentication.register()`](/authentication/register) function.
Use a key:value pair in the top level level of the `contactInfo` object, like this:

```js
{options:
  contactInfo: {
    'my-custom-field-key': 'my-custom-field-value',
    'my-custom-field-key-2': 'my-custom-field-value-2'
  }
}
```
