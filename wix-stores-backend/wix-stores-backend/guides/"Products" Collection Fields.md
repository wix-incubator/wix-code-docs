<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->



# "Products" Collection Fields







To use the Products collection in code, refer to it as `"Stores/Products"`.

```javascript
// Query all products
wixData.query("Stores/Products")
  .find()
  .then((results) => {
    // handle the results
  });

// Query all products, including variants and hidden products (optional)
wixData.query("Stores/Products")
  .find({
    appOptions: {
      // Include product variants in the query. Default is `false`.
      includeVariants: true,
      // Include hidden products in the query. Default is `false`.
      includeHiddenProducts: true
    }
  })
  .then((results) => {
    // handle the results
  });
```

This document describes the permissions and fields in your Products collection. 





> **Important:**
> -   You can query up to 100 items from the Products collection. Trying to query more than 100 items by raising the wix-data [limit](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#limit) will result in an error.
> -   You can use up to 5 filters in one query. This limit can be extended by using the 'and' operator to combine queries.



### Permissions 

The Products collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone 
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Products collection's permissions. 

### Fields 

> **Note:**
> This app collection contains read-only fields that cannot be managed from the collection. You can update the fields from the relevant app in your site’s [dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard).

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### ID (\_id) 

**Description**: The product ID (GUID) that was created by the server. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, contains, startsWith  
**Read-only**: Yes

#### Name (name) 

**Description**: The name of the product.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No
**Can be sorted**: Yes
**Can be filtered**: eq, ne, hasSome, contains, startsWith  
**Read-only**: Yes

#### Updated Date (\_updatedDate) 

**Description**: Date and time the product was last changed.  
**Type**: Date  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte  
**Read-only**: Yes

#### Description (description) 

**Description**: The product description in rich text.  
**Type**: Rich text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome, contains, startsWith  
**Read-only**: Yes

#### Main Media (mainMedia) 

**Description**: Displays the main media item (image or video) for this product as it appears in the Store Manager.  
**Type**: Image  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Media Items (mediaItems) 

**Description**: Lists all the media items available for this product in an array of JSON objects.  
**Type**: Media Gallery
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No
**Read-only**: Yes

```javascript
[
  {
    type: "Image",
    src: "wix:image://v1/68d3a9_1de7529c444b4c9eb38401f8efe0cad2.jpg/flowers.jpg/#originWidth=1970&originHeight=1120",
    title: "title",
    description: "whatever first line\nthe second line.",
    link: "https://www.whatever.com"
  },
  {
    type: "Video",
    src: "wix:video://v1/11062b_03c50f8fe4a34cc297a984e483a282ef/simpsons.mov#posterUri=96fbec_52cd5b00f7fd48e0a83bc1fb1dfb06ea.jpg &posterWidth=1920&posterHeight=1080",
    title: "title",
    description: "whatever first line\nthe second line.",
    link: "https://www.whatever.com",
    thumbnail: "wix:image://v1/68d3a9_1de7529c444b4c9eb38401f8efe0cad2.jpg/flowers.jpg/#originWidth=1970&originHeight=1120"
  }
]
```

#### SKU (sku) 

**Description**: The product's stock-keeping unit number.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes 
**Can be filtered**: Yes
**Read-only**: Yes

#### Ribbon (ribbon) 

**Description**: The product's ribbon. Used to highlight relevant information about a product. For example, `"New Arrival"` or `"5 items left"`.

**Note**: This field replaces the deprecated \`ribbons\` field.  
**Type**: Text  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: No

#### Currency (currency) 

**Description**: The product's currency. Because stores only have one currency, this value is the same for all products.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Price (price) 

**Description**: The product's price.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, lt, lte, gt, gte  
**Read-only**: Yes

#### Discounted Price (discountedPrice) 

**Description**: The discounted price, if any. If no discount is configured, the full price is displayed.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Formatted Price (formattedPrice) 

**Description**: The price formatted with the currency (e.g., $20).  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Formatted Discounted Price (formattedDiscountedPrice) 

**Description**: The discounted price formatted with the currency (e.g., $15).  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Price Per Unit (pricePerUnit) 

**Description**: The product's base price per unit, automatically calculated based on provided pricePerUnitData (e.g., 0.3).  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes

#### Formatted Price Per Unit (formattedPricePerUnit) 

**Description**: The product's base price per unit, formatted with the currency (e.g., $0.30)  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Price Per Unit Data (pricePerUnitData) 

**Description**: Price per unit quantities and measurement units.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: No

```javascript
{
  "totalQuantity": 1,
  "totalMeasurementUnit": "KG",
  "baseQuantity": 100,
  "baseMeasurementUnit": "G"
}
```

#### Track Inventory (trackInventory) 

**Description**: Indicates whether inventory is tracked for this product.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### In Stock (inStock) 

**Description**: Indicates whether the product is in stock.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Quantity In Stock (quantityInStock) 

**Description**: The number of items currently in stock. Only relevant for products whose "TrackInventory" field is "True".  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Additional Info Sections (additionalInfoSections) 

**Description**: Displays the Additional Info sections you have in your store in an array of JSON objects.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

```javascript
[
  {
    "title": "PRODUCT INFO",
    "description": "I'm a product detail."
  },
  ...
]
```

#### Product Options (productOptions) 

**Description**: Displays the defined product options and choices as a complex JSON object. Also supports easy querying and filtering.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

You can query the Products collection and filter datasets connected to the collection based on the product options you have defined in your store. The product options are stored in a complex JSON object, with the choices for each option stored as an array of objects (see below). Rather than searching through each choice, you can use special syntax that only requires the product option name and the values of choices available for that option. You can filter this field using these functions: eq, ne, hasSome, hasAll.

For example, if you have a product option called "Size," you can use `productOptions.size.value` in your code (note that the case of the name doesn't matter). If you have a product option called "Color," you use `productOptions.color.value`. You can also use any custom options you may have defined. The name you use is the name of the option in your store.

```javascript
// filter a dataset by color

import wixData from 'wix-data';

$w('#myDataset').setFilter(wixData.filter()
    .hasSome('productOptions.color.value', ['#0000ff', ...])
)
```

```javascript
// query the "Stores/Products" collection by color

import wixData from 'wix-data';

wixData.query('Stores/Products')
   .hasSome('productOptions.color.value', ['#0000ff', ...])
   .find()
   .then(console.log)
```

Format of the JSON object

```javascript
{
  "Option1": 
  {
    "optionType": "color",
    "name": "Option1",
    "choices": 
    [
      {
        "value": "#0000ff",
        "mainMedia": "missing-media.png",
        "mediaItems": [],
        "inStock": true,
        "visible": true
      }
    ]
    ...
  },
  "Option2":
  {
    "optionType": "drop_down",
    "name": "Size",
    "choices":
    [
      {
        "value": "Large",
        "mainMedia": "wix:image://v1/anImage.jpg/file.jpg#originWidth=1000&originHeight=1000",
        "mediaItems": 
        [
          {
            "id": "anImage.jpg",
            "src": "wix:image://v1/anImage.jpg/file.jpg#originWidth=1000&originHeight=1000",
            "description": "",
            "title": "title",
            "type": "Image"
          },
          ...
        ]
        "inStock": true,
        "visible": true
      },
      ...
    ]
  }
}
```

#### Product Page Url (productPageUrl) 

**Description**: Displays the URL for the product's page on your site.  
**Type**: URL  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Manage Variants (manageVariants) 

**Description**: Indicates whether product variants are managed for this store.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Custom Text Fields (customTextFields) 

**Description**: Displays any custom fields you may have set up in an array of JSON objects.  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

```javascript
[
  {
    "title": "custom text",
    "maxLength": 500,
    "mandatory": true
  }
  ...
]
```

#### Product Type (productType) 

**Description**:The type of product (physical or digital).  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, contains, startsWith  
**Read-only**: Yes

#### Slug (slug) 

**Description**: The product's slug, which is its URL-friendly name that is unique across the store.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, hasSome, contains, startsWith  
**Read-only**: Yes

#### Weight (weight) 

**Description**: The product's weight.  
**Type**: Number  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Collections (collections) 

**Description**: The collections the product belongs to.  
**Type**: Reference (Multiple Items)  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: hasSome  
**Read-only**: Yes

#### Inventory Item (inventoryItemId) 

**Description**: The item's ID in the Stores/InventoryItems collection that corresponds to the product.  
**Type**: Text  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Discount (discount) 

**Description**: Discount deducted from the product's original price.
**Type**: JSON
**Can connect to data**: No
**Can use in dynamic page URL**: No
**Can be sorted**: No
**Can be filtered**: No
**Read-only**: No
**Note:** "type" is one of the following:
-   "NONE": Pass this value to remove a discount.
-   "AMOUNT": Discount amount. In the example below, the discount is 5 ($ / € / £ / ¥ / etc.), depending on the [product's currency](https://support.wix.com/en/article/corvid-wix-stores-products-collection-fields#currency-currency).
-   "PERCENT": Discount is a percentage.

```javascript
{
  "type": "AMOUNT",
  "value": 5
}
```

#### SEO Data (seoData) 

**Description**: Lists any custom SEO data for the product as an array of SEO tag JSON objects. [Learn more.](https://support.wix.com/en/search?term=seo)  
**Type**: JSON  
**Can connect to data**: No  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: No  

```javascript
{
  "tags": [
    {
      "type": "title",
      "children": "Indonesian Blend",
      "custom": false,
      "disabled": false
    },
    {
      "type": "meta",
      "props": {
        "name": "description",
        "content": "Half Java Arabica, half Bali Robusta - big flavor with a biggish kick."
      },
      "children": "",
      "custom": false,
      "disabled": false
    },
    {
      "type": "meta",
      "props": {
        "name": "robots",
        "content": "index"
      },
      "children": "",
      "custom": false,
      "disabled": false
    }
    ...
  ]
}
```

#### Brand (brand) 

**Description**: Product brand.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: Yes  
**Read-only**: Yes  