## Google Sheets Integration 

> **Example Site**  
> To see a live example, click [here](https://www.wix.com/velo/example/google-sheets-integration).

The Google Sheets Integration package provides you with the ability to easily monitor and manage data stored in a Google spreadsheet from a Wix site. You can perform the following actions with this package:



*   **Get:** Get data from any cell in your Google spreadsheet. 
*   **Append:** Add new data to your Google spreadsheet. 
*   **Update:** Update data in your Google spreadsheet. 
*   **Clear:** Clear data from your Google Spreadsheet. 

To see an example site that demonstrates how to use the package, click [here](https://www.wix.com/velo/example/google-sheets-integration).

### Setup 
Before using the package, set up the following:

#### Google Cloud Platform 


1. Go to the Google [developer site](https://console.developers.google.com/) and create a new project or choose an existing one.
2. In the left sidebar, click **Library**. Search for **Google Sheets API** and enable that API in your project.
3. On the left sidebar, click **Credentials**. On the top menu, click **Create Credentials** and select **Service Account**. Provide the needed information and finish all steps.
4. On the **Credentials** main page, you should see a new entry in the **Service Accounts** table. Click the entry’s **edit icon**.
5. Scroll down to the **Keys** section, and click **Add Key > Create New key** and select **JSON**. This will cause a file to download.
6. Open the downloaded file and copy the **client_email** value.
7. Create a new Google spreadsheet, or open an existing one that you want to use for your site. Keep the spreadsheet tab open. You will need it later. Share the Google spreadsheet with the copied **client_email** value.
8. Copy the contents of the downloaded file. You’ll need it for the **Wix Secrets Manager** in the next section. 


#### Wix Platform 


##### Secrets Manager  



1. Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager) and create a new secret with the name `velo-spreadsheet-credentials`. Store the contents of the downloaded file in the secret.
2. Go to the tab with your Google Spreadsheet open. Notice the URL. It contains your sheet ID: `https://docs.google.com/spreadsheets/d/{YOUR_SHEET_ID}/edit#gid=0`. <br/>For example, if your spreadsheet URL is: `https://docs.google.com/spreadsheets/d/1Ui3ha9jLRW4mTYBUimt9ooTRyS301SAKpMv_2zYx0n0/edit#gid=0`, the value of your sheet ID is: `1Ui3ha9jLRW4mTYBUimt9ooTRyS301SAKpMv_2zYx0n0`.
3. Copy your sheet ID and store it as a new secret in the **Secrets Manager** with the name `sheetId`. 


### Package Content 

The following backend files are included in the package. Note that only exported functions that you can use in your site are listed here.


#### googlesheet.js 

The code in this file contains functions for getting, appending, updating, and clearing data from a Google spreadsheet. 

To use the functions below in your backend code, import them with the following syntax: 

 
```js
import { <functionName> } from ‘@velo/google-sheets-integration-backend’;
```

The file contains the following functions:

*  **getValues()**

    Queries the spreadsheet for a specified range of cells and returns one or more arrays containing the values stored in those cells.

    ```js
    export async function getValues(sheetId: String, range: String)
    ```

*  **appendValues()**
   
   Appends the specified values to the spreadsheet either in the current tab in a new row after the last current row, or in a specific location. To append the  specified values to a specific location in the spreadsheet, add the optional `range` parameter.

    ```js
    export async function appendValues(sheetId: String, values: String[], range: String)
    ```

*   **updateValues()**

    Updates the data in the specified range and dimension of the spreadsheet with the values provided.

    ```js
    export async function updateValues(sheetId: String, values: String[], range: String, dimension: String)
    ```

*   **clearValues()**

    Clears the data in the specified range of the spreadsheet.  

    ```js
    export async function clearValues(sheetId: String, range: String)
    ```



##### Parameters 



*  **`sheetId`:** ID of the spreadsheet you want to use. You can find the ID string in the URL of your spreadsheet link: `https://docs.google.com/spreadsheets/d/{YOUR_SHEET_ID}/edit#gid=0`.
*  **`values`:** Array of strings you want to insert into the spreadsheet.
*  **`range`:** The location in the spreadsheet you want to select. String must be in ‘A1’ notation. For example, to select cells A1:B1 in the current tab, use `‘A1:B1’`. To select cells A1:B1 in Tab2 of the spreadsheet, add the tab name before the cells and separate it with an exclamation mark. For example, `‘Tab2!A1:B1’`.
*  **`dimension`:** The type of your range. String is either `‘ROWS’` or `‘COLUMNS’`.


### How to Use the Package  

This section demonstrates how you can work with the package, and the different options for using the package functions. There are 4 main use cases you can implement with this package:

*   Get data from your spreadsheet 
*   Add new data to your spreadsheet 
*   Update data in your spreadsheet 
*   Clear data from your spreadsheet


#### Get Data from a Google Spreadsheet 

The following describes how you can use this package to get the data from the first row (`A1:B1`) of your spreadsheet. If you want to get data from a different location in your spreadsheet, simply pass a different `range` to the `getValuesWrapper()` function located in the `getValuesFromSheet()` function in your page code.


1. Open your Google spreadsheet and place some data in the first row (`A1:B1`):

    ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/02/01/9ebdae4f-e903-4d8d-8936-4e8aaf34db1b/cb27cd64-b210-4390-9758-c873bc4fcb6a.png 'image_spreadsheet_A1:B1')


2. To use the `getValues()` function in your page code, add a web module to your backend. We’ll call ours **googlesheet-wrapper.jsw**. Include the following code in this file: 

    ```js 
    import { getValues } from '@velo/google-sheets-integration-backend';
    import wixSecretsBackend from 'wix-secrets-backend';

    async function getSecretSheetId() {
        const id = await wixSecretsBackend.getSecret('sheetId');
        return id;
    }

    export async function getValuesWrapper(range) {
        try {
            validateRange(range);
            try {
                const sheetId = await getSecretSheetId();
                const result = await getValues(sheetId, range);
                const response = result.data.values;
                return response;
            } catch (err) {
                return Promise.reject('Get values failed. Info: ' + err);
            }
        } catch (validationError) {
            return Promise.reject(validationError.toString());
        }
    }

    function validateRange(range) {
        const regex = /([a-zA-Z0-9:!]+)/g;
        const match = range.match(regex);
        if (!match || match.length !== 1 || match[0] !== range) {
            throw new Error(`Input range is invalid (got: ${range})`);
        }
    }
    ```

3. Add the following page elements to your site:
    *   2 text elements for displaying the data. 
    *   Button to trigger the get.
    *   Text element for validation messages.

4. Import the `getValuesWrapper()` function from the web module to your page code and run it when the button is clicked. 

    ```js 
    import { getValuesWrapper } from 'backend/googlesheet-wrapper.jsw';

    $w.onReady(function () {
        registerHandlers();
    });

    function registerHandlers() {
        $w('#getButton').onClick(() => getValuesFromSheet());
    }

    async function getValuesFromSheet() {
        try {
            const [name, email] = (await getValuesWrapper('A1:B1'))[0];
            $w('#nameOutput').value = name;
            $w('#emailOutput').value = email;
        } catch (err) {
            showMessage(err.toString());
        }
    }

    function showMessage(msg) {
        $w('#showMsg').text = msg;
        $w('#showMsg').expand()
        setTimeout(() => {
            $w('#showMsg').collapse();
        }, 5000);
    }
    ```


#### Add Data to a Google Spreadsheet 

The following describes how you can use this package to add data to the next empty row of your spreadsheet. 

**Note:** The `appendValues()` function appends data to your spreadsheet linearly. If there are blank cells in between data cells, the function may not work as expected. 


1. To use the `appendValues()` function in your page code, add a web module to your backend. We’ll call ours **googlesheet-wrapper.jsw**. Include the following code in this file: 

    ```js 
    import { appendValues } from '@velo/google-sheets-integration-backend';
    import wixSecretsBackend from 'wix-secrets-backend';

    async function getSecretSheetId() {
        const id = await wixSecretsBackend.getSecret('sheetId');
        return id;
    }

    export async function appendValuesWrapper(values) {
        try {
            validateValues(values);
            try {
                const sheetId = await getSecretSheetId();
                const result = await appendValues(sheetId, values);
                const response = result.data.updates.updatedRows + ' rows were appended';
                return response;
            } catch (err) {
                return Promise.reject('Append values failed. Info: ' + err);
            }
        } catch (validationError) {
            return Promise.reject(validationError.toString());
        }
    }

    function validateValues(values) {
        for (const val of values) {
            if (typeof val !== 'string') {
                throw new Error(`Input value's type must be a string (got: ${val}, ${typeof val})`);
            }
        }
    }
    ```


2. Add the following page elements to your site:
    *   2 text inputs for adding the data. 
    *   Button to trigger the addition.
    *   Text element for validation messages.

3. Import the `appendValuesWrapper()` function from the web module to your page code and run it when the button is clicked. 

    ```js 
    import { appendValuesWrapper } from 'backend/googlesheet-wrapper.jsw';

    $w.onReady(function () {
        registerHandlers();
    });

    function registerHandlers() {
        $w('#appendButton').onClick(() => saveValuesToSheet());
    }

    async function saveValuesToSheet() {
        const name = $w('#nameInput').value;
        const email = $w('#emailInput').value;
        const values = [name, email];
        try {
            const res = await appendValuesWrapper(values);
            $w('#nameInput').value = '';
            $w('#emailInput').value = '';
            showMessage(res);
        } catch (err) {
            showMessage(err.toString());
        }
    }

    function showMessage(msg) {
        $w('#showMsg').text = msg;
        $w('#showMsg').expand()
        setTimeout(() => {
            $w('#showMsg').collapse();
        }, 5000);
    }
    ```


#### Update Data in a Google Spreadsheet 

The following describes how you can use this package to update the data in the first row of your spreadsheet (`A1:B1`). If you want to update data from a different location in your spreadsheet, simply pass a different `range` and `dimension` to the `updateValuesWrapper()` function located in the `updateValuesOnSheet()` function in your page code.


1. To use the `updateValues()` function in your page code, add a web module to your backend. We’ll call ours **googlesheet-wrapper.jsw**. Include the following code in this file: 

    ```js 
    import { updateValues } from '@velo/google-sheets-integration-backend';
    import wixSecretsBackend from 'wix-secrets-backend';

    async function getSecretSheetId() {
        const id = await wixSecretsBackend.getSecret('sheetId');
        return id;
    }

    export async function updateValuesWrapper(values, range, dimension) {
        try {
            validateValues(values);
            validateRange(range);
            validateDimension(dimension);
            try {
                const sheetId = await getSecretSheetId();
                const result = await updateValues(sheetId, values, range, dimension);
                const response = result.data.updatedCells + ' cells were updated';
                return response;
            } catch (err) {
                return Promise.reject('Update values failed. Info: ' + err);
            }
        } catch (validationError) {
            return Promise.reject(validationError.toString());
        }
    }

    function validateValues(values) {
        for (const val of values) {
            if (typeof val !== 'string') {
                throw new Error(`Input value's type must be a string (got: ${val}, ${typeof val})`);
            }
        }
    }

    function validateRange(range) {
        const regex = /([a-zA-Z0-9:!]+)/g;
        const match = range.match(regex);
        if (!match || match.length !== 1 || match[0] !== range) {
            throw new Error(`Input range is invalid (got: ${range})`);
        }
    }

    function validateDimension(dimension) {
        if (dimension !== 'ROWS' && dimension !== 'COLUMNS') {
            throw new Error(`Input dimension must be either 'ROWS' or 'COLUMNS'(got: ${dimension})`);
        }
    }
    ```

2. Add the following page elements to your site:
    *   2 text inputs for updating the data. 
    *   Button to trigger the update.
    *   Text element for validation messages.
    
3. Import the `updateValuesWrapper()` function from the web module to your page code and run it when the button is clicked. 

    ```js 
    import { updateValuesWrapper } from 'backend/googlesheet-wrapper.jsw';

    $w.onReady(function () {
        registerHandlers();
    });

    function registerHandlers() {
        $w('#updateButton').onClick(() => updateValuesOnSheet());
    }

    async function updateValuesOnSheet() {
        const name = $w('#nameInput').value;
        const email = $w('#emailInput').value;
        const values = [name, email];
        try {
            const res = await updateValuesWrapper(values, 'A1:B1', 'ROWS');
            $w('#nameInput').value = '';
            $w('#emailInput').value = '';
            showMessage(res);
        } catch (err) {
            showMessage(err.toString());
        }
    }

    function showMessage(msg) {
        $w('#showMsg').text = msg;
        $w('#showMsg').expand()
        setTimeout(() => {
            $w('#showMsg').collapse();
        }, 5000);
    }
    ```

#### Clear Data from a Google Spreadsheet

The following describes how you can use this package to clear a range of data from your spreadsheet:

1. To use the `clearValues()` function in your page code, add a web module to your backend. We’ll call ours **googlesheet-wrapper.jsw**. Include the following code in this file: 
    
    ```js
    import { clearValues } from '@velo/google-sheets-integration-backend';
    import wixSecretsBackend from 'wix-secrets-backend';

    async function getSecretSheetId() {
        const id = await wixSecretsBackend.getSecret('sheetId');
        return id;
    }

    export async function clearValuesWrapper(range) {
        try {
            validateRange(range);
            try {
                const sheetId = await getSecretSheetId();
                const result = await clearValues(sheetId, range);
                const response = 'Range cleared: ' + result.clearedRange;
                return response;
            } catch (err) {
                return Promise.reject('Clear values failed. Info: ' + err);
            }
        } catch (validationError) {
            return Promise.reject(validationError.toString());
        }
    }

    function validateRange(range) {
        const regex = /([a-zA-Z0-9:!]+)/g;
        const match = range.match(regex);
        if (!match || match.length !== 1 || match[0] !== range) {
            throw new Error(`Input range is invalid (got: ${range})`);
        }
    }
    ```

2. Add the following page elements to your site:
    *   1 text input for clearing the data. 
    *   Button to trigger the clear.
    *   Text element for validation messages.

3. Import the `clearValuesWrapper()` function from the web module to your page code and run it when the button is clicked. 

    ```js 
    import { clearValuesWrapper } from 'backend/googlesheet-wrapper.jsw';

    $w.onReady(function () {
        registerHandlers();
    });

    function registerHandlers() {
        $w('#clearButton').onClick(() => clearValuesFromSheet());
    }

    async function clearValuesFromSheet() {
        const range = $w('#range').value;
        try {
            const res = await clearValuesWrapper(range);
            $w('#range').value = '';
            showMessage(res);
        } catch (err) {
            showMessage(err.toString());
        }
    }

    function showMessage(msg) {
        $w('#showMsg').text = msg;
        $w('#showMsg').expand()
        setTimeout(() => {
            $w('#showMsg').collapse();
        }, 5000);
    }
    ```


### npm Packages 

This Velo package uses the following npm package. To view the npm license, see the npm readme. 



*   [googleapis](https://www.npmjs.com/package/googleapis) 


### Release Notes 

**1.0** Initial version.


### Tags 

google, spreadsheet, googleapis
