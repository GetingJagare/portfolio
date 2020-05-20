const Twig = require('twig');
const twig = Twig.twig;
const facades = require('../../facades');

/**
 * @type {module.Templator}
 */
module.exports = class Templator {
    constructor () {
        Twig.extendFunction('t', function (str) {
            return facades.app().translator.__t(str);
        });
    }

    /**
     * @param templatePath
     * @param params
     * @param isController
     * @returns {Promise|*}
     */
    render(templatePath, params, isController = true) {

        const app = facades.app();
        const view = facades.view();

        if (isController) {
            templatePath = `${facades.absPath()}/app/${app.config.views_path}/${app.controllerAlias}/${templatePath}`;
        } else {
            templatePath = `${facades.absPath()}/${templatePath}`;
        }

        const loadedFile = facades.fileLoader().load(templatePath, true);

        if (!loadedFile) {

            return null;

        }

        const template = Twig.twig({
            data: loadedFile,
            path: templatePath,
            allowInlineIncludes: true
        });

        return template.render({
            isProduction: !app.config.dev,
            hostname: app.config.host.replace(/:\d+$/, ''),
            absPath: facades.absPath(),
            viewsPath: view.viewsPath,
            lang: app.config.lang,
            __t: facades.__t,
            params: params
        });

    }
};