## Getting Started with Corvid by Wix
Corvid by Wix is an innovative product that lets you build robust web applications with zero setup. Work in Wix's visual builder, add custom functionality and interactions using Corvid APIs, and enjoy serverless coding in both the front-end and backend. With Corvid, your web app can be up and running in a fraction of the time it would normally take you.
To introduce you to Corvid, we created our own version of a "Hello, World!" example: a simple currency converter site that uses the [wix-fetch API](https://www.wix.com/code/reference/wix-fetch.html) to connect to a third-party service. Site visitors choose source and target currencies from dropdowns and enter an amount to convert in an input box. The results are displayed in a text box.
![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/11e10e4f-b84d-4136-a5a9-6109fab0b7d7/2019/03/26/7824bc10-e02b-4995-a2f1-8bfc493cf0fc.png)

Follow the steps below to get familiar with the basic structure and syntax of Corvid.
  ### Step 1: Create a New Wix Site
1. Sign into your Wix account or [sign up for a Wix account](https://users.wix.com/signin?overrideLocale=en&loginDialogContext=signup) if you don't already have one.
2. [Open a blank template](https://editor.wix.com/html/editor/web/renderer/new?siteId=cbf36d3a-49d0-41c2-9482-1bb58d5fdda3&metaSiteId=a573279f-ae6f-46d1-8556-7c93ae9b2c84&editorSessionId=799795e9-07c2-4e7e-8a17-33dab829f776) in the Editor.
### Step 2: Enable Corvid
Enable Corvid in the Wix Editor to work with code in your site.
![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/11e10e4f-b84d-4136-a5a9-6109fab0b7d7/2019/07/07/496d1f12-9a8a-4054-bada-2fb5e1440dd2/196cb963-b3b7-4b73-86db-e6285a5c94ed.png)
### Step 3: Add Elements to the Page
Add page elements in the Wix Editor:
1. On the left side of the Editor, click **Add**.
2. Add the page elements illustrated below to your site.
*   When you add each element, set its ID in the [Properties](https://support.wix.com/en/article/wix-code-working-with-the-properties-panel) panel that appears on the right side of the Editor. Use the name shown below for each element, minus the hashtag. See the table below for a full list of the elements and where to find them in the Add menu.
![alt_text](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/11e10e4f-b84d-4136-a5a9-6109fab0b7d7/2019/03/26/a88f9e5e-332c-44f6-8a99-da73aae88c3b.png)

|Element |Location in Add Menu |Description| ID|
|--------|---------------------|-----------|---|
|Dropdown|	User Input	|For selecting the source currency|	sourceCurrency|
|Dropdown|	User Input	|For selecting the target currency|	targetCurrency|
|Input|	User Input	|For entering the amount to convert|	sourceAmount|
|Text Box|	User Input|	To display the converted amount|	targetAmount|
|Button|	Button|	To trigger the currency conversion when clicked|	calculateButton|

### Step 4: Add Code
**Notes:**
*   All the code for this example is added to a single page on the site. In this section, we divided the code into short blocks followed by explanations. To see the complete code for this example without comments, [scroll down](https://support.wix.com/en/article/corvid-by-wix-hello-world-example#example-code) to the end of the tutorial.
*   See our [API Reference](https://www.wix.com/code/reference/) to learn more about the Corvid-based code in this example.
**To add the code:**
1. Double-click **Home Page Code** at the bottom of the Editor to open the [code panel](https://support.wix.com/en/article/wix-code-working-in-the-code-panel).
2. Add the following code to the top of the [Page tab](https://support.wix.com/en/article/wix-code-working-in-the-code-panel#page-and-site-tabs-1) before the [onReady](https://support.wix.com/en/article/wix-code-working-in-the-code-panel#making-sure-the-element-has-loaded-before-you-reference-it) function:

```javascript
  1. // The getJSON function in wix-fetch lets you retrieve a
  2. // JSON resource from the network using HTTPS.
  3. import {getJSON} from 'wix-fetch';
  4.
  5. // Set the URL of the 3rd-party service.
  6. const url = "[https://api.exchangeratesapi.io/latest](https://api.exchangeratesapi.io/latest)";
  7.
  8. // Define the currency option values and text for the dropdowns.
  9. let currencyOptions = [
  10.   { "value": "USD",  "label": "US Dollars"},
  11.   { "value": "EUR",  "label": "Euros"},
  12.   { "value": "JPY",  "label": "Japanese Yen"},
  13. ];
```

3. Add the code below to the [onReady](https://support.wix.com/en/article/wix-code-working-in-the-code-panel#making-sure-the-element-has-loaded-before-you-reference-it) function. Code inside the onReady function runs when the page loads.
```javascript
  1. $w.onReady(function() {
  2.   // Set the currency options for the dropdowns.
  3.   populateDropdowns();
  4.
  5.   // Set the onClick event handler for calculateButton to calculate the target amount.
  6.   $w('#calculateButton').onClick((event) => {
  7.     calculateCurrency();
  8.   })
  9. });
```
The [$w](https://www.wix.com/code/reference/\$w.html#$w) function can select elements on a page by ID or by type, allowing us to run functions and define the properties of the elements. Use this syntax to select an element by ID, $w("#myElementId"), and this syntax to select by type, $w("ElementType").
Here we select the button and define an `onClick` [event handler](https://support.wix.com/en/article/wix-code-reacting-to-user-actions-using-events#about-events-event-handlers-and-wiring) to calculate the target amount.

4. Add code to define the functions:
**populateDropdowns( )**
```javascript
  1. // Populate the dropdowns.
  2. function populateDropdowns(){
  3.   // Set the dropdown options.
  4.   $w("Dropdown").options = currencyOptions;
  5.   // Set the first dropdown option as the initial option.
  6.   $w("Dropdown").selectedIndex = 0;
  7. }
```
Here we select all the dropdowns by type. By calling [$w](https://www.wix.com/code/reference/$w.html) with the element type "Dropdown", we select all dropdowns on the page.
  **calculateCurrency( )**
```javascript
  1. // Calculate the target amount.
  2. function calculateCurrency() {
  3.  // Initial amount
  4.  let initialAmount = $w("#sourceAmount").value;
  5.  // Original currency
  6.  let sourceSymbol = $w("#sourceCurrency").value;
  7.  // Target currency
  8.  let targetSymbol = $w("#targetCurrency").value;
  9.  // Define the full url.
  10. let fullUrl = `\${url}?base=\${sourceSymbol}&symbols=\${targetSymbol}`;
  11.  
  12.  // Call the wix-fetch API function to retrieve the JSON resource.
  13.  getJSON(fullUrl)
  14.  .then(json => {
  15.     // Set the target amount as the initial amount multiplied by
  16.     // the conversion rate.
  17.     $w("#targetAmount").value = initialAmount * json.rates[targetSymbol];
  18.  }
  19. )}
```
We use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to define the full URL, which includes the source and target currencies.
The wix-fetch API [getJSON](https://www.wix.com/code/reference/wix-fetch.html#getJSON) function retrieves the JSON resource using the full URL. getJSON returns a [promise](https://support.wix.com/en/article/wix-code-working-with-promises), which resolves to a JSON object.
We multiply the retrieved rate by the initial amount and assign it to the `targetAmount` text box.
### Step 5: See It in Action
Now it's time to test your site:
1. Click **Preview** at the top right of the Editor.
2. Enter an amount in the source currency input.
3. Click the calculate button and see the converted currency result in the target amount text box.
4. [Publish](https://support.wix.com/en/article/publishing-your-site-6980885) your site to make it live and production ready.
That's it! In just a few minutes you created a web application in Corvid! No setup, no managing server infrastructure, just integrating Corvid APIs with the Wix visual builder.
### Next Steps
Now that you've had a taste of Corvid, check out what else you can do:
*   Easily call backend code from the front-end using [web modules](https://support.wix.com/en/article/wix-code-calling-server-side-code-from-the-front-end-with-web-modules).
*   Work with Wix's [visual builder](https://support.wix.com/en/article/getting-started-with-the-wix-editor).
*   Add features and customize your application using [Corvid APIs](https://www.wix.com/code/reference/). Here are some examples of what you can do:
*   [Collect](https://support.wix.com/en/article/wix-code-tutorial-using-the-wix-pay-api-to-collect-payments-for-a-single-product) payments
*   [Create](https://support.wix.com/en/article/wix-code-tutorial-creating-a-show-more-link) a show-more link
*   Work with the data from [other Wix Apps](https://support.wix.com/en/article/working-with-wix-app-collections-and-code) like [Stores](https://support.wix.com/en/wix-code/wix-stores-with-wix-code), [Bookings](https://support.wix.com/en/wix-code/wix-bookings-with-wix-code), and [Events](https://support.wix.com/en/wix-code/wix-events-with-wix-code)
*   [Use](https://www.wix.com/code/home/example/Chart?dvc=c&experiment_id=wix%2Bcode%5Ee%5E209150830980%5E1t1%3B%3Fh&gclid=EAIaIQobChMI7bae8Jzc3AIVGYfVCh0nWgKzEAAYASAAEgJTmPD_BwE&h=https%3A%2F%2Fwww.wix.com%2Fcode%2Fhome&utm_campaign=179424220%5E47357753009&utm_medium=cpc&utm_source=google) an HTML component to embed a chart on your page
*   Use HTTP functions to expose your site's functionality as a service, with an API that you define.
*   Visit [Corvid by Wix](http://wix.to/9oBuAAs/resources) to onboard and continue learning. Check out Corvid [documentation](https://support.wix.com/en/wix-code/wix-code-basics) and the [API Reference](https://www.wix.com/code/reference/Overview.html).
### Example Code
Here is the complete code for this example, without comments:
 ```javascript
  1. import {getJSON} from 'wix-fetch';
  2.
  3. const url = "https://api.exchangeratesapi.io/latest";
  4.
  5. let currencyOptions = [
  6.   { "value": "USD",  "label": "US Dollars"},
  7.   { "value": "EUR",  "label": "Euros"},
  8.   { "value": "JPY",  "label": "Japanese Yen"},
  9. ];
  10.
  11. $w.onReady(function() {
  12.   populateDropdowns();
  13.
  14.  $w('#calculateButton').onClick((event) => {
  15.    calculateCurrency();
  16.  })
  17. });
  18.
  19. function populateDropdowns(){
  20.   $w('Dropdown').options = currencyOptions;
  21.   $w('Dropdown').selectedIndex = 0;
  22. }
  23.
  24. function calculateCurrency() {
  25.   let initialAmount = $w("#sourceAmount").value;
  26.   let sourceSymbol = $w("#sourceCurrency").value;
  27.   let targetSymbol = $w("#targetCurrency").value;
  28.   let fullUrl = `\${url}?base=\${sourceSymbol}&symbols=\${targetSymbol}`;
  29.   getJSON(fullUrl)
  30.   .then(json => {
  31.      $w("#targetAmount").value = initialAmount * json.rates[targetSymbol];
  32. }
  33.)}
```
