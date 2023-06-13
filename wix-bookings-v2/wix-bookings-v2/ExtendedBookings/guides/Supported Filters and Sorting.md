# Extended Bookings: Supported Filters and Sorting

The following table shows field support for filters for the booking object. All fields listed are sortable.

| Field                                                                       | Supported Filters                             |
|-----------------------------------------------------------------------------| --------------------------------------------- |
| id                                                                          | `$eq`, `$ne`, `$in` |
| bookedEntity.item.slot.sessionId                                            | `$eq`, `$ne`, `$in` |
| bookedEntity.item.slot.serviceId                                            | `$eq`, `$ne`, `$in` |
| bookedEntity.item.slot.scheduleId                                           | `$eq`, `$ne`, `$in` |
| bookedEntity.item.slot.resource.id                                          | `$eq`, `$ne`, `$in` |
| bookedEntity.item.slot.location.id                                          | `$eq`, `$ne`, `$in` |
| bookedEntity.item.slot.location.locationType                                | `$eq`, `$ne`, `$in` |
| bookedEntity.item.schedule.scheduleId                                       | `$eq`, `$ne`, `$in` |
| bookedEntity.item.schedule.serviceId                                        | `$eq`, `$ne`, `$in` |
| bookedEntity.item.schedule.location.id                                      | `$eq`, `$ne`, `$in` |
| bookedEntity.item.schedule.location.locationType                            | `$eq`, `$ne`, `$in` |
| bookedEntity.tags                                                           | `$hasSome`, `$hasAll` |
| contactDetails.contactId                                                    | `$eq`, `$ne`, `$in` |
| status                                                                      | `$eq`, `$ne`, `$in` |
| paymentStatus                                                               | `$eq`, `$ne`, `$in` |
| selectedPaymentOption                                                       | `$eq`, `$ne`, `$in` |
| createdDate                                                                 | `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `n$in` |
| externalUserId                                                              | `$eq`, `$ne`, `$in` |
| createdBy.contactId                                                         | `$eq`, `$ne`, `$in` |
| createdBy.id.appId                                                          | `$eq`, `$ne`, `$in` |
| createdBy.id.wixUserId                                                      | `$eq`, `$ne`, `$in` |
| createdBy.id.memberId                                                       | `$eq`, `$ne`, `$in` |
| createdBy.id.anonymousVisitorId                                             | `$eq`, `$ne`, `$in` |
| startDate                                                                   | `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `n$in` |
| endDate                                                                     | `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `n$in` |
| updatedDate                                                                 | `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `n$in` |
| doubleBooked                                                                | `$eq`, `$ne` |
| participants$info.type.totalParticipants.value                               | `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `n$in` |
| participants$info.type.participantsChoices.serviceChoices.choices.optionId       |  `$hasSome`, `$hasAll` |
| participants$info.type.participantsChoices.serviceChoices.choices.choice.custom.value |  `$hasSome`, `$hasAll` |

Bookings belonging to a schedule don't have a `sessionId`. Therefore you 
must use the `sessionId` filter that isn't part of the `query` object to 
filter bookings for courses.

__Related content:__
[API Query Language](https://www.wix.com/velo/reference/api-overview/api-query-language),
[queryExtendedBookings( )](https://www.wix.com/velo/reference/wix-bookings-v2/extendedbookings/queryextendedbookings)
