const Twig = require('twig');
const fs = require('fs');
const mime = require('mime-types');
const twig = Twig.twig;


module.exports = (req, res, absPath) => {
    switch (req.url) {
        case '/':
            const isProduction = req.headers.host === 'danwanderer.ru';
            const template = fs.readFileSync(`${absPath}/views/index.twig`, {encoding: 'utf-8'});
            const html = twig({
                data: template,
                allowInlineIncludes: true,
            }).render({
                isProduction: isProduction,
                hostname: req.headers.host.replace(/:\d+$/, ''),
                absPath: absPath
            });
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(html);
            res.end();
            break;
        case '/mail':
            const isAjax = req.headers['x-requested-with'] && req.headers['x-requested-with'] === 'XMLHttpRequest';
            if (isAjax) {
                const mail = require(`${absPath}/mail`);
                if (!req.post.name || !req.post.email || !req.post.phone || !req.post.message || !req.post['g-recaptcha-response']) {
                    res.write(JSON.stringify({result: 0}));
                    res.end();
                }
                mail(
                    'getingjagare@gmail.com',
                    'robot@danwanderer.ru',
                    `Заявка: ${req.post.name}`,
                    `You have received a new message from your website contact form.\n\n
                    Here are the details:\n\nName: ${req.post.name}\n\n
                    Email: ${req.post.email}\n\nPhone: ${req.post.phone}\n\n
                    Message:\n${req.post.message}`
                );
                res.write(JSON.stringify({result: 1}));
                res.end();
            }
            break;
        default:
            const url = `${absPath}${req.url}`.replace(/\?.*$/, '');
            if (fs.existsSync(url)) {
                res.writeHead(200, {'Content-Type': mime.lookup(url)});
                res.write(fs.readFileSync(url), {encoding: 'utf-8'});
                res.end();
            } else {
                const template = fs.readFileSync(`${absPath}/views/errors/404.twig`, {encoding: 'utf-8'});
                const html = twig({data: template}).render({ version: process.version });
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write(html);
                res.end();
            }
            break;
    }
};