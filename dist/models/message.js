"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.MessageSchema = new Schema({
    Name: {
        type: String,
        required: 'Enter Title'
    },
    Email: {
        type: String,
        required: 'Enter Content'
    },
    Phone: {
        type: String,
        required: 'Enter Icon'
    },
    Message: {
        type: String,
        required: 'Enter Message'
    },
    IsRead: {
        type: Boolean,
        required: 'Enter IsRead'
    }
});
//# sourceMappingURL=message.js.map