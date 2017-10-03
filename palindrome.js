/**
  Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴
  You can assume the input string only contains lowercase letters.

  Examples:

  "civic" should return true
  "ivicc" should return true
  "civil" should return false
  "livci" should return false

  O(n) runtime solution

**/

var hasPalindromePermutation = function(str) {
  // track characters we've seen an odd number of times
  var unpairedCharacters = new Set();
  var char;

  for(var i = 0; i  str.length; i++) {
    char = str[i];

    if(unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  // the string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}; 

/**
  Given a string s, form a shortest palindrome by appending 
  characters at the start of the string. 
  Example: abab => babab. abcd => dcbabcd. ananab    => bananab.
**/
var shortestPalindrome = function() {

};


/**
  Given a string S, find the minimum number of cuts required to separate the string into a set of palindromes.
  Function to return the minimum splits in order to make a string 
  collection of Palindrome Ex: (abaa) -> aba | a
**/

var palindromeMinCut = function() {

};

/**
  Given a string S, find the longest palindromic substring.

  * Implement a function that finds the longest palindrome in a given string.
  * For example, in the string "My dad is a racecar athlete", the longest
  * palindrome is "a racecar a". Count whitespaces as valid characters. Other
  * palindromes in the above string include "dad", "ete", " dad " (including
  * whitespace on each side of dad).

**/
var longestPalindromicSubstring = function(string) {
  /* START SOLUTION */
  var length = string.length;
  var result = "";

  // Given starting center indices,
  // find the longest centered palindrome
  var centeredPalindrome = function(left, right) {
    while (left >= 0 && right < length && string[left] === string[right]) {
     left--;
     right++;
    }
    return string.slice(left+1, right);
  };  

  // Loop through the whole string,
  // checking for palindromes
  var oddPal, evenPal;
  for (var i = 0; i < length; i++) {
    oddPal = centeredPalindrome(i - 1, i + 1);
    evenPal = centeredPalindrome(i, i + 1);

    if (oddPal.length > result.length)
      result = oddPal;
    if (evenPal.length > result.length)
      result = evenPal;
    }

  return result;
  /* END SOLUTION */
};

/**
  Given a string S, find the longest palindromic substring.
**/

var longestPalindromicSubsequence = function() {

};







