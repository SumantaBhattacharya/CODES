public class Queue2 {
    // insertion is done from the end and deletion is done from the front first person who came in is the first person to go out (or last person to get in will be the last person to get out)
    public static void main(String[] args) {

        // Without static
        // Queue2 outer = new Queue2();              // First create outer instance
        // QueueClass q = outer.new QueueClass(5);   // Then create inner instance

        // With static
        QueueClass queue = new QueueClass(5);

        queue.enqueue(69);
        queue.enqueue(420);
        queue.enqueue(101);// first in first out

        // System.out.println("Dequeue: " + queue.dequeue());
        // System.out.println("Peek: " + queue.peek());

        while (!queue.isEmpty()) {
            System.out.print(queue.peek() + " ");
            queue.dequeue();
        }

    }

    public static class QueueClass {

        int size;
        int[] arr;

        QueueClass(int size) {
            this.size = size;
            arr = new int[size];
        }

        int front = -1;
        int rear = -1;

        public void enqueue(int data) {
            // if the queue is full we cannot perform enqueue operation
            if (rear == size - 1) {
                System.out.println("Queue is full");
                return;
            } else {
                rear++;
                arr[rear] = data;

                if (front == -1) { // front = 0 (first time only), front = 0, so SKIPPED!
                    front++;
                }

            }
        }

        // Pointer Approach (front++)
        public int dequeue() {
            if (front == -1) {
                System.out.println("Queue is empty");
                return -1;
            } else {

                // return the first element
                int local_front = arr[front];

                // front gets stuck at 0 forever! Even after all elements are dequeued, front never resets properly. to fix that
                if (front == rear) { // when front and rear both becomes 0.
                    front = -1;
                    rear = -1;
                } else {
                    // main dequeue operation is performed here'
                    front = front + 1; // this way we shifted the front pointer now it is no longer pointing to the first element if though its stored
                }

                return local_front;

            }
        }

        public int peek(){
            if (rear == -1){
                System.out.println("Queue is empty");
                return -1;
            }else{
              int local_front = arr[front];
              return local_front;
            }
        }

        public boolean isEmpty() {
            return rear == -1;
        }

    }

}
