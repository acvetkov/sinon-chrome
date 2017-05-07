/**
 * @author https://github.com/acvetkov
 * @overview ContentSettings
 */

import BaseType from './base-type';

export default class ContentSettings extends BaseType {

    /**
     * @param {StubsCache} stubs
     * @param {EventsCache} events
     * @param {PropsCache} props
     * @param {String} namespace
     */
    constructor(...args) {
        super(
            {
                methodsNames: ['get', 'set', 'clear', 'getResourceIdentifiers'],
            },
            ...args
        );
    }
}
