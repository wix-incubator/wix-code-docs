<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->



# Schema for Wix Search





This article describes the Wix Booking fields you can [search](https://www.wix.com/velo/reference/wix-search.html#search), [sort](https://www.wix.com/velo/reference/wix-search.WixSearchBuilder.html#ascending), [filter](https://www.wix.com/velo/reference/wix-search.html#filter), and [apply facets](https://www.wix.com/velo/reference/wix-search.WixSearchBuilder.html#facets) to when using the [wix-search API](https://www.wix.com/velo/reference/wix-search.html).

To search Wix Booking services on your site, set the search document type as `"Bookings/Services"`:

```javascript
wixSearch.search(phrase)
  .documentType("Bookings/Services")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

> **Notes**
> The Bookings fields supported by wix-search are not identical to the fields in your site's [Bookings/Services collection](https://support.wix.com/en/article/velo-wix-bookings-services-collection-fields).

The following fields appear in each matching search result [document](https://www.wix.com/velo/reference/wix-search.WixSearchResult.html#documents) when searching Wix Booking services:

#### documentType 

**Description**: Document type that was searched. In this case, "Bookings/Services".  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### \_id 

**Description**: Service ID.  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### title 

**Description**: Service name.  
**Type**: String  
**Can search the content of this field**: Yes  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### description 

**Description**: Service description.  
**Type**: String  
**Can search the content of this field**: Yes  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### url 

**Description**: Service page's link.  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### image 

**Description**: File source of the image for this service.  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### category 

**Description**: Category associated with the service.  
**Type**: String  
**Can search the content of this field**: Yes  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No 

#### tagLine 

**Description**: Service's tagline (subtitle).  
**Type**: String  
**Can search the content of this field**: Yes  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### staffMembers 

**Description**: Staff members associated with the service.  
**Type**: Array of Strings  
**Can search the content of this field**: Yes  
**Can facet**: Yes  
**Can sort**: No  
**Can filter**: hasSome, hasAll 
