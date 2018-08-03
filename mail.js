const fs = require('fs');
const sendmail = require('sendmail')({
    silent: true,
    /*dkim: {
        privateKey: fs.readFileSync('./dkim-private.pem', 'utf8'),
        keySelector: 'mydomainkey'
    }*/
});

module.exports = (from, to, subject, message, res) => {
    sendmail({
        from: from,
        to: to,
        subject: subject,
        html: message,
    }, function(err, reply) {
        res.write(JSON.stringify({result: !err ? 1 : 0}));
        res.end();
    });
};