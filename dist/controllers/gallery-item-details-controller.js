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
const gallery_item_details_1 = require("../models/gallery-item-details");
const GalleryItemDetails = mongoose.model('GalleryItemDetails', gallery_item_details_1.GalleryItemDetailsSchema);
class GalleryItemDetailsController {
    addNewGalleryItemDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let newGalleryItemDetails = new GalleryItemDetails(req.body);
            yield newGalleryItemDetails.save((err, galleryItemDetails) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemDetails) {
                    const result = {
                        ID: galleryItemDetails._id,
                        GalleryItemID: galleryItemDetails.GalleryItemID,
                        Price: galleryItemDetails.Price,
                        Content: galleryItemDetails.Content
                    };
                    res.status(201).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    getGalleryItemDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItemDetails.find({}, (err, galleryItemDetails) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemDetails) {
                    const results = galleryItemDetails.map(galleryItemDetails => {
                        return {
                            ID: galleryItemDetails._id,
                            GalleryItemID: galleryItemDetails.GalleryItemID,
                            Price: galleryItemDetails.Price,
                            Content: galleryItemDetails.Content
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
    getGalleryItemDetailsWithID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItemDetails.findById(req.params.galleryItemDetailsId, (err, galleryItemDetails) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemDetails) {
                    const result = {
                        ID: galleryItemDetails._id,
                        GalleryItemID: galleryItemDetails.GalleryItemID,
                        Price: galleryItemDetails.Price,
                        Content: galleryItemDetails.Content
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    getGalleryItemDetailsWithGalleryItemID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItemDetails.find({ GalleryItemID: req.params.galleryItemId }, (err, galleryItemDetails) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemDetails) {
                    const result = {
                        ID: galleryItemDetails[0]._id,
                        GalleryItemID: galleryItemDetails[0].GalleryItemID,
                        Price: galleryItemDetails[0].Price,
                        Content: galleryItemDetails[0].Content
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    updateGalleryItemDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItemDetails.findOneAndUpdate({ _id: req.params.galleryItemDetailsId }, req.body, { new: true }, (err, galleryItemDetails) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemDetails) {
                    const result = {
                        ID: galleryItemDetails._id,
                        GalleryItemID: galleryItemDetails.GalleryItemID,
                        Price: galleryItemDetails.Price,
                        Content: galleryItemDetails.Content
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content.');
                }
            });
        });
    }
    deleteGalleryItemDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItemDetails.deleteOne({ _id: req.params.galleryItemDetailsId }, (err, galleryItemDetails) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemDetails.deletedCount > 0) {
                    res.status(200).json({ message: 'Successfully deleted galleryItemDetails!' });
                }
                else {
                    res.status(204).send();
                }
            });
        });
    }
}
exports.GalleryItemDetailsController = GalleryItemDetailsController;
//# sourceMappingURL=gallery-item-details-controller.js.map