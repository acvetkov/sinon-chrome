/**
 * @author https://github.com/acvetkov
 * @overview SourcePanel
 */

import BaseType from './base-type';

export default class SourcePanel extends BaseType {

    /**
     * @param {StubsCache} stubs
     * @param {EventsCache} events
     * @param {PropsCache} props
     * @param {String} namespace
     */
    constructor(...args) {
        super(
            {
                methodsNames: ['createSidebarPane'],
                eventsNames: ['onSelectionChanged']
            },
            ...args
        );
    }
}
