> *Linked list is a linear data structure, which is consist of group of nodes in a sequence where each node contains a data element and reference of the next node.*

<!-- 
## **Single linked list** :
 
> is a type of linked list which is a chain of nodes in which each node contains is a type of linked list which is a chain of nodes in which each node contains data part and references pointing to the next node.  In the last node of the n the last node of the single Linkedlist, list, the next reference is the next reference is also also assigned to None. It only facilitates forward directional traversal

> A header linked list is a type of linked list that starts with a special node called the header node. it serves as a placeholder or a starting point for the linked list. -->


<!-- [text](../README.md) -->

<!-- ```markdown
> in Single linked list is the collection of nodes in which each nodes are connected through links. And in the single linked list, each node contains the data field and only one link. That is the link of the next node. But in the doubly linked list, each node contains the data field and two links. 1 is the link of the next node, another is the link of the previous node. So doubly linked list is the collection of nodes in which every node contains data field and link of the next node, as well as link of the previous node.
``` -->

```markdown
## Double linked list

> Double linked list is a type of linked list which is a chain of nodes in which each node contains data part as well as to pointer or references pointing both previous node and the next node at the same time, In the first node of the double linked list the previous reference is assigned to none and in the last node of the double Link list, the next reference is assigned to None as well. It facilitates bidirectional traversal.

### An algorithm to insert a node after the given node in a double linked list. (4)
1. Create a new node (new_node) with the given data (new_data).
2. Check if the list is not empty
3. If the list is empty, print an error message and exit.
4. Change the previous node next reference to the reference of the new node
5. Store the previous node reference to the previous reference of the new node
6. Change the next node previous reference to the reference of the new_node.
7. Store the next node reference. To the next reference of the new node.
```

```
 address[prev link|Data next|link]

 None<---1011[|Data|]---><---5400[|Data|]---><---2100[|Data|]--->None

```

```markdown
> It is the first node of the linked list. And it doesn't contain any previous node. It will store the link to empty value or none or null.
> this is the Second node 2 contains the data field link of the next node that is node 3 and link of node 1.  That is the previous node. And we have node 3 here. Node 3 contains data field at two links. It contains the link of the previous node, that is node 2 as well as it contains the next node reference as none or null, because we don't have any node after that. So in the doubly linked list, the first node previous references none, and the last node. next reference, next node reference is none or null or empty value.

> the first node reference is stored in the head, and that is the starting point of the linked list. And the last node of the linked list is called as Tail.

>  The list each node contains link of the next node as well as link of the previous node. That's why moving forward and backward in the linked list is easier here.

```

```markdown
# Incertion At the beginning of the list.
```
```bash
None<---1010[|68|]---><---4200[|69|]---><---2300[|143|]--->None
```
```markdown 
> So we have here doubly linked list We have three nodes. Data is 69, 68, 143 And here each node contains two links. This is the first node contains the previous link as none and the second node conatins the next link as the next node link. And the last node contains next node link as none. i. The first step is create the node with two links and a data field, initially I'll take both the link will be takes as none or null. i.ii. whenever we create a node, it will have a reference. So we will take 5000 as its reference. ii. Now, the next step is we want to add this node as the first node of the linked list. 
```

![https://media.geeksforgeeks.org/wp-content/uploads/20250827100603409157/22.webp](https://media.geeksforgeeks.org/wp-content/uploads/20250827100603409157/22.webp)

## **Learned DLL from "geeksforgeeks"**

- [linked-list-data-structure](https://www.geeksforgeeks.org/dsa/linked-list-data-structure/)

- [doubly-linked-list](https://www.geeksforgeeks.org/dsa/doubly-linked-list/)

- [insert-a-node-at-frontbeginning-of-doubly-linked-list](https://www.geeksforgeeks.org/dsa/insert-a-node-at-frontbeginning-of-doubly-linked-list/)

- [insert-a-node-at-the-end-of-doubly-linked-list](https://www.geeksforgeeks.org/dsa/insert-a-node-at-the-end-of-doubly-linked-list/)

- [insert-a-node-at-a-specific-position-in-doubly-linked-list](https://www.geeksforgeeks.org/dsa/insert-a-node-at-a-specific-position-in-doubly-linked-list/)

- [circular-linked-list](https://www.geeksforgeeks.org/dsa/circular-linked-list/)

![Circular linkedlist](https://media.geeksforgeeks.org/wp-content/uploads/20250829125809713916/27.webp)

![Circular linked list](https://media.geeksforgeeks.org/wp-content/uploads/20250829125719598746/25.webp)

```markdown
## Circular linked list

> A circular linked list is a data structure where the last node points back to the first node,  enabling continuous traversal without encountering NULL.

> There are two types of circular link list I. single circular link list and ii. double circular link list

> In circular, single linked list. A node contains data part and reference part. Each node point to the next node in the sequence but the last node contains the address of the first node

> The traversal start from the first Node and the last node is linked with the first node, which forms a traversing loop
```



| List Type                | Stopping Condition | Loop Type    | Why                                |
| ------------------------ | ------------------ | ------------ | ---------------------------------- |
| **Singly Linked List**   | `temp != null`     | `while`      | Ends naturally at `null`           |
| **Circular Linked List** | `temp != head`     | `do...while` | Loops back to start — never `null` |

![Circular Double linkedlist](https://media.geeksforgeeks.org/wp-content/uploads/20250829125747698901/26.webp)

```markdown
> In Circular Double linked list is a type of circular linked list, where each node contains the data part, previous reference And next reference, each node point to the next node in the sequence. the first node contains the reference of the last node. At the last node contains the reference of the first node, which forms a circle and facilitates even forward and backward traversing.
```

## *Divide and Conquer Algorithm*

- The *`divide and conquer algorithm`* is recursively breaks down a complex problem into subproblems. Once the solutions to the sub-problems are obtained, they are combined to give a solution to the original problem.

- *`Stack`* can be implemented using arrays or linked list. 
*`Queues`* can be implemented using linked list, arrays and circular linked list

#####  Evaluation the time and space complexity of *`stack`* operation in linked list implementation. (3)
    
- **Push Operation**:
    - `Time Complexity`: 
        - *O(1)*.
- **Pop Operation**:
    - `Time Complexity`: 
        - *O(1)*.

`The time complexity` of *`stack`* operations in linked list implementation is *O(1)* for all operations, including push, pop, and peek. This is because the *`stack`* is implemented using a linked list, which allows for constant-time insertions and deletions at the beginning of the list.

`Space Complexity:` space complexity for a *`stack`* implemented using a linked list is O(N), where N is the number of elements in the *`stack`*. The space complexity is determined by the total number of nodes, and it is proportional to the number of elements in the *`stack`*.

![Linked List](https://media.geeksforgeeks.org/wp-content/uploads/20240508162652/stack-as-linked-list-768.png)

# **`Stack`**

> *In Java, a `Stack` is a linear data structure that follows the Last In First Out (LIFO) principle.*

- `Push O(1)`
- `Pop O(1)`
- `Peek O(1)`

<h3 style="color:#F6B034; font-size: 4vw; font-weight: bold;">Implementation</h3>

- **Array**
- **ArrayList**
- **Linked list**

## **When to Use Static vs Instance:**

| Scenario | Use Static? | Use Instance? | Explanation |
|----------|-------------|---------------|-------------|
| **Data Structure** (`Stack`, LinkedList) | ❌ Never | ✅ **ALWAYS** | *But static utilities around data structures can exist* |
| **Utility Methods** (Math calculations) | ✅ Yes | ❌ No | **Math.sqrt(), StringUtils.isEmpty()** |
| **Constants** | ✅ Yes | ❌ No | *public static final double* **PI = 3.14** |
| **Main Method** | ✅ Yes | ❌ No | *Entry point must be static* |
| **Thread-local storage** | ❌ No | ✅ Yes | *Instance per thread* | 


---

## **Real Example - The PROBLEM with Static `Stack`:**

```java
public static void main(String[] args) {
    // User 1's browser
    StackClass.push("google.com");     // Static - global state
    
    // User 2's browser  
    StackClass.push("youtube.com");    // OOPS! Mixed history!
    
    StackClass.pop(); // Returns "youtube.com" but User 1 expected "google.com"
}
```

**With OOP:**
```java
public static void main(String[] args) {
    // User 1's browser
    StackClass user1Stack = new StackClass();
    user1Stack.push("google.com");
    
    // User 2's browser
    StackClass user2Stack = new StackClass(); 
    user2Stack.push("youtube.com");
    
    user1Stack.pop(); // Returns "google.com" ✅
    user2Stack.pop(); // Returns "youtube.com" ✅
}
```

---


### **`Linked List:`**
- *Can insert at* **beginning, end, or middle**
- *Can delete at* **beginning, end, or middle**
- *Need to handle* **multiple scenarios**
    -
   - **i.** *to insert a node into the `stack` implimentation on sll* 
   - **i.i.** *firstly we have to check whether the ll now referring to as `stack` is empty or not* 
     - **i.ii.** *if the `stack` is empty then we have to make the new node as the head and tail.* 
     - **i.iii.** *if the `stack` is not empty, then we will come across two scenarios where we have to check whether the `stack` consists of one or more than one nodes.*
       - **i.iii.i.** *if the `stack` consists of only one node.*
         - **i.iii.i.i.** *then we have to make the new node as the head and make the previous node as the tail.*
         - **i.iii.i.ii.** *if the `stack` consists of more than one node then,* 
           - **i.iii.i.ii.i** *we have to traverse to the node before the indexed node where we have to insert the new node before the node of the index node and after the indexed node. and* 
           - **i.iii.i.ii.ii.** *if we want to add the node at the end of the `stack` then we have to make the previous tail point to the new node and also update the tail to point to the new node.*

- Need to update **both head and tail** *in various cases*
- *Can access any node*	

### **`Stack` (LIFO - Last In First Out):**
- **ONLY insert at BEGINNING** (push)
   -
- **ONLY remove from BEGINNING** (pop)
   - 
- *No Need to handle* **multiple scenarios**  
    - 
    - *Checking if stack has "one node vs multiple nodes"*
    - *Traversing to find positions*
    - *Inserting at middle or end*
    - *Updating head and tail for various cases*
- *Can access* **ONLY the top node**
  -
---

> e.g., *Books on a Shelf: When books are stacked vertically, the most recently placed book is on top. To access a book, you would naturally grab the top one first, illustrating the LIFO principle.*

# **`Queue`**

`FIFO: Elements are removed in the order they are inserted.`

> e.g., *The first customer who comes in is served first.* 

> **A `queue` is a linear data structure that follows the First In First Out (FIFO) principle.** *Where elements are added from the rear (enqueue) and removed or served from the front (dequeue)*.

## **<h3 style="color:#F6B034; text-decoration: underline;">Operations</h3>**

- `Enqueue O(1)` **- Add**
- `Dequeue O(1)`**- Remove**
- `Peek O(1)` **- Peek**

<!-- -[Queue](C:\Users\SUDIP BHATTACHARYA\Desktop\CODES\DSA-Prac\Queue.java) -->

### ***<h4 style="color:#F6B034;">Implimentation 1</h4>***

- **`Queue` using Array**

> *Initially both front and rear are -1 positioning themself at the same position. rear will be incremented as the element are added and front will be incremented as the element are removed.* 


| Aspect | Pointer Approach (`front++`) | Shifting Approach (Your O(n)) |
|--------|-----------------------------|-------------------------------|
| ***Memory Usage*** | ❌ *Wastes empty slots* | ✅ *Efficient memory usage* |
| ***Performance*** | ✅ O(1) - *Lightning fast* | ❌ O(n) - *Slow for large `queues`* |
| ***Memory vs Speed*** | *Fast but wasteful* | *Slow but efficient* |
| ***Memory Allocation*** | *same* | *same* |
| ***Empty Slots*** | *exists* | *exists even though the deleted space is occupied by some other element but leaving the occuped space as empty anyway which can be filled later* |
| ***Memory Efficiency*** | ❌ *Wastes slots permanently* |	✅ *Reuses all slots*
---

## **Circular `Queue`**

> *In a normal array implementation, dequeue() can be O(n) or we may waste space. Using a circular array, both enqueue() and dequeue() can be done in O(1).*

[![https://media.geeksforgeeks.org/wp-content/uploads/20250919113342801921/real_time_example_of_circular_queue.webp](https://media.geeksforgeeks.org/wp-content/uploads/20250919113342801921/real_time_example_of_circular_queue.webp)](https://media.geeksforgeeks.org/wp-content/uploads/20250919113342801921/real_time_example_of_circular_queue.webp)

> *The last position is connected back to the first position, this allows the `queue` to efficiently utilize memory by reusing the spaces freed after elements are dequeued.*

```
  0 
  -
4)1
-
  0
  --
  1    ← This is the REMAINDER
```

- [circular-queue](https://www.geeksforgeeks.org/dsa/introduction-to-circular-queue-1/)

[![circular-queue-1](https://media.geeksforgeeks.org/wp-content/uploads/20250911181651924552/1.webp)](https://media.geeksforgeeks.org/wp-content/uploads/20250911181651924552/1.webp)

[![circular-queue-2](https://media.geeksforgeeks.org/wp-content/uploads/20250911181707875191/2.webp)](https://media.geeksforgeeks.org/wp-content/uploads/20250911181707875191/2.webp)

[![circular-queue-3](https://media.geeksforgeeks.org/wp-content/uploads/20250911181716946340/3.webp)](https://media.geeksforgeeks.org/wp-content/uploads/20250911181716946340/3.webp)

[![circular-queue-4](https://media.geeksforgeeks.org/wp-content/uploads/20250911181725569398/4.webp)](https://media.geeksforgeeks.org/wp-content/uploads/20250911181725569398/4.webp)

[![circular-queue-5](https://media.geeksforgeeks.org/wp-content/uploads/20250911181739336036/5.webp)](https://media.geeksforgeeks.org/wp-content/uploads/20250911181739336036/5.webp)

[![circular-queue-6](https://media.geeksforgeeks.org/wp-content/uploads/20250911181748509043/6.webp)](https://media.geeksforgeeks.org/wp-content/uploads/20250911181748509043/6.webp)

> *In a simple array implementation, we either make dequeue costly by shifting all elements, or use a conceptually infinite array.*

### **Properties:**
- **Front Pointer:** *Points to the first element in the queue.*
- **Rear Pointer:** *Points to the last element inserted.*
- **Circular Movement:** *Both front and rear pointers wrap around the array using modulo operations.*

> `here we dont need to keep the track of rear. we are using this formula to calculate rear here "rear = (front + size) % capacity;"`

```
front tells us where the queue starts

size tells us how many elements are in the queue

So front + size would give us the position after the last element

The % capacity makes it circular
```

![Queue-Linked-List-Implementation](https://media.geeksforgeeks.org/wp-content/uploads/20250325130840080788/Queue-Linked-List-Implementation_.webp)

- **Linked List Queue:** *More flexible, dynamic size.*
- **Lircular Array Queue:** *More memory efficient, fixed size.*

```
Stack - [69, 68, 420, 440, 101]
Queue - [101, 440, 420, 68, 69]
```