/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

'use strict';

import _ from 'lodash';

import apiConfig from '../api/config.json';
import {generateApi} from '../chrome/index';

import EventsFactory from '../factory/events';
import StubsFactory from '../factory/stubs';
import PropsFactory from '../factory/property';

/**
 * Create chrome api mock
 * @returns {Object}
 */
export function create() {
    return _.assign(generateApi(apiConfig), ChromeManager);
}

var ChromeManager = {

    /**
     * Reset mack data
     */
    reset: function () {
        EventsFactory.reset();
        StubsFactory.reset();
        PropsFactory.flush();
    },

    /**
     * Reset mock data and behaviour
     */
    flush: function () {
        EventsFactory.flush();
        StubsFactory.flush();
        PropsFactory.flush();
    }
};
