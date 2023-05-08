---
title: Supported Fieldsets
---


# Supported Fieldsets

Fieldsets let you return a predefined partial `session` object.
The following table shows the fields that are returned by [`getSession()`](https://www.wix.com/velo/reference/wix-bookings-v2/sessions/getsession), [`querySessions()`](https://www.wix.com/velo/reference/wix-bookings-v2/sessions/querysessions), and [`listSessions()`](https://www.wix.com/velo/reference/wix-bookings-v2/sessions/listsessions) for each fieldset.

| <div style="width:150px">Fieldset</div>          | <div style="width:200px">Returned Fields</div>          |
| --------------- | --------------------------------------------- |
| `NO_PI` | Returns partial session objects without personal information. This means the following fields are excluded: `participants`, `location`, `calendarConference`, and `externalCalendarOverrides`.| 
| `ALL_PI` | Returns complete session objects including personal information.|

> __Notes__:
> + `NO_PI` is the default if you don't pass a value for `fieldsets`.
> + If you pass both `NO_PI` and `ALL_PI` in the same call, complete session objects are returned.