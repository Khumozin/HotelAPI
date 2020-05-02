import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const GalleryItemImageSchema = new Schema({
    GalleryItemID: {
        type: String,
        required: 'Enter GalleryItemID'
    },
    Image: {
        type: String
    }
});