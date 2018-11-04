const Twig = require('twig');
const fs = require('fs');
const mime = require('mime-types');
const twig = Twig.twig;
const etag = require('etag');
const md5File = require('md5-file');


module.exports = (req, res) => {
    switch (req.url) {
        case '/':
            const isProduction = req.headers.host === 'danwanderer.ru';
            const template = fs.readFileSync(`${ABSPATH}/views/index.twig`, {encoding: 'utf-8'});
            const html = twig({
                data: template,
                allowInlineIncludes: true
            }).render({
                isProduction: isProduction,
                hostname: req.headers.host.replace(/:\d+$/, ''),
                absPath: ABSPATH
            });
            let maxAge = 30 * 24 * 60 * 60;
            res.writeHead(200, {'Content-Type': 'text/html', 'Cache-Control': `private, max-age=${maxAge}, must-revalidate`});
            res.write(html);
            res.end();
            break;
        case '/mail':
            const isAjax = req.headers['x-requested-with'] && req.headers['x-requested-with'] === 'XMLHttpRequest';
            if (isAjax) {
                const striptags = require('striptags');
                const shell = require('shelljs');
                const {name, email, phone, message} = req.post;
                if (!name || !email || !phone || !message || !req.post['g-recaptcha-response'] || !shell.which('sendmail')) {
                    res.write(JSON.stringify({result: 0}));
                    res.end();
                }

                const from = 'robot@danwanderer.ru';
                const to = 'getingjagare@gmail.com';
                const subject = `Заявка: ${striptags(name)}`;
                const fullMessage = `You have received a new message from your website contact form.\nHere are the details:\nName: ${striptags(name)}\nEmail: ${striptags(email)}\nPhone: ${striptags(phone)}\nMessage:\n${striptags(message)}`;
                shell.exec(`echo -e "From: ${from}\r\nSubject: ${subject}\r\nTo: ${to}\r\n\r\n ${fullMessage}" | sendmail -f ${from} ${to}`);
                res.write(JSON.stringify({result: 1}));
                res.end();
            }
            break;
        default:
            const url = `${ABSPATH}${req.url}`.replace(/\?.*$/, '');
            if (fs.existsSync(url)) {
                let headers = {'Content-Type': mime.lookup(url)};
                if (/\.(js|css|woff\d*|ttf|eot|jpe?g|gif|svg|png|ico)$/.test(url)) {
                    let currentDate = new Date();
                    const currentTime = currentDate.getTime();
                    const expireTime = 30 * 24 * 60 * 60;
                    currentDate.setTime(currentTime + expireTime * 1000);

                    let modTime = fs.statSync(url).mtime;
                    let modDate = new Date(modTime);
                    headers['Cache-Control'] = expireTime;
                    headers['Expires'] = currentDate.toGMTString();
                    headers['Last-Modified'] = modDate.toGMTString();

                    const fileHash = md5File.sync(url);
                    headers['ETag'] = etag(fileHash);
                }
                res.writeHead(200, headers);
                res.write(fs.readFileSync(url), {encoding: 'utf-8'});
                res.end();
            } else {
                const template = fs.readFileSync(`${ABSPATH}/views/errors/404.twig`, {encoding: 'utf-8'});
                const html = twig({data: template}).render({ version: process.version });
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write(html);
                res.end();
            }
            break;
    }
};