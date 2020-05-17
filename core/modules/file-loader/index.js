const mime = require('mime-types');
const fs = require('fs');
const etag = require('etag');
const md5File = require('md5-file');

module.exports = class FileLoader {
    constructor() {



    }

    get(url, with_headers = true) {
        let headers = {'Content-Type': mime.lookup(url)}, status = 200;
        let content = fs.readFileSync(url);

        if (/\.(js|css|woff\d*|ttf|eot|jpe?g|gif|svg|png|ico)$/.test(url) && with_headers) {
            let currentDate = new Date();
            const currentTime = currentDate.getTime();
            const expireTime = 30 * 24 * 60 * 60;
            currentDate.setTime(currentTime + expireTime * 1000);

            let modTime = fs.statSync(url).mtime;
            let modDate = new Date(modTime);
            headers['Cache-Control'] = `max-age=${expireTime}`;
            headers['Expires'] = currentDate.toGMTString();
            headers['Last-Modified'] = modDate.toGMTString();

            if (req.headers['if-modified-since'] && currentTime - modDate.getTime() < expireTime * 1000) {
                status = 304;
                content = '';
            } else {
                const fileHash = md5File.sync(url);
                headers['ETag'] = etag(fileHash);
            }
        }

        return {status: status, headers: headers, content: content};
    }
};