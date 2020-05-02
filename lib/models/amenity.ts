import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AmenitySchema = new Schema({
    Title: {
        type: String,
        required: 'Enter Title'
    },
    Content: {
        type: String,
        required: 'Enter Content'
    },
    Icon: {
        type: String,
        required: 'Enter Icon'
    },
});