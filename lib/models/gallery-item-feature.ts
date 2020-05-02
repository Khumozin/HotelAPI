import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const GalleryItemFeatureSchema = new Schema({
    GalleryItemID: {
        type: String,
        required: 'Enter GalleryItemID'
    },
    Text: {
        type: String
    }
});