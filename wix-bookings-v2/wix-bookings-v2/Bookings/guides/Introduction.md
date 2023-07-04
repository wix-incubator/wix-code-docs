# About the Wix Bookings V2 API


&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
  <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;


With the Wix Bookings V2 API you can manage bookings for a site's services. 
The booking object holds information about the customer and the session or 
schedule they have booked. You can then use the 
eCommerce APIs to handle the checkout and payment flow.

With Wix Bookings V2 API you can retrieve existing bookings and manage the booking's life cycle.


## Terminology

For a comprehensive glossary of Wix Bookings terms, see [Terminology](https://www.wix.com/velo/reference/wix-bookings-v2/terminology). 

## Before you begin

It’s important to note the following points before starting to code:

+ The `participantNotification` field holds only information about the last 
  message sent to the customer. It also doesn't include details which type of 
  message has been sent.
+ To use the Bookings V2 API, import `{ bookings }` from the `wix-bookings.v2` module:

```javascript
import { bookings } from 'wix-bookings.v2';
```