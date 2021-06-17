## Bundle Products

The Bundle Product package provides you with the ability to combine multiple products in your Wix Store and sell them as one package (bundle). A bundle contains child products. 

When a customer purchases a bundle, or if you make changes to a bundle’s inventory manually, the inventory for both the bundle and the child products will decrease. 

**Note**: This package does not currently support products for which you manage inventory based on the product's variants.


### Setup

Before using the package, set up the following:


1. Add a **Wix Store** to your site.
2. Navigate to the **Products** page in your site’s **[Dashboard](https://support.wix.com/en/article/accessing-your-sites-dashboard)**.
3. In addition to adding your products, add your bundles as if each bundle is one product. For example, let’s say you have a fitness equipment store and you want to create a yoga bundle with all yoga products, and a training bundle with all training products. Your bundles should look something like this:
   
   ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/07/c8b0a8f3-0336-4779-be58-545d06c65b81/63496c33-b10c-40a9-b192-28a87ad243b2.png 'image_bundle_inventory_1')

   ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/07/f7c9b3f1-2753-449f-8138-69cbe8118db2/e9f6feb8-c77f-4f16-98af-2df533fc1be1.png 'image_bundle_inventory_2')

   **Note**: As shown in the picture above, you can set the inventory to be a numerical quantity or In Stock / Out of Stock.

4. Create a database [collection](https://support.wix.com/en/article/about-your-content-collection-fields) called 'Bundles' on your live site (not just the sandbox) with the following fields. This data collection connects your bundle products to their child products. 
      *   Field 1: 
          + Field Name: Bundle Name
          + Field Key: bundleName
          + Field Type: text
      *   Field 2: 
          + Field Name: Bundle Product ID
          + Field Key: bundleProductId
          + Field Type: text
      *   Field 3: 
          + Field Name: Child Product IDs 
          + Field Key: childProductIds
          + Field Type: text
5. In the collection, create a row for each of your bundles with the following information:
      *   Field 1: The name of your bundle.
      *   Field 2: Your bundle product ID.To get your bundle product ID, go to the **Products** page in your site’s **Dashboard**. Click your product bundle and notice the URL in the browser. You can find your **bundle product ID** in the URL:
            
               https://manage.wix.com/dashboard/9685e33e-64b1-4bda-90ac-ccb454183093/store/products/product/YOUR_BUNDLE_PRODUCT_ID
        
      *   Field 3: Your child product IDs. Separate each child ID with a comma. To get your child product IDs, go to the **Products** page in your site **Dashboard**. Click a child product of the bundle you used in Field 2. Notice the URL in the browser. You can find your **child product ID** in the URL
            
               https://manage.wix.com/dashboard/9685e33e-64b1-4bda-90ac-ccb454183093/store/products/product/YOUR_CHILD_PRODUCT_ID
        
      Repeat this process to get all child product IDs belonging to the bundle product you added in Field 2.  

      **Note:** You can also get your **Product IDs** by going to the **Products** page in your site **Dashboard** and downloading the products as a CSV file. The **Product ID** is the string after the underscore: 


   ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/10/982fd3af-8324-48e1-bc97-487c9f6a2c68/c886648c-5ba7-4492-90e9-975aff0fa02b.png 'image_product_id_csv_download')


   Your collection should look something like this: 


   ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/07/fa151a3e-8987-4161-bf91-5cad441942d6/ab3fbfd3-8718-4f22-98f2-bb6298eaf911.png 'image_collection_child_product_ids')
   

### Package Content 

The following backend file is included in the package. Note that the functions in this file don’t need to be called, they will run automatically when the specified events occur. 


#### events.js 

The code in this file contains 2 events that make a change to your inventory when fired. This file contains the following functions:


* **[wixStores_onOrderPaid(event)](https://www.wix.com/velo/reference/wix-stores-backend/events/onorderpaid)**

  Decreases the inventory quantity of a given bundle when a customer submits payment for an order that includes a child product of that bundle. 

  Decreases the inventory quantity of a child product when a customer submits payment for an order that includes its parent bundle.

  ```js
  export async function wixStores_onOrderPaid(event)
  ```


* **[onInventoryVariantUpdated(event)](https://www.wix.com/velo/reference/wix-stores-backend/events/oninventoryvariantupdated)**

    Updates the inventory of a given bundle when you manually make changes to the inventory of its child products in your site’s **Dashboard**. You must refresh the inventory page to view the updates. 

    Note that you cannot make manual changes to the inventory of a bundle. The code will recalculate the quantity of the bundle inventory based on the inventory of its child products. 

    **Note**: You can set the inventory to be a numerical quantity or In Stock / Out of Stock.

    ```js
    export function wixStores_onInventoryVariantUpdated(event)
    ```



### How to Use the Package  

This section demonstrates how you can work with the package, and the different options for using the package functionalities. Note that this package does not require you to add any code. To use this package, you only need a Wix Store and a database collection. 


#### Create and Manage Bundles in your Wix Store  

Let’s use the example in the [Setup](#setup) section to explain how this package works and how to use it. Let’s say you have a fitness equipment store and you want to create a yoga bundle with all yoga products, and a training bundle with all training products. 



*   **Yoga bundle**: yoga mat, yoga block, water bottle.
*   **Training bundle**: kettlebell 10kg, trx straps, water bottle. 

There are 2 events that will make changes to your inventory: 



1. **When a customer submits payment for an order.**
  When a customer purchases a yoga mat, the inventory quantity of the yoga mat will decrease, and the yoga bundle inventory will decrease as well. Similarly, if a customer purchases a yoga bundle, the inventory quantity of the yoga bundle will decrease, and the yoga mat, yoga block, and water bottle inventory will decrease as well. 

2. **When you manually make changes to your inventory in your site’s Dashboard.** 
  When you manually make changes to the inventory of the yoga mat in your site’s **Dashboard**, the inventory of the yoga bundle will update as well. You must refresh the inventory page to view the changes. 
  
  Note that manual changes to the inventory of the yoga bundle will not change its inventory. The code will recalculate the quantity of the yoga bundle inventory based on the inventory of its child products only. 

  **Note**: Inventory can be a numerical quantity or In Stock / Out of Stock.



#### Managing Inventory Quantity for Bundles with the Same Child Product 

If a customer purchases a product, the inventory quantity of any bundle that includes this product will decrease as well. If a customer purchases a bundle, both the inventory quantity of the child products and other bundles that include any of these child products will decrease as well. 

In our example, notice that both bundles include the water bottle as a child product. If a customer purchases a water bottle, the inventory quantity of the yoga bundle and the training bundle will decrease as well. If a customer purchases a training bundle, the inventory quantity of the water bottle and the yoga bundle will decrease as well. 


#### Managing Inventory In Stock / Out of Stock

If a product is out of stock, any bundle that includes this product will be out of stock. If a bundle is out of stock, it means that one or more of its child products are out of stock. 

In this case, if the water bottle is out of stock, both the yoga bundle and the training bundle will be out of stock. If the training bundle is out of stock, it means that either the kettlebell 10kg, trx straps, and/or water bottle are out of stock. 


### Release Notes 

**1.0** Initial version.


### Tags 

ecommerce, bundle, stores, products, bundleProducts, inventory 
