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
const amenity_1 = require("../models/amenity");
const Amenity = mongoose.model('Amenity', amenity_1.AmenitySchema);
class AmenityController {
    addNewAmenity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let newAmenity = new Amenity(req.body);
            yield newAmenity.save((err, amenity) => {
                if (err) {
                    res.send(err);
                }
                if (amenity) {
                    const result = {
                        ID: amenity._id,
                        Title: amenity.Title,
                        Content: amenity.Content,
                        Icon: amenity.Icon
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
            yield Amenity.find({}, (err, amenity) => {
                if (err) {
                    res.send(err);
                }
                if (amenity) {
                    const results = amenity.map(amenity => {
                        return {
                            ID: amenity._id,
                            Title: amenity.Title,
                            Content: amenity.Content,
                            Icon: amenity.Icon
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
    getAmenityWithID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Amenity.findById(req.params.amenityId, (err, amenity) => {
                if (err) {
                    res.send(err);
                }
                if (amenity) {
                    const result = {
                        ID: amenity._id,
                        Title: amenity.Title,
                        Content: amenity.Content,
                        Icon: amenity.Icon
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    updateAmenity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Amenity.findOneAndUpdate({ _id: req.params.amenityId }, req.body, { new: true }, (err, amenity) => {
                if (err) {
                    res.send(err);
                }
                if (amenity) {
                    const result = {
                        ID: amenity._id,
                        Title: amenity.Title,
                        Content: amenity.Content,
                        Icon: amenity.Icon
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content.');
                }
            });
        });
    }
    deleteAmenity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Amenity.deleteOne({ _id: req.params.amenityId }, (err, amenity) => {
                if (err) {
                    res.send(err);
                }
                if (amenity.deletedCount > 0) {
                    res.status(200).json({ message: 'Successfully deleted amenity!' });
                }
                else {
                    res.status(204).send();
                }
            });
        });
    }
}
exports.AmenityController = AmenityController;
//# sourceMappingURL=amenity-controller.js.map