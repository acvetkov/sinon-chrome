import _ from 'lodash';

import apiConfig from '../api/config.js';
import generateApi from '../chrome/index';

import EventsFactory from '../factory/events';
import StubsFactory from '../factory/stubs';
import PropsFactory from '../factory/property';
import Cache from '../factory/cache';

import CookiePlugin from '../plugins/cookies';

/**
 * Create chrome api mock
 * @returns {Object}
 */
export default function create() {
    return _.assign(generateApi(apiConfig), ChromeManager);
}

const ChromeManager = {

    /**
     * Install plugin
     * @param {Object} plugin
     * @param {Function} plugin.install
     */
    registerPlugin: function (plugin) {
        plugin.install(this);
    },

    /**
     * Reset mack data
     */
    reset: function () {
        EventsFactory.reset();
        StubsFactory.reset();
    },

    /**
     * Reset mock data and behaviour
     */
    flush: function () {
        Cache.flush();
        StubsFactory.flush();
        EventsFactory.flush();
        PropsFactory.flush();
    },

    /**
     * plugin list
     */
    plugins: {
        CookiePlugin
    }
};
