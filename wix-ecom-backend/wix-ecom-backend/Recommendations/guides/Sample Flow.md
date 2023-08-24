# Sample Flow
This article shares a possible use case your site could support, as well as an example flow that could support the use case. You're certainly not limited to this use case, but it may be a helpful jumping-off point as you plan your app's implementation.


## Send emails to customers recommending related products 
To send emails to customers with item recommendations based on their most recent purchases from your Wix store, follow this basic flow:

1. [Query the Stores/Orders collection](https://www.wix.com/velo/reference/wix-stores-backend/%22orders%22-collection-fields#wix-stores-backend_%22orders%22-collection-fields_orders-collection-fields) on your site, using appropriate [filtering](https://www.wix.com/velo/reference/wix-data/filter) to obtain the most recent order by a customer (identified by their contact or member ID).
2. Record the `catalogItemId` from the first `lineItem`.
3. Call [`listAvailableAlgorithms()`](https://www.wix.com/velo/reference/wix-ecom-backend/recommendations/listavailablealgorithms) in the Recommendations API to get the `algorithmId` of the "Frequently bought together" algorithm.
4. Call [`getRecommendation()`](https://www.wix.com/velo/reference/wix-ecom-backend/recommendations/getrecommendation) in the Recommendations API with the `catalogItemId` from step 2 and the `algorithmId` from step 3. Use the Wix Stores app ID (`215238eb-22a5-4c36-9e7b-e7c08025e04e`) in the algorithm object.
5. For each item in the object returned by `getRecommendation()`, call [`getProduct()`](https://www.wix.com/velo/reference/wix-stores-v2/products/getproduct) in the Wix Stores Products API using the recommended item’s `catalogItemId`.
6. Using the information in the responses from `getProduct()`, generate an email with the relevant information from each item and send it to the customer.
7. Repeat steps 1-6 for each customer.

