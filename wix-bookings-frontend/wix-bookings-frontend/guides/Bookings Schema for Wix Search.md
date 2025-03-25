# Schema for Wix Search

This article describes the Wix Booking fields you can
search ([Velo](https://dev.wix.com/docs/velo/apis/wix-search/search)),
sort ([Velo](https://dev.wix.com/docs/velo/apis/wix-search/wix-search-builder/ascending)),
filter ([Velo](https://dev.wix.com/docs/velo/apis/wix-search/filter)),
and apply facets ([Velo](https://dev.wix.com/docs/velo/apis/wix-search/wix-search-builder/facets))
to when using the wix-search API ([Velo](https://dev.wix.com/docs/velo/apis/wix-search/introduction)).

To search Wix Booking services on the site, set the search document type as `"Bookings/Services"`:

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

The following fields appear in each matching search result document ([Velo](https://dev.wix.com/docs/velo/apis/wix-search/wix-search-result/documents)) when searching Wix Booking services:

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
