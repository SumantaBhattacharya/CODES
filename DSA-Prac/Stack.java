public class Stack {
    public static void main(String[] args) {
        // Dont do this - No object creation needed! - StackClass stack = new StackClass();
        
        //Call static methods directly
        StackClass.push(69); // first in
        StackClass.push(101); // second in
        StackClass.push(420); // last in

        StackClass.pop();

        System.out.println(StackClass.peek());

        StackClass.display();

    }

    // static is something which is shared by all objects
    public static class Node{
        int data;
        Node next;

        public Node(int data){
            this.data = data;
            this.next = null;
        }

    }

    public static class StackClass {

        public static Node head;
        // public static Node tail;

        static int size;
        // Java does not have static constructors.
        /*public StackClass(){
            this.size = 0;
        }*/

        // i. Static methods can access static variables ii. Static methods cannot access instance variables. but i. Instance methods can access both instance and static variables. With Static: No inheritance, no polymorphism 
        public static void push(int data){

            Node newNode = new Node(data);

            if (head == null) {// meaning the stack is empty
                head = newNode;
                // tail = newNode;

                size++;
            }else{// if the stack is not empty
                newNode.next = head;
                head = newNode;

                size++;
            }
        };

        public static void pop(){

            if(head == null){
                System.out.println("Stack is empty, nothing to be popped");
            }else{
                // head is pointing to the first node we have to delete that 
                // if we want to return the popped element store the head.data in a variable then return before increasing the size.
                head = head.next;

                // if there is no next node to be head then we have to check
                /*if (head == null) {
                    tail = null; // make the stack empty
                }*/

                size--;

            }

        }

        public static int peek(){
            if(head == null){
                System.out.println("Stack is empty, nothing to be peeked");
                return -1;
            }else{
                return head.data; // head is pointing to the first node
            }
        };

        public static void display(){
            if(head == null){
                System.out.println("Stack is empty, nothing to be displayed");
            }else{

                Node temp = head;
                while (temp != null) {// temp.next != null) misses the last node
                   System.out.print(temp.data + " -> ");
                   temp = temp.next;
                }

                System.out.println("NULL");

            }
        };

    };

}
