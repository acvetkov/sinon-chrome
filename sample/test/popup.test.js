var fs = require('fs');
var assert = require('chai').assert;
var sinon = require('sinon');
var chrome = require('sinon-chrome');
var jsdom = require("jsdom");

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
                chrome.runtime.sendMessage.yields([
                    {id: 1, title: 'tab 1'},
                    {id: 2, title: 'tab 2'}
                ]);
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
        chrome._reset();
        window.close();
    });

    it('should request tabs and render response on startup', function() {
        sinon.assert.calledOnce(chrome.runtime.sendMessage);
        var html = '<li><a href="#" data-id="1">tab 1</a></li><li><a href="#" data-id="2">tab 2</a></li>';
        assert(window.document.getElementById('tabs').innerHTML === html);
    });

});