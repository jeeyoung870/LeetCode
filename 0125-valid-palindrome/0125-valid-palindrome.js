/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    // time complexity : O(n+n/2) ??
    // Space Complexity : O(n)
    
    // if(s.trim().length === 0){
    //     return true;
    // }

    // \W ==  not [A-Za-z0-9_] 
    var replacedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const loop = Math.floor(replacedStr.length/2);
    
    for (var i=0; i<loop; i++) {
        if (replacedStr[i] !== replacedStr[replacedStr.length-i-1] ) {
            return false;
        }
    }
    return true;
}