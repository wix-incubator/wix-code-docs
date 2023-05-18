# Sessions: Supported Filters

The following tables shows property support for filters for the session object.

Field support for filters depends on the type of sessions:

* Event-type sessions.
* Recurring session definitions.
* Any type of sessions.
**Note** Field Support for filters also depend on whether external calendars are included.

## Wix Calendar of type EVENT

The following table shows field support for filters for session of type `EVENT` when you do not include external calendars:


| Field           | Supported Filters                             |
| --------------- | --------------------------------------------- |
| `scheduleId` | `eq`, `ne`, `in` |
| `scheduleOwnerId` | `eq`, `ne`, `in` |
| `affectedSchedules` | `exists` | 
| `affectedSchedules.scheduleId` | `hasSome`, `hasAll` | 
| `affectedSchedules.transparency` | `hasSome`, `hasAll` | 
| `affectedSchedules.scheduleOwnerId` | `hasSome`, `hasAll` | 
| `tags` | `hasSome`, `hasAll` | 
| `location` | `exists` | 
| `location.locationType` | `eq`, `ne`, `in` | 
| `location.customAddress` | `exists` | 
| `location.businessLocation` | `exists` | 
| `location.businessLocation.id` | `eq`, `ne`, `in` | 
| `capacity` | `eq`, `ne`, `gt`, `lt`, `gte`, `lte`, `exists` | 
| `remainingCapacity` | `eq`, `ne`, `gt`, `lt`, `gte`, `lte` |
| `numberOfParticipants` | `eq`, `ne`, `gt`, `lt`, `gte`, `lte` | 
| `inheritedFields` | `hasSome`, `hasAll` | 
| `recurringSessionId` | `eq`, `ne`, `in`, `exists` |
| `calendarConference` | `exists` |
| `instanceOfRecurrence` | `eq`, `ne`, `in`, `exists` | 

## Sessions of any type

The following table shows field support for filters for session of all types. When `includeExternal` is `true` this table always applies, even if you only query session of type `EVENT`:

| Field | Supported Filters  |
| ----- | ------------------ |
| `scheduleId` | `eq`, `in` | 
| `affectedSchedules.scheduleId` | `hasSome`, `hasAll` | 
| `tags` | `hasSome` |
| `location.locationType` | `eq`, `in` |
| `location.businessLocation.id` | `eq`, `in` |
| `recurringSessionId` | `eq`, `in` |
| `calendarConference` | `exists` |

## Recurring sessions

The following table shows field support for filters for recurring sessions:

| Field           | Supported Filters                             |
| --------------- | --------------------------------------------- |
| `scheduleId` | `eq`, `in` |

__Related content:__
[`listSessions()`](https://example.com/),
[`querySessions()`](https://example.com)