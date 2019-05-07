const routes = require('next-routes')

// Name   Page      Pattern
module.exports = routes()
    .add('tsitaadid/teemad', '/tsitaadid/teemad/:slug')
    // .add('tsitaadid/autorid/autorinimi', '/tsitaadid/autorid/:author_name', 'tsitaadid/autorid')
    // .add('tsitaadid/autorid/autorinimi/tsitaadi-id', '/tsitaadid/autorid/:author_name/:quote_id', 'tsitaadid/autorid')
    // Only find pages that with first character of author last name eg '/tsitaadid/autorid/e'
    .add('quotes/authors/%author_last_name_first_char', '/tsitaadid/autorid/(\\w{1})', 'quotes/authors')
    .add('quotes/authors/%author_name', '/tsitaadid/autorid/:author_name/:quote_id?', 'quotes/author-quotes')
    // .add('quotes/authors/%author_last_name_first_char', '/tsitaadid/autorid/:author_last_name_first_char*', 'quotes/authors')
