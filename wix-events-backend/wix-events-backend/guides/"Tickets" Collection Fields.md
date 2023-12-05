<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->



# "Tickets" Collection Fields







To use the Events collection in code, refer to it as `"Events/Tickets"`.

```javascript
wixData.query("Events/Tickets")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your Tickets collection.

### Permissions 

The Events collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone 
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Tickets collection's permissions. 

### Fields 

> **Note:**
> This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard).

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### ID (\_id) 

**Description**: The ticket ID that was created by the server. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: No  
**Can be filtered**: is, is not  
**Read-only**: Yes

#### Name (name) 

**Description**: The ticket's name.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: is, is not, contains  
**Read-only**: Yes

#### Event (event) 

**Description**: The event that the ticket is valid for.  
**Type**: Reference to the Events/Events collection  
**Can connect to data**: Yes, to the referenced item's fields  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Description (description) 

**Description**: Description of the ticket which appears on the purchase page to give customers more details about what’s included in the ticket.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Price (price) 

**Description**: The ticket price.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes

#### Currency (currency) 

**Description**: The currency of the ticket price.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Tax Amount (tax) 

**Description**: The tax charged for the ticket.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Fee Amount (fee) 

**Description**: The fee for the ticket.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Limit Per Checkout (limitPerCheckout) 

**Description**: Maximum number of tickets that can be checked out at once.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Remaining Tickets (remainingTickets) 

**Description**: The number of remaining tickets.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes  
**Notes**: The maximum value in this field is 20. If there are more than 20 tickets remaining, the value in this field will be 20.

#### Policy (policy) 

**Description**: The ticket policy which appears on the bottom of the ticket.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Final Price (finalPrice) 

**Description**: The final price for the ticket.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes