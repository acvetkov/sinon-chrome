import {isEmpty, flatten} from 'lodash';

export default class ChromeI18n {
    /**
     * @constructor
     * @param {Object} translations
     */
    constructor(translations = {}) {
        this._translations = translations;
    }

    /**
     * Install plugin
     * @param {Object} chrome
     */
    install(chrome) {
        const plugin = this;
        this.chrome = chrome;

        Object.defineProperty(this.chrome, 'i18n', {
            get: function () {
                return plugin;
            }
        });
    }

    /**
     * Get message by name and apply provided substitutions
     * @param {String} messageName
     * @param {Array} substitutions
     * @returns {String}
     */
    getMessage(messageName, ...substitutions) {
        const {
            message = undefined,
            placeholders = {}
        } = this._translations[messageName] || {};

        const flattenSubstitutions = flatten(substitutions);

        if (isEmpty(flattenSubstitutions) || isEmpty(placeholders)) {
            return String(message);
        }

        return message.replace(/\$([\w-]+)\$/g, (ignored, name) => {
            const {content} = placeholders[name] || {};

            if (!content) {
                return undefined;
            }

            const index = Math.max(parseInt(content.replace('$', ''), 10) - 1, 0);

            return flattenSubstitutions[index];
        });
    }

    /**
     * Get accept-languages from the browser
     * @param {Function} callback
     */
    getAcceptLanguages(callback = () => {}) {
        callback(['en-US', 'en', 'el', 'fr', 'it']);
    }

    /**
     * Get the browser UI language of the browser
     * @returns {String}
     */
    getUILanguage() {
        return 'en-US';
    }

    /**
     * Detect language from a given string
     * @param {String} text
     * @param {Function} callback
     */
    detectLanguage(text = '', callback = () => {}) {
        callback('en-US');
    }
}
