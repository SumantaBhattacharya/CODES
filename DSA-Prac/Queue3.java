public class Queue3 {
    public static void main(String[] args) {

    }

    // Node class should be static to be used in static context
    public static class Node {
        int data;
        Node next;

        public Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    public static class QueueClass {

        public Node head; // head is always pointing to the first element in the queue same as the front
                          // it will always point to first element
        public Node tail; // tail is always pointing to the last element in the queue same as the rear it
                          // will always point to last element

        int size; // Declare size as a member of QueueClass

        public QueueClass() { // Constructor for QueueClass
            this.size = 0;
        }

        public void enqueue(int data) {

            // queue elements should be add at the tail "one after another"
            Node newNode = new Node(data);

            if (head == null) {
                head = newNode;
                tail = newNode;
            } else {
                tail.next = newNode;
                tail = newNode;
            }

            size = size + 1;

        }

        public int dequeue() {
            if (head == null) {
                System.out.println("Queue is empty, can't remove an element");
                return -1;
            } else {
                int local_front = head.data;

                // check if the list consists of one or more than one node
                if (head == tail) {
                    // it means that only one node exists on dll
                    head = null;
                    tail = null;

                    size--;

                    return local_front;
                } else {
                    head = head.next;
                    size--;
                    
                    return local_front;
                }
            }
        }

        public int peek() {
            if (head == null) {
                System.out.println("Queue is empty, can't peek an element");
                return -1;
            } else {
                int local_front = head.data;
                return local_front;
            }
        }

    }

}
