const Controller = require('./Controller');

module.exports = class SiteController extends Controller {
    constructor(name) {
        super(name)
    }

    index(request, view) {

        view.view('index', {'data': require(`${view.viewsPath}/data.json`)});

    }
};