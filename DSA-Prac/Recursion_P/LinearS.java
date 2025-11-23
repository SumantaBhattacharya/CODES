package Recursion_P;

import java.util.ArrayList;

public class LinearS {
    public static void main(String[] args) {
        int[] arr = {69, 68, 420, 440, 420, 143};

        int target = 420;
        System.out.println("linearSearchUsingIteration: " + linearSearchUsingIteration(arr, target));
        System.out.println("linearSearchUsingRecursion: " + linearSearchUsingRecursion(arr, target));
        System.out.println("findIndexIteratively: " + findIndexIteratively(arr, target));
        System.out.println("findIndex: " + findIndex(arr, target));
        System.out.println("findIndexLast: " + findIndexLast(arr, target, arr.length-1));
        findAllIndexLast(arr, target, arr.length-1);
        System.out.println("findAllIndexLast: " + list);
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

    public static void findAllIndexLast(int[] arr, int target, int index) {// it finds the last occurance of the target element from left

        // base case
        if (index == -1) { // Searched entire array backwards
            return;
        } 

        if (arr[index] == target) {
            list.add(index); // whenever you find the answer just add it to the list
        }

        // recursive call - no return because of void - here we need to always continue searching whether we find the target element or not
        findAllIndexLast(arr, target, index-1);

    }


}

/*

*/