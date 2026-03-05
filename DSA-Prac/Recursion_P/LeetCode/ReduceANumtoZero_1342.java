// package Recursion_P.LeetCode;

public class ReduceANumtoZero_1342 {
    // https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
    public static void main(String[] args) {
        System.out.println(ReduceANumtoZero(1342));
    }

    public static int ReduceANumtoZero(int num) {
        if (num == 0) {// initially if the number is 0 itself just return 0
            return 0;
        }else{
            // as we need to count the number of operation we need a extra variable count
            int count = 0;
            return helperCount(num, count);
        }
    }

    private static int helperCount(int n, int count) {
        // base case - we need to return the count 
        if (n == 0) {
            return count;
        }else{
            // Every operation counts as 1 step
            if (n % 2 == 0) {
                return helperCount(n/2, count+1);
            }else{
                return helperCount(n-1, count+1);
            }
        }
    }

}
