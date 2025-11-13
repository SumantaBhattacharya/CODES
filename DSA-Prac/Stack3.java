import java.util.Stack;// types i. implicit stack ii. explicit stack

// implimentation of explicit stack
public class Stack3 {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<Integer>(); // This is in HEAP

        stack.push(69);
        stack.push(68);

        pushAtBottom(420, stack); // without passing the stack here we wouldnt have the referrence of which stack we want to midify

        stack.push(440);

        riverseStack(stack);

        while (!stack.isEmpty()) {
            System.out.print(stack.peek() + " -> ");
            stack.pop();
        }

        System.out.println("Null");

    }

    public static void pushAtBottom(int data, Stack<Integer> stack) {// to pass the stack here we have to mention the type whihc is stack list to insert the elements at the same object
        //i. took the selected element popped all put the selected element then put the rest of the popped elements

        // base case
        if (stack.isEmpty() == true){ // ii. when the list becomes fully empty then we push the 420 as the first element then return
            stack.push(data);
            return; // after return the control will directly goes back to pushAtBottom because it has not done executing and it has reached to its base condition and that why it will not run again
        }
        
        // i. to insert the element at the bottom of the stack what we doing or the idea is to remove all the elements from the stack then push the new element and the rest of the existing elements to make the new element position at the bottom of the stack
        int topEl = stack.pop(); // so it got popped from HEAP stack but never released its memory. 
        pushAtBottom(data, stack); // i. this line make int topEl = stack.pop(); to run multiple times to pop all the elements 

        stack.push(topEl); // CONTINUES HERE after return
    }

    public static void riverseStack(Stack<Integer> stack) {
        if (stack.isEmpty() == true) {//base condition
            System.out.println("Stack is gotten empty"); // now put the elements at the bottom of the stack
            return;
        }else{

            // pushAtBottom is basically taking the elements and putting at the bottom if we do this to existing elements we basically reverse the array like suppose 420, 69, 68 see we want to insert 440 at the bottom so how it look like 420, 69, 68, 440 see the 68 was inserted first then 69 then 420 like this if we see the pattern every new element is getting add at the top but what we did with 440 we added it at bottom previous the 69 was at the bottom because it was the first element
            // i. firstly pop all the elements from the stack to reverse the elements
            int topEl = stack.pop();
            // now we have use recursion mean call this method insite itself in such a way to repeat this line again and again int topEl = stack.pop(); to fully clear the stack
            riverseStack(stack);
            // now that we have clear out the stack we will take the element from the top and start putting it at the bottom
            pushAtBottom(topEl, stack);// pusing elements at the bottom of the stack instead of top of the stack
        }
    }

}
/*
 CALL #1: pushAtBottom(420, [68,69])
 (68 popped → stored in Call #1's topEl)
 CALL #2: pushAtBottom(420, [69])
 (69 popped → stored in Call #2's topEl) 
 CALL #3: pushAtBottom(420, [])
 Stack: [420]
 REMEMBERS: topEl = 68
 REMEMBERS: topEl = 69
 CALL #3 finishes
 CALL #2 continues 
 Stack: [420, 69]
 CALL #1 continues
 Stack: [420, 69, 68]
*/