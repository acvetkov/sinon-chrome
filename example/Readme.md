## Chrome extension with unit-tests on PhantomJS
Simple chrome extension that does 3 things:  

1. displays number of opened tabs in button badge
2. displays titles of opened tabs in popup
3. retrieves and displays user IP in popup

### Run tests
````bash
$ npm test
# will call `node_modules/.bin/phantomjs test/run.js`

output:

  background page
    ✓ should display opened tabs in button badge
    ✓ should retrieve IP when `get-ip` message comes (40ms)

  popup page
    ✓ should request and display IP on start (46ms)
    ✓ should display opened tabs on start (40ms)
    ✓ should activate tab by click (40ms)

  5 passing (247ms)

````
