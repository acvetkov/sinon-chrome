/**
 * @author https://github.com/acvetkov
 * @overview Assertation module for chrome.cookies.* methods
 */

import isString from 'lodash/isString';
import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';

/**
 * assert chrome.cookies.get arguments
 * @param {CookieCriteria} details
 * @param {Function} callback
 * @throws TypeError
 */
export function get(details, callback) {
    if (!isString(details.name)) {
        throwError('name');
    }

    if (!isString(details.url)) {
        throwError('url');
    }

    if (!isFunction(callback)) {
        throwError('callback');
    }
}

/**
 * assert chrome.cookie.getAll arguments
 * @param {AllCookieCriteria} details
 * @param {Function} callback
 */
export function getAll(details, callback) {
    if (!isPlainObject(details)) {
        throwError('details');
    }
    if (!isFunction(callback)) {
        throwError('callback');
    }
}

/**
 * assert chrome.cookies.set arguments
 * @param {AllCookieCriteria} details
 */
export function set(details) {
    if (!isString(details.url)) {
        throwError('url');
    }
}

/**
 * assert chrome.cookies.remove arguments
 * @param {Object} details
 */
export function remove(details) {
    if (!isString(details.url)) {
        throwError('url');
    }
    if (!isString(details.name)) {
        throwError('name');
    }
}

/**
 * throws type error
 * @param {String} argument
 */
function throwError(argument) {
    throw new Error(`${argument} required`);
}
