import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MessageSchema = new Schema({
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