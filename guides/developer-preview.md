


# Developer Preview


Velo is always in active development. We are constantly adding new APIs. We want to make sure that we're on the right track and building the right things. To do that, we need your help. For this reason, we release some of the APIs we're still working on in Developer Preview mode for user testing. This is a way for us to get feedback from you before we fully release them.

APIs in Developer Preview mode include this warning in the introduction to their API reference:

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

They also include this tag in the reference for each function:  
![developer preview tag](https://user-images.githubusercontent.com/89579857/213133550-2b4fa3e8-e8fc-4513-a733-00abcc70925c.png)

Once these tags are removed, the API is fully released.

Here are some important things you need to know about Developer Preview:

### Breaking changes 



APIs in Developer Preview are still under production. This means that we **may change them at any time**. Notifications about breaking changes appear in the [release notes](/release-notes) and in the API reference for the affected functions and properties. We will not contact you directly about breaking changes. 


Because we may introduce breaking changes to these APIs, we don't recommend using them on live sites. They are for testing and feedback purposes only.

### Time limit 
APIs only stay in Developer Preview mode for 6 months. After that, they are fully released, and we don't make any breaking changes to them. You can see which APIs are in developer preview in the [table](#current-developer-preview-apis) below. You can also check the reference for the API to see if the developer preview tags have been removed.
### Feedback 
We want your feedback on the APIs in Developer Preview. Let us know about:

* What you're using the API for.
* Anything blocking you from using the API.
* Additions and features would you find useful.

Please [send us an email](mailto:velo-preview-feedback@wix.com) with your feedback.

### Bugs 
If you discover a bug in a Developer Preview API, please [send us an email](mailto:velo-preview-feedback@wix.com) and let us know.  We will fix the bug as soon as possible.

### Current Developer Preview APIs 

This is a list of the APIs that are currently in Developer Preview mode.

| Module | Submodule | Function |
|---|---|---|
| wix-bookings.v2 | Resources | [deleteResource](/wix-bookings-v2/resources/deleteresource) |
| - | - | [updateSchedule](https://www.wix.com/velo/reference/wix-bookings-v2/resources/updateschedule ) |
| - | - | [updateResource](https://www.wix.com/velo/reference/wix-bookings-v2/resources/updateresource ) |
| - | - | [createResource](https://www.wix.com/velo/reference/wix-bookings-v2/resources/createresource ) |
| - | - | [queryResources](https://www.wix.com/velo/reference/wix-bookings-v2/resources/queryresources ) |
| - | - | [listResources](https://www.wix.com/velo/reference/wix-bookings-v2/resources/listresources ) |
| wix-bookings.v2 | Bookings | [cancelBookings](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/cancelbookings ) |
| - | - | [confirmBookings](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/confirmbookings ) |
| - | - | [declineBooking](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/declinebooking ) |
| - | - | [rescheduleBooking](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/reschedulebooking ) |
| - | - | [updateNumberOfParticipants](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/updatenumberofparticipants ) |
| wix-bookings.v2 | AvailabilityCalendar | [queryAvailability](https://www.wix.com/velo/reference/wix-bookings-v2/availabilitycalendar/queryavailability ) |
| wix-inbox.vs | Conversations | [getConversation](https://www.wix.com/velo/reference/wix-inbox-vs/conversations/getconversation ) |
| - | - | [getOrCreateConversation](https://www.wix.com/velo/reference/wix-inbox-vs/conversations/getorcreateconversation ) |
| wix-email-marketing.v2 | AccountDetails | [getAccountDetails](https://www.wix.com/velo/reference/wix-email-marketing-v2/accountdetails/getaccountdetails ) |
| wix-email-marketing.v2 | Campaigns | [reuseCampaign](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/reusecampaign ) |
| - | - | [deleteCampaign](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/deletecampaign ) |
| - | - | [pauseScheduling](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/pausescheduling ) |
| - | - | [sendTest](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/sendtest ) |
| - | - | [publishCampaign](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/publishcampaign ) |
| - | - | [listCampaigns](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/listcampaigns ) |
| - | - | [getCampaign](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/getcampaign ) |
| - | - | [listRecipients](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/listrecipients ) |
| - | - | [listStatistics](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaigns/liststatistics ) |
| wix-email-marketing.v2 | CampaignStatistics | [listRecipients](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaignstatistics/listrecipients ) |
| - | - | [listStatistics](https://www.wix.com/velo/reference/wix-email-marketing-v2/campaignstatistics/liststatistics ) |
| wix-email-marketing.v2 | SenderDetails | [resolveActualFromAddress](https://www.wix.com/velo/reference/wix-email-marketing-v2/senderdetails/resolveactualfromaddress ) |
| - | - | [verifyEmail](https://www.wix.com/velo/reference/wix-email-marketing-v2/senderdetails/verifyemail ) |
| - | - | [updateSenderDetails](https://www.wix.com/velo/reference/wix-email-marketing-v2/senderdetails/updatesenderdetails ) |
| - | - | [getSenderDetails](https://www.wix.com/velo/reference/wix-email-marketing-v2/senderdetails/getsenderdetails ) |
| wix-events.v2 | TicketingOrders | [getSummary](https://www.wix.com/velo/reference/wix-events-v2/ticketingorders/getsummary ) |
| - | - | [confirmOrder](https://www.wix.com/velo/reference/wix-events-v2/ticketingorders/confirmorder ) |
| - | - | [bulkUpdateOrders](https://www.wix.com/velo/reference/wix-events-v2/ticketingorders/bulkupdateorders ) |
| - | - | [updateOrder](https://www.wix.com/velo/reference/wix-events-v2/ticketingorders/updateorder ) |
| - | - | [getOrder](https://www.wix.com/velo/reference/wix-events-v2/ticketingorders/getorder ) |
| - | - | [listOrders](https://www.wix.com/velo/reference/wix-events-v2/ticketingorders/listorders ) |
| wix-events.v2 | TicketingCheckout | [updateCheckout](https://www.wix.com/velo/reference/wix-events-v2/ticketingcheckout/updatecheckout ) |
| - | - | [checkout](https://www.wix.com/velo/reference/wix-events-v2/ticketingcheckout/checkout ) |
| - | - | [getInvoice](https://www.wix.com/velo/reference/wix-events-v2/ticketingcheckout/getinvoice ) |
| - | - | [cancelReservation](https://www.wix.com/velo/reference/wix-events-v2/ticketingcheckout/cancelreservation ) |
| - | - | [createReservation](https://www.wix.com/velo/reference/wix-events-v2/ticketingcheckout/createreservation ) |
| - | - | [queryAvailableTickets](https://www.wix.com/velo/reference/wix-events-v2/ticketingcheckout/queryavailabletickets ) |
| - | - | [listAvailableTickets](https://www.wix.com/velo/reference/wix-events-v2/ticketingcheckout/listavailabletickets ) |
| wix-events.v2 | Policies | [queryPolicies](https://www.wix.com/velo/reference/wix-events-v2/policies/querypolicies ) |
| - | - | [deletePolicy](https://www.wix.com/velo/reference/wix-events-v2/policies/deletepolicy ) |
| - | - | [updatePolicy](https://www.wix.com/velo/reference/wix-events-v2/policies/updatepolicy ) |
| - | - | [cratePolicy](https://www.wix.com/velo/reference/wix-events-v2/policies/cratepolicy ) |
| wix-forum.v2 | Categories | [queryCategories](https://www.wix.com/velo/reference/wix-forum-v2/categories/querycategories ) |
| - | - | [getCategoryBySlug](https://www.wix.com/velo/reference/wix-forum-v2/categories/getcategorybyslug ) |
| - | - | [getCategory](https://www.wix.com/velo/reference/wix-forum-v2/categories/getcategory ) |
| wix-forum.v2 | Posts | [queryPosts](https://www.wix.com/velo/reference/wix-forum-v2/posts/queryposts ) |
| - | - | [getPostBySlug](https://www.wix.com/velo/reference/wix-forum-v2/posts/getpostbyslug ) |
| - | - | [getPost](https://www.wix.com/velo/reference/wix-forum-v2/posts/getpost ) |
| wix-business-tools.v2 | Locations | [archiveLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/archivelocation ) |
| - | - | [setDefaultLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/setdefaultlocation ) |
| - | - | [queryLocations](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/querylocations ) |
| - | - | [updateLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/updatelocation ) |
| - | - | [listLocations](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/listlocations ) |
| - | - | [getlocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/getlocation ) |
| - | - | [createLocation](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/createlocation ) |
| wix-loyalty.v2 | Accounts | [listTransactions](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/listtransactions ) |
| - | - | [getTransaction](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/gettransaction ) |
| - | - | [listAccounts](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/listaccounts ) |
| - | - | [getAccountsBySecondaryId](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/getaccountsbysecondaryid ) |
| - | - | [getProgramTotals](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/getprogramtotals ) |
| - | - | [getAccount](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/getaccount ) |
| - | - | [adjustPoints](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/adjustpoints ) |
| - | - | [earnPoints](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/earnpoints ) |
| - | - | [createAccount](https://www.wix.com/velo/reference/wix-loyalty-v2/accounts/createaccount ) |
| wix-loyalty.v2 | Programs | [activateLoyaltyProgram](https://www.wix.com/velo/reference/wix-loyalty-v2/programs/activateloyaltyprogram ) |
| - | - | [updateLoyaltyProgram](https://www.wix.com/velo/reference/wix-loyalty-v2/programs/updateloyaltyprogram ) |
| - | - | [getLoyaltyProgram](https://www.wix.com/velo/reference/wix-loyalty-v2/programs/getloyaltyprogram ) |
| wix-marketing-tags.v2 | MarketingTags | [deleteMarketingTag](https://www.wix.com/velo/reference/wix-marketing-tags-v2/marketingtags/deletemarketingtag ) |
| - | - | [listMarketingTags](https://www.wix.com/velo/reference/wix-marketing-tags-v2/marketingtags/listmarketingtags ) |
| - | - | [upsertMarketingTag](https://www.wix.com/velo/reference/wix-marketing-tags-v2/marketingtags/upsertmarketingtag ) |
| wix-activity-counters.v2 | ActivityCounters | [getActivityCounters](https://www.wix.com/velo/reference/wix-activity-counters-v2/activitycounters/getactivitycounters ) |
| - | - | [setActivityCounters](https://www.wix.com/velo/reference/wix-activity-counters-v2/activitycounters/setactivitycounters ) |
| - | - | [queryActivityCounters](https://www.wix.com/velo/reference/wix-activity-counters-v2/activitycounters/queryactivitycounters ) |
| wix-stores.v2 | SubscriptionOptions | [allowOneTimePurchases](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/allowonetimepurchases ) |
| - | - | [assignSubscriptionOptionsToProduct](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/assignsubscriptionoptionstoproduct ) |
| - | - | [bulkDeleteSubcriptionOptions](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/bulkdeletesubcriptionoptions ) |
| - | - | [bulkUpdateSubscriptionOptions](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/bulkupdatesubscriptionoptions ) |
| - | - | [bulkCreateSubcriptionOptions](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/bulkcreatesubcriptionoptions ) |
| - | - | [deleteSubscriptionOptions](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/deletesubscriptionoptions ) |
| - | - | [updateSubscriptionOptions](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/updatesubscriptionoptions ) |
| - | - | [createSubscriptionOptions](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/createsubscriptionoptions ) |
| - | - | [getSubscriptionOption](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/getsubscriptionoption ) |
| - | - | [getSubscriptionOptionsForProduct](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/getsubscriptionoptionsforproduct ) |
| - | - | [listSubcriptionOptions](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/listsubcriptionoptions ) |
| - | - | [getProductIdsForSubscriptionOption](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/getproductidsforsubscriptionoption ) |
| - | - | [getOneTimePurchaseStatus](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/getonetimepurchasestatus ) |
| wix-inbox.v2 | Message | [listMessages](https://www.wix.com/velo/reference/wix-inbox-v2/message/listmessages ) |
| - | - | [sendMessage](https://www.wix.com/velo/reference/wix-inbox-v2/message/sendmessage ) |




 