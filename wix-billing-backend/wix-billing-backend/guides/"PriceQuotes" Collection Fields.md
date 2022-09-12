

# "PriceQuotes" Collection Fields







To use the PriceQuotes collection in code, refer to it as `"Billing/PriceQuotes"`.

```javascript
wixData.query("Billing/PriceQuotes")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your PriceQuotes collection. 

### Permissions 

The PriceQuotes collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone 
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the PriceQuotes collection permissions. 

### Fields 

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### ID (\_id) 

**Description**: The ID of the price quote. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Version (version) 

**Description**: The version of the invoice.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Status (status) 

**Description**: The price quote's status.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes  
**Notes**: One of:

-   "Draft"
-   "Sent"
-   "Processing"
-   "Accepted"
-   "Rejected"
-   "Expired"
-   "Void"
-   "Deleted"
-   "Invoiced"

#### Number (number) 

**Description**: Number of the price quote, unique within your site.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes

#### Title (title) 

**Description**: Price quote title.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes

#### Currency Code (currencyCode) 

**Description**: Code representing the price quote's currency.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Customer (customer) 

**Description**: Customer listed on the price quote.  
**Type**: Object  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes. Can sort by name.  
**Can be filtered**: No  
**Read-only**: Yes

```json
{  
  "contactId": "4f7c6637-0657-4696-a00b-9bc2ae4e035d",
  "email": "john.doe@somedomain.com",
  "address": {  
    "street": "235 W 23rd St",
    "city": "New York",
    "zip": "10011",
    "state": "NY",
    "country": "USA"
  },
  "phone": "5555555555",
  "company": "Some Company",
  "fullName": "John Doe",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### Was Sent (wasSent) 

**Description**: Whether the price quote has been sent to the customer.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Total (total) 

**Description**: Price quote total.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes

#### Invoice (invoice) 

**Description**: Invoice related to the price quote.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Issue Date (issueDate) 

**Description**: Date the price quote was issued.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes

#### Valid Through Date (validThroughDate) 

**Description**: Date the price quote is valid through.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes

#### Acceptance Date (acceptanceDate) 

**Description**: Date the price quote was accepted.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes

#### Last Seen Date (lastSeenDate) 

**Description**: Date the invoice was last seen.  
**Type**: Date  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Source (source) 

**Description**: Source that triggered the action. For example, "stores".   
**Type**: Text   
**Can connect to data**: Yes   
**Can use in dynamic page URL**: No   
**Can be sorted**: No   
**Can be filtered**: No   
**Read-only**: Yes

#### SourceRefID (sourceRefId) 

**Description**: ID of the trigger source. For example, an order ID.   
**Type**: Text   
**Can connect to data**: Yes   
**Can use in dynamic page URL**: No   
**Can be sorted**: No   
**Can be filtered**: No   
**Read-only**: Yes