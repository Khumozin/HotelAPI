import * as dotenv from 'dotenv';
import { Request, Response } from 'express';
import * as mongoose from 'mongoose';
import * as nodemailer from 'nodemailer';

import { MessageDTO } from '../dtos/message-dto';
import { MessageSchema } from '../models/message';

const Message = mongoose.model('Message', MessageSchema);
dotenv.config();

export class MessageController {

    public async addNewMessage(req: Request, res: Response) {
        let newMessage = new Message(req.body);

        const transporter = await nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                // https://github.com/nodemailer/nodemailer/issues/406#issuecomment-83941225
                rejectUnauthorized: false
            }
        });

        const body = {
            from: process.env.EMAIL_USER,
            to: req.body.Email,
            subject: 'Hotel Enquiries',
            html: `<p>Hi ${req.body.Name},</p>
                    <br>
                    <p>Thanks for contacting us.</p>`
        };

        let info = await transporter.sendMail(body, (err, res) => {
            if (err) {
                console.log(err);
                return false;
            }
            if (res) {
                console.log(res);
            }
        });

        await newMessage.save((err, message) => {
            if (err) {
                res.send(err);
            }
            if (message) {
                const result: MessageDTO = {
                    ID: message._id,
                    Name: message.Name,
                    Email: message.Email,
                    Subject: message.Subject,
                    Message: message.Message,
                    IsRead: message.IsRead
                };
                res.status(201).json(result);
            } else {
                res.status(204).send('No Content')
            }
        });
    }

    public async getMessages(req: Request, res: Response) {
        await Message.find({}, (err, message) => {
            if (err) {
                res.send(err);
            }
            if (message) {
                const results: MessageDTO[] = message.map(message => {
                    return {
                        ID: message._id,
                        Name: message.Name,
                        Email: message.Email,
                        Subject: message.Subject,
                        Message: message.Message,
                        IsRead: message.IsRead
                    } as MessageDTO;
                });
                res.status(200).json(results);
            } else {
                res.status(204).send('No Content')
            }
        });
    }

    public async getMessageWithID(req: Request, res: Response) {
        await Message.findById(req.params.messageId, (err, message) => {
            if (err) {
                res.send(err);
            }
            if (message) {
                const result: MessageDTO = {
                    ID: message._id,
                    Name: message.Name,
                    Email: message.Email,
                    Subject: message.Subject,
                    Message: message.Message,
                    IsRead: message.IsRead
                };
                res.status(200).json(result);
            } else {
                res.status(204).send('No Content');
            }
        });
    }

    public async updateMessage(req: Request, res: Response) {
        await Message.findOneAndUpdate({ _id: req.params.messageId }, req.body, { new: true }, (err, message) => {
            if (err) {
                res.send(err);
            }
            if (message) {
                const result: MessageDTO = {
                    ID: message._id,
                    Name: message.Name,
                    Email: message.Email,
                    Subject: message.Subject,
                    Message: message.Message,
                    IsRead: message.IsRead
                };
                res.status(200).json(result);
            } else {
                res.status(204).send('No Content.')
            }
        });
    }

    public async deleteMessage(req: Request, res: Response) {
        await Message.deleteOne({ _id: req.params.messageId }, (err, message) => {
            if (err) {
                res.send(err);
            }
            if (message.deletedCount > 0) {
                res.status(200).json({ message: 'Successfully deleted message!' });
            } else {
                res.status(204).send();
            }
        });
    }

}