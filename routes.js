const routes = require('next-routes');

// Name   Page      Pattern
module.exports = routes()
    .add('quotes/tags/', '/tsitaadid/teemad/:tag', '/quotes/tags')
    // @todo: I would like to have separate route for /tsitaadid/autorid/a paths but didn't get š working.
    .add('quotes/authors/', '/tsitaadid/autorid/:author_name/:quote_id?', 'quotes/authors')
    .add('quotes/latest-quotes', '/tsitaadid/viimati-lisatud', 'quotes/latest')
    .add('quotes/top-100', '/tsitaadid/top-100-tsitaadid', 'quotes/top-100')
    .add('quote_shortcut', '/:quote_id([0-9]*)', 'quote_shortcut');
