# Shareable Booking Form Links

The [booking form](https://support.wix.com/en/article/wix-bookings-creating-and-setting-up-your-booking-forms)
is one of several
[Bookings pages](https://support.wix.com/en/article/about-wix-bookings-pages)
that is automatically added to a site when Wix Bookings is installed. It is the
last page in the booking process. You can customize each Bookings page to best
suit the business and brand.

You can customize the booking form by preloading default values. This simplifies
customer experience when they book a service and allows them to skip preceding
Bookings pages. To do so, specify preloaded default values as query parameters
in the booking form page URL and direct customers to it. Customers can still change
the selected values.

For example, if you are sending out invitations by email as part of promoting a
class, you can add a shareable link in the email that already contains the event
ID, date, and time. Once the recipient clicks the link, they just have to enter
their own personal details without having to also enter event details.

## Customizable default values

You can set default values for these parameters:

| Query Parameter | Description |
| --------------- | ----------- |
| `bookings_resourceId`   | [Resource](https://dev.wix.com/docs/sdk/backend-modules/bookings/resources/introduction) ID. Required for appointments. |
| `bookings_timezone`     | Time zone in [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format. Always required. For example: `America/Santiago`. **Note:** You can only select a time zone the Wix site supports as an option. For more information, see [Setting the Time Zone Display](https://support.wix.com/en/article/setting-the-time-zone-display-in-wix-bookings). |
| `bookings_startDate`    | Initial date to open in the Booking Form page, in `YYYY-MM-DDTHH:mm:ss.SSS` format. Required for appointments. |
| `bookings_endDate`      | End date for the Booking Form Page, in `YYYY-MM-DDTHH:mm:ss.SSS` format. Required for appointments. |
| `bookings_locationId`   | ID of the business [location](https://dev.wix.com/docs/sdk/backend-modules/business-tools/locations/introduction). |
| `bookings_sessionId`    | Session ID. Required for classes. You can use [Query Availability](https://dev.wix.com/docs/sdk/backend-modules/bookings/availability-calendar/query-availability) to retrieve available appointments and class sessions. |
| `bookings_serviceId`    | [Service](https://dev.wix.com/docs/sdk/backend-modules/bookings/services/setup) ID. Required for courses and appointments. |

## Required parameters

Classes, courses, and appointment-based services require a different
set of minimum parameters when constructing the URL, since the final URL must
cover all the information a customer would have had to specify if they were
progressing manually through the Bookings pages. These are the minimum required
parameters:

+ Classes: `bookings_sessionId` and `bookings_timezone`.
+ Courses:  `bookings_serviceId` and `bookings_timezone`.
+ Appointments: `bookings_serviceId`, `bookings_resourceId`, `bookings_startDate`, `bookings_endDate` and `bookings_timezone`.

## Send a shareable booking form link

To send a preloaded, shareable booking form link:

1. Visit the relevant booking form page in the live site and save the <SITE_URL>.
   The URL follows this pattern:
   ```url
   https://<SITE_URL>/booking-form
   ```
2. Choose the preloaded settings and add the relevant [query parameters](#customizable-default-values)
   to the URL. The final URL should follow this pattern:
   ```url
   https://<SITE_URL>/booking-form?<PARAMETER1>=<VALUE1>&<PARAMETER2>=<VALUE_2>
   ```
3. Share the generated link with customers. You can send the link through various
   channels including email, chat, or text.

## Sample links

These are shareable booking form sample links with preloaded default values.

Preloading the class session and time zone:

```url
https://www.bookings-site.com/booking-form?bookings_sessionId=y38a2405-0c8d-4ab9-9542-a440395c1747&bookings_timezone=Ireland/Dublin
```

Preloading the course and time zone:

```url
https://www.bookings-site.com/booking-form?bookings_serviceId=38a2405-0c8d-4ab9-9542-a440395c1747&bookings_timezone=Australia/Sidney
```

Preloading the appointment with resource, start date, end date, and time zone:

```url
https://www.bookings-site.com/booking-form?bookings_serviceId=38a2205-0c8d-5ad9-8877-a440395c1747&bookings_resourceId=76570209-101f-409b-af97-b445bdb63125&bookings_startDate=2023-02-20T10:00:00.000&bookings_endDate=2023-02-20T11:00:00.000&bookings_timezone=Brazil/East
```