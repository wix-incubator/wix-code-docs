# Twilio OTP (One-Time Password)

This package can be used as an alternative login method for new and existing site members, without requiring an email address. It allows you to verify phone numbers, providing an extra layer of security during the sign-in process. The package creates a new site member account for site visitors logging in for the first time.


## Setup

Before using this package, set up the following:


*   **Twilio Account:** Create a Twilio Account as described [here](https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account).
*   **Verification Service**: [Use the Twilio API to set up a verification service](https://www.twilio.com/docs/verify/api) and note its ID.
*   **Secrets Manager:** Add the following Twilio keys from your Twilio account and your chosen Verification Service ID to the [Secrets Manager](https://support.wix.com/en/article/corvid-about-the-secrets-manager):
    *   `velo-otp-twilioAccountSid`: Your Twilio Account SID
    *   `velo-otp-twilioAuthToken`: Your Twilio Auth Token
    *   `velo-otp-twilioVerifyServicesId`: Your Twilio Verification Service ID
 *  **Config file**: Define the `mailDomain` property in the config.json file located in your backend code. This is a dummy domain, used for reference only.


A site member is created for first-time logins, and assigned a dummy email address as an ID, linked to their phone number. This email address is added as the site member's email address. The local part of the email address is the phone number, and the domain is the value of the `mailDomain` property in the config file. For example: `1234567890@mail-domain.com`


## Package Content


This package contains the following backend files. Note that only exported functions that you can use in your site are listed here.


### twilio-methods.jsw

To use the functions below in your code, import them with the following syntax:


```js
import { <functionName> } from '@velo/wix-members-twilio-otp-backend';
```


The code in this file defines the Twilio functions used in the package. The file includes the following functions:


#### sendLoginConfirmCode()

Sends a confirmation code to the phone number if the number is valid.

   **Syntax:**

```js
    async function sendLoginConfirmCode({phoneNumber: string; countryCode: string; channel: string}): Promise<{results: boolean; message?: string}>
```

   **Parameters:**

   *   **`channel`**: The method of contacting the site visitor’s phone. Either `sms` or `call`.
   *   **`countryCode`**: A country code in [ISO3166 format](https://www.iso.org/obp/ui/#search/code/) loaded into a dropdown and selected by the site visitor. The country code is used together with the phone number for validation, and for sending the confirmation code to the site visitor.
   *   **`phoneNumber`**: Site visitor’s phone number set during registration. The confirmation code is sent to this number.
 
   **Returns:**
 
 A promise that, if successful, resolves to an object describing the results of the validation attempt:
 
 *  **`results`**: Boolean indicating success (`true`) or failure (`false`) of the validation attempt.
 *  **`message`**: String containing an error message describing why the validation attempt failed, if appplicable.


#### login() 

   Verifies the code from the site visitor and returns a session token for logging in the approved visitor in frontend code.

 ```js
     async function login ({phoneNumber, countryCode, confirmationCode}): Promise<{results: boolean; message?: string}>
 ```
    
   **Parameters:**

   *   **`confirmationCode`:** Numeric code sent to the site member’s phone and entered by the site member when logging in.
   *   **`countryCode`**: A country code in [ISO3166 format](https://www.iso.org/obp/ui/#search/code/) loaded into a dropdown and selected by the site visitor. The country code is used together with the phone number for sending the confirmation code to the site visitor.
   *   **`phoneNumber`**: Site visitor’s phone number set during registration. The confirmation code is sent to this number.

   **Returns:**
 
 A promise that, if successful, resolves to an object describing the results of the login attempt:
 
 *  **`results`**: Boolean indicating success (`true`) or failure (`false`) of the login attempt.
 *  **`message`**: String containing an error message describing why the login attempt failed, if appplicable.


### config.json

The object in this file sets the domain for new site members' emails. For example:

```json
{
   "members": {
       "mailDomain": "mail-domain.com"
   }
}
```


## npm Packages

This Velo package uses the following npm packages. To view the npm license, see the npm readmes. 



*   [phone](https://www.npmjs.com/package/phone)
*   [twilio](https://www.npmjs.com/package/twilio)


## Change Notes

1.0 Initial version.


## Tags

security, authentication, membersarea, twilio, otp
