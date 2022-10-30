## Two-Factor Authentication

The 2-factor authentication package provides an extra layer of security during the sign-in process, allowing you to verify the identity of a site member logging in to your site.

In addition to an email and password, site members must enter a code sent to their phone when logging in. The phone number is associated with the site member during site registration. 


### Setup

Before using this package, set up the following:



*   **Wix App:** Add a [Members Area](https://support.wix.com/en/article/adding-a-members-area-to-your-site) to your site.
*   **Twilio Account:** Create a Twilio Account as described [here](https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account). Then create a Verify Service [here](https://www.twilio.com/console/verify/services). Copy the Twilio Verification Service ID (SERVICE ID) for later use.
*   **Secrets Manager:** Add the following Twilio keys from your Twilio account to the [Secrets Manager](https://support.wix.com/en/article/corvid-about-the-secrets-manager):
    *   `velo-2fa-twilioAccountSid`: Your Twilio Account SID
    *   `velo-2fa-twilioAuthToken`: Your Twilio Auth Token
    *   `velo-2fa-twilioVerifyServiceId`: Your Twilio Verification Service ID
*   **Velo Form:** Change your member signup form to a [Velo Form](https://support.wix.com/en/article/about-the-member-signup-form#corvid-form).
*   **Approval type:** Decide whether to approve new members automatically or manually. Then define the approval type in both of the following locations:
    *   [Config file](#config-js): Define the `manualApproval` property in the config.js file located in your backend code: 
        *   `true`: Manually approve each new member. This is the default.
        *   `false`: Members are approved automatically. 
    *   Member signup settings: Navigate to **Menus & Pages > Member Pages > Actions icon > Member Signup Settings**. Select one of the following:
        *   **People I approve:** Manually approve each member.
        *   **Everyone:** Members are approved automatically.


### Package Content

The main functionality for this package is located in the backend files. In addition, the package contains an optional public file that uses the package functions to create a complete 2FA registration and login scenario. In order to use the public file, you’ll need to add the site elements listed in the [How to Use the Package](#how-to-use-the-package) section below.


#### Backend Files

This package contains the following backend files:


##### login-wrapper.jsw

The code in this file defines the registration and login functions used in the package. The functions in this file can be used in your page/public/backend code by importing them with the following syntax:

```js
import { <functionName> } from '@velo/wix-members-2fa-twilio-backend';
```

The file includes the following functions:


*   **sendRegConfirmCode()**

    Sends a confirmation code to the phone number if the site visitor is not registered yet.

    ```js
    async function sendRegConfirmCode({email, phoneNumber, countryCode, channel})
    ```

*   **register()** 
    
    Registers a member if the confirmation code is correct.

    ```js
    async function register({phoneNumber, countryCode, email, password, confirmationCode})
    ```

*   **sendLoginConfirmCode()**

    Sends a confirmation code to the specified phone number if the site visitor is registered.

    ```js
    async function sendLoginConfirmCode(email, password, channel)
    ```

*   **login()**

    Logs the member in if the confirmation code is correct.

    ```js
    async function login(email, password, confirmationCode)
    ```



##### Parameters



*   **channel**: The method of contacting the site visitor’s phone. Either `sms` or `call`.
*   **confirmationCode:** Numeric code sent to the site member’s phone and entered by the site member when logging in.
*   **countryCode**: A country code in [ISO3166 format](https://www.iso.org/obp/ui/#search/code/) loaded into a dropdown and selected by the site visitor. The country code is used together with the phone number for sending the confirmation code to the site visitor.
*   **email**: Site visitor’s email address.
*   **password**: Login password as chosen by the site visitor during registration.
*   **phoneNumber**: Site visitor’s phone number set during registration. The confirmation code is sent to this number.


##### data-methods.jsw

The code in this file sets and sorts the country code options. The function in this file can be used in your page/public/backend code by importing it with the following syntax:

```js
import { getCountries } from '@velo/wix-members-2fa-twilio-backend';
```

The file includes the following function:



*   **getCountries()**

    Sets and sorts the countries and their [ISO3166](https://www.iso.org/obp/ui/#search/code/) codes. Can be used as the options for a country code dropdown in the registration form.

    ```js
    async function getCountries()
    ```



##### config.js

The code in this file sets the approval type for new members. The file is editable and you should use it to set the approval type as specified in the [Setup](#setup) section.



#### Public File (optional)


##### init-page.js

Optional addition to the package with client-side code. The code in this file uses the package functions to register and login site members using 2-factor authentication. It assumes you have a registration/login lightbox on your site. See more details in **Option 2** of the [How to Use the Package](#how-to-use-the-package) section below. 

The function in this file can be used in your page/public code by importing it with the following syntax:

```js
import { initPage } from '@velo/wix-members-2fa-twilio';
```

The file includes the following function:



*   **initPage()**

    Implements 2-factor authentication as site visitors interact with the elements in the registration/login lightbox in order to sign up and login to the site.

    ```js
    async function initPage(components)
    ```


##### Parameter



*   **components**: The elements in the register/login lightbox used in the 2FA scenario.


### How to Use the Package

This section demonstrates how to use the package functions to implement a typical 2FA registration and login scenario.

You have 2 options for using this package:



*   **Option 1:** Directly use the package functions in the **login-wrapper.jsw** backend module to build a custom login experience. This option provides you with more flexibility.
*   **Option 2:** Create a user interface and use the optional frontend code provided in the **init-page.js** public file. This option is easier to implement.


#### Option 1: Use the backend package functions directly

The following describes the general flow for using the package building blocks in the **login-wrapper.jsw** backend module to build a basic 2FA scenario:



1. Import the relevant Velo API modules and package functions from the backend.
1. When a site visitor clicks the submit button on the sign-up page, validate the inputs and call `sendRegConfirmCode()` to send a confirmation code. 
1. When a site visitor clicks the register button on the sign-up page, call `register()` to register the visitor, and handle success or error messages.
1. When a site visitor clicks the submit button on the login page, validate the inputs and call `sendLoginConfirmCode()`. If the site visitor is registered as a member, a confirmation code is sent to the phone number provided during registration.
1. When a site visitor clicks the login button on the login page, call `login()` to login the member, and handle success or error messages.

To see example code for this flow, see the **init-page.js** public file in the package.


#### Option 2: Create a UI and use the provided frontend functions



*   Add a lightbox with a multi-state box to your site to switch between a registration page and login page. Name the lightbox `RegisterLogin`.


##### Registration State

![Registration State](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/0ca9e8ba-16ed-4cd8-a1e1-58d01c4420f7/2021/01/27/ebcd73fc-92ab-48b2-9ee0-b7aad9d4829a/98f424de-53ee-418b-be6f-2b5af73457c0.png)

Add the following elements:


##### Visible elements



*   3 text inputs: email, password, phone number
*   dropdown: for selecting a country code
*   submit button
*   text element: links to the login page for site visitors who already registered


##### Collapsed elements



*   text input: for entering the confirmation code
*   register button
*   2 text elements: for error messages and for resending the verification code via a phone call


##### Login State

![Login State](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/0ca9e8ba-16ed-4cd8-a1e1-58d01c4420f7/2021/01/27/64b18541-c222-4d1b-af25-896ea40a770f/973537b7-1cb6-495e-8953-c691aaf7f9d5.png)

Add the following elements:


##### Visible elements



*   2 text inputs: email and password
*   submit button
*   text element: links to a registration page for new site visitors


##### Collapsed elements



*   text input: for entering the confirmation code
*   login button
*   2 text elements: for error messages and for resending the verification code via a phone call

Add the following code to your `RegisterLogin` lightbox:



1. Import the `initPage()` function from the package. 

```js
import { initPage } from '@velo/wix-members-2fa-twilio';
```

2. Set aliases for all the page components.


    ```js 
    const components = { 

      stateBox: $w('#stateBox'),

      countriesDropdown: $w('#countriesDropdown'),

      phoneInput: $w('#phoneInput'),

      registerPassInput: $w('#registerPassInput'),

      registerEmailInput: $w('#registerEmailInput'),

      registerConfirmCodeInput: $w('#registerConfirmCodeInput'),

      registerErrMsgText: $w('#registerErrMsgText'),

      submitRegistrationButton: $w('#submitRegistrationButton'),

      registerCallMeText: $w('#registerCallMeText'),

      registerButton: $w('#registerButton'),

      notRegisteredText: $w('#notRegisteredText'),

      submitLoginButton: $w('#submitLoginButton'),

      loginCallMeText: $w('#loginCallMeText'),

      loginButton: $w('#loginButton'),

      loginErrMsgText: $w('#loginErrMsgText'),

      loginEmailInput: $w('#loginEmailInput'),

      loginPassInput: $w('#loginPassInput'),

      loginConfirmCodeInput: $w('#loginConfirmCodeInput'),

      alreadyRegisteredText: $w('#alreadyRegisteredText')

    } 
    ```



1. Call `initPage()` with the page components. 
 
   `initPage(components)`


### npm Packages

This Velo package uses the following npm packages. To view the npm license, see the npm readmes. 



*   [phone](https://www.npmjs.com/package/phone)
*   [twilio](https://www.npmjs.com/package/twilio)


### Release Notes

**1.0** Initial version.


### Tags

Security, authentication, membersarea, twilio, 2fa
