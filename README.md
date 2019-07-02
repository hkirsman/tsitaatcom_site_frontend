# Tsitaat.com Front React

## Todo

1. Make pager work - add to all pages and fix previous going under 0, next probably going over max :)
1. Feels slow after pager implementation (or may be before that).
1. Refactor styles and markup.
1. Start using Webpack
1. Remove HTML from json and write logic into frontend. That said, remove dangerouslySetInnerHTML
1. Decrease the json payload - probably would need to change to Apollo as it only sends data
   that is needed. /tsitaatcom_json/top-100-quotes currently is 316kb.
1. How to set global variables for example for http://tsitaat.com.lndo.site/tsitaatcom_json
1. How to fix pages/quotes/authors.js
1. 404 page is too big, just decrease height a bit would be enough for now.
1. Get rid of frontend/lib/isAuthorPage.js & frontend/lib/isAuthorListingPage.js etc.
   Was not able to use class functions inside getInitialProps().
1. Remove all different kinds of fonts like Muli and the custom local font
1. http://localhost:7777/tsitaadid/teemad/inimese_eluiga shows underscore in title.
