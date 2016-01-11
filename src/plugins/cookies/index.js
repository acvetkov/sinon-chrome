import _ from 'lodash';
import URI from 'URIjs';

import ChromeCookie from './cookie';
import ChromeEvent from '../../events';
import * as assert from './assert';

export default class ChromeCookies {

    constructor (state = []) {
        this._state = state;
        this.onChanged = new ChromeEvent();
    }

    /**
     * Install plugin
     * @param {Object} chrome
     */
    install (chrome) {
        const plugin = this;
        this.chrome = chrome;
        Object.defineProperty(this.chrome, 'cookies', {
            get: function () {
                return plugin;
            }
        });
    }

    /**
     * get cookie by criteria
     * @param {Object} details
     * @param {String} details.url
     * @param {String} details.name
     * @param {Function} callback
     */
    get (details, callback) {
        assert.get.apply(null, arguments);
        const params = {
            name: details.name,
            domain: new URI(details.url).hostname()
        };
        return this._invokeResult(_.findWhere(this._state, params) || null, callback);
    }

    /**
     * get all cookie list by criteria
     * @param {AllCookieCriteria} details
     * @param {Function} callback
     */
    getAll (details, callback) {
        assert.getAll.apply(this, arguments);
        const params = details;
        if (params.url) {
            params.domain = new URI(details.url).hostname();
            delete params.url;
        }
        return this._invokeResult(_.where(this._state, params), callback);
    }

    /**
     * set cookie value
     * @param {ChromeCookie} details
     * @param {Function} callback
     */
    set (details, callback) {
        assert.set.apply(null, arguments);
        const cookie = new ChromeCookie(details);
        const cookieInfo = cookie.info;
        this._appendCookie(cookieInfo);
        this._invokeResult(cookieInfo, callback);
    }

    /**
     * remove cookie
     * @param {Object} details
     * @param {String} details.url
     * @param {String} details.name
     * @param {Function} [callback]
     */
    remove (details, callback) {
        assert.remove.apply(null, arguments);
        const params = {
            name: details.name,
            domain: (new URI(details.url)).hostname()
        };
        const cookieInfo = _.findWhere(this._state, params);
        if (cookieInfo) {
            const index = _.findIndex(this._state, cookieInfo);
            this._state.splice(index, 1);
            this._triggerChange({cause: 'explicit', removed: true, cookie: cookieInfo});
        }
        this._invokeResult(details, callback);
    }

    /**
     * Append new cookie
     * @param {Object} cookieInfo
     * @private
     */
    _appendCookie (cookieInfo) {
        const index = _.findIndex(this._state, {
            name: cookieInfo.name,
            domain: cookieInfo.domain
        });
        if (index >= 0) {
            this._state.splice(index, 1, cookieInfo);
            this._triggerChange({cause: 'overwrite', removed: true, cookie: cookieInfo});
            this._triggerChange({cause: 'explicit', removed: false, cookie: cookieInfo});
        } else {
            this._state.push(cookieInfo);
            this._triggerChange({cause: 'explicit', removed: false, cookie: cookieInfo});
        }
    }

    /**
     * Trigger change event
     * @param {Object} changeInfo
     * @private
     */
    _triggerChange (changeInfo) {
        this.onChanged.triggerAsync(changeInfo);
    }

    /**
     * Async invoke result
     * @param {*} result
     * @param {Function} callback
     * @private
     */
    _invokeResult (result, callback) {
        if (_.isFunction(callback)) {
            setTimeout(() => callback(result), 0);
        }
    }

    /**
     * @returns {Object}
     */
    get state () {
        return this._state;
    }

    /**
     * @param {Object} value
     */
    set state (value) {
        this._state = value;
    }
}
