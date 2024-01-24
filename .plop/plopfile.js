const component = require('./components/index.ts');

// Add here more generators
module.exports = function (plop) {
  plop.setGenerator('component', component);
};