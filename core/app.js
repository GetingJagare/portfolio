const fs = require('fs');
const facades = require('./facades');

/**
 * @type {modules.App}
 */
module.exports = class App {

    constructor(absPath) {

        this.absPath = absPath;
        this.config = {};

        if (!global.app) {

            global.app = this;

        }

        if (fs.existsSync(`${this.absPath}/app/.app_config.json`)) {

            this.config = require(`${this.absPath}/app/.app_config.json`);

        }

        this.loadModules();

    }

    setLanguage() {

        const request = facades.request();
        const cookieParser = require('cookie');

        let cookies;

        if (request?.headers?.cookie) {
            cookies = cookieParser.parse(request.headers.cookie);
        }

        if (!request?.headers['accept-language'] && !cookies.lang) {

            return;

        }

        const langParser = require('accept-language-parser');

        const lang = cookies?.lang ? cookies.lang : langParser.parse(request.headers['accept-language'])[0]['code'];

        if (this.config.lang !== lang) {

            this.config.lang = lang;

        }

        this.config.host = request.headers.host;

    }

    launch() {

        this.server.create();

    }

    loadModules() {

        const modulesMap = require('./modules_map') || {};

        Object.keys(modulesMap).forEach((moduleAlias) => {

            const moduleClass = require(`./${modulesMap[moduleAlias]}`);

            this[moduleAlias] = new moduleClass();

        });

    }

};