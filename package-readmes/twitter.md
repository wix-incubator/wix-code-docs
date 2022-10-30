## Twitter Integration 

> **Example Site**  
> To see a live example, click [here](https://www.wix.com/velo/example/twitter-integration).

The Twitter Integration package provides you with the ability to perform actions on top of a Twitter account using Velo code. You can run the following actions:

*   **Tweet:** Post a tweet to your Twitter account from your Wix site.
*   **Get Latest Tweet:** Get the latest tweet from any Twitter account.
*   **Tweet in Response to Events:** Automatically post a tweet to your Twitter account in response to an event on your Wix site. 

To see an example site that demonstrates how to use this package, click [here](https://www.wix.com/velo/example/twitter-integration). 

### Setup 

Before using the package, set up the following:


#### Twitter Platform 

1. Go to the Twitter [developer site](https://developer.twitter.com/en).
2. Complete the registration process, or sign in if you already have a Twitter developer account. Note that when registering for a Twitter developer account, the Twitter team may take a few days to confirm your registration. 
3. Go to the Twitter [developer portal](https://developer.twitter.com/en/portal/dashboard) and create a Twitter app in the **Projects & Apps  > Overview** tab. Click the **New Project** button and follow the instructions.
4. In your app, go to the **Settings** tab and set the **App Permissions** to **Read and Write**.
5. Go to the **Keys and Tokens** tab and generate the following information: 
    
    **Consumer Keys**
    *   API key & secret
    
    **Authentication Tokens**
    *   Access token & secret

   Copy the generated information. You’ll need it for the **Wix Secrets Manager** in the next section.


#### Wix Platform 


##### Secrets Manager 

*   Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-about-the-secrets-manager) and create a new secret with the name `velo-twitter-accountSecret`. Store the following JSON object in the secret: 

    ```js
    {
        "consumer_key": "YOUR_TWITTER_CONSUMER_KEY",
        "consumer_secret": "YOUR_TWITTER_CONSUMER_SECRET",
        "access_token_key": "YOUR_TWITTER_ACCESS_TOKEN",
        "access_token_secret": "YOUR_TWITTER_ACCESS_TOKEN_SECRET"
    }
    ```

  **Note:** Make sure that the object is in correct JSON format, including all quotes. If not, the Secrets Manager will not be able to read the object properly, resulting in incorrect Twitter credentials. 

    

##### Wix Stores (Optional)  

Add a **Wix Store** to your site if you want to automatically post a tweet on your Twitter account when a new product is added to your Wix Store. 

Do the following in the **config.js** file:

1. Change the `baseURL` to your site’s base URL. For example, `https://yourname.wixsite.com/{YOUR_SITE_NAME}`.
2. Set the value of the `tweetOnNewStoresProduct` property to `true`.
3. Change the template string in the `tweetOnNewStoresProductTemplate` property to the tweet you would like to post upon adding a new product to your store. You can use the following variables in your template. These variables will be replaced with the actual values of your newly created event:
    *   **`$PRODUCT_NAME`:** Product name that was added.
    *   **`$URL`:** URL of the dynamic page that is created for the newly added product (this page is automatically created when you add a product to your catalog).
    *   **`$SKU`:** SKU of the newly added product.
    *   **`$PRICE`:** Price of the newly added product before discount.
    *   **`$DISCOUNTED_PRICE`:** Price of the newly added product after discount.


##### Wix Events (Optional) 

Add **Wix Events** to your site if you want to automatically post a tweet on your Twitter account when a new event is created in your Wix Events. 

Do the following in the **config.js** file:

1. Change the `baseURL` to your site’s base URL. For example, `https://yourname.wixsite.com/{YOUR_SITE_NAME}`.
2. Set the value of the `tweetOnNewEvent` property to `true`.
3. Change the template string in the `tweetOnNewEventTemplate` property to the tweet you would like to post upon adding a new event to your events. You can use the following variables in your template. These variables will be replaced with the actual values of your newly created event: 
    *   **`$DATETIME`:** Date and time of the newly created event.
    *   **`$TITLE`:**  Name of the newly created event.
    *   **`$EVENTTYPE`:** Type of the newly created event, either `‘VENUE’` or `‘ONLINE’`.
    *   **`$ADDRESS`:** Address of the newly created event. Note that if it is an online event the address will be null.
    *   **`$URL`:** Base URL of your site (not the URL of the newly created event page).


### Package Content

The following backend files are included in the package. Note that only exported functions that you can use in your site are listed here: 


#### config.js 

The code in this file contains the configurations to define if you want to tweet in response to events. This file can be edited. [Set up](#wix-stores-optional) the configurations according to your needs. 


#### events.js

The code in this file contains 2 events that automatically post a tweet from your Twitter account when fired. 

You don’t need to call this code as it will be called automatically once you turn on the relevant flags in the **config.js** file. Functions include:



*   **[onProductCreated(event)](https://www.wix.com/velo/reference/wix-stores-backend/events/onproductcreated)**

    Posts a tweet to your Twitter account when a new product is added to your Wix Store.

    ```js
    export function wixStores_onProductCreated(event)
    ```


*   **[onEventCreated(event)](https://www.wix.com/velo/reference/wix-events-backend/events/oneventcreated)**

    Posts a tweet to your Twitter account when a new event is created in your Wix Events application.

    ```js
    export function wixEvents_onEventCreated(event)
    ```



#### twitter.js 

The code in this file contains the functions you can use to post a tweet from your Twitter account, and get the latest tweet from a specified account. 

To use the functions below in your backend code, import them with the following syntax: 

 
```js
import { <functionName> } from ‘@velo/twitter-integration-backend’;
```



*   **tweet(input)**

    Receives an input string and posts it to your Twitter account. 
    
    When successful, the function returns the string that was tweeted. In case of an error, the function returns a rejected promise containing the error message.

    ```js
    export async function tweet(input)
    ```


*   **getLatestTweet(username)**

    Gets the most recent tweet from a Twitter account username. 
    
    When successful, the function returns the string of the username’s latest tweet. In case of an error, the function returns a rejected promise containing the error message.

    ```js
    export async function getLatestTweet(username)
    ```



#### utils.js 

The code in this file contains a utility function that reformats the parameter names in the **event.js** file.


### How to Use the Package  

This section demonstrates how you can work with the package, and the different options for using the package functions.

There are 3 main use cases you can implement with this package:

*   Post tweets using an input
*   Get the latest tweet from a specific twitter account
*   Automatically posts tweets in response to events


#### Post Tweets Using an Input 

The following describes how you can use this package to post tweets using an input element:


1. To use the `tweet()` function in your page code, add a web module to your backend. We’ll call ours **twitter.jsw**. Include the following code in this file: 
 
    ```js
    import { tweet } from '@velo/twitter-integration-backend';
      
    export async function runPostTweet(input) {
      // Add input validations
      return await tweet(input);
    }
    ```

    It is recommended to validate the input from the frontend in the web module function before calling the **twitter.js** functions, in order to make sure that the site visitor calling these functions is not sending or receiving information you don’t want sent to Twitter. For example, if you have a members area on your site, you can use the [wix-users API](https://www.wix.com/velo/reference/wix-users) to check the role of the visitor calling the functions before calling the **twitter.js** functions.



2. Add the following page elements to your site:
    *   Text box or another input for entering the tweet text. 
    *   Button for sending the tweet.
    *   2 text elements for success and error messages 

3. Import the `runPostTweet()` function from the web module to your page code and run it when the button is clicked. 

    ```js
    import { runPostTweet } from 'backend/twitter.jsw';

    $w('#tweetButton').onClick(() => {
      $w('#tweetSuccessMessage').hide();
      $w('#tweetErrorMessage').hide();

      runPostTweet($w('#tweetInput').value)
        .then((result) => {
          $w('#tweetSuccessMessage').text = 'Successfully tweeted: ' + result;
          $w('#tweetSuccessMessage').show();
        })
        .catch((error) => {
          $w('#tweetErrorMessage').text = error;
          $w('#tweetErrorMessage').show();
          console.error(error);
        })
    })
    ```


#### Get the Latest Tweet from a Specific Twitter Account 

The following describes how you can use this package to get the latest tweet from a specific Twitter account:


1. To use the `getLatestTweet()` function in your page code, add a web module to your backend. We’ll call ours ‘twitter.jsw’. Include the following code in this file:

    ```js
    import { getLatestTweet } from '@velo/twitter-integration-backend';

    export async function runGetLatestTweet(input) {
      // Add input validations
      return await getLatestTweet(input);
    }
    ```

    It is recommended to validate the input from the frontend in the web module function before calling the **twitter.js** functions, in order to make sure that the site visitor calling these functions is not sending or receiving information you don’t want sent to Twitter. For example, if you have a members area on your site, you can use the [wix-users API](https://www.wix.com/velo/reference/wix-users) to check the role of the visitor calling the functions before calling the **twitter.js** functions.



2. Add the following page elements to your site:
    *   Text box or another input for entering the Twitter username. 
    *   Button for getting the latest tweet.
    *   2 text elements for success and error messages 

3. Import the `runGetLatestTweet()` function from the web module to your page code and run it when the button is clicked. 

    ```js
    import { runGetLatestTweet } from 'backend/twitter.jsw';

    $w('#getLatestTweetButton').onClick(() => {
      $w('#getSuccessMessage').hide();
      $w('#getErrorMessage').hide();

      runGetLatestTweet($w('#usernameInput').value)
        .then((result) => {
          $w('#getSuccessMessage').text = 'Latest tweet is: ' + result;
          $w('#getSuccessMessage').show();
        })
        .catch((error) => {
          $w('#getErrorMessage').text = error;
          $w('#getErrorMessage').show();
          console.error(error);
        })
    })
    ```
 

#### Post Tweets in Response to Events 

The following describes how you can use this package to post tweets in response to events: 

Events: 


*   A new product is added to your Wix Store. 
*   A new event is created in your Wix Events.

1. Follow the instructions for [setting up the configurations](#wix-stores-optional) for the event you want to use. 
2. To automatically post tweets when a new product is added to your Wix Store, your **config.js** code should look something like this:  

    ```js
    export function getConfiguration() {
      return {
        baseURL: 'https://yourname.wixsite.com/YOUR_SITE_NAME',
        events: {
          tweetOnNewStoreProduct: true,
          tweetOnNewEvent: false,
        },
        templates: {
          // Add variables for customization            

          tweetOnNewStoreProductTemplate: 'Hi, we added $PRODUCT_NAME to our store.\n\nCheck it out here:\n $URL',
        }
      }
    }
    ```



3. To automatically post tweets when a new event is created in your Wix Events, your **config.js** code should look something like this:  

    ```js
    export function getConfiguration() {
      return {
        baseURL: 'https://yourname.wixsite.com/YOUR_SITE_NAME',
        events: {
          tweetOnNewStoresProduct: false,
          tweetOnNewEvent: true,
        },
        templates: {
          // Add variables for customization            

          tweetOnNewEventTemplate: 'Hi, don\'t forget to join us at $TITLE on $DATETIME.\n\n$URL',
        }
      }
    }
    ```


### npm Package 

This Velo package uses the following npm package. To view the npm license, see the npm readme. 

*   [twitter-lite](https://www.npmjs.com/package/twitter-lite)


### Release Notes 

**1.0** Initial version.


### Tags 

twitter, tweet, tweeting, getLatestTweet, twitterLite, tweetOnNewProduct, tweetOnNewEvent
