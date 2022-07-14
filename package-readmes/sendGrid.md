## SendGrid Custom Notification Integration  

The SendGrid Custom Notification Integration package allows you to send custom notification emails through SendGrid when specific backend events are triggered. See the list of backend events that are currently supported by the package in the package’s config.json file. 

**Note:** It is possible to send custom notification emails when frontend events are triggered, but it is not recommended for security purposes.


### Setup 

Before using the package, set up the following:


#### SendGrid Platform 



1. Create a [SendGrid](https://sendgrid.com/) account.
2. In the left sidebar, click **Settings**. Then search for **Sender Authentication**, and follow the steps for **Single Sender Verification**. Then copy the verified sender email address you used in those steps. You will need it when editing the config.json file later.
3. Also in **Settings**, go to **API Keys**. Create a new API key and copy its value. You’ll need this key in the **Secrets Manager** section of the setup.


#### Wix Platform 


##### Secrets Manager 
Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager) and create a new secret called `velo-sendgrid-api`. Store the SendGrid API key from [step 3](#sendgrid-platform) above in this secret.


##### Configurations

Configure the following in your config.json file: 

1. **`verifiedSenderEmail`:** The verified sender email address (string) used when setting up **Single Sender Verification** in your SendGrid account. This is the email address your notification emails will be sent from. 

2. **`recipientEmails`:** The array of email addresses to send your notification emails to.

3. **`events`:** An object that contains the currently supported backend events for which you can trigger email notifications. For each event, set the respective boolean. To send a notification email when one of these backend events is triggered, set that event’s boolean value to `true`. 

4. **`templates`:** An array of event template objects that define the contents (subject and body) of the email notifications that are sent when the respective event is triggered. Customize the contents of your email notifications by editing the subject and body of each event template object as desired. 

**Note:** The contents of your email notifications can include html style tags, and variable placeholders from the event using ${ } syntax. For example, the body of this email notification includes html line breaks and headings, and a placeholder variable for the form name that was submitted.   

```js
"wixCrm_onFormSubmit": {
  "subject": "[Custom Notifier] A form was submitted",
  "body": "<h3>A new wixCrm_onFormSubmit event was triggered on your Wix site!</h3><strong>Event Details:</strong><br>form name: ${formName} <br><br><font color='grey'>You can control notification settings for future events by going to your Wix website's editor -> Packages -> @velo/sendgrid-custom-notification-integration</font>"
},
```

The possible placeholders for each event are located in the `event` parameter of the backend event. In the example above, you can find the form name placeholder, `formName` in the event parameter of the [`onFormSubmit()`](https://www.wix.com/velo/reference/wix-crm-backend/events/onformsubmit) event. 


### Package Content 
The following files are included in the package. Note that only exported functions that you can use in your site are listed here.

**config.json**

The code in this file contains the configurations needed for using this package. Follow the instructions in the [Setup](#configurations) section to edit the file with your configurations.

**events.js**

The code in this file contains functions that build the contents of the event notification emails from the event template objects located in the config.json file. It also handles the placeholders in the contents. 

**notifier.js**

The code in this file contains a function that sends the notification email contents taken from the events.js file, and the sender and recipient email information from the config.json file to sendGrid. 


### npm Packages 

This Velo package uses the following npm packages. To view the npm license, see the npm readmes.

*   [@sendgrid/mail](https://www.npmjs.com/package/@sendgrid/mail)
*   [lodash](https://www.npmjs.com/package/lodash)


### Release Notes 

**1.0** Initial version.


### Tags 

sendGrid, notifications, customEmails, emails, automations, events