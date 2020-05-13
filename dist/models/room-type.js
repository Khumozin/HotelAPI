"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.RoomTypeSchema = new Schema({
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
//# sourceMappingURL=room-type.js.map