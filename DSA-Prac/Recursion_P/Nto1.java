package Recursion_P; 

public class Nto1 {
    
    public static void main(String[] args) {
        
        printNto1(5);

    }

    public static void printNto1(int n) {

        // base case
        if (n == 1) {
            System.out.println(n);
            return;
        };

        System.out.print(n + ", ");
        printNto1(n-1);

    }

}
