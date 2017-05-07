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
        this.NS_RULE = /^([^.]+)(.*)\.([^.]+)$/;
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
            stubs.defineMethod(result, func.name, namespace);
            return obj; // TODO: hard to understand.
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
        const nsProps = getAll(data.properties || {}, namespace);

        Object.keys(nsProps).forEach(key => {
            const value = nsProps[key];

            let prop = key;
            let propNS = namespace;
            let mount = obj;

            const matches = key.match(this.NS_RULE);
            let rootNS, middleNS;
            [, rootNS, middleNS, prop] = matches;
            middleNS = middleNS.replace(/(?:^\.|\.$)/g,'');
            propNS = `${rootNS}.${middleNS}`;
            if (middleNS) {
                mount = get(obj, middleNS);
                if (!mount) {
                    mount = {};
                    set(obj, middleNS, mount);
                }
            }
            this.appendProp(mount, prop, propNS, value);
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
            const instance = new TypeClass(this.stubs, this.events, this.props, namespace);
            return Object.defineProperty(obj, prop, {
                get() {
                    return instance.get();
                },
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
