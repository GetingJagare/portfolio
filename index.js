global.ABSPATH = process.cwd();

const http = require('http');
const router = require('./router');
const {parse} = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let postBody = '';
        req.on('data', chunk => {
            postBody += chunk;
        });
        req.on('end', () => {
            req.post = parse(postBody);
            router(req, res);
        });
    } else {
        router(req, res);
    }
});

server.listen(8000, '127.0.0.1');