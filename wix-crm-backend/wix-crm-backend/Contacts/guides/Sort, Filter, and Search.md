# Contacts: Supported Filters, Sorting, and Search

This article covers field support for filtering, sorting, and searching
in the Contacts API, the Labels API, and the Extended Fields API.

## Query contacts: Supported filters, sorting, and search

The available options when calling 
[`queryContacts()`](wix-crm-backend/contacts/querycontacts)
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
[`ContactsQueryResult`](wix-crm-backend/contacts/contactsqueryresult) >
[`items`](wix-crm-backend/contacts/contactsqueryresult/items).

| Property                     | Supported Filters & Sorting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_id`                        | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome)                                                                                                                                                                                                                                                                                                                                                                                                       |
| `_createdDate`               | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`gt()`](wix-crm-backend/contacts/contactsquerybuilder/gt), [`lt()`](wix-crm-backend/contacts/contactsquerybuilder/lt), [`ge()`](wix-crm-backend/contacts/contactsquerybuilder/ge), [`le()`](wix-crm-backend/contacts/contactsquerybuilder/le), [`between()`](wix-crm-backend/contacts/contactsquerybuilder/between), [`ascending()`](wix-crm-backend/contacts/contactsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/contactsquerybuilder/descending) |
| `_updatedDate`               | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`gt()`](wix-crm-backend/contacts/contactsquerybuilder/gt), [`lt()`](wix-crm-backend/contacts/contactsquerybuilder/lt), [`ge()`](wix-crm-backend/contacts/contactsquerybuilder/ge), [`le()`](wix-crm-backend/contacts/contactsquerybuilder/le), [`between()`](wix-crm-backend/contacts/contactsquerybuilder/between)                                                                                                                                                       |
| `lastActivity.activityDate`  | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`gt()`](wix-crm-backend/contacts/contactsquerybuilder/gt), [`lt()`](wix-crm-backend/contacts/contactsquerybuilder/lt), [`ge()`](wix-crm-backend/contacts/contactsquerybuilder/ge), [`le()`](wix-crm-backend/contacts/contactsquerybuilder/le), [`between()`](wix-crm-backend/contacts/contactsquerybuilder/between), [`ascending()`](wix-crm-backend/contacts/contactsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/contactsquerybuilder/descending) |
| `primaryInfo.email`          | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome), [`startsWith()`](wix-crm-backend/contacts/contactsquerybuilder/startswith), [`ascending()`](wix-crm-backend/contacts/contactsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/contactsquerybuilder/descending)                                                                                                                                                                     |
| `primaryInfo.phone`          | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome), [`startsWith()`](wix-crm-backend/contacts/contactsquerybuilder/startswith)                                                                                                                                                                                                                                                                                                                           |
| `info.name.first`            | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome), [`startsWith()`](wix-crm-backend/contacts/contactsquerybuilder/startswith), [`ascending()`](wix-crm-backend/contacts/contactsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/contactsquerybuilder/descending)                                                                                                                                                                     |
| `info.name.last`             | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome), [`startsWith()`](wix-crm-backend/contacts/contactsquerybuilder/startswith), [`ascending()`](wix-crm-backend/contacts/contactsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/contactsquerybuilder/descending)                                                                                                                                                                     |
| `info.emails.email`          | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome), [`startsWith()`](wix-crm-backend/contacts/contactsquerybuilder/startswith)                                                                                                                                                                                                                                                                                                                           |
| `info.phones.phone`          | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome), [`startsWith()`](wix-crm-backend/contacts/contactsquerybuilder/startswith)                                                                                                                                                                                                                                                                                                                           |
| `info.addresses.street`      | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome), [`startsWith()`](wix-crm-backend/contacts/contactsquerybuilder/startswith)                                                                                                                                                                                                                                                                                                                           |
| `info.addresses.city`        | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome), [`startsWith()`](wix-crm-backend/contacts/contactsquerybuilder/startswith)                                                                                                                                                                                                                                                                                                                           |
| `info.addresses.subdivision` | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome),                                                                                                                                                                                                                                                                                                                                                                                                      |
| `info.addresses.country`     | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome),                                                                                                                                                                                                                                                                                                                                                                                                      |
| `info.company`               | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome), [`startsWith()`](wix-crm-backend/contacts/contactsquerybuilder/startswith), [`ascending()`](wix-crm-backend/contacts/contactsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/contactsquerybuilder/descending)                                                                                                                                                                     |
| `info.jobTitle`              | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome), [`startsWith()`](wix-crm-backend/contacts/contactsquerybuilder/startswith), [`ascending()`](wix-crm-backend/contacts/contactsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/contactsquerybuilder/descending)                                                                                                                                                                     |
| `info.birthdate`             | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`gt()`](wix-crm-backend/contacts/contactsquerybuilder/gt), [`lt()`](wix-crm-backend/contacts/contactsquerybuilder/lt), [`ge()`](wix-crm-backend/contacts/contactsquerybuilder/ge), [`le()`](wix-crm-backend/contacts/contactsquerybuilder/le), [`between()`](wix-crm-backend/contacts/contactsquerybuilder/between), [`ascending()`](wix-crm-backend/contacts/contactsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/contactsquerybuilder/descending) |
| `info.locale`                | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome),                                                                                                                                                                                                                                                                                                                                                                                                      |
| `info.labelKeys`             | [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome), [`hasAll()`](wix-crm-backend/contacts/contactsquerybuilder/hasall)                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

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
| `info.extendedFields.emailSubscriptions.deliverabilityStatus` | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq),[`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne),[`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome)   | `"VALID"`, `"BOUNCED"`, `"SPAM_COMPLAINT"`, `"NOT_SET"`, `"INACTIVE"`. |
| `info.extendedFields.emailSubscriptions.effectiveEmail`       | [`ascending()`](wix-crm-backend/contacts/contactsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/contactsquerybuilder/descending)                                             |                                                                        |
| `info.extendedFields.emailSubscriptions.subscriptionStatus`   | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome) | `"SUBSCRIBED"`, `"UNSUBSCRIBED"`, `"NOT_SET"`, `"PENDING"`.            |
| `info.extendedFields.members.membershipStatus`                | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome) | `"APPROVED"`, `"DENIED"`, `"PENDING"`, `"INACTIVE"`.                   |

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
| String                             | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`hasSome()`](wix-crm-backend/contacts/contactsquerybuilder/hassome), [`startsWith()`](wix-crm-backend/contacts/contactsquerybuilder/startswith), [`ascending()`](wix-crm-backend/contacts/contactsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/contactsquerybuilder/descending)                                                                                                                                                                     |
| Number                             | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`gt()`](wix-crm-backend/contacts/contactsquerybuilder/gt), [`lt()`](wix-crm-backend/contacts/contactsquerybuilder/lt), [`ge()`](wix-crm-backend/contacts/contactsquerybuilder/ge), [`le()`](wix-crm-backend/contacts/contactsquerybuilder/le), [`between()`](wix-crm-backend/contacts/contactsquerybuilder/between), [`ascending()`](wix-crm-backend/contacts/contactsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/contactsquerybuilder/descending) |
| Date string in `YYYY-MM-DD` format | [`eq()`](wix-crm-backend/contacts/contactsquerybuilder/eq), [`ne()`](wix-crm-backend/contacts/contactsquerybuilder/ne), [`gt()`](wix-crm-backend/contacts/contactsquerybuilder/gt), [`lt()`](wix-crm-backend/contacts/contactsquerybuilder/lt), [`ge()`](wix-crm-backend/contacts/contactsquerybuilder/ge), [`le()`](wix-crm-backend/contacts/contactsquerybuilder/le), [`between()`](wix-crm-backend/contacts/contactsquerybuilder/between), [`ascending()`](wix-crm-backend/contacts/contactsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/contactsquerybuilder/descending) |

## Query labels: Supported filters and sorting

This section covers the available options when calling
[`queryLabels()`](wix-crm-backend/contacts/querylabels).

The table below shows field support for filters and sorting
for the label object.

For a full description of the `Label` object, see
[`LabelsQueryResult`](wix-crm-backend/contacts/labelsqueryresult) >
[`items`](wix-crm-backend/contacts/labelsqueryresult/items).

| Property       | Supported Sorting &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_createdDate` | [`ascending()`](wix-crm-backend/contacts/labelsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/labelsquerybuilder/descending)                                                                                    |
| `_updatedDate` | [`ascending()`](wix-crm-backend/contacts/labelsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/labelsquerybuilder/descending)                                                                                    |
| `displayName`  | [`ascending()`](wix-crm-backend/contacts/labelsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/labelsquerybuilder/descending)                                                                                    |

## Query extended fields: Supported filters and sorting

This section covers the available options when calling
[`queryExtendedFields()`](wix-crm-backend/contacts/queryextendedfields).

The table below shows field support for filters and sorting
for the extended field object.

For a full description of the `ExtendedField` object, see
[`ExtendedFieldsQueryResult`](wix-crm-backend/contacts/extendedfieldsqueryresult) >
[`items`](wix-crm-backend/contacts/extendedfieldsqueryresult/items).

| Property       | Supported Sorting &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_createdDate` | [`ascending()`](wix-crm-backend/contacts/extendedfieldsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/extendedfieldsquerybuilder/descending)                                                                    |
| `_updatedDate` | [`ascending()`](wix-crm-backend/contacts/extendedfieldsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/extendedfieldsquerybuilder/descending)                                                                    |
| `displayName`  | [`ascending()`](wix-crm-backend/contacts/extendedfieldsquerybuilder/ascending), [`descending()`](wix-crm-backend/contacts/extendedfieldsquerybuilder/descending)                                                                    |
