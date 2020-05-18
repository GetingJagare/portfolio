const url = require('url');
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
        const view = facades.view();

        const requestUrl = url.parse(request.url, true);

        // routes
        routePatterns.forEach((pattern) => {

            if (pattern === requestUrl.pathname) {

                const [method, controllerAction] = this.routes[pattern].split(':');

                if (method.toLowerCase() !== facades.requestMethod()) {

                    view.abort(405, 'Method not allowed!');

                    return;

                }

                let [controller, action] = controllerAction.split('@');

                action = action || 'index';

                const controllerClass = require(`${facades.absPath()}/app/${facades.controllersPath()}/${controller}`);

                const controllerInstance = new controllerClass();

                if (!controllerInstance[action]) {

                    view.abort(404, `Class "${controller}" hasn't method "${action}"`);

                    return;

                }

                let params = {};

                switch (facades.requestMethod()) {
                    case 'get':
                        params = requestUrl.query;
                        break;
                    case 'post':
                        params = request.post;
                        break;
                }

                controllerInstance[action].call(controllerClass, request, view, params);

                return;

            }

        });

        // files

        if (!routePatterns.includes(requestUrl.pathname)) {
            const {headers, loadedFile} = facades.fileLoader().load(`${facades.absPath()}${requestUrl.pathname}`);

            if (loadedFile) {
                view.end(loadedFile, headers);
            } else {
                view.end(`Resource not found by url ${request.path}`, {'Content-Type': 'text/plain'}, 404);
            }
        }

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
