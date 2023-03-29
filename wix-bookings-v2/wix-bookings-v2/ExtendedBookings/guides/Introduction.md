# About the Wix Bookings Extended Bookings API

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
  <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;

With the Wix Bookings Extended Bookings API, you can retrieve bookings for a site's services.  
 In addition to retrieving information about bookings, you also retrieve attentional extended information, such as whether the booking can be refunded or rescheduled, and attendance for the booking.


 ## Before You Begin

 Before using any `extendedBookings` functions, make sure to [install Wix Bookings](https://support.wix.com/en/article/adding-wix-bookings-to-your-site) on your site. 


To use the Wix Extended Bookings V2 API, import `{ extendedBookings }` from the `wix-bookings.v2` module:

```javascript
import { extendedBookings } from 'wix-bookings.v2';
```

## Terminology

For a glossary of terms, see [Terminology](https://www.wix.com/velo/reference/wix-bookings-v2/terminology)
