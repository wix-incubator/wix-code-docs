<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Creating a Shareable Booking Service Page Link

With booking service page [query parameters](#query-parameters), you can:

+ Create a link to a Wix site's [booking service page](https://support.wix.com/en/article/wix-bookings-customizing-your-service-pages) with preset values you choose.

## Introduction 

When a site visitor navigates to see a service details on a Wix site, they are taken to a booking service page. 
Here they can see the service in more details, upcoming sessions and cancellation policy if set.
With query parameters, you can create and share a direct link to a booking service page with a pre-selected location. 
A site visitor who visits the page via your custom link can still change their selections, but the values you define appear as default choices.
Using query parameters, you can select default values for these fields:

+ Locations

## Creating your shareable link

To create your customized shareable link, follow these steps:

1. Obtain the Wix site's [booking service page URL](#booking-service-page-url).
2. Determine which [query parameters](#query-parameters) you want to use.
3. Find the values you need for the query parameters. For a location read more about [finding IDs](#finding-ids).

### Booking service page URL 

The booking service page is the page where a Wix site visitor can get details of the service 
(appointment, class and course) requests for a booking. 
Query parameters are added at the end of the URL for this page.
You can find the full URL for a Wix site's booking service page by navigating to the page in a browser and looking in the address b
Alternatively, you can construct the full URL for a booking service page on the basis of the site URL and the slug for the service. 
The full URL for a booking service page is structured as follows:


```url
https://<SITE_URL>/service-page/<SERVICE_SLUG>
```

To find the service slug using the site dashboard, follow these steps:

1. Log into the site dashboard.
2. Click "Booking Services" in the sidebar menu.
3. Hover over the desired service in the list of services to make the "Edit" button appear, then click the "Edit" button. This opens the page for managing the service.
4. Scroll down to the "Marketing & SEO" section on the right, then click "Edit SEO Settings". This opens the "SEO Settings" section.
5. The service slug appears in the "URL slug" section.

For example, if a Wix site's URL is `www.my-example-site.com` and the service slug is `initial-consultation`, the URL will be:

```url
https://www.my-example-site.com/service-page/initial-consultation
```

### Query parameters 

Attach any of the following query parameters to a Wix site booking service page URL to preset customized default settings of your choice:

| Query Parameter | Description |
| --------------- | ----------- |
| `location`     | One or more business locations, identified by ID. Use commas to separate multiple location IDs.|

### Finding IDs 

To set customized default locations, you need to obtain the relevant IDs. You can do this as follows:


#### Locations

To find the ID for a business location, use [`listLocations()`](/wix-business-tools-v2/locations/listlocations) or [`queryLocations()`](/wix-business-tools-v2/locations/querylocations).

## Examples 

The following are examples of shareable links for a Wix site's booking service page with query parameters that set customized default values.

location:

```url
www.your-site.com/service-page/your-service?location=70a4f77e-cd37-455f-bb1d-ce1f0a55ddb
```
