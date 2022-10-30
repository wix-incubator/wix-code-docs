## Zoom Integration

The Zoom Integration package provides you with the ability to securely integrate with Zoom APIs. Get access to your site members’ authorized data in Zoom, and manage their Zoom accounts from your site. 


## How It Works

1. The Wix site owner/admin builds an OAuth app on the Zoom marketplace. See “Setup” below. 
2. A logged-in Wix member requests access to their Zoom account, for example when registering for a service on a Wix site. This is one-time-only. A user token is created and returned.
3. The Wix site receives the Zoom user token and saves it in a private collection.
4. Site owners/admins can use the saved token to do the following, even when the Wix member is not logged in: 
    * **Create**. Create a Zoom meeting for the member.
    * **Get.** Get settings of a member’s Zoom meeting. 
    * **Delete**. Delete the member’s Zoom meeting.

**Tip**: The package exposes basic create, get, and delete Zoom API functions. Site owners can modify this package to make any requests using these basic Zoom API functions.

## Setup

Before using this package, set up the following:

### Zoom Platform

* **Register a Zoom App**. Create an OAuth app on the Zoom App Marketplace as described [here](https://marketplace.zoom.us/docs/guides/build/oauth-app). Define the app with permissions according to [scope](https://marketplace.zoom.us/docs/guides/auth/oauth/oauth-scopes). 
* **Save app credentials**. Save the app credentials (client ID and client Secret) that are automatically generated when creating the Zoom app. You’ll need it for the Wix Secrets Manager in the next section.

    ![Sample Zoom App Credentials](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/76096845-8b12-44f1-91f6-3dc2e838fdd9/2021/07/19/2c1dd355-7338-4ee4-b21e-922fa61ff6c0/a65be1fe-92b9-4f9b-acfa-8dd7712c6214.png "Sample Zoom App Credentials")


### Wix Platform


#### Secrets Manager

* Open the [Wix Secrets Manager](https://support.wix.com/en/article/corvid-about-the-secrets-manager) to securely store the client secrets. This is more secure than pasting them into backend code. Make sure never to expose your client's secrets. 

* Store a new secret using the credentials we defined in the previous section. Name the client secret:  `velo-zoom-integration-client-secret`


#### Configurations

Create a connection from your site to Zoom. 

In your `config.json` backend file, set the properties of the `zoom` object to the values specified below.

* **clientId**. Client ID automatically generated when registering the OAuth app in the Zoom Marketplace. 
* **redirectUri**. Link to the page where the **initZoom()** function is implemented. 

Example: 

```js
{
  "zoom": {
    "clientId": "t_mPzsiTRKShDrur1DYPJA",
    "redirectUri": "https://zoomsite.wixsite.com/zoom"
  }
}
```

#### Collections

Add a **[private](https://support.wix.com/en/article/changing-your-content-collection-permissions)** collection to hold each Wix member’s Zoom token and other details. The package code adds each user when successfully authorized by Zoom. 

**Note:** Make sure the collection is defined as _private_ because it contains sensitive information.

Name the collection `ZoomUsers` and define the following fields: 

* `access_token`:  Text field containing the Zoom access token. This field is PII (Personally Identifiable Information).
* `expires_in`: Numeric field containing the number of seconds at which the token expires. Defaults to 3600 (one hour) .
* `scope`: Text field containing the scope that your app is allowed to use to access the Wix member’s zoom resources. This field is PII (Personally Identifiable Information).
* `refresh_token`: Text field containing the token you can use when the original token expires. This field is PII (Personally Identifiable Information).
* `token_type`: Text field containing the type of the token, such as `bearer`. This field is PII (Personally Identifiable Information).

## Package Content

This package contains backend functions for Zoom integration. Note that only exported functions that you can use in your site are listed here.

This package includes functions for: 

* Getting approval from the logged-in Wix member and saving their Zoom user token.
* Performing actions on behalf of the member, such as creating meetings, deleting meetings, and getting meeting details. 
* Using existing Zoom functionality and requesting any scope that you configured on the Zoom app.

### Backend Files

This package contains the following backend files:

#### validator-helper.js

The code in this file contains functions for validating the Wix member and their token.
    
* **isTokenExpired()**
    
    Validates if the Wix member’s Zoom (JSW) token expired.

    **Syntax**: 

    ```js
    function isTokenExpired(identifiers: object): Promise<response: object>
    ``` 

    **Parameters**:

    An `identifiers` object that contains identifying details needed to check if the token expired. The identifying details are details that typically only the site owner would know. 

    The object contains these properties: 

    * **expiresIn**: Number of seconds after which the token will expire for the Wix member. Taken from  the `ZoomUsers` collection. 
          
    * **updatedDate**: Date containing the `_updatedDate` value for the Wix member. Taken from the `ZoomUsers` collection.

    **Returns**:

    A promise that resolves to a `response` object containing the following property:

    * **success**. Either `true` or `false`, depending on if the token expired.

* **isValidUser()** 
     
    Validates if the Wix member sending the Zoom authorization request is the currently-logged-in Wix member.

    **Syntax**:

    ```js 
    function isValidUser(userEmail: string): Promise<response: object> 
    ``` 

    **Parameters**:

    * **userEmail**: String containing the email provided by the Wix member in the frontend. 

    **Returns**:

    A promise that resolves to one of of the following `response` objects:  

    **When successful, an object like this:** 
    ```js 
    {  
      valid: true  
    } 
     ``` 
 
    **When unsuccessful, an object containing an error message, such as:** 

    ```js 
    {  
      valid: false,  
      reason: ‘Member is not logged in'   
    } 
    ``` 
 
    **or** 

    ```js 
    {  
      valid: false,  
      reason: ‘Email addresses do not match'  
    } 
    ``` 

#### zoom-api-wrapper.jsw

The code in the `zoom-api-wrapper.jsw` file exposes Zoom APIs to your frontend code. The exposed functionality enables you to call functions on behalf of the member that is currently logged in to your site from a page or site code. 

**Note**: To call the functions without the user’s email validation, and/or to avoid exposing the package functions to unauthorized visitors, call the functions from within a backend `zoom-api.js` file instead.

The code in this file contains functions for managing Zoom meetings from your site on behalf of a site member.

To use the functions below in your code, import them with the following syntax:

```js
import { <functionName> } from '@velo/zoom-integration-backend';
```

The file contains the following functions:

* **createTokenWrapper()** 
 
    Creates a user token for accessing the Zoom account by calling the backend `createToken()` function.


    **Syntax**: 
 
    ```js
    function createTokenWrapper(data: object): Promise<response: object> 
    ``` 
 
    **Parameters**: 
 
    A `data` object that contains a **code** for creating the token. 

    The code is received from Zoom after authentication and is one of the query parameters in the URL of the page. This Zoom Integration package calls a `getQueryParams()` function defined in the` zoom-api-wrapper.jsw` file to extract the code from the URL. 
 
    **Returns**: 
 
    A promise that resolves to a `response` object containing the following property:  

    * **success**. Either `true` or `false`, depending on if the token was created. 

* **createMeeting()** 

    Creates a Zoom meeting for the Wix member using their Zoom account. 

    **Syntax**:
    
    ```js
    function createMeeting(meetingInfo: object): Promise<meeting: object> 
    ``` 
 
    **Parameters**:

    A `meetingInfo` object that contains details needed to create the meeting: 

    * **userEmail**: String containing the email provided by the Wix member in the frontend.

    * **meetingDetails**: The [meeting object schema](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingcreate) as defined by Zoom. This package is designed to supply certain default values. Modify the package code as necessary. To use the package defaults, you can provide an empty JSON object for the `meetingDetails`. 
 
    **Returns**:  
    A promise that resolves to a `meeting` object containing the meeting details. 


* **getMeeting()**

    Gets information about an existing Zoom meeting for the Wix member from their Zoom account.

    **Syntax**: 

    ```js
    function getMeeting(meetingInfo: object): Promise<meeting: object> 
    ``` 
 
    **Parameters**: 
 
    A `meetingInfo` object that contains information needed to retrieve the details about the meeting: 

    * **userEmail**: String containing the email provided by Wix member from the frontend. 

    * **meetingId**:  String containing the unique identifier of the meeting to retrieve, also known as the meeting number. The ID is specified in long format and represented as an integer 64-bit data type in JSON. For example: 87467626051.

    **Returns**: 
 
    A promise that resolves to a `meeting` object containing the meeting details. 

* **deleteMeeting()** 
 
    Deletes an existing Zoom meeting from the Wix member’s Zoom account.

    **Syntax**: 

    ```js 
    function deleteMeeting(meetingInfo: object): Promise<response: string> 
    ``` 

    **Parameters**: 
 
    A `meetingInfo` object that contains information needed to delete the Zoom meeting: 
 
    * **userEmail**: String containing the email provided by the Wix member from the frontend. 

    * **meetingId**:  String containing the unique identifier of the meeting to retrieve, also known as the meeting number. The ID is specified in long format and represented as an integer 64-bit data type in JSON. For example: 87467626051. 
 
    **Returns**: 
 
    A promise that resolves to the relevant HTTP response. 

#### zoom-api.js

The code in the `zoom-api.js`  file exposes Zoom API requests to the Wix backend. The exposed functionality enables you to call Zoom API methods on behalf of the authorized member (even if the member is not currently logged in). 

**Note**: To call the functions with Zoom user email validation, and without exposing the package functions to unauthorized visitors, call the functions from within a backend  `zoom-api-wrapper.jsw`  file instead.

To use the functions below in your code, import them with the following syntax:

```js
import { <functionName> } from '@velo/zoom-integration-backend';
```

The functions in this file all receive a `request` object as a parameter and return a promise that resolves to a `response` object.  
 
**Syntax**: 

```js
function <function-Name>(request: object): Promise<response: object> 
```

* **getRequest()** 
    Receives and handles a GET request from the Zoom API. The function’s `request` object contains the parameters `url` and `userEmail` (details below). 

* **deleteRequest()**

    Receives and handles a DELETE request from the Zoom API. The function’s `request` object contains the parameters `url` and `userEmail` (details below).  

* **postRequest()**

    Receives and handles a POST request from the Zoom API. The function’s `request` object contains the parameters `url`, `dataToSend`, and `userEmail` (details below). 

* **patchRequest()**

    Receives and handles a PATCH request from the Zoom API. The function’s `request` object contains the parameters `url`, `dataToSend`, and `userEmail` (details below).` `

**Parameters**:

The `request` objects for the functions in the `zoom-api.js` file contain these properties: 

* **url**: String containing the scoped, API request URL according to the [Zoom API Reference](https://marketplace.zoom.us/docs/api-reference/introduction) specifications. For example, you can list all users on a Zoom account using the GET request on this URL:  `https://api.zoom.us/v2/users/` 

* **dataToSend**: JSON object containing the information to send as the request body (for `postRequest()` and `patchRequest()` functions only). 

* **userEmail**: String containing the email address of the Zoom user whose account you want to access. 

#### zoom-auth.js

The code in the `zoom-auth.js`  file exposes Zoom authorization functions to the Wix backend. The exposed functionality enables you to create and work with Zoom user tokens. 

To use the functions below in your code, import them with the following syntax:

```js
import { <functionName> } from '@velo/zoom-integration-backend';
```

The file contains the following functions:

* **createToken()** 

    Creates a user token for accessing the Zoom account.  
 
    **Note**: Can be called from the frontend by the `createTokenWrapper()` function.
     
    **Syntax**: 
 
    ```js
    function createToken(tokenInfo: object): Promise<token: object> 
    ``` 
 
    **Parameters**:

    A `tokenInfo` object in JSON format containing these properties: 

    * **code**: String containing the code received from Zoom after authentication as one of the query parameters in the URL of the page. This Zoom Integration package calls a `getQueryParams()` function defined in the` zoom-api-wrapper.jsw` file to extract the code from the URL. 

    * **userEmail**: String containing the email address of the Zoom user whose account you want to authorize. 
 
    **Returns**: 
 
    A promise that resolves to a `token` object containing these properties: 

* **refreshToken()** 
 
    Refreshes a Zoom user’s token.  
 
    **Syntax**: 
 
    ```js
    function refreshToken(tokenInfo: object): Promise<token: string> 
    ``` 
 
    **Parameters**: 
    
    A `tokenInfo` object in JSON format containing these properties: 

    * **refresh_token**: String containing the refresh token. 

    * **userEmail**: String containing the email address of the Zoom user whose token is being refreshed. 
 
    **Returns**: 
 
    A promise that resolves to a string containing a new token. 

* **getToken()** 
 
    Gets a Zoom user’s token.  
 
    **Syntax**: 
 
    ```js 
    function getToken(userEmail: string): Promise<token: string> 
    ``` 
 
    **Parameters**:

    * **userEmail**: Sting containing the email address of the Zoom user whose account you want to access. 
 
    **Returns**: 
 
    String containing the token. 

* **requestToken()**

    Requests a token. 
     
    **Syntax**: 
 
    ```js
    function requestToken(request: object): Promise<response: object> 
    ``` 
 
    **Parameters**:

    A `request` object in JSON format containing these properties: 

    * **refresh_token**: String containing the refresh token.  

    * **userEmail**: String containing the email address of the Zoom user whose account you want to access. 
 
    **Returns**: 
 
    String containing the token. 

### Public Files

Put code that you want available to the entire site in the Public section.


#### init-zoom.js

The code in this optional `init-zoom.js` file contains functions for authorizing users, redirecting users to the Zoom SSO page, and starting the process for creating a token.  


* **authorizeUser()**
 
    Redirects a Wix member to the Zoom single sign-on (SSO) login page. 
 
    **Syntax**: 
 
    ```js
    function authorizeUser(authorization: object): Promise<void> 
    ``` 
 
    **Parameters**:  
 
    An `authorization` object in JSON format containing these properties: 
 
    * **userEmail**: String containing the email address of the currently logged-in site member that needs authorization from  Zoom.

    * **options**: A JSON object with additional data that you want to retain after the authorization process redirects to, and refreshes the original page. This data can be details from the Zoom authorization process or any other details that you collected on the original page before requesting authorization. 
 
    For example, the page might have received submitted information such as name, address, and so on. You can send these details to Zoom, even though Zoom will not use these details, just to reload them on the refreshed page.  
 
    Specify the details in a JSON object as key-value pairs, such as:  
 
    ```js
    userEmail: "monica@mycompany.com"
    options: { 
         userFirstName: "Monica",
         userLastName: “Smith”
       }
    ``` 
    
    **Returns**:  
 
    Void 

* **initZoom()**

    You can call this function on every page load or only after redirected from the Zoom single sign-on (SSO) login page. This function retrieves the code and the state from the query params and creates the token. 
 
    **Syntax**: 
 
    ```js
    function initZoom(data: object): Promise<state: object> 
    ``` 
 
    **Parameters**:  
 
    A `data` object that contains details needed to create the token: 
 
    * **code**: String containing the code received from Zoom after authentication as one of the query parameters in the URL of the page. This Zoom Integration package calls a `getQueryParams()` function defined in the` zoom-api-wrapper.jsw` file to extract the code from the URL. 
 
    **Returns**:  
 
    A `state` object containing details for initiating the Zoom integration: 

    * **userEmail**: String containing the email address of the currently logged-in site member that needs authorization from  Zoom.

    * **options**: A JSON object with additional data that you wanted to retain after the authorization process redirects to, and refreshes the original page. This data can be details from the Zoom authorization process or any other details that you collected on the original page before requesting authorization.   

    The `state` details are returned as a JSON object, such as:  
 
    ```js
    userEmail: "monica@mycompany.com"
    options: { 
         userFirstName: "Monica",
         userLastName: “Smith” 
       }
    ``` 

## **Change Notes**

1.0 Initial version.


## Tags

Zoom
