/**
 * @author https://github.com/acvetkov
 * @overview StorageArea
 */

import BaseType from './base-type';

export default class StorageArea extends BaseType {

    /**
     * @param {StubsCache} stubs
     * @param {EventsCache} events
     * @param {PropsCache} props
     * @param {String} namespace
     */
    constructor(...args) {
        super(
            {
                methodsNames: ['get', 'set', 'clear', 'getBytesInUse', 'remove'],
            },
            ...args
        );
    }
}
