/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length != t.length) {
      return false;
    }

    // 2nd
    var s_arr = [...s].sort();
    var t_arr = [...t].sort();
    
    return JSON.stringify(s_arr) === JSON.stringify(t_arr) ;


};