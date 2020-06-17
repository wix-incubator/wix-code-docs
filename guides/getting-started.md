Corvid by Wix is an innovative product that lets you build robust web applications with zero setup. Work in Wix's visual builder, add custom functionality and interactions using Corvid APIs, and enjoy serverless coding in both the front-end and backend. With Corvid, your web app can be up and running in a fraction of the time it would normally take you.

To introduce you to Corvid, we created our own version of a "Hello, World!" example: a simple currency converter site that uses the [wix-fetch API](https://www.wix.com/corvid/reference/wix-fetch.html) to connect to a third-party service. Site visitors choose source and target currencies from dropdowns and enter an amount to convert. The results are displayed in a text box.

![alt_text](./gettingStarted1.png)


Follow the steps below to get familiar with the basic structure and syntax of Corvid.


### Step 1: Create a New Wix Site


*   Sign into your Wix account or [sign up for a Wix account](https://users.wix.com/signin?overrideLocale=en&loginDialogContext=signup) if you don’t already have one.
*   [Open a blank template](https://editor.wix.com/html/editor/web/renderer/new?siteId=cbf36d3a-49d0-41c2-9482-1bb58d5fdda3&metaSiteId=a573279f-ae6f-46d1-8556-7c93ae9b2c84&editorSessionId=799795e9-07c2-4e7e-8a17-33dab829f776) in the Editor.


### Step 2: Enable Corvid

Enable Corvid in the Wix Editor to let you work with code in your site.

![alt_text](./gettingStarted2.png)


### Step 3: Add Elements to the Page

Add page elements in the Wix Editor: 


*   On the left side of the Editor, click Add.
*   Add the page elements illustrated below to your site.
    *   When you add each element, set its ID in the [Properties](https://support.wix.com/en/article/wix-code-working-with-the-properties-panel) panel that appears on the right side of the Editor. Use the name shown below for each element, minus the hashtag. See the table below for a full list of the elements and where to find them in the Add menu.


![alt_text](./gettingStarted3.png)


<table>
  <tr>
   <td>Element
   </td>
   <td>Location in Add Menu
   </td>
   <td>Description
   </td>
   <td>ID
   </td>
  </tr>
  <tr>
   <td>Dropdown
   </td>
   <td>User Input
   </td>
   <td>For selecting the source currency
   </td>
   <td>sourceCurrency
   </td>
  </tr>
  <tr>
   <td>Dropdown
   </td>
   <td>User Input
   </td>
   <td>For selecting the target currency
   </td>
   <td>targetCurrency
   </td>
  </tr>
  <tr>
   <td>Input
   </td>
   <td>User Input
   </td>
   <td>For entering the amount to convert
   </td>
   <td>sourceAmount
   </td>
  </tr>
  <tr>
   <td>Text Box
   </td>
   <td>User Input
   </td>
   <td>To display the converted amount
   </td>
   <td>targetAmount
   </td>
  </tr>
  <tr>
   <td>Button
   </td>
   <td>Button
   </td>
   <td>To trigger the currency conversion when clicked
   </td>
   <td>calculateButton
   </td>
  </tr>
</table>


### Step 4: Add Code

> Notes
> * All the code for this example is added to a single page on the site. In this section we divided the code into short blocks followed by explanations. To see the complete code for this example without comments, [scroll down](https://support.wix.com/en/article/corvid-by-wix-hello-world-example#example-code) to the end of the tutorial. 
> * See our [API Reference](https://www.wix.com/corvid/reference/) to learn more about the Corvid-based code in this example.

To add the code:

*   Double-click Home Page Code at the bottom of the Editor to open the [code panel](https://support.wix.com/en/article/wix-code-working-in-the-code-panel).
*   Add the following code to the top of the [Page tab](https://support.wix.com/en/article/wix-code-working-in-the-code-panel#page-and-site-tabs-1) before the [onReady](https://support.wix.com/en/article/wix-code-working-in-the-code-panel#making-sure-the-element-has-loaded-before-you-reference-it) function:


```javascript
// The getJSON function in wix-fetch lets you retrieve a
// JSON resource from the network using HTTPS.
import {getJSON} from 'wix-fetch';

// Set the URL of the 3rd-party service.
const url = "https://api.exchangeratesapi.io/latest";

// Define the currency option values and text for the dropdowns.
let currencyOptions = [
  { "value": "USD",  "label": "US Dollars"},
  { "value": "EUR",  "label": "Euros"},
  { "value": "JPY",  "label": "Japanese Yen"},
];
```

*   Add the code below to the [onReady](https://support.wix.com/en/article/wix-code-working-in-the-code-panel#making-sure-the-element-has-loaded-before-you-reference-it) function. Code inside the onReady function runs when the page loads.

```javascript
$w.onReady(function () {
  // Set the currency options for the dropdowns.
  populateDropdowns();

  // Set the onClick event handler for calculateButton to calculate the target amount.
  $w('#calculateButton').onClick((event) => {
    calculateCurrency();
  })
});
```


The <code>[$w](https://www.wix.com/code/reference/$w.html#$w)</code> function can select elements on a page by ID or by type, allowing us to run functions and define the properties of the elements. Use this syntax to select an element by ID, <code>$w("#myElementId")</code>, and this syntax to select by type, <code>$w("ElementType")</code>.

Here we select the button and define an `onClick` [event handler](https://support.wix.com/en/article/wix-code-reacting-to-user-actions-using-events#about-events-event-handlers-and-wiring) to calculate the target amount.

4.  Add code to define the functions:

populateDropdowns( )


```javascript
// Populate the dropdowns.
function populateDropdowns() {
	//Set the dropdown options.
	$w("Dropdown").options = currencyOptions;
	// Set the first dropdown option as the initial option.
	$w("Dropdown").selectedIndex = 0;
}
```


Here we select all the dropdowns by type. By calling <code>[$w](https://www.wix.com/code/reference/$w.html)</code> with the element type "Dropdown", we select all dropdowns on the page.

calculateCurrency( )


```javascript
// Calculate the target amount.

function calculateCurrency() {
	// Initial amount 
	let initialAmount = $w("#sourceAmount").value;
	// Original currency
	let sourceSymbol = $w("#sourceCurrency").value;
	// Target currency
	let targetSymbol = $w("#targetCurrency").value;
	// Define the full url.
	let fullUrl = `${url}?base=${sourceSymbol}&symbols=${targetSymbol}`;

	// Call the wix-fetch API function to retrieve the JSON resource.
	getJSON(fullUrl)
		.then(json => {
			// Set the target amount as the initial amount multiplied by
			// the conversion rate.
			$w("#targetAmount").value = initialAmount * json.rates[targetSymbol];
		})
}
```

We use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to define the full URL, which includes the source and target currencies.

The wix-fetch API <code>[getJSON](https://www.wix.com/code/reference/wix-fetch.html#getJSON)</code> function retrieves the JSON resource using the full URL. <code>getJSON</code> returns a [promise](https://support.wix.com/en/article/wix-code-working-with-promises), which resolves to a JSON object.

We multiply the retrieved rate by the initial amount and assign it to the `targetAmount` text box.


### Step 5: See It in Action

Now it's time to test your site:

*   Click Preview at the top right of the Editor.
*   Enter an amount in the source currency input.
*   Click the calculate button and see the converted currency result in the target amount text box.
*   [Publish](https://support.wix.com/en/article/publishing-your-site-6980885) your site to make it live and production ready. \

That's it! In just a few minutes, you created a web application in Corvid! No setup, no managing server infrastructure, just integrating Corvid APIs with the Wix visual builder.

### Next Steps

Now that you've had a taste of Corvid, check out what else you can do:

*   Easily call backend code from the frontend using [web modules](https://support.wix.com/en/article/wix-code-calling-server-side-code-from-the-front-end-with-web-modules). 
*   Work with Wix's [visual builder](https://support.wix.com/en/article/getting-started-with-the-wix-editor).
*   Add features and customize your site using [Corvid APIs](https://www.wix.com/corvid/reference/). Here are some examples of what you can do:
    *   [Collect](https://support.wix.com/en/article/wix-code-tutorial-using-the-wix-pay-api-to-collect-payments-for-a-single-product) payments
    *   [Create](https://support.wix.com/en/article/wix-code-tutorial-creating-a-show-more-link) a show-more link
    *   [Use](https://www.wix.com/corvid/example/create-a-custom-chart) an HTML component to embed a chart on your page
    *   Work with the data from [other Wix Apps](https://support.wix.com/en/article/working-with-wix-app-collections-6077060) like [Stores](https://support.wix.com/en/wix-code/wix-stores-with-wix-code), [Bookings](https://support.wix.com/en/wix-code/wix-bookings-with-wix-code), and [Events](https://support.wix.com/en/wix-code/wix-events-with-wix-code)
*   Visit the [Corvid by Wix website](https://www.wix.com/corvid) to onboard and continue learning. Check out Corvid [documentation](https://support.wix.com/en/wix-code/wix-code-basics) and the [API Reference](https://www.wix.com/corvid/reference).


### Example Code

Here is the complete code for this example, without comments:

```javascript
import { getJSON } from 'wix-fetch';

const url = "https://api.exchangeratesapi.io/latest";

let currencyOptions = [
	{ "value": "USD", "label": "US Dollars" },
	{ "value": "EUR", "label": "Euros" },
	{ "value": "JPY", "label": "Japanese Yen" },
];

$w.onReady(function () {
	populateDropdowns();

	$w('#calculateButton').onClick((event) => {
		calculateCurrency();
	})
});

function populateDropdowns() {
	$w('Dropdown').options = currencyOptions;
	$w('Dropdown').selectedIndex = 0;
}

function calculateCurrency() {
	let initialAmount = $w("#sourceAmount").value;
	let sourceSymbol = $w("#sourceCurrency").value;
	let targetSymbol = $w("#targetCurrency").value;
	let fullUrl = `${url}?base=${sourceSymbol}&symbols=${targetSymbol}`;

	getJSON(fullUrl)
		.then(json => {
			$w("#targetAmount").value = initialAmount * json.rates[targetSymbol];
		})
}
```
