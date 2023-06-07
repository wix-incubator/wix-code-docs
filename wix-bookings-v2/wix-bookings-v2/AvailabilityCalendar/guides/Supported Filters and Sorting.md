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

| Field           | Required | Sortable | Notes                                                                                                                                                                                                                                                                                                                  |
| --------------- | -------- | -------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `startDate`            | Required | Sortable | Returns slots that start at, or after, this date. If the `timezone` is specified, the `startDate` for the query is according to the local date and time. This means that the timezone offset in the format is ignored.                                                                                                 |
| `endDate`            | Required  |  | Returns slots that end at, or before, this date. If the `timezone` is specified, the `endDate` for the query is according to the local date and time. This means that the timezone offset in the format is ignored.                                                                                                    |
| `serviceId`            |  |  | Supports multiple values.                                                                                                                                                                                                                                                                                              |
| `resourceId`            |  |  |                                                                                                                                                                                                                                                                                                                        |
| `bookable`            |  |  | When filtered by `true`, returns only available slots. Otherwise, returns both available and non-available slots.                                                                                                                                                                                                      |
| `bookingPolicyViolations.tooEarlyToBook` |  |  |                                                                                                                                                                                                                                                                                                                        |
| `bookingPolicyViolations.tooLateToBook` |  |  |                                                                                                                                                                                                                                                                                                                        |
| `location.businessLocation.id`  |  |  | Supports multiple values. Currently, you can query for multiple business location IDs but this functionality will change in the near future. At that point, multiple locations will not be supported for appointments. For appointments, you must provide only 1 business location ID as part of any query you run. We recommend you begin to modify your code accordingly. |
| `openSpots` |  |  | Returns slots with at least this number of open spots.                                                                                                                                                                                                                                                                 |
| `createdDate`   |  |  |                                                                                                                                                                                                                                                                                                                        |
| `updatedDate`   |  |  |                                                                                                                                                                                                                                                                                                                        |


## Sorting 

Currently, only sorting by `startDate` is supported.

Specify the `sort` object in the following format:  

```json
"sort" : { 
    "fieldName":"sortField1",
    "order":"ASC"
  }
```

__Related content:__
[API Query Language](https://www.wix.com/velo/reference/api-overview/api-query-language), 
[queryvailability()](#queryavailability)