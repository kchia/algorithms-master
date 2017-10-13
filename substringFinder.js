// How can you match substring of a string? 
var substringFinder = function(str, subStr){
  var idx = 0;
  var j = 0;

  for (var i = 0; i < str.length; i++){
    if(str[i] === subStr[j]){
      j++;	
    } else {
      j = 0;	
    }

    if(j === 0){
      idx = i;	
    } else if(j === subStr.length){
    	return idx;
    }	
  }

  return -1;	
};