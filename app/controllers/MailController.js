const Controller = require('./Controller');

module.exports = class MailController extends Controller {
    constructor(name) {
        super(name);
    }

    index(request, view, facades, params) {

        const striptags = require('striptags');
        const shell = require('shelljs');

        const {name, email, phone, message} = params;

        if (!params['g-recaptcha-response']) {

            view.end(JSON.stringify({result: 0, message: facades.__t('Не заполнена капча!')}));

            return;

        }

        if (!name || !email || !phone || !message || !shell.which('sendmail')) {

            view.end(JSON.stringify({result: 0}));

            return;

        }

        const from = 'robot@danwanderer.ru';
        const to = 'getingjagare@gmail.com';
        const subject = `Заявка: ${striptags(name)}`;
        const fullMessage = `You have received a new message from your website contact form.\nHere are the details:\n` +
            `Name: ${striptags(name)}\nEmail: ${striptags(email)}\nPhone: ${striptags(phone)}\nMessage:\n${striptags(message)}`;

        shell.exec(`echo "From: ${from}\r\nSubject: ${subject}\r\nTo: ${to}\r\n\r\n ${fullMessage}" | sendmail -f ${from} ${to}`);
        view.end(JSON.stringify({result: 1}));

    }
};