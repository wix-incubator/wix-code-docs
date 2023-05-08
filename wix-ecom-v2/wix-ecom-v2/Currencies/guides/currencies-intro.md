---
title: Introduction
---

# About the Wix Currencies API


<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>
&nbsp;
&nbsp;


The Currencies API is used to convert from one currency to another and get exchange rates. 

 Currency rates are provided by [XE](https://www.xe.com/company/) and are updated on a daily basis. Rates are provided together with the timestamp when they were set. By using the Currencies API you agree to XE's [Terms of Use](https://www.xe.com/en/legal/dfs.php).

 The Currencies API provides these functions: 


- Use [`listCurrencies()`](wix-ecom-v2/currencies/listcurrencies) to get a list of all the convertible currencies.
- Use [`convertCurrency()`](wix-ecom-v2/currencies/convertcurrency) to convert amounts between two currencies.
- Use [`getConversionRate()`](wix-ecom-v2/currencies/getconversionrate) to get today’s conversion rate for a pair of currencies.  


## Before you begin

+ To use the Currencies API you must upgrade your site to a [Premium Plan](https://support.wix.com/en/article/upgrading-your-site-to-premium-3066683). 

+ The currency converter changes the displayed prices on your site for different currencies but does not change the payment currency. The payment is always made in the [currency set in your site's Dashboard](https://support.wix.com/en/article/setting-your-currency-for-accepting-payments).

+ The currency codes used must exist in the array of supported currencies returned by the [`listCurrencies()`](wix-ecom-v2/currencies/listcurrencies) function.

+ To use the Currencies API, import `{ currencies }` from the `wix-ecom.v2` module:

    ```javascript
    import { currencies } from 'wix-ecom.v2';
    ```


## Use case: Display prices in different currencies

 The API can be used, for example, with the [currency conversion dropdown](https://support.wix.com/en/article/adding-and-setting-up-a-currency-converter-in-wix-stores) element on your Wix Stores page to display prices in a range of different currencies. Selecting a different currency from the dropdown on a Wix Stores page automatically updates all of the prices displayed on your store's page to the selected currency. While the currency converter dropdown works with your Wix Stores pages, the Currencies API can be used on any page.


## Terminology

+ **XE**. A [currency converter provider](https://www.xe.com/company/) that the Currencies API uses. 
+ **Currency code**: A 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code representing each currency.


## Permissions information


The following functions in Currencies are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function:

- [`listCurrencies()`](wix-ecom-v2/currencies/listcurrencies)
- [`convertCurrency()`](wix-ecom-v2/currencies/convertcurrency)
- [`getConversionRate()`](wix-ecom-v2/currencies/getconversionrate)
- 

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>
