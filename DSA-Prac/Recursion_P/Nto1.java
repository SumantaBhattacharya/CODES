package Recursion_P; 

public class Nto1 {
    
    public static void main(String[] args) {
        
        System.out.print("printNto1: ");
        printNto1(5);
        System.out.print("print1toN: ");
        print1toN(1);

        System.out.print("printNto1_print1toN: ");
        printNto1_print1toN(5);

        System.out.println("\nprintFactorialOfNumber: " + printFactorialOfNumber(5));

        System.out.println("printSumOfNumber: " + printSumOfNumber(5)); 

        System.out.println("sumOfIndividualDigits: " + sumOfIndividualDigits(1342)); 

        System.out.println("printProductOfDigits: " + printProductOfDigits(1342)); 

        System.out.print("infiniteRecursion: ");
        infiniteRecursion(5);

        System.out.print("\nReverseANumber: ");
        ReverseANumber(1234);

        String ReverseString = reverseString("MOM");
        System.out.println("\nreverseString: " + ReverseString);

        String str = "axbcxxd";
        String moveAllX_result = moveAllX(str, 0, 0, "");
        System.out.println("moveAllX: " + moveAllX_result);
    }

    public static void printNto1(int n) {

        // base case
        if (n == 1) { 
            System.out.println(n);
            return;
        };

        System.out.print(n + ", ");

        printNto1(n - 1);

    }

    public static void print1toN(int n) {

        // base case
        if (n == 5) { // func(5) will call func(4) will call func(3) will call func(2) will call func(1) once they reach base case they will print and remove from the satck and return to the position from where the function was called
            System.out.println(n); // they will just return to their previous call
            return;
        };

        System.out.print(n + ", ");
        print1toN(n + 1);

    }

    public static void printNto1_print1toN(int n) {
        if (n == 0) {
            // System.out.print(n + ", ");
            return;
        }

        // 5, 4, 3, 2, 1 function were calling the other function and getting into the stack BUT DIDNT FINISH EXECUTUION AFTER done their calling their print their execution.
        System.out.print(n + ", "); // This runs BEFORE recursion
        printNto1_print1toN(n - 1); // PAUSE here!
        System.out.print(n + ", "); //  This line WAITS for the recursive call to finish then this line runs. 
    }

    public static int printFactorialOfNumber(int n) {
    /* e.g., 5 * 4 * 3 * 2 * 1 = 120. factorial of n is n * (n-1)*/

      if (n == 1) {
        return 1;
      }

      /*i. we want the post recursion calls ii. not the stack call iii. we want stack removel*/

      return n * printFactorialOfNumber(n - 1); /* 5*24, 4*6, 3*2, 2*1, 1*1 */

      /* 
       factorial(5) = 5 * fact(4) = 5 * 24 = 120
       factorial(4) = 4 * fact(3) = 4 * 6 = 24
       factorial(3) = 3 * fact(2) = 3 * 2 = 6
       factorial(2) = 2 * fact(1) = 2 * 1 = 2
       factorial(1) = 1. when it got f(1) value it return the where it was called
       */

    }

    public static int printSumOfNumber(int n) {
        if (n == 1) {
            return 1;
        }

        return n + printSumOfNumber(n - 1);

        /*
         f(5) = 5 + f(4) = 5 + 10 = 15
         f(4) = 4 + f(3) = 4 + 6 = 10
         f(3) = 3 + f(2) = 3 + 3 = 6
         f(2) = 2 + f(1) = 2 + 1 = 3
         f(1) = 1. when it got f(1) value it return the where it was called
         */
        
    }

    // The function divides the number by 10 each time, which is the classic pattern for O(log n) complexity. In Big O notation, we ignore constant factors. O(log₁₀n) = O(log n). The base 10 is because we are dividing the number by 10 each time to get the last digit as remainder.
    public static int sumOfIndividualDigits (int n) {

        // Base case: when n becomes 0, stop recursion
        if (n == 0) {
            return 0;
        }

        return sumOfIndividualDigits(n/10) + (n%10);  

        /*
         f(n) = f(n/10) + (n%10)

         f(1342) = f(134) + 2 = 8 + 2 = 10
         f(134) = f(13) + 4 = 4 + 4 = 8
         f(13) = f(1) + 3 = 1 + 3 = 4
         f(1) = f(0) + 1 = 0 + 1 = 1 

         (n/10) = always gives the  number except the last digit
         (n%10) = always gives the last digit as remainder

         */

    }

    public static int printProductOfDigits(int n) {
        if (n%10 == n) {// if the number is a single digit number then return the digit itself
            return n; // we cant return 0 as the product of any number with 0 is 0  
        }

        return n%10 * printProductOfDigits(n/10); // 1342 = 1*3*4*2 = 24
        
        /*
         f(n) = f(n/10) * (n%10)

         f(1342) = f(134) * 2 = 12 * 2 = 24
         f(134) = f(13) * 4 = 3 * 4 = 12
         f(13) = f(1) * 3 = 1 * 3 = 3
         f(1) = 1

        */
    }

    public static void infiniteRecursion (int n) {

        if (n == 0) {
            return;
        }

        System.out.print(n + ", ");
        // infiniteRecursion(n=n-1); Updates n, then uses it, this way it will not cause an infinite recursion
        // infiniteRecursion(n--); //  Updates n after the call simply means its not updating the n value as n updated value is not stored as the flow does not go beyond it. basically, Current value of n is saved as a temporary value. this way the passed parameter will notbe updated and still be the same. for example, if given n is 5, 5 is not be updated before even updated it will pass to the recursive call with the same value causing infinite recursion 
        // i. n-- this will pass the value of n first then subtract it. but --n will subtract the value of n first then pass it. ii. --n is functionally equivalent to n = n - 1
        infiniteRecursion(--n);
    }

    public static void ReverseANumber (int n) {

        if (n == 0) {
            return;
        }

        // any number % 10 will give the last digit of the number
        int lastDigit = n % 10;
        System.out.print(lastDigit + " ");

        ReverseANumber(n / 10); // this will remove the last digit from the number

    }

    static int sum = 0; // is where the reversed order is stored
    public static int ReverseOfANumber (int n) { 

        if (n == 0) {
            return 0;
        }

        int lastDigit = (n % 10);

        // we are multiplying by 10 in order to add the last number except the last few digits
        sum = sum * 10 + lastDigit; // reverse the order

        /*  n = 1234
            
            0 * 10 + 4, 0*4 = 4 then 4 is assigned to sum
            4 * 10 + 3, 40+3 = 43 then 43 is assigned to sum
            43 * 10 + 2, 430+2 = 432 then 432 is assigned to sum
            432 * 10 + 1, 4320+1 = 4321 then 4321 is assigned to sum 

            this was by multiplying by 10 we are always able to create a space for the last digit to be added
         */

        ReverseOfANumber(n / 10); // once the last digit is added remove it

        return sum;

    }

    public static int ReverseOfANumber_2 (int n) {
        int sum = 0; // we need to need the updated reversed part if the number
        return helper(n, sum);
    }

    private static int helper(int n, int sum) {
        if (n == 0) {
            return sum; // we need to return sum when n becomes 0
        }else{
            int last_digit = n % 10;
            sum = sum * 10 + last_digit; 

            // inside helper pass the updated n and stored num in sum to update it further
            return helper(n/10, sum);
        }
    }

    private static String reverseString(String string) {
        if (string.isEmpty() == true) {
            return "";
        }else{
            // get the last character
            char last_character = string.charAt(string.length() -1);

            // remove the last character
            return last_character + reverseString(string.substring(0, string.length() -1));

        /*in recursion, we build the result backwards:
        Get last character
        Recursively reverse the rest
        Put last character FIRST in the result
        
        Visual:
        "MOM" → 'M' + reverse("MO")
        "MO" → 'O' + reverse("M")
        "M" → 'M' + reverse("") reached the base condition → stop
        ...
        Eventually: 'M' + 'O' + 'M' = "MOM"
        */
        
        }
    }

    public static String reverseAString(String str){
       StringBuilder result = new StringBuilder();
       int index = str.length() - 1; // Without -1, you'd get: StringIndexOutOfBoundsException "HELLO" str.charAt(5); Index 5 doesn't exist! Only 0-4!
       // reverseAStringHelper(str, index, result);
       reverseAStringHelper(str, result);
       //    reverseAStringHelper(str, str.length() - 1);
       return result.toString();
    }

    private static void reverseAStringHelper(String str, int index, StringBuilder result) {
       /*if (str.isEmpty() == true) {
          return;*/ // Wrong because we are not reducing the string here.
        if(index < 0){
            return;
        }else{
          char last_character = str.charAt(index);
          result.append(last_character);

          reverseAStringHelper(str, index - 1, result); // in this process we are just chekcing each charcter in the string and reversing it
       }
    }

    private static void reverseAStringHelper(String str, int idx) {
        if(idx < 0){
            return;
        }else{// TC-O(n) 
          System.out.print(str.charAt(idx));
          reverseAStringHelper(str, idx - 1);// from the last index to first index until it reach to 0th index
       }
    }

    private static void reverseAStringHelper(String str, StringBuilder result) {
        if(str.isEmpty() == true){
            return;
        }else{
          char last_character = str.charAt(str.length() - 1);
          result.append(last_character);

          reverseAStringHelper(str.substring(0, str.length() -1), result);
        }
    }

    public static boolean palindrome (int n) {
        sum = 0; // sum is global, so just reset before each call
        return ReverseOfANumber(n) == n; // its checking is the reverse of a number would match to the orginal passed here
    }// A palindrome reads the same forwards and backwards
    
    public static boolean palindrome_2 (int n) {
        return n == ReverseOfANumber_2(n);
    }

    public static int countZeroes (int n) {

        if (n == 0) { // if n is itself is 0 then 
            return 1;
        }

        if (n < 10) { // if the number is a single digit and not a 0
            return 0;
        }

        //  is the problem we are facing is we cannot return count here? or we could just do like return count directly but no this way only the fist digit will be checked so recursve call might needed here so countZeroes(n/10, count); will this work? but wait this function method only takes (int n), but we are trying to pass (int n, int count) wont be possiblke thats why we need an helper function to return the count here

        int count = 0;
        return countHelper(n, count); // we need helper fuction is when we need to pass an extra argument

    }

    private static int countHelper(int n, int count) {

        // Base case - when n becomes 0 then return the count basically means until / 10 makes it less than 1
        if (n == 0) {
            return count; // from here we will get our count
        }

        int last_digit = n % 10;

        if (last_digit == 0) {
            count++;
        }

        return countHelper(n/10, count);

    }

    // Qs. Find the 1st & last occurance of an element in string
    public static void firstandLastOccuranceItaratively(String str, char target) {
        int first_occurance = -1; // -1 means empty it can never be valid index
        int last_occurance = -1;
        for (int i = 0; i < str.length(); i++) {// for loop indexing each of every element passed in a string
            if (str.charAt(i) == target) { // record the first occurance
                // only update the first_occurance if its empty
                if (first_occurance == -1) {
                    first_occurance = i;
                }
                
                last_occurance = i; // each time we find a target after the first occurance we considered it to be last_occurance
            } 
        }

        if (first_occurance == -1) {
            System.out.println("Character '" + target + "' not found in \"" + str + "\"");
        } else {
            System.out.println("first_occurance: " + first_occurance);
            System.out.println("last_occurance: " + last_occurance);
        }
    }

    public static void firstandLastOccuranceRecursively(String str, char target) {
        int first_occurance = -1; // -1 means empty it can never be valid index
        int last_occurance = -1; // to get the valid index 
        int index = 0; // as we are starting first the first index to last index
        int[] result = firstandLastOccuranceRecursively_Helper(str, target, index, first_occurance, last_occurance);

        if (result[0] == -1) {
            System.out.println("Character '" + target + "' not found in \"" + str + "\"");
        }else{
            System.out.println("First occurrence: " + result[0]);
            System.out.println("Last occurrence: " + result[1]);
        }
    }

    // idx is the pointer that is pointing to the current element
    private static int[] firstandLastOccuranceRecursively_Helper(String str, char target, int idx, int first_occurance, int last_occurance) {
    // TC-O(n)

        // Base case
        if (idx == str.length()) {// if index is reached to the last element of that string stop it
            return new int[] {first_occurance, last_occurance}; // used array because we were returning index of two integers
        }

        // logic
        if (str.charAt(idx) == target) {// if we find the target element
            // and we see first_occurance variable is empty then update it for the first and only time
            if (first_occurance == -1) {
                first_occurance = idx; // we are storing the position in the first_occurance of the first occurance of that element
            };

            // each time we see the target element update it with the last_occurance variable without a condition
            last_occurance = idx;
            
        }

        // in recursion, we have to increment the pointer to check each element to find the occurances of the target element
        return firstandLastOccuranceRecursively_Helper(str, target, idx+1, first_occurance, last_occurance);

    };

    // In Java, you CANNOT give default values to method parameters like in some other languages (Python, JavaScript, C++). 
    public static int firstOccurance(String str, char target, int idx){
        // Base case
        if (idx == str.length()) {
            return -1;// increment the idx to the last postion
        }

        if (str.charAt(idx) == target) {
                return idx;
        }

        return firstOccurance(str, target, idx+1);
    }

    public static int lastOccurance(String str, char target, int idx){// idx = str.length() -1

        // int last_occurance = -1; as we are going though each last occurance of the element we cannot make it empty each time
        
        // Base Case
        if (idx < 0) { // the last index cannot be smaller than the first index
            return -1;
        }

        if (str.charAt(idx) == target) {
                return idx;
        }

        return lastOccurance(str, target, idx-1);

    }

    // Qs. Move all 'x' to the end of the string "axbcxxd"
    public static String moveAllX(String str, int idx, int count, String newString) {// O(n + count) -> O(n + n) -> O(2n) -> O(n) where n is the length of string
        //Base case
        if (idx == str.length()) {
            // System.out.println(newString);
            // return newString; // return the newString variable as it contains the new string with all the x moved to the end of the string
            // we can also add the count of x to the newString variable and return it
            for (int i = 0; i < count; i++) {
                newString = newString + 'x'; // add x the number of times x exists.
            }
            return newString;
        }
        
        // if we encounter x then increment the count else add the encountering elements into the newString variable
        if (str.charAt(idx) == 'x'){
            count++;
            return moveAllX(str, idx+1, count, newString);
        }else{
            newString = newString + str.charAt(idx);
            return moveAllX(str, idx+1, count, newString);
        }
    }

    // Qs. Remove duplicates in a string "abbccda"
    

}

