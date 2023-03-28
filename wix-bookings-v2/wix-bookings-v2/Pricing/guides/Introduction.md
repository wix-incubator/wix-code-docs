# About the Wix Bookings Pricing API


With the Wix Bookings Pricing API, you can preview and calculate the 
price of a booking. 

+ The [`previewPrice()`](wix-bookings-v2/pricing/previewprice) function lets you retrieve information about how much a customer would have to pay for a booking's line items before the actual booking has been created.
+ The [`calculatePrice()`](wix-bookings-v2/pricing/calculateprice) function determines the base price of a booking.  

The price of the booking can be fixed, free, or varied. With [varied pricing](https://support.wix.com/en/article/wix-bookings-creating-a-course#step-2-set-the-price-and-payment-options-for-the-course), site owners can offer different prices for the same service based on their customers' choices. 
+ Site owners can set up basic varied pricing options in the site's dashboard. 
+ You can use the [Wix Bookings Service Options and Variants APIs](wix-bookings-v2/service-options-and-variants) to set up more robust pricing options. 


## Terminology

For a comprehensive glossary of Wix Bookings terms, see [Terminology](wix-bookings-v2/terminology).


## Before You Begin


+ You can only preview the price for line items belonging to the same 
  service.

+ If using the 
  [Wix Bookings Pricing Provider REST SPI](https://dev.wix.com/api/rest/wix-bookings/pricing-integration-spi) to set up your own 
  custom logic for varied pricing, the [previewPrice()](wix-bookings-v2/pricing/previewprice) function is not supported and an error is issued.

+ To use the Bookings Pricing API, import `{ pricing }` from the `wix-bookings.v2` module in your Velo code:

    ```javascript
    import { pricing } from 'wix-bookings.v2';
    ```