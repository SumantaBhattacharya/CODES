// Recursion Subset, Subsequence, String Questions
package Recursion_P;

public class SkipCharac {
    public static void main(String[] args) {
        
        System.out.println("removeCharIterative: "+removeCharIterative("BCA"));
        // System.out.println("skipOver_CharRecursive: " + skipOver_CharRecursive("baccad"));
        System.out.println("skipOver_CharRecursive: " + skipOver_CharRecursive("bccad"));
        System.out.println("skipOver_CharRecursive_2: " + skipOver_CharRecursive_2("baccad", new StringBuilder()));
        System.out.println("skipOver_CharRecursive_3: " + skipOver_CharRecursive_3("BCAACAD", ""));

        System.out.println("skipOver_StringRecursive: " + skipOver_StringRecursive("Bachelor of Computer Application and Bachelor of Arts"));
        
        System.out.println("skipOver_StringRecursive: " + skipOver_StringRecursively("apple"));
        
    }

    // given a string we have to remove a perticular sequence of the same character from it. for e.g., BCA is given if we removed all the "A's" from it we will have BC 

    // iteration method
    private static String removeCharIterative(String str) {

        StringBuilder result = new StringBuilder();

        for (int i = 0; i < str.length(); i++) {

            char charac = str.charAt(i);

            if (charac != 'A' && charac != 'a') {
                result.append(charac); // only when character is not equal to 'a' or 'A'
            }else{
                continue;
            }
        }

        return result.toString(); // if we have just returned the result it would have gave us an error about we cant result a string from a stringbuilder which is why we need to convert stringbuilder to string as we have explicitly mentioned we need to have return data of a string type
    }

    // i. pass the answer string in the argument ii. create the answer variable in function body (for every function call a new will be created) ii.i. baccad ➡(recursion call) b/accad ➡ b/ccad ➡ bc/cad ➡ bcc/ad ➡ bcc/d ➡ bccd/ it is how value pass from the base condition to the value top of the recursion 
    private static String skipOver_CharRecursive(String str) { // here we could have taken another argument to append the characters that are wanted with argument.
        
        // i. check if the str is empty
        if (str.isEmpty() == true) {
            return "";
        }

        // ii. if the character is of "a" or "A" then skip it 
        char charac = str.charAt(0);

        if (charac != 'A' && charac != 'a') {// skip over them
            // here we have to go the next string and contain the character of its passes the condition
            return charac + skipOver_CharRecursive(str.substring(1)); // The call stack stores characters during the forward pass, and they're processed in reverse order during the return
        }else{// charac == 'A' && charac == 'a' ➡ skip
            return skipOver_CharRecursive(str.substring(1));//bccad
        }

    }

    private static String skipOver_CharRecursive_2(String str, StringBuilder answer) {
        
        if (str.isEmpty() == true) {
            return answer.toString(); // coversion of string builder to string
        }

        char ch = str.charAt(0);

        if (ch == 'A' || ch == 'a') {// Use single quotes 'a' for char, double quotes "a" for String.
            return skipOver_CharRecursive_2(str.substring(1), answer);
        }else{
            return skipOver_CharRecursive_2(str.substring(1), answer.append(ch));
        }
    }

    private static String skipOver_CharRecursive_3(String str, String answer) { // answer is an empty string

        // base condition
        if (str.isEmpty()) {
            return answer;
        }

        char ch = str.charAt(0);

        if (ch != 'a' && ch != 'A') { // A char cannot be both 'A' AND 'a' at the same time! 
            return skipOver_CharRecursive_3(str.substring(1), answer + ch);
        }else{
        // SKIP characters that ARE 'a' or 'A'
            return skipOver_CharRecursive_3(str.substring(1), answer);
        }

    }

    private static String skipOver_StringRecursive(String str) {
        if (str.isEmpty()) {
            return "";
        }

        if (str.startsWith("Bachelor")) {
            return skipOver_StringRecursive(str.substring(8));
        }else{// it is processing by single character and going to the second character or element 
            return str.charAt(0) + skipOver_StringRecursive(str.substring(1));
        }
    }

    // time complexity is the size of the string
    private static String skipOver_StringRecursively(String str) { // it is designed to skip app but only when its not apple 
        if (str.isEmpty()) {
            return "";
        }

        if (str.startsWith("app") && !str.startsWith("apple")) {// skip App not Apple
            return skipOver_StringRecursively(str.substring(3));
        }else{// it is processing by single character and going to the second character or element 
            return str.charAt(0) + skipOver_StringRecursively(str.substring(1));
        }
    }
}

/*
When skipping characters:
- Use `!=` with `&&`  OR  Use `==` with `||`
*/

// substring() extracts a portion of a string starting from a given index and returns it as a new string. (creates an object and removes the first character)
/*
Level 0: Original string = "baccad"
         Process 'b' (index 0) → pass "accad" to next call
         
Level 1: String = "accad"
         Process 'a' (index 0) → pass "ccad" to next call
         
Level 2: String = "ccad"
         Process 'c' (index 0) → pass "cad" to next call
         
Level 3: String = "cad"
         Process 'c' (index 0) → pass "ad" to next call
         
Level 4: String = "ad"
         Process 'a' (index 0) → pass "d" to next call
         
Level 5: String = "d"
         Process 'd' (index 0) → pass "" to next call
         
Level 6: String = "" → BASE CASE!

e.g., bccad

Person 1 (has 'b'): "I'll add my 'b' to whatever Person 2 gives me"
Person 2 (has 'c'): "I'll add my 'c' to whatever Person 3 gives me"  
Person 3 (has 'c'): "I'll add my 'c' to whatever Person 4 gives me"
Person 4 (has 'a'): "I'll just pass through whatever Person 5 gives me"
Person 5 (has 'd'): "I'll add my 'd' to whatever Person 6 gives me"
Person 6 (no char): "Here's an empty string"

Now backward:
Person 6 → Person 5: ""
Person 5 → Person 4: "d"
Person 4 → Person 3: "d" (just pass)
Person 3 → Person 2: "cd"  ('c' + 'd')
Person 2 → Person 1: "ccd" ('c' + 'cd')
Person 1 → Final: "bccd" ('b' + 'ccd')
*/