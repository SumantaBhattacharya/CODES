package Recursion_P;

public class printPermutations {

    public static void main(String[] args) {
        printAllPermutations("abc");
    }

    // Qs. Print all permutations of a string
    public static void printAllPermutations(String str) { // "abc"
        // all possible combinations of letters - abc, acb, bac, bca, cab, cba
        printAllPermutations_Helper(str, "");
    }

    private static void printAllPermutations_Helper(String str, String permutation) {

        // Base case
        if (str.isEmpty()) {
            System.out.println(permutation);
            return;
        }

        // logic
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i); // a,b,c
            // This removes the character at position i
            String newStr = str.substring(0, i) + str.substring(i + 1, str.length());
            // System.out.println("newStr:" + newStr); // bc, c, "", b, "", ac, c, "", a, "", ab, b, "", a, ""
            printAllPermutations_Helper(newStr, permutation + ch); // ab, ac, ba, bc, ca, cb + the characters that is first letter of newString that is string which is added to the permutation
        }

    }
}

/*
    Formula: n! where n = length
    "abc" (n=3) → 3! = 3×2×1 = 6 permutations

    time complexity is O(n!) as for every character we are making n recursive calls so for n characters we will have n^n recursive calls


    Fix 'a' → Permute "bc" → abc, acb
    Fix 'b' → Permute "ac" → bac, bca  
    Fix 'c' → Permute "ab" → cab, cba

    Choose a character to be in the current position
    Recurse with the remaining characters
    Backtrack and try another character

    observation
    The pattern bc, c, "", b, "" shows:
    Path 1: "abc" → "bc" → "c" → "" → "abc"
    Path 2: "abc" → "bc" → "b" → "" → "acb"

    For "abc", here's what's happening:

    Level 0: Start with "abc"
    Pick 'a' → newStr = "bc"
    Pick 'b' → newStr = "ac"
    Pick 'c' → newStr = "ab"
    
    Level 1: For each newStr:
    From "bc": Pick 'b' → "c", Pick 'c' → "b"
    From "ac": Pick 'a' → "c", Pick 'c' → "a"
    From "ab": Pick 'a' → "b", Pick 'b' → "a"
    
    Level 2: Single characters:
    From "c": Pick 'c' → ""
    From "b": Pick 'b' → ""
    From "a": Pick 'a' → ""

    dry run
    i=0: ch = 'a' 
    newStr = "abc".substring(0,0) + "abc".substring(1, rest) = "" + "bc" = "bc"
    if the biginning index and ending index is the same then the character is removed
    printAllPermutations_Helper("bc", "a") - branch 1

    str = "bc", permutation = "a"
    Repeat function call

    i=0: ch='b'
    newStr = "bc".substring(0,0) + "bc".substring(1, rest) = "" + "c" = "c"
    if the biginning index and ending index is the same then the character is removed
    printAllPermutations_Helper("c", "ab")
    permutation = 'a' + 'b' = "ab" - branch 1.1

    str = "c", permutation = "ab"
    Repeat function call

    i=0: ch='c'
    newStr = "c".substring(0,0) + "c".substring(1, rest) = "" + "" = ""
    if the biginning index and ending index is the same then the character is removed
    printAllPermutations_Helper("", "abc")
    permutation = "ab" + 'c' = "abc" - branch 1.1.1

    now str is empty base case is hit and the "abc" is printed

    i=1: ch='c'
    newStr = "bc".substring(0,1) + "bc".substring(2, rest) = "b" + "" = "b"
    i+1 where i value is 1 resulting to 2
    inclusive of 0 that is b and exclusive of 1 that c
    printAllPermutations_Helper("b", "ac")
    permutation = 'a' + 'c'  = "ac" - branch 1.2

    str = "b", permutation = "ac"
    Repeat function call

    i=0: ch='b'
    newStr = "b".substring(0,0) + "b".substring(1, rest) = "" + "" = ""
    if the biginning index and ending index is the same then the character is removed
    printAllPermutations_Helper("", "acb")
    permutation = "ac" + 'b' = "acb" - branch 1.2.1

    now str is empty base case is hit and the "acb" is printed

    i=1: ch = 'b' 
    newStr = "abc".substring(0,1) + "abc".substring(2, rest) = "a" + "c" = "ac"
    beginning is 0 and ending is exclusive of 1 means 'a'
    The permutation string gets "refreshed" as each recursive call has its own copy
    printAllPermutations_Helper("ac", "b") - branch 2

    i=0: ch = 'a'
    newStr = "ac".substring(0,0) + "ac".substring(1, rest) = "" + "c" = "c"
    if the biginning index and ending index is the same then the character is removed
    printAllPermutations_Helper("c", "ba")
    permutation = 'b' + 'a' = "ba" - branch 2.1

    str = "c", permutation = "ba"
    Repeat function call

    i=0: ch='c'
    newStr = "c".substring(0,0) + "c".substring(1, rest) = "" + "" = ""
    if the biginning index and ending index is the same then the character is removed
    printAllPermutations_Helper("", "bac")
    permutation = "ba" + 'c' = "bac" - branch 2.1.1

    now str is empty base case is hit and the "bac" is printed

    i=1: ch = 'c'
    newStr = "ac".substring(0,1) + "ac".substring(2, rest) = "a" + "" = "a"
    i+1 where i value is 1 resulting to 2
    inclusive of 0 that is a and exclusive of 1 that a
    printAllPermutations_Helper("a", "bc")
    permutation = 'b' + 'c'  = "bc" - branch 2.2

    str = "a", permutation = "bc"
    Repeat function call
    
    i=0: ch = 'a'
    newStr = "a".substring(0,0) + "a".substring(1, rest) = "" + "" = ""
    if the biginning index and ending index is the same then the character is removed
    printAllPermutations_Helper("", "bca")
    permutation = "bc" + 'a' = "bca" - branch 2.2.1

    now str is empty base case is hit and the "bca" is printed

    i=2: ch = 'c' 
    newStr = "abc".substring(0,2) + "abc".substring(3, rest) = "ab" + "" = "ab"
    beginning is 0 and ending is exclusive of 2 means 'ab' 
    The permutation string gets "refreshed" as each recursive call has its own copy
    printAllPermutations_Helper("ab", "c") - branch 3
    
    str = "ab", permutation = "c"
    Repeat function call

    i=0: ch = 'a'
    newStr = "ab".substring(0,0) + "ab".substring(1, rest) = "" + "b" = "b"
    if the biginning index and ending index is the same then the character is removed
    printAllPermutations_Helper("b", "ca")
    permutation = 'c' + 'a' = "ca" - branch 3.1

    str = "b", permutation = "ca"
    Repeat function call

    i=0: ch = 'b'
    newStr = "b".substring(0,0) + "b".substring(1, rest) = "" + "" = ""
    if the biginning index and ending index is the same then the character is removed
    printAllPermutations_Helper("", "cab")
    permutation = "ca" + 'b' = "cab" - branch 3.1.1

    now str is empty base case is hit and the "cab" is printed

    i=1: ch = 'b'
    newStr = "ab".substring(0,1) + "ab".substring(2, rest) = "a" + "" = "a"
    i+1 where i value is 1 resulting to 2
    inclusive of 0 that is a and exclusive of 1(b) that is 'a'
    printAllPermutations_Helper("a", "cb")
    permutation = 'c' + 'b'  = "cb" - branch 3.2

    str = "a", permutation = "cb"
    Repeat function call

    i=0: ch = 'a'
    newStr = "a".substring(0,0) + "a".substring(1, rest) = "" + "" = ""
    if the biginning index and ending index is the same then the character is removed
    printAllPermutations_Helper("", "cba")
    permutation = "cb" + 'a' = "cba" - branch 3.2.1

    now str is empty base case is hit and the "cba" is printed

*/