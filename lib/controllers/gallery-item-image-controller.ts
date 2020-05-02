import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { GalleryItemImageDTO } from '../dtos/gallery-item-image-dto';
import { GalleryItemImageSchema } from '../models/gallery-item-image';

const GalleryItemImage = mongoose.model('GalleryItemImage', GalleryItemImageSchema);

export class GalleryItemImageController {

    public async addNewGalleryItemImage(req: Request, res: Response) {
        let newGalleryItemImage = new GalleryItemImage(req.body);

        await newGalleryItemImage.save((err, galleryItemImage) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemImage) {
                const result: GalleryItemImageDTO = {
                    ID: galleryItemImage._id,
                    GalleryItemID: galleryItemImage.GalleryItemID,
                    Image: galleryItemImage.Image
                };
                res.status(201).json(result);
            } else {
                res.status(204).send('No Content')
            }
        });
    }

    public async getGalleryItemImage(req: Request, res: Response) {
        await GalleryItemImage.find({}, (err, galleryItemImage) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemImage) {
                const results: GalleryItemImageDTO[] = galleryItemImage.map(galleryItemImage => {
                    return {
                        ID: galleryItemImage._id,
                        GalleryItemID: galleryItemImage.GalleryItemID,
                        Image: galleryItemImage.Image
                    } as GalleryItemImageDTO;
                });
                res.status(200).json(results);
            } else {
                res.status(204).send('No Content')
            }
        });
    }

    public async getGalleryItemImageWithID(req: Request, res: Response) {
        await GalleryItemImage.findById(req.params.galleryItemImageId, (err, galleryItemImage) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemImage) {
                const result: GalleryItemImageDTO = {
                    ID: galleryItemImage._id,
                    GalleryItemID: galleryItemImage.GalleryItemID,
                    Image: galleryItemImage.Image
                };
                res.status(200).json(result);
            } else {
                res.status(204).send('No Content');
            }
        });
    }

    public async getGalleryItemImageWithGalleryItemID(req: Request, res: Response) {
        await GalleryItemImage.find({ GalleryItemID: req.params.galleryItemId }, (err, galleryItemImage) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemImage) {
                const results: GalleryItemImageDTO[] = galleryItemImage.map(galleryItemImage => {
                    return {
                        ID: galleryItemImage._id,
                        GalleryItemID: galleryItemImage.GalleryItemID,
                        Image: galleryItemImage.Image
                    } as GalleryItemImageDTO;
                });
                res.status(200).json(results);
            } else {
                res.status(204).send('No Content');
            }
        });
    }

    public async updateGalleryItemImage(req: Request, res: Response) {
        await GalleryItemImage.findOneAndUpdate({ _id: req.params.galleryItemImageId }, req.body, { new: true }, (err, galleryItemImage) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemImage) {
                const result: GalleryItemImageDTO = {
                    ID: galleryItemImage._id,
                    GalleryItemID: galleryItemImage.GalleryItemID,
                    Image: galleryItemImage.Image
                };
                res.status(200).json(result);
            } else {
                res.status(204).send('No Content.')
            }
        });
    }

    public async deleteGalleryItemImage(req: Request, res: Response) {
        await GalleryItemImage.deleteOne({ _id: req.params.galleryItemImageId }, (err, galleryItemImage) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemImage.deletedCount > 0) {
                res.status(200).json({ message: 'Successfully deleted galleryItemImage!' });
            } else {
                res.status(204).send();
            }
        });
    }

}