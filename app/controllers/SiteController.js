module.exports = class SiteController {
    constructor() {

    }

    index(request, view, params) {

        view.view('index');

    }
};