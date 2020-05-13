"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();
class SendMail {
    constructor() { }
    sendEmail(message) {
        const transporter = nodemailer.createTranport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        const body = {
            from: process.env.EMAIL_USER,
            to: message.Email,
            subject: 'Hotel Enquiries',
            html: `<p>Hi ${message.Name},</p>
                    <br>
                    <p>Thanks for contacting us.</p>`
        };
        transporter.sendMail(body, (err, res) => {
            if (err) {
                console.log('Something went wrong');
                return false;
            }
            if (res) {
                console.log(res);
            }
        });
    }
}
exports.SendMail = SendMail;
//# sourceMappingURL=mail.js.map