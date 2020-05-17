module.exports = class {
    constructor() {

    }

    index({lang = null}) {

        global.app.lang = lang ? lang : 'ru';



    }
};