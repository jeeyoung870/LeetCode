/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    // time complexity : O(n+n/2)
    // Space Complexity : O(n)
    
    if(s.trim().length === 0){
        return true;
    }
    
    // \W ==  not [A-Za-z0-9_] 
    var replacedStr = s.toLowerCase().replace(/\W|_/g, '');
    //console.log(replacedStr);
    
    const loop = Math.floor(replacedStr.length/2);
    const len = replacedStr.length;
    
    for (var i=0; i<loop; i++) {
        if (replacedStr[i] !== replacedStr[len-i-1]) {
            return false;
        }
    }
    return true;
    
};