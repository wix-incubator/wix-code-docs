## GCP Cloud Trace Integration

The GCP Cloud Trace Integration package provides you with the ability to monitor and display your Wix backend operations in Google Cloud Platform’s Cloud Trace. You can trace latencies in a waterfall graph, with a root [span](https://open-telemetry.github.io/opentelemetry-js-api/interfaces/span.html) for displaying an operation’s total run time, and a breakdown of its child spans for displaying individual run times.

![google trace image](https://static.wixstatic.com/media/c569b3_90e354bbe2dc4038b0d73d9c8cc61a98~mv2.png)

In the image above, we demonstrate how you can use this package to trace a single backend call to a web module using the GCP Cloud Trace tool.

* We show a waterfall graph displaying the root span (top span) and the child spans of internal operations. 
* Notice the root span’s total run time at 1.486 sec, and the child span operations such as a call to the Wix Members API, Wix Data API, and a call to the external service using fetch. 
* We annotate the spans and waterfall with additional information by adding events to the trace and attributes to each span.


You can see the code for the generated trace below. To better understand both the image above and the code example below, note the following definitions:
* **trace:** Represents a single backend call to the web module. In our example, this is the `search()` function. 
* **span:** The trace can be divided into different operations, which represent a single piece of the trace workflow. There are 2 types of spans: 
  * **root span:** Each trace has a single top-level span. It can contain child spans. In our example, the root span is the ‘search action’ span. We call the `traceRoot()` function to trace the root span. 
  * **child span:** Operations inside the root span. Our example contains following child spans:
  The `wixDataTraced.insert()` function. We call the `traceModule()` function to trace the `wix-data` module.
  The `wixMembersBackendTraced.currentMember.getRoles()` function. We call the `traceModule()` function to trace the `wix-members-backend` module.
  Fetch operation to thecocktaildb.com endpoint called ‘searching thecocktaildb.com’. We call the `traceChild()` function to trace this child span separately from the modules. 
* **events:** An event is a message on a span that represents some activity during its lifetime. In our example, the event triggers when the action of inserting data is completed.
* **attributes:** Used to effectively describe and observe each span/operation to help in the tracing process. In our example, we use it to define which span is related to which search query parameter. 

```javascript
import { traceModule, traceRoot, traceChild, currentSpan } from '@velo/gcp-cloud-trace-integration-backend'

const wixMembersBackendTraced = traceModule(wixMembersBackend, 'wix-members-backend');
const wixDataTraced = traceModule(wixData, 'wix-data');

export async function search(query) {
  return traceRoot('search action ' + query, async (span) => {
    span.setAttribute('query', query);
    let res = await traceChild('searching thecocktaildb.com', async (childSpan) => {
      childSpan.setAttribute('query', query);
      return await getJSON(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
    });
    
    await Promise.all([
      wixMembersBackendTraced.currentMember.getRoles(),
      wixDataTraced.insert('searches', { title: query, numResults: res.drinks.length })
    ])
    span.addEvent('Finished inserting searches');
    
    for (let i = 0; i < res.drinks.length; i++) {
      await wixDataTraced.insert('results', { title: `${query} - ${i}`, result: res.drinks[i] });
    }
    span.addEvent('Finished inserting search results');
    return res;
  })
}
```


### Setup 


##### Before using the package, set up the following:  

#### Google Cloud Platform

1. Go to the Google [developer site](https://console.developers.google.com/) and select an existing GCP project, or create a new one using the top bar projects dropdown as shown below.
![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2022/11/08/86144be7-8981-4c2b-9229-bd9d97927161/f646e72c-52b6-4328-ae64-1decb99f9e38.png "GCP APIs and Services")
1. Make sure you have the following permissions on GCP.  If not, grant yourself these permissions by following the steps below.

   GCP Permissions Needed: 
     * Project IAM Admin
     * Create Service Accounts
     * Service Account Key Admin
     * Service Usage Admin
     * Cloud Trace User 

   Steps to grant yourself the required permissions:
   
   1. In the Google Cloud console, go to the [IAM](https://console.cloud.google.com/iam-admin/iam?_ga=2.109290949.1725169964.1663572936-1601032574.1641389516) page.  
   1. Find the row that contains your email, and click the **Edit principal** ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2022/11/08/ef93ec7a-6b0c-4e82-8606-8dc7fcda699e/c12ff556-4155-4c73-883f-b625736ccbc4.png "image_tooltip") icon in that row.
   1. In the **Edit permissions** area, click **Add another role**.  
   ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2022/11/08/c001bef5-9958-4162-9414-bdcab9226ffb/ffb7a6c8-aa4a-44ad-915f-70ecdb42a199.png "GCP Edit Permissions")
   1. In the **Role** drop-down menu, add each GCP permission one by one. To do this, search for the products/services listed in the table below. Click **Save**.  

		| **Product or service to search for**  | **Role to select** | **Why it’s needed** |
		| ------------- | ------------- | ------------- |
		| Service Accounts | Create Service Accounts  | To create a service account | 
		| Service Accounts | Service Account Key Admin | To create a service account key and download it | 
		| Service Usage | Service Usage Admin | To be able to check/enable the Cloud Trace API
		| Resource Manager | Project IAM Admin | To grant the service account access to the cloud trace |
		| Cloud Trace | Cloud Trace User | To view list of traces |
		
		![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2022/11/08/e8f7cc86-8885-4bb3-843b-5d06be13d251/51cc74eb-abee-4564-a95b-4d0ba5ed832c.png "GCP Create Service Accounts")  
When done, your roles should look like this:
		![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2022/11/08/f89ceced-20a6-4efb-9e48-45324a8435c8/fdaaa1bd-ef2c-499c-9ef3-8738a27ad7ef.png "GCP Principals")
  1. In the left sidebar, click **Library**. Search for **Cloud Trace API.** If **API enabled** is displayed, this API is already enabled and no action is required. If **API enabled** is not displayed, click **Enable**. 
  1. In the left sidebar, click **Credentials**. In the top menu, click **Create Credentials** and select **Service Account**. Provide the following information during the creation process, and complete the steps.
       1. In **Grant this service account access to the project** in the **Select a role** drop-down menu, select **Cloud Trace** and then the **Cloud Trace Agent** role as shown below.
       		![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2022/11/08/6c1d7f8a-0d8f-4c98-a7a1-6d4bbcf69edd/f8cad4ef-db09-4b72-8fbc-bb4c1e5b98f0.png "GCP Grant Service Account Access") 
  1. On the **Credentials** main page, you should see a new entry in the **Service Accounts** table. Click the entry’s **edit icon**.
  1. Scroll down to the **Keys** section, and click **Add Key > Create New key** and select **JSON**. This will cause a file to download. Copy the values from this file, as you will need them in the next [Wix Platform](#wix-platform) section.


#### Wix Platform

Go to your Wix site and open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-working-with-the-secrets-manager). Create 3 new secrets with the names below, and store the secret keys from the downloaded JSON file (in the [previous step](#google-cloud-platform)) with their corresponding values. 

| **Name of secret in the Secrets Manager**  | **Secret key in the downloaded JSON file** |
| ------------- | ------------- |
| `opentelemetry-cloud-trace-project_id` | `project_id`  |
| `opentelemetry-cloud-trace-client_email`  | `client_email` |
| `opentelemetry-cloud-trace-private_key`  |  `private_key` |


### Package Content  

The following backend files are included in the package. Note that only exported functions that you can use in your site are listed here.

**telemetry.js**

The code in this file contains the functions responsible for tracing specified backend functions. 

To use the functions below in your code, import them with the following syntax:

```js 
import { <function name> } from '@velo/gcp-cloud-trace-integration-backend';
```

* **traceRoot()**

    Creates a root span (top level span) and traces it. The root span can include child spans using the `traceChild()` or `traceModule()` functions. 

    Syntax:
    
    ```js
    export async function traceRoot<T>(description: string, callback:() => T | Promise<T>): Promise<T>
    ```

    Parameters:
    * **`description`**: The name of the root span as it appears in GCP Cloud Trace.
    * **`callback`**: A callback function to trace. 

    Returns:
    
    A promise that resolves to the callback function value when the callback function is successful.
    
    Example:  
    
	
    ```js
    export async function someWebModule(param1, param2) {
      return traceRoot(<operation name>, async (span) => {
        //... the function body
      })
    }
    ```

* **traceModule()**

    Implements a module with a proxy for the specified Wix module object, and traces the APIs in that object. Note that this is the recommended way of working with Wix APIs. 

    Syntax:

    ```js
    export function traceModule<T>(obj: T, name: string): T
    ```
    
    Parameters:
    * **`obj`**: Wix module object. 
    * **`name`**: Wix module name. 

    Returns:
    
    The Wix module object that was traced.
    
    Example:
    
    
    ```js
    const wixData = traceModule(require('wix-data'), 'wix-data');
    const wixStoresBackend = traceModule(require('wix-stores-backend'), 'wix-stores-backend');
    ```

* **traceChild()**

    Creates a child span and traces the callback with the span. Child spans can be nested. Note that `traceChild()` is the recommended way of working with fetch or getJSON APIs. 

    Syntax:

    ```js
    export async function traceChild<T>(description: string, callback: () => T | Promise<T>): Promise<T>
    ```

    Parameters:
    * **`description`**: The name of the child span as it appears in GCP Cloud Trace.
    * **`callback`**: A callback function to trace. 

    Returns:

    A promise that resolves to the callback function value when the callback function is successful.
    
    Example:
    
    
    ```js
    export async function someWebModule(param1, param2) {
      return traceRoot(<operation name>, async (span) => {
        //... the function body
        let res = await traceChild(<name of the fetch operation>, async (span) => {
          return getJSON('someUrl');
        })
        //... the function body continues
      })
    }
    ```

* **currentSpan()**

    Gets the current instance of [`Span`](https://open-telemetry.github.io/opentelemetry-js-api/interfaces/span.html). You can add events and attributes to the current span.

    Syntax:

    ```js
    export function currentSpan(): Span
    ```
    
    Returns:
    
    The current span instance.
    
    Example:
    
    Annotate the spans and waterfall with additional information by adding events to the trace and attributes to each span.
    
    Use the following code to add events and attributes to a span:
    
    
    ```js
    export function doSomething() {
      let span = currentSpan();
      span.setAttribute('name', value);
      span.addEvent('the event');
    }
    ```

**setup.js**

The code in this file contains unexposed functions that initialize GCP’s Cloud Tracing with your Wix site. 


### NPM Packages 

* [@opentelemetry/api](https://www.npmjs.com/package/@opentelemetry/api)
* [@opentelemetry/sdk-trace-base](https://www.npmjs.com/package/@opentelemetry/sdk-trace-base)</code>
* [@opentelemetry/semantic-conventions](https://github.com/open-telemetry/opentelemetry-js/tree/main/packages/opentelemetry-semantic-conventions)</code>.
* [@opentelemetry/resources](https://www.npmjs.com/package/@opentelemetry/resources)</code>
* [@google-cloud/opentelemetry-cloud-trace-exporter](https://www.npmjs.com/package/@google-cloud/opentelemetry-cloud-trace-exporter)</code>
* [async-retry](https://www.npmjs.com/package/async-retry)
* [googleapis](https://www.npmjs.com/package/googleapis)


### Release Notes 

**2.0** version.


### Tags 

gcp, cloudTrace, openTelemetry