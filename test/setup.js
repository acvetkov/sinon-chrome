/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

var chai = require('chai');

global.assert = chai.assert;
global.sinon = require('sinon');
global.sinon.assert.expose(global.assert, {prefix: ''});
