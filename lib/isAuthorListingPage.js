// @todo: This should really be in pages/quotes/authors.js but could not find a way to put it into the class.
export default function isAuthorListingPage(query) {
  return query.author_name.length === 1;
}
