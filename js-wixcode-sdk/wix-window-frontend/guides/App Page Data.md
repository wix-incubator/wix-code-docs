<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# App Page Data

You can use the [`getAppPageData()`](/wix-window-frontend/getapppagedata) function in code for [custom app pages](https://dev.wix.com/docs/develop-websites/articles/wix-apps/build-a-custom-wix-business-app-page) to retrieve data you can use to customize the page. The data passed to each type of custom app page is different. This article lists the objects passed to each type of custom app page.

## Booking Service Page

The object passed to a custom Booking Service page contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| `service` | Object | The [Service object](https://dev.wix.com/docs/rest/business-solutions/bookings/services/services-v2/service-object), which contains detailed data about the service. |

> **Note**: If the page URL specifies a service that is deleted, hidden, or does not exist, the app returns `null`.

Learn more about [building a custom Service page](https://dev.wix.com/docs/develop-websites/articles/wix-apps/wix-bookings/build-a-custom-booking-service-page).

## Booking Calendar Page

The object passed to a custom Booking Calendar page contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| `service` | Object | The [Service object](https://dev.wix.com/docs/rest/business-solutions/bookings/services/services-v2/service-object), which contains detailed data about the service. |

## Pricing Plans Page

The object passed to a custom Pricing Plans page contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| `plan` | Object | The [Plan object](https://dev.wix.com/docs/rest/business-solutions/pricing-plans/pricing-plans/plans/plan-object), which contains detailed data about the plans. |

> **Note**: If the page URL specifies a plan that is deleted, hidden, or does not exist, the app returns `null`.

Learn more about [building a custom Pricing Plans page](https://dev.wix.com/docs/develop-websites/articles/wix-apps/wix-pricing-plans/build-a-custom-pricing-plans-page).
