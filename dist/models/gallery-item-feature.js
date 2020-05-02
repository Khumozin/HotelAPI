"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.GalleryItemFeatureSchema = new Schema({
    GalleryItemID: {
        type: String,
        required: 'Enter GalleryItemID'
    },
    Text: {
        type: String
    }
});
//# sourceMappingURL=gallery-item-feature.js.map