/**
Search through a bunch of documents for a word and 
return all the documents that contain that word  
Given a list o f millions o f documents, how would you find 
all documents that contain a list o f words? 
The words can appear in any order, but they must be complete words. 
That is, "book" does not match "bookkeeper."
**/

//https://www.toptal.com/algorithms/needle-in-a-haystack-a-nifty-large-scale-text-search-algorithm

//Implement add and search methods with an index.  


// Step 1
// This hash table would map from a word to a list of 
// the documents that contain that word.

{
  "books": {
    doc1: true,
    doc2: true
  },
  "many": {
    doc1: true,
    doc3: true
  }
}

//To search for "many books", find the intersection on the values for
// "books" and "many" 

/** Step 2: Scaling
  - With millions of documents, need to divide up documents across machines
  - Depending on number of possible words and repetition of words, may
    not be able to fit the full hash table

  - How to divide up hash table?
    - each machine contains full document list by keyword
    - each machine contains keyword mapping for subset of documents

  - Need to process on one machine and push results to other machines
  - Which machine holds which piece of data?
**/


/**
  SOLUTION:
  - divide up the words alphabetically by keyword, 
    such that each machine controls a range of words (e.g., "after"through "apple").

  -  implement a simple algorithm in which we iterate through the keywords alphabetically, storing as much data as possible on one machine.
  When that machine is full, we can move to the next machine.
    - pro: lookup tabl small
    - con: if new documents or words are added, we may need to perform
     an expensive shift of keywords.

  - To find all the documents that match a list of strings, we would first 
  sort the list and then send each machine a lookup request 
  for the strings that the machine owns. 
  For example, if our string is "after builds boat amaze banana",machine 1 
  would get a lookup request for {"after", "amaze"}.

  Machine 1 looks up the documents containing "after " and "amaze;' 
  and performs an intersection on these document lists.

  Machine 3 does the same for {"banana", "boat", "builds"}, and intersects their lists.

  In the final step, the initial machine would do an intersection 
  on the results from Machine 1and Machine 3.
**/

// 1: "Once upon a time a guy said hello to a glass of apple cider."
// 2: "Hello apple cider is my fav drink"
// 3: "Apple cider is tasty"

// search("apple") => [1, 2, 3]
// serach("hello apple cider"] => [1, 2]]


// // Step 1: Build hash table that maps each word to a list of documents
// {
//     "hello": {
//         doc1: 1,
//         doc2: 1
//     },
//     "apple": {
//         doc1: 1,
//         doc2: 1,
//         doc3: 1
//     }
// }

function normalizeWord(str) {
  return str.toLowerCase();
}

function Index() {
    this.storage = {};
}

Index.prototype.add = function(docId, content){
    var words = content.split(' '); // array of words 
    var word;
    var ourSet;
    
    for(var i = 0; i < words.length; i++){
        word = words[i];
        
        if(!this.storage[word]) {
            ourSet = new Set();
            this.storage[normalizeWord(word)] = ourSet.add(docId);
        } else {
            ourSet = this.storage[word];
            ourSet.add(docId); // set will not allow duplicate doc ids by definition
        }                 

    }
};

// search(target)
    // break up target into words 
    // for each word, look in hash table for documents that have that word => documents for all words
    // return the intersection of all the document sets  
Index.prototype.search = function(target){
    var words = target.split(' ');
    var word = normalizeWord(words[0]);
    var result;
    
    result = this.storage[word];
    for(var i = 1; i < words.length; i++) {
      word = normalizeWord(words[i]);
      result.intersect(this.storage[word]);
    }
    
    return result;
    
}



