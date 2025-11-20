import java.util.Stack;

public class Queue5 {
    public static void main(String[] args) {
        // each QueueClass object has its own stacks
        QueueClass queue = new QueueClass();
    }

    public static class QueueClass {//  implementation of a Queue using Two Stacks
        Stack<Integer> stack1 = new Stack<Integer>();
        Stack<Integer> stack2 = new Stack<Integer>();

        // create a contructor (A constructor's purpose is to initialize a new instance (an object) of a class.) queue using two stacks
        public QueueClass() { // constructors in Java cannot be declared as static. 
            // initialize the stack1 and stack2 fields for a new queue object.
            this.stack1 = new Stack<Integer>();
            this.stack2 = new Stack<Integer>();
        }

        public boolean isEmpty() {
            return stack1.isEmpty() && stack2.isEmpty();
        }

        // Any methods in QueueClass that need to access stack1 and stack2 (like add, remove, peek) must also be non-static, because they operate on the state of a specific queue instance.
        public void enqueue(int data){
            stack1.push(data);
        }

        // To convert LIFO → FIFO, you need to reverse the order, which requires transferring all elements between stacks.
        public int dequeue() {
            if (isEmpty() == true) {
                System.out.println("Queue is empty, can't remove an element");
                return -1;
            }else{
                // give a check if stack2 is empty then insert all the insert from stack1 to stack2
                if (stack2.isEmpty() == true) {
                    // the execution will enter in while loop when stack is not empty 
                    while (!stack1.isEmpty()) { // if its not empty then pop 
                        stack2.push(stack1.pop()); // then, pop all the elements until stack1 is empty. Once we have emptied the stack push all the elements from stack1 to stack2
                    }
                }

                // Note: we don't need to transfer elements back to stack1 after dequeue
                
                // Once we have emptied the stack1 and reversed the order of elements in stack 2
                // return the last element
                int last_el = stack2.pop();// it only removes the element when dequeue is done if dequeue operation is only called once then only one elemenet will be deletd from the stack2 
                return last_el;

            }
        }

        public int peek() {
            if (isEmpty()) {
                System.out.println("Queue is empty, can't peek an element");
                return -1;
            } else {
                // for peek we have to again transfer all the elements from stack elements from to stack2 
                // Note: Here, both stack is working as one
                if (stack2.isEmpty()) {
                    while (!stack1.isEmpty()) {
                        stack2.push(stack1.pop());//until stack 1 is empty
                    }
                }
                // now all the elements in stack2 are in reverse order
                return stack2.peek(); 
            }
        }
    
    }

}

// Method 2 (this one) is generally preferred because enqueue is usually more frequent than dequeue.