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
     */
    view(template) {

        template = `${template.replace(/^\/?/, '')}.twig`;

        const renderedTemplate = facades.templator().render(template);

        this.end(renderedTemplate);

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