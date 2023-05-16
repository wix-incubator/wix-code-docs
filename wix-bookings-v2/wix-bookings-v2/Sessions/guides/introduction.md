# About the Sessions View API
The Sessions View API enables to subscribe to a materialized view of the calendar sessions, named `SessionView`.

With Sessions View, you can:
+ Easily determine changes made to the calendar, in simple CUD terms.    
+ Sync the Wix calendar sessions to an external system.
+ Issue calendar invites to external calendar providers.

The sessions view consists with only single sessions or expanded, recurring session instances.

The sessions view has an end date, which is set to be at least a year into the future.  
Periodically, the view is automatically extended, to preserve its future, 1 year, duration.
