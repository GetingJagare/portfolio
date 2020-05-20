module.exports = {

    /**
     * @returns {module.App|*}
     */
    app: () => global.app,

    /**
     * @returns {*}
     */
    response: () => global.app.response,

    /**
     * @returns {{url: *, method: *, headers: *}}
     */
    request: () => global.app.request,

    /**
     * @returns {*}
     */
    view: () => global.app.responser,

    /**
     * @returns {module.exports.templator|(function())}
     */
    templator: () => global.app.templator,

    /**
     * @returns {*}
     */
    fileLoader: () => global.app['file-loader'],

    /**
     * @returns {string}
     */
    absPath: () => global.app.absPath,

    /**
     * @returns {string}
     */
    requestMethod: () => global.app.request.method.toLowerCase(),

    /**
     * @returns {string}
     */
    controllersPath: () => global.app.config.controllers_path,

    __t: (str) => global.app.translator.__t(str)

};