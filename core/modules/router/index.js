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

    parse() {

        const routePatterns = Object.keys(this.routes);

        const request = facades.request();
        const view = facades.view();
        const app = facades.app();

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

                const controllerClass = require(`${app.appPath}/${facades.controllersPath()}/${controller}`);

                const controllerInstance = new controllerClass(controller);

                app.controllerAlias = controllerInstance.getAlias();

                view.viewsPath = `${app.appPath}/${app.config.views_path}/${app.controllerAlias}`;

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

                facades.app().setLanguage();

                controllerInstance[action].call(controllerClass, request, view, facades, params);

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
}
