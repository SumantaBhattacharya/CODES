package Recursion_P;

import java.util.ArrayList;

public class Subsets {
    public static void main(String[] args) {
        System.out.println(subset_Subseq("", "ABC", new ArrayList<>()));
    }

    // code is SEQUENTIAL
    private static void subset_Subsequence(String processed, String unprocessed) {

        // base condition
        if (unprocessed.isEmpty() == true) {
            System.out.println(processed);
            return; // to the function call form where it was called
        } else {
            char ch = unprocessed.charAt(0);

            // i. add it ii. or, ignore it
            // processed initially will be empty.  the parent remembering its original processed="" when creating the second child
            subset_Subsequence(processed + ch, unprocessed.substring(1)); // Each recursive call has its OWN COPY of processed, processed is local not shared!.
            // BOTH function calls WILL execute because they're on sequential lines of code, and ALL code in a function executes unless there's a return THIS LINE ALWAYS EXECUTES after Line 1 finishes!
            subset_Subsequence("\t" + processed,      unprocessed.substring(1)); // this getting executed after each return from the first recursion call

        }

    }

    private static ArrayList<String> subset_Subseq(String processed, String unprocessed, ArrayList<String> list) {

        // base condition
        if (unprocessed.isEmpty() == true) {
            System.out.println(processed);
            list.add(processed); // to the function call form where it was called
            return list;
        } else {
            char ch = unprocessed.charAt(0);

            // i. add it ii. or, ignore it
           
            subset_Subseq(processed + ch, unprocessed.substring(1), list); 
            subset_Subseq("\t" + processed,      unprocessed.substring(1), list);
        }

        return list;
    }


}

/*

 🚀 Complete DRY RUN for "ABC"
 📌 Initial Call:

subset_Subsequence("", "ABC")
processed = "", unprocessed = "ABC", ch = 'A'



 🌳 LEVEL 0: subset("", "ABC")
 Branch 1: INCLUDE 'A'

subset_Subsequence("" + 'A', "BC") → subset("A", "BC")


This COMPLETELY executes before Branch 2 starts!


 📌 LEVEL 1: subset("A", "BC")

processed = "A", unprocessed = "BC", ch = 'B'

 Branch 1.1: INCLUDE 'B'

subset_Subsequence("A" + 'B', "C") → subset("AB", "C")



 📌 LEVEL 2: subset("AB", "C")

processed = "AB", unprocessed = "C", ch = 'C'

 Branch 2.1: INCLUDE 'C'

subset_Subsequence("AB" + 'C', "") → subset("ABC", "")



 📌 LEVEL 3: subset("ABC", "")

unprocessed = "" → BASE CASE!
System.out.println("ABC");  // ✅ PRINT 1: "ABC"
return to Level 2



 📌 Back to LEVEL 2: subset("AB", "C")
Now executes Branch 2.2
 Branch 2.2: EXCLUDE 'C'

subset_Subsequence("AB", "") → subset("AB", "")



 📌 LEVEL 3: subset("AB", "")

unprocessed = "" → BASE CASE!
System.out.println("AB");   // ✅ PRINT 2: "AB"
return to Level 2


LEVEL 2 subset("AB", "C") FINISHED!
Return to Level 1


 📌 Back to LEVEL 1: subset("A", "BC")
Now executes Branch 1.2
 Branch 1.2: EXCLUDE 'B'

subset_Subsequence("A", "C") → subset("A", "C")



 📌 LEVEL 2: subset("A", "C")

processed = "A", unprocessed = "C", ch = 'C'

 Branch 1.2.1: INCLUDE 'C'

subset_Subsequence("A" + 'C', "") → subset("AC", "")



 📌 LEVEL 3: subset("AC", "")

unprocessed = "" → BASE CASE!
System.out.println("AC");   // ✅ PRINT 3: "AC"
return to Level 2



 📌 Back to LEVEL 2: subset("A", "C")
Now executes Branch 1.2.2
 Branch 1.2.2: EXCLUDE 'C'

subset_Subsequence("A", "") → subset("A", "")



 📌 LEVEL 3: subset("A", "")

unprocessed = "" → BASE CASE!
System.out.println("A");    // ✅ PRINT 4: "A"
return to Level 2

LEVEL 2 subset("A", "C") FINISHED!
Return to Level 1

LEVEL 1 subset("A", "BC") FINISHED! ← ✅ Complete "Include A" branch done!
Return to Level 0

 🎯 HALF-WAY SUMMARY:
We've printed:
1. "ABC"  (Include A → Include B → Include C)
2. "AB"   (Include A → Include B → Exclude C)
3. "AC"   (Include A → Exclude B → Include C)
4. "A"    (Include A → Exclude B → Exclude C)

Now FINALLY execute Branch 2 of original call!


📌 Back to LEVEL 0: subset("", "ABC")
Now executes Branch 2: EXCLUDE 'A'

subset_Subsequence("", "BC") → subset("", "BC")

📌 LEVEL 1: subset("", "BC")

subset("", "BC") is created from subset("", "ABC") after the first branch returns

processed = "", unprocessed = "BC", ch = 'B'

 Branch 2.1: INCLUDE 'B'

subset_Subsequence("" + 'B', "C") → subset("B", "C")

 📌 LEVEL 2: subset("B", "C")

processed = "B", unprocessed = "C", ch = 'C'

 Branch 2.1.1: INCLUDE 'C'

subset_Subsequence("B" + 'C', "") → subset("BC", "")

 📌 LEVEL 3: subset("BC", "")

unprocessed = "" → BASE CASE!
System.out.println("BC");   // ✅ PRINT 5: "BC"
return to Level 2

 📌 Back to LEVEL 2: subset("B", "C")
Now executes Branch 2.1.2
 Branch 2.1.2: EXCLUDE 'C'

subset_Subsequence("B", "") → subset("B", "")

 📌 LEVEL 3: subset("B", "")

unprocessed = "" → BASE CASE!
System.out.println("B");    // ✅ PRINT 6: "B"
return to Level 2

LEVEL 2 subset("B", "C") FINISHED!
Return to Level 1

 📌 Back to LEVEL 1: subset("", "BC")
Now executes Branch 2.2
 Branch 2.2: EXCLUDE 'B'

subset_Subsequence("", "C") → subset("", "C")

 📌 LEVEL 2: subset("", "C")

processed = "", unprocessed = "C", ch = 'C'

 Branch 2.2.1: INCLUDE 'C'

subset_Subsequence("" + 'C', "") → subset("C", "")

 📌 LEVEL 3: subset("C", "")

unprocessed = "" → BASE CASE!
System.out.println("C");    // ✅ PRINT 7: "C"
return to Level 2

 📌 Back to LEVEL 2: subset("", "C")
Now executes Branch 2.2.2
 Branch 2.2.2: EXCLUDE 'C'

subset_Subsequence("", "") → subset("", "")

 📌 LEVEL 3: subset("", "")

unprocessed = "" → BASE CASE!
System.out.println("");     // ✅ PRINT 8: "" (empty string)
return to Level 2


LEVEL 2 subset("", "C") FINISHED!
Return to Level 1

LEVEL 1 subset("", "BC") FINISHED!
Return to Level 0

LEVEL 0 subset("", "ABC") FINISHED!

*/
