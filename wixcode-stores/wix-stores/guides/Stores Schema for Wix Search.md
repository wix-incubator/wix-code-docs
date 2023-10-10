

# Schema for Wix Search





This article describes the Wix Store product fields you can [search](https://www.wix.com/velo/reference/wix-search.html#search), [sort](https://www.wix.com/velo/reference/wix-search.WixSearchBuilder.html#ascending), [filter](https://www.wix.com/velo/reference/wix-search.html#filter), and [apply facets](https://www.wix.com/velo/reference/wix-search.WixSearchBuilder.html#facets) to when using the [wix-search API](https://www.wix.com/velo/reference/wix-search.html).

To search Wix Store products on your site, set the search document type as `"Stores/Products"`:

```javascript
wixSearch.search(phrase)
  .documentType("Stores/Products")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

> **Note**
> The Stores/Products fields supported by wix-search are not identical to the fields in your site's [Stores/Products collection](https://support.wix.com/en/article/velo-wix-stores-products-collection-fields).

The following fields appear in each matching search result [document](/wix-search/wixsearchresult/documents) when searching Wix Store products:

#### documentType 

**Description**: Document type that was searched. In this case, "Stores/Products".  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### \_id 

**Description**: Product ID.  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### title 

**Description**: Product name.  
**Type**: String  
**Can search the content of this field**: Yes  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### description 

**Description**: Product description.  
**Type**: String  
**Can search the content of this field**: Yes  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### url 

**Description**: Relative URL of the product's page on your site.  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### image 

**Description**: File source of the main media image for this product.  
**Type**: String  
**Can search the content of this field**: No  
**Can facet**: No  
**Can sort**: No  
**Can filter**: No

#### sku 

**Description**: Product's stock keeping unit number.  
**Type**: String  
**Can search the content of this field**: Yes  
**Can facet**: Yes  
**Can sort**: Yes  
**Can filter**: in, eq, ne, gt, ge, lt, le 

#### inStock 

**Description**: Indicates whether the product is in stock.  
**Type**: Boolean  
**Can search the content of this field**: No  
**Can facet**: Yes  
**Can sort**: Yes  
**Can filter**: eq, ne 

#### options 

**Description**: Product options and choices.  
**Type**: Array of Strings  
**Can search the content of this field**: Yes  
**Can facet**: Yes  
**Can sort**: No  
**Can filter**: hasSome, hasAll 

The `options` array contains product option names (for example, `Color`) followed by the descriptions of the choices for that option (for example, `blue`, `black`). If there is more than one option for a product, the options and their choice descriptions are listed in sequence.

The following is an example of an `options` array for a product with 2 options: `Color` and `Size`:

```javascript
options: ["Color", "Orange", "Blue", "Size", "Small", "Medium", "Large"]
```

> **Note**
> Faceting products with more than 1 product option may return unexpected results. 

#### collections 

**Description**: Collections the product belongs to.  
**Type**: Array of Strings  
**Can search the content of this field**: Yes  
**Can facet**: Yes  
**Can sort**: No  
**Can filter**: hasSome, hasAll 

#### onSale 

**Description**: Indicates whether the product is on sale.  
**Type**: Boolean  
**Can search the content of this field**: No  
**Can facet**: Yes  
**Can sort**: Yes  
**Can filter**: eq, ne