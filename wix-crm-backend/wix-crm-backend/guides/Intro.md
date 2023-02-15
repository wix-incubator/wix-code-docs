 When a new visitor first shares some of their contact information with your site,
 they're added to your
* [Contact List](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&ctionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fcontacts).
 Once that happens, their details are available through the Contacts API.

 Some examples of how a person can become a contact are:

 - A site visitor fills in a form with their contact details.
 - A site visitor signs up as a member of the site.
 - A site collaborator
   [imports a contact](https://support.wix.com/en/article/importing-contacts-by-uploading-a-csv-file-1066522) or
   [adds a contact manually](https://support.wix.com/en/article/manually-adding-contacts).
 - A 3rd-party app
   [creates a contact](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4/create-contact)
   with the Contacts API.

 Learn more about how you can
 [manage your contact list](https://support.wix.com/en/article/about-your-contact-list).

 With the Contacts APIs, you can:

 - Manage site contacts.
 - Manage contact labels.
 - Manage extended field definitions.

 To use the Contacts API,
 import `{ contacts }` from wix-crm-backend:

 ```js
 import { contacts } from 'wix-crm-backend';
 ```

 ## Before you begin

 It's important to note this point before coding:

 If a contact is also a site member or site contributor,
 the contact cannot be deleted.
 The related site member or site contributor
 must first be deleted,
 and then the contact can also be deleted.

 ## Terminology

 - **Extended fields**: Additional properties that store additional contact information.
   A contact's extended field data is available
   in the contact object under `info.extendedFields`.
   Extended field definitions can be created and managed with
   the extended field functions such as
   [`findOrCreateExtendedField()`](findorcreateextendedfield).

   There are 2 types of extended fields:

   - **System fields**: Extended fields added by Wix apps.
     System fields often enrich contacts with data from Wix apps,
     such as Wix Stores or Wix Members.
     System fields cannot be renamed and are typically read-only.
   - **Custom fields**: Extended fields added by site collaborators or 3rd-party apps.
     Custom fields can be renamed,
     and their data can be written by any site collaborators or 3rd-party app.

 - **Labels**: Tags that help site contributors categorize and organize their contacts.
   Labels can be system-defined or user-defined.
   You can manage a site's labels with
   the label functions such as
   [`findOrCreateLabel()`](findorcreatelabel).
   A contact's assigned labels are available
   in the contact object under `info.labelKeys`.

