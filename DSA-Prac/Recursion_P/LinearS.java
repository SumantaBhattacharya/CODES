package Recursion_P;

import java.util.ArrayList;

public class LinearS {
    public static void main(String[] args) {
        int[] arr = {420, 440, 68, 69, 143};

        int target = 420;
        System.out.println("linearSearchUsingIteration: " + linearSearchUsingIteration(arr, target));
        System.out.println("linearSearchUsingRecursion: " + linearSearchUsingRecursion(arr, target));
        System.out.println("findIndexIteratively: " + findIndexIteratively(arr, target));
        System.out.println("findIndex: " + findIndex(arr, target));
        System.out.println("findIndexLast: " + findIndexLast(arr, target, arr.length-1));
        findAllIndexLast(arr, target, arr.length-1);
        System.out.println("findAllIndexLast: " + list);

        ArrayList<Integer> list = new ArrayList<>(); // we could have also passed this too as a parameter to the function findAllIdx()
        ArrayList<Integer> list_Ans = findAllIdx(arr, target, 0, list); // new ArrayList<>() , we could have also passed this too as a parameter to the function findAllIdx()
        System.out.println("list_Ans: "+ list_Ans);
        System.out.println("list: "+ list);

    }

    public static boolean linearSearchUsingIteration(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) { // here we need to check till the last element of the array.
                return true;
            }else{
                continue; // to check the rest of the elements
            }
        }

         // if the target is not found in the array then return false; as we have already checked all the elements in the array and didnt find the target that we were looking for
        return false;
    }

    public static boolean linearSearchUsingRecursion(int[] arr, int target) {
        // we need an index parameter to reduce the repitation of sorted elements basically for going to the next element and compare it with i+1
        int index = 0; // start from the index element
        return linearSearchUsingRecursion_Helper(arr, target, index);
    }

    private static boolean linearSearchUsingRecursion_Helper(int[] arr, int target, int idx) {// idx here is the pointer
        // base case - we have to return when the index reaches to the last element
        if (idx == arr.length) { // here we need to check till the last element of the array.
            return false; // if we go till the last element and didnt found the targeted element then return false
        }else{
            if (arr[idx] == target) { // if the target element is found return the index
                return true; // if we have found the targeted element present in the array just return as true.
            }else{
                // update the index to go to the next element
                return linearSearchUsingRecursion_Helper(arr, target, idx+1); 
            }
            // return arr[idx] == target || linearSearchUsingRecursion_Helper(arr, target, idx+1); // one liner either this be true or go to the next element do the same thing again until reach a base condition
        }
    }

    public static int findIndexIteratively(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }else{
                continue;
            }
        }

        return -1;
    }


    public static int findIndex(int[] arr, int target) {

        if (arr.length == 0) {
            return -1;
        }

        int index = 0;
        return findIndex_Helper(arr, target, index);

    }

    private static int findIndex_Helper(int[] arr, int target, int idx) {
        if (idx == arr.length) {
            return -1;
        }else{ // inside the array
            if (arr[idx] == target) {
                return idx;
            }else{
                return findIndex_Helper(arr, target, idx+1);
            }
        }
    }

    // here we have to pass the index of the last element
    public static int findIndexLast(int[] arr, int target, int index) {// it finds the last occurance of the target element from left

        // base case
        if (index == -1) { // Searched entire array backwards
            return -1;
        }

        if (arr[index] == target) {
            return index; // return the index of the target element
        }else{
            // recursive call
            return findIndexLast(arr, target, index-1);
        }

    }

    static ArrayList<Integer> list = new ArrayList<Integer>();

    // new object of the list is not created its different referrence variable that are created in the arguments
    public static void findAllIndexLast(int[] arr, int target, int index) {// it finds the last occurance of the target element from left

        // base case
        if (index == -1) { // Searched entire array backwards
            return;
        } 

        if (arr[index] == target) { // i. NO new ArrayList object is created here, just adding to existing one
            list.add(index); // whenever you find the answer just add it to the list, ii. Modifying the SAME static list object
        }

        // recursive call - no return because of void - here we need to always continue searching whether we find the target element or not
        findAllIndexLast(arr, target, index-1); // iii. All recursive calls share the same static list

    }

    public static ArrayList<Integer> findAllIdx(int[] arr, int target, int idx, ArrayList<Integer> list) {
        if (idx == arr.length) {
            return list;
        }

        if (arr[idx] == target) {
            list.add(idx);
        }

        return findAllIdx(arr, target, idx+1, list);
    }

    /*
    public static ArrayList<Integer> findAllIdx(int[] arr, int target, int idx) {

        ArrayList<Integer> list = new ArrayList<>(); // every time the recursion call happens will create a new list object

        // base condition
        if (idx == arr.length) { // when the idx reaches end it will return the list
            return list;
        }

        // this wil contain answer for that function call only
        if (arr[idx] == target) {
            list.add(idx);
        }

        // this recursion call will come out/removed from the stack when the stack is getting empty (basically, when the flow is going above)
        ArrayList<Integer> ansFromBelowCalls = findAllIdx(arr, target, idx+1, list);

        // so when the we get the new empty list the previous number containing would already be added to the ansFromBelowCalls variable and at the end once all the recursion calls are the the flow will come to here after where it was called then it will again add the elements from ansFromBelowCalls to the list then we returning it 
        list.addAll(ansFromBelowCalls); // adding the list from the below calls to the current list

        return list;
    }
    */

    /*

    public static ArrayList<Integer> findAllIdx(int[] arr, int target) {
        
       int index = 0;
       ArrayList<Integer> list = new ArrayList<Integer>();

       return findAllIdxLast_Helper(arr, target, index, list);

    }

    private static ArrayList<Integer> findAllIdxLast_Helper(int[] arr, int target, int idx, ArrayList<Integer> list) {
    // if we create a new list object in the body of the function itself here a new list list will be created again and again as the the function of recursion will be executed. i. we know the return type will be arraylist. ii. we know here we have different object for different function call
    
    // base condition
        if (idx == arr.length) {
            return list;
        }

        if (arr[idx] == target) {
            list.add(idx);
        }
        // we have to increment the pointer(idx) in both the cases case i. if we see that the indexed element doesnt match with the target element ii. also if it matches with the target element increment the idx to see if there are any other element that matches with the target element so in this cases like where we want to have the have idx be incremented in both the case we dont use else what we do is we have idx incremented in both the cases by having a recursion directly without have the else case
        return findAllIdxLast_Helper(arr, target, idx + 1, list); // different referrence variable at different function calls all of them pointing to the same object
    }

    */

    public static int rotatedBinarySearchRecursively(int[] arr, int target) {
        int start = 0;
        int end = arr.length - 1;
        return rotatedBinarySearchRecursively_Helper(arr, target, start, end);
    }

    private static int rotatedBinarySearchRecursively_Helper(int[] arr, int target, int start, int end) { 
    /* 
        Algorithm
        i. arr[mid] == target. else
        ii. check arr[start] <= arr[mid] 
        ii.i. At least one half is always sorted (even if both might be)
        ii.i.ii. if false, left half is not sorted, the right half must be sorted
        ii.i.ii.i. When RIGHT half is sorted 
        ii.i.ii.i.i. target >= arr[mid] && target <= arr[end]
        ii.i.ii.i.i.i. if true, i. Search right half ii. mid + 1
        ii.i.ii.i.i.ii. if false, No extra range check needed for the unsorted half. We search it because the target isn't in the sorted half.
        ii.i.ii.i.i.ii.i. Search left half. ii. mid - 1
        ii.i.ii.ii. When LEFT half is sorted 
        ii.i.ii.ii.i. target >= arr[start] && target <= arr[mid]
        ii.i.ii.ii.i.i. if true, i. Search left half ii. mid - 1
        ii.i.ii.ii.i.ii. if false, No extra range check needed for the unsorted half. We search it because the target isn't in the sorted half.
        ii.i.ii.ii.i.ii.i. i. Search right half ii. mid + 1
        ii.i.iii. if true, left half is sorted, the right half can be sorted or unsorted
        ii.i.iii.i. When LEFT half is sorted 
        ii.i.iii.i.i. target >= arr[start] && target <= arr[mid]
        ii.i.iii.i.i.i. if true, i. Search left half ii. mid - 1
        ii.i.iii.i.i.ii. if false, No extra range check needed for the unsorted half. We search it because the target isn't in the sorted half.
        ii.i.iii.i.i.ii.i. i. Search right half ii. mid + 1
        */

        // base case
        if (start > end) { // start cannot be greater than end. when the start index is greater than the end index then we have searched the entire array
            return -1;
        }

        int mid = start + (end - start) / 2;

        if (target == arr[mid]){ // we have found the searched element
            return mid;
        }

        // main algo starts here
        if (arr[start] <= arr[mid]) {
            //  ii.i.iii. if true, left half is sorted, the right half can be sorted or unsorted
            if (target >= arr[start] && target <= arr[mid]) {
                // ii.i.iii.i. When LEFT half is sorted 
                // ii.i.iii.i.i.i. if true, i. Search left half ii. mid - 1

                return rotatedBinarySearchRecursively_Helper(arr, target, start, end = mid - 1);

            }else{
               // ii.i.iii.i.i.ii. if false, No extra range check needed for the unsorted half. We search it because the target isn't in the sorted half.
               // ii.i.iii.i.i.ii.i. i. Search right half ii. mid + 1

               return rotatedBinarySearchRecursively_Helper(arr, target, start = mid + 1, end);

            }
        }else{
            // ii.i.ii. if false, left half is not sorted, the right half must be sorted
            if (target >= arr[mid] && target <= arr[end]) {
                // ii.i.ii.i. When RIGHT half is sorted 
                // ii.i.ii.i.i.i. if true, i. Search right half ii. mid + 1

                return rotatedBinarySearchRecursively_Helper(arr, target, start = mid + 1, end);

            }else{
                // ii.i.ii.i.i.ii. if false, No extra range check needed for the unsorted half. We search it because the target isn't in the sorted half.
                // ii.i.ii.i.i.ii.i. Search left half. ii. mid - 1

                return rotatedBinarySearchRecursively_Helper(arr, target, start, end = mid - 1);

            }
        }
        /*
        In rotated sorted arrays, At least one half is always sorted (even if both might be)
        In this case: [420, 440, 68, 69, 143], target is 420

        arr[start] <= arr[mid] 
         arr[mid] = 68
         arr[start] = 420
         so, 420 <= 68 is false

        Segment 1: [420, 440, 68] (unsorted)
        Segment 2: [68, 69, 143] (sorted)

        i. If one half is unsorted, the other MUST be sorted

        By doing this we can come to a conclusion is that left half is not sorted, this concludes the right half must be sorted

        When RIGHT half is sorted - target >= arr[mid] && target <= arr[end]

        Check if target is in that sorted half's range

        if the target is in sorted half's range then search the sorted half
        i. target >= arr[mid] && target <= arr[end]
        i.ii. 420 >= 69 and 420 <= 143 is false (i. true. ii. false) resulting AND operation as false

        else (No extra range check needed for the unsorted half. We search it because the target isn't in the sorted half. )
            i. if target is NOT in the sorted right half → It MUST be in the left half - {420, 440, 68}
            ii. No range check is needed for the unsorted half.
            iii. Search left half - mid-1

        [420, 440, 68] is also a rotated sorted array

        arr[start] <= arr[mid] 
        420 <= 440 is true

        Segment 1: [420, 440] sorted
        Segment 2: [440, 68] unsorted

        By doing this we can come to a conclusion is that left half is sorted, this concludes the right half must be unsorted

        When LEFT half is sorted target >= arr[start] && target <= arr[mid]

        Check if target is in that sorted half's range

        if the target is in sorted half's range then search the sorted half 
        i. target >= arr[start] &&  target <= arr[mid]
        i.ii. 420 >= 440 and 420 <= 440 (i. true. ii. true) resulting AND operation as true
        i.ii.i. Search left half

        else (No extra range check needed for the unsorted half. We search it because the target isn't in the sorted half. )
        
        [420, 440]
        arr[start] <= arr[mid] 
        420 <= 440 true 

        Segment 1: [420, 440] sorted 
        Segment 2: [420, 440] sorted

        ii. If one half is sorted, the other can be sorted or unsorted

        By doing this we can come to a conclusion is that left half is sorted as this comes first
        
        When LEFT half is sorted 
        target >= arr[start] && target <= arr[mid]

        420 >= 420 && 420 <= 440 (i. true. ii. true) resulting AND operation as true
        i. Search left half
        ii. mid - 1

        (arr[mid] == target) 
        420 == 420 true
        FOUND IT!
    */
    }

}

