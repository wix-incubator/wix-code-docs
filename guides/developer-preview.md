


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
| wix-activity-counters.v2 | ActivityCounters | [getActivityCounters](/wix-activity-counters-v2/activitycounters/getactivitycounters)<br>[queryActivityCounters](/wix-activity-counters-v2/activitycounters/queryactivitycounters)<br>[setActivityCounters](/wix-activity-counters-v2/activitycounters/setactivitycounters)<br> |
| wix-blog-backend | Events | [onTagUpdated](/wix-blog-backend/events/ontagupdated)<br> |
| wix-bookings.v2 | AvailabilityCalendar | [queryAvailability](/wix-bookings-v2/availabilitycalendar/queryavailability)<br> |
| wix-bookings.v2 | Bookings | [cancelBooking](/wix-bookings-v2/bookings/cancelbooking)<br>[confirmBooking](/wix-bookings-v2/bookings/confirmbooking)<br>[confirmOrDeclineBooking](/wix-bookings-v2/bookings/confirmordeclinebooking)<br>[createBooking](/wix-bookings-v2/bookings/createbooking)<br>[declineBooking](/wix-bookings-v2/bookings/declinebooking)<br>[rescheduleBooking](/wix-bookings-v2/bookings/reschedulebooking)<br>[updateNumberOfParticipants](/wix-bookings-v2/bookings/updatenumberofparticipants)<br> |
| wix-bookings.v2 | Events | [onServiceOptionsAndVariantsCreated](/wix-bookings-v2/events/onserviceoptionsandvariantscreated)<br>[onServiceOptionsAndVariantsDeleted](/wix-bookings-v2/events/onserviceoptionsandvariantsdeleted)<br>[onServiceOptionsAndVariantsUpdated](/wix-bookings-v2/events/onserviceoptionsandvariantsupdated)<br> |
| wix-bookings.v2 | ServiceOptionsAndVariantsListQueryBuilder | [ascending](/wix-bookings-v2/serviceoptionsandvariants/serviceoptionsandvariantslistquerybuilder/ascending)<br>[descending](/wix-bookings-v2/serviceoptionsandvariants/serviceoptionsandvariantslistquerybuilder/descending)<br>[eq](/wix-bookings-v2/serviceoptionsandvariants/serviceoptionsandvariantslistquerybuilder/eq)<br>[exists](/wix-bookings-v2/serviceoptionsandvariants/serviceoptionsandvariantslistquerybuilder/exists)<br>[find](/wix-bookings-v2/serviceoptionsandvariants/serviceoptionsandvariantslistquerybuilder/find)<br>[hasSome](/wix-bookings-v2/serviceoptionsandvariants/serviceoptionsandvariantslistquerybuilder/hassome)<br>[in](/wix-bookings-v2/serviceoptionsandvariants/serviceoptionsandvariantslistquerybuilder/in)<br>[limit](/wix-bookings-v2/serviceoptionsandvariants/serviceoptionsandvariantslistquerybuilder/limit)<br>[ne](/wix-bookings-v2/serviceoptionsandvariants/serviceoptionsandvariantslistquerybuilder/ne)<br> |
| wix-bookings.v2 | ServicesQueryBuilder | [ascending](/wix-bookings-v2/services/servicesquerybuilder/ascending)<br>[descending](/wix-bookings-v2/services/servicesquerybuilder/descending)<br>[eq](/wix-bookings-v2/services/servicesquerybuilder/eq)<br>[exists](/wix-bookings-v2/services/servicesquerybuilder/exists)<br>[find](/wix-bookings-v2/services/servicesquerybuilder/find)<br>[hasAll](/wix-bookings-v2/services/servicesquerybuilder/hasall)<br>[hasSome](/wix-bookings-v2/services/servicesquerybuilder/hassome)<br>[in](/wix-bookings-v2/services/servicesquerybuilder/in)<br>[limit](/wix-bookings-v2/services/servicesquerybuilder/limit)<br>[ne](/wix-bookings-v2/services/servicesquerybuilder/ne)<br>[skip](/wix-bookings-v2/services/servicesquerybuilder/skip)<br>[startsWith](/wix-bookings-v2/services/servicesquerybuilder/startswith)<br> |
| wix-bookings.v2 | Services | [getService](/wix-bookings-v2/services/getservice)<br>[queryServices](/wix-bookings-v2/services/queryservices)<br> |
| wix-bookings.v2 | SessionsQueryBuilder | [ascending](/wix-bookings-v2/sessions/sessionsquerybuilder/ascending)<br>[descending](/wix-bookings-v2/sessions/sessionsquerybuilder/descending)<br>[eq](/wix-bookings-v2/sessions/sessionsquerybuilder/eq)<br>[exists](/wix-bookings-v2/sessions/sessionsquerybuilder/exists)<br>[find](/wix-bookings-v2/sessions/sessionsquerybuilder/find)<br>[ge](/wix-bookings-v2/sessions/sessionsquerybuilder/ge)<br>[gt](/wix-bookings-v2/sessions/sessionsquerybuilder/gt)<br>[hasAll](/wix-bookings-v2/sessions/sessionsquerybuilder/hasall)<br>[hasSome](/wix-bookings-v2/sessions/sessionsquerybuilder/hassome)<br>[le](/wix-bookings-v2/sessions/sessionsquerybuilder/le)<br>[limit](/wix-bookings-v2/sessions/sessionsquerybuilder/limit)<br>[lt](/wix-bookings-v2/sessions/sessionsquerybuilder/lt)<br>[ne](/wix-bookings-v2/sessions/sessionsquerybuilder/ne)<br>[startsWith](/wix-bookings-v2/sessions/sessionsquerybuilder/startswith)<br> |
| wix-business-tools.v2 | Events | [onLocationArchiveStatus](/wix-business-tools-v2/events/onlocationarchivestatus)<br>[onLocationCreated](/wix-business-tools-v2/events/onlocationcreated)<br>[onLocationSetDefaultLocation](/wix-business-tools-v2/events/onlocationsetdefaultlocation)<br>[onLocationUpdated](/wix-business-tools-v2/events/onlocationupdated)<br> |
| wix-business-tools.v2 | Locations | [archiveLocation](/wix-business-tools-v2/locations/archivelocation)<br>[createLocation](/wix-business-tools-v2/locations/createlocation)<br>[getLocation](/wix-business-tools-v2/locations/getlocation)<br>[listLocations](/wix-business-tools-v2/locations/listlocations)<br>[queryLocations](/wix-business-tools-v2/locations/querylocations)<br>[setDefaultLocation](/wix-business-tools-v2/locations/setdefaultlocation)<br>[updateLocation](/wix-business-tools-v2/locations/updatelocation)<br> |
| wix-email-marketing.v2 | AccountDetails | [getAccountDetails](/wix-email-marketing-v2/accountdetails/getaccountdetails)<br> |
| wix-email-marketing.v2 | Campaigns | [deleteCampaign](/wix-email-marketing-v2/campaigns/deletecampaign)<br>[getCampaign](/wix-email-marketing-v2/campaigns/getcampaign)<br>[listCampaigns](/wix-email-marketing-v2/campaigns/listcampaigns)<br>[listRecipients](/wix-email-marketing-v2/campaigns/listrecipients)<br>[listStatistics](/wix-email-marketing-v2/campaigns/liststatistics)<br>[pauseScheduling](/wix-email-marketing-v2/campaigns/pausescheduling)<br>[publishCampaign](/wix-email-marketing-v2/campaigns/publishcampaign)<br>[reuseCampaign](/wix-email-marketing-v2/campaigns/reusecampaign)<br>[sendTest](/wix-email-marketing-v2/campaigns/sendtest)<br> |
| wix-email-marketing.v2 | SenderDetails | [getSenderDetails](/wix-email-marketing-v2/senderdetails/getsenderdetails)<br>[resolveActualFromAddress](/wix-email-marketing-v2/senderdetails/resolveactualfromaddress)<br>[updateSenderDetails](/wix-email-marketing-v2/senderdetails/updatesenderdetails)<br>[verifyEmail](/wix-email-marketing-v2/senderdetails/verifyemail)<br> |
| wix-events.v2 | Checkout | [cancelReservation](/wix-events-v2/checkout/cancelreservation)<br>[checkout](/wix-events-v2/checkout/checkout)<br>[createReservation](/wix-events-v2/checkout/createreservation)<br>[getCheckoutOptions](/wix-events-v2/checkout/getcheckoutoptions)<br>[getInvoice](/wix-events-v2/checkout/getinvoice)<br>[listAvailableTickets](/wix-events-v2/checkout/listavailabletickets)<br>[queryAvailableTickets](/wix-events-v2/checkout/queryavailabletickets)<br>[updateCheckout](/wix-events-v2/checkout/updatecheckout)<br> |
| wix-events.v2 | Events | [onPolicyCreated](/wix-events-v2/events/onpolicycreated)<br>[onPolicyDeleted](/wix-events-v2/events/onpolicydeleted)<br>[onPolicyUpdated](/wix-events-v2/events/onpolicyupdated)<br> |
| wix-events.v2 | Orders | [bulkUpdateOrders](/wix-events-v2/orders/bulkupdateorders)<br>[confirmOrder](/wix-events-v2/orders/confirmorder)<br>[getOrder](/wix-events-v2/orders/getorder)<br>[getSummary](/wix-events-v2/orders/getsummary)<br>[listOrders](/wix-events-v2/orders/listorders)<br>[updateOrder](/wix-events-v2/orders/updateorder)<br> |
| wix-events.v2 | Policies | [createPolicy](/wix-events-v2/policies/createpolicy)<br>[deletePolicy](/wix-events-v2/policies/deletepolicy)<br>[getEventPolicies](/wix-events-v2/policies/geteventpolicies)<br>[queryPolicies](/wix-events-v2/policies/querypolicies)<br>[reorderEventPolicies](/wix-events-v2/policies/reordereventpolicies)<br>[updatePolicy](/wix-events-v2/policies/updatepolicy)<br> |
| wix-events.v2 | TicketDefinitions | [changeCurrency](/wix-events-v2/ticketdefinitions/changecurrency)<br>[createTicketDefinition](/wix-events-v2/ticketdefinitions/createticketdefinition)<br>[deleteTicketDefinition](/wix-events-v2/ticketdefinitions/deleteticketdefinition)<br>[getTicketDefinition](/wix-events-v2/ticketdefinitions/getticketdefinition)<br>[listTicketDefinitions](/wix-events-v2/ticketdefinitions/listticketdefinitions)<br>[queryTicketDefinitions](/wix-events-v2/ticketdefinitions/queryticketdefinitions)<br>[updateTicketDefinition](/wix-events-v2/ticketdefinitions/updateticketdefinition)<br> |
| wix-events.v2 | Tickets | [bulkUpdateTickets](/wix-events-v2/tickets/bulkupdatetickets)<br>[checkInTickets](/wix-events-v2/tickets/checkintickets)<br>[deleteTicketCheckIns](/wix-events-v2/tickets/deleteticketcheckins)<br>[getTicket](/wix-events-v2/tickets/getticket)<br>[listTickets](/wix-events-v2/tickets/listtickets)<br>[updateTicket](/wix-events-v2/tickets/updateticket)<br> |
| wix-forum.v2 | Categories | [getCategory](/wix-forum-v2/categories/getcategory)<br>[getCategoryBySlug](/wix-forum-v2/categories/getcategorybyslug)<br>[queryCategories](/wix-forum-v2/categories/querycategories)<br> |
| wix-forum.v2 | Events | [onCategoryCreated](/wix-forum-v2/events/oncategorycreated)<br>[onCategoryDeleted](/wix-forum-v2/events/oncategorydeleted)<br>[onCategoryUpdated](/wix-forum-v2/events/oncategoryupdated)<br>[onPostClosed](/wix-forum-v2/events/onpostclosed)<br>[onPostCreated](/wix-forum-v2/events/onpostcreated)<br>[onPostDeleted](/wix-forum-v2/events/onpostdeleted)<br>[onPostLiked](/wix-forum-v2/events/onpostliked)<br>[onPostMoved](/wix-forum-v2/events/onpostmoved)<br>[onPostOpened](/wix-forum-v2/events/onpostopened)<br>[onPostPinned](/wix-forum-v2/events/onpostpinned)<br>[onPostReacted](/wix-forum-v2/events/onpostreacted)<br>[onPostReported](/wix-forum-v2/events/onpostreported)<br>[onPostUnliked](/wix-forum-v2/events/onpostunliked)<br>[onPostUnpinned](/wix-forum-v2/events/onpostunpinned)<br>[onPostUnreacted](/wix-forum-v2/events/onpostunreacted)<br>[onPostUpdated](/wix-forum-v2/events/onpostupdated)<br> |
| wix-forum.v2 | Posts | [getPost](/wix-forum-v2/posts/getpost)<br>[getPostBySlug](/wix-forum-v2/posts/getpostbyslug)<br>[queryPosts](/wix-forum-v2/posts/queryposts)<br> |
| wix-inbox.v2 | Conversations | [getConversation](/wix-inbox-v2/conversations/getconversation)<br>[getOrCreateConversation](/wix-inbox-v2/conversations/getorcreateconversation)<br> |
| wix-inbox.v2 | Messages | [listMessages](/wix-inbox-v2/messages/listmessages)<br>[sendMessage](/wix-inbox-v2/messages/sendmessage)<br> |
| wix-loyalty.v2 | Accounts | [adjustPoints](/wix-loyalty-v2/accounts/adjustpoints)<br>[createAccount](/wix-loyalty-v2/accounts/createaccount)<br>[earnPoints](/wix-loyalty-v2/accounts/earnpoints)<br>[getAccount](/wix-loyalty-v2/accounts/getaccount)<br>[getAccountBySecondaryId](/wix-loyalty-v2/accounts/getaccountbysecondaryid)<br>[getProgramTotals](/wix-loyalty-v2/accounts/getprogramtotals)<br>[getTransaction](/wix-loyalty-v2/accounts/gettransaction)<br>[listAccounts](/wix-loyalty-v2/accounts/listaccounts)<br>[listTransactions](/wix-loyalty-v2/accounts/listtransactions)<br> |
| wix-loyalty.v2 | Programs | [activateLoyaltyProgram](/wix-loyalty-v2/programs/activateloyaltyprogram)<br>[getLoyaltyProgram](/wix-loyalty-v2/programs/getloyaltyprogram)<br>[updateLoyaltyProgram](/wix-loyalty-v2/programs/updateloyaltyprogram)<br> |
| wix-marketing-tags.v2 | MarketingTags | [deleteMarketingTag](/wix-marketing-tags-v2/marketingtags/deletemarketingtag)<br>[listMarketingTags](/wix-marketing-tags-v2/marketingtags/listmarketingtags)<br>[upsertMarketingTag](/wix-marketing-tags-v2/marketingtags/upsertmarketingtag)<br> |
<!-- END TABLE -->

