const Twig = require('twig');
const fs = require('fs');
const mime = require('mime-types');
const twig = Twig.twig;


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
            res.writeHead(200, {'Content-Type': 'text/html'});
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
                const fullMessage = `You have received a new message from your website contact form.\n\n
                    Here are the details:\n\nName: ${striptags(name)}\n\n
                    Email: ${striptags(email)}\n\nPhone: ${striptags(phone)}\n\n
                    Message:\n${striptags(message)}`;
                shell.exec(`echo "From:${from}\nSubject:${subject}\nTo:${to} \n\n${fullMessage}" | sendmail -f ${from} -t ${to}`);
                res.write(JSON.stringify({result: 1}));
                res.end();
            }
            break;
        default:
            const url = `${ABSPATH}${req.url}`.replace(/\?.*$/, '');
            if (fs.existsSync(url)) {
                res.writeHead(200, {'Content-Type': mime.lookup(url)});
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