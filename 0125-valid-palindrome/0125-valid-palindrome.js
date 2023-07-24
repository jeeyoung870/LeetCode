/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    // \W ==  not [A-Za-z0-9_] 
    var replacedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    return replacedStr === [...replacedStr].reverse().join('')
}