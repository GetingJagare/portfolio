module.exports = class Server {

    constructor() {
        this.http = require('http');
        this.config = require('./.server_config');
    }

    create() {

        this.instance = this.http.createServer((req, res) => {
            global.app.request = req;
            global.app.response = res;

            global.app.setLanguage();
            global.app.router.parse();
        });

        this.instance.listen(this.config.port, '127.0.0.1');

    }
};