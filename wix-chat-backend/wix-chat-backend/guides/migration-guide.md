# Migrate from wix-chat-backend to wix-inbox-v2

Use this task to migrate your chat functionality from the deprecated [Wix Chat Backend](https://dev.wix.com/docs/velo/apis/wix-chat-backend/introduction) to [Wix Inbox v2](https://dev.wix.com/docs/velo/apis/wix-inbox-v2/introduction) and [Inbox Events](https://dev.wix.com/docs/velo/events-service-plugins/inbox/events/on-message-sent-to-business).

## Key differences

`wix-chat-backend` is a simpler, chat-focused API that sends a text message via chat widget interactions, while `wix-inbox.v2` is a more comprehensive inbox messaging platform that handles structured conversations across multiple communication channels as well as basic chat widget interactions. 

In addition to the import statments, the key differences include: 
- **Parameters:** `channelId` becomes `conversationId`, and message content requires message type specification, `direction`, and `visibility`. 
- **Message structure:** Basic text objects become structured message types (`basic`, `template`, `minimal`, `form`).
- **Return value:** A Promise is now returned with a detailed message object. 
- **Events:** A single `onMessage()` event handler becomes 2 directional events: `onMessageSentToBusiness()` and `onMessageSentToParticipant()`. 


## Migration steps

To migrate your code, follow these steps: 
1. Update import statements.

    **wix-chat-backend**
    ```js
    import wixChatBackend from 'wix-chat-backend';
    ```

    **wix-inbox.v2**
    ```js
    import { messages } from 'wix-inbox.v2';
    ```

2. Migrate send message functionality.

    **wix-chat-backend**
    ```js
    export function sendChatMessage(
        messageText, 
        channelId, 
        metadata, 
        sendAsVisitor
    ) { 
        wixChatBackend.sendMessage({
            "messageText": messageText,
            "channelId": channelId,
            "metadata": { metadata },
            "sendAsVisitor": sendAsVisitor
        })
        .then(() => {
            console.log("Chat message sent");
        })
    }
    ```

    **wix-inbox.v2**
    ```js
    export async function sendChatMessage(conversationId, messageText) {
        try {
            const message = {
                content: {
                    previewText: messageText,
                    basic: {
                        items: [
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
        } catch (error) {
            console.error("Failed to send message:", error);
            throw error;
        }
    } 
    ```

3. Migrate event handlers.

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

    **Inbox Events**
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

### Event data structure mapping

| wix-chat-backend | wix-inbox.v2 | Description |
|------------------|--------------|-------------|
| `event.payload.text` | `event.data.message.content.previewText` | Message text content |
| `event.participantId` | `event.data.message.sender.contactId` | Sender identifier |
| `event.channelId` | `event.data.conversationId` | Conversation identifier |
| `event.direction` | `event.data.message.direction` | Message direction |
| `event.createdAt` | `event.data.message._createdDate` | Message creation timestamp |

