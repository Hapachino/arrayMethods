// Native implementation
// arr.forEach(function callback(currentValue[, index[, array]]) {
//   //your iterator
// }[, thisArg]);

// Project implementation
// forEach(arr, function callback(currentValue[, index[, array]]) {
//   //your iterator
// }[, thisArg]);

/** 
 * executes a provided function once for each array element.
 * @param {array} arr the array to be iterated
 * @param {function(currentValue [, index[, array]]):undefined} callback callback for each array element
 * @param {this} context the context for the callback
 * 
 * @return {undefined} 
*/

function forEach(arr, callback, context) {
  for (let i = 0; i < arr.length; i++) {
    callback.call(context, arr[i], i, arr);
  }
}

module.exports = { forEach };