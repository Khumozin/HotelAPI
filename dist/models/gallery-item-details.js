"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.GalleryItemDetailsSchema = new Schema({
    GalleryItemID: {
        type: String,
        required: 'Enter GalleryItemID'
    },
    Price: {
        type: String
    },
    Content: {
        type: String
    },
});
//# sourceMappingURL=gallery-item-details.js.map