import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "aeea252723abf4",
        pass: "930368aa461976"
    }
});

export class NodeMailerMailAdapter implements MailAdapter {


    async sendMail({subject,body}: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Guilherme Araújo <guilherme230620012gmail.com>",
            subject,
            html: body,
        });
    }
}