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
