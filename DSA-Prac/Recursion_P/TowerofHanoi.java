package Recursion_P;

public class TowerofHanoi {
    /*RULES
    1. Only one disk transferred in 1 step
    2. Smaller disks are always kept on top of larger disks*/

    public static void main(String[] args) {
        int n = 3; // number of disks
        
        towerOfHanoi(n, 'S', 'H', 'D'); // name of the towers
    }

    private static void towerOfHanoi(int n, char src, char auxiliary, char dest) {
        // base case
        if (n == 0) {
            return;
        }else{
            // i. move n-1 disks from source to auxiliary using destination as helper
            towerOfHanoi(n-1, src, dest, auxiliary); // n-1 to comply with the first rule
            // ii. move the nth (the largest) disk from source to destination
            System.out.println("Move disk " + n + " from " + src + " to " + dest);
            // iii. move the n-1 disks from auxiliary to destination using source as helper
            towerOfHanoi(n-1, auxiliary, src, dest);
        }
    }
}

/* Illustrations: https://www.geeksforgeeks.org/dsa/c-program-for-tower-of-hanoi/

Observation
On odd the smallest disk is moved to the 3rd tower
On odd the smallest disk is moved to the 2nd tower.

Time Complexity: O(2ⁿ), Space Complexity:O(n)

O(2ⁿ-1) is O(2ⁿ)
T(n) = 2 T(n-1) + 1 => the number of operations doubles with each additional disk.
T(n-1) = 2 T(n-2) + 1
T(n-2) = 2 T(n-3) + 1
...
T(1) = 1 (base case)

T(n) = 2(2t(n-2) + 1) + 1
     = 4T(n-2) + 2 + 1
     = 4(2T(n-3) + 1) + 2 + 1
     = 8T(n-3) + 4 + 2 + 1

    = 2ⁿ-1 T(1) + 2ⁿ-2 + 2ⁿ-3 + ...
    = (2ⁿ-1) + (2ⁿ-1) => 2(2ⁿ-1) => 2ⁿ

masters theorem & tree structure
*/