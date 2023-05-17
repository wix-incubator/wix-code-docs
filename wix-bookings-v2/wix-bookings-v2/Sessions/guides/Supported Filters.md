# Sessions: Supported Filters

Field support for filters depends on the type of sessions you are querying: session instances of type `EVENT`, session instances of all types, or recurring session definitions.
They also depend on whether `includeExternal` is `true`.

## Wix Calendar session instances of type `EVENT` (Default)

The following table shows field support for filters for session instances of type `EVENT` when `includeExternal` is `false`:


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

## Session instances of all types

The following table shows field support for filters for session instances of all types. When `includeExternal` is `true` this table always applies, even if you only query session instances of type `EVENT`:

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

The following table shows field support for filters for recurring session definitions:

| Field           | Supported Filters                             |
| --------------- | --------------------------------------------- |
| `scheduleId` | `eq`, `in` |

