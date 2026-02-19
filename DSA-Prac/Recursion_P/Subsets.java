package Recursion_P;

// import java.util.ArrayList;
import java.util.HashSet;

public class Subsets {
    public static void main(String[] args) {
        subSequences("ABC");
    }

   
    public static void subSequences(String str){
        int index = 0;
        subSequences_Helper(str, "", 0);
    }

    private static void subSequences_Helper(String str, String newString, int idx) {

        // base condition
        if (idx == str.length()) {//with -1 we would miss the empty string 
            System.out.print(newString + ", ");
            return;
        }
        
        char ch = str.charAt(idx);

        // i. add it 
        subSequences_Helper(str, newString + ch, idx+1);
        // ii. or, ignore it
        subSequences_Helper(str, newString, idx+1);
    }

    // Qs. Print all the unique subsequences of a string
    public static void uniqueSubSequences(String str){
        int index = 0;
        HashSet<String> set = new HashSet<>();
        uniqueSubSequences_Helper(str, "", 0, set);
    }


    private static void uniqueSubSequences_Helper(String str, String string, int i, HashSet<String> set) {
        throw new UnsupportedOperationException("Unimplemented method 'uniqueSubSequences_Helper'");
    }


}

// time complexity is O(2^n) as for every character we have 2 choices either to include it or not to include it so for n characters we have 2^n choices like for "ABC" we got ABC, AB, AC, A, BC, B, C, , including the empty string 