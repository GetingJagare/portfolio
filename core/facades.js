module.exports = {

    /**
     * @returns {*}
     */
    response: () => global.app.response,

    /**
     * @returns {{url: *, method: *, headers: *}}
     */
    request: () => global.app.request,

    /**
     * @returns {string}
     */
    absPath: () => global.app.absPath,

    /**
     * @returns {string}
     */
    requestMethod: () => global.app.request.method.toLowerCase(),

};