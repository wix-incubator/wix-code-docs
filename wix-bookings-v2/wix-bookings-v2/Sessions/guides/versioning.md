# Versioning

While changes will mostly be delivered in the order in which they occur, it is not guaranteed.  
Therefore, and in order to ensure data consistency, it is recommended to apply changes while considering the session version.

## Adding or Updating Sessions

Apply updates to sessions in the target, only if the `session.version.number` in hand is greater than the target session version.  
This applies to all sessions, either pushed to subscribed webhooks or retrieved by calling the Sessions APIs.   

## Removing Sessions

Since event ordering is not guaranteed, it is recommended to store an indication for session removal along with the session version.
Even in the absence of a previous `sessionAddedOrUpdated` event.