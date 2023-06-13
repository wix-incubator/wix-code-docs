# Availability Calendar: Supported Fields, Filters, and Sorting

`Query` endpoints allow you to filter and sort results based on slot availability properties. This article covers field support for filtering and sorting.

## Filtering

Specify the `filter` object in the following format:  

```json
"filter" : {  
  "fieldName": "value"  
 } 
```

`filter` does not support the [API Query Language](https://www.wix.com/velo/reference/api-overview/api-query-language) comparison operators. 

> **Note**: Only the implied equal operator is supported. This means you can use the 
>    format above, but you cannot use the format below, even if `$operator` is `$eq`: 
>    
>    ```json
>    "filter" : {  
>      "fieldName":{"$operator":"value"}  
>     }
>    ```


The following table shows field support for filtering with the `slotAvailability` object:

| Field                | Required     | Filterable    | Sortable | Notes |
| -------------------- | ------------ | ------------- | -------- | ----- |
| `slot`   |  | Not filterable |  |  |
| `slot.startDate`            | Required | Not filterable | Sortable | Returns slots that start at, or after, this date. If `timezone` is specified, the `slot.startDate` for the query is according to the local date and time, which means that the timezone offset in the format is ignored.  |
| `slot.endDate`            | Required  |  |  | Returns slots that end at, or before, this date. If the `timezone` is specified, the `slot.endDate` for the query is according to the local date and time, which means that the timezone offset in the format is ignored. |
| `slot.serviceId`            |  |  |  | Supports multiple values. Returned if `slot` is provided. |
| `slot.resourceId`            |  |  |  |  |
| `slot.scheduleId`  |  | Not filterable  |  | Returned if `slot` is provided.  |
| `slot.sessionId`   |  | Not filterable  |  |  |
| `slot.timezone`    |  |  Not filterable |  |  |
| `slot.resource`    |  |  Not filterable  |  |  |
| `slot.location`    |  |  Not filterable  |  |  |
| `bookable`            |  |  |  | When filtered by `true`, returns only available slots. Otherwise, returns both available and non-available slots. This field is always returned. |
| `bookingPolicyViolations.tooEarlyToBook` |  |  |  |
| `bookingPolicyViolations.tooLateToBook` |  |  |  |
| `location.businessLocation.id`  |  |  | Supports multiple values. |
| `openSpots` |  |  | Returns slots with at least this number of open spots. |
| `totalSpots`    |  |  Not filterable  |  |  |
| `waitingList`    |  |  Not filterable  |  |  |
| `bookingPolicyViolations`    |  |  Not filterable  |  |  |

## Sorting 

Currently, only sorting by `slot.startDate` is supported.

Specify the `sort` object in the following format:  

```json
"sort" : { 
    "fieldName":"sortField1",
    "order":"ASC"
  }
```


__Related content:__
[API Query Language](https://www.wix.com/velo/reference/api-overview/api-query-language),
[queryAvailability( )](https://www.wix.com/velo/reference/wix-bookings-v2/availabilitycalendar/queryavailability)