public class DoublyLinkedList {

    public static void main(String[] args) {
        DoublyLinkedList list = new DoublyLinkedList();
        list.insertFirst(10);
        list.insertEnd(20);
        list.insertAtPosition(30, 2);
        list.deleteFirst();
        list.deleteLast();
        list.deleteAtPosition(0);

        
    }

    // creating a node
    public class Node {
        int data;
        Node next;
        Node prev;

        // creating a constructor to build a Node object from the blueprint
        public Node(int data) {// this is the structure of a node
            this.data = data;
            this.next = null; // initially the next address of the node will be null
            this.prev = null; // same as the next this will be null as well
        }

    }

    Node head; // head is the first node
    Node tail; // tail is the last node'

    int size;

    // It is called whenever you create a new list object
    public DoublyLinkedList() {
        this.size = 0; // initially the size of the list is 0
    }

    public void insertFirst(int data) {
        // i. creating a node node. 
        // ii. adding data to the node
        // iii. check if the ll is empty or not
        // iv. if the ll is empty then the new node will be the head and the tail
        // v. if the ll is not empty then the new node will be the head and the previous head will be the next of the new node  
        // v.i. for that we would have to point the head to the new node v.i.i. and to do that we have to chnage the address of the previouly existing as the first node to the address of the new node and initailly the next of the previously existing as the first node will be null.
        Node newNode = new Node(data);
        
        if (head == null) { // iv. if the ll is empty then the new node will be the head and the tail
            head = newNode;
            tail = newNode;
        } else { 
            // head is holding the address of the current first node to make the new node point to the first node and make it the first node we would have to point the next of the newly created node to the current first node 
            newNode.next = head;
            // now we have to change the value of head to point to the newly created node
            
            // head is pointing to the previous first node we have connected the new node next ref to the previous first node so it is pointing to the previous first node now we have to change the prev referrence of the previous first node to the address of the new node for backtracking
            head.prev = newNode;

            // now we have connected the newly created node to the previously first node i.i. now make the head point to the newly created node instead of the previous first node
            head = newNode;

        }

        // increment the size of the linkedlist
        size++;
    }

    public void insertEnd(int data) {
        // i. creating a node node. 
        // ii. adding data to the node
        // iii. check if the ll is empty or not
        // iv. if the ll is empty then the new node will be the head and the tail
        // v. if the ll is not empty then the new node will be the tail and the previous tail will be the previous node of the newly created node  
        Node newNode = new Node(data);

        if(head == null){
            head = newNode;
            tail = newNode;
        }else{
            // as we know tail is pointing the the last node so if we want to make the newly created add as the last node we have to change the i. next ref of the last node which is tail to point the the newly created node 
            tail.next = newNode;
            // ii. initially the newNode pref ref and next ref will be empty to make it as the tail of dll we have to leave the next ref of this newly created node as empty but we have to update the pref ref of the newly created node to point to the previously exsting as the last node which was initially empty
            newNode.prev = tail;
            // iii. now we have to change the tail to point to the newly created node
            tail = newNode;
        }

        size++;
    }

    public void insertAtPosition(int data, int index) {// i. to insert node at any index we have to take the index of the node after or before of it we want to add. ii. we will be taking the data as usual
        
        if (index < 0 || index > size) {
            System.out.println("Error: Index " + index + " is out of bounds for list of size " + size);
            return;
        }
        
        Node newNode = new Node(data);

        if(index == 0){
            insertFirst(data);
        }else if(index == size){
            insertEnd(data);
        }else{
            // to go to the indexed node we have iterate the head to point to the indexed node but we cannot directly update the head so what we do is we will create a temporary node pointing to the head and then we will iterate this temporary node to point to the indexed node
            Node temp = head;
            
            // Traverse the list to find the node before the insertion point
            for (int i = 0; i < index - 1  && temp!= null ;i++) {
                temp = temp.next;// this will make the temp move forward until we find our index
            }

            if(temp == null){
                System.out.println("Position is out of bounds.");
            }else{
                // to insert at ant index we have to connect the new node to the node before the indexed node and the node after the indexed node i.i for that we have the make the new node prev referrence point to the node before the indexed node and the new node next referrence point to the node after the indexed node
                // temp is the indexed node ii. insert the new node after the node that temp is pointing to.
                newNode.prev = temp;
                newNode.next = temp.next; // this will increment the current index node to get to the node after the indexed node
                
                // now we have to change the previous referrence of the node after the indexed node to connect with the newly created node
                temp.next.prev = newNode;
                // now again we have to change the next referrence of the node before the indexed node to connect with the newly created node
                temp.next = newNode;

                size++;
            }

        }

    }

    public void deleteFirst(){
        // to delete the first node in dbb we have to keep in mind that the head is pointing to the first node in the dll i. then we have to perform operations in that
        // for that first we have to check whether the linked list is empty or fill
        if(head == null){
            System.out.println("Double Linked List empty,Not able to delete a node!");
            return;
        }

        // if the linked list is not empty then we have to check if the dll consists of one or more than one nodes i. if the dll conists only of one node then we have to empty the dll if not then we have delete the first node from it making the next node after the first node as the first node
        if(head == tail) {// it means that the dll consists of only one node
            // delete the only and only first node
            head = null;
            tail = null;
        }else{
            // we have to keep in mind that the head is pointing to the first node 
            head = head.next; // this will make the head point to the second node
            // now that head is pointing to the second node we have to make the second node as the first node 
            head.prev = null; 
        }

        size--;

    }

    public void deleteLast(){
        // to delete the last node we have to keep in mind that tail is point to the last node then we have to make the node previous to the last node as the last node 
        // i. find we have to cherck whether the dll is empty or not
        if(head == null){
            System.out.println("Double Linked List empty,Not able to delete a node!");
            return;
        }

        // ii. if the dll is not empty then we have to check if the dll consists of one or more than one nodes i. if the dll conists only of one node then we have to empty the dll if not then we have delete the last node from it making the "node before the last node" as the last node
        if(head == tail) {// it means that the dll consists of only one node
            // delete the only and only first node
            head = null;
            tail = null;
        }else{
            // we have to keep in mind that the tail is pointing to the last node 
            // same as delete at first i. we have to make the tail point to the "node before the last node"
            tail = tail.prev;
            // now that tail is pointing to the "node before the last node" we have to make the "node before the last node" as the last node to do that we have to make the "node before the last node" next ref as null because we all know tail next ref is always null
            tail.next = null;
        }

        size--;

    }

    public void deleteAtPosition(int index) {
        // i. check if the index is valid or not
        if (index < 0 || index >= size) {
            System.out.println("Invalid index");
            return;
        }

        if (index == 0) {
            deleteFirst();
        } else if (index == size - 1) {
            deleteLast();
        } else {
            // to delete at any index we have to connect the node before the indexed node to the node after the indexed node
            // i. firstly, iterate to the indexed node
            Node temp = head;

            for (int i = 0; i < index - 1; i++) {
                temp = temp.next; // this will point to the node before the indexed node
            }
        
            // ii. Once we have found the indexed node ii.i we have to delete it my modifying the the node before the indexed node and after the indexed node
            temp.next = temp.next.next;
            // now temp.next is pointing to temp.next.next
            temp.next.prev = temp.prev;

            size--;
        }
    }

    public void print() {
        Node temp = head;
        while (temp != null) { // if we do temp.next != null then it will not print the last node This condition will skip printing the last node, because the loop stops one step early.
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println("END");
    }
    

}
