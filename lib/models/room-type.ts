import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RoomTypeSchema = new Schema({
    Title: {
        type: String,
        required: 'Enter Title'
    }
});