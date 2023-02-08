


# Developer Preview


Velo is always in active development, and we're constantly adding new APIs. We want to make sure that we're on the right track and building the functionality that you need. For this reason, we release some of the APIs we're still working on in Developer Preview mode for user testing. This is a way for us to get feedback from you and improve our APIs before we fully release them.

APIs in Developer Preview mode include the following warning in their introductions:

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

They also include this tag in the reference for each function:  
![developer preview tag](https://user-images.githubusercontent.com/89579857/213133550-2b4fa3e8-e8fc-4513-a733-00abcc70925c.png)  
Once these tags are removed, the API is fully released.

Here is some important information to know about Developer Preview:

### Breaking changes 



APIs in Developer Preview are still in development. This means that we **may change them at any time**. Notifications about breaking changes appear in the [release notes](/release-notes) and in the API reference for the affected functions and properties. We will not contact you directly about breaking changes. 


Because we may introduce breaking changes to these APIs, you shouldn't use them on live sites. They are for testing and feedback purposes only.

### Time limit 
APIs only stay in Developer Preview mode for a maximum of 6 months. After that they are fully released, and we don't make any breaking changes to them.

You can see which APIs are in Developer Preview in the [table](#current-developer-preview-apis) below. You can also check the API documentation in the reference to see if the developer preview tags have been removed.

### Feedback 
We would appreciate your feedback on the APIs in Developer Preview. Let us know about:

* What you're using the API for.
* Anything blocking you from using the API.
* Additions and features you would find useful.

Please [email us](mailto:velo-preview-feedback@wix.com) with your feedback.

### Bugs 
If you discover a bug in a Developer Preview API, please [email us](mailto:velo-preview-feedback@wix.com) and let us know.  We'll fix the bug as soon as possible.

### Current Developer Preview APIs 

This is a list of the APIs that are currently in Developer Preview mode.

<!-- START TABLE -->
| Module | Submodule | Function |
|---|---|---|
| wix-activity-counters.v2 | ActivityCounters | [getActivityCounters](https://www.wix.com/velo/reference/wix-activity-counters-v2/activitycounters/getactivitycounters)<br>[queryActivityCounters](https://www.wix.com/velo/reference/wix-activity-counters-v2/activitycounters/queryactivitycounters)<br>[setActivityCounters](https://www.wix.com/velo/reference/wix-activity-counters-v2/activitycounters/setactivitycounters)<br> |
| wix-blog-backend | Events | [onTagUpdated](https://www.wix.com/velo/reference/wix-blog-backend/events/ontagupdated)<br> |
| wix-bookings.v2 | AvailabilityCalendar | [queryAvailability](https://www.wix.com/velo/reference/wix-bookings-v2/availabilitycalendar/queryavailability)<br> |
| wix-bookings.v2 | Bookings | [cancelBooking](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/cancelbooking)<br>[confirmBooking](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/confirmbooking)<br>[declineBooking](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/declinebooking)<br>[rescheduleBooking](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/reschedulebooking)<br>[updateNumberOfParticipants](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/updatenumberofparticipants)<br> |
| wix-bookings.v2 | BookingsPricing | [calculatePrice](https://www.wix.com/velo/reference/wix-bookings-v2/bookingspricing/calculateprice)<br>[previewPrice](https://www.wix.com/velo/reference/wix-bookings-v2/bookingspricing/previewprice)<br> |
| wix-bookings.v2 | ExtendedBookings | [queryExtendedBookings](https://www.wix.com/velo/reference/wix-bookings-v2/extendedbookings/queryextendedbookings)<br> |
| wix-business-tools.v2 | Events | [onLocationArchiveStatus](https://www.wix.com/velo/reference/wix-business-tools-v2/events/onlocationarchivestatus)<br>[onLocationCreated](https://www.wix.com/velo/reference/wix-business-tools-v2/events/onlocationcreated)<br>[onLocationSetDefaultLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/events/onlocationsetdefaultlocation)<br>[onLocationUpdated](https://www.wix.com/velo/reference/wix-business-tools-v2/events/onlocationupdated)<br> |
| wix-business-tools.v2 | Locations | [archiveLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/archivelocation)<br>[createLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/createlocation)<br>[getLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/getlocation)<br>[listLocations](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/listlocations)<br>[queryLocations](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/querylocations)<br>[setDefaultLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/setdefaultlocation)<br>[updateLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/updatelocation)<br> |
| wix-ecom-backend | CurrentCart | [getCurrentCart](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/getcurrentcart)<br> |
| wix-email-marketing.v2 | AccountDetails | [getAccountDetails](https://www.wix.com/velo/reference/wix-email-marketing-v2/accountdetails/getaccountdetails)<br> |
| wix-email-marketing.v2 | Campaigns | [deleteCampaign](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/deletecampaign)<br>[getCampaign](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/getcampaign)<br>[listCampaigns](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/listcampaigns)<br>[listRecipients](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/listrecipients)<br>[listStatistics](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/liststatistics)<br>[pauseScheduling](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/pausescheduling)<br>[publishCampaign](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/publishcampaign)<br>[reuseCampaign](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/reusecampaign)<br>[sendTest](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/sendtest)<br> |
| wix-email-marketing.v2 | Events | [onSenderDetailsUpdated](https://www.wix.com/velo/reference/wix-email-marketing-v2/events/onsenderdetailsupdated)<br> |
| wix-events.v2 | Checkout | [cancelReservation](https://www.wix.com/velo/reference/wix-events-v2/checkout/cancelreservation)<br>[checkout](https://www.wix.com/velo/reference/wix-events-v2/checkout/checkout)<br>[createReservation](https://www.wix.com/velo/reference/wix-events-v2/checkout/createreservation)<br>[getCheckoutOptions](https://www.wix.com/velo/reference/wix-events-v2/checkout/getcheckoutoptions)<br>[getInvoice](https://www.wix.com/velo/reference/wix-events-v2/checkout/getinvoice)<br>[listAvailableTickets](https://www.wix.com/velo/reference/wix-events-v2/checkout/listavailabletickets)<br>[queryAvailableTickets](https://www.wix.com/velo/reference/wix-events-v2/checkout/queryavailabletickets)<br>[updateCheckout](https://www.wix.com/velo/reference/wix-events-v2/checkout/updatecheckout)<br> |
| wix-events.v2 | Events | [onPolicyCreated](https://www.wix.com/velo/reference/wix-events-v2/events/onpolicycreated)<br>[onPolicyDeleted](https://www.wix.com/velo/reference/wix-events-v2/events/onpolicydeleted)<br>[onPolicyUpdated](https://www.wix.com/velo/reference/wix-events-v2/events/onpolicyupdated)<br> |
| wix-events.v2 | Orders | [bulkUpdateOrders](https://www.wix.com/velo/reference/wix-events-v2/orders/bulkupdateorders)<br>[confirmOrder](https://www.wix.com/velo/reference/wix-events-v2/orders/confirmorder)<br>[getOrder](https://www.wix.com/velo/reference/wix-events-v2/orders/getorder)<br>[getSummary](https://www.wix.com/velo/reference/wix-events-v2/orders/getsummary)<br>[listOrders](https://www.wix.com/velo/reference/wix-events-v2/orders/listorders)<br>[updateOrder](https://www.wix.com/velo/reference/wix-events-v2/orders/updateorder)<br> |
| wix-events.v2 | Policies | [createPolicy](https://www.wix.com/velo/reference/wix-events-v2/policies/createpolicy)<br>[deletePolicy](https://www.wix.com/velo/reference/wix-events-v2/policies/deletepolicy)<br>[getEventPolicies](https://www.wix.com/velo/reference/wix-events-v2/policies/geteventpolicies)<br>[queryPolicies](https://www.wix.com/velo/reference/wix-events-v2/policies/querypolicies)<br>[reorderEventPolicies](https://www.wix.com/velo/reference/wix-events-v2/policies/reordereventpolicies)<br>[updatePolicy](https://www.wix.com/velo/reference/wix-events-v2/policies/updatepolicy)<br> |
| wix-events.v2 | TicketDefinitions | [changeCurrency](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/changecurrency)<br>[createTicketDefinition](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/createticketdefinition)<br>[deleteTicketDefinition](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/deleteticketdefinition)<br>[getTicketDefinition](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/getticketdefinition)<br>[listTicketDefinitions](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/listticketdefinitions)<br>[queryTicketDefinitions](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/queryticketdefinitions)<br>[updateTicketDefinition](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/updateticketdefinition)<br> |
| wix-events.v2 | Tickets | [bulkUpdateTickets](https://www.wix.com/velo/reference/wix-events-v2/tickets/bulkupdatetickets)<br>[checkInTickets](https://www.wix.com/velo/reference/wix-events-v2/tickets/checkintickets)<br>[deleteTicketCheckIns](https://www.wix.com/velo/reference/wix-events-v2/tickets/deleteticketcheckins)<br>[getTicket](https://www.wix.com/velo/reference/wix-events-v2/tickets/getticket)<br>[listTickets](https://www.wix.com/velo/reference/wix-events-v2/tickets/listtickets)<br>[updateTicket](https://www.wix.com/velo/reference/wix-events-v2/tickets/updateticket)<br> |
| wix-forum.v2 | Categories | [getCategory](https://www.wix.com/velo/reference/wix-forum-v2/categories/getcategory)<br>[getCategoryBySlug](https://www.wix.com/velo/reference/wix-forum-v2/categories/getcategorybyslug)<br>[queryCategories](https://www.wix.com/velo/reference/wix-forum-v2/categories/querycategories)<br> |
| wix-forum.v2 | Events | [onCategoryCreated](https://www.wix.com/velo/reference/wix-forum-v2/events/oncategorycreated)<br>[onCategoryDeleted](https://www.wix.com/velo/reference/wix-forum-v2/events/oncategorydeleted)<br>[onCategoryUpdated](https://www.wix.com/velo/reference/wix-forum-v2/events/oncategoryupdated)<br>[onPostClosed](https://www.wix.com/velo/reference/wix-forum-v2/events/onpostclosed)<br>[onPostCreated](https://www.wix.com/velo/reference/wix-forum-v2/events/onpostcreated)<br>[onPostDeleted](https://www.wix.com/velo/reference/wix-forum-v2/events/onpostdeleted)<br>[onPostLiked](https://www.wix.com/velo/reference/wix-forum-v2/events/onpostliked)<br>[onPostMoved](https://www.wix.com/velo/reference/wix-forum-v2/events/onpostmoved)<br>[onPostOpened](https://www.wix.com/velo/reference/wix-forum-v2/events/onpostopened)<br>[onPostPinned](https://www.wix.com/velo/reference/wix-forum-v2/events/onpostpinned)<br>[onPostReacted](https://www.wix.com/velo/reference/wix-forum-v2/events/onpostreacted)<br>[onPostReported](https://www.wix.com/velo/reference/wix-forum-v2/events/onpostreported)<br>[onPostUnliked](https://www.wix.com/velo/reference/wix-forum-v2/events/onpostunliked)<br>[onPostUnpinned](https://www.wix.com/velo/reference/wix-forum-v2/events/onpostunpinned)<br>[onPostUnreacted](https://www.wix.com/velo/reference/wix-forum-v2/events/onpostunreacted)<br>[onPostUpdated](https://www.wix.com/velo/reference/wix-forum-v2/events/onpostupdated)<br> |
| wix-forum.v2 | Posts | [getPost](https://www.wix.com/velo/reference/wix-forum-v2/posts/getpost)<br>[getPostBySlug](https://www.wix.com/velo/reference/wix-forum-v2/posts/getpostbyslug)<br>[queryPosts](https://www.wix.com/velo/reference/wix-forum-v2/posts/queryposts)<br> |
| wix-inbox.v2 | Conversations | [getConversation](https://www.wix.com/velo/reference/wix-inbox-v2/conversations/getconversation)<br>[getOrCreateConversation](https://www.wix.com/velo/reference/wix-inbox-v2/conversations/getorcreateconversation)<br> |
| wix-inbox.v2 | Events | [onMessageButtonInteracted](https://www.wix.com/velo/reference/wix-inbox-v2/events/onmessagebuttoninteracted)<br>[onMessageSentToBusiness](https://www.wix.com/velo/reference/wix-inbox-v2/events/onmessagesenttobusiness)<br>[onMessageSentToParticipant](https://www.wix.com/velo/reference/wix-inbox-v2/events/onmessagesenttoparticipant)<br> |
| wix-inbox.v2 | Messages | [listMessages](https://www.wix.com/velo/reference/wix-inbox-v2/messages/listmessages)<br>[sendMessage](https://www.wix.com/velo/reference/wix-inbox-v2/messages/sendmessage)<br> |
| wix-loyalty.v2 | Accounts | [adjustPoints](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/adjustpoints)<br>[createAccount](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/createaccount)<br>[earnPoints](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/earnpoints)<br>[getAccount](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/getaccount)<br>[getAccountBySecondaryId](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/getaccountbysecondaryid)<br>[getProgramTotals](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/getprogramtotals)<br>[getTransaction](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/gettransaction)<br>[listAccounts](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/listaccounts)<br>[listTransactions](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/listtransactions)<br> |
| wix-loyalty.v2 | Programs | [activateLoyaltyProgram](https://www.wix.com/velo/reference/wix-loyalty-v2/programs/activateloyaltyprogram)<br>[getLoyaltyProgram](https://www.wix.com/velo/reference/wix-loyalty-v2/programs/getloyaltyprogram)<br>[updateLoyaltyProgram](https://www.wix.com/velo/reference/wix-loyalty-v2/programs/updateloyaltyprogram)<br> |
| wix-marketing-tags.v2 | MarketingTags | [deleteMarketingTag](https://www.wix.com/velo/reference/wix-marketing-tags-v2/marketingtags/deletemarketingtag)<br>[listMarketingTags](https://www.wix.com/velo/reference/wix-marketing-tags-v2/marketingtags/listmarketingtags)<br>[upsertMarketingTag](https://www.wix.com/velo/reference/wix-marketing-tags-v2/marketingtags/upsertmarketingtag)<br> |
| wix-sender-details.v2 | Events | [onSenderDetailsUpdated](https://www.wix.com/velo/reference/wix-sender-details-v2/events/onsenderdetailsupdated)<br> |
| wix-sender-details.v2 | SenderDetails | [getSenderDetails](https://www.wix.com/velo/reference/wix-sender-details-v2/senderdetails/getsenderdetails)<br>[resolveActualFromAddress](https://www.wix.com/velo/reference/wix-sender-details-v2/senderdetails/resolveactualfromaddress)<br>[updateSenderDetails](https://www.wix.com/velo/reference/wix-sender-details-v2/senderdetails/updatesenderdetails)<br>[verifyEmail](https://www.wix.com/velo/reference/wix-sender-details-v2/senderdetails/verifyemail)<br> |
<!-- END TABLE -->