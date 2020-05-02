"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.GalleryItemSchema = new Schema({
    Title: {
        type: String,
        required: 'Enter Title'
    },
    Thumbnail: {
        type: String
    },
    RoomTypeID: {
        type: String
    },
});
//# sourceMappingURL=gallery-item.js.map