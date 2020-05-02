"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.GalleryItemImageSchema = new Schema({
    GalleryItemID: {
        type: String,
        required: 'Enter GalleryItemID'
    },
    Image: {
        type: String
    }
});
//# sourceMappingURL=gallery-item-image.js.map