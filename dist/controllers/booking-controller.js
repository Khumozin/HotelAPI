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
const booking_1 = require("../models/booking");
const orderid = require('order-id')('mysecret');
const Booking = mongoose.model('Booking', booking_1.BookingSchema);
class BookingController {
    addNewBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let newBooking = new Booking(req.body);
            newBooking.IsConfirmed = false;
            newBooking.IsPaid = false;
            newBooking.BookingNumber = orderid.generate();
            yield newBooking.save((err, booking) => {
                if (err) {
                    res.send(err);
                }
                if (booking) {
                    const result = {
                        ID: booking._id,
                        FirstName: booking.FirstName,
                        Surname: booking.Surname,
                        ArrivalDate: booking.ArrivalDate,
                        DepartureDate: booking.DepartureDate,
                        RoomTypeID: booking.RoomTypeID,
                        Cellphone: booking.Cellphone,
                        Email: booking.Email,
                        IsConfirmed: booking.IsConfirmed,
                        IsPaid: booking.IsPaid,
                        NumberOfRooms: booking.NumberOfRooms,
                        BookingNumber: booking.BookingNumber
                    };
                    res.status(201).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    getBookings(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Booking.find({}, (err, booking) => {
                if (err) {
                    res.send(err);
                }
                if (booking) {
                    const results = booking.map(booking => {
                        return {
                            ID: booking._id,
                            FirstName: booking.FirstName,
                            Surname: booking.Surname,
                            ArrivalDate: booking.ArrivalDate,
                            DepartureDate: booking.DepartureDate,
                            RoomTypeID: booking.RoomTypeID,
                            Cellphone: booking.Cellphone,
                            Email: booking.Email,
                            IsConfirmed: booking.IsConfirmed,
                            IsPaid: booking.IsPaid,
                            NumberOfRooms: booking.NumberOfRooms,
                            BookingNumber: booking.BookingNumber
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
    getBookingWithID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Booking.findById(req.params.bookingId, (err, booking) => {
                if (err) {
                    res.send(err);
                }
                if (booking) {
                    const result = {
                        ID: booking._id,
                        FirstName: booking.FirstName,
                        Surname: booking.Surname,
                        ArrivalDate: booking.ArrivalDate,
                        DepartureDate: booking.DepartureDate,
                        RoomTypeID: booking.RoomTypeID,
                        Cellphone: booking.Cellphone,
                        Email: booking.Email,
                        IsConfirmed: booking.IsConfirmed,
                        IsPaid: booking.IsPaid,
                        NumberOfRooms: booking.NumberOfRooms,
                        BookingNumber: booking.BookingNumber
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    updateBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Booking.findOneAndUpdate({ _id: req.params.bookingId }, req.body, { new: true }, (err, booking) => {
                if (err) {
                    res.send(err);
                }
                if (booking) {
                    const result = {
                        ID: booking._id,
                        FirstName: booking.FirstName,
                        Surname: booking.Surname,
                        ArrivalDate: booking.ArrivalDate,
                        DepartureDate: booking.DepartureDate,
                        RoomTypeID: booking.RoomTypeID,
                        Cellphone: booking.Cellphone,
                        Email: booking.Email,
                        IsConfirmed: booking.IsConfirmed,
                        IsPaid: booking.IsPaid,
                        NumberOfRooms: booking.NumberOfRooms,
                        BookingNumber: booking.BookingNumber
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content.');
                }
            });
        });
    }
    deleteBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Booking.deleteOne({ _id: req.params.bookingId }, (err, book) => {
                if (err) {
                    res.send(err);
                }
                if (book.deletedCount > 0) {
                    res.status(200).json({ message: 'Successfully deleted book!' });
                }
                else {
                    res.status(204).send();
                }
            });
        });
    }
}
exports.BookingController = BookingController;
//# sourceMappingURL=booking-controller.js.map