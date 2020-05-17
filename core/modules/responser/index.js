const facades = require('../../facades');

module.exports = class Responser {
    constructor() {}

    abort(errorCode, message) {

        this.end(errorCode, message);

    }

    end(code, content) {

        const response = facades.response();

        response.writeHead(code, {'Content-Type': 'text/html'});
        response.end(content);

    }
};