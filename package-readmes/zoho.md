## Zoho Integration

The Zoho integration package allows you to access your Zoho CRM account from within your Wix site. You can see your Zoho contacts, create new ones, and sync new Wix contacts with Zoho. You can also access Zoho campaigns details and add contacts to campaigns.


### Setup

Before using this package, set up the following:


#### Zoho Platform


##### Create a Zoho Web App

Set up a Zoho web app to allow your Wix site to communicate with your Zoho account.



1. Open the [Zoho API Console](https://api-console.zoho.com/). You need to log in to your Zoho account.
2. Click **Get Started**.
3. Click the box labeled Server-based Applications.![image](https://user-images.githubusercontent.com/89579857/152680433-903689b3-e0c4-4db9-8b9b-6567ee125dca.png)
4. Enter a **Client Name** for your web app.
5. Enter the homepage URL of your Wix site for both **Homepage URL** and **Authorized Redirect URIs**. ![image](https://user-images.githubusercontent.com/89579857/152680456-5f793340-124e-47d3-8a99-5b5c80e3448a.png)
6. Click **Create**.
7. Copy the client ID and client secret. They are displayed once Zoho creates the web app. You need them for the next part of the setup process.


##### Retrieve the Auto-Sync Zoho Campaign ID

The package can automatically add new contacts you create on your Wix site to a specific Zoho campaign. For this to work, you need to store that campaign’s ID in a secret on your site.

1. In Zoho CRM navigate to the overview page for the campaign that you want to sync to.
2. Copy down the campaign ID. The ID is the final section of the URL that appears in your browser.![image](https://user-images.githubusercontent.com/89579857/152680501-31b1dcc3-3ed7-4979-a89b-cfc1abb1560d.png)


#### Wix Platform

##### Secrets Manager

Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager) and add the following secrets:
* `zoho-client-secret`: Your Zoho client secret
* `zoho-client-id`: Your Zoho client ID
* `zoho-campaign-id`: The campaign ID you retrieved in the previous section.


#### Configurations

##### config.json

In the config.json backend file, define the following: 

* `addNewContactsToZoho`: The package can automatically sync new contacts you create on your Wix site with Zoho. If you want this to happen, set `Contacts` to `true`. To also add new contacts to the Zoho campaign you used for the [Retrieve the Auto-Sync Zoho Campaign ID](#retrieve-the-auto-sync-zoho-campaign-id) section of the setup, set `Campaigns` to `true` as well.
* `accountsUrl` : The URL of the Zoho data center that the package sends requests to. Defaults to the US data center ("https://accounts.zoho.com"). For more options, see the [Zoho documentation](https://www.zoho.com/crm/developer/docs/api/v2/multi-dc.html).
* `zoho.redirectUri`: The URL of the home page of your Wix site.

Example config.json values:

```js
{
    "events": {
        "addNewContactsToZoho": {
            “Contacts”: true,
            “Campaigns”: true
         }   
     },
    "zoho": {
        "accountsUrl": "https://accounts.zoho.com",
        "redirectUri": "https://myAccount.wixsite.com/zoho"
   }
}
```

##### Single-Item Collection

1. [Add a single item collection](https://support.wix.com/en/article/about-collections-with-a-single-item#creating-a-collection-with-a-single-item) named `Zoho Auth Tokens` to your site to hold your Zoho API access tokens and related values.

   **Note:** Define this collection as [private](https://support.wix.com/en/article/changing-your-content-collection-permissions). It contains sensitive information that you should never share with site visitors or members.
2. Define the fields the package uses to store Zoho authentication data.
   
   **Note:** Some of these fields contain sensitive information. Mark them as Personally identifiable information (PII) so that Wix encrypts their values before    storage.
  
   ![image](https://user-images.githubusercontent.com/89579857/152680612-dd0aa423-5225-4876-89ef-ce98def6fab2.png)

      The fields you need to define:
	
	|Field Name| Field Type| PII|
	|---------------|---------------|-------|
	|Access Token| Text| Yes|
	|Expires In| Number| No|
	|Scope| Text| No|
	|Refresh Token| Text| Yes|


3. Set `scope` to the level of access to your Zoho account that you want your site to have. To give the package read/write permission to your Zoho contact and campaign data set the scope to `ZohoCRM.modules.contacts.ALL,ZohoCRM.modules.campaigns.ALL`. For more options, see the [Zoho documentation](https://www.zoho.com/crm/developer/docs/api/v2/scopes.html).


#### Retrieve Zoho API Access Tokens
To authenticate your site with Zoho, you need to retrieve a grant code and use it to generate refresh and access tokens for the API. The package includes code that retrieves the grant token from Zoho, generates refresh and access tokens, and stores them in the `Zoho Auth Tokens` collection.

**Note:** You only need to perform this procedure once.



1. Open the code file for your site’s home page. This is the page whose URL you provided during the [Create a Zoho Web App](#create-a-zoho-web-app) section of the setup.
2. Copy and paste the following code into the file:
	```js
	import { makeAuthorizationRequest, generateTokens } from '@velo/zoho-integration';
	import { referrer } from 'wix-window';

	$w.onReady(function () {
		if (!referrer.includes('https://accounts.zoho.com')) {
		    makeAuthorizationRequest();
		} else {
		    console.log('Authorization Succeeded!');
		    generateTokens();
		}
	    });
	```

3. Publish your site.
4. In your browser, navigate to your site’s homepage URL.
5. If prompted, log in to your Zoho account.
6. Click **Accept**. You are rerouted back to your site’s home page. Your browser’s developer console displays the message “Authorization Succeeded!”.
   
   ![image](https://user-images.githubusercontent.com/89579857/152680728-3ff190a8-45b4-4c0b-904e-5206e1cb8ccc.png)
8. To confirm that the tokens were generated, open the `Zoho Auth Tokens` collection. The `Access Token` and `Refresh Token` fields should be defined.
   
   ![image](https://user-images.githubusercontent.com/89579857/152680777-2b3c7fd7-6e0b-41f5-9b0d-f038fc5ecdb8.png)
9. Delete or comment out the code from step 2.


#### **Package Content**
##### **Backend Files**

This package contains the following backend files. Note that only exported functions that you can use in your site are listed here.


##### **zoho-apis.js**

The code in this file contains functions that make requests to the Zoho API about contact and campaign data.

To use the functions in this file in your code, import them with the following syntax:

`import { <functionName> } from '@velo/zoho-integration-backend'`

**Note**: Do not expose these functions directly to frontend code! They use private data which you should not expose to unauthorized users. To call these files from the frontend, use [wrapper functions](https://trackjs.com/blog/how-to-wrap-javascript-functions/).


* **getCampaignDetails()**
  
  Gets the details of a Zoho campaign.
  
  **Syntax**:
  ```js
  function getCampaignDetails(campaignId: string): Promise<response: object>
  ```

  **Parameters**:

    * **`campaignId`:** A Zoho campaign ID. To find a campaign’s ID, open it in Zoho CRM. The ID is the final section of the URL that appears in your browser. 
    
      ![image](https://user-images.githubusercontent.com/89579857/152680501-31b1dcc3-3ed7-4979-a89b-cfc1abb1560d.png)
  
  **Returns**:
  A promise that resolves to a response object containing the campaign details. See the Zoho documentation for [the response structure](https://www.zoho.com/crm/developer/docs/api/v2/campaigns-response.html).


* **getCampaignContactList()**
  
  Gets the contacts in a Zoho campaign.

  **Syntax**:
  ```js
  function getCampaignContactList(campaignId: string, page: number): Promise<response: array >
  ```

  **Parameters**:
    * **`campaignId`:** A Zoho campaign ID. To find a campaign’s ID, open it in Zoho CRM. The ID is the final section of the URL that appears in your browser.
     
      ![image](https://user-images.githubusercontent.com/89579857/152680501-31b1dcc3-3ed7-4979-a89b-cfc1abb1560d.png)

    * **`page` (optional):** The page of contacts being requested. Each page has a maximum of 200 contacts. This value defaults to `1`.
  
  **Returns**:
  A promise that resolves to an array of contact objects.

* **createContacts()**
  
  Creates a set of contacts in Zoho.
    
    **Syntax**:
    ```js
    function createContacts(contactsList: array): Promise<response: array>
    ```

    **Parameters**:
      
     * **contactList**:  An array of Zoho contact objects. 


		Example contact object. All the fields except `Last_Name` are optional:
		``` 
		{
		 "Last_Name":"",
		 "Owner":"",
		 "Lead_Source":"",
		 "First_Name":"",
		 "Full_Name":"",
		 "Account_Name":"",
		 "Vendor_Name":"",
		 "Email":"",
		 "Title":"",
		 "Department":"",
		 "Phone":"",
		 "Home_Phone":"",
		 "Other_Phone":"",
		 "Fax":"",
		 "Mobile":"",
		 "Date_of_Birth":"",
		 "Tag":"",
		 "Assistant":"",
		 "Asst_Phone":"",
		 "Email_Opt_Out":"",
		 "Created_By":"",
		 "Skype_ID":"",
		 "Modified_By":"",
		 "Created_Time":"",
		 "Modified_Time":"",
		 "Salutation":"",
		 "Secondary_Email":"",
		 "Last_Activity_Time":"",
		 "Twitter":"",
		 "Reporting_To":"",
		 "Unsubscribed_Mode":"",
		 "Unsubscribed_Time":"",
		 "Mailing_Street":"",
		 "Other_Street":"",
		 "Mailing_City":"",
		 "Other_City":"",
		 "Mailing_State":"",
		 "Other_State":"",
		 "Mailing_Zip":"",
		 "Other_Zip":"",
		 "Mailing_Country":"",
		 "Other_Country":"",
		 "Description":"",
		 "Record_Image":"",
		 "First_Visited_Time":"",
		 "Visitor_Score":"",
		 "Referrer":"",
		 "Average_Time_Spent_Minutes":"",
		 "Last_Visited_Time":"",
		 "First_Visited_URL":"",
		 "Number_Of_Chats":"",
		 "Days_Visited":""
		 }
		 ```
    **Returns**:
    A promise that resolves to an array of objects containing the IDs of the added contacts.
    
    **Note:** If you try to create a contact with an email address that already exists in your Zoho account, the function doesn’t create a duplicate contact.      However, the existing contact’s ID is still included in the return value.

    Example return value:
    ```
    [
      {
       "id": "5165608000000395001"
      },
      {
       "id": "5165608000000395002"
      }
    ]
    ```


* **addContactsToCampaign()**
  
  Adds contacts to a Zoho campaign.

  **Syntax:**
  ```js
  function addContactsToCampaign(campaignId: string, contactsList: array): Promise&lt;response: array>
  ```

  **Parameters:**
    * **`campaignId`:** A Zoho campaign ID. To find a campaign’s ID, open it in Zoho CRM. The ID is the final section of the URL that appears in your browser.
    
       ![image](https://user-images.githubusercontent.com/89579857/152680501-31b1dcc3-3ed7-4979-a89b-cfc1abb1560d.png)

    * **`contactList`:** An array of Zoho contact objects or contact IDs. For an example Zoho contact object, see `createContacts()` above.
    
      **Note:** If the contacts provided for this parameter don’t exist in Zoho they are created before being added to the campaign. If the contacts already exist in Zoho (equivalent email addresses), they are not updated even if the contact details provided for this parameter are different from the ones in Zoho.

      Example array of contact IDs:
      ```
      [
        {
          "id": "5165608000000395001"
        },
        {
         "id": "5165608000000395002"
        }
      ]
      ```


  **Returns**:
  A promise that resolves to an array of objects containing the IDs of the contacts added to the campaign.

  Example return value:
  ```
  [
    {
      "id": "5165608000000395001"
    },
    {
       "id": "5165608000000395002"
    }
  ]
  ```

* **createCampaignContacts()**
  
  Creates a set of contacts in Zoho and adds them to a campaign.

  **Syntax**:
  ```js
  function createCampaignContacts(campaignId: string, contactsList: array): Promise<response: array>
  ```

  **Parameters**:
    * **`campaignId`:** A Zoho campaign ID. To find a campaign’s ID, open it in Zoho CRM. The ID is the final section of the URL that appears in your browser.
    
      ![image](https://user-images.githubusercontent.com/89579857/152680501-31b1dcc3-3ed7-4979-a89b-cfc1abb1560d.png)

    * **`contactList`:** An array of Zoho contact objects. For an example Zoho contact object, see `createContacts()` above.

  **Returns**:
  A promise that resolves to an array of objects containing the IDs of the added contacts.

  Example return value:
  ``` 
  [
    {
      "id": "5165608000000395001"
    },
    {
      "id": "5165608000000395002"
    }
  ]
  ```

##### events.js
This file contains an event handler that adds newly created Wix contacts to your Zoho account.

  * **wixCrm_OnContactCreated()**

    Receives newly created Wix contacts and adds them to Zoho CRM and to a specific Zoho campaign.

    **Syntax:**
    ```js
    export async function wixCrm_onContactCreated(event)
    ```

    **Note:**
       * This function can be disabled totally or partially by changing the settings in the config.json file. See the [Configurations](#configurations) section for more details.
       * This function adds contacts to the Zoho campaign whose ID is stored in the `zoho-campaign-id` secret. See the [Setup](#retrieve-the-auto-sync-zoho-campaign-id) section for more details.


##### config.json
The code in this file contains configurations for using the package. Follow the instructions in the [Configurations](#configurations) section to set up the configurations. 


##### zoho-auth.js
The code in this file contains functions for authenticating Zoho API calls.


##### data-methods.js
The code in this file contains functions that interact with your site’s collections to set and get Zoho authentication tokens.


##### utils.js
The code in this file contains functions that support the package functionality.


##### zoho-api-wrapper.jsw
The code in this file contains functions that expose parts of the Zoho authentication functionality to the frontend.


#### **Public Files**

##### init-zoho-OAuth.js

The code in this file contains functions that facilitate the Zoho authentication process by retrieving a grant code and generating access and refresh tokens. You only need to use these functions once while setting up your site. See the [Retrieve Zoho API Access Tokens](#retrieve-zoho-api-access-tokens) section or more details.

To use the functions in this file in your code, import them with the following syntax:

`import { <functionName> } from '@velo/zoho-integration’`

* **makeAuthorizationRequest()**
  
  Redirects a site visitor to the Zoho login page. After logging in, the visitor is redirected to the `redirectUri` defined in the package’s config.json file. After the redirect, a Zoho grant code is appended as a query parameter to the URL in the browser.

  Example:
  
  ![image](https://user-images.githubusercontent.com/89579857/152682220-0708b350-9b5f-4c68-b3cb-7d66a8b49895.png)
  **Syntax**:
  ```js
  function makeAuthorizationRequest(): Promise<void>
  ```

  **Parameters**: 
  
  None
  
  **Returns**: 
  
  Void

* **generateTokens()**
  
  Retrieves a Zoho grant code from the URL in the browser window, generates Zoho refresh and access tokens, and stores them in the Zoho Auth Tokens collection.
  
  **Syntax**:
  ```js
  function generateTokens(): boolean
  ```

   **Parameters**: 
   
   None
   
   **Returns**:
   
   A boolean value indicating whether the tokens were successfully generated.


### **NPM Packages**
This Velo package uses the following npm package. To view the npm license, see the npm readme.

[form-data ](https://www.npmjs.com/package/form-data)

### **Release Notes**

1.0 Initial version.

### **Tags**

Zoho, CRM
