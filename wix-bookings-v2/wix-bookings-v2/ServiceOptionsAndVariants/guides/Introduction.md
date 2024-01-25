# About the Wix Bookings Service Options and Variants API


&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;

<!--
> __Note__: This module is [universal](/api-overview/api-versions#universal-modules). Functions in this module can run on both the backend and frontend, unless specified otherwise.
-->



With the Wix Bookings Service Options and Variants API, you can manage custom options 
and variants for services. This allows site owners to offer different prices for the 
same service based on their customers' choices. 

You can read more about using the:
+ [Wix Bookings Pricing API (REST)](https://dev.wix.com/api/rest/wix-bookings/pricing/introduction) to preview and calculate the price.
+ [Wix Bookings Pricing Provider SPI (Velo)](https://dev.wix.com/api/rest/wix-bookings/pricing-integration-spi/introduction) that allows site owners to implement custom pricing logic.

## Terminology

For a comprehensive glossary of Wix Bookings terms, see [Terminology](https://www.wix.com/velo/reference/wix-bookings-v2/terminology).


## Before you begin

It's important to note the following points before starting to code:

+ To use the Service Options And Variants API, import `{ serviceOptionsAndVariants }` from the `wix-bookings.v2` module:

    ```javascript
    import { serviceOptionsAndVariants } from 'wix-bookings.v2';
    ```

+ Only a single `serviceOptionsAndVariants` object is supported per service.

+ Currently, only a single option is supported per `serviceOptionsAndVariants` object.

+ New variants are automatically created for services with staff member-based 
  options whenever a new staff member is added to the service. The new 
  variant gets the default price of the service.

+ Variants are automatically deleted for services with staff member based 
  options whenever a staff member is removed from the service or the 
  business.
