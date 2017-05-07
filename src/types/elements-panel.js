/**
 * @author https://github.com/acvetkov
 * @overview ElementsPanel
 */

import BaseType from './base-type';

export default class ElementsPanel extends BaseType {

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
