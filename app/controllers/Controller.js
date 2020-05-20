module.exports = class Controller {

  constructor(name) {
      this.alias = name.replace(/Controller$/i, '').toLowerCase();
  }

  getAlias () {
      return this.alias;
  }

};