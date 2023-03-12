


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
| wix-activity-counters.v2 | ActivityCounters | [getActivityCounters](https://www.wix.com/velo/reference/wix-activity-counters-v2/activitycounters/getactivitycounters "anchor")<br>[setActivityCounters](https://www.wix.com/velo/reference/wix-activity-counters-v2/activitycounters/setactivitycounters "anchor")<br>[queryActivityCounters](https://www.wix.com/velo/reference/wix-activity-counters-v2/activitycounters/queryactivitycounters "anchor") |
| wix-bookings.v2 | AvailabilityCalendar | [queryAvailability](https://www.wix.com/velo/reference/wix-bookings-v2/availabilitycalendar/queryavailability "anchor") |
| wix-bookings.v2 | Bookings | [cancelBooking](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/cancelbooking "anchor")<br>[confirmBooking](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/confirmbooking "anchor")<br>[declineBooking](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/declinebooking "anchor")<br>[rescheduleBooking](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/reschedulebooking "anchor")<br>[updateNumberOfParticipants](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/updatenumberofparticipants "anchor") |
| wix-business-tools.v2 | Locations | [archiveLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/archivelocation "anchor")<br>[setDefaultLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/setdefaultlocation "anchor")<br>[queryLocations](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/querylocations "anchor")<br>[updateLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/updatelocation "anchor")<br>[listLocations](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/listlocations "anchor")<br>[getLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/getlocation "anchor")<br>[createLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/createlocation "anchor") |
| wix-events.v2 | Checkout | [getCheckoutOptions](https://www.wix.com/velo/reference/wix-events-v2/checkout/getcheckoutOptions "anchor")<br>[updateCheckout](https://www.wix.com/velo/reference/wix-events-v2/checkout/updatecheckout "anchor")<br>[checkout](https://www.wix.com/velo/reference/wix-events-v2/checkout/checkout "anchor")<br>[getInvoice](https://www.wix.com/velo/reference/wix-events-v2/checkout/getinvoice "anchor")<br>[cancelReservation](https://www.wix.com/velo/reference/wix-events-v2/checkout/cancelreservation "anchor")<br>[createReservation](https://www.wix.com/velo/reference/wix-events-v2/checkout/createreservation "anchor")<br>[queryAvailableTickets](https://www.wix.com/velo/reference/wix-events-v2/checkout/queryavailabletickets "anchor")<br>[listAvailableTickets](https://www.wix.com/velo/reference/wix-events-v2/checkout/listavailabletickets "anchor") |
| wix-events.v2 | Orders | [getSummary](https://www.wix.com/velo/reference/wix-events-v2/orders/getsummary "anchor")<br>[confirmOrder](https://www.wix.com/velo/reference/wix-events-v2/orders/confirmorder "anchor")<br>[bulkUpdateOrders](https://www.wix.com/velo/reference/wix-events-v2/orders/bulkupdateorders "anchor")<br>[updateOrder](https://www.wix.com/velo/reference/wix-events-v2/orders/updateorder "anchor")<br>[getOrder](https://www.wix.com/velo/reference/wix-events-v2/orders/getorder "anchor")<br>[listOrders](https://www.wix.com/velo/reference/wix-events-v2/orders/listorders "anchor") |
| wix-events.v2 | Policies | [queryPolicies](https://www.wix.com/velo/reference/wix-events-v2/policies/querypolicies "anchor")<br>[deletePolicy](https://www.wix.com/velo/reference/wix-events-v2/policies/deletepolicy "anchor")<br>[updatePolicy](https://www.wix.com/velo/reference/wix-events-v2/policies/updatepolicy "anchor")<br>[getEventPolicies](https://www.wix.com/velo/reference/wix-events-v2/policies/geteventpolicies "anchor")<br>[reordereventpolicies](https://www.wix.com/velo/reference/wix-events-v2/policies/reordereventpolicies "anchor")<br>[createPolicy](https://www.wix.com/velo/reference/wix-events-v2/policies/createpolicy "anchor") |
| wix-events.v2 | TicketDefinitions | [changeCurrency](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/changecurrency "anchor")<br>[createTicketDefinition](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/createticketdefinition "anchor")<br>[deleteTicketDefinition](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/deleteticketdefinition "anchor")<br>[getTicketDefinition](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/getticketdefinition "anchor")<br>[listTicketDefinitions](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/listticketdefinitions "anchor")<br>[queryTicketDefinitions](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/queryticketdefinitions "anchor")<br>[updateTicketDefinition](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/updateticketdefinition "anchor") |
| wix-events.v2 | Tickets | [bulkUpdateTickets](https://www.wix.com/velo/reference/wix-events-v2/tickets/bulkupdatetickets "anchor")<br>[checkInTickets](https://www.wix.com/velo/reference/wix-events-v2/tickets/checkintickets "anchor")<br>[deleteTicketCheckIns](https://www.wix.com/velo/reference/wix-events-v2/tickets/deleteticketcheckins "anchor")<br>[getTicket](https://www.wix.com/velo/reference/wix-events-v2/tickets/getticket "anchor")<br>[listTickets](https://www.wix.com/velo/reference/wix-events-v2/tickets/listtickets "anchor")<br>[updateTicket](https://www.wix.com/velo/reference/wix-events-v2/tickets/updateticket "anchor") |
| wix-forum.v2 | Categories | [queryCategories](https://www.wix.com/velo/reference/wix-forum-v2/categories/querycategories "anchor")<br>[getCategoryBySlug](https://www.wix.com/velo/reference/wix-forum-v2/categories/getcategorybyslug "anchor")<br>[getCategory](https://www.wix.com/velo/reference/wix-forum-v2/categories/getcategory "anchor") |
| wix-forum.v2 | Posts | [queryPosts](https://www.wix.com/velo/reference/wix-forum-v2/posts/queryposts "anchor")<br>[getPostBySlug](https://www.wix.com/velo/reference/wix-forum-v2/posts/getpostbyslug "anchor")<br>[getPost](https://www.wix.com/velo/reference/wix-forum-v2/posts/getpost "anchor") |
| wix-inbox.v2 | Conversations | [getConversation](https://www.wix.com/velo/reference/wix-inbox-v2/conversations/getconversation "anchor")<br>[getOrCreateConversation](https://www.wix.com/velo/reference/wix-inbox-v2/conversations/getorcreateconversation "anchor") |
| wix-inbox.v2 | Messages | [listMessages](https://www.wix.com/velo/reference/wix-inbox-v2/message/listmessages "anchor")<br>[sendMessage](https://www.wix.com/velo/reference/wix-inbox-v2/message/sendmessage "anchor") |
| wix-loyalty.v2 | Accounts | [listTransactions](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/listtransactions "anchor")<br>[getTransaction](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/gettransaction "anchor")<br>[listAccounts](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/listaccounts "anchor")<br>[getAccountBySecondaryId](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/getaccountbysecondaryid "anchor")<br>[getProgramTotals](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/getprogramtotals "anchor")<br>[getAccount](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/getaccount "anchor")<br>[adjustPoints](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/adjustpoints "anchor")<br>[earnPoints](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/earnpoints "anchor")<br>[createAccount](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/createaccount "anchor") |
| wix-loyalty.v2 | Programs | [activateLoyaltyProgram](https://www.wix.com/velo/reference/wix-loyalty-v2/programs/activateloyaltyprogram "anchor")<br>[updateLoyaltyProgram](https://www.wix.com/velo/reference/wix-loyalty-v2/programs/updateloyaltyprogram "anchor")<br>[getLoyaltyProgram](https://www.wix.com/velo/reference/wix-loyalty-v2/programs/getloyaltyprogram "anchor") |
| wix-marketing-tags.v2 | MarketingTags | [deleteMarketingTag](https://www.wix.com/velo/reference/wix-marketing-tags-v2/marketingtags/deletemarketingtag "anchor")<br>[listMarketingTags](https://www.wix.com/velo/reference/wix-marketing-tags-v2/marketingtags/listmarketingtags "anchor")<br>[upsertMarketingTag](https://www.wix.com/velo/reference/wix-marketing-tags-v2/marketingtags/upsertmarketingtag "anchor") |
| wix-sender-details.v2 | SenderDetails | [getSenderDetails](https://www.wix.com/velo/reference/wix-sender-details-v2/senderdetails/getsenderdetails "anchor")<br>[resolveActualFromAddress](https://www.wix.com/velo/reference/wix-sender-details-v2/senderdetails/resolveactualfromaddress "anchor")<br>[updateSenderDetails](https://www.wix.com/velo/reference/wix-sender-details-v2/senderdetails/updatesenderdetails "anchor")<br>[verifyEmail](https://www.wix.com/velo/reference/wix-sender-details-v2/senderdetails/verifyemail "anchor") |
| wix-email-marketing.v2 | AccountDetails | [getAccountDetails](/wix-email-marketing-v2/accountdetails)
| wix-email-marketing.v2 | Campaigns | [deleteCampaign](/wix-email-marketing-v2/campaigns/deletecampaign)<br>[getCampaign](/wix-email-marketing-v2/campaigns/getcampaign)<br>[listCampaigns](/wix-email-marketing-v2/campaigns/listcampaigns)<br>[listRecipients](/wix-email-marketing-v2/campaigns/listrecipients)<br>[listStatistics](/wix-email-marketing-v2/campaigns/liststatistics)<br>[pauseScheduling](/wix-email-marketing-v2/campaigns/pausescheduling)<br>[publishCampaign](/wix-email-marketing-v2/campaigns/publishcampaign)<br>[reuseCampaign](/wix-email-marketing-v2/campaigns/reusecampaign)<br>[sendTest](/wix-email-marketing-v2/campaigns/sendtest)|
<!-- END TABLE -->

