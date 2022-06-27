# Hacked! - Resolving Throttled and Timed-out Requests
If the Monitoring dashboard indicates that backend requests to your site are being throttled or timing out, you can take the following steps to try and resolve the issue.
## Identify the Error
The **Failed requests** panel appears in the **Breakdown** section of the Monitoring dashboard. It displays the number of failed requests made to your site over time. You can use it to identify when requests to your site failed and whether the requests were throttled or timed out. 
![](https://wixmp-cf73ebafe9197d9852284046.wixmp.com/2022-05-19_15-56-45.png)  
The **Top backend functions** panel also appears in the dashboard’s Breakdown section. It lists your site’s most frequently called backend functions. For each function, the total number of throttled and timed-out requests are displayed.
![](https://wixmp-cf73ebafe9197d9852284046.wixmp.com/troubleshooting-6.png)You can also [connect your site](https://support.wix.com/en/article/velo-connecting-site-monitoring-events-to-google-operations-formerly-stackdriver) to Google Operations to see logs of timed-out and throttled requests and identify which function caused them. This tool allows you to see logs in real time and stores a history of your site’s logs that you can view at any time.
If backend code on your site has a high number of throttled or timed-out requests, one of the suggestions below may help.
## Troubleshoot
Once you have identified the type of error happening on your site and the code that’s causing it, you can try to resolve the error.
### Timed-Out requests
If requests to your backend functions are timing out, it means your requests are exceeding the [time quota](https://support.wix.com/en/article/velo-about-backend-quotas#time). You can try to reduce the running time of your code using the following methods:
- **Identify parts of your code that are running for too long **Identify the parts of your code that are taking too long to run, and optimize them to improve performance. You can do this by including console logs before and after the code you want to test, and then checking to see how long it takes to run.<details><summary>See an example </summary>
  To test your code’s running time using console logs, do the following:
  
  Explanation of some stuff happening here in the collapsible.
  
  Possibly some more explanations of thingies.</details>

- **Check your 3rd-party APIs**

  If you are using 3rd-party APIs on your site, make sure they are not too slow. For example, if you notice an API call to a 3rd-party is taking a few seconds to run, break it into smaller calls or see if you can upgrade your 3rd-party account to improve performance.
- **Process data in chunks**

  If you are running a slow process or loading a large amount of data, either [use pagination](https://support.wix.com/en/article/adding-and-setting-up-a-pagination-bar) or [process your data in chunks](https://support.wix.com/en/article/velo-best-practices-for-improving-performance-in-wix-sites-with-data). Make sure not to create too many requests, as there is also a [quota on requests per minute](https://support.wix.com/en/article/velo-about-backend-limitations#requests-per-minute-rpm).
- **Avoid repetition**

  Avoid repeating large database requests or complex calculations. If you can, [cache the result](https://support.wix.com/en/article/site-performance-caching-pages-to-optimize-loading-speed) or [aggregate database queries](https://support.wix.com/en/article/velo-working-with-aggregations-in-the-data-api).
- **Optimize query times**

  If you’re querying a large data collection, you might want to consider adding an index to optimize query times. To do so, [contact support](https://support.wix.com/en/article/velo-about-backend-quotas#contact-support). 
