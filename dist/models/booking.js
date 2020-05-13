"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.BookingSchema = new Schema({
    FirstName: {
        type: String,
        required: 'Enter Title'
    },
    Surname: {
        type: String,
        required: 'Enter Surname'
    },
    ArrivalDate: {
        type: String,
        required: 'Enter ArrivalDate'
    },
    DepartureDate: {
        type: String,
        required: 'Enter DepartureDate'
    },
    RoomTypeID: {
        type: String,
        required: 'Enter RoomTypeID'
    },
    NumberOfRooms: {
        type: Number,
        required: 'Enter NumberOfRooms'
    },
    Cellphone: {
        type: String,
        required: 'Enter Cellphone'
    },
    Email: {
        type: String,
        required: 'Enter Email'
    },
    BookingNumber: {
        type: String,
        required: 'Enter BookingNumber'
    },
    IsConfirmed: {
        type: Boolean,
        required: 'Enter IsConfirmed'
    },
    IsPaid: {
        type: Boolean,
        required: 'Enter IsPaid'
    },
});
//# sourceMappingURL=booking.js.map