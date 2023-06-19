<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Creating a Shareable Booking Calendar Link

With booking calendar page [query parameters](#query-parameters), you can:

+ Create a link to a Wix site's [booking calendar page](https://support.wix.com/en/article/wix-bookings-customizing-your-calendar-page) with preset values you choose.
+ Create a link for rescheduling a specific existing booking.

## Introduction 

When a site visitor navigates to make a booking on a Wix site, they are taken to a booking calendar page.
Here they select their preferences for the date and time of their booking.
Depending on the site's settings, they may also be able to select a time zone, and filter by location and staff member.

When the booking calendar page opens, the calendar typically appears with a default date, time, and time zone based on the site's settings.
No location or staff member filters are selected.

With query parameters, you can create and share a direct link to a booking calendar page with customized pre-filled default values of your choice.
A site visitor who visits the page via your custom link can still change their selections, but the values you define appear as default choices.

Using query parameters, you can select default values for these fields:

+ Date
+ Time zone
+ Resources (staff members)
+ Locations

In addition, you can provide a Booking ID to create a link for rescheduling a specific existing booking.

## Creating your shareable link

To create your customized shareable link, follow these steps:

1. Obtain the Wix site's [booking calendar page URL](#booking-calendar-page-url).
2. Determine which [query parameters](#query-parameters) you want to use.
3. Find the values you need for the query parameters. For a resource or location, or to reschedule an existing booking, read more about [finding IDs](#finding-ids).

### Booking calendar page URL 

The booking calendar page is the page where a Wix site visitor selects details for an appointment or class and requests a booking.
Query parameters are added at the end of the URL for this page.

You can find the full URL for a Wix site's booking calendar page by navigating to the page in a browser and looking in the address bar.

Alternatively, you can construct the full URL for a booking calendar page on the basis of the site URL and the slug for the service.
The full URL for a booking calendar page is structured as follows:

```url
https://<SITE_URL>/booking-calendar/<SERVICE_SLUG>
```

To find the service slug using the site dashboard, follow these steps:

1. Log into the site dashboard.
2. Click "Booking Services" in the sidebar menu.
3. Hover over the desired service in the list of services to make the "Edit" button appear, then click the "Edit" button. This opens the page for managing the service.
4. Scroll down to the "Marketing & SEO" section on the right, then click "Edit SEO Settings". This opens the "SEO Settings" section.
5. The service slug appears in the "URL slug" section.

For example, if a Wix site's URL is `www.my-example-site.com` and the service slug is `initial-consultation`, the URL will be:

```url
https://www.my-example-site.com/booking-calendar/initial-consultation
```

### Query parameters 

Attach any of the following query parameters to a Wix site booking calendar page URL to preset customized default settings of your choice:

| Query Parameter | Description |
| --------------- | ----------- |
| `resource`     | One or more resources (staff members) to be selected by default, identified by ID. Use commas to separate multiple resource IDs.|
| `timezone`     | Default time zone for the booking calendar, in [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format. For example: `America/Santiago`. **Note:** You can only select a time zone the page supports as an option. For more information, see [Setting the Time Zone Display](https://support.wix.com/en/article/setting-the-time-zone-display-in-wix-bookings).|
| `date`         | Initial date to open in the booking calendar page, in `YYYY-MM-DD` format. |
| `location`     | One or more business locations, identified by ID. Use commas to separate multiple location IDs.|
| `bookingId`    | ID of an existing booking to reschedule. **Note:** The site member who booked the original session needs to be logged in.|

### Finding IDs 

To set customized default resources (staff members) or locations, or to reschedule an existing booking, you need to obtain the relevant IDs. You can do this as follows:

#### Resources

To find the ID for a resource using the site dashboard, follow these steps:

1. Log into the site dashboard.
2. Click "Booking Calendar" in the sidebar menu, then click "Staff" in the submenu that opens.
3. Hover over the desired resource in the list of resources to make the "Edit" button appear, then click on the "Edit" button. This opens the page for editing the resource's details.
4. Once you are on the resource's page, you can find their ID in the page URL in the address bar of the browser, after `/bookings/staff/details/`

For example, in the following URL, the resource ID is `76570209-101f-409b-af97-b445bdb63125`:

```url
https://manage.wix.com/dashboard/034bf758-3afd-4fae-877e-44508f1a003a/bookings/staff/details/76570209-101f-409b-af97-b445bdb63125?referralInfo=bookings-staff-list
```

#### Locations

To find the ID for a business location, use [`listLocations()`](/wix-business-tools-v2/locations/listlocations) or [`queryLocations()`](/wix-business-tools-v2/locations/querylocations).

#### Existing bookings

To find an existing booking's ID, use [`queryBookings()`](/wix-bookings-backend/bookings/querybookings).

## Examples 

The following are examples of shareable links for a Wix site's booking calendar page with query parameters that set customized default values.

Preset date:

```url
www.your-site.com/booking-calendar/your-service?date=2023-08-20
```

Preset date and time zone:

```url
www.your-site.com/booking-calendar/your-service?date=2023-08-20&timezone=Australia/Sydney
```

Preset resource and location:

```url
www.your-site.com/booking-calendar/your-service?resource=76570209-101f-409b-af97-b445bdb63125&location=70a4f77e-cd37-455f-bb1d-ce1f0a55dd2b
```

Multiple preset resources and locations:

```url
www.your-site.com/booking-calendar/your-service?resource=76570209-101f-409b-af97-b445bdb63125,1c20c17c-fc2a-457d-ac91-ac6c41441514&location=70a4f77e-cd37-455f-bb1d-ce1f0a55dd2b,9bb4326f-7446-4451-a4f4-bf154f1848c5
```

Booking ID to reschedule an existing booking, with preset date and locations:

```url
www.your-site.com/booking-calendar/your-service?bookingId=27f1ca08-81fc-4e27-b245-989eea19fd24&date=2023-07-11&location=70a4f77e-cd37-455f-bb1d-ce1f0a55dd2b,9bb4326f-7446-4451-a4f4-bf154f1848c5
```

