const routes = require('next-routes')

// Name   Page      Pattern
module.exports = routes()
    .add('tsitaadid/teemad', '/tsitaadid/teemad/:slug')
    .add('tsitaadid/autorid', '/tsitaadid/autorid/:slug')
