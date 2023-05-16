# Sample Flows

This article shares a possible use case your implementation could support, as well as a sample flow. You're not limited to this use case, but it can be a helpful jumping off point for your planing.

## Sync Ongoing Changes to an External System

1. Subscribe to the [Session View Updated](./session-view-updated-webhook) Webhook
2. Apply changes to the external system, based on the `actionEvent` type, which may be one of the following:
   - `sessionAddedOrUpdated`- add or update the session, if its version is newer. See [Versioning](./versioning) for more details.
   - `sessionRemoved`- remove session. 

> **Note**  
> Since event ordering is not guaranteed, it is recommended to store an indication for removal, even in the absence of a previous `sessionAddedOrUpdated` event.

## Full Sync to an External System

1. Sync ongoing changes by following the instructions above.
2. Retrieve the sessions view end date by calling [Get Session View](./get-session-view).
3. Query for sessions by calling the [Query Sessions](https://dev.wix.com/api/rest/wix-bookings/calendar/sessions/query-sessions) API
   - `fromDate` is up to you to determine.
   - `toDate` should match the sessions view end date, retrieved in the previous step.
   - You may provide additional query filters based on your use case. See [Filtering](https://dev.wix.com/api/rest/wix-bookings/calendar/sessions/filtering) for more details.
4. Add or update the sessions retrieved in the previous step, if their version is newer. See [Versioning](./versioning) for more details.
