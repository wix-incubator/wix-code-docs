<!-- This article was published using the Doc Push single-sourcing tool. Any changes to this article MUST be made in the source file. Find it at www.github.com/wix-private/velo-docs.-->

# App Page Data

You can use the `getAppPageData()` ([SDK](https://dev.wix.com/docs/sdk/frontend-modules/window/get-app-page-data) | [Velo](https://dev.wix.com/docs/velo/apis/wix-window-frontend/get-app-page-data)) method for [custom app pages](https://dev.wix.com/docs/develop-websites/articles/wix-apps/replace-a-wix-business-app-page-with-your-own-custom-version) to retrieve data you can use to customize the page. The data passed to each type of custom app page is different. This article lists the objects passed to each type of custom app page.

## Bookings Service Page

The object passed to a custom Bookings Service page contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| `service` | Object | The `service` object which contains detailed data about the service. <br /><br />For a full description of the `service` object, see the object returned in `getService()` ([SDK](https://dev.wix.com/docs/sdk/backend-modules/bookings/services/get-service) | [Velo](https://dev.wix.com/docs/velo/apis/wix-bookings-v2/services/get-service)). |

> **Note**: If the page URL specifies a service that is deleted, hidden, or does not exist, the app returns `null`.

Learn more about [building a custom Service page](https://dev.wix.com/docs/develop-websites/articles/wix-apps/wix-app-collections/wix-bookings/build-a-custom-booking-service-page).

## Bookings Calendar Page

The object passed to a custom Bookings Calendar page contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| `service` | Object | The `service` object which contains detailed data about the service. <br /><br />For a full description of the `service` object, see the object returned in `getService()` ([SDK](https://dev.wix.com/docs/sdk/backend-modules/bookings/services/get-service) | [Velo](https://dev.wix.com/docs/velo/apis/wix-bookings-v2/services/get-service)). |

## Pricing Plans Page

The object passed to a custom Pricing Plans page contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| `plan` | Object | The `plan` object which contains detailed data about the plans. <br /><br />For a full description of the `plan` object, see the object returned in `getService()` ([SDK](https://dev.wix.com/docs/sdk/backend-modules/pricing-plans/plans/get-plan) | [Velo](https://dev.wix.com/docs/velo/apis/wix-pricing-plans-v2/plans/get-plan)). |

> **Note**: If the page URL specifies a plan that is deleted, hidden, or does not exist, the app returns `null`.

Learn more about [building a custom Pricing Plans page](https://dev.wix.com/docs/develop-websites/articles/wix-apps/wix-app-collections/other-apps/wix-pricing-plans/tutorial-using-the-pricing-plans-api-for-pricing-plan-ordering-and-payment).
