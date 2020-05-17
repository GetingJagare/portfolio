const path = require('path');

let translatorObject = {

    __t: string => {
        return sourceLang !== lang ? '' : string;
    }
};

Object.defineProperty(translatorObject, 'currentLang', {
    writeable: true,
    get: () => {
        return lang;
    }
});

module.exports = class Translator {
    constructor () {

    }

    __t() {

    }
};