const mailer = require('nodemailer');

module.exports = (from, to, subject, message) => {
    const transporter = mailer.createTransport();
    transporter.sendMail({
        from: from,
        to: to,
        subject: subject,
        text: message
    });
};