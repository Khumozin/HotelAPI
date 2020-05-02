import { MessageController } from '../controllers/message-controller';

export class MessageRoutes {

    public messageController: MessageController = new MessageController();

    public routes(app): void {

        // Create a new message
        app.route('/message')
            .post(this.messageController.addNewMessage);

        // Get all message
        app.route('/message')
            .get(this.messageController.getMessages)

        // get, update, delete a specific message
        app.route('/message/:messageId')
            .get(this.messageController.getMessageWithID)
            // update a specific message
            .put(this.messageController.updateMessage)
            // delete a specific message
            .delete(this.messageController.deleteMessage)
    }
}