/**
 * @author https://github.com/acvetkov
 * @overview Create api
 */

import {set, get, reduce, assign} from 'lodash';
import Stubs from './stub';
import Events from './events';
import Props from './props';
import Manager from './manager';
import {getAll} from '../utils/props';

import ChromeSettings from '../types/chrome-settings';
import ContentSettings from '../types/content-settings';
import ElementsPanel from '../types/elements-panel';
import SourcePanel from '../types/source-panel';
import StorageArea from '../types/storage-area';

const typeMap = {
    'types.ChromeSetting': ChromeSettings,
    'StorageArea': StorageArea,
    'SourcesPanel': SourcePanel,
    'ElementsPanel': ElementsPanel,
    'ContentSetting': ContentSettings
};

export default class Api {

    /**
     * @param {Array<Object>} config
     */
    constructor(config) {
        this.NS_RULE = /^(.+)\.(.+)$/;
        this.config = config;
        this.stubs = new Stubs();
        this.events = new Events();
        this.props = new Props();
        this.manager = new Manager(this.stubs, this.events, this.props);
    }

    /**
     * Create api stub
     * @returns {Object}
     */
    create() {
        const browserApi = reduce(this.config, (api, data) => {
            set(api, data.namespace, this.createInterface(data));
            return api;
        }, {});
        return assign({
            registerPlugin(plugin) {
                plugin.install(this);
            }
        }, browserApi, this.manager);
    }

    /**
     * @param {Object} data
     * @returns {Object}
     */
    createInterface(data) {
        const {functions = [], events = [], namespace} = data;
        const result = {};
        this.createFunctions(result, functions, namespace);
        this.createEvents(result, events, namespace);
        this.createProps(result, data);
        return result;
    }

    /**
     * @param {Object} obj
     * @param {Array<Object>} functions
     * @param {String} namespace
     * @returns {Object}
     */
    createFunctions(obj, functions, namespace) {
        const stubs = this.stubs;
        return reduce(functions, (result, func) => {
            Object.defineProperty(result, func.name, {
                get: function () {
                    return stubs.get(func.name, namespace);
                }
            });
            return obj;
        }, obj);
    }

    /**
     * @param {Object} obj
     * @param {Array<Object>} events
     * @param {String} namespace
     * @returns {Object}
     */
    createEvents(obj, events, namespace) {
        const ev = this.events;
        return reduce(events, (result, event) => {
            Object.defineProperty(result, event.name, {
                get: function () {
                    return ev.get(event.name, namespace);
                }
            });
            return obj;
        }, obj);
    }

    /**
     * @param {Object} obj
     * @param {Object} data
     * @returns {Object}
     */
    createProps(obj, data) {
        const namespace = data.namespace;
        const nsProps = getAll(data.properties || {});

        Object.keys(nsProps).forEach(key => {
            const value = nsProps[key];
            const matches = key.match(this.NS_RULE);

            let prop = key;
            let ns = namespace;
            let propNS = namespace;

            if (matches) {
                [, ns, prop] = matches;
                propNS = `${namespace}.${ns}`;
                const result = {};
                this.appendProp(result, prop, propNS, value);
                const localObject = get(obj, ns);
                if (!localObject) {
                    set(obj, ns, result);
                } else {
                    this.appendProp(localObject, prop, propNS, value);
                }
            } else {
                this.appendProp(obj, prop, namespace, value);
            }
        });

        return obj;
    }

    /**
     * @param {Object} obj
     * @param {String} prop
     * @param {String} namespace
     * @param {*} value
     * @returns {*}
     */
    appendProp(obj, prop, namespace, value) {
        if (value && value in typeMap) {
            const TypeClass = typeMap[value];
            const instance = new TypeClass(this.stubs, this.events, this.props, `${namespace}.${prop}`);
            return Object.defineProperty(obj, prop, {
                get() {
                    return instance.get();
                }
            });
        }
        const property = this.props.get(prop, `${namespace}`, value);
        Object.defineProperty(obj, prop, {
            get() {
                return property.current;
            },
            set(newValue) {
                property.current = newValue;
            }
        });
    }
}
