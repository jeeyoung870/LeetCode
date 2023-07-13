/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */



var mergeAlternately =   function(word1, word2) {

    var merged = '';
    while(word1.length !== 0 && word2.length !== 0) { 
        merged += (word1[0] + word2[0]);
        word1 = word1.slice(1);
        word2 = word2.slice(1);
    }
    merged += (word1+word2);
  
    return merged;
};


