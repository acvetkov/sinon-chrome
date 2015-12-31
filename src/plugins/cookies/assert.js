/**
 * @author acvetkov@yandex-team.ru
 * @overview cookies plugin assertation module
 */

import _ from 'lodash';

/**
 * assert chrome.cookies.get arguments
 * @param {CookieCriteria} details
 * @param {Function} callback
 * @throws TypeError
 */
export function assertGet(details, callback) {
    if (!_.isString(details.name)) {
        throwError('name');
    }

    if (!_.isString(details.url)) {
        throwError('url');
    }

    if (!_.isFunction(callback)) {
        throwError('callback');
    }
}

/**
 * assert chrome.cookie.getAll arguments
 * @param {AllCookieCriteria} details
 * @param {Function} callback
 */
export function assertGetAll(details, callback) {
    if (!_.isPlainObject(details)) {
        throwError('details');
    }
    if (!_.isFunction(callback)) {
        throwError('callback');
    }
}

/**
 * assert chrome.cookies.set
 * @param {AllCookieCriteria} details
 */
export function assertSet(details) {
    if (!_.isString(details.url)) {
        throwError('url');
    }
}

/**
 * throws type error
 * @param {String} argument
 */
function throwError(argument) {
    throw new TypeError(`${argument} required`);
}
