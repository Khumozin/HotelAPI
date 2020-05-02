import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { RoomTypeDTO } from '../dtos/room-type-dto';
import { RoomTypeSchema } from '../models/room-type';

const RoomType = mongoose.model('RoomType', RoomTypeSchema);

export class RoomTypeController {

    public async addNewRoomType(req: Request, res: Response) {
        let newRoomType = new RoomType(req.body);

        await newRoomType.save((err, roomType) => {
            if (err) {
                res.send(err);
            }
            if (roomType) {
                const result: RoomTypeDTO = {
                    ID: roomType._id,
                    Title: roomType.Title
                };
                res.status(201).json(result);
            } else {
                res.status(204).send('No Content')
            }
        });
    }

    public async getRoomTypes(req: Request, res: Response) {
        await RoomType.find({}, (err, roomType) => {
            if (err) {
                res.send(err);
            }
            if (roomType) {
                const results: RoomTypeDTO[] = roomType.map(roomType => {
                    return {
                        ID: roomType._id,
                        Title: roomType.Title
                    } as RoomTypeDTO;
                });
                res.status(200).json(results);
            } else {
                res.status(204).send('No Content')
            }
        });
    }

    public async getRoomTypeWithID(req: Request, res: Response) {
        await RoomType.findById(req.params.roomTypeId, (err, roomType) => {
            if (err) {
                res.send(err);
            }
            if (roomType) {
                const result: RoomTypeDTO = {
                    ID: roomType._id,
                    Title: roomType.Title
                };
                res.status(200).json(result);
            } else {
                res.status(204).send('No Content');
            }
        });
    }

    public async updateRoomType(req: Request, res: Response) {
        await RoomType.findOneAndUpdate({ _id: req.params.roomTypeId }, req.body, { new: true }, (err, roomType) => {
            if (err) {
                res.send(err);
            }
            if (roomType) {
                const result: RoomTypeDTO = {
                    ID: roomType._id,
                    Title: roomType.Title
                };
                res.status(200).json(result);
            } else {
                res.status(204).send('No Content.')
            }
        });
    }

    public async deleteRoomType(req: Request, res: Response) {
        await RoomType.deleteOne({ _id: req.params.roomTypeId }, (err, roomType) => {
            if (err) {
                res.send(err);
            }
            if (roomType.deletedCount > 0) {
                res.status(200).json({ message: 'Successfully deleted roomType!' });
            } else {
                res.status(204).send();
            }
        });
    }

}