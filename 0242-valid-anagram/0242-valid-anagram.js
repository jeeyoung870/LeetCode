/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 1st
    if(s.length != t.length) {
      return false;
    }

    var isan = true;

    for (var letter of s) {
      var idx = t.indexOf(letter);
      if(0 > idx) { 
        isan = false;
        break;
      } else {
        t = t.replace(t[idx], '');
      }

    }
    return isan;
};