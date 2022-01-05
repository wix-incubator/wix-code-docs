## Pipedrive Integration

The Pipedrive Integration package allows you to interact with the Pipedrive API and perform account operations from within your Wix site.


### Setup

Before using the package, set up the following:


#### Pipedrive Platform

##### Find Your API Token



1. [Log in](https://app.pipedrive.com/auth/login) to your Pipedrive account.
2. In the top-right corner of the Dashboard, click your account icon. 
3. Go to Personal Preferences > API.
4. Copy down your API Access Token.


##### Find Your Company Domain


1. In the top-right corner of your Pipedrive Dashboard, click your account icon. 
2. Go to Company Settings.
3. Copy down your company domain.

#### Wix Platform


##### 
Secrets Manager

1. Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager) and create a new secret with the name `pipedrive_api_token`. 
2. Store your Pipedrive API access token in the secret.


#### Configuration


##### Set Your Company Domain



1. Open the package’s **config.json** file from the Velo sidebar.
2. Set `companydomain` to your Pipedrive company domain.


### Package Content

This package includes two backend files. To use the functions in the files in your backend code, import them with the following syntax:


```
import { <functionName> } from '@velo/pipedrive-integration-backend';
```


The following files are included in the package: 


#### pipedrive-api.js

The code in this file contains functions for sending `get`, `post`, `put`, `patch`, and `delete` requests to the Pipedrive API. For details on the parameters required for different requests and response object structures, see the [Pipedrive API Reference](https://developers.pipedrive.com/docs/api/v1).

To use the functions below in your code, import them with the following syntax:


```
import { <functionName> } from '@velo/pipedrive-integration-backend';
```



* **getRequest()**

    Sends a `get` request to the Pipedrive API to retrieve data from your account.


     
    **Syntax:**

    `function getRequest (endpoint: string, queryParams: object): Promise<response: object>`

    **Parameters:**

     * **endpoint**: The URL path to the desired API endpoint, including any path parameters. This is everything that comes after `/v1/` in the Pipedrive API.
     * **queryParams (optional)**: An object containing the details that some `get` requests require.

    **Example:**

    ```js
    getRequest('organizations/12276/flow', {
      limit: 10,
      items: 'note, file, change, deal'
    })
    ```

    **Returns:**

    A promise that resolves to a `response` object. Different Pipedrive API endpoints return objects with different structures. See the [Pipedrive API Reference](https://developers.pipedrive.com/docs/api/v1) for details.

* **postRequest()**

    Sends a `post` request to the Pipedrive API to add data to your account.

    **Syntax:**
    
    `function postRequest (endpoint: string, dataToSend: object): Promise<response: object>`

    **Parameters:**
    * **endpoint**: The URL path to the desired API endpoint, including any path parameters. This is everything that comes after `/v1/` in the Pipedrive API.
    * **dataToSend**: An object containing the data to be added to the account.

    **Example:**

   ```js
   postRequest('organizations', {
     name: 'Some Company LTD',
     address: 'Some address street',
     add_time: new Date()
       })
    ```

 
    **Returns:**

    A promise that resolves to a `response` object. Different Pipedrive API endpoints return objects with different structures. See the [Pipedrive API Reference](https://developers.pipedrive.com/docs/api/v1) for details.

* **putRequest()**

    Sends a `put` request to the Pipedrive API to replace data in your account.

   
    **Syntax:**
    
    `function putRequest (endpoint: string, dataToSend: object): Promise<response: object>`

    **Parameters:**

     * **endpoint**: The URL path to the desired API endpoint, including any path parameters. This is everything that comes after `/v1/` in the Pipedrive API.
     * **dataToSend**: An object containing the data to be added to the account.

    **Example:**

    ```js
    putRequest('organizations/5234', {
      name: 'Another Company',
      address: 'Another address',
      add_time: new Date()
    })
    ```

    **Returns:**

    A promise that resolves to a `response` object. Different Pipedrive API endpoints return objects with different structures. See the [Pipedrive API Reference](https://developers.pipedrive.com/docs/api/v1) for details.

* **patchRequest()**

    Sends a `patch` request to the Pipedrive API to update data in your account.

    **Syntax:**
    
    `function patchRequest (endpoint: string, dataToSend: object): Promise<response: object>`

    **Parameters:**
    
     * **endpoint**: The URL path to the desired API endpoint, including any path parameters. This is everything that comes after `/v1/` in the Pipedrive API.
     * **dataToSend**: An object containing the data to be added to the account.

    **Example:**

    ```js
    patchRequest('leads/12', {
      title: 'Amazing Lead',
      owner_id: '101011',
      person_id: '444322',
      organization_id: '20'
    })
    ```

    **Returns:**

    A promise that resolves to a `response` object. Different Pipedrive API endpoints return objects with different structures. See the [Pipedrive API Reference](https://developers.pipedrive.com/docs/api/v1) for details.

* **deleteRequest()**

    Sends a `delete` request to the Pipedrive API to delete data from your account.

    **Syntax:**
    
    `function deleteRequest (endpoint: string, details: object): Promise<response: object>`

    **Parameters:**
    
     * **endpoint**: The URL path to the desired API endpoint, including any path parameters. This is everything that comes after `/v1/` in the Pipedrive API.
     * **details (optional)**: An object containing the details that some `delete` requests require.

    **Example:**

    ```js
    deleteRequest('roles/5/assignments', {
      user_id: 2231109
    })
    ```

   **Returns:**

    A promise that resolves to a `response` object. Different Pipedrive API endpoints return objects with different structures. See the [Pipedrive API Reference](https://developers.pipedrive.com/docs/api/v1) for details.


**Note:**

The response objects returned by these functions may include sensitive Pipedrive account data that you don’t want to expose. To call these functions from the frontend, create a .jsw file and define wrapper functions for the package functions that limit the returned data.

**Example:**

```js
export async function addNewDeal(endpoint, dataToSend) {
  try {
    // some code
    const response = await postRequest(endpoint, dataToSend)
    if (response.ok) return {success: true}
  }
  catch (err) {
    //some code
  }
}
```


#### config.json

The code in this editable file contains the configuration for setting your company domain. Follow the instructions in the Setup section to set up the configurations. 


## Release Notes

**1.0** Initial version


## Tags

Pipedrive, crm
