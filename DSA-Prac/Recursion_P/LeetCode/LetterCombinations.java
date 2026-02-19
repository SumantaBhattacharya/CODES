import java.util.ArrayList;
import java.util.List;

public class LetterCombinations {
    /* https://leetcode.com/problems/letter-combinations-of-a-phone-number/
    Letter Combinations of a Phone Number
    Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
    A mapping of digits to letters (just like on the telephone buttons) is given below. 
    Note that 1 does not map to any letters.
    2 → "abc"
    3 → "def"
    4 → "ghi"
    5 → "jkl"
    6 → "mno"
    7 → "pqrs"
    8 → "tuv"
    9 → "wxyz"

    Note: LeetCode's environment automatically imports java.util.*;
    */

    // A static method (main) CANNOT directly call a non-static method!
    public static void main(String[] args) {
        // The Input is GIVEN as a String: LeetCode explicitly says: String digits
        String digits = "23";
        System.out.println(letterCombinations(digits));
    }

    // LeetCode expects the return type to be List<String>
    public static List<String> letterCombinations(String digits) {
        
        if (digits.isEmpty() == true) {
            return new ArrayList<>();
        }

        // Interface type (List) can reassign to Any List implementation
        List<String> result = new ArrayList<>();
        // '1' is NOT in digits (problem says digits 2-9 only)
        // 1 does not map to any letters. given in the question. Keys are consecutive integers 2-9 
        String[] mapping = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        letterCombinations_Helper(digits, 0, "", result, mapping);
        return result;

    }

    // Time complexity: O(3ⁿ) or O(4ⁿ) depending on digits, O(4ⁿ) as the worst case
    private static void letterCombinations_Helper(
        String digits, 
        int idx, 
        String combinations, 
        List<String> result, 
        String[] mapping) 
    {

        // Base case
        if (idx == digits.length()) {
            // each time we hit the base case we are adding that combination into the result.
            result.add(combinations);
            return;
        }

        // Get the set of letters corresponding to the current digit
        // int digit = digits.charAt(idx) - '0'; // - '0' to get the integer value (0-n) of the character
        // as the digits is string we need to convert it to integer in order to get the digit from the mapping array
        // idx = 0, ch = '2', digit = 2, letters = "abc"
        // idx = 1, ch = '3', digit = 3, letters = "def"
        char ch = digits.charAt(idx); // get the character at the index
        // In computers, characters are stored as numbers. '0' is stored as 48, '1' as 49, etc. So, '2' - '0' = 50 - 48 = 2. then '3' - '0' = 51 - 48 = 3 
        // subtracting the ASCII value of '0' (48) from any digit character gives you its integer value - this works ONLY for digits '0' through '9'
        // int digit = ch - '0'; // converts a character digit to an integer digit
        // int digit = Character.getNumericValue(digits.charAt(idx));
        int digit = Character.getNumericValue(ch);// Array wants INTEGER keys thats is why we need to convert

        // digit is index
        // create a direct 1-to-1 mapping
        // String letters = mapping[digit-1]; // -1 because the mapping starts at index 1 for digit '2' → offset = -1. 0-1 is 0, 1-1 is 0, 2-1 be 1, 3-1 be 2 and so on like this 
        String letters = mapping[digit]; // get the strings of the digit, String is an OBJECT

        // Recursively call the helper for each letter in the current digit's mapping
        for (int i = 0; i < letters.length(); i++) {
            // Each recursive call builds ONE complete combination by adding ONE letter at a time with the fixed current letter
            // In recursion, never modify the original variable - always pass the calculation
            letterCombinations_Helper(digits, idx+1, combinations + letters.charAt(i), result, mapping);
        }
    }
}

/*
a, 
ad, ae, af
b
bd, be, bf
c
cd, ce, cf

Alternative Approach
String[] mapping = {"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
 int ch = digits.charAt(idx)
 int digit = ch - '0';
 String letters = mapping[digit-2]; // -2 because the mapping array starts from 0 and the digits starts from 2
*/