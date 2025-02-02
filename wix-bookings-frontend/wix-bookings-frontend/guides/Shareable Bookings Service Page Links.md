# Shareable Bookings Service Page Links

You can preselect a location for site visitors on your
[Bookings service page](https://support.wix.com/en/article/wix-bookings-customizing-your-service-pages)
by creating shareable Bookings service page links. Customers
can still change the selected location.

## Send a shareable Bookings service page link

To send a shareable Bookings service page link:

1. Visit the relevant service page on your live site and save both the
   `<SITE_URL>` and `<SERVICE_SLUG>` from the URL. The URL will look something
   like this:
   ```url
   https://<SITE_URL>/service-page/<SERVICE_SLUG>?referral=service_list_widget
   ```
   Alternatively, you can also obtain the Bookings service page URL from your
   dashboard by following
   [these steps](#how-to-get-the-bookings-service-page-url-from-your-dashboard).
1. Retrieve the ID of the locations you want to preselect by using either
   [`listLocations()`](/wix-business-tools-v2/locations/listlocations) or
   [`queryLocations()`](/wix-business-tools-v2/locations/querylocations).
1. Combine `<SITE_URL>`, `<SERVICE_SLUG>`, and `<LOCATION_ID>` to create the
   shareable link using the following format. If you want to preselect multiple
   locations, make sure to separate the IDs with commas.
   ```url
   https://<SITE_URL>/service-page/<SERVICE_SLUG>?location=<LOCATION_ID>
   ```
   For example:
   ```url
   https://www.my-example-site.com/service-page/initial-consultation?location=70a4f77e-cd37-455f-bb1d-ce1f0a55ddb,17d4f88w-yt12-126e-bb1d-po1f9a12cfe
   ```
1. Share the generated link with your customers.

### How to get the Bookings service page URL from your dashboard

If you prefer to retrieve the Bookings service page URL directly from
your dashboard, follow these steps to obtain the correct `<SITE_URL>` and
`<SERVICE_SLUG>`.

1. Get the `<SITE_URL>`.
   1. Navigate to your dashboard's
   [Website Settings page](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fsettings/website-settings).
   1. The `<SITE_URL>` is displayed in the __Site address (URL)__ section.
1. Get the `<SERVICE_SLUG>`.
   1. Go to your dashboard's [SEO Settings for Booking Services page](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fseo-home/seo-settings/bookings-service).
   1. Identify the relevant service and copy its `<SERVICE_SLUG>`
      from the __Page URL__ column. Avoid duplicating `/service-page`
      when building your final link.