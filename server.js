const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

/**
 * Search console is reporting some links broken so adding hard-coded redirects here.
 *
 * https://search.google.com/search-console/index/drilldown?resource_id=sc-domain:tsitaat.com&item_key=CAMYEyAE&utm_source=wnc_10030322&utm_medium=gamma&utm_campaign=wnc_10030322&utm_content=msg_100058679&hl=en
 */
const linkFixes = function(server) {
  const redirects = [
    { from: '/tsitaadid/teemad/abielu%20', to: '/tsitaadid/teemad/abielu' },
    { from: '/tsitaadid/teemad/s%C3%B6%C3%B6mine%20ja%20joomine', to: '/tsitaadid/teemad/söömine_ja_joomine' },
    { from: '/tsitaadid/autorid/antoine_de_saint-exup%C5%BDry', to: '/tsitaadid/autorid/antoine_de_saint-exupéry'}
  ];

  redirects.forEach(({ from, to, type = 301, method = 'get' }) => {
    server[method](from, (req, res) => {
      res.redirect(type, to)
    })
  });
};

// With express.
const express = require('express');
app.prepare().then(() => {
  const server = express();
  linkFixes(server);
  server.use(handler).listen(7777)
});
