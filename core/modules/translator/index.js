const facades = require('../../facades');
const fs = require('fs');
const redis = require('redis');
const redisClient = redis.createClient();

/**
 * @type {module.Translator}
 */
module.exports = class Translator {
    constructor () {}

    hasTranslations (lang) {

        return fs.existsSync(`${app.appPath}/translations/${lang}`);

    }

    //@todo put translations to redis
    __t (str) {

        const app = facades.app();

        if (app.config.lang === app.config.sourceLang) {

            return str;

        }

        if (!this.hasTranslations(app.config.lang)) {

            return str;

        }

        const translations = require(`${app.appPath}/translations/${app.config.lang}`);

        return translations[str] || str;

    }
};