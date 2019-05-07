/**
 * Split array to 3 equal groups.
 *
 * We use this to group authors and tags into 3 columns.
 *
 * @param input
 *   Input array.
 *
 * @returns {Array}
 */
export default function array_chunk_to_3_groups (input) {
  var arrays = [];
  arrays.push(input.splice(0, Math.ceil(input.length / 3)));
  arrays.push(input.splice(0, Math.ceil(input.length / 2)));
  arrays.push(input.splice(0, input.length));
  return arrays;
}
