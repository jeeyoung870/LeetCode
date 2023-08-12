class Solution {
    
    public boolean isValid(String s) {
        
        if (s.length() % 2 != 0) {
            return false;
        }
        
        Map<Character, Character> charMap = new HashMap<>(3);
        charMap.put('(', ')');
        charMap.put('{', '}');
        charMap.put('[', ']');
        
        // char[] charArr = s.toCharArray();
        Stack<Character> keyStack = new Stack<>();
        
        for(int i=0; i < s.length(); i++) {
            // System.out.println("keyStack : "+keyStack);
            char ch = s.charAt(i);
            if( charMap.containsKey(ch) ) {
                keyStack.push(ch);
            } else {
                if(keyStack.size() == 0 || charMap.get(keyStack.pop()) != ch ){
                    return false;
                }
            }
        }
        return keyStack.size() == 0 ? true : false;
    }
}