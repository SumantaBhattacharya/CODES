import java.util.Stack;

public class Queue5_1 {
    public static void main(String[] args) {
        
    }

    public static class QueueClass {

        Stack<Integer> stack1 = new Stack<Integer>();
        Stack<Integer> stack2 = new Stack<>();

        public void enqueue (int data) {
           // queue is never full here

           // i. we have to assume there are elements in the queue 
           //  if (stack2.isEmpty() == true) { even without it the code will behave exactly the same. stack2 is always empty (because you never use it anywhere else). So this condition is always true. that means is that it is TECHNICALLY CORRECT, but UNNECESSARY.
            // take all the elements from the stack1 and insert it into stack2 it will reversed the order
                while (!stack1.isEmpty()) {
                   stack2.push(stack1.pop());
                }

            // putting elements from stack 1 to stack 2 will reverse the elements but putting elements from stack 2 to stack 1 will also change the oder of elements make the same order of elements were in stack2 that what we want we will get the element in reversal order then make the elements back in their original order again.
            stack1.push(data); // here operations are only done from stack1. stack2 is just considered to be as temporary stack

            // making the same order of elements back in the stack1 again after putting the element at the first
            // if (stack1.isEmpty() == true) { if we give this condition the elements will not be inserted in the stack1 as because the stack1 will have already one pushed element and it will not be empty
                while (!stack2.isEmpty()) {
                    stack1.push(stack2.pop());
                };

        };

        public int dequeue() {
            if (stack1.isEmpty() == true) {
                System.out.println("Queue is empty, can't remove an element");
                return -1;
            }else{
                int last_el = stack1.pop();
                return last_el;
            }
        }

        public int peek() {
            if (stack1.isEmpty() == true) {
                System.out.println("Queue is empty, can't peek an element");
                return -1;
            } else {
                return stack1.peek();
            }
        }

    }

}
