import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const GalleryItemDetailsSchema = new Schema({
    GalleryItemID: {
        type: String,
        required: 'Enter GalleryItemID'
    },
    Price: {
        type: Number
    },
    Content: {
        type: String
    },
});