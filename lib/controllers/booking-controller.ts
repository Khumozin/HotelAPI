import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { BookingDTO } from '../dtos/booking-dto';
import { BookingSchema } from '../models/booking';

const orderid = require('order-id')('mysecret');

const Booking = mongoose.model('Booking', BookingSchema);

export class BookingController {

    public async addNewBooking(req: Request, res: Response) {
        let newBooking = new Booking(req.body);

        newBooking.IsConfirmed = false;
        newBooking.IsPaid = false;
        newBooking.BookingNumber = orderid.generate();

        await newBooking.save((err, booking) => {
            if (err) {
                res.send(err);
            }
            if (booking) {
                const result: BookingDTO = {
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
            } else {
                res.status(204).send('No Content')
            }
        });
    }

    public async getBookings(req: Request, res: Response) {
        await Booking.find({}, (err, booking) => {
            if (err) {
                res.send(err);
            }
            if (booking) {
                const results: BookingDTO[] = booking.map(booking => {
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
                    } as BookingDTO;
                });
                res.status(200).json(results);
            } else {
                res.status(204).send('No Content')
            }
        });
    }

    public async getBookingWithID(req: Request, res: Response) {
        await Booking.findById(req.params.bookingId, (err, booking) => {
            if (err) {
                res.send(err);
            }
            if (booking) {
                const result: BookingDTO = {
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
            } else {
                res.status(204).send('No Content');
            }
        });
    }

    public async updateBooking(req: Request, res: Response) {
        await Booking.findOneAndUpdate({ _id: req.params.bookingId }, req.body, { new: true }, (err, booking) => {
            if (err) {
                res.send(err);
            }
            if (booking) {
                const result: BookingDTO = {
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
            } else {
                res.status(204).send('No Content.')
            }
        });
    }

    public async deleteBooking(req: Request, res: Response) {
        await Booking.deleteOne({ _id: req.params.bookingId }, (err, book) => {
            if (err) {
                res.send(err);
            }
            if (book.deletedCount > 0) {
                res.status(200).json({ message: 'Successfully deleted book!' });
            } else {
                res.status(204).send();
            }
        });
    }

}