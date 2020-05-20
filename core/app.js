const fs = require('fs');
const facades = require('./facades');

/**
 * @type {modules.App}
 */
module.exports = class App {

    constructor(absPath) {

        this.absPath = absPath;
        this.appPath = `${this.absPath}/app`;

        this.config = {};

        if (!global.app) {

            global.app = this;

        }

        if (fs.existsSync(`${this.appPath}/.app_config.json`)) {

            this.config = require(`${this.appPath}/.app_config.json`);

        }

        this.loadModules();

    }

    setLanguage() {

        const request = facades.request();
        const response = facades.response();
        const cookieParser = require('cookie');

        let cookies;

        if (request?.headers?.cookie) {
            cookies = cookieParser.parse(request.headers.cookie);
        }

        if (!request?.headers['accept-language'] && !cookies?.lang) {

            return;

        }

        const langParser = require('accept-language-parser');

        const lang = langParser.parse(request.headers['accept-language'])[0]['code'] || (cookies?.lang ? cookies.lang : this.config.sourceLang);

        if (this.config.lang !== lang) {

            this.config.lang = this.translator.hasTranslations(lang) && lang !== this.config.sourceLang ? lang : this.config.alternativeLang;

            response.setHeader('Set-Cookie', `lang=${lang}`);

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