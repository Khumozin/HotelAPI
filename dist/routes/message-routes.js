"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_controller_1 = require("../controllers/message-controller");
class MessageRoutes {
    constructor() {
        this.messageController = new message_controller_1.MessageController();
    }
    routes(app) {
        // Create a new message
        app.route('/message')
            .post(this.messageController.addNewMessage);
        // Get all message
        app.route('/message')
            .get(this.messageController.getMessages);
        // get, update, delete a specific message
        app.route('/message/:messageId')
            .get(this.messageController.getMessageWithID)
            // update a specific message
            .put(this.messageController.updateMessage)
            // delete a specific message
            .delete(this.messageController.deleteMessage);
    }
}
exports.MessageRoutes = MessageRoutes;
//# sourceMappingURL=message-routes.js.map