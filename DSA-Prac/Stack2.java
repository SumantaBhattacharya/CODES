import java.util.ArrayList;

public class Stack2 {
    
    public static void main(String[] args) {

        /*
         StackClass stack1 = new StackClass();
         StackClass stack2 = new StackClass(); // the problem with this approach is They share the same list because it's static. this way you can create multiple stacks
         */

        StackClass.push(68);
        StackClass.push(69);
        StackClass.push(11);

        StackClass.display();

        System.out.println("Peeked element: " + StackClass.peek());

        System.out.println("Popped element: " +StackClass.pop());

        StackClass.display();
    }

    static int size;

    public static class StackClass {
        static ArrayList<Integer> list = new ArrayList<Integer>(); // list is an static variable which is shared by all objects

        public static boolean isEmpty () {
            return list.size() == 0;
        }

        public static void push(int data){
            list.add(data);
        }
         
        public static int pop(){
            if (isEmpty() == true) {
                return -1;
            }else{
                int topEl = list.get(list.size() - 1);
                list.remove(list.size() - 1);
                return topEl;
            }
        }

        public static int peek(){
            if (isEmpty() == true){
                return -1;
            }else{
                int topEl = list.get(list.size() - 1);
                return topEl;
            }
        }

        public static void display(){
            if (isEmpty() == true){
                System.out.println("Stack is empty, nothing to be displayed");
            }else{
                for (int i = 0; i < list.size(); i++) {
                    System.out.print(list.get(i) + " -> ");
                }
            }

            System.out.println("NULL");

        }

    }

}
