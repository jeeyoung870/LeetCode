class Solution {
    public int[] twoSum(int[] nums, int target) {
        
        Map<Integer, Integer> numMap = new HashMap<>(nums.length);

        for(int i=0; i<nums.length; i++){
            int num = nums[i];
            if( numMap.containsKey(num) ){
                return new int[] {numMap.get(num), i};
            } else{
                numMap.put(target-num, i);
            }
        }
        return null;
    }
}