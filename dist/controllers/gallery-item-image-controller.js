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
const gallery_item_image_1 = require("../models/gallery-item-image");
const GalleryItemImage = mongoose.model('GalleryItemImage', gallery_item_image_1.GalleryItemImageSchema);
class GalleryItemImageController {
    addNewGalleryItemImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let newGalleryItemImage = new GalleryItemImage(req.body);
            yield newGalleryItemImage.save((err, galleryItemImage) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemImage) {
                    const result = {
                        ID: galleryItemImage._id,
                        GalleryItemID: galleryItemImage.GalleryItemID,
                        Image: galleryItemImage.Image
                    };
                    res.status(201).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    getGalleryItemImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItemImage.find({}, (err, galleryItemImage) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemImage) {
                    const results = galleryItemImage.map(galleryItemImage => {
                        return {
                            ID: galleryItemImage._id,
                            GalleryItemID: galleryItemImage.GalleryItemID,
                            Image: galleryItemImage.Image
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
    getGalleryItemImageWithID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItemImage.findById(req.params.galleryItemImageId, (err, galleryItemImage) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemImage) {
                    const result = {
                        ID: galleryItemImage._id,
                        GalleryItemID: galleryItemImage.GalleryItemID,
                        Image: galleryItemImage.Image
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    getGalleryItemImageWithGalleryItemID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItemImage.find({ GalleryItemID: req.params.galleryItemId }, (err, galleryItemImage) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemImage) {
                    const results = galleryItemImage.map(galleryItemImage => {
                        return {
                            ID: galleryItemImage._id,
                            GalleryItemID: galleryItemImage.GalleryItemID,
                            Image: galleryItemImage.Image
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
    updateGalleryItemImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItemImage.findOneAndUpdate({ _id: req.params.galleryItemImageId }, req.body, { new: true }, (err, galleryItemImage) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemImage) {
                    const result = {
                        ID: galleryItemImage._id,
                        GalleryItemID: galleryItemImage.GalleryItemID,
                        Image: galleryItemImage.Image
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content.');
                }
            });
        });
    }
    deleteGalleryItemImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItemImage.deleteOne({ _id: req.params.galleryItemImageId }, (err, galleryItemImage) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemImage.deletedCount > 0) {
                    res.status(200).json({ message: 'Successfully deleted galleryItemImage!' });
                }
                else {
                    res.status(204).send();
                }
            });
        });
    }
}
exports.GalleryItemImageController = GalleryItemImageController;
//# sourceMappingURL=gallery-item-image-controller.js.map