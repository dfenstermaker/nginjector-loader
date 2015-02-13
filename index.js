var injector = require('angular-injector');

module.exports = function (input) {
  return injector.annotate(input);
};
