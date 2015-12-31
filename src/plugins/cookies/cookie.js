/**
 * @author acvetkov@yandex-team.ru
 * @overview Chrome cookie emulation class
 */

import URI from 'URIjs';

export default class ChromeCookie {

    constructor (details) {
        ChromeCookie.assertParams(details);
        this.details = details;
    }

    toString () {
        const domain = new URI(this.details.url).hostname();
        const data = {
            name: this.details.name || '',
            value: this.details.value || '',
            domain: domain,
            hostOnly: domain.charAt(0) !== '.',
            httpOnly: Boolean(this.details.httpOnly),
            secure: Boolean(this.details.secure),
            session: !Boolean(this.details.expirationDate),
            path: this.details.path || (new URI(this.details.url)).path()
        };
        if (this.details.expirationDate) {
            data.expirationDate = this.details.expirationDate;
        }
        return data;
    }

    /**
     * assert cookie params
     * @param {CookieDetails} details
     */
    static assertParams (details) {
        if (!details.url) {
            throw new Error('details.url required');
        }
    }
}
