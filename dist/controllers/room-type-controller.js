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
const room_type_1 = require("../models/room-type");
const RoomType = mongoose.model('RoomType', room_type_1.RoomTypeSchema);
class RoomTypeController {
    addNewRoomType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let newRoomType = new RoomType(req.body);
            yield newRoomType.save((err, roomType) => {
                if (err) {
                    res.send(err);
                }
                if (roomType) {
                    const result = {
                        ID: roomType._id,
                        Title: roomType.Title
                    };
                    res.status(201).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    getRoomTypes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield RoomType.find({}, (err, roomType) => {
                if (err) {
                    res.send(err);
                }
                if (roomType) {
                    const results = roomType.map(roomType => {
                        return {
                            ID: roomType._id,
                            Title: roomType.Title
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
    getRoomTypeWithID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield RoomType.findById(req.params.roomTypeId, (err, roomType) => {
                if (err) {
                    res.send(err);
                }
                if (roomType) {
                    const result = {
                        ID: roomType._id,
                        Title: roomType.Title
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    updateRoomType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield RoomType.findOneAndUpdate({ _id: req.params.roomTypeId }, req.body, { new: true }, (err, roomType) => {
                if (err) {
                    res.send(err);
                }
                if (roomType) {
                    const result = {
                        ID: roomType._id,
                        Title: roomType.Title
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content.');
                }
            });
        });
    }
    deleteRoomType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield RoomType.deleteOne({ _id: req.params.roomTypeId }, (err, roomType) => {
                if (err) {
                    res.send(err);
                }
                if (roomType.deletedCount > 0) {
                    res.status(200).json({ message: 'Successfully deleted roomType!' });
                }
                else {
                    res.status(204).send();
                }
            });
        });
    }
}
exports.RoomTypeController = RoomTypeController;
//# sourceMappingURL=room-type-controller.js.map