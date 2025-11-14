import java.util.Queue;
import java.util.ArrayDeque;
import java.util.LinkedList;

public class Queue4 {// Queue is an interface (not a class). Objects are can be created of a class not interface
    public static void main(String[] args) {
        
        // Queue<Integer> queue = new LinkedList<Integer>();
        Queue<Integer> queue = new ArrayDeque<Integer>();

        queue.add(69);
        queue.add(420);
        queue.add(101);

        System.out.println("peek: "+queue.peek());

        while (!queue.isEmpty()) {
            System.out.print(queue.peek() + " ");
            queue.remove();
        }
    }

}
