public class Queue {
    public static void main(String[] args) {
        
    }

    // static nested class
    public static class QueueClass {
        
        int arr[];
        int size;

        int rear = -1;

        QueueClass(int size){// Each queue object now has its own array and size
           this.size = size; // Sets instance variable
           arr = new int[size]; // Creates instance array
        }

        public boolean isEmpty() {
            return rear == -1; // means the queue is empty
        }

        // O(1)
        public void enqueue(int data) {
            // if the queue is full we cant insert an element in an array because it has a fixed size
            if (rear == size - 1) {
                System.out.println("Queue is full");
                return;
            }else{
                rear++;
                arr[rear] = data; // arr[i] = data
            }
        }

        // dequeue - Shifting Approach - O(n)
        public int dequeue() {
            // if the queue array is empty then we can remove an element from it
            if (isEmpty() == true) {//rear == -1
                System.out.println("Queue is empty");
                return -1;
            }else{
                int front = arr[0];
                for (int i = 0; i < rear; i++) {
                    arr[i] = arr[i + 1]; // we are incrementing all the elements in an array +1
                }
                rear--; // as we shifted all elements to previos place so now our rear should also shift to its previous place.
                return front;
            }
        }

        public int peek() {
            if (isEmpty() == true) {//rear == -1
                System.out.println("Queue is empty");
                return -1;
            }else{
                int front = arr[0];
                return front;
            }
        }
    }
}
