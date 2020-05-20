const facades = require('../../facades');
const Twig = require('twig');
const fs = require('fs');

/**
 * @type {module.Seo}
 */
module.exports = class Seo {

  constructor() {
      Twig.extendFunction('seo', function (str) {

          const request = facades.request();
          const url = request.url.replace(/\?.+$/, '');
          const templator = facades.templator();

          let seoData = {};

          if (fs.existsSync(`${facades.app().appPath}/seo.json`)) {

            seoData = fs.readFileSync(`${facades.app().appPath}/seo.json`, {encoding: 'utf-8'});

            seoData = JSON.parse(seoData);

            seoData = seoData[url] || {}

          }

          return templator.render('core/modules/seo/seo.twig', {seoData: seoData}, false);

      });
  }

};