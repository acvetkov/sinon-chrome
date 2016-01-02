import ChromeCookie from '../../../src/plugins/cookies/cookie';

describe('plugin/cookie', function () {

    it('should create correct host-only cookie', function () {
        const cookie = new ChromeCookie({url: 'http://my-domain.com'});
        assert.deepEqual(cookie.info, {
            name: '',
            value: '',
            domain: 'my-domain.com',
            hostOnly: true,
            httpOnly: false,
            secure: false,
            session: true,
            path: '/'
        });
    });

    it('should create correct all domains cookie', function () {
        const cookie = new ChromeCookie({url: 'http://.my-domain.com'});
        assert.deepEqual(cookie.info, {
            name: '',
            value: '',
            domain: '.my-domain.com',
            hostOnly: false,
            httpOnly: false,
            secure: false,
            session: true,
            path: '/'
        });
    });

    it('should create correct all domains named cookie', function () {
        const cookie = new ChromeCookie({url: 'http://.my-domain.com', name: 'cook'});
        assert.deepEqual(cookie.info, {
            name: 'cook',
            value: '',
            domain: '.my-domain.com',
            hostOnly: false,
            httpOnly: false,
            secure: false,
            session: true,
            path: '/'
        });
    });

    it('should create correct all domains named cookie with value', function () {
        const cookie = new ChromeCookie({url: 'http://.my-domain.com', name: 'cook', value: 'val'});
        assert.deepEqual(cookie.info, {
            name: 'cook',
            value: 'val',
            domain: '.my-domain.com',
            hostOnly: false,
            httpOnly: false,
            secure: false,
            session: true,
            path: '/'
        });
    });

    it('should create correct all domains named cookie with value with custom path', function () {
        const cookie = new ChromeCookie({
            url: 'http://.my-domain.com',
            name: 'cook',
            value: 'val',
            path: '/data'
        });
        assert.deepEqual(cookie.info, {
            name: 'cook',
            value: 'val',
            domain: '.my-domain.com',
            hostOnly: false,
            httpOnly: false,
            secure: false,
            session: true,
            path: '/data'
        });
    });

    it('should create correct all domains named cookie with value with default domain path', function () {
        const cookie = new ChromeCookie({
            url: 'http://.my-domain.com/path/to',
            name: 'cook',
            value: 'val'
        });
        assert.deepEqual(cookie.info, {
            name: 'cook',
            value: 'val',
            domain: '.my-domain.com',
            hostOnly: false,
            httpOnly: false,
            secure: false,
            session: true,
            path: '/path/to'
        });
    });

    it('should create correct all domains named secure cookie with value with default domain path', function () {
        const cookie = new ChromeCookie({
            url: 'http://.my-domain.com',
            name: 'cook',
            value: 'val',
            secure: true
        });
        assert.deepEqual(cookie.info, {
            name: 'cook',
            value: 'val',
            domain: '.my-domain.com',
            hostOnly: false,
            httpOnly: false,
            secure: true,
            session: true,
            path: '/'
        });
    });

    it('should create correct all domains httpOnly named cookie', function () {
        const cookie = new ChromeCookie({
            url: 'http://.my-domain.com',
            name: 'cook',
            httpOnly: true
        });
        assert.deepEqual(cookie.info, {
            name: 'cook',
            value: '',
            domain: '.my-domain.com',
            hostOnly: false,
            httpOnly: true,
            secure: false,
            session: true,
            path: '/'
        });
    });

    it('should create correct all domains named cookie with expiration date', function () {
        const cookie = new ChromeCookie({
            url: 'http://.my-domain.com',
            name: 'cook',
            expirationDate: 1451579154.834
        });
        assert.deepEqual(cookie.info, {
            name: 'cook',
            value: '',
            domain: '.my-domain.com',
            hostOnly: false,
            httpOnly: false,
            secure: false,
            session: false,
            path: '/',
            expirationDate: 1451579154.834
        });
    });

    it('should throw exception if url is not passed', function () {
        function call() {
            return new ChromeCookie({name: 'data'});
        }

        assert.throws(call, 'details.url required', 'url is not passed');
    });
});
