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

        //@todo lang in cookie has a higher prior

        const langParser = require('accept-language-parser');

        const lang =  cookies?.lang ? cookies.lang : langParser.parse(request.headers['accept-language'])[0]['code'];

        // if the requested language has translations set it as the app language
        if (facades.hasTranslations(lang)) {

            this.config.lang = lang;

        } else {

            // if the requested language is equal to the app source language
            const isSourceLang = lang === this.config.sourceLang;

            this.config.lang = !isSourceLang && facades.hasTranslations(this.config.alternativeLang) ? this.config.alternativeLang
                : this.config.sourceLang;

        }

        response.setHeader('Set-Cookie', `lang=${this.config.lang}`);

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