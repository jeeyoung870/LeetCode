class Solution {
    public int maxProfit(int[] prices) {
        if(prices.length<=1) {
            return 0;
        }

        int maxProfit = 0;
        List<Integer> buyIdx = new ArrayList<>(); 
        buyIdx.add(0);
        
        for(int i=1; i<prices.length; i++){
            int num = prices[i];
            // System.out.println("buyIdx : "+buyIdx);
            // System.out.println("current num : "+num);
            int size = buyIdx.size();
            boolean isAdded = false;
            int lastBuyIdx = buyIdx.get(buyIdx.size()-1);
            for(int j=0; j<size; j++) {
                int bIdx = buyIdx.get(j);
                int buyPrice = prices[bIdx];

                // System.out.println("buyPrice : "+buyPrice);
                // System.out.println("maxProfit : "+maxProfit);
                if(  num-buyPrice > maxProfit ) {
                    maxProfit = num-buyPrice;
                } 
                else if( num-buyPrice < maxProfit && num < prices[lastBuyIdx] && !isAdded ) {
                    // System.out.println("add buyIdx of "+prices[i]);
                    buyIdx.add(i);
                    isAdded = true;
                }
            }
        }

        return maxProfit;
    }
}