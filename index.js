var injector = require('angular-injector');

module.exports = function (input) {
  this.cacheable && this.cacheable();
  return injector.annotate(input);
};
