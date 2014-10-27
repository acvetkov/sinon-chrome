/**
 * Tests for popup page
 * Using `jsdom` to load popup.html
 */
var fs = require('fs');
var sinon = require('sinon');
var chrome = require('sinon-chrome');
var jsdom = require('jsdom');
var assert = require('chai').assert;

var window;

describe('popup page', function() {

    beforeEach(function(done) {
        jsdom.env({
            // popup
            file: 'src/popup.html',
            // js source
            src: [fs.readFileSync('src/popup.js', 'utf-8')],
            created: function (errors, wnd) {
                if (errors) {
                    console.log(errors);
                    return done(true);
                }
                // attach `chrome` to window
                wnd.chrome = chrome;
                wnd.console = console;

                // fake tabs response
                chrome.runtime.sendMessage.yields(require('./data/tabs.query.json'));
            },
            done: function (errors, wnd) {
                if (errors) {
                    console.log(errors);
                    return done(true);
                }
                window = wnd;
                done();
            }
        });
    });

    afterEach(function() {
        chrome.reset();
        window.close();
    });

    it('should request tabs and render response on startup', function() {
        sinon.assert.calledOnce(chrome.runtime.sendMessage);
        var html = '<li><a href="#" data-id="42">Extensions</a></li><li><a href="#" data-id="81">Google</a></li>';
        assert.equal(window.document.getElementById('tabs').innerHTML, html);
    });

});