# Contacts: Supported Filters, Sorting, and Search

This article covers field support for filtering, sorting, and searching
in the Contacts API, the Labels API, and the Extended Fields API.

## Query contacts: Supported filters, sorting, and search

The available options when calling 
[`queryContacts()`](wix-crm-backend/contacts/query-contacts)
have been divided into these 3 sections:

- [Contact properties](#contact-properties-supported-filters,-sorting,-and-search):
  Covers querying the base set of contact properties,
  such as contact ID, name, emails, and labels.
- [System fields](#system-fields-supported-filters,-sorting,-and-search):
  Covers querying system fields inside the `info.extendedFields` object.
- [Custom fields](#custom-fields-supported-filters,-sorting,-and-search):
  Covers querying custom fields inside the `info.extendedFields` object.

For information on the difference between system fields and custom fields,
see [Terminology](contacts/introduction#terminology).

### Contact properties: Supported filters, sorting, and search

The table below shows field support for filters, sorting,
and free-text searching
for the base set of contact properties.
It doesn't include extended fields (those are covered in the sections below).

For a full description of the `Contact` object, see
[`ContactsQueryResult`](wix-crm-backend/contacts/contacts-query-result) >
[`items`](wix-crm-backend/contacts/contacts-query-result/items).

| Property                     | Supported Filters & Sorting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_id`                        | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some)                                                                                                                                                                                                                                                                                                                                                                                                       |
| `_createdDate`               | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`gt()`](contacts/contacts-query-builder/gt), [`lt()`](contacts/contacts-query-builder/lt), [`ge()`](contacts/contacts-query-builder/ge), [`le()`](contacts/contacts-query-builder/le), [`between()`](contacts/contacts-query-builder/between), [`ascending()`](contacts/contacts-query-builder/ascending), [`descending()`](contacts/contacts-query-builder/descending) |
| `_updatedDate`               | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`gt()`](contacts/contacts-query-builder/gt), [`lt()`](contacts/contacts-query-builder/lt), [`ge()`](contacts/contacts-query-builder/ge), [`le()`](contacts/contacts-query-builder/le), [`between()`](contacts/contacts-query-builder/between)                                                                                                                                                       |
| `lastActivity.activityDate`  | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`gt()`](contacts/contacts-query-builder/gt), [`lt()`](contacts/contacts-query-builder/lt), [`ge()`](contacts/contacts-query-builder/ge), [`le()`](contacts/contacts-query-builder/le), [`between()`](contacts/contacts-query-builder/between), [`ascending()`](contacts/contacts-query-builder/ascending), [`descending()`](contacts/contacts-query-builder/descending) |
| `primaryInfo.email`          | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some), [`startsWith()`](contacts/contacts-query-builder/starts-with), [`ascending()`](contacts/contacts-query-builder/ascending), [`descending()`](contacts/contacts-query-builder/descending)                                                                                                                                                                     |
| `primaryInfo.phone`          | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some), [`startsWith()`](contacts/contacts-query-builder/starts-with)                                                                                                                                                                                                                                                                                                                           |
| `info.name.first`            | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some), [`startsWith()`](contacts/contacts-query-builder/starts-with), [`ascending()`](contacts/contacts-query-builder/ascending), [`descending()`](contacts/contacts-query-builder/descending)                                                                                                                                                                     |
| `info.name.last`             | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some), [`startsWith()`](contacts/contacts-query-builder/starts-with), [`ascending()`](contacts/contacts-query-builder/ascending), [`descending()`](contacts/contacts-query-builder/descending)                                                                                                                                                                     |
| `info.emails.email`          | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some), [`startsWith()`](contacts/contacts-query-builder/starts-with)                                                                                                                                                                                                                                                                                                                           |
| `info.phones.phone`          | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some), [`startsWith()`](contacts/contacts-query-builder/starts-with)                                                                                                                                                                                                                                                                                                                           |
| `info.addresses.street`      | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some), [`startsWith()`](contacts/contacts-query-builder/starts-with)                                                                                                                                                                                                                                                                                                                           |
| `info.addresses.city`        | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some), [`startsWith()`](contacts/contacts-query-builder/starts-with)                                                                                                                                                                                                                                                                                                                           |
| `info.addresses.subdivision` | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some),                                                                                                                                                                                                                                                                                                                                                                                                      |
| `info.addresses.country`     | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some),                                                                                                                                                                                                                                                                                                                                                                                                      |
| `info.company`               | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some), [`startsWith()`](contacts/contacts-query-builder/starts-with), [`ascending()`](contacts/contacts-query-builder/ascending), [`descending()`](contacts/contacts-query-builder/descending)                                                                                                                                                                     |
| `info.jobTitle`              | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some), [`startsWith()`](contacts/contacts-query-builder/starts-with), [`ascending()`](contacts/contacts-query-builder/ascending), [`descending()`](contacts/contacts-query-builder/descending)                                                                                                                                                                     |
| `info.birthdate`             | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`gt()`](contacts/contacts-query-builder/gt), [`lt()`](contacts/contacts-query-builder/lt), [`ge()`](contacts/contacts-query-builder/ge), [`le()`](contacts/contacts-query-builder/le), [`between()`](contacts/contacts-query-builder/between), [`ascending()`](contacts/contacts-query-builder/ascending), [`descending()`](contacts/contacts-query-builder/descending) |
| `info.locale`                | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some),                                                                                                                                                                                                                                                                                                                                                                                                      |
| `info.labelKeys`             | [`hasSome()`](contacts/contacts-query-builder/has-some), [`hasAll()`](contacts/contacts-query-builder/has-allhasall)                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### System fields: Supported filters, sorting, and search

The table below shows field support for filters, sorting,
and free-text searching
for the Wix-defined
[extended fields](wix-crm-backend/contacts/introduction#about-extended-fields)
(also known as system fields).

> **Note:**
> When working directly with the `Contact` object in your code,
> data in extended fields must be accessed
> using bracket notation, like this:
> `info.extendedFields['{key}']`.
> However, when querying or sorting,
> extended field names are flattened with dot notation, like this:
> `ascending('info.extendedFields.{key}')`.

| Extended Field                                                | Supported Filters & Sorting                                                                                                                                                                              | Supported Values                                                       |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `info.extendedFields.emailSubscriptions.deliverabilityStatus` | [`eq()`](contacts/contacts-query-builder/eq),[`ne()`](contacts/contacts-query-builder/ne),[`hasSome()`](contacts/contacts-query-builder/has-some)   | `"VALID"`, `"BOUNCED"`, `"SPAM_COMPLAINT"`, `"NOT_SET"`, `"INACTIVE"`. |
| `info.extendedFields.emailSubscriptions.effectiveEmail`       | [`ascending()`](contacts/contacts-query-builder/ascending), [`descending()`](contacts/contacts-query-builder/descending)                                             |                                                                        |
| `info.extendedFields.emailSubscriptions.subscriptionStatus`   | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some) | `"SUBSCRIBED"`, `"UNSUBSCRIBED"`, `"NOT_SET"`, `"PENDING"`.            |
| `info.extendedFields.members.membershipStatus`                | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some) | `"APPROVED"`, `"DENIED"`, `"PENDING"`, `"INACTIVE"`.                   |

### Custom fields: Supported filters, sorting, and search

Extended fields that are created by 3rd-party apps or site contributors
are known as _custom fields_.
You can add, remove, and change custom field names from the
[Contact List](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fcontacts)
in the Dashboard.

The table below shows field support for filters, sorting,
and free-text searching for custom fields.

> **Note:**
> When querying or sorting,
> extended field names are flattened to a dot-separated string, like this:
> `'info.extendedFields.{key}'`.
> For example, to query the `custom.new-customer` extended field,
> use this flattened field name:
> `'info.extendedFields.custom.new-customer'`.

| Data Type/Format                   | Supported Filters & Sorting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| String                             | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`hasSome()`](contacts/contacts-query-builder/has-some), [`startsWith()`](contacts/contacts-query-builder/starts-with), [`ascending()`](contacts/contacts-query-builder/ascending), [`descending()`](contacts/contacts-query-builder/descending)                                                                                                                                                                     |
| Number                             | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`gt()`](contacts/contacts-query-builder/gt), [`lt()`](contacts/contacts-query-builder/lt), [`ge()`](contacts/contacts-query-builder/ge), [`le()`](contacts/contacts-query-builder/le), [`between()`](contacts/contacts-query-builder/between), [`ascending()`](contacts/contacts-query-builder/ascending), [`descending()`](contacts/contacts-query-builder/descending) |
| Date string in `YYYY-MM-DD` format | [`eq()`](contacts/contacts-query-builder/eq), [`ne()`](contacts/contacts-query-builder/ne), [`gt()`](contacts/contacts-query-builder/gt), [`lt()`](contacts/contacts-query-builder/lt), [`ge()`](contacts/contacts-query-builder/ge), [`le()`](contacts/contacts-query-builder/le), [`between()`](contacts/contacts-query-builder/between), [`ascending()`](contacts/contacts-query-builder/ascending), [`descending()`](contacts/contacts-query-builder/descending) |

## Query labels: Supported filters and sorting

This section covers the available options when calling
[`queryLabels()`](wix-crm-backend/contacts/query-labels).

The table below shows field support for filters and sorting
for the label object.

For a full description of the `Label` object, see
[`LabelsQueryResult`](wix-crm-backend/contacts/labels-query-result) >
[`items`](wix-crm-backend/contacts/labels-query-result/items).

| Property       | Supported Sorting &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_createdDate` | [`ascending()`](wix-crm-backend/contacts/labels-query-builder/ascending), [`descending()`](wix-crm-backend/contacts/labels-query-builder/descending)                                                                                    |
| `_updatedDate` | [`ascending()`](wix-crm-backend/contacts/labels-query-builder/ascending), [`descending()`](wix-crm-backend/contacts/labels-query-builder/descending)                                                                                    |
| `displayName`  | [`ascending()`](wix-crm-backend/contacts/labels-query-builder/ascending), [`descending()`](wix-crm-backend/contacts/labels-query-builder/descending)                                                                                    |

## Query extended fields: Supported filters and sorting

This section covers the available options when calling
[`queryExtendedFields()`](wix-crm-backend/contacts/query-extended-fields).

The table below shows field support for filters and sorting
for the extended field object.

For a full description of the `ExtendedField` object, see
[`ExtendedFieldsQueryResult`](wix-crm-backend/contacts/extended-fields-query-result) >
[`items`](wix-crm-backend/contacts/extended-fields-query-result/items).

| Property       | Supported Sorting &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_createdDate` | [`ascending()`](wix-crm-backend/contacts/extended-fields-query-builder/ascending), [`descending()`](wix-crm-backend/contacts/extended-fields-query-builder/descending)                                                                    |
| `_updatedDate` | [`ascending()`](wix-crm-backend/contacts/extended-fields-query-builder/ascending), [`descending()`](wix-crm-backend/contacts/extended-fields-query-builder/descending)                                                                    |
| `displayName`  | [`ascending()`](wix-crm-backend/contacts/extended-fields-query-builder/ascending), [`descending()`](wix-crm-backend/contacts/extended-fields-query-builder/descending)                                                                    |
