# Migrate from wix-chat-backend to the Inbox SDK

The [Wix Chat Backend](https://dev.wix.com/docs/velo/apis/wix-chat-backend/introduction) module is deprecated.

Use this guide to migrate your chat functionality from the deprecated [wix-chat-backend](https://dev.wix.com/docs/velo/apis/wix-chat-backend/introduction) module to the [Inbox SDK](https://dev.wix.com/docs/velo/apis/wix-inbox-v2/introduction) module and [Velo Inbox Events](https://dev.wix.com/docs/velo/events-service-plugins/inbox/events/on-message-sent-to-business).

The wix-chat-backend module is a simpler, chat-focused API that sends text messages via chat widget interactions. The Inbox SDK module is a more comprehensive inbox messaging platform that handles structured conversations across multiple communication channels as well as basic chat widget interactions. 

<blockquote class="important">

__Important:__
The Inbox SDK event handlers don't work for site development or for app creation with Blocks.
Replace the deprecated backend event handlers with Velo Inbox Events located in the [Events & Service Plugins](https://dev.wix.com/docs/velo/events-service-plugins/about-events-service-plugins-and-the-sdk) section of the Velo API reference.

</blockquote>


## Migration steps

To migrate your code, follow these steps: 

1. Follow the [installation instructions](http://dev.wix.com/docs/sdk/backend-modules/inbox/messages/setup) to install the `@wix/inbox` SDK package for your development environment. 

2. Update import statements.

    **wix-chat-backend**
    ```js
    import wixChatBackend from "wix-chat-backend";
    ```

    **Inbox SDK**
    ```js
    import { messages } from "@wix/inbox";
    ```

3. Migrate send message functionality.

    **wix-chat-backend**
    ```js
    export function sendChatMessage(
			messageText, 
      channelId, 
      metadata, 
      sendAsVisitor
    ){ 
    	wixChatBackend.sendMessage({
      	"messageText": messageText,
      	"channelId": channelId,
      	"metadata": { metadata },
      	"sendAsVisitor": sendAsVisitor
    	})
    	.then(() => {
      	console.log("Chat message sent")
    	})
    }
    ```

    **Inbox SDK**
    ```js
    export async function sendChatMessage(conversationId, messageText) {
      try {
        const message = {
          content: {
            previewText: messageText,
            basic: {
            items: 
							[
              	{ text: messageText }
							]
            }
          },
          visibility: 'BUSINESS_AND_PARTICIPANT',
					direction: 'BUSINESS_TO_PARTICIPANT',
		      sourceChannel: 'CHAT',
          targetChannels: ['CHAT']
        };
            
        const result = await messages.sendMessage(conversationId, message);
        console.log("Inbox message sent:", result.message._id);
        return result;
      } 
      catch (error) {
        console.error("Failed to send message:", error);
        throw error;
      }
    } 
    ```

	>**Note:**
	> Note the following differences in the code examples above: 
	> - The `channelId` field becomes `conversationId`.
	> - Message content requires message type specification, `direction`, and `visibility`. 
	> - Basic text objects become structured message types (`basic`, `template`, `minimal`, `form`).
	> - A Promise is now returned with a detailed message object. 

4. Migrate event handlers. 

    **wix-chat-backend**
    ```javascript
    // events.js
    export function wixChat_onMessage(event) {
      const message = event.payload.text;
      const participant = event.participantId;
      const channelId = event.channelId;
      const direction = event.direction;    

      console.log(`Message received: ${message} from ${participant}`);
    }
    ```

    **Velo Inbox Events**
    ```javascript
    // events.js
    export function wixCrmInbox_onMessageSentToBusiness(event) {
      const messageId = event.data.message._id;
      const conversationId = event.data.conversationId;
      const messageText = event.data.message.content.previewText;
      const senderId = event.data.message.sender.contactId;
    
      console.log(`Business received message: ${messageText} from ${senderId}`);
    }

    export function wixCrmInbox_onMessageSentToParticipant(event) {
      const messageId = event.data.message._id;
      const conversationId = event.data.conversationId;
      const messageText = event.data.message.content.previewText;
    
      console.log(`Participant received message: ${messageText}`);
    }
    ```
	> **Note:**
	> Note that a single `onMessage()` event handler becomes 2 directional events: `onMessageSentToBusiness()` and `onMessageSentToParticipant()`. 


### Event data structure mapping

| wix-chat-backend      | inbox events   													 | Description   							|
| --------------------- | ---------------------------------------- | -------------------------- |
| `event.payload.text`  | `event.data.message.content.previewText` | Message text content 			|
| `event.participantId` | `event.data.message.sender.contactId`		 | Sender identifier 					|
| `event.channelId` 		| `event.data.conversationId` 						 | Conversation identifier 		|
| `event.direction` 		| `event.data.message.direction` 					 | Message direction 					|
| `event.createdAt` 		| `event.data.message._createdDate` 			 | Message creation timestamp |

