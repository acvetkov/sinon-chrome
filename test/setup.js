import chai from 'chai';
import sinon from 'sinon';

global.assert = chai.assert;
global.sinon = sinon;
global.sinon.assert.expose(global.assert, {prefix: ''});
