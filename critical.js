const critical = require('critical');

/**
 * @see: https://github.com/addyosmani/critical
 */

critical.generate({
    // Your base directory
    base: __dirname + '/dist',

    inline: true,

    // HTML source file
    src: '/../src/critical/critical.html',

    // Your CSS Files (optional)
    css: ['main.css'],

    target: {
        css: 'critical.css',
        html: 'index-critical.html',
        uncritical: 'uncritical.css'
    },

    minify: true,
}, (err, res) => {
    console.log(res);
});