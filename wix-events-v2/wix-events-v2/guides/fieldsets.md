# Fieldset

Fieldset is a unified control for additional data that can be returned in the response. 

## Ticket definitions fieldset
 
By default, the `definitions` data in the response contains `id`, `price`, `free`, `name`, `limitPerCheckout`, `orderIndex` and `eventId` fields. 
The response will also include the following parameters based on the fieldsets provided in the request.
 
 | Fieldset     | Fields        |
 |--------------|---------------|
 | POLICY       | `policy`      |
 | DASHBOARD    | `dashboard`   |

## Orders fieldset

By default, the `order` data returned in the response contains `orderNumber`, `eventId`, `contactId`, `memberId`, `anonimyzed` and `fullyCheckedIn` fields.   
The response will also include following parameters based on the fieldsets provided in the request.

 | Fieldset      | Fields                                                                                                                                                                       |
 |---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
 | DETAILS       | `reservationId`, `snapshotId`, `created`, `firstName`, `lastName`, `confirmed`, `status`, `method`, `ticketsQuantity`, `totalPrice`, `ticketsPdf`, `archived` and `fullName` |
 | FORM          | `checkoutForm`                                                                                                                                                               |
 | TICKETS       | `tickets`                                                                                                                                                                    |
 | INVOICE       | `invoice`                                                                                                                                                                    |

## Tickets fieldset

By default, the `ticket` data in the response contains `memberId` and `anonymized` fields. 
The response will also include following parameters based on the fieldsets provided in the request.

 | Fieldset         | Fields                                                                                                                                                                                                                  |
 |------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
 | TICKET_DETAILS   | `ticketNumber`, `orderNumber`, `ticketDefinitionId`, `name`, `price`, `free`, `policy`, `qrCode`, `checkIn`, `orderStatus`, `orderArchived`, `archived`, `orderFullName`, `ticketPdf`, `checkInUrl`  and `ticketPdfUrl` |
 | GUEST_DETAILS    | `guestDetails`                                                                                                                                                                                                          |
 | GUEST_FORM       | `guestDetails.form`                                                                                                                                                                                                     |

