import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RoomTypeSchema = new Schema({
    Title: {
        type: String,
        required: 'Enter Title'
    },
    NumberOfRooms: {
        type: Number,
        required: 'Enter number of rooms'
    },
    AvailableRooms: {
        type: Number,
        required: 'Enter number of availble rooms'
    }
});