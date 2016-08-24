import {isEmpty} from 'lodash';

export default class ChromeI18n {

    constructor (translations = {}) {
        this._translations = translations;
    }

    install (chrome) {
        const plugin = this;
        this.chrome = chrome;

        Object.defineProperty(this.chrome, 'i18n', {
            get: function () {
                return plugin;
            }
        });
    }

    getMessage (messageName, ...substitutions) {
        const {
            message = undefined,
            placeholders = {}
        } = this._translations[messageName] || {};

        if (isEmpty(substitutions) || isEmpty(placeholders)) {
            return String(message);
        }

        function setPlaceholder(ignored, name) {
            const {content} = placeholders[name] || {};

            if (!content) return undefined;

            const index = Math.max(parseInt(content.replace('$', ''), 10) - 1, 0);

            return substitutions[index];
        }

        return message.replace(/\$([\w-]+)\$/g, setPlaceholder);
    }

    getAcceptLanguages (callback = () => {}) {
        callback(['en-US', 'en', 'el', 'fr', 'it']);
    }

    getUILanguage () {
        return 'en-US';
    }

    detectLanguage (text = '', callback = () => {}) {
        callback('en-US');
    }
}
