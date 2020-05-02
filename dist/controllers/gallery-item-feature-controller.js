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
const gallery_item_feature_1 = require("../models/gallery-item-feature");
const GalleryItemFeature = mongoose.model('GalleryItemFeature', gallery_item_feature_1.GalleryItemFeatureSchema);
class GalleryItemFeatureController {
    addNewGalleryItemFeature(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let newGalleryItemFeature = new GalleryItemFeature(req.body);
            yield newGalleryItemFeature.save((err, galleryItemFeature) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemFeature) {
                    const result = {
                        ID: galleryItemFeature._id,
                        GalleryItemID: galleryItemFeature.GalleryItemID,
                        Text: galleryItemFeature.Text
                    };
                    res.status(201).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    getGalleryItemFeature(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItemFeature.find({}, (err, galleryItemFeature) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemFeature) {
                    const results = galleryItemFeature.map(galleryItemFeature => {
                        return {
                            ID: galleryItemFeature._id,
                            GalleryItemID: galleryItemFeature.GalleryItemID,
                            Text: galleryItemFeature.Text
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
    getGalleryItemFeatureWithID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItemFeature.findById(req.params.galleryItemFeatureId, (err, galleryItemFeature) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemFeature) {
                    const result = {
                        ID: galleryItemFeature._id,
                        GalleryItemID: galleryItemFeature.GalleryItemID,
                        Text: galleryItemFeature.Text
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content');
                }
            });
        });
    }
    getGalleryItemFeatureWithGalleryItemID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItemFeature.find({ GalleryItemID: req.params.galleryItemId }, (err, galleryItemFeature) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemFeature) {
                    const results = galleryItemFeature.map(galleryItemFeature => {
                        return {
                            ID: galleryItemFeature._id,
                            GalleryItemID: galleryItemFeature.GalleryItemID,
                            Text: galleryItemFeature.Text
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
    updateGalleryItemFeature(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItemFeature.findOneAndUpdate({ _id: req.params.galleryItemFeatureId }, req.body, { new: true }, (err, galleryItemFeature) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemFeature) {
                    const result = {
                        ID: galleryItemFeature._id,
                        GalleryItemID: galleryItemFeature.GalleryItemID,
                        Text: galleryItemFeature.Text
                    };
                    res.status(200).json(result);
                }
                else {
                    res.status(204).send('No Content.');
                }
            });
        });
    }
    deleteGalleryItemFeature(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GalleryItemFeature.deleteOne({ _id: req.params.galleryItemFeatureId }, (err, galleryItemFeature) => {
                if (err) {
                    res.send(err);
                }
                if (galleryItemFeature.deletedCount > 0) {
                    res.status(200).json({ message: 'Successfully deleted galleryItemFeature!' });
                }
                else {
                    res.status(204).send();
                }
            });
        });
    }
}
exports.GalleryItemFeatureController = GalleryItemFeatureController;
//# sourceMappingURL=gallery-item-feature-controller.js.map