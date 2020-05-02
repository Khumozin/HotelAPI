import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { GalleryItemDetailsDTO } from '../dtos/gallery-item-details-dto';
import { GalleryItemDetailsSchema } from '../models/gallery-item-details';

const GalleryItemDetails = mongoose.model('GalleryItemDetails', GalleryItemDetailsSchema);

export class GalleryItemDetailsController {

    public async addNewGalleryItemDetails(req: Request, res: Response) {
        let newGalleryItemDetails = new GalleryItemDetails(req.body);

        await newGalleryItemDetails.save((err, galleryItemDetails) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemDetails) {
                const result: GalleryItemDetailsDTO = {
                    ID: galleryItemDetails._id,
                    GalleryItemID: galleryItemDetails.GalleryItemID,
                    Price: galleryItemDetails.Price,
                    Content: galleryItemDetails.Content
                };
                res.status(201).json(result);
            } else {
                res.status(204).send('No Content')
            }
        });
    }

    public async getGalleryItemDetails(req: Request, res: Response) {
        await GalleryItemDetails.find({}, (err, galleryItemDetails) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemDetails) {
                const results: GalleryItemDetailsDTO[] = galleryItemDetails.map(galleryItemDetails => {
                    return {
                        ID: galleryItemDetails._id,
                        GalleryItemID: galleryItemDetails.GalleryItemID,
                        Price: galleryItemDetails.Price,
                        Content: galleryItemDetails.Content
                    } as GalleryItemDetailsDTO;
                });
                res.status(200).json(results);
            } else {
                res.status(204).send('No Content')
            }
        });
    }

    public async getGalleryItemDetailsWithID(req: Request, res: Response) {
        await GalleryItemDetails.findById(req.params.galleryItemDetailsId, (err, galleryItemDetails) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemDetails) {
                const result: GalleryItemDetailsDTO = {
                    ID: galleryItemDetails._id,
                    GalleryItemID: galleryItemDetails.GalleryItemID,
                    Price: galleryItemDetails.Price,
                    Content: galleryItemDetails.Content
                };
                res.status(200).json(result);
            } else {
                res.status(204).send('No Content');
            }
        });
    }

    public async getGalleryItemDetailsWithGalleryItemID(req: Request, res: Response) {
        await GalleryItemDetails.find({ GalleryItemID: req.params.galleryItemId }, (err, galleryItemDetails) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemDetails) {
                const result: GalleryItemDetailsDTO = {
                    ID: galleryItemDetails[0]._id,
                    GalleryItemID: galleryItemDetails[0].GalleryItemID,
                    Price: galleryItemDetails[0].Price,
                    Content: galleryItemDetails[0].Content
                };
                res.status(200).json(result);
            } else {
                res.status(204).send('No Content');
            }
        });
    }

    public async updateGalleryItemDetails(req: Request, res: Response) {
        await GalleryItemDetails.findOneAndUpdate({ _id: req.params.galleryItemDetailsId }, req.body, { new: true }, (err, galleryItemDetails) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemDetails) {
                const result: GalleryItemDetailsDTO = {
                    ID: galleryItemDetails._id,
                    GalleryItemID: galleryItemDetails.GalleryItemID,
                    Price: galleryItemDetails.Price,
                    Content: galleryItemDetails.Content
                };
                res.status(200).json(result);
            } else {
                res.status(204).send('No Content.')
            }
        });
    }

    public async deleteGalleryItemDetails(req: Request, res: Response) {
        await GalleryItemDetails.deleteOne({ _id: req.params.galleryItemDetailsId }, (err, galleryItemDetails) => {
            if (err) {
                res.send(err);
            }
            if (galleryItemDetails.deletedCount > 0) {
                res.status(200).json({ message: 'Successfully deleted galleryItemDetails!' });
            } else {
                res.status(204).send();
            }
        });
    }

}