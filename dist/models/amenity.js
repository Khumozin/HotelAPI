"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.AmenitySchema = new Schema({
    Title: {
        type: String,
        required: 'Enter Title'
    },
    Content: {
        type: String,
        required: 'Enter Content'
    },
    Icon: {
        type: String,
        required: 'Enter Icon'
    },
});
//# sourceMappingURL=amenity.js.map