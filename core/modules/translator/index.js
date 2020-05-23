const facades = require('../../facades');
const fs = require('fs');
const redis = require('redis');
const redisClient = redis.createClient();

/**
 * @type {module.Translator}
 */
module.exports = class Translator {
    constructor () {

        if (!(this.translations = redisClient.get('translations', redis.print))) {

            this.translations = {};

            const app = facades.app();
            const translationsPath = `${app.appPath}/translations`;

            if (!fs.existsSync(translationsPath)) {

                return;

            }

            fs.readdirSync(translationsPath).forEach((langDir) => {

                this.translations[langDir] = require(`${translationsPath}/${langDir}/index.json`);

            });

            redisClient.set('translations', JSON.stringify(this.translations), redis.print);

        } else {

            this.translations = JSON.parse(this.translations);

        }

    }

    hasTranslations (lang) {

        return !!this.translations[lang];

    }

    __t (str) {

        const app = facades.app();

        if (app.config.lang === app.config.sourceLang) {

            return str;

        }

        if (!this.hasTranslations(app.config.lang)) {

            return str;

        }

        return this.translations[app.config.lang][str] || str;

    }
};