/**
 * @author https://github.com/acvetkov
 * @overview types#ChromeSettings
 */

import BaseType from './base-type';

export default class ChromeSettings extends BaseType {

    /**
     * @param {StubsCache} stubs
     * @param {EventsCache} events
     * @param {PropsCache} props
     * @param {String} namespace
     */
    constructor(...args) {
        super(
            {
                methodsNames: ['get', 'set', 'clear'],
                eventsNames: ['onChange']
            },
            ...args
        );
    }
}
