## Salesforce Integration 

> **Example Site**  
> To see a live example, click [here](https://www.wix.com/velo/example/salesforce-integration).

The Salesforce Integration package provides you with the ability to easily monitor and manage data records in your Salesforce account from a Wix site. You can perform the following actions with this package: 

*   **Query:** Query data records in Salesforce.
*   **Retrieve:** Retrieve data records from Salesforce.  
*   **Create:** Create new data records in Salesforce. 
*   **Update:** Update data records in Salesforce. 
*   **Delete:** Delete data records from Salesforce.  

To see an example site that demonstrates how to use this package, click [here](https://www.wix.com/velo/example/salesforce-integration).

### Setup 

Before using the package, set up the following:


#### Salesforce Platform 


1. Go to the Salesforce [developer site](https://developer.salesforce.com) and complete the registration process, or sign in if you already have a Salesforce developer account.
2. On the top right corner, Click your **avatar** and navigate to **My Developer Account**.
3. On the top right corner of your developer dashboard, click your **avatar** and go to **Settings**.
4. In the **Personal Information** dropdown on the left, click **Reset My Security Token**.
5. Complete the reset process and get your security token.


#### Wix Platform 


##### Secrets Manager  



*   Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager) and create a new secret with the name `velo-salesforce-credentials`. Store the following JSON object in the secret: 

    ```js
    { 

      "username": "YOUR_SALESFORCE_USER_NAME", 
      "password": "YOUR_SALESFORCE_PASSWORD", 
      "token": "YOUR_SALESFORCE_SECURITY_TOKEN" 

    }
    ```

    **Note:** Make sure that the object is in correct JSON format, including all quotes. If not, the Secrets Manager will not be able to read the object properly, resulting in incorrect Salesforce credentials. 


### Package Content 

The following backend files are included in the package. Note that only exported functions that you can use in your site are listed here.


#### salesforce.js 

The code in this file contains functions for querying, retrieving, creating, updating, and deleting data records from Salesforce. 

To use the functions below in your backend code, import them with the following syntax: 
```js
import { <functionName> } from ‘@velo/salesforce-integration-backend’;
```

The file contains the following functions:



*   **queryRecords()**

    Queries a Salesforce object using an SOQL command and returns the data records that match the criteria specified in the command. 

    ```js
    export async function queryRecords(queryStr: String);
    ```


*   **retrieveRecords()**

    Retrieves data records with the specified IDs from a Salesforce object. 

    Note that you can only use this function when you know the IDs of the records you want to retrieve in advance. Use the `queryRecords()` function instead to get the records when you don’t know the IDs, or to specify other selection criteria.

    ```js
    export async function retrieveRecords(sfObjName: String, ids: String[]);
    ```


*   **createRecords()** 

    Creates one or more records of a specific Salesforce object. 

    ```js
    export async function createRecords(sfObjName: String, records: Object|Object[]);
    ```


*   **updateRecords()**

    Updates specified data records in a specific Salesforce object. 

    ```js
    export async function updateRecords(sfObjName: String, records: Object[]);
    ```


*   **deleteRecords()**

    Deletes specified data records in a specific Salesforce object with the specified IDs.   

    ```js
    export async function deleteRecords(sfObjName: String, records: Object[]);
    ```


##### Parameters  


*   **`sfObjName`:** Name of the Salesforce object (for example, `Account`). See the list of all Salesforce objects [here](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_list.htm).
*   **`queryStr`:** An [SOQL](https://jsforce.github.io/document/#using-soql) command specifying what to query. 
*   **`ids`:** Array of record IDs for a Salesforce object. Each instance of a Salesforce object is called a record.
*   **`records`:** Single or array of record objects. Each instance of a Salesforce object is called a record. 


### How to Use the Package  

This section demonstrates how you can work with the package, and the different options for using the package functions.


#### Create Data Records in Salesforce 

The following describes how you can use this package to add a new Salesforce object instance (record). In our example, we demonstrate how to create a new [Account object](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_account.htm) record, but you can use the code to create one or more records for any [Salesforce object type](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_list.htm). In our example, we create the record with the `Name` and `Phone` fields, but you can adapt the code to create records with any fields. .



1. To use the `createRecords()` function in your page code, add a web module to your backend. We’ll call ours **salesforce-wrapper.jsw**. Include the following code in this file:

    ```js
    import { createRecords } from '@velo/salesforce-integration-backend';

    export async function createRecordsWrapper(record) {
      try {
          const res = await createRecords('Account', record);
          return res.success;
      } catch (err) {
          return Promise.reject(err);
      }
    }
    ```

2. Add the following page elements to your site:
    *   2 text inputs for adding the record data. 
    *   Button to trigger record creation.
    *   Text element for validation messages.

3. Import the `createRecordsWrapper()` function from the web module to your page code and run it when the button is clicked. Call the `createRecordsWrapper()` function to create the record with data from the input elements.

    ```js
    import {createRecordsWrapper } from 'backend/salesforce-wrapper.jsw';

    $w.onReady(function () {
      registerHandlers();
    });

    function registerHandlers() {
      $w('#createButton').onClick(() => createRecordsHandler());
    }

    async function createRecordsHandler() {
      const name = $w('#nameInput').value;
      const phone = $w('#phoneInput').value;
      if (name && phone) {
        try {
          const res = await createRecordsWrapper({ name, phone });
          $w('#nameInput').value = '';
          $w('#phoneInput').value = '';
          if (res) {
              showMsg('Your record was added.');
          } else {
              showMsg('Error: Your record was not added.');
          }
        } catch (err) {
            showMsg(err.toString());
        }
      } else {
          showMsg('Please provide your name and then click the Add button again.')
      }
    }

    function showMsg(msg) {
      $w('#msgText').text = msg;
      $w('#msgText').expand()
    }
    ```

#### Query Data Records from Salesforce 

The following describes how you can use this package to query a phone number from a specific Account record (Salesforce object) based on the record name. If you want to query a different field  or a different Salesforce object type, simply adapt the code for your use case.


1. To use the `queryRecords()` function in your page code, add a web module to your backend. We’ll call ours **salesforce-wrapper.jsw**. Include the following code in this file:

    ```js
    import { queryRecords } from '@velo/salesforce-integration-backend';

    export async function getPhoneBasedOnName(accountName) {
        const query = `SELECT phone FROM Account WHERE name='${accountName}'`;
      try {
          const result = await queryRecords(query);
          return result.records[0].Phone;
      } catch (err) {
          return Promise.reject('Query records failed. Info: ' + err);
       }
    }
    ```

2. Add the following page elements to your site:
    *   Text input for getting the record name. 
    *   Text element for displaying the returned data. 
    *   Button to trigger the query.
    *   Text element for validation messages.

3. Import the `getPhoneBasedOnName()` function from the web module to your page code and run it when the button is clicked to query the records.

    ```js
    import {getPhoneBasedOnName } from 'backend/salesforce-wrapper.jsw';

    $w.onReady(function () {
      registerHandlers();
    });

    function registerHandlers() {
      $w('#queryButton).onClick(() => queryRecordsHandler());
    }

    async function queryRecordsHandler() {
      try {
        const name = $w('#getNameInput').value;
        const res = await getPhoneBasedOnName(name);
        $w('#phoneText').value = res;
      } catch (err) {
          showMsg(err.toString());
      }
    }
  
    function showMsg(msg) {
      $w('#msgText').text = msg;
      $w('#msgText').expand()
    }
    ```


### npm Packages 

This Velo package uses the following npm package. To view the npm license, see the npm readme. 



*   [jsforce](https://www.npmjs.com/package/jsforce)


### Release Notes 

**1.0** Initial version.


### Tags 

salesforce, jsforce, sales
