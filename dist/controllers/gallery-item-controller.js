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
const gallery_item_1 = require("../models/gallery-item");
const GalleryItem = mongoose.model('GalleryItem', gallery_item_1.GalleryItemSchema);
class GalleryItemController {
    addNewGalleryItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let newGalleryItem = new GalleryItem(req.body);
            yield newGalleryItem.save((err, galleryItem) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItem) {
                    const result = {
                        ID: galleryItem._id,
                        Title: galleryItem.Title,
                        Thumbnail: galleryItem.Thumbnail,
                        RoomTypeID: galleryItem.RoomTypeID
                    };
                    res.status(201).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    getGalleryItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItem.find({}, (err, galleryItem) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItem) {
                    const results = galleryItem.map(galleryItem => {
                        return {
                            ID: galleryItem._id,
                            Title: galleryItem.Title,
                            Thumbnail: galleryItem.Thumbnail,
                            RoomTypeID: galleryItem.RoomTypeID
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
    getGalleryItemWithID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItem.findById(req.params.galleryItemId, (err, galleryItem) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItem) {
                    const result = {
                        ID: galleryItem._id,
                        Title: galleryItem.Title,
                        Thumbnail: galleryItem.Thumbnail,
                        RoomTypeID: galleryItem.RoomTypeID
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    updateGalleryItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItem.findOneAndUpdate({ _id: req.params.galleryItemId }, req.body, { new: true }, (err, galleryItem) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItem) {
                    const result = {
                        ID: galleryItem._id,
                        Title: galleryItem.Title,
                        Thumbnail: galleryItem.Thumbnail,
                        RoomTypeID: galleryItem.RoomTypeID
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content.');
                }
            });
        });
    }
    deleteGalleryItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItem.deleteOne({ _id: req.params.galleryItemId }, (err, galleryItem) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItem.deletedCount > 0) {
                    res.status(200).json({ message: 'Successfully deleted galleryItem!' });
                }
                else {
                    res.status(204).send();
                }
            });
        });
    }
}
exports.GalleryItemController = GalleryItemController;
//# sourceMappingURL=gallery-item-controller.js.map