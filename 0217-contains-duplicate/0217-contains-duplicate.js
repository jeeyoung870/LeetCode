/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // this sucks
    numarr = nums;
    var isDuplicate = false;
    
    for(var i=nums.length-1; i>0; i--) {
        var n = numarr[i];
        numarr.pop();   // delete one element from the back
        if (numarr.includes(n)) {
            isDuplicate = true;
            break;
        }
    }
    return isDuplicate;
};