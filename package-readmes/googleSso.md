## Google SSO  Integration

The Google SSO Integration package provides you with the ability to authenticate user sessions by integrating Google Sign-In into your site.

[Full instructions](https://support.wix.com/en/article/using-oauth-sso-with-velo) for integrating Google Sign-in into your site with Velo are available, but this package will help you get up and running faster.

### Setup

Before using the package, set up the following:

##### **Google Cloud Platform**

1. In the Google Cloud Platform, set up [Credentials](https://console.cloud.google.com/apis/credentials). For instructions, follow [this guide](https://support.google.com/cloud/answer/6158849?hl=en) to set up Google OAuth 2.0.

2. On the Credentials main page, you should see a new entry in the OAuth 2.0 Client IDs table. Click the entry’s name.

3. Click **Download JSON**. You’ll need the contents of this file for the Wix Secrets Manager in the next section.


##### **Wix Platform**

1. Open the [Wix Secrets Manager](https://support.wix.com/en/article/corvid-about-the-secrets-manager) to securely store the client secret. This is more secure than pasting them into backend code. Make sure never to expose your client's secrets.

2. Create a new secret called `velo-google-sso-credentials`.

   Copy-paste the content of the JSON file downloaded in the previous section into the value for the secret. You only need the client ID and the client secret, as displayed below:
   
   ```json
   {
     "web": {
       "client_id": "<YOUR_CLIENT_ID>",
       "client_secret": "<YOUR_CLIENT_SECRET>"
     }
   }
   ```
   
    **Note:** Make sure that the object is in correct JSON format, including all quotes. If not, the Secrets Manager will not be able to read the object properly, resulting in incorrect Google SSO credentials.
   
### Package Content

The following files are included in the package. Note that only exported functions that you can use in your site are listed here.

#### config.json

Here you configure the path of the page where the site visitor will be redirected after successful login. We refer to this page as the “logged in” page.

Change the `redirectUri` property to the “logged in” page:

```json
{
  "redirectUri": "/loggedin"
}
```

**Example:**

```json
https://<user_name>.wixsite.com/<site_name>/loggedin
```

#### auth.js

Here you define backend functions related to authorizing the site visitor.

To use the functions below in your code, import them with the following syntax:

```js
import { <functionName> } from '@velo/google-sso-integration-backend';
```

The file contains the following function:

*   **getAuth()**

    Handles the redirect from Google and generates a session token.

    **Syntax:**

    ```js
    function getAuth(request: WixHttpFunctionRequest): Promise<void>
    ```

    **Parameters:**

    **`request`**: An [`WixHttpFunctionRequest`](https://www.wix.com/velo/reference/wix-http-functions/wixhttpfunctionrequest-obj) object representing an incoming request received by a call to an HTTP function.

    **Returns:**

    A promise that resolves to `void`.

#### client.js

Here you define frontend functions for getting the URL to which an authorized visitor is redirected, and for logging in the visitor with the given session token.

To use the functions below in your code, import them with the following syntax:

```js
import { <functionName> } from '@velo/google-sso-integration';

```

The file contains the following functions:

*   **getAuthUrl()**

    Create a URL for navigating to the Google Login form.

    **Syntax:**

    ```js
    function getAuthUrl(): Promise<string>
    ```

    **Parameters:**

    None.

    **Returns:**

    A promise that, if successful, resolves to a string containing the URL.

*   **applyToken()**

    Logs the current site visitor into the site using the session token returned by the ```getAuth()``` function.

    **Syntax:**

    ```js
    function applyToken(): Promise<string>
    ```

    **Parameters:**

    None.

    **Returns:**

    A promise that, if successful, resolves to a string containing the link to the visitor’s profile image.

### How to Use the Package

To use this package, add the following to your site:

*   **A login page in your public files, from which the site visitor logs in.**

    Create an initial login page on which the site visitor will click a **loginButton** button, perhaps labelled **Sign in to Google**.

    Copy the code below to the page in the Code panel. The package code for this page uses the **getAuthUrl()** function to redirect the visitor to Google’s login page.

    **Login Page Code**

    ```js
    import wixLocation from 'wix-location';
    import { getAuthUrl } from '@velo/google-sso-integration';

    $w('#loginButton').onClick(() => {

        // Prevent double click on button
        $w('#loginButton').disable();

            getAuthUrl()
                .then((url) => {
                    // Redirect to google login
                    wixLocation.to(url);
                })
               .catch((error) => {
                    console.log(error);
                });
        });
    ```

*   **An http-functions.js backend file, to receive authentication from Google.**

    Once Google authenticates the visitor, the login flow redirects back to our site’s **Authorized** **Redirect URL** as was defined in Google Cloud Platform’s [Credentials](https://console.cloud.google.com/apis/credentials). To receive and handle the redirect URL, we use [http-functions](wix.com/velo/reference/wix-http-functions).

    In the Backend section of the Velo Sidebar, create an **http-functions.js** file. Copy the code below into this file to define a **get_getAuth** function.

    **Tip**:  You can use [Site Monitoring](https://support.wix.com/en/article/velo-about-site-monitoring) to debug any code you modified for this package.

    **backend/http-functions.js Code**


    ```js
    import { getAuth } from '@velo/google-sso-integration-backend';

    export function get_getAuth(request) {
        return getAuth(request)
          .catch((error) => {
              console.log(error);
          });
    }
    ```

*   **A “logged in” page, to which the site visitor is redirected after authentication.**

    Create the “Logged In” page by copying the code below to the page in the Code panel.

    The package code for this page uses the **applyToken()** function to apply the session token and updates the visitor’s avatar indicating the visitor is logged in.

    **Logged In Page Code**

    ```js
    import wixUsers from 'wix-users';
    import { applyToken } from '@velo/google-sso-integration';

    $w.onReady(() => {
        applyToken().then((picture) => {

            // Set user avatar
            $w('#image1').src = picture;

            // Gets user email
            wixUsers.currentUser.getEmail().then((email) => {
                console.log(email);
            });
        });
    });
    ```

### npm Packages

This Velo package uses the following npm package(s). To view the npm license, see the npm readme.

*   [googleapis](https://www.npmjs.com/package/googleapis)
*   [nanoid](https://www.npmjs.com/package/nanoid)
*   [url-join](https://www.npmjs.com/package/url-join)

### Release Notes

1.0.0

### Tags

google, googleapis, SSO, OAuth
