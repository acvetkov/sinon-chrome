var vm = require('vm');
var fs = require('fs');
var sinon = require('sinon');
var expect = require('chai').expect;
global.chrome = require('sinon-chrome'); // note `global` to have access in `runInThisContext`

// sources
vm.runInThisContext(fs.readFileSync('background.js'));

// tests
describe('background page test pack', function() {
    it('should retrieve current tab title', function(done) {
        getTitle(function(title) {
            expect(chrome.tabs.getCurrent.calledOnce).to.be.true;
            expect(title).to.equal('Google'); // `Google` is default response located in `data/tabs/getCurrent.json`
            done();
        });
    });
});