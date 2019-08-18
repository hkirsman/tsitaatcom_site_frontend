/**
 * Helper function to filter objects.
 *
 * We are using this to clean up query in pages/quotes/authors.js.
 */
export default function filterObject(object, allowed) {
  return Object.keys(object)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = object[key];
      return obj;
    }, {});
}
