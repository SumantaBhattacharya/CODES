package Recursion_P;

public class Sorted {
    public static void main(String[] args) {

        int[] arr = {69, 68, 420, 440, 143};

        System.out.println(isSortedIteratively(arr));
    }

    // we have to check whether the passed array is sorted or not
    public static boolean isSortedIteratively(int[] arr) {

        // if the array has only one element then consider it to be already sorted
        if (arr.length == 1) {
            return true;
        };

        // i is the pointer here
        for (int i = 0; i < arr.length - 1; i++) { // we are checking the next element so we need to minus 1 from the length of the array
            if (arr[i] > arr[i+1]) {// the initial element cannot be greater than the next element if it is then just return false
                return false; // Once we find that the initial element is greater than the next element, no need to further check the rest of te numbers thats why we used return if we wanted to count the number of times the initial element is greater than the next element then we would have used a counter (that would have initialised before the loop to return after the loop)
            }else{
                continue;
            }
        };

        return true;

    }

    public static boolean isSortedRecursively(int[] arr) {

        // empty, single digit or less than 0. In Java, array length CANNOT be negative, So arr.length <= 0 is the same as arr.length == 0
        if (arr == null || arr.length <= 1) { // arr.length gives an integer value we cant comapre it with boolean so what we do is we check if the array itself is empty
            return true;
        };

        // we would need an index parameter to reduce the repitation of sorted elements
        int index = 0;
        return isSortedRecursively_Helper(arr, index);
    }

    private static boolean isSortedRecursively_Helper(int[] arr, int idx) {
         // base case - we have to return when the index reaches to the last element
         if (idx == arr.length - 1) {
             return true; 
         }else{// main logic starts here
            if (arr[idx] <= arr[idx+1]) { // if the same pair is sorted move to the next element
                return isSortedRecursively_Helper(arr, idx+1);
            }else{ // if not sorted return false
                return false;
            }
         }
    }

}

/*
The recursion would be in this way
arr[0] greater than or less than arr[1]
arr[1] greater than or less than arr[2]
arr[2] greater than or less than arr[3]
arr[3] greater than or less than arr[4]
to do this we need an index parameter to reduce the repitation of sorted elements
if we increment the index parameter each time an sorter occurs and compare with the index+1 element in the function call 
*/