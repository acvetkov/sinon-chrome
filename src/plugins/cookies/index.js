/**
 * @author acvetkov@yandex-team.ru
 * @overview Cookie plugin
 */

import _ from 'lodash';
import URI from 'URIjs';
import { assertGet, assertGetAll } from './assert';

export default class ChromeCookies {

    constructor (state = {}) {
        this._state = state;
    }

    /**
     * Install plugin
     * @param {Object} chrome
     */
    install (chrome) {
        const plugin = this;
        Object.defineProperty(chrome, 'cookies', {
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
        assertGet.apply(null, arguments);
        const params = {
            name: details.name,
            domain: new URI(details.url).hostname()
        };
        return callback(_.findWhere(this._state, params) || null);
    }

    /**
     * get all cookie list by criteria
     * @param {AllCookieCriteria} details
     * @param {Function} callback
     */
    getAll (details, callback) {
        assertGetAll.apply(this, arguments);
        const params = details;
        if (params.url) {
            params.domain = new URI(details.url).hostname();
            delete params.url;
        }
        return callback(_.where(this._state, params));
    }

    set (details, callback) {

    }

    remove (details, callback) {

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
