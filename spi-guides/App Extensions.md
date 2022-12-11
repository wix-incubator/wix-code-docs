

# Overview

Velo’s SPIs enable you to extend Velo’s functionality so that you can:

+ **Inject your own custom logic into existing app flows**

   With the Velo Custom Extension feature and its SPIs, you don't have to code a new flow from beginning to end if you want to customize and extend just one part of an existing app's flow. You can implement the code just for the customized part.

   For example, the out-of-the-box eCommerce checkout flow calculates the total charge for an order based on its line items. With Velo's [Additional Fees](/spis/wix-ecom/ecom-additional-fees) SPI, you can inject the ability to add additional fees that apply to the entire order. Examples of additional fees include fees for fragile items or surcharges for deliveries outside your regular delivery area.

+ **Integrate external services with your Wix site**

  Use the SPIs to integrate with 3rd-party services so that your Wix site and the external services can communicate seamlessly. Some SPIs are available with the Custom Extensions feature. Other SPIs, such as [Site Monitoring](/spis/getting-started/site-monitoring) and [External Database Collections](/spis/getting-started/external-database-collections), are available without using the Custom Extensions feature.

  For example, Velo's [Shipping Rates](/spis/wix-ecom/ecom-shipping-rates) custom extension SPI lets you display shipping rates from different external service providers during checkout. Customers can then choose the shipping provider best for them.

>**Note**: The Custom Extensions feature is currently in beta and is subject to change. Some custom extensions aren't yet available to all users.

To use the Velo SPIs, you’ll need a working knowledge of JavaScript. When integrating with an external service, you'll also need familiarity with the external service’s APIs.






  
**Examples of custom extensions**
  
* When you set up a Wix Store, there are a limited number of payment and shipping rates service providers to choose from. What if you want to use a provider not currently on the list? You can create custom extensions that allow you to add more shipping rate providers to your store's checkout flow. This type of custom extension involves integrating with a 3rd-party service provider.
* The typical eCommerce checkout process does not allow you to add additional fees that are not related to specific line items. You can use custom extensions to add extra fees like charges for gift wrap or fragile items to your checkout flow. This type of custom extension involves injecting your own logic into an existing Wix app flow.

## Terminology

Let's make sure our terms are aligned before we get started.

| Term              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SPI               | Service Provider Interface. A type of API that supports the custom extensions feature for extending the services you provide on your site. With Velo, the services you provide can be custom logic for your own Velo app flows or integration with 3rd-party services.                                                                                                                                                                                                                                                                                                               |
| Custom extensions | A feature that lets you extend the services provided on your site using code. You can make these extensions by adding your own custom logic into a Wix app flow, or data received from a 3rd-party into a Wix app flow. Custom extensions are implemented by adding files to backend code files to your site. These files contain code for your custom logic using SPI function calls and are triggered at specific points in the Wix app flow.                                                                                                                                      |
| Service provider  | The one providing a service. The service is either a Velo service or a 3rd-party service. The interface to the service is coded using Velo SPIs by the Wix user. If the service is being provided by a 3rd-party, the Wix user also writes the code for the interface by [accessing 3rd-party's APIs](https://support.wix.com/en/article/velo-accessing-3rd-party-services-with-the-fetch-api) with [wix-fetch](/wix-fetch), and/or using [npm packages](https://support.wix.com/en/article/velo-accessing-3rd-party-services-with-the-fetch-api). |
| Wix user          | You, the site owner or contributor responsible for developing the code needed for the custom extension using Velo SPIs. Your code uses your own custom logic or accesses a service provided by a 3rd-party.                                                                                                                                                                                                                                                                                                                                                                          |
| Service           | Any additional functionality being added to the site that is not part of the original Wix app flow. The service is coded by the Wix user with the custom extension feature using SPIs.                                                                                                                                                                                                                                                                                                                                                                                               |
| Wix app           | The Wix app whose functionality is being extended. For example, Wix eCommerce has several SPIs available for customizing its flows with custom extensions.                                                                                                                                                                                                                                                                                                                                                                                                                           |

## What is a Velo SPI? 

Custom extensions are implemented using Velo SPIs. Each extension consists of a set of backend code files that utilize SPI functions for implementing the extension. Wix apps call the functions automatically at specific points in their flows. The functions receive and return data in a specific format. The returned data is then integrated by the Wix app into its flow. In this sense, custom extensions fulfill a kind of contract. The Wix user commits to providing data in a certain format, and the Wix app commits to using this data in its flows at specific points.

The [reference documentation](/spis/getting-started) for each SPI function indicates at what point in a flow an app triggers the function. The documentation also outlines the data provided as arguments to the function when it's triggered, and the format of the data that needs to be returned by the function.

How does it work? 

1. At certain points, a call to a service is triggered by an app's activity on your Wix site.
2. When triggered, the Wix platform passes the information in the request to the provider. The provider needs this information to provide the service to the Wix platform.
3. Wix processes the request for the service according to the implementation defined in the custom extension files in the backend.
4. The service provider returns the needed information and the Wix platform consumes and/or displays the information.

For example, the Wix eCommerce app calls the `calculateAdditionalFees()` SPI function whenever a customer checks out a cart.

This function receives the parameters that it needs from Wix eCommerce (such as the cart, line items, and so on), and must return data about additional fees in a specific structure. The app uses the data received from the function to display additional fees in a customer's checkout flow. You can add any custom logic you like to calculate the additional fees as long as the function returns your data in the proper structure.

Using this extension, you can avoid having to build a whole new checkout flow just to add additional fees to the basic Wix eCommerce functionality.

For example, the Wix eCommerce app calls the \`calculateAdditionalFees()\` SPI function whenever a customer checks out a cart. This function receives the parameters that it needs from Wix eCommerce (such as the cart, line items, and so on), and must return data about additional fees in a specific structure. The app uses the data received from the function to display additional fees in a customer's checkout flow. You can add any custom logic you like to calculate the additional fees as long as the function returns your data in the proper structure. Using this extension, you can avoid having to build a whole new checkout flow just to add additional fees to the basic Wix eCommerce functionality.

## Velo APIs and SPIs: When to use which? 

Without custom extensions, if you want to change your out-of-the-box app flow just a little, you might have to rewrite large parts of the flow, such as creating a custom checkout page. This could involve writing many lines of code and creating custom collections. 

Inherently, because custom extensions only affect a small part of an app's flow, Velo SPIs require fewer lines of code and less maintenance than when working with Velo APIs. So wherever possible, you want to use SPIs. 

  
Is the SPI you need not yet available? In the meantime, use Velo APIs, such as [accessing 3rd-party's APIs](https://support.wix.com/en/article/velo-accessing-3rd-party-services-with-the-fetch-api) with [wix-fetch](/wix-fetch), and/or using [npm packages](https://support.wix.com/en/article/velo-accessing-3rd-party-services-with-the-fetch-api).

For more information:

* [Understanding the difference between SPIs and APIs](https://medium.com/wix-engineering/let-others-solve-your-problems-change-your-mindset-from-apis-to-spis-781afa48574f)


# Implementing a custom extension with a Velo SPI

The Custom Extensions feature currently can’t be added to a site when using Git Integration & Wix CLI (Beta).

The process of implementing an SPI in Velo generally has 3 steps:

1. [Create a new extension on your site](https://support.wix.com/en/article/velo-tutorial-shipping-rates-custom-extension-beta#step-1-create-a-new-shipping-rates-extension)
2. [Implement your extension with custom code](https://support.wix.com/en/article/velo-tutorial-shipping-rates-custom-extension-beta#step-2-implement-the-extension)
3. [Deploy the extension](https://support.wix.com/en/article/velo-tutorial-shipping-rates-custom-extension-beta#step-3-deploy-the-extension)

See the [tutorial](https://support.wix.com/en/article/velo-custom-business-app-extensions-using-spis-beta#available-custom-extensions-beta) for each SPI for detailed instructions. 

Need help implementing an SPI? [Find a professional](https://www.wix.com/marketplace) to help you.

### Step 1\. Create a new extension on your Wix site

The first step in setting up your new extension is to add it to your site. This process creates a new folder in the Custom Extensions section of the Velo Sidebar that contains the files for your code.

1. If necessary, add the relevant app to your site, such as Wix Stores.
2. With [Velo Dev Mode](https://support.wix.com/en/article/getting-started-with-velo-by-wix#step-2-enable-velo-dev-mode) enabled, click the **Public & Backend** ![](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/76096845-8b12-44f1-91f6-3dc2e838fdd9/2022/08/29/23d50509-633d-4616-9f56-65add8fa6d0b/d910e041-d150-4f35-aa75-30ad262abc7a.png) tab on the Velo Sidebar.
3. Scroll down to the Custom Extensions panel at the bottom of the sidebar.
4. Hover over **Custom Extensions** and click **Add an integration** ![](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/76096845-8b12-44f1-91f6-3dc2e838fdd9/2022/08/29/badbd3b0-193b-4ada-b213-dc3233752d5c/7dca33d4-2b2d-4d12-9082-bafdf7ca5440.png).
5. Select the extension you want to add.
6. Follow the prompts to add the extension and accept any terms and conditions that display.
7. Enter a name for your integration and click **Add & Edit Code**. The name can't contain spaces or special characters.

### Step 2\. Implement your extension with custom code

The procedure in the previous section creates a folder in the Custom Extensions  
section of the Velo Sidebar. The name of the folder is based on the  
extension you chose. Inside this is another folder with the name of the extension  
you set up. This folder contains 2 files, `<my-extension-name>.js` and  
`<my-extension-name>-config.js`.

The procedure in the previous section creates a folder in the Custom Extensions section of the Velo Sidebar. The name of the folder is based on the extension you chose. Inside this is another folder with the name of the extension you set up. This folder contains 2 files, \`<my-extension-name>.js\` and \`<my-extension-name>-config.js\`. 

Default extension files:

* `<my-extension-name>.js`: The code in this file generally defines a function named after the purpose of the custom extension, such as `getShippingRates()` or `getFees()`. The function is called by Wix to retrieve the data provided by your extension.
* `<my-extension-name>-config.js`: The code in this file generally defines a function that returns an object containing values used to configure your extension.

Default extension files: + \`<my-extension-name>.js\`: The code in this file generally defines a function named after the purpose of the custom extension, such as \`getShippingRates()\` or \`getFees()\`. The function is called by Wix to retrieve the data provided by your extension. + \`<my-extension-name>-config.js\`: The code in this file generally defines a function that returns an object containing values used to configure your extension.

Implement the custom code for your extension in these files. See the SPI tutorial for each [supported custom extension](https://support.wix.com/en/article/velo-custom-business-app-extensions-using-spis-beta#available-custom-extensions-beta) for guidelines for writing your code.

**Add more files to an extension**

If you don't want to keep all of your code in the main files, you can add files to the extension's folder and import functions and objects into the main files.

1. Hover over the extension folder's name and click **Show More** ![](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/76096845-8b12-44f1-91f6-3dc2e838fdd9/2022/09/04/45269098-373f-4d2c-8168-2fc5242c6024/c890c6a3-6762-4501-bdb4-e44c678108df.png).
2. Select the **New.js** file.
3. To import from these files to the main files, use the following syntax:

```
import { functionName } from './myFileName.js';
```

 import { functionName } from './myFileName.js';

**Test an extension**

You can test your extension before publishing your site using [functional testing](https://support.wix.com/en/article/velo-functional-testing-in-the-backend) like you would any backend Velo code. Make sure your functions' return values are properly formatted. To test your extension after deploying, add console logs to your code. The results appear in the [Site Events log](https://support.wix.com/en/article/velo-about-site-monitoring).

You can test your extension before publishing your site using \[functional testing\](https://support.wix.com/en/article/velo-functional-testing-in-the-backend) like you would any backend Velo code. Make sure your functions' return values are properly formatted. To test your extension after deploying, add console logs to your code. The results appear in the \[Site Events log\](https://support.wix.com/en/article/velo-about-site-monitoring).

### Step 3\. Deploy the extension

Once your code files are ready, deploy your extension and enable it on your site.

  
Publish your site.

  
There may be a delay between publishing the site and the new extension options appearing on your site.






To learn more:
+ [Velo: Custom App Extensions Using SPIs](https://support.wix.com/en/article/velo-custom-business-app-extensions-using-spis-beta)


