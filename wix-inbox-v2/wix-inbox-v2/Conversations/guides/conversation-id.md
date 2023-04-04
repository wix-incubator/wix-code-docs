---
title: Conversation ID
---

# Conversation ID

Conversation participants are assigned IDs based on
whether they've provided contact information
or registered as a site member.
The typical lifecycle is **anonymous visitor** > **contact** > **site member**,
although it's possible to skip a step
or to become a contact and site member at the same time.

| Type              | ID property          | Details                                                                                                                                                                                                                                                                                                                                                 |
| ----------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Anonymous visitor | `anonymousVisitorId` | When the participant first opens the site, they're an anonymous visitor.                                                                                                                                                                                                                                                                                |
| Contact           | `contactId`          | <ul><li>An anonymous visitor converts to a contact when they provide some contact information, such as a name, phone number, or email address. This most often happens when they submit a contact form, purchase something, or become a site member.</li> <li>When a visitor converts to a contact, they’re added to the site’s contact list.</li></ul> |
| Member            | `memberId`           | <ul><li>An anonymous visitor or contact becomes a member when they're registered as a site member.</li> <li>Members are always linked to a contact, so they have both a member ID and a contact ID.</li></ul>                                                                                                                                           |

Behind the scenes, when a participant changes type,
a new conversation is created and the previous conversation is merged into the new one.
Before sending a message, you can ensure you're using the most current conversation ID
by calling
[`getOrCreateConversation()`](getorcreateconversation)
with the participant's visitor, contact, or member ID.

The sections below tell you how you can get the relevant ID
to use the Inbox API.

## Anonymous visitor ID

Anonymous visitor IDs are not available through the Inbox API.

<!-- Anonymous visitor IDs are available to you
only after the visitor sends a message to the business using the
[Message Sent To Business Webhook][message-sent-to-business-webhook].
The ID is available at `actionEvent.body.message.sender.anonymousVisitorId`. -->

## Contact ID

When a visitor provides contact details to the site,
they're converted to a contact.
Once this happens,
the ID used to access the visitor's conversations changes to the contact ID.

<!-- - Like the anonymous visitor,
  the contact ID is available when the contact sends a message to the business
  using the [Message Sent To Business Webhook][message-sent-to-business-webhook].
  The ID is available at `actionEvent.body.message.sender.contactId`. -->

You can use [Query Contacts][query-contacts]
in the Contacts API to retrieve the contact.

## Member ID

If the visitor is a [site member][kb-members-area],
the conversation must be accessed using the member ID:

<!-- - Like the anonymous visitor and contact,
  the member ID is available when the contact sends a message to the business
  using the [Message Sent To Business Webhook][message-sent-to-business-webhook].
  The ID is available at `actionEvent.body.message.sender.memberId`. -->

You can query the [`PrivateMembersData`][query-members] collection
to retrieve the member.

[kb-members-area]: https://support.wix.com/en/article/about-the-members-area
[inbox-deeplink]: https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Finbox
[send-message-endpoint]: https://dev.wix.com/api/rest/drafts/inbox/send-message
[list-messages-endpoint]: https://dev.wix.com/api/rest/drafts/inbox/list-messages
[message-sent-to-business-webhook]: https://dev.wix.com/api/rest/all-apis/inbox/message-sent-to-business-webhook
[query-contacts]: ../../wix-crm-backend/contacts/querycontacts
[query-members]: ../../wix-members-backend/%22privatemembersdata%22-collection-fields