# Fieldset

Fieldset is a unified control for additional data that can be returned in the response. 

## Event fieldset

By default, the `event` data in the response returns `id`, `title`, `slug`, `location`, `scheduling`, `tags`, `created`, `modified`, `status`, `guestListConfig`, `instanceId`, `userId` and `language` fields. 
The response will also include following parameters based on the fieldsets provided in the request.


 | Fieldset                    | Fields                                         |
 |-----------------------------|------------------------------------------------|
 | DETAILS                     | `description`, `mainImage` and `calendarLinks` |
 | TEXTS                       | `about`                                        |
 | REGISTRATION                | `registration`                                 |
 | URLS                        | `eventPageUrl`                                 |
 | FORM                        | `form`                                         |
 | DASHBOARD                   | `dashboard`                                    |
 | FEED (for internal use)     | `feed` (for internal use)                      |
 | ONLINE_CONFERENCING_SESSION | `onlineConferencing`                           |


## Ticket definition fieldset
 
By default, the `definitions` data in the response contains `id`, `price`, `free`, `name`, `limitPerCheckout`, `orderIndex` and `eventId` fields. 
The response will also include the following parameters based on the fieldsets provided in the request.
 
 | Fieldset     | Fields        |
 |--------------|---------------|
 | POLICY       | `policy`      |
 | DASHBOARD    | `dashboard`   |

## Order fieldset

By default, the `order` data returned in the response contains `orderNumber`, `eventId`, `contactId`, `memberId`, `anonimyzed` and `fullyCheckedIn` fields. 
The response will also include following parameters based on the fieldsets provided in the request.

 | Fieldset      | Fields                                                                                                                                                                       |
 |---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
 | DETAILS       | `reservationId`, `snapshotId`, `created`, `firstName`, `lastName`, `confirmed`, `status`, `method`, `ticketsQuantity`, `totalPrice`, `ticketsPdf`, `archived` and `fullName` |
 | FORM          | `checkoutForm`                                                                                                                                                               |
 | TICKETS       | `tickets`                                                                                                                                                                    |
 | INVOICE       | `invoice`                                                                                                                                                                    |

## Ticket fieldset

By default, the `ticket` data in the response contains `memberId` and `anonymized` fields. 
The response will also include following parameters based on the fieldsets provided in the request.

 | Fieldset         | Fields                                                                                                                                                                                                                  |
 |------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
 | TICKET_DETAILS   | `ticketNumber`, `orderNumber`, `ticketDefinitionId`, `name`, `price`, `free`, `policy`, `qrCode`, `checkIn`, `orderStatus`, `orderArchived`, `archived`, `orderFullName`, `ticketPdf`, `checkInUrl`  and `ticketPdfUrl` |
 | GUEST_DETAILS    | `guestDetails`                                                                                                                                                                                                          |
 | GUEST_FORM       | `guestDetails.form`                                                                                                                                                                                                     |

## Policy fieldset

By default, the `policy` data in the response contains `id`, `eventId`, `name`, `updated_date` and `sortIndex` fields. 
The response will also include following parameters based on the fieldsets provided in the request.

 | Fieldset         | Fields                         |
 |------------------|--------------------------------|
 | BODY             | `body`                         |

## Token fieldset

By default, the get tokens response contains only `token` field. 
The response will also include following parameters based on the fieldsets provided in the request.

 | Fieldset         | Fields                         |
 |------------------|--------------------------------|
 | POLICIES         | `policies`                     |
