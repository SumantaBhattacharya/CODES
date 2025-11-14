public class CircularQueue {
    public static void main(String[] args) {
        CircularQueueClass CircularQueue = new CircularQueueClass(5);

            CircularQueue.enqueue(14);
            CircularQueue.enqueue(22);
            CircularQueue.enqueue(13);

            System.out.println("Dequeue: " + CircularQueue.dequeue());

            System.out.println("Peek: " + CircularQueue.peek());

            while (!CircularQueue.isEmpty()) {
                System.out.println(CircularQueue.peek() + " ");
                CircularQueue.dequeue();
            }
    }

    public static class CircularQueueClass {
        // Fixed-size array to store queue elements
        private int[] arr;

        // Maximum capacity of the queue
        private int capacity;

        // Current number of elements in the queue
        private int size;

        // Index of the front element
        private int front;

        // constructor
        public CircularQueueClass(int capacity) {
            // constructor initialisation
            this.size = 0;
            this.capacity = capacity;
            arr = new int[capacity];
            this.front = 0;
        }

        public boolean isEmpty() {
            if (size == 0){
                return true;
            }else{
                return false;
            }
        }

        public boolean isFull() {
            if (size == capacity) {
                return true;
            }else{
                return false;
            }
        }

        public void enqueue(int data) {
            // check if the queue is already full, if its full we can insert an element
            if (isFull() == true) {
                System.out.println("Queue is full, can't insert an element.");
                return;
            }else{
                int rear = (front + size) % capacity;
                arr[rear] = data;
                size++;
            }
        }

        public int dequeue() {
            if (isEmpty() == true) {
                System.out.println("Queue is empty, can't delete an element.");
                return -1;
            }else{
                // intialise the font to a local variable to return it
                int local_front = arr[front];
                // increment the front
                front = (front + 1) % capacity;
                size--;
                // now return
                return local_front;
            }
        }

        public int peek () {
            if (isEmpty() == true) {
                System.out.println("Queue is empty, can't delete an element.");
                return -1;
            }else{
                int local_front = arr[front];
                return local_front;
            }
        }

    }

}
