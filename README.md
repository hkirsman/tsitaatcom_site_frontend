# Tsitaat.com Front React

## Todo

1. Create users page
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
1. npm install express --save but do I need to uninstall the default server?
1. handle all kinds of weird urls like http://localhost:7777/tsitaadid/autorid/lennart_meri2
1. Where do you add in the build process:
npm install
npm run build
1. configure https://tsitaat.deploybot.com
1. https://new.tsitaat.com/tsitaadid/autorid/tommy_hellsten/14416 peaks näitama spetsiifilist lehte
