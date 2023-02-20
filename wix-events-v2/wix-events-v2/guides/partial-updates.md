# Partial Updates
Most update functions support partial updates via a combination of a partial entity body and a `fields` parameter.

## Fields parameter
The `fields` parameter accepts a set of field paths that specifies the entity data to update. 

The field path begins from the root of the request and may contain several levels of fields in dot notation. This indicates the specific fields to update. For example, `options.checkoutForm.inputValues.inputName`.  


When the `fields` parameter contains a partial path of the entity fields to update, for example, `event`, all nested fields of `event` are updated, including `event.title` and `event.description`.

When the `fields` parameter is empty, the request modifies all entity fields. 

## Examples
To update an `Event` title, and reschedule it to a later date, use this format: 

```js
{
  event: {
    title: 'My event (rescheduled)',
    scheduleConfig: {
      startDate: "2032-05-16T10:00:00.000+03:00",
      endDate: "2032-05-16T10:30:00.000+03:00"
    }
  },
  fields: {
    paths: [
      "event.title",
      "event.scheduleConfig.startDate",
      "event.scheduleConfig.endDate"
    ]
  }
}
```


To erase optional fields, send an empty body and list the fields to update in the `fields` parameter.
For example, to clear an event description, use this structure:

```js
{
  event: {},
  fields: {
    paths: [
      "event.description"
    ]
  }
}
```

When only one parameter can be updated, the `fields` parameter must still be passed.
For example, to bulk update the `status` of multiple RSVPs to one event, use this format:

```js
{
  status: 'WAITING',
  fields: {
     paths: [
       "status"
     ]
   }
}
```

