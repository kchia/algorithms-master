var integerToArray = function(int) {

  if(!int) return [];

  var arr = int.toString().split('');

  for(var i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }

  return arr;

  // if browser supports map
  // return int.toString().split('').map(function(el) {
  //   return parseInt(el);
  // });
};