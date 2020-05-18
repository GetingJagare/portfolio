const mime = require('mime-types');
const fs = require('fs');
const etag = require('etag');
const md5File = require('md5-file');
const facades = require('../../facades');

/**
 * @type {module.FileLoader}
 */
module.exports = class FileLoader {
    constructor() {}

    load(filePath, isTemplate = false) {

        filePath = filePath.replace(/\?.*$/, '');

        if (!fs.existsSync(filePath)) {

            return isTemplate ? null : {headers: {}, loadedFile: null};

        }

        if (isTemplate) {
            return fs.readFileSync(filePath, {encoding: 'utf-8'});
        }

        const loadedFile = fs.readFileSync(filePath);

        let headers = {'Content-Type': mime.lookup(filePath)};

        if (/\.(js|css|woff\d*|ttf|eot|jpe?g|gif|svg|png|ico|webp)$/.test(filePath)) {
            let currentDate = new Date();
            const currentTime = currentDate.getTime();
            const expireTime = 30 * 24 * 60 * 60;
            currentDate.setTime(currentTime + expireTime * 1000);

            let modTime = fs.statSync(filePath).mtime;
            let modDate = new Date(modTime);
            headers['Cache-Control'] = `max-age=${expireTime}`;
            headers['Expires'] = currentDate.toGMTString();
            headers['Last-Modified'] = modDate.toGMTString();

            const fileHash = md5File.sync(filePath);
            headers['ETag'] = etag(fileHash);
        }

        return {headers: headers, loadedFile: loadedFile};

    }
};