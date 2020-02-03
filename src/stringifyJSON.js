// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// test for each type of data and convert to a string
var stringifyJSON = function(obj) {
  let result = [];
  // test for an array first
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result.join(',') + ']';
  }
  // test for object
  if (typeof obj === 'object' && obj) {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    for (var key in obj) {
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      // var value =  obj[key].toString();
      // var keyName = key.toString();
      // // let objName = keyName + ': ' + value;
    }
    return '{' + result + '}';
  }
  // test for a string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // test for a number
  // test for number boolean, null, undefined

  //
  return '' + obj;

};
