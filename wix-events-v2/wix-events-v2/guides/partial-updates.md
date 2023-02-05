# Partial Updates
Most update endpoints support partial updates via a combination of a _partial entity body_ and a `fields` parameter.

## Fields parameter
The `fields` parameter accepts a set of field paths that specifies the entity data to update. In general, the fields path begins from the root of the request body.

When the `fields` parameter contains a sub-path of the entity fields, like `event` - all nested fields are included in the update: `event.title`, `event.description`, etc.

When the `fields` parameter is empty, the request will modify ALL entity fields.

`fields` parameter behavior follows [google.protobuf.FieldMask][google-protobuf-fieldmask] semantics.

## Examples
To update an `Event` title, and reschedule it to a later date, the request would look like this:
```json
{
  "event": {
    "title": "My event (rescheduled & relocated)",
    "scheduleConfig": {
      "startDate": "2032-05-16T10:00:00.000+03:00",
      "endDate": "2032-05-16T10:30:00.000+03:00"
    }
  },
  "fields": {
    "paths": [
      "event.title",
      "event.scheduleConfig.startDate",
      "event.scheduleConfig.endDate"
    ]
  }
}
```


To erase optional fields, send an empty body and list the field(s) to update in the `fields` parameter.
For example, to clear an event description, the request would look like this:
```json
{
  "event": {},
  "fields": {
    "paths": [
      "event.description"
    ]
  }
}
```

When only one parameter can be updated, the `fields` parameter must still be passed.
For example, to bulk update the `status` of multiple RSVPs to one event, the request would look like this:
```json
{
  "status": "WAITING",
  "fields": {
     "paths": [
       "status"
     ]
   }
}
```

[google-protobuf-fieldmask]: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask
