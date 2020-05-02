import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { GalleryItemFeatureDTO } from '../dtos/gallery-item-feature-dto';
import { GalleryItemFeatureSchema } from '../models/gallery-item-feature';

const GalleryItemFeature = mongoose.model('GalleryItemFeature', GalleryItemFeatureSchema);

export class GalleryItemFeatureController {

    public async addNewGalleryItemFeature(req: Request, res: Response) {
        let newGalleryItemFeature = new GalleryItemFeature(req.body);

        await newGalleryItemFeature.save((err, galleryItemFeature) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemFeature) {
                const result: GalleryItemFeatureDTO = {
                    ID: galleryItemFeature._id,
                    GalleryItemID: galleryItemFeature.GalleryItemID,
                    Text: galleryItemFeature.Text
                };
                res.status(201).json(result);
            } else {
                res.status(204).send('No Content')
            }
        });
    }

    public async getGalleryItemFeature(req: Request, res: Response) {
        await GalleryItemFeature.find({}, (err, galleryItemFeature) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemFeature) {
                const results: GalleryItemFeatureDTO[] = galleryItemFeature.map(galleryItemFeature => {
                    return {
                        ID: galleryItemFeature._id,
                        GalleryItemID: galleryItemFeature.GalleryItemID,
                        Text: galleryItemFeature.Text
                    } as GalleryItemFeatureDTO;
                });
                res.status(200).json(results);
            } else {
                res.status(204).send('No Content')
            }
        });
    }

    public async getGalleryItemFeatureWithID(req: Request, res: Response) {
        await GalleryItemFeature.findById(req.params.galleryItemFeatureId, (err, galleryItemFeature) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemFeature) {
                const result: GalleryItemFeatureDTO = {
                    ID: galleryItemFeature._id,
                    GalleryItemID: galleryItemFeature.GalleryItemID,
                    Text: galleryItemFeature.Text
                };
                res.status(200).json(result);
            } else {
                res.status(204).send('No Content');
            }
        });
    }

    public async getGalleryItemFeatureWithGalleryItemID(req: Request, res: Response) {
        await GalleryItemFeature.find({ GalleryItemID: req.params.galleryItemId }, (err, galleryItemFeature) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemFeature) {
                const results: GalleryItemFeatureDTO[] = galleryItemFeature.map(galleryItemFeature => {
                    return {
                        ID: galleryItemFeature._id,
                        GalleryItemID: galleryItemFeature.GalleryItemID,
                        Text: galleryItemFeature.Text
                    } as GalleryItemFeatureDTO;
                });
                res.status(200).json(results);
            } else {
                res.status(204).send('No Content');
            }
        });
    }

    public async updateGalleryItemFeature(req: Request, res: Response) {
        await GalleryItemFeature.findOneAndUpdate({ _id: req.params.galleryItemFeatureId }, req.body, { new: true }, (err, galleryItemFeature) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemFeature) {
                const result: GalleryItemFeatureDTO = {
                    ID: galleryItemFeature._id,
                    GalleryItemID: galleryItemFeature.GalleryItemID,
                    Text: galleryItemFeature.Text
                };
                res.status(200).json(result);
            } else {
                res.status(204).send('No Content.')
            }
        });
    }

    public async deleteGalleryItemFeature(req: Request, res: Response) {
        await GalleryItemFeature.deleteOne({ _id: req.params.galleryItemFeatureId }, (err, galleryItemFeature) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemFeature.deletedCount > 0) {
                res.status(200).json({ message: 'Successfully deleted galleryItemFeature!' });
            } else {
                res.status(204).send();
            }
        });
    }

}