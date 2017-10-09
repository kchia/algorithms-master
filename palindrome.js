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
  Approaches:
  - reverse string, append to the start (but does not give you shortest pal necessarily)
  - append reversed string to the end
    - 'abab' => 'ababbaba'
    - s + revS 
    - Find suffix(revS) which is longest prefix(s)
    - Remove the longest suffix from revS
    - revS - Lsuffix(revS) + s
    - KMP partial match table algorithm has O(n) time complexity
**/
var shortestPalindrome = function(str) {
  var reversed = str.split('').reverse().join('');

  var combined = str + '#' + reversed;
  
  var KMPTable = [];

  // build KMP table
    // i -> suffix bound
    // j -> prefix bound

  for(var j, i = 1; i < combined.length; i++) {

    //update prefix boundary to previous match position
    j = KMPTable[i - 1] || 0;

    //move to the last prefix boundary match
    while(j > 0 && combined.charAt(i) !== combined.charAt(j)) {
      j = KMPTable[j - 1];
    }

    //if prefix boundary matches suffix boundary,
    //increase prefix length 
    if(combined.charAt(i) === combined.charAt(j)) KMPTable[i] = j + 1;

  }

  console.log(KMPTable)
  return reversed.substring(0, str.length - KMPTable[combined.length - 1]) + str;
};

console.log(shortestPalindrome('ananab'));

/**
  Given a string S, find the minimum number of cuts required to
  separate the string into a set of palindromes.
  Function to return the minimum splits in order to make a string 
  collection of Palindrome Ex: (abaa) -> aba | a

  S is a palindrome if
  1. first and last characters match
  2. substring (excluding first and last chars) is a palindrome

  O(N^2)

  See how this dude set up the problem: https://www.youtube.com/watch?v=lDYIvtBVmgo
  use 'abcbm' example

  if(isPalindrome(i,j))
    T[i][j] = 0
  else
    T[i][j] = 1 + min(T[i][k], T[k+1][j]) where k = i...j-1
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

  O(n^2) solution

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
  Given a string S, find the longest palindromic subsequence.

  Dynamic Programming
  - Each problem can be divided into subproblems (e.g., as displayed in 
  a partial recursion tree)
  - There are overlapping subproblems which increase the time complexity
  of our solution (e.g., recomputing values)
  - To decrease overlapping of subproblems, we can save solution
  of previously solved subproblems

  The naive solution for this problem is to generate all subsequences of the 
  given sequence and find the longest palindromic subsequence. 
  This solution is exponential in term of time complexity. 

  Time Complexity of the implementation below is O(n^2) which is much 
  better than the worst case time complexity of Naive Recursive implementation.

  This problem is close to the Longest Common Subsequence (LCS) problem. 
  In fact, we can use LCS as a subroutine to solve this problem. 
  Following is the two step solution that uses LCS.
  1) Reverse the given sequence and store the reverse in another array say rev[0..n-1]
  2) LCS of the given sequence and rev[] will be the longest palindromic sequence.
  This solution is also a O(n^2) solution.
**/

var longestPalindromicSubsequence = function(sequence) {

  var length = sequence.length;
  var i, j, substringLength;

  // create a table to store results of subproblems
  var table = [];

  // strings of length 1 are palindrome of length 1
  for(i = 0, i < length; i ++) {
    table[i][i] = 1;

    // Build the table. Note that the lower diagonal values of table are
    // useless and not filled in the process. The values are filled in a
    // manner similar to Matrix Chain Multiplication DP solution (See
    // http://www.geeksforgeeks.org/archives/15553). 

    for(substringLength = 2; substringLength <= length; substringLength++) {

      for(i = 0; i < length - substringLength + 1; i++) {

        j = i + substringLength - 1;

        if(sequence.charAt(i) === sequence.charAt(j) && substringLength === 2) {
          table[i][j] = 2;
        } else if(sequence.charAt(i) === sequence.charAt(j)) {
          table[i][j] = table[i+1][j-1] + 2;
        } else {
          table[i][j] = Math.max(table[i][j-1], table[i+1][j]);
        }
      }
    }
  }

  return table[0][length - 1];

};







