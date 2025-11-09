public class Circular_linkedList { // Circular Singly Linked List
    public static void main(String[] args) {
        
        Circular_linkedList list = new Circular_linkedList();

    }

    // blueprint
    public class Node {

        int data;
        Node next;

        public Node(int data){
            this.data = data;
            this.next = null; // next is automatically null but still explicitly setting it to null.
        }

        // never used in the current approach
        // A node will take data and next
        public Node(int data, Node next){
            this.data = data;
            this.next = next; // Pre-set the next pointer
        }

    }

    // instance variables of Circular_linkedList object
    Node head;
    Node tail;

    int size; // declares the instance variable (default value = 0)
    public Circular_linkedList(){
        this.size = 0; // constructor initialization explicitly.
    }

    // NOTE: A static method belongs to the class itself

    // methods of Circular_linkedList object - its an instance method to have access to the instance variables.
    public void insertAtBeginning(int data){
        // To insert a new node at the beginning of a circular linked list. 
        // i. create the new node and allocate memory for it. ii. check if the list is empty or not. ii.i. if the list is empty then make the new node as the head and the tail. ii.ii. if the list is not empty ii.ii.i. make the new node as the head and ii.ii.ii. make the new node point to the previous head. ii.ii.iii. As it is a circular linked to connect tail with head we have to make the tail point to the new head.
        Node newNode = new Node(data);

        if(head == null) { // or, tail == null
            head = newNode;
            tail = newNode;

            // to make it circular
            tail.next = head;

            size++; // we have to do this before return

            return;
        }else{
            newNode.next = head;
            head = newNode;
            tail.next = newNode; // or, head would do the same

            size++;
        }
    }

    public void insertAtEnd(int data){
        // To insert a new node at the end of a circular linked list. i. create the new node and allocate memory for it. ii. check if the list is empty or not. ii.i. if the list is empty then make the new node as the head and the tail. ii.ii. if the list is not empty ii.ii.i. make the new node as the tail and make the previous tail point to the new node. ii.ii.iii. As it is a circular linked to connect tail with head
        Node newNode = new Node(data);

        if(head == null) {
            head = newNode;
            tail = newNode;

            // to make it circular
            tail.next = head;
            size++;

            return;
        }else{
            // for now tail is point to the last node
           tail.next = newNode; // the previous tail now pointing to the new Node making the new node as the tail.
           tail = newNode; // updating the tail
           // now connect the newNode tail with the head
           tail.next = head;

           size++;
        }


    }

    public void insert_At_Specific_Position(int data, int idx){
        
        if(idx < 0 || idx > size){
            System.out.println("Invalid index");
            return;
        }

        if(idx == 0){
            insertAtBeginning(data);
            return;
        }

        if(idx == size){
            insertAtEnd(data);
            return;
        }
        
        // To insert a new node at a specific position in a circular linked list. i. create the new node and allocate memory for it. ii. check if the list is empty or not. ii.i. if the list is empty then make the new node as the head and the tail. ii.ii. if the list is not empty ii.ii.i. traverse to the indexed node and ii.ii.ii. make the new node point to the indexed node. ii.ii.iii. make the node before the indexed node point to the new node.
        Node newNode = new Node(data);

        
            Node temp = head;

            for (int i = 0; i < idx - 1; i++) { // to get to the node before the indexed node
                temp = temp.next; // transition statement
            }

            // once we have found the node before the indexed node
            newNode.next = temp.next; // temp.next is the indexed node
            // we have to get the newNode at the middle of temp and temp.next
            // temp is the previous node
            temp.next = newNode; // previous node next ref pointing to the newNode

            size++;
        
    }

    public void deleteFirst(){
        // To delete the first node in a circular linked list. i. check if the list is empty or not. i.i. if the list is empty then return. i.ii. if the list is not empty i.ii.i. check if the list consists of only one node i.ii.i.i. if the list consists of only one node then make the head and tail as null. i.ii.ii. if the list consists of more than one node then make the head point to the second node and make the tail point to the second node to make it circular
        if(head == null){
            System.out.println("list is empty");
            return;
        }else{
            if(head == tail){ // means only one node exists
                head = null;
                tail = null;

                size--;
            }else{ // if there exists more than one node in ll
                head = head.next;
                tail.next = head;// making it circular cause we have to point the tail to the newer head

                size--;
            }

        }
    }

    public void deleteLast(){
        
        // check if the list is empty or not
        if(head == null) {
            System.out.println("list is empty");
            return;
        }else{
            // check if the list consists of one or more than one node
            if(head == tail) {
                // it means that only one node exists on dll
                head = null;
                tail = null;

                size--;

                return;

            }else{
                // if there exists more than one node in dll
                // to delete the last node we have to make the previos node before the tail node as the new tail
                // we dont have tail.prev to go to the previos node before the tail here so we have to traver to the node before the tail node
                Node temp = head;

                // we donbt have index here so we take the use of while loop
                // we have to traverse the temp to the node before the tail node
                while(temp.next != tail){
                    temp = temp.next;
                }

                // once we have found the node before the tail node
                tail = temp; // made the temp as the last node at it point to the tail
                tail.next = head; // now we have made the node before the last node next as head now it will not point to the last node 
                
                size--;
            }

        }

    }

    public void deleteAtPosition(int idx){

        if(idx < 0 || idx >= size) {
            System.out.println("Invalid index");
            return;
        }

        if(idx == 0) {// head == null hnadled here 
            deleteFirst();
            return;
        }

        if(idx == size - 1) {
            deleteLast();
            return;
        }

        // If we reach here, we're deleting from middle (list has ≥3 nodes)
            // if there exists more than one node in dll
            Node temp = head;

                for (int i = 0; i < idx -1; i++) {
                    temp = temp.next;
                }

                // so temp is the node before the indexed node we have to delete the temp.next that is the indexed node and connect the temp with the temp.next.next
                temp.next = temp.next.next; // node before the indexed node next referrence is now pointing to the node after the indexed node

            size = size - 1;


    }

    public void display() {
        Node temp = head;
        do { //The condition temp != head → false immediately The loop doesn’t execute even once
            System.out.print(temp.data + " ");
            temp = temp.next;
        } while (temp != head);// temp never becomes null
        System.out.println("END");    
    }
}
