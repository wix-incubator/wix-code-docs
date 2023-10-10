<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->



# About Data Quotas

Wix places quotas on data requests made by your site. These quotas affect the processing time and volume of requests that sites can make, as well as the overall collection storage a site can have. Data quotas apply to anything making data requests on your site, including the [Content Management System (CMS)](https://support.wix.com/en/article/about-the-content-manager-7160473), [Datasets](https://support.wix.com/en/article/about-datasets-6368396), [Wix Forms](https://support.wix.com/en/article/wix-forms-an-overview), and Velo’s [Wix Data API](/wix-data). This article focuses on how these quotas work when using Velo.

If data requests from your Velo code are not behaving as expected, your site may be exceeding one of the quotas. Some of these quotas can be increased. [Contact support](https://support.wix.com/en/article/velo-about-data-quotas#contact-support) for more information.

## Quota Overview 

| Name | Limit | Can it be increased? |
| --- | --- | --- |
| Requests Per Minute | Read: 3000 / minute<br>Write: 1500 / minute | Yes |
| Individual Request Timeout | 5 seconds | No |
| Collection Storage | 10 GB | Yes |

## Requests Per Minute 

Wix limits the number of read and write requests you can make from your site per minute. The maximum number for read requests is 3000 and the maximum for write requests is 1500. We can increase these quotas in certain cases. To find out more, [contact support](#contact-support).

The following API functions count as 1 request towards the read quota:

- [get](/wix-data/get)
- [find](/wix-data/wixdataquery/find)
- [count](/wix-data/wixdataquery/count)
- [distinct](/wix-data/wixdataquery/distinct)
- [aggregate](/wix-data/aggregate)
- [isReferenced](/wix-data/isreferenced)
- [queryReferenced](/wix-data/queryreferenced)
- [include](/wix-data/wixdataquery/include)

The following API functions count as 1 request towards the write quota:

- [insert](/wix-data/insert)
- [bulkInsert](/wix-data/bulkinsert)
- [update](/wix-data/update)
- [bulkUpdate](/wix-data/bulkupdate)
- [save](/wix-data/save)
- [bulkSave](/wix-data/bulksave)
- [remove](/wix-data/remove)
- [bulkRemove](/wix-data/bulkremove)
- [insertReference](/wix-data/insertreference)
- [removeReference](/wix-data/removereference)
- [replaceReferences](/wix-data/replacereferences)

> **Note**
> Each use of [include](/wix-data/wixdataquery/include) in a query counts towards the request quota. For example, the following query counts as 3 read requests:

```javascript
  wixData.query(‘Movies’)
    .include(‘director’)
    .include(‘studio’)
    .find()
```

For each request that exceeds the quota, the request fails and the following error appears in your [site log](https://support.wix.com/en/article/velo-about-site-monitoring):

`
WDE0014: Requests per minute quota exceeded.
`

### What can I do? 

You can take the following steps to try and reduce the number of data requests in your code:

-   **Use the ‘bulk’ functions**
    If you are inserting or updating multiple items, use the bulkInsert and bulkUpdate functions instead of writing each item individually. These functions only count as 1 request toward the quota.
-   **Only make requests when you need the data**  
    Don’t make requests for data you don’t use. For example, if you store extra store product data in a separate collection, only query this collection when you need the data.
-   **Contact support**  
    [Contact support](#contact-support) to ask for more resources.

## Individual Request Timeout 

Each data request you make from your site can run for up to 5 seconds. After this, the request times out and the following error message appears in your [site log](https://support.wix.com/en/article/velo-about-site-monitoring):

`
WDE0028: Operation time limit exceeded.
`

### What can I do? 

You can take the following steps to try and reduce the processing time of individual requests:

-   **Process data in chunks**
    Timeouts can happen when you process too much data with one request. Breaking your request into smaller pieces means that each individual one will complete before the time limit.
-   **Only request data you need**
    Avoid fetching more items from your collection than you need at one time. Also avoid including reference items in your queries if you don’t need their data. Both of these increase processing time.
-   **Use indexes**
    Querying with an index is faster than querying items directly. All **\_id** and **\_createdDate** fields are indexed by default.
-   **Use an external database**
    The request timeout quota doesn't apply to external databases. If none of the other options works for you, store your data in an external database and [integrate it with your site](https://support.wix.com/en/article/velo-adding-and-deleting-an-external-database-collection). You can still access this data using Velo and the Wix Data API.
## Collection Storage 

The overall amount of collection storage for each Wix site is 10 GB. This quota only includes data stored in collections. It does not include media or other files stored on your site, which have [separate limits](https://support.wix.com/en/article/about-storage-and-bandwidth). Documents and multimedia content referenced from a collection are also not included. We can increase the storage quota in certain cases. To find out more, [contact support](#contact-support).

If you try to add data to a collection once you have reached the 10 GB quota, the data is not added and the following error message appears in your [site log](https://support.wix.com/en/article/velo-about-site-monitoring):

`
WDE0091: Database quota exceeded. Delete some data and try again.
`

> **Note**
> If your site exceeds the quota and you delete data to free up space, it may take up to 24 hours before you can add new data to your collections.

#### Other Storage Quotas 

-   Each Wix site can have a maximum of 1000 collections.
-   The maximum size for a single collection item is 512 KB. If you try to add an item larger than this to a collection, the following error message appears in your site log:  
    `WDE0009: Document is too large.`
-   There are also some [limits](https://support.wix.com/en/article/field-type-support-and-limitations-in-the-content-manager) that are specific to certain field types.

### What can I do? 

You can take the following steps to try and reduce the amount of storage your site uses:

-   **Delete data you don’t need**
    Make sure your collections only contain data that you need for your site.
-   **Use an external database**
    The collection storage quota doesn't apply to external databases. If none of the other options works for you, store your data in an external database and [integrate it with your site](https://support.wix.com/en/article/velo-adding-and-deleting-an-external-database-collection). You can still access this data using Velo and the Wix Data API.
-   **Contact support**
    [Contact support](#contact-support) to ask for more resources.

## Contact Support 

If your site is exceeding one of the quotas, you can contact support and ask for more resources.

1.  Open the [Contact Wix](https://www.wix.com/contact) chatbot.
2.  Select **Editor, Editor X, ADI & Live Sites**.  
3.  Select **Velo**.  
4.  Select your coding level.
5.  Select **There's an issue with my code**.
6.  Select **Contact an Expert**.
7.  Select the site that needs more resources.
8.  Paste the code that's causing the data quota error into the text box, and click **Send**.
9.  In the text box, describe the issue you're having with your site and which quota you need to increase.
10.  Click **Send**.

