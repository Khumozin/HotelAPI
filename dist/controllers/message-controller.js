"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const message_1 = require("../models/message");
const Message = mongoose.model('Message', message_1.MessageSchema);
class MessageController {
    addNewMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let newMessage = new Message(req.body);
            yield newMessage.save((err, message) => {
                if (err) {
                    res.send(err);
                }
                if (message) {
                    const result = {
                        ID: message._id,
                        Name: message.Name,
                        Email: message.Email,
                        Subject: message.Subject,
                        Message: message.Message,
                        IsRead: message.IsRead
                    };
                    res.status(201).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    getMessages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Message.find({}, (err, message) => {
                if (err) {
                    res.send(err);
                }
                if (message) {
                    const results = message.map(message => {
                        return {
                            ID: message._id,
                            Name: message.Name,
                            Email: message.Email,
                            Subject: message.Subject,
                            Message: message.Message,
                            IsRead: message.IsRead
                        };
                    });
                    res.status(200).json(results);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    getMessageWithID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Message.findById(req.params.messageId, (err, message) => {
                if (err) {
                    res.send(err);
                }
                if (message) {
                    const result = {
                        ID: message._id,
                        Name: message.Name,
                        Email: message.Email,
                        Subject: message.Subject,
                        Message: message.Message,
                        IsRead: message.IsRead
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    updateMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Message.findOneAndUpdate({ _id: req.params.messageId }, req.body, { new: true }, (err, message) => {
                if (err) {
                    res.send(err);
                }
                if (message) {
                    const result = {
                        ID: message._id,
                        Name: message.Name,
                        Email: message.Email,
                        Subject: message.Subject,
                        Message: message.Message,
                        IsRead: message.IsRead
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content.');
                }
            });
        });
    }
    deleteMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Message.deleteOne({ _id: req.params.messageId }, (err, message) => {
                if (err) {
                    res.send(err);
                }
                if (message.deletedCount > 0) {
                    res.status(200).json({ message: 'Successfully deleted message!' });
                }
                else {
                    res.status(204).send();
                }
            });
        });
    }
}
exports.MessageController = MessageController;
//# sourceMappingURL=message-controller.js.map