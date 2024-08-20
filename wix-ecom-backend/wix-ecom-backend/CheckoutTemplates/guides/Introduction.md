# Introduction

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
 <b>Developer Preview</b>
 <br/>
 <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div> 

&nbsp;

The Checkout Templates API allows you to create and manage pre-populated checkouts to share with customers. When customers then create checkouts from these templates, the new checkouts already include this information.

With the Checkout Templates API, you can:
+ Run a sale on a specific product for a limited time
+ Limit a sale offer to a select number of checkouts
+ Customize the checkout experience

## Before you begin

It’s important to note that the checkout template functionality is not currently available in the Wix Dashboard. If you create checkout templates with the API, you will also manage and update your checkout templates through the API. For example, when you offer a sale through a checkout template you need the API to change the template’s `status` to `INACTIVE` in order to turn off the sale when you want it to end.

To use the Checkout Templates API, import `{ checkoutTemplates }` from the `wix-ecom-backend` module:
``` javascript
import { checkoutTemplates } from 'wix-ecom-backend';
```

## Permissions information

Except for [`createCheckoutFromTemplate()`](#createCheckoutFromTemplate), 
all functions in the Checkout Templates API are restricted and only run if you elevate permissions
using the `wix-auth` [`elevate()`](https://dev.wix.com/docs/velo/api-reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor.
Exercise caution to prevent security vulnerabilities.</p>
</blockquote>