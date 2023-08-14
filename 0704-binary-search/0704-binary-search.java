class Solution {

    public int startIdx = 0 ;
    
    public int search(int[] nums, int target) {
        
        if( nums.length == 1 && nums[0] != target ){
            return -1;
        }

        int midIdx = nums.length/2;

        if(nums[midIdx] == target){
            return startIdx+midIdx;
        }
        else if(nums[midIdx] < target){
            startIdx += midIdx;
            return search(Arrays.copyOfRange(nums,midIdx,nums.length), target );
        } else /* if(nums[midIdx] > target) */{
            return search(Arrays.copyOfRange(nums,0,midIdx), target );
        }
    }
}