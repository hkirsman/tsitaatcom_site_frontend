# Tsitaat.com Front React

## Todo

1. Vasta FB'is viikingi tsitaadile ja lõpuks pane ka üles
1. Add Twitter to Footer
1. Beers for Siim
1. Refactor styles and markup.
1. Start using Webpack
1. Remove HTML from json and write logic into frontend. That said, remove dangerouslySetInnerHTML
1. Decrease the json payload - probably would need to change to Apollo as it only sends data
   that is needed. /tsitaatcom_json/top-100-quotes currently is 316kb.
1. How to set global variables for example for http://tsitaat.com.lndo.site/tsitaatcom_json
1. How to fix pages/quotes/authors.js - remove url switching logic and put into routes.js
1. 404 page is visually too big, just decrease height a bit would be enough for now.
1. Get rid of frontend/lib/isAuthorPage.js & frontend/lib/isAuthorListingPage.js etc.
   Was not able to use class functions inside getInitialProps().
1. Remove all different kinds of fonts like Muli and the custom local font
1. handle all kinds of weird urls like http://localhost:7777/tsitaadid/autorid/lennart_meri2
1. configure https://tsitaat.deploybot.com
1. Change old ip 212.47.217.129 to new 217.146.69.42
1. IP piirangud ssh'le tagasi pärast deployboti korda tegemist
1. Fix error in dev for allowing data-linkTarget="_self" in Page.js
1. Set up old domain for time-being
1. Create tsitaat.com company and pay the bills
1. Remove graphql and apollo for now ( git commit 13cd85f8f9cbbc807f52ff75139fc579f8d1119d )
1. On https://www.tsitaat.com/tsitaadid/autorid/h some authors have same names:
   Holmes, Wendell Oliver
   Holmes, Wendell Oliver
1. Some images have black border https://www.tsitaat.com/tsitaadid/autorid/max_jacob
1. Is components/ErrorMessage.js used?
