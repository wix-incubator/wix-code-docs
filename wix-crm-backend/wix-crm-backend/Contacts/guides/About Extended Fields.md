# About Extended Fields

Basic contact information is stored in the contact's default properties.
This includes information such as
contact name, company, phone numbers, addresses, and  email addresses.
Additional properties are stored in _extended fields_.

There are 2 types of extended fields:

- **System fields** are added by Wix apps.
  They often enrich your contacts with data from Wix products,
  such as Wix Bookings or Wix Stores.
  System fields cannot be renamed.
- **Custom fields** can be added by site contributors or 3rd-party apps.
  Custom fields can be renamed,
  and their data can be written by site contributors and 3rd-party apps.

When you create, update, or retrieve contacts,
you'll find extended field data in the contact object under `info.extendedFields`.
Most system fields are read-only, while all custom fields can be written to.

You can also manage your site's extended field definitions with these functions:

- To define new custom fields:
  [`findOrCreateExtendedField()`](wix-crm-backend/contacts/findorcreateextendedfield)
- To rename a custom field:
  [`renameExtendedField()`](wix-crm-backend/contacts/renameextendedfield)
- To delete a custom field:
  [`deleteExtendedField()`](wix-crm-backend/contacts/deleteextendedfield)
- To retrieve system field definitions:
  [`getExtendedField()`](wix-crm-backend/contacts/getextendedfield),
  [`queryExtendedFields()`](wix-crm-backend/contacts/queryextendedfields).
