/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 The trick to many "parsing" questions like this is
using a stack to track which brackets/phrases/etc are "open" as you go.

 So next time you get a parsing question, one of your 
 first thoughts should be "use a stack!"

 In this problem we can realize our stack would only
hold '(' characters. So instead of storing each of 
those characters in a stack, we can store the number 
of items our stack would be holding.

 That gets us from O(n) space to O(1) space.

 It's pretty cool when you can replace a whole data structure 
 with a single integer :)
 *
 */

 var balancedParens = function(input){
   /* START SOLUTION */
   var stack = [];
   var pairs = {
     '{':'}',
     '[':']',
     '(':')'
   }

   for (var i = 0; i < input.length; i++){
     var chr = input[i];

     // if it's an open bracket
     if (pairs[chr]){
       stack.push(chr);

     // if it's a closing bracket
     } else if (chr === '}' || chr === ']' || chr === ')'){
      // then it must close the bracket at the top of the stack
       if (pairs[stack.pop()] !== chr){
         return false;
       }
     }
   }

   //return false if there are any unclosed brackets
   // otherwise, if all the brackets are matched, return true
   return stack.length === 0;
   /* END SOLUTION */
 };

 /* START SOLUTION */
 // For a sufficiently advanced class, being able to pass in a rules object
 // might make a good extra credit exercise.


 var advancedSolution = function(input, rules){

  var stack = [];

  rules = rules || {
     '[' : ']',
     '(' : ')',
     '{' : '}'
  };

   // create a filter object based on the given or default rule set
   var startChars  = Object.keys(rules); // ['[', '[', '{']
   var filterChars = startChars.reduce(function(m, i){ 
     return m+i+rules[i]; 
   }, "")

   for( var i = 0; i < input.length; i++ ){
     var c = input[i];

     if( filterChars.indexOf(c) < 0 ) {
       continue;
     } else if( startChars.indexOf(c) >= 0 ) {
       stack.push(c);
     } else if( c !== rules[stack.pop()] ){
       return false;
     }
   }

   return stack.length === 0;
 };
 /* END SOLUTION */

/**
Write a function that, given a sentence like the one above, 
along with the position of an opening parenthesis, 
finds the corresponding closing parenthesis.
**/

function getClosingParen(sentence, openingParenIndex) {
  var openNestedParens = 0;

  for (var position = openingParenIndex + 1; position < sentence.length; position++) {
      var char = sentence[position];

      if (char === '(') {
          openNestedParens += 1;
      } else if (char === ')') {
          if (openNestedParens === 0) {
              return position;
          } else {
              openNestedParens -= 1;
          }
      }
  }

  throw new Error('No closing parenthesis :(');
}
