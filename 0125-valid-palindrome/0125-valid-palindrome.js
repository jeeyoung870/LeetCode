/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    // O(n/2)

    if(s.trim().length === 0){
        return true;
    }
    
    // \W ==  not [A-Za-z0-9_] 
    var replacedStr = s.toLowerCase().replace(/\W/g, '').replace('_', '');
    console.log(replacedStr);
    
    const loop = Math.floor(replacedStr.length/2);
    const len = replacedStr.length;
    
    for (var i=0; i<loop; i++) {
        //console.log(replacedStr[i] , replacedStr[len-i-1]);
        if (replacedStr[i] !== replacedStr[len-i-1]) {
            return false;
        }
    }
    return true;
    
};