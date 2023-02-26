

# Schema for Wix Search  





This article describes the Wix Blog fields you can [search](https://www.wix.com/velo/reference/wix-search.html#search), [sort](https://www.wix.com/velo/reference/wix-search.WixSearchBuilder.html#ascending), [filter](https://www.wix.com/velo/reference/wix-search.html#filter), and [apply facets](https://www.wix.com/velo/reference/wix-search.WixSearchBuilder.html#facets) to when using the [wix-search API](https://www.wix.com/velo/reference/wix-search.html).

To search Wix Blog posts on your site, set the search document type as `”Blog/Posts"`:

```javascript
wixSearch.search(phrase)  
  .documentType(“Blog/Posts")  
  .find()  
  .then( (results) => {  
    // handle the results
  } );  
```

> **Notes**
> The Blog fields supported by wix-search are not identical to the fields in your site's [Blog/Posts collection](https://support.wix.com/en/article/velo-wix-blog-posts-collection-fields)  


The following fields appear in each matching search result [document](https://www.wix.com/velo/reference/wix-search.WixSearchResult.html#documents) when searching Wix Blog services:

#### documentType   

**Description**: Document type that was searched. In this case, “Blog/Posts”.  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No  

#### \_id   

**Description**: The ID of the post.  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No  

#### title   

**Description**: The title of the post.  
**Type**: String  
**Can search the content of this field**: Yes  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No  

#### description   

**Description**: Description of the post.  
**Type**: String  
**Can search the content of this field**: Yes  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No  

#### url   

**Description**: Relative URL of the post page on your site.   
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No  

#### image   

**Description**: File source of the post’s cover image.  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### hashTags   

**Description**: List of hashtags in the post.  
**Type**: Array of Strings  
**Can search the content of this field**: No  
**Can facet**: Yes  
**Can sort**: No  
**Can filter**: hasSome, hasAll  

#### tags 

**Description**: List of tags in the post.  
**Type**: Array of Strings  
**Can search the content of this field**: Yes  
**Can facet**: Yes  
**Can sort**: Yes  
**Can filter**: hasSome, hasAll  

#### tagIds 

**Description**: List of tag IDs in the post.  
**Type**: Array of Strings  
**Can search the content of this field**: No 
**Can facet**: Yes  
**Can sort**: Yes 
**Can filter**: hasSome, hasAll

#### publishDate   

**Description**: Date and time the post was originally published.  
**Type**: Date  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: Yes  
**Can filter**: in, eq, ne, gt, ge, lt, le  

