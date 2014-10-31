/**
 * Test runner for popup page
 * Using phantomjs to render page and execute scripts
 *
 * Example: phantomjs test/ui/run.js
 */

var node_modules = '../../node_modules/';
phantom.injectJs(node_modules + 'mocha/mocha.js');
phantom.injectJs(node_modules + 'sinon-chrome/src/phantom-tweaks.js');
mocha.setup({ui: 'bdd', reporter: 'spec', bail: true});
phantom.injectJs('popup.test.js');
mocha.run(function(failures){
  console.log(failures)
  phantom.exit();
});