<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# Sharing a link to a preloaded booking form

Once you add Wix Bookings, [certain pages](https://support.wix.com/en/article/about-wix-bookings-pages#get-details-you-need-from-clients-with-the-booking-form) are automatically added to your site. 
You use these pages to run all aspects of your Booking business; from creating services to managing your schedule each week. 
You can also customize each of the pages to suit your business and brand. 

Another way you can customize the client's booking experience is by updating the Booking Form page, which is the last page in the booking process, so that it is preloaded with default values. This way, your clients can skip the preceding pages and proceed directly to the Booking Form page. To do this, create and share a link to a Wix site's [booking form](https://support.wix.com/en/article/wix-bookings-creating-and-setting-up-your-booking-forms) with preset, default values you choose. You set the values by adding query parameters to the Booking Form page URL.

By preloading booking form values, you can simplify the customer's booking experience when they sign up for a service.

For example, if you are sending out invitations by email as part of promoting a class or a customer needs to sign up to a haircut, you can add a shareable link in the email that already contains the event ID, date, and time. The recipient can click the link and just enter their own personal details without having to enter the event details also.

You can set default values for these fields:

+ `bookings_startDate` and `bookings_endDate`
+ `bookings_timezone`
+ `bookings_resourceId`
+ `bookings_locationId`
+ `bookings_sessionId`
+ `bookings_serviceId`

Note that each type of session requires a specific set of minimum parameters when constructing the URL. These sets of parameters correspond to the information the client would have had to select if they were progressing manually through the booking pages.
You can refer to the list below for the specific parameters required for each type of session

+ Classes: `bookings_sessionId` and `bookings_timezone`
+ Courses:  `bookings_serviceId` and `bookings_timezone`
+ Appointments: `bookings_serviceId`, `bookings_resourceId`, `bookings_startDate`, `bookings_endDate` and `bookings_timezone`

## Creating a link to a preloaded booking form 

To create a URL with query parameters for creating a preloaded booking form, follow these steps:

1. Get the Wix site's [Booking Form page URL](#booking-form-page-url).
2. Determine which [query parameters](#query-parameters) you want to use.

### Getting the URL for the Booking Form page 

You can find the full URL for a Wix site's Booking Form page by navigating to the published page in a browser.

Alternatively, you can construct the full URL for a Booking Form page on the basis of the site URL and the slug for the service.
The full URL for a Booking Form page is:

```url
https://<SITE_URL>/booking-form?<SERVICE_SLUG>
```

To find the service slug using the Dashboard:

1. Log into the Dashboard.
2. Click **Booking Services** in the sidebar menu.
3. Hover over the desired service in the list of services to make the **Edit** button appear.
4. Click **Edit** to open the page for managing the service.
5. Scroll down to the "Marketing & SEO" section on the right.
6. Click **Edit SEO Settings** to open the "SEO Settings" section.
7. The service slug appears in the "URL slug" field.

For example, if a Wix site's URL is `www.my-example-site.com` and the service slug is `initial-consultation`, the shared link URL is:

```url
https://www.my-example-site.com/booking-form/initial-consultation
```

### Choosing which settings to preload 

Attach any of the following query parameters to a Wix site Booking Form page URL to preset the booking form settings:

| Query Parameter | Description |
| --------------- | ----------- |
| `bookings_resourceId`   | The selected resource, identified by ID.|
| `bookings_timezone`     | Default time zone for the Booking Form page, in [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format. For example: `America/Santiago`. **Note:** You can only select a time zone the page supports as an option. For more information, see [Setting the Time Zone Display](https://support.wix.com/en/article/setting-the-time-zone-display-in-wix-bookings).|
| `bookings_startDate`    | Initial date to open in the Booking Form page, in `YYYY-MM-DDTHH:mmsss.SSS` format. |
| `bookings_endDate`      | End date for the Booking Form Page, in `YYYY-MM-DDTHH:mmsss.SSS` format. |
| `bookings_locationId`   | Business location, identified by ID.|
| `bookings_sessionId`    | ID of session, needed for classes. |
| `bookings_serviceId`    | ID of a service, needed for courses.|

Velo APIs are the best way to get the IDs for the query parameters:

+ For classes, use [`listSessions()`](/wix-bookings-v2/sessions/listsessions).
+ For appointments use [`queryAvailability`](/wix-bookings-v2/availabilitycalendar/queryavailability).

## Examples 

The following are examples of shareable links for a Wix site's Booking Form page with query parameters that that set preloaded values.

Preloading the class and the timezone:

```url
www.your-site.com/booking-form?bookings_sessionId=y38a2405-0c8d-4ab9-9542-a440395c1747&bookings_timezone=Ireland/Dublin
```

Preloading the course and time-zone:

```url
www.your-site.com/booking-form?bookings_serviceId=38a2405-0c8d-4ab9-9542-a440395c1747&bookings_timezone=Australia/Sidney
```

Preloading the appointment, with a resource, start date, end date and time zone:

```url
www.your-site.com/booking-form?bookings_serviceId=38a2205-0c8d-5ad9-8877-a440395c1747&bookings_resourceId=76570209-101f-409b-af97-b445bdb63125&bookings_startDate=2023-02-20T10:00:00.000&bookings_endDate=2023-02-20T11:00:00.000&bookings_timezone=Jerusalem/Israel
```

## Sending the link to the client

 You can send the link through various channels such as email, chat, or text, depending on what you think is the most appropriate. 

