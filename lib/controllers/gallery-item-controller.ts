import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { GalleryItemDTO } from '../dtos/gallery-item-dto';
import { GalleryItemSchema } from '../models/gallery-item';

const GalleryItem = mongoose.model('GalleryItem', GalleryItemSchema);

export class GalleryItemController {

    public async addNewGalleryItem(req: Request, res: Response) {
        let newGalleryItem = new GalleryItem(req.body);

        await newGalleryItem.save((err, galleryItem) => {
            if (err) {
                res.send(err);
            }
            if (galleryItem) {
                const result: GalleryItemDTO = {
                    ID: galleryItem._id,
                    Title: galleryItem.Title,
                    Thumbnail: galleryItem.Thumbnail,
                    RoomTypeID: galleryItem.RoomTypeID
                };
                res.status(201).json(result);
            } else {
                res.status(204).send('No Content')
            }
        });
    }

    public async getGalleryItems(req: Request, res: Response) {
        await GalleryItem.find({}, (err, galleryItem) => {
            if (err) {
                res.send(err);
            }
            if (galleryItem) {
                const results: GalleryItemDTO[] = galleryItem.map(galleryItem => {
                    return {
                        ID: galleryItem._id,
                        Title: galleryItem.Title,
                        Thumbnail: galleryItem.Thumbnail,
                        RoomTypeID: galleryItem.RoomTypeID
                    } as GalleryItemDTO;
                });
                res.status(200).json(results);
            } else {
                res.status(204).send('No Content')
            }
        });
    }

    public async getGalleryItemWithID(req: Request, res: Response) {
        await GalleryItem.findById(req.params.galleryItemId, (err, galleryItem) => {
            if (err) {
                res.send(err);
            }
            if (galleryItem) {
                const result: GalleryItemDTO = {
                    ID: galleryItem._id,
                    Title: galleryItem.Title,
                    Thumbnail: galleryItem.Thumbnail,
                    RoomTypeID: galleryItem.RoomTypeID
                };
                res.status(200).json(result);
            } else {
                res.status(204).send('No Content');
            }
        });
    }

    public async getGalleryItemWithRoomTypeID(req: Request, res: Response) {
        await GalleryItem.find({ RoomTypeID: req.params.roomTypeId }, (err, galleryItem) => {
            if (err) {
                res.send(err);
            }
            if (galleryItem) {
                const result: GalleryItemDTO = {
                    ID: galleryItem[0]._id,
                    Title: galleryItem[0].Title,
                    Thumbnail: galleryItem[0].Thumbnail,
                    RoomTypeID: galleryItem[0].RoomTypeID
                };
                res.status(200).json(result);
            } else {
                res.status(204).send('No Content');
            }
        });
    }

    public async updateGalleryItem(req: Request, res: Response) {
        await GalleryItem.findOneAndUpdate({ _id: req.params.galleryItemId }, req.body, { new: true }, (err, galleryItem) => {
            if (err) {
                res.send(err);
            }
            if (galleryItem) {
                const result: GalleryItemDTO = {
                    ID: galleryItem._id,
                    Title: galleryItem.Title,
                    Thumbnail: galleryItem.Thumbnail,
                    RoomTypeID: galleryItem.RoomTypeID
                };
                res.status(200).json(result);
            } else {
                res.status(204).send('No Content.')
            }
        });
    }

    public async deleteGalleryItem(req: Request, res: Response) {
        await GalleryItem.deleteOne({ _id: req.params.galleryItemId }, (err, galleryItem) => {
            if (err) {
                res.send(err);
            }
            if (galleryItem.deletedCount > 0) {
                res.status(200).json({ message: 'Successfully deleted galleryItem!' });
            } else {
                res.status(204).send();
            }
        });
    }

}