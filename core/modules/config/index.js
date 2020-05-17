module.exports = class Config {

    constructor() {

    }

    set() {
        const ABSPATH = process.cwd();
        global.config = require(`${ABSPATH}/app/.app_config`);
        global.config.absPath = process.cwd();
        global.config.modules_path = `${ABSPATH}/${global.config.modules_path}`;
        global.config.routes_path = `${ABSPATH}/${global.config.routes_path}`;
        global.config.views_path = `${ABSPATH}/${global.config.views_path}`;
        global.config.controllers_path = `${ABSPATH}/${global.config.controllers_path}`;
    }
};