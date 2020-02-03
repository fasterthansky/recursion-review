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
      if (key === 'functions' || key === 'undefined') {
        continue;
      } else {
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + result + '}';
  }
  // test for a string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  return '' + obj;
};
