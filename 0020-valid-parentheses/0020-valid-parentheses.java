class Solution {
    
    public boolean isValid(String s) {
        
        if (s.length() % 2 != 0) {
            return false;
        }
        
        Map<Character, Character> charMap = new HashMap<>(3);
        charMap.put('(', ')');
        charMap.put('{', '}');
        charMap.put('[', ']');
        
        char[] charArr = s.toCharArray();
        Stack<Character> keyStack = new Stack<>();
        
        for(int i=0; i < s.length(); i++) {
            // System.out.println("keyStack : "+keyStack);
            if( charMap.containsKey(charArr[i]) ) {
                keyStack.push(charArr[i]);
            } else {
                if(keyStack.size() == 0 || charMap.get(keyStack.pop()) != charArr[i]){
                    return false;
                }
            }
        }
        
        return keyStack.size() == 0 ? true : false;
    }
}