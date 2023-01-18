


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

Please <a href="mailto:velo-preview-feedback@wix.com">send us an email</a> with your feedback.

### Bugs 
If you discover a bug in a Developer Preview API, please <a href="mailto:velo-preview-feedback@wix.com">send us an email</a> and let us know.  We will fix the bug as soon as possible.

### Current Developer Preview APIs 

This is a list of the APIs that are currently in Developer Preview mode.

| Module| Submodule | Function |
| --- | --- | -- |
| wix-bookings.v2 | Resources | [deleteResource]()|
| wix-bookings.v2 | Resources | [updateSchedule]()|
| wix-bookings.v2 | Resources | [updateResource]()|
| wix-bookings.v2 | Resources | [createResource]()|
| wix-bookings.v2 | Resources | [queryResources]()|
| wix-bookings.v2 | Resources | [listResources]()|
| wix-bookings.v2 | Bookings | [cancelBookings]()|
| wix-bookings.v2 | Bookings | [confirmBookings]()|
| wix-bookings.v2 | Bookings | [declineBooking]()|
| wix-bookings.v2 | Bookings | [rescheduleBooking]()|
| wix-bookings.v2 | Bookings | [updateNumberOfParticipants]()|
| wix-bookings.v2 | AvailabilityCalendar | [queryAvailability]()|
| wix-inbox.vs | Conversations| [getConversation]()|
| wix-inbox.vs | Conversations| [getOrCreateConversation]()|
| wix-email-marketing.v2 | AccountDetails| [getAccountDetails]() |
| wix-email-marketing.v2 | Campaigns| [reuseCampaign]()|
| wix-email-marketing.v2 | Campaigns| [deleteCampaign]()|
| wix-email-marketing.v2 | Campaigns| [pauseScheduling]()|
| wix-email-marketing.v2 | Campaigns| [sendTest]()|
| wix-email-marketing.v2 | Campaigns| [publishCampaign]()|
| wix-email-marketing.v2 | Campaigns| [listCampaigns]()|
| wix-email-marketing.v2 | Campaigns| [getCampaign]()|
| wix-email-marketing.v2 | Campaigns| [listRecipients]()|
| wix-email-marketing.v2 | Campaigns| [listStatistics]()|
| wix-email-marketing.v2 | CampaignStatistics| [listRecipients]()|
| wix-email-marketing.v2 | CampaignStatistics| [listStatistics]()|
| wix-email-marketing.v2 | SenderDetails| [resolveActualFromAddress]()|
| wix-email-marketing.v2 | SenderDetails| [verifyEmail]()|
| wix-email-marketing.v2 | SenderDetails| [updateSenderDetails]()|
| wix-email-marketing.v2 | SenderDetails| [getSenderDetails]()|
| wix-events.v2 | TicketingOrders| [getSummary]()|
| wix-events.v2 | TicketingOrders| [confirmOrder]()|
| wix-events.v2 | TicketingOrders| [bulkUpdateOrders]()|
| wix-events.v2 | TicketingOrders| [updateOrder]()|
| wix-events.v2 | TicketingOrders| [getOrder]()|
| wix-events.v2 | TicketingOrders| [listOrders]()|
| wix-events.v2 | TicketingCheckout| [updateCheckout]()|
| wix-events.v2 | TicketingCheckout| [checkout]()|
| wix-events.v2 | TicketingCheckout| [getInvoice]()|
| wix-events.v2 | TicketingCheckout| [cancelReservation]()|
| wix-events.v2 | TicketingCheckout| [createReservation]()|
| wix-events.v2 | TicketingCheckout| [queryAvailableTickets]()|
| wix-events.v2 | TicketingCheckout| [listAvailableTickets]()|
| wix-events.v2 | Policies| [queryPolicies]()|
| wix-events.v2 | Policies| [deletePolicy]()|
| wix-events.v2 | Policies| [updatePolicy]()|
| wix-events.v2 | Policies| [cratePolicy]()|
| wix-forum.v2 | Categories| [queryCategories]()|
| wix-forum.v2 | Categories| [getCategoryBySlug]()|
| wix-forum.v2 | Categories| [getCategory]()|
| wix-forum.v2 | Posts| [queryPosts]()|
| wix-forum.v2 | Posts| [getPostBySlug]()|
| wix-forum.v2 | Posts| [getPost]()|
| wix-business-tools.v2 | Locations | [archiveLocation]()|
| wix-business-tools.v2 | Locations | [setDefaultLocation]()|
| wix-business-tools.v2 | Locations | [queryLocations]()|
| wix-business-tools.v2 | Locations | [updateLocation]()|
| wix-business-tools.v2 | Locations | [listLocations]()|
| wix-business-tools.v2 | Locations | [getlocation]()|
| wix-business-tools.v2 | Locations | [createLocation]()|
| wix-loyalty.v2 | Accounts | [listTransactions]() |
| wix-loyalty.v2 | Accounts | [getTransaction]() |
| wix-loyalty.v2 | Accounts | [listAccounts]() |
| wix-loyalty.v2 | Accounts | [getAccountsBySecondaryId]() |
| wix-loyalty.v2 | Accounts | [getProgramTotals]() |
| wix-loyalty.v2 | Accounts | [getAccount]() |
| wix-loyalty.v2 | Accounts | [adjustPoints]() |
| wix-loyalty.v2 | Accounts | [earnPoints]() |
| wix-loyalty.v2 | Accounts | [createAccount]() |
| wix-loyalty.v2 | Programs | [activateLoyaltyProgram]() |
| wix-loyalty.v2 | Programs | [updateLoyaltyProgram]() |
| wix-loyalty.v2 | Programs | [getLoyaltyProgram]() |
| wix-marketing-tags.v2 | MarketingTags | [deleteMarketingTag]()|
| wix-marketing-tags.v2 | MarketingTags | [listMarketingTags]()|
| wix-marketing-tags.v2 | MarketingTags | [upsertMarketingTag]()|
| wix-activity-counters.v2 | ActivityCounters | [getActivityCounters]()|
| wix-activity-counters.v2 | ActivityCounters | [setActivityCounters]()|
| wix-activity-counters.v2 | ActivityCounters | [queryActivityCounters]()|
| wix-stores.v2 | SubscriptionOptions| [allowOneTimePurchases]()|
| wix-stores.v2 | SubscriptionOptions| [assignSubscriptionOptionsToProduct]()|
| wix-stores.v2 | SubscriptionOptions| [bulkDeleteSubcriptionOptions]()|
| wix-stores.v2 | SubscriptionOptions| [bulkUpdateSubscriptionOptions]()|
| wix-stores.v2 | SubscriptionOptions| [bulkCreateSubcriptionOptions]()|
| wix-stores.v2 | SubscriptionOptions| [deleteSubscriptionOptions]()|
| wix-stores.v2 | SubscriptionOptions| [updateSubscriptionOptions]()|
| wix-stores.v2 | SubscriptionOptions| [createSubscriptionOptions]()|
| wix-stores.v2 | SubscriptionOptions| [getSubscriptionOption]()|
| wix-stores.v2 | SubscriptionOptions| [getSubscriptionOptionsForProduct]()|
| wix-stores.v2 | SubscriptionOptions| [listSubcriptionOptions]()|
| wix-stores.v2 | SubscriptionOptions| [getProductIdsForSubscriptionOption]()|
| wix-stores.v2 | SubscriptionOptions| [getOneTimePurchaseStatus]()|
| wix-inbox.v2 | Message| [listMessages]()|
| wix-inbox.v2 | Message| [sendMessage]()|








 