const routes = require('next-routes')

// Name   Page      Pattern
module.exports = routes()
    .add('quotes/tags/%tag_first_char', '/tsitaadid/teemad/(\\w{1})', '/quotes/tags')
    // @todo: I would like to have separate route for /tsitaadid/autorid/a paths but didn't get š working.
    .add('quotes/authors/', '/tsitaadid/autorid/:author_name/:quote_id?', 'quotes/authors')
    // .add('quotes/authors/%author_last_name_first_char', '/tsitaadid/autorid/:author_last_name_first_char*', 'quotes/authors')
