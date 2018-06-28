const $ = require( 'jquery' );
const req = require( 'request' );
require( 'bootstrap' );

// Expose certain elements so that our local files can use these variables.
// Exposing jQuery so we can use this within our js
window.jQuery = $;
window.$ = $;

// If we want to pass params through our routes, we can use the request module to get these url params in our js.
window.req = req;
