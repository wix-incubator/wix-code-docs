## Speechly Integration 

> **Example Site**  
> To see a live example, click [here](https://www.wix.com/velo/example/speechly-integration).

The Speechly Integration package provides your site visitors with the ability to filter store products using speech recognition. 

You can add filters to a Wix Stores product page, such as a dropdown menu with categories or a slider to indicate maximum price. When a site visitor holds down the push-to-talk button, Speechly starts listening for voice input, and returns the input detected. A site visitor can filter store products by saying any term in the UI filters, for example, 'Find me a product under €10,' 'Yellow,' or 'Fendi'. If the returned voice input matches a term in the UI filters, the product page displays the filtered products set by the site visitor’s speech input. Note that currently you can’t use voice input to filter by size. 


**Note:** To use this package, you must have a Wix Premium account with a connected domain. 

To see an example site that demonstrates how to use the package, click [here](https://www.wix.com/velo/example/speechly-integration).

For any questions or assistance, email speechly directly at [hello@speechly.com](mailto:hello@speechly.com). 


### Setup 

Before using the package, set up the following:


#### Speechly Platform 

1. Create a [Speechly account](https://www.speechly.com/sign-up/), or log in if you have an existing account.

2. In your dashboard, open the dropdown menu in the top right corner, and click **Create new project**. Note that you don’t have to create an application, it will be created automatically later on.

3. After creating a new project, open the dropdown menu again and go to the **Project settings** and create an API Token. Copy the API Token, you will need it for the next steps.


#### Wix Platform 

1. Make sure you have a [Wix Premium](https://support.wix.com/en/article/choosing-a-premium-plan) account with a [connected domain](https://support.wix.com/en/article/connecting-a-domain-to-your-site). 
2. Add a **Wix Store** to your site.
3. Open the [Wix Secrets Manager](https://support.wix.com/en/article/velo-working-with-the-secrets-manager), and store your Speechly API token as a new secret with the name `velo-speechly-token`.


##### Configurations 

Do the following to create a connection from your site to Speechly:


1. Create a new .**js** file in your backend code. For example, **init-speechly.js**.
2. Add the following code to this file:

    ```js
    import {initSpeechly} from '@velo/wix-stores-speechly-backend';

    export function init() {
      return initSpeechly();
    }
    ```


3. To run this function from the **Editor**, click the green arrow next to the function declaration. A new tab will open in the code panel for running the function. 

    ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/08/31/4628d5dc-1b7c-4fdc-88ef-4ce4793aaa03/5b564e68-317d-433f-b05c-804293a85697.png "image_click_green_arrow_by_initSpeechly_function")
 

4. Click **Run** in the right column to run the function. When successful, the function creates an application in Speechly for you, and you can find your Speechly App ID in the function’s output. Set this ID as the `speechlyAppId` value in the package’s **wix-stores-speechly-config.json** file. 

    ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/08/31/b96f84d5-9c3f-4ca6-8ab6-03982db9b6aa/4b5fa68f-f320-4246-a2c3-ea0391a0ba70.png "image_run_initSpeechly_function_in_editor")



##### Components 

Add the following components to your site:

**Push-to-talk (PTT) button**

The push-to-talk button is a button that listens for voice input while it is being pressed. To add the push-to-talk button: 



1. Click Add ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/08/31/6c0aa95a-3cdb-4e89-9c30-36803e5d1b42/88a1d7a3-cac6-4ec8-bfdb-132319e8bbb1.png "image_add-button") on the left side of the Editor.
2. Go to **Embed > Custom Embeds > Custom Element**.
3. Add the custom element to your site, and select the element. Click **Choose Source.** Set the **Server URL** to [`https://speechly.github.io/browser-ui/v3/push-to-talk-button.js`](https://speechly.github.io/browser-ui/v3/push-to-talk-button.js), and the **Tag Name** to `push-to-talk-button`. Click **Update**. Learn more about adding custom elements to your site [here](https://support.wix.com/en/article/wix-editor-adding-a-custom-element-to-your-site).
4. Then set the custom element’s ID to `#pushtotalk` in the **[Properties & Events panel](https://support.wix.com/en/article/velo-working-with-the-properties-events-panel)**.

Note that the Speechly source code for the push-to-talk button places the push-to-talk button towards the bottom of the screen to make it more accessible for mobile users.

**Big Transcript**

The big transcript is an overlay-style component that displays your speech-to-text transcripts in real-time (when there is active voice input). To add the big transcript component: 

1. Click Add ![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/b4ae9703-4364-4550-a797-1cc95ed8046e/2021/08/31/6c0aa95a-3cdb-4e89-9c30-36803e5d1b42/88a1d7a3-cac6-4ec8-bfdb-132319e8bbb1.png "image_add-button") on the left side of the Editor.
2. Go to **Embed > Custom Embeds > Custom Element**.
3. Add the custom element to your site, and select the element. Click **Choose Source.** Set the **Server URL** to [`https://speechly.github.io/browser-ui/v3/transcript-drawer.js`](https://speechly.github.io/browser-ui/v3/transcript-drawer.js), and the **Tag Name** to `transcript-drawer`. Click **Update**. 
4. Set the custom element’s ID to `#bigTranscript` in the **Properties & Events panel**.

Note that the Speechly source code for the big transcript component places the big transcript component as an overlay near the top-left corner of the screen.  


### Package Content 

This package contains the following backend and public files. The main functionality for this package is located in the public files. Note that only exported functions that you can use in your site are listed here. 


#### Backend Files 

This package contains the following backend files:


##### speechly.js 

The code in this file contains a function that creates an application in Speechly. 

The file contains the following function: 

* **initSpeechly()**

    Creates a Speechly app and returns the Speechly app ID. 


    Syntax:


    ```js
    export function initSpeechly():Promise<string>
    ```


    Returns:


    A promise that resolves to a string with either a Speechly app ID, or an error message.  


    Import the function to your backend code only, using the following syntax:


    ```js
    import { initSpeechly } from '@velo/wix-stores-speechly-backend';
    ```



##### wix-stores-speechly-config.json.js 

The code in this editable file contains the configuration needed to use this package. Follow the instructions in the [Setup](#setup) section to set up the configurations.


#### Public Files 

This package contains the following public files:


##### speech-to-text.js 

The code in this file contains a function that enables speech recognition and speech-to-text on your site, and filters your store products using these functionalities.  


The file includes the following function:



* **startVoice()**

    Initializes the speech recognition and speech-to-text functionalities when a site visitor holds down the push-to-talk button and starts talking. The event listener on the button will trigger and return an object containing the site visitor’s [intent and entity](https://docs.speechly.com/slu-examples/postprocessing/) (voice input detected). If any of the terms in the return object match one or more terms in the UI filters, the speech recognition can be used to filter store products. To learn more about Speechly, see the documentation [here](https://docs.speechly.com/).  

    Syntax:


    ```js
    export async function startVoice(comp = {}): Promise<boolean>
    ```


    Parameters:



    * **`components`:** (optional) Array of component objects used to filter your store products. For example, a size dropdown menu, or a slider for a maximum price. 

    Note that if you choose to create your own component objects to filter your store products, call the function without the `components` parameter, and follow the steps in **Option 1** of the [How to Use the Package](#how-to-use-the-package) section. 


    Import the function to your page/public code using the following syntax:


    ```js
    import { startVoice } from '@velo/wix-stores-speechly';
    ```



#####  set-filters.js (Optional) 
The code in this file contains a function that sets the filters and handles the product repeater for your store products. It assumes you have a container with all your product filters (filter box) and a product repeater on your site. If you don’t, and you choose to create your own components to filter your store products, disregard this file and follow the steps in **Option 1** of the [How to Use the Package](#how-to-use-the-package) section. 

The file includes the following function:

* **buildPage()**

    Displays the filtered products set by the site visitor’s voice input in the product repeater.


    Syntax:


    ```js
    export async function buildPage(comp = {}): Promise<boolean>
    ```


    Parameters:



    * **`components`:** (optional)  Array of component objects used to filter your store products. For example, a size dropdown menu, or a slider for a maximum price.  


    Import the function to your page/public code using the following syntax:


    ```js
    import { buildPage } from '@velo/wix-stores-speechly';
    ```


### How to Use the Package 

This section demonstrates how you can work with the package, and the different options for using the package functions. 

There are 2 options for using this package:

* **Option 1: Use the list of components provided in the optional public file**

    For easy implementation, we created an [example site](https://www.wix.com/velo/example/speechly-integration) containing UI elements (components) for filtering the products, plus corresponding code to set the filters and display the filtered products, as provided in the optional set-filters.js public file.

* **Option 2: Build and use your own components** 

    Add your own components for filtering store products to your site. Use the package functions in the **speech-to-text.js** public file to build a custom product page with your filters. This option provides you with more flexibility. 


**Option 1: Use the components provided in the optional public file**

1. See the [example site](https://www.wix.com/velo/example/speechly-integration) that includes UI elements (components) for filtering the store products, and uses the corresponding list of components provided in the optional set-filters.js public file.
2. Click **Edit Now** to view and edit the example in the **Editor**.
3. In your page code, you can see that all the components in the optional set-filters.js public file are listed. Note that unlike the product repeater and load more button components, the filter components are optional, and the code works without them. You can remove any filters you don’t want to use from the components object.


**Option 2: Build and use your own components** 

1. Build the components you want for filtering store products, and add them to your site. 
2. Import the `startVoice()` function from the package.
3. Call the `startVoice()` function without parameters in the `$w.onReady()` function. 
4. Add a component event listener inside the `$w.onReady()` function. Your code should look something like this:

    ```js
    import { startVoice } from '@velo/wix-stores-speechly';
    
    $w.onReady(function () {

      startVoice();

      $w('#pushtotalk').on('speechsegment', (event) => {
        // filter products based on the speech event object
      })

    }
    ```


5. When a site visitor holds down the push-to-talk button, the event listener will trigger and return an object containing the site visitor’s [intent and entity](https://docs.speechly.com/slu-examples/postprocessing/) (voice input). Using the return object, you can filter the store products by the site visitor’s voice input. You can do this by checking if the voice input in the return object matches a term in the UI filters, and display the filtered store products set by the site visitor’s speech input. You can also use the return object for any other velo implementation. To learn more about Speechly, see the documentation [here](https://docs.speechly.com/).   



### npm Packages 

This Velo package uses the following npm packages. To view the npm license, see the npm readmes.

* [@grpc/grpc-js](https://www.npmjs.com/package/@grpc/grpc-js)
* [lodash](https://www.npmjs.com/package/lodash)
* [@speechly/js-config-api](http://@speechly/js-config-api)


### Release Notes 

**1.0** Initial version.


### Tags 

speech-recognition, speech-to-text, speechly, wix-stores, filter-products