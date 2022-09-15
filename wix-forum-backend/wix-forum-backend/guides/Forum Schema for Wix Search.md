

# Schema for Wix Search





This article describes the Wix Forum product fields you can [search](https://www.wix.com/velo/reference/wix-search.html#search), [sort](https://www.wix.com/velo/reference/wix-search.WixSearchBuilder.html#ascending), [filter](https://www.wix.com/velo/reference/wix-search.html#filter), and [apply facets](https://www.wix.com/velo/reference/wix-search.WixSearchBuilder.html#facets) to when using the [wix-search API](https://www.wix.com/velo/reference/wix-search.html).

To search Wix Forum posts and comments on your site, set the search document type as `"Forum/Content"`:

```javascript
wixSearch.search(phrase)
  .documentType("Forum/Content")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

> **Note**
> The Forum fields supported by wix-search are not identical to the fields in your site's [Forum/Posts](https://support.wix.com/en/article/velo-wix-forum-posts-collection-fields) and [Forum/Comments](https://support.wix.com/en/article/velo-wix-forum-comments-collection-fields) collections.

The following fields appear in each matching search result [document](/wix-search/wixsearchresult/documents) when searching Wix Forum content:

#### documentType 

**Description**: Document type that was searched. In this case, "Forum/Content".  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### \_id 

**Description**: Post or comment ID.  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### title 

**Description**: Post title.  
**Type**: String  
**Can search the content of this field**: Yes  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### description 

**Description**: Text of the post or comment.  
**Type**: String  
**Can search the content of this field**: Yes  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### url 

**Description**: Relative URL of the post page on your site. For comments, the URL points to the location of the comment on your post page.  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### image 

**Description**: File source of the post image.  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### contentType 

**Description**: Indicates whether the document is a post or a comment. Value can be "POST" or "COMMENT".  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: eq, ne

You can use this field to filter search results so that only Forum posts or comments are returned. For example, the following code example demonstrates how to search only for Forum comments and not posts: 

```javascript
wixSearch.search(phrase)
  .documentType("Forum/Posts")
  .eq("contentType", "COMMENT")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

#### postId 

**Description**: ID of the post the comment is associated with. Only relevant for comments.  
**Type**: String   
**Can search the content of this field**: No  
**Can facet**: Yes  
**Can sort**: Yes  
**Can filter**: in, eq, ne, gt, ge, lt, le 

#### ownerId 

**Description**: Unique ID of the site visitor who posted the post or comment.  
**Type**: String   
**Can search the content of this field**: No  
**Can facet**: Yes  
**Can sort**: Yes  
**Can filter**: in, eq, ne, gt, ge, lt, le 

#### categoryId 

**Description**: ID of the category associated with the post.  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: Yes  
**Can sort**: No  
**Can filter**: in, eq, ne, gt, ge, lt, le 

#### hashTags 

**Description**: Hashtags in the post.  
**Type**: Array of Strings  
**Can search the content of this field**: No  
**Can facet**: Yes  
**Can sort**: No  
**Can filter**: hasSome, hasAll

#### lastActivityDate 

**Description**: Date and time of the last action performed on the post or comment.  
**Type**: Date  
**Can search the content of this field**: No  
**Can facet**: Yes  
**Can sort**: Yes  
**Can filter**: in, eq, ne, gt, ge, lt, le 

#### likeCount 

**Description**: Number of likes the post or comment received.  
**Type**: Number  
**Can search the content of this field**: No  
**Can facet**: Yes  
**Can sort**: Yes  
**Can filter**: in, eq, ne, gt, ge, lt, le

#### viewCount 

**Description**: Number of views the post received.  
**Type**: Number  
**Can search the content of this field**: No  
**Can facet**: Yes  
**Can sort**: Yes  
**Can filter**: in, eq, ne, gt, ge, lt, le

#### totalComments 

**Description**: Number of comments the post received.  
**Type**: Number  
**Can search the content of this field**: No  
**Can facet**: Yes  
**Can sort**: Yes  
**Can filter**: in, eq, ne, gt, ge, lt, le