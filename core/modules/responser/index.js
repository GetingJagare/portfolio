const facades = require('../../facades');

/**
 * @type {module.Responser}
 */
module.exports = class Responser {
    constructor() {}

    /**
     * @param errorCode
     * @param message
     */
    abort(errorCode, message) {

        this.end(message, {'Content-Type': 'text/plain'}, errorCode);

    }

    /**
     * @param template
     * @param params
     */
    view(template, params) {

        this.end(this.renderTemplate(template, params));

    }

    /**
     * @param template
     * @param params
     * @returns {Promise|*}
     */
    renderTemplate(template, params) {

        template = `${template.replace(/^\/?/, '')}.twig`;

        return facades.templator().render(template, params);

    }

    /**
     * @param content
     * @param code
     * @param headers
     */
    end(content, headers = {'Content-Type': 'text/html'}, code = 200) {

        const response = facades.response();

        response.writeHead(code, headers);
        response.end(content);

    }
};