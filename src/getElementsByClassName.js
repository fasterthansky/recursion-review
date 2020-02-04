// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  //   results array for all elements with matching class
  var result = [];
//   function(document.body)

  var targetClassName = function(node){
//   if node class contains classname
    if (node.classList) {
     if (node.classList.contains(className)){
//   push body into results
      result.push(node);
      }
    }
//   if childnodes contains class className
    for(var i = 0; i < node.childNodes.length; i++){
//   push child into results
       targetClassName(node.childNodes[i]);
    }
  }
//   jumpstart the function
  targetClassName(document.body);
//   return results
  return result;
};
