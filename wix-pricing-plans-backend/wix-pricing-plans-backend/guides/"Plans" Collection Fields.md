<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->



# "PaidPlans/Plans" Collection Fields







To use the Plans collection in code, refer to it as `"PaidPlans/Plans"`.

```javascript
wixData.query("PaidPlans/Plans")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the properties and fields in your Plans collection.

### Permissions 

The Plans collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone 
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Plans collection's permissions. 

### Fields 

> **Note:**
> This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard).

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### ID (\_id) 

**Description**: The unique pricing plan ID that was created by the server. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome, contains  
**Read-only**: Yes

#### Role ID (roleId) 

**Description**: The role ID to assign to the buyer of the plan after purchase.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Name (name) 

**Description**: The name of the pricing plan.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Tagline (tagline) 

**Description**: The tagline for the pricing plan.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Ribbon (ribbon) 

**Description**: The ribbon available for this pricing plan. The ribbon lets you show additional information about the plan, such as "New!"  
**Type**: Text  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Benefits (benefits) 

**Description**: Lists the benefits included in the plan as an array of strings.  
**Type**: Tags  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Price (price) 

**Description**: The price of the plan.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Currency (currency) 

**Description**: The plan's currency. Because plans have only one currency, this value is the same for all plans.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Recurring (recurring) 

**Description**: If the plan's payments are recurring (true) or one time only (false).  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Valid Until Canceled (validUntilCanceled) 

**Description**: If the plan is valid until the user explicitly cancels the payments (true).  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Period Unit (periodUnit) 

**Description**: The payment recurrence for the plan. Valid values are WEEK, MONTH, and YEAR.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Period Amount (periodAmount) 

**Description**: The plan is valid for this number of weeks, months, or years.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Primary (primary) 

**Description**: Indicates if the plan is the primary plan. When viewing pricing plans on the site, the primary plan is highlighted with a customizable ribbon.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne  
**Read-only**: Yes

#### Date Created (dateCreated) 

**Description**: Displays the date and time the plan was created.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, le, ge, lt, gt  
**Read-only**: Yes

#### Date Updated (dateUpdated) 

**Description**: Displays the date and time the plan was last modified.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, le, ge, lt, gt  
**Read-only**: Yes

#### Display Index (displayIndex) 

**Description**: The index of the plan in the order it is displayed in Manage Plans from the site's dashboard. The index of the left-most plan on the top row has the value 1, the next one has the value 2, and so on. As time passes, if plans are deleted, the indexes of the remaining plans are not renumbered. They continue to be displayed in Manage Plans in the same numeric order.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, le, ge, lt, gt  
**Read-only**: Yes

#### Slug (slug) 

**Description**: The plan's slug, which is its URL-friendly name that is unique across the site.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: No  
**Can be filtered**: Yes  
**Read-only**: Yes