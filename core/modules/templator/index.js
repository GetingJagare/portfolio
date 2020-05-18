const Twig = require('twig');
const twig = Twig.twig;
const facades = require('../../facades');

/**
 * @type {module.Templator}
 */
module.exports = class Templator {
    constructor () {

    }

    /**
     * @param templatePath
     * @returns {Promise|*}
     */
    render(templatePath) {

        templatePath = `${facades.absPath()}/app/${facades.app().config.views_path}/${templatePath}`;

        const loadedFile = facades.fileLoader().load(templatePath, true);

        if (!loadedFile) {

            return null;

        }

        const template = Twig.twig({
            data: loadedFile,
            allowInlineIncludes: true
        });

        return template.render({
            isProduction: !facades.app().config.dev,
            hostname: facades.app().config.host.replace(/:\d+$/, ''),
            absPath: facades.absPath(),
            viewsPath: `${facades.absPath()}/app/${facades.app().config.views_path}`,
            __t: facades.__t
        });

    }
};