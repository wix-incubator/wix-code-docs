


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
APIs only stay in Developer Preview mode for a maximum of 6 months. After that they are fully released, and we don't make any breaking changes to them. You can check the API documentation in the reference to see if the developer preview tags have been removed.

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

| Module | Submodule | Function |
|---|---|---|
| wix-bookings.v2 | Resources | [deleteResource](https://www.wix.com/velo/reference/wix-bookings-v2/resources/deleteresource "anchor")<br>[updateSchedule](https://www.wix.com/velo/reference/wix-bookings-v2/resources/updateschedule "anchor")<br>[updateResource](https://www.wix.com/velo/reference/wix-bookings-v2/resources/updateresource "anchor")<br>[createResource](https://www.wix.com/velo/reference/wix-bookings-v2/resources/createresource "anchor")<br>[queryResources](https://www.wix.com/velo/reference/wix-bookings-v2/resources/queryresources "anchor")<br>[listResources](https://www.wix.com/velo/reference/wix-bookings-v2/resources/listresources "anchor") |
| wix-bookings.v2 | Bookings | [cancelBookings](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/cancelbookings "anchor")<br>[confirmBookings](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/confirmbookings "anchor")<br>[declineBooking](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/declinebooking "anchor")<br>[rescheduleBooking](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/reschedulebooking "anchor")<br>[updateNumberOfParticipants](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/updatenumberofparticipants "anchor") |
| wix-bookings.v2 | AvailabilityCalendar | [queryAvailability](https://www.wix.com/velo/reference/wix-bookings-v2/availabilitycalendar/queryavailability "anchor") |
| wix-inbox.vs | Conversations | [getConversation](https://www.wix.com/velo/reference/wix-inbox-vs/conversations/getconversation "anchor")<br>[getOrCreateConversation](https://www.wix.com/velo/reference/wix-inbox-vs/conversations/getorcreateconversation "anchor") |
| wix-email-marketing.v2 | AccountDetails | [getAccountDetails](https://www.wix.com/velo/reference/wix-email-marketing-v2/accountdetails/getaccountdetails "anchor") |
| wix-email-marketing.v2 | Campaigns | [reuseCampaign](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/reusecampaign "anchor")<br>[deleteCampaign](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/deletecampaign "anchor")<br>[pauseScheduling](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/pausescheduling "anchor")<br>[sendTest](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/sendtest "anchor")<br>[publishCampaign](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/publishcampaign "anchor")<br>[listCampaigns](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/listcampaigns "anchor")<br>[getCampaign](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/getcampaign "anchor")<br>[listRecipients](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/listrecipients "anchor")<br>[listStatistics](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/liststatistics "anchor") |
| wix-email-marketing.v2 | CampaignStatistics | [listRecipients](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaignstatistics/listrecipients "anchor")<br>[listStatistics](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaignstatistics/liststatistics "anchor") |
| wix-email-marketing.v2 | SenderDetails | [resolveActualFromAddress](https://www.wix.com/velo/reference/wix-email-marketing-v2/senderdetails/resolveactualfromaddress "anchor")<br>[verifyEmail](https://www.wix.com/velo/reference/wix-email-marketing-v2/senderdetails/verifyemail "anchor")<br>[updateSenderDetails](https://www.wix.com/velo/reference/wix-email-marketing-v2/senderdetails/updatesenderdetails "anchor")<br>[getSenderDetails](https://www.wix.com/velo/reference/wix-email-marketing-v2/senderdetails/getsenderdetails "anchor") |
| wix-events.v2 | TicketingOrders | [getSummary](https://www.wix.com/velo/reference/wix-events-v2/ticketingorders/getsummary "anchor")<br>[confirmOrder](https://www.wix.com/velo/reference/wix-events-v2/ticketingorders/confirmorder "anchor")<br>[bulkUpdateOrders](https://www.wix.com/velo/reference/wix-events-v2/ticketingorders/bulkupdateorders "anchor")<br>[updateOrder](https://www.wix.com/velo/reference/wix-events-v2/ticketingorders/updateorder "anchor")<br>[getOrder](https://www.wix.com/velo/reference/wix-events-v2/ticketingorders/getorder "anchor")<br>[listOrders](https://www.wix.com/velo/reference/wix-events-v2/ticketingorders/listorders "anchor") |
| wix-events.v2 | TicketingCheckout | [updateCheckout](https://www.wix.com/velo/reference/wix-events-v2/ticketingcheckout/updatecheckout "anchor")<br>[checkout](https://www.wix.com/velo/reference/wix-events-v2/ticketingcheckout/checkout "anchor")<br>[getInvoice](https://www.wix.com/velo/reference/wix-events-v2/ticketingcheckout/getinvoice "anchor")<br>[cancelReservation](https://www.wix.com/velo/reference/wix-events-v2/ticketingcheckout/cancelreservation "anchor")<br>[createReservation](https://www.wix.com/velo/reference/wix-events-v2/ticketingcheckout/createreservation "anchor")<br>[queryAvailableTickets](https://www.wix.com/velo/reference/wix-events-v2/ticketingcheckout/queryavailabletickets "anchor")<br>[listAvailableTickets](https://www.wix.com/velo/reference/wix-events-v2/ticketingcheckout/listavailabletickets "anchor") |
| wix-events.v2 | Policies | [queryPolicies](https://www.wix.com/velo/reference/wix-events-v2/policies/querypolicies "anchor")<br>[deletePolicy](https://www.wix.com/velo/reference/wix-events-v2/policies/deletepolicy "anchor")<br>[updatePolicy](https://www.wix.com/velo/reference/wix-events-v2/policies/updatepolicy "anchor")<br>[cratePolicy](https://www.wix.com/velo/reference/wix-events-v2/policies/cratepolicy "anchor") |
| wix-forum.v2 | Categories | [queryCategories](https://www.wix.com/velo/reference/wix-forum-v2/categories/querycategories "anchor")<br>[getCategoryBySlug](https://www.wix.com/velo/reference/wix-forum-v2/categories/getcategorybyslug "anchor")<br>[getCategory](https://www.wix.com/velo/reference/wix-forum-v2/categories/getcategory "anchor") |
| wix-forum.v2 | Posts | [queryPosts](https://www.wix.com/velo/reference/wix-forum-v2/posts/queryposts "anchor")<br>[getPostBySlug](https://www.wix.com/velo/reference/wix-forum-v2/posts/getpostbyslug "anchor")<br>[getPost](https://www.wix.com/velo/reference/wix-forum-v2/posts/getpost "anchor") |
| wix-business-tools.v2 | Locations | [archiveLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/archivelocation "anchor")<br>[setDefaultLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/setdefaultlocation "anchor")<br>[queryLocations](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/querylocations "anchor")<br>[updateLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/updatelocation "anchor")<br>[listLocations](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/listlocations "anchor")<br>[getlocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/getlocation "anchor")<br>[createLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/createlocation "anchor") |
| wix-loyalty.v2 | Accounts | [listTransactions](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/listtransactions "anchor")<br>[getTransaction](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/gettransaction "anchor")<br>[listAccounts](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/listaccounts "anchor")<br>[getAccountsBySecondaryId](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/getaccountsbysecondaryid "anchor")<br>[getProgramTotals](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/getprogramtotals "anchor")<br>[getAccount](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/getaccount "anchor")<br>[adjustPoints](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/adjustpoints "anchor")<br>[earnPoints](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/earnpoints "anchor")<br>[createAccount](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/createaccount "anchor") |
| wix-loyalty.v2 | Programs | [activateLoyaltyProgram](https://www.wix.com/velo/reference/wix-loyalty-v2/programs/activateloyaltyprogram "anchor")<br>[updateLoyaltyProgram](https://www.wix.com/velo/reference/wix-loyalty-v2/programs/updateloyaltyprogram "anchor")<br>[getLoyaltyProgram](https://www.wix.com/velo/reference/wix-loyalty-v2/programs/getloyaltyprogram "anchor") |
| wix-marketing-tags.v2 | MarketingTags | [deleteMarketingTag](https://www.wix.com/velo/reference/wix-marketing-tags-v2/marketingtags/deletemarketingtag "anchor")<br>[listMarketingTags](https://www.wix.com/velo/reference/wix-marketing-tags-v2/marketingtags/listmarketingtags "anchor")<br>[upsertMarketingTag](https://www.wix.com/velo/reference/wix-marketing-tags-v2/marketingtags/upsertmarketingtag "anchor") |
| wix-activity-counters.v2 | ActivityCounters | [getActivityCounters](https://www.wix.com/velo/reference/wix-activity-counters-v2/activitycounters/getactivitycounters "anchor")<br>[setActivityCounters](https://www.wix.com/velo/reference/wix-activity-counters-v2/activitycounters/setactivitycounters "anchor")<br>[queryActivityCounters](https://www.wix.com/velo/reference/wix-activity-counters-v2/activitycounters/queryactivitycounters "anchor") |
| wix-stores.v2 | SubscriptionOptions | [allowOneTimePurchases](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/allowonetimepurchases "anchor")<br>[assignSubscriptionOptionsToProduct](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/assignsubscriptionoptionstoproduct "anchor")<br>[bulkDeleteSubcriptionOptions](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/bulkdeletesubcriptionoptions "anchor")<br>[bulkUpdateSubscriptionOptions](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/bulkupdatesubscriptionoptions "anchor")<br>[bulkCreateSubcriptionOptions](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/bulkcreatesubcriptionoptions "anchor")<br>[deleteSubscriptionOptions](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/deletesubscriptionoptions "anchor")<br>[updateSubscriptionOptions](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/updatesubscriptionoptions "anchor")<br>[createSubscriptionOptions](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/createsubscriptionoptions "anchor")<br>[getSubscriptionOption](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/getsubscriptionoption "anchor")<br>[getSubscriptionOptionsForProduct](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/getsubscriptionoptionsforproduct "anchor")<br>[listSubcriptionOptions](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/listsubcriptionoptions "anchor")<br>[getProductIdsForSubscriptionOption](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/getproductidsforsubscriptionoption "anchor")<br>[getOneTimePurchaseStatus](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/getonetimepurchasestatus "anchor") |
| wix-inbox.v2 | Message | [listMessages](https://www.wix.com/velo/reference/wix-inbox-v2/message/listmessages "anchor")<br>[sendMessage](https://www.wix.com/velo/reference/wix-inbox-v2/message/sendmessage "anchor") |


| Module | Submodule | Function |
|---|---|---|
| wix-bookings.v2 | Resources | [deleteResource](/wix-bookings-v2/resources/deleteresource) |
| wix-bookings.v2 | Resources | [updateSchedule](/wix-bookings-v2/resources/updateschedule) |
| wix-bookings.v2 | Resources | [updateResource](/wix-bookings-v2/resources/updateresource) |
| wix-bookings.v2 | Resources | [createResource](/wix-bookings-v2/resources/createresource) |
| wix-bookings.v2 | Resources | [queryResources](/wix-bookings-v2/resources/queryresources) |
| wix-bookings.v2 | Resources | [listResources](/wix-bookings-v2/resources/listresources) |
| wix-bookings.v2 | Bookings | [cancelBookings](/wix-bookings-v2/bookings/cancelbookings) |
| wix-bookings.v2 | Bookings | [confirmBookings](/wix-bookings-v2/bookings/confirmbookings) |
| wix-bookings.v2 | Bookings | [declineBooking](/wix-bookings-v2/bookings/declinebooking) |
| wix-bookings.v2 | Bookings | [rescheduleBooking](/wix-bookings-v2/bookings/reschedulebooking) |
| wix-bookings.v2 | Bookings | [updateNumberOfParticipants](/wix-bookings-v2/bookings/updatenumberofparticipants) |
| wix-bookings.v2 | AvailabilityCalendar | [queryAvailability](/wix-bookings-v2/availabilitycalendar/queryavailability) |
| wix-inbox.vs | Conversations | [getConversation](/wix-inbox-vs/conversations/getconversation) |
| wix-inbox.vs | Conversations | [getOrCreateConversation](/wix-inbox-vs/conversations/getorcreateconversation) |
| wix-email-marketing.v2 | AccountDetails | [getAccountDetails](/wix-email-marketing-v2/accountdetails/getaccountdetails) |
| wix-email-marketing.v2 | Campaigns | [reuseCampaign](/wix-email-marketing-v2/campaigns/reusecampaign) |
| wix-email-marketing.v2 | Campaigns | [deleteCampaign](/wix-email-marketing-v2/campaigns/deletecampaign) |
| wix-email-marketing.v2 | Campaigns | [pauseScheduling](/wix-email-marketing-v2/campaigns/pausescheduling) |
| wix-email-marketing.v2 | Campaigns | [sendTest](/wix-email-marketing-v2/campaigns/sendtest) |
| wix-email-marketing.v2 | Campaigns | [publishCampaign](/wix-email-marketing-v2/campaigns/publishcampaign) |
| wix-email-marketing.v2 | Campaigns | [listCampaigns](/wix-email-marketing-v2/campaigns/listcampaigns) |
| wix-email-marketing.v2 | Campaigns | [getCampaign](/wix-email-marketing-v2/campaigns/getcampaign) |
| wix-email-marketing.v2 | Campaigns | [listRecipients](/wix-email-marketing-v2/campaigns/listrecipients) |
| wix-email-marketing.v2 | Campaigns | [listStatistics](/wix-email-marketing-v2/campaigns/liststatistics) |
| wix-email-marketing.v2 | CampaignStatistics | [listRecipients](/wix-email-marketing-v2/campaignstatistics/listrecipients) |
| wix-email-marketing.v2 | CampaignStatistics | [listStatistics](/wix-email-marketing-v2/campaignstatistics/liststatistics) |
| wix-email-marketing.v2 | SenderDetails | [resolveActualFromAddress](/wix-email-marketing-v2/senderdetails/resolveactualfromaddress) |
| wix-email-marketing.v2 | SenderDetails | [verifyEmail](/wix-email-marketing-v2/senderdetails/verifyemail) |
| wix-email-marketing.v2 | SenderDetails | [updateSenderDetails](/wix-email-marketing-v2/senderdetails/updatesenderdetails) |
| wix-email-marketing.v2 | SenderDetails | [getSenderDetails](/wix-email-marketing-v2/senderdetails/getsenderdetails) |
| wix-events.v2 | TicketingOrders | [getSummary](/wix-events-v2/ticketingorders/getsummary) |
| wix-events.v2 | TicketingOrders | [confirmOrder](/wix-events-v2/ticketingorders/confirmorder) |
| wix-events.v2 | TicketingOrders | [bulkUpdateOrders](/wix-events-v2/ticketingorders/bulkupdateorders) |
| wix-events.v2 | TicketingOrders | [updateOrder](/wix-events-v2/ticketingorders/updateorder) |
| wix-events.v2 | TicketingOrders | [getOrder](/wix-events-v2/ticketingorders/getorder) |
| wix-events.v2 | TicketingOrders | [listOrders](/wix-events-v2/ticketingorders/listorders) |
| wix-events.v2 | TicketingCheckout | [updateCheckout](/wix-events-v2/ticketingcheckout/updatecheckout) |
| wix-events.v2 | TicketingCheckout | [checkout](/wix-events-v2/ticketingcheckout/checkout) |
| wix-events.v2 | TicketingCheckout | [getInvoice](/wix-events-v2/ticketingcheckout/getinvoice) |
| wix-events.v2 | TicketingCheckout | [cancelReservation](/wix-events-v2/ticketingcheckout/cancelreservation) |
| wix-events.v2 | TicketingCheckout | [createReservation](/wix-events-v2/ticketingcheckout/createreservation) |
| wix-events.v2 | TicketingCheckout | [queryAvailableTickets](/wix-events-v2/ticketingcheckout/queryavailabletickets) |
| wix-events.v2 | TicketingCheckout | [listAvailableTickets](/wix-events-v2/ticketingcheckout/listavailabletickets) |
| wix-events.v2 | Policies | [queryPolicies](/wix-events-v2/policies/querypolicies) |
| wix-events.v2 | Policies | [deletePolicy](/wix-events-v2/policies/deletepolicy) |
| wix-events.v2 | Policies | [updatePolicy](/wix-events-v2/policies/updatepolicy) |
| wix-events.v2 | Policies | [cratePolicy](/wix-events-v2/policies/cratepolicy) |
| wix-forum.v2 | Categories | [queryCategories](/wix-forum-v2/categories/querycategories) |
| wix-forum.v2 | Categories | [getCategoryBySlug](/wix-forum-v2/categories/getcategorybyslug) |
| wix-forum.v2 | Categories | [getCategory](/wix-forum-v2/categories/getcategory) |
| wix-forum.v2 | Posts | [queryPosts](/wix-forum-v2/posts/queryposts) |
| wix-forum.v2 | Posts | [getPostBySlug](/wix-forum-v2/posts/getpostbyslug) |
| wix-forum.v2 | Posts | [getPost](/wix-forum-v2/posts/getpost) |
| wix-business-tools.v2 | Locations | [archiveLocation](/wix-business-tools-v2/locations/archivelocation) |
| wix-business-tools.v2 | Locations | [setDefaultLocation](/wix-business-tools-v2/locations/setdefaultlocation) |
| wix-business-tools.v2 | Locations | [queryLocations](/wix-business-tools-v2/locations/querylocations) |
| wix-business-tools.v2 | Locations | [updateLocation](/wix-business-tools-v2/locations/updatelocation) |
| wix-business-tools.v2 | Locations | [listLocations](/wix-business-tools-v2/locations/listlocations) |
| wix-business-tools.v2 | Locations | [getlocation](/wix-business-tools-v2/locations/getlocation) |
| wix-business-tools.v2 | Locations | [createLocation](/wix-business-tools-v2/locations/createlocation) |
| wix-loyalty.v2 | Accounts | [listTransactions](/wix-loyalty-v2/accounts/listtransactions) |
| wix-loyalty.v2 | Accounts | [getTransaction](/wix-loyalty-v2/accounts/gettransaction) |
| wix-loyalty.v2 | Accounts | [listAccounts](/wix-loyalty-v2/accounts/listaccounts) |
| wix-loyalty.v2 | Accounts | [getAccountsBySecondaryId](/wix-loyalty-v2/accounts/getaccountsbysecondaryid) |
| wix-loyalty.v2 | Accounts | [getProgramTotals](/wix-loyalty-v2/accounts/getprogramtotals) |
| wix-loyalty.v2 | Accounts | [getAccount](/wix-loyalty-v2/accounts/getaccount) |
| wix-loyalty.v2 | Accounts | [adjustPoints](/wix-loyalty-v2/accounts/adjustpoints) |
| wix-loyalty.v2 | Accounts | [earnPoints](/wix-loyalty-v2/accounts/earnpoints) |
| wix-loyalty.v2 | Accounts | [createAccount](/wix-loyalty-v2/accounts/createaccount) |
| wix-loyalty.v2 | Programs | [activateLoyaltyProgram](/wix-loyalty-v2/programs/activateloyaltyprogram) |
| wix-loyalty.v2 | Programs | [updateLoyaltyProgram](/wix-loyalty-v2/programs/updateloyaltyprogram) |
| wix-loyalty.v2 | Programs | [getLoyaltyProgram](/wix-loyalty-v2/programs/getloyaltyprogram) |
| wix-marketing-tags.v2 | MarketingTags | [deleteMarketingTag](/wix-marketing-tags-v2/marketingtags/deletemarketingtag) |
| wix-marketing-tags.v2 | MarketingTags | [listMarketingTags](/wix-marketing-tags-v2/marketingtags/listmarketingtags) |
| wix-marketing-tags.v2 | MarketingTags | [upsertMarketingTag](/wix-marketing-tags-v2/marketingtags/upsertmarketingtag) |
| wix-activity-counters.v2 | ActivityCounters | [getActivityCounters](/wix-activity-counters-v2/activitycounters/getactivitycounters) |
| wix-activity-counters.v2 | ActivityCounters | [setActivityCounters](/wix-activity-counters-v2/activitycounters/setactivitycounters) |
| wix-activity-counters.v2 | ActivityCounters | [queryActivityCounters](/wix-activity-counters-v2/activitycounters/queryactivitycounters) |
| wix-stores.v2 | SubscriptionOptions | [allowOneTimePurchases](/wix-stores-v2/subscriptionoptions/allowonetimepurchases) |
| wix-stores.v2 | SubscriptionOptions | [assignSubscriptionOptionsToProduct](/wix-stores-v2/subscriptionoptions/assignsubscriptionoptionstoproduct) |
| wix-stores.v2 | SubscriptionOptions | [bulkDeleteSubcriptionOptions](/wix-stores-v2/subscriptionoptions/bulkdeletesubcriptionoptions) |
| wix-stores.v2 | SubscriptionOptions | [bulkUpdateSubscriptionOptions](/wix-stores-v2/subscriptionoptions/bulkupdatesubscriptionoptions) |
| wix-stores.v2 | SubscriptionOptions | [bulkCreateSubcriptionOptions](/wix-stores-v2/subscriptionoptions/bulkcreatesubcriptionoptions) |
| wix-stores.v2 | SubscriptionOptions | [deleteSubscriptionOptions](/wix-stores-v2/subscriptionoptions/deletesubscriptionoptions) |
| wix-stores.v2 | SubscriptionOptions | [updateSubscriptionOptions](/wix-stores-v2/subscriptionoptions/updatesubscriptionoptions) |
| wix-stores.v2 | SubscriptionOptions | [createSubscriptionOptions](/wix-stores-v2/subscriptionoptions/createsubscriptionoptions) |
| wix-stores.v2 | SubscriptionOptions | [getSubscriptionOption](/wix-stores-v2/subscriptionoptions/getsubscriptionoption) |
| wix-stores.v2 | SubscriptionOptions | [getSubscriptionOptionsForProduct](/wix-stores-v2/subscriptionoptions/getsubscriptionoptionsforproduct) |
| wix-stores.v2 | SubscriptionOptions | [listSubcriptionOptions](/wix-stores-v2/subscriptionoptions/listsubcriptionoptions) |
| wix-stores.v2 | SubscriptionOptions | [getProductIdsForSubscriptionOption](/wix-stores-v2/subscriptionoptions/getproductidsforsubscriptionoption) |
| wix-stores.v2 | SubscriptionOptions | [getOneTimePurchaseStatus](/wix-stores-v2/subscriptionoptions/getonetimepurchasestatus) |
| wix-inbox.v2 | Message | [listMessages](/wix-inbox-v2/message/listmessages) |
| wix-inbox.v2 | Message | [sendMessage](/wix-inbox-v2/message/sendmessage) |
