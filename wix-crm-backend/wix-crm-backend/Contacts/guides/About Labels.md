# About Labels

Labels allow site collaborators to segment contacts in their Contact List.
Contact labels are useful for targeting specific audiences
for email campaigns or bulk actions.

You can manage your site's label definitions with these functions:

- To define new label:
  [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
- To rename a label:
  [`renameLabel()`](wix-crm-backend/contacts/renamelabel)
- To delete a label:
  [`deleteLabel()`](wix-crm-backend/contacts/deletelabel)
- To view label definitions:
  [`getLabel()`](wix-crm-backend/contacts/getlabel),
  [`queryLabels()`](wix-crm-backend/contacts/querylabels).

The responses from the above functions
can be used to [query contacts](querycontacts)
in subsequent API requests.

For more information on how labels are used,
see these Wix Help Center articles:

- [Adding Labels to Contacts in Your Contact List](https://support.wix.com/en/article/adding-labels-to-contacts-in-your-contact-list)
- [Predefined Contact Labels](https://support.wix.com/en/article/predefined-contact-labels)
- [Creating Contact Labels](https://support.wix.com/en/article/creating-contact-labels)
