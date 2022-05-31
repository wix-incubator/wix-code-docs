
## SendGrid Templates

The SendGrid Templates package allows you to access SendGrid’s transactional email templates from within your Wix site. You can access your templates including any different versions, use them to send emails with dynamic content, and schedule your emails to be sent at a specific time. The package also enables you to cancel or pause your scheduled email sends, retrieve a list of scheduled email sends, and clear the status of a scheduled send.


### Setup

Before using the package, set up the following:


#### SendGrid Platform

1. Create a [SendGrid](https://sendgrid.com/) account.
2. In the left sidebar, click **Settings**. 
3. Search for **Sender Authentication** and follow the steps for **Single Sender Verification**. Copy the verified sender email address you used in those steps. You will need it to edit the config.json file later.

![sendgrid_screenshot](https://user-images.githubusercontent.com/91874936/156928463-66757897-aae7-4529-816e-d4af6cacc29d.png)


4. Also in **Settings**, go to **API Keys**. 
5. Create a new API key and copy it to your clipboard. You will need it to set up the Wix **Secrets Manager** in the next section. 


#### Wix Platform


##### Secrets Manager

1. Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager) and create a new secret called ``velo-sendgrid-api-key``.
2. Store the Sendgrid API Key from [step 3](#sendgrid-platform) in the previous section in this secret.


##### Configurations

Configure the following in your config.json file:

1. **`senderEmail`**: The verified sender email address used when setting up **Single Sender Verification** in your SendGrid account. This is the email address your dynamic template emails will be sent from. 
2. **`emailDefaultContent`:** A string of text formatted with HTML tags. It defines the default content of emails sent when no template is provided to SendGrid’s Mail Send API. You can customize the default content as needed. 

Example config.json file: 
```js
{
    "senderEmail": "test@test.com",
    
    “emailDefaultContent”: “<p>Place your default email content here<p>”
}
```


### Package Content


#### Backend Files

The following files are included in the package. Note that only exported functions that you can use in your site are listed here. 


##### config.json

The code in this file contains the configurations needed for using this package. Follow the instructions in the [Setup](#setup) section to edit the file with your configurations. 


##### email-templates.js

The code in this file contains functions that get a list of SendGrid email templates, get a specific email template, get a specific version of an email template, and send emails based on templates. 

To use the functions below in your code, import them with the following syntax:


``` `import { <functionName> } from '@velo/sendgrid-templates-backend'` ```



* **getEmailTemplates()**
   
    Gets a list of SendGrid email templates. You can choose to retrieve all available templates or only a specific page. 

    **Syntax:**
    ```js
    `function getEmailTemplates(paging: object): Promise<response: object>'
    ```

    **Parameters:**
    * **`paging`**: (optional) An object that contains the details needed to get a list of templates. The object contains the following properties to specify the page a user wants: 
        * **`page_size`**: (optional) The number of templates to be returned per page of results. Defaults to the maximum size of 200. 
        * **`page_url`**: (optional) A URL that corresponds to a specific page of email templates, provided by the result’s metadata. See the example return value below. The `page_url` is the value of the ‘self’ in the `_metadata` object.
        * **`page_token`**: (optional) A string corresponding to a specific page of email templates, provided by the result's metadata. See the example return value below. The `page_token` is a query parameter that is part of the page URL.

    **Returns:**
    A promise that resolves to an object containing an array of template objects, and a metadata object. 

    Example return value:
    ```js
    {
      "result": [
        {
          "id": "d-ff8d987db576432dbaaa769a73dcb2a8",
          "name": "my template",
          "generation": "dynamic",
          "updated_at": "2021-12-02 13:02:21",
          "versions": [
            {
              "id": "4b430d04-f10c-4990-8fd4-b6629e726415",
              "template_id": "d-ff8d987db576432dbaaa769a73dcb2a8",
              "active": 1,
              "name": "Untitled Version",
              "generate_plain_content": true,
              "subject": "Welcome to the family!",
              "updated_at": "2021-12-02 13:03:04",
              "editor": "design",
              "thumbnail_url": "//us-east-2-production-thumbnail-bucket.s3.amazonaws.com/868784fd1506eebeb59ae01dc3aaa04f1e59b163d5996a4026a1091947c030c7.png"
            }
          ]
        }
      ],
      "_metadata": {
        "self": "https://api.sendgrid.com/v3/templates?page_token=ebadOJ4jiINUZYD69kzBxPgtG0Nncm4fJcMmqbUWnPg7tKRz&generations=legacy,dynamic",
        "next": "https://api.sendgrid.com/v3/templates?page_token=LKi4ypZb_1v2CD3QzDRpL0HIY-ErT26fM8wZy3dyyEsWrgw7&generations=legacy,dynamic",
        "count": 5
      }
    }
    ```



* **getEmailTemplateById()**

    Gets a specific email template, including all versions, by ID.

    **Syntax:**
    ```js
    `function getEmailTemplateById(template_id: string): Promise<response: object>'
    ```

    **Parameters:**
    * **`template_id`**: A string representing a specific email template. 

    **Returns:**

    A promise that resolves to a template object containing all template details including all versions of the template. 

    Example return value:
    ```js
    {
      "id": "d-07b514e74bd2433f990e74874added61",
      "name": "my template",
      "generation": "dynamic",
      "updated_at": "2022-02-17 12:25:15",
      "versions": [
        {
          "id": "3e3f2a9b-0cf5-4fc4-8b30-d9664cf37b05",
          "user_id": 23020129,
          "template_id": "d-07b514e74bd2433f990e74874added61",
          "active": 1,
          "name": "Clone: Clone: Clone: 3 2022-02-17T12:24:20.220Z 2022-02-17T12:24:59.511Z 2022-02-17T12:25:14.927Z",
          "html_content": "&lt;!DOCTYPE html PUBLIC \...”
        }
      ]
    }
    ```


* **getEmailTemplateVersionById()**

    Gets the details of a specific version of an email template by ID.

    **Syntax:**
    ```js
    `function getEmailTemplateVersionById(template_id: string, version_id: string): Promise<response: object>'
    ```

    **Parameters:**
    * **`template_id`**: A string representing a specific email template. 
    * **`version_id`**: A string representing a specific version of the email template.

    **Returns:**
    A promise that resolves to an object containing a specific version of a template with its details. 

    Example return value:
    ```js
    {
      "id": "3e3f2a9b-0cf5-4fc4-8b30-d9664cf37b05",
      "template_id": "d-07b514e74bd2433f990e74874added61",
      "active": 1,
      "name": "Clone: Clone: Clone: 3 2022-02-17T12:24:20.220Z 2022-02-17T12:24:59.511Z 2022-02-17T12:25:14.927Z",
      "html_content": "&lt;!DOCTYPE html PUBLIC \..."
    }
    ```


* **sendEmailTemplate()**

    Sends a transactional email using a template and dynamic content. 

    **Syntax:**
    ```js
    `function sendEmailTemplate(details: object): Promise<response: object>'
    ```

    **Parameters:**
    * **`details`**: An object that contains the following properties: 
      * **`template_id`**: A string representing a specific email template. 
      * **`personalizations`**: An array of objects representing a contact list and dynamic data required by the email template such as images, texts, and links. Each object must contain the following 2 properties:
        * **`to`** : An array of objects containing the emails and names of the intended recipients. 
        * **`dynamic_template_data`**: An object representing the dynamic data required by an email template: 

            ```js
            [{
                "to": [{
                    “email”: “john_doe@example.com”,
                    “name”: “John Doe”
                }],
                "dynamic_template_data": {
                    "subject": "Subject",
                    "image": "image url"
                }
            }]
            ``` 

        * You can find other optional properties for `personalizations` in the [SendGrid Mail Send API Documentation](https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send).
      * **`send_at`**: (optional) A number, written as a [unix timestamp](https://unixtime.org/), representing the time you want your email to be sent. This value  can be overridden by using the optional `send_at` property in the `personalizations` object. Delivery of an email cannot be scheduled more than 72 hours in advance. 
      * **`batch_id`**: (optional) A string representing a batch of emails that are sent simultaneously. Including a `batch_id` in your request adds the new email to that batch. It also enables you to cancel or pause the send of a scheduled email.
      * You can find a list of additional optional properties for the `details` object, such as **`from`** and `**reply_to`** in the [SendGrid Mail Send API Documentation](https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send).

    **Returns:**
    A promise that resolves to a response object with a 202 response code and status text.

    Example return value:
    ```js
    {
      “status”: 202,
      “statusText”: “Accepted”
    }
    ```

    **Note**: It’s better to schedule emails to be sent at off-peak times. Most emails are scheduled and sent at the top of the hour or half hour. Scheduling sends at an off-peak time, such as 10:53, can result in lower deferral rates due to reduced traffic. 


##### scheduled-sends-methods.js

The code in this file contains functions that cancel or pause your scheduled email sends, and resume sending canceled or paused sends, as long as their `send_at` time hasn’t arrived. There are also functions for updating the status of your scheduled sends, and getting a list of the sends that are paused or canceled. 

To use the functions below in your code, import them with the following syntax:

``` `import { <functionName> } from '@velo/sendgrid-templates-backend'` ```


* **getBatchId()**

    Generates a batch ID string that is used to represent a group of emails that are sent simultaneously.
    
    **Note**: You can have up to 100 unique batch IDs at a time. 
    **Syntax:**
    ```js
    `function getBatchId(): Promise<response: string>'
    ```

    **Parameters:**
    None

    **Returns:**
    A promise that resolves to a batch ID string.  


* **cancelPauseScheduledEmails()**

    Cancels or pauses the send of one or more scheduled emails using a batch ID. 

    **Syntax:**
    ```js
    `function cancelPauseScheduledEmails(batch_id: string, status: string): Promise<response: object>'
    ```

    **Parameters:**
    * **`batch_id`**: A string representing a specific batch of emails that are sent simultaneously.  
    * **`status`**: A string representing the batch send status. The status can be one of the following: 
      * **`‘cancel’`**
      * **`‘pause’`**

    **Returns:**
    A promise that resolves to a response object containing the batch ID and the new batch send status.

    Example return value:
    ```js
    {
      “batch_id”: “MjJjNjQxYzItOGYyMC0xMWVjLThmNjAtODI4Mzk5MjBmMDQ0LTU3MjA1NTVmNg”,
      “status”: “pause”
    }
    ```
    
    **Notes:**
    * Once you use `cancelPauseScheduledEmails()` to pause or cancel a send, you must use either `updateScheduleSendStatus()` or `clearScheduleSendStatus()` to change or remove the send status. 
    * When a batch is canceled, all emails associated with that batch are discarded from the sending queue once their original `send_at` value has passed. 
    * When a batch is paused, all emails associated with that batch remain in the sending queue for up to 72 hours after the `send_at` value has passed. If the pause status is removed within those 72 hours, the batch is delivered. The batch is discarded 72 hours after the `send_at` value has passed. 
    * A batch canceled less than 10 minutes before it’s scheduled send time is not guaranteed to be canceled. 


* **clearScheduledSendStatus()**

    Removes the canceled or paused status of a batch’s scheduled send.  

    **Syntax:**
    ```js
    `function clearScheduledSendStatus(batch_id: string): Promise<response: object>`
    ```

    **Parameters:**
    * **`batch_id`**: A string representing a specific batch of emails that are sent simultaneously.

    **Returns:**
    A promise that resolves to a response object with a 204 response code and status text. 

    Example return value:
    ```js
    {
      “status”: 204,
      “statusText”: “Accepted”
    } 
    ```


* **updateScheduledSendStatus()**

    Updates the status of a batch’s scheduled send. 

    **Syntax:**
    ```js
    `function updateScheduledSendStatus(batch_id: string, status: string): Promise<response: object>'
    ```

    **Parameters:**
    * **`batch_id`**: A string representing a specific batch of emails that are sent simultaneously.  
    * **`status`**: A string representing the batch status. The status can be one of the following: 
        * **`’cancel’`**
        * **`’pause’`**

    **Returns:**
    A promise that resolves to a response object with a 204 response code and status text. 


* **getScheduledSendsStatus()**

    Gets the scheduled send status for a specific batch ID or all batch IDs.

    **Syntax:**
    ```js
    `function getScheduledSendsStatus(batch_id: string): Promise<response: array>'
    ```

    **Parameters:**
    * **`batch_id`**:(optional) A string representing a specific batch of emails that are sent simultaneously.  

    **Returns:**
    A promise that resolves to an array of objects containing batch IDs and their scheduled send statuses.

    Example return value:
    ```js
    [
      {
        “batch_id”: “MjJjNjQxYzItOGYyMC0xMWVjLThmNjAtODI4Mzk5MjBmMDQ0LTU3MjA1NTVmNg”,
        “status”: “pause”
      }
    ]
    ```

    **Note:** This function only returns the scheduled sends that have a batch ID. It is possible to schedule a send for an email without assigning it a batch ID. However, we recommend assigning a batch ID to any scheduled send that may need to be paused or canceled in the future. 


### NPM Packages

None


### Release Notes

1.0 Initial Version. 


### Tags

SendGrid, templates, emails, dynamiccontent, scheduledsends, batch
