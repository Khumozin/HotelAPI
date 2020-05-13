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
const book_1 = require("../models/book");
const Book = mongoose.model('Book', book_1.BookSchema);
class BookController {
    addNewBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let newBook = new Book(req.body);
            newBook.IsConfirmed = false;
            newBook.IsPaid = false;
            yield newBook.save((err, book) => {
                if (err) {
                    res.send(err);
                }
                if (book) {
                    const result = {
                        ID: book._id,
                        FirstName: book.FirstName,
                        Surname: book.Surname,
                        ArrivalDate: book.ArrivalDate,
                        DepartureDate: book.DepartureDate,
                        RoomTypeID: book.RoomTypeID,
                        Cellphone: book.Cellphone,
                        Email: book.Email,
                        IsConfirmed: book.IsConfirmed,
                        IsPaid: book.IsPaid,
                        NumberOfRooms: book.NumberOfRooms
                    };
                    res.status(201).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    getAmenities(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Book.find({}, (err, book) => {
                if (err) {
                    res.send(err);
                }
                if (book) {
                    const results = book.map(book => {
                        return {
                            ID: book._id,
                            FirstName: book.FirstName,
                            Surname: book.Surname,
                            ArrivalDate: book.ArrivalDate,
                            DepartureDate: book.DepartureDate,
                            RoomTypeID: book.RoomTypeID,
                            Cellphone: book.Cellphone,
                            Email: book.Email,
                            IsConfirmed: book.IsConfirmed,
                            IsPaid: book.IsPaid,
                            NumberOfRooms: book.NumberOfRooms
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
    getBookWithID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Book.findById(req.params.bookId, (err, book) => {
                if (err) {
                    res.send(err);
                }
                if (book) {
                    const result = {
                        ID: book._id,
                        FirstName: book.FirstName,
                        Surname: book.Surname,
                        ArrivalDate: book.ArrivalDate,
                        DepartureDate: book.DepartureDate,
                        RoomTypeID: book.RoomTypeID,
                        Cellphone: book.Cellphone,
                        Email: book.Email,
                        IsConfirmed: book.IsConfirmed,
                        IsPaid: book.IsPaid,
                        NumberOfRooms: book.NumberOfRooms
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    updateBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Book.findOneAndUpdate({ _id: req.params.bookId }, req.body, { new: true }, (err, book) => {
                if (err) {
                    res.send(err);
                }
                if (book) {
                    const result = {
                        ID: book._id,
                        FirstName: book.FirstName,
                        Surname: book.Surname,
                        ArrivalDate: book.ArrivalDate,
                        DepartureDate: book.DepartureDate,
                        RoomTypeID: book.RoomTypeID,
                        Cellphone: book.Cellphone,
                        Email: book.Email,
                        IsConfirmed: book.IsConfirmed,
                        IsPaid: book.IsPaid,
                        NumberOfRooms: book.NumberOfRooms
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content.');
                }
            });
        });
    }
    deleteBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Book.deleteOne({ _id: req.params.bookId }, (err, book) => {
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
exports.BookController = BookController;
//# sourceMappingURL=book-controller.js.map