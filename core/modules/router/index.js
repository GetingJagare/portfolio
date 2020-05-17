//const Twig = require('twig');
//const fs = require('fs');
//const twig = Twig.twig;

//'use strict';

/*let {parse} = require('querystring');

function writeResponse(code, headers, content, res) {
    res.writeHead(code, headers);
    res.write(content);
    res.end();
};*/

const facades = require('../../facades');
const fs = require('fs');

module.exports = class Router {
    constructor() {

        const absPath = facades.absPath();

        this.routes = [];

        if (fs.existsSync(`${absPath}/app/routes`)) {

            this.routes = require(`${absPath}/app/routes`);

        }

    }

    parse () {

        const routePatterns = Object.keys(this.routes);

        const request = facades.request();

        console.log(request);

        routePatterns.forEach((pattern) => {

            if (pattern === request.url) {



            }

        });

    }

    /*parse() {
        let routes = Object.keys(this.routesArray);
        let urlChunks = request.url.split('?');
        let responser = require(`${config.modules_path}/responser`);

        if (routes.indexOf(urlChunks[0]) >= 0) {
            let controllerData = this.routesArray[urlChunks[0]].split(':');

            if (request.method.toLowerCase() !== controllerData[0]) {

                responser.throwError(405, 'Method not allowed');
            } else {
                let fs = require('fs');
                let controllerParts = controllerData[1].split('@');

                if (!fs.existsSync(`${config.controllers_path}/${controllerParts[0]}`)) {
                    responser.throwError(500, 'Method not allowed');
                }
            }
        }

        if (req.method === 'POST') {
            let postBody = '';
            req.on('data', chunk => {
                postBody += chunk;
            });
            req.on('end', () => {
                req.post = parse(postBody);
                router(req, res);
            });
        } else {
            router(req, res);
        }
    }*/
};

/*
module.exports = (req, res) => {
    switch (req.url) {
        case '/':
            const isProduction = req.headers.host === 'danwanderer.ru';
            const template = fs.readFileSync(`${ABSPATH}/views/index.twig`, {encoding: 'utf-8'});
            const translator = require(`${ABSPATH}/translator`);

            const html = twig({
                data: template,
                allowInlineIncludes: true
            }).render({
                isProduction: isProduction,
                hostname: req.headers.host.replace(/:\d+$/, ''),
                absPath: ABSPATH,
                __t: translator.__t
            });
            let maxAge = 30 * 24 * 60 * 60;

            writeResponse(200, {'Content-Type': 'text/html', 'Cache-Control': `private, max-age=${maxAge}, must-revalidate`}, html, res);
            break;
        case '/mail':
            const isAjax = req.headers['x-requested-with'] && req.headers['x-requested-with'] === 'XMLHttpRequest';
            if (isAjax) {
                const striptags = require('striptags');
                const shell = require('shelljs');
                const {name, email, phone, message} = req.post;
                if (!name || !email || !phone || !message || !req.post['g-recaptcha-response'] || !shell.which('sendmail')) {
                    res.write(JSON.stringify({result: 0}));
                    res.end();
                }

                const from = 'robot@danwanderer.ru';
                const to = 'getingjagare@gmail.com';
                const subject = `Заявка: ${striptags(name)}`;
                const fullMessage = `You have received a new message from your website contact form.\nHere are the details:\nName: ${striptags(name)}\nEmail: ${striptags(email)}\nPhone: ${striptags(phone)}\nMessage:\n${striptags(message)}`;
                shell.exec(`echo -e "From: ${from}\r\nSubject: ${subject}\r\nTo: ${to}\r\n\r\n ${fullMessage}" | sendmail -f ${from} ${to}`);
                res.write(JSON.stringify({result: 1}));
                res.end();
            }
            break;
        default:
            const url = `${config.absPath}${req.url}`.replace(/\?.*$/, '');
            if (fs.existsSync(url)) {
                const fileLoader = require(`${config.absPath}/file-loader`);
                const data = fileLoader.load(url);

                writeResponse(data.status, data.headers, data.content, res);
            } else {
                const template = fs.readFileSync(`${ABSPATH}/views/errors/404.twig`, {encoding: 'utf-8'});
                const html = twig({data: template}).render({ version: process.version });

                writeResponse(404, {'Content-Type': 'text/html'}, html, res);
            }
            break;
    }
};*/
