/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    // OH MY GOD
    const numSet = new Set(nums);
    return nums.length !== numSet.size;

    
    // var sortedNums = nums.sort();
    // var isDuplicate = false;

    // for(var i=0; i<sortedNums.length-1; i++) {
    //     if(sortedNums[i] === sortedNums[i+1]) {
    //         isDuplicate = true;
    //         break;
    //     }
    // }
    // return isDuplicate;
};