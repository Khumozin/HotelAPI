import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { AmenityDTO } from '../dtos/amenity-dto';
import { AmenitySchema } from '../models/amenity';

const Amenity = mongoose.model('Amenity', AmenitySchema);

export class AmenityController {

    public async addNewAmenity(req: Request, res: Response) {
        let newAmenity = new Amenity(req.body);

        await newAmenity.save((err, amenity) => {
            if (err) {
                res.send(err);
            }
            if (amenity) {
                const result: AmenityDTO = {
                    ID: amenity._id,
                    Title: amenity.Title,
                    Content: amenity.Content,
                    Icon: amenity.Icon
                };
                res.status(201).json(result);
            } else {
                res.status(204).send('No Content')
            }
        });
    }

    public async getAmenities(req: Request, res: Response) {
        await Amenity.find({}, (err, amenity) => {
            if (err) {
                res.send(err);
            }
            if (amenity) {
                const results: AmenityDTO[] = amenity.map(amenity => {
                    return {
                        ID: amenity._id,
                        Title: amenity.Title,
                        Content: amenity.Content,
                        Icon: amenity.Icon
                    } as AmenityDTO;
                });
                res.status(200).json(results);
            } else {
                res.status(204).send('No Content')
            }
        });
    }

    public async getAmenityWithID(req: Request, res: Response) {
        await Amenity.findById(req.params.amenityId, (err, amenity) => {
            if (err) {
                res.send(err);
            }
            if (amenity) {
                const result: AmenityDTO = {
                    ID: amenity._id,
                    Title: amenity.Title,
                    Content: amenity.Content,
                    Icon: amenity.Icon
                };
                res.status(200).json(result);
            } else {
                res.status(204).send('No Content');
            }
        });
    }

    public async updateAmenity(req: Request, res: Response) {
        await Amenity.findOneAndUpdate({ _id: req.params.amenityId }, req.body, { new: true }, (err, amenity) => {
            if (err) {
                res.send(err);
            }
            if (amenity) {
                const result: AmenityDTO = {
                    ID: amenity._id,
                    Title: amenity.Title,
                    Content: amenity.Content,
                    Icon: amenity.Icon
                };
                res.status(200).json(result);
            } else {
                res.status(204).send('No Content.')
            }
        });
    }

    public async deleteAmenity(req: Request, res: Response) {
        await Amenity.deleteOne({ _id: req.params.amenityId }, (err, amenity) => {
            if (err) {
                res.send(err);
            }
            if (amenity.deletedCount > 0) {
                res.status(200).json({ message: 'Successfully deleted amenity!' });
            } else {
                res.status(204).send();
            }
        });
    }

}