# Linked List

Is a chained data structure, with each node consisting of two pieces of information: the data of the node and the pointer ot the next node. Linked List and conventional array are both linear data structures with serialised storage. They also have differences:

<table>
    <thead>
        <tr>
            <th>Comparison</th>
            <th>Array</th>
            <th>Linked List</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Memory Allocation</th>
            <td>Static memory allocation, happens during compiling and sequential</td>
            <td>Dynamic memory allocation, happens during running and non-sequential</td>
        </tr>
        <tr>
            <th>Get Elements</th>
            <td>Read from index, faster in speed</td>
            <td>Read through all node in queue until get the specific element, slower in speed</td>
        </tr>
        <tr>
            <th>Add / Delete Elements</th>
            <td>Due to sequential and static memory, slower in speed</td>
            <td>Due to dynamic allocation, only require minor memory overhead, faster in speed</td>
        </tr>
        <tr>
            <th>Spatial Structure</th>
            <td>1 dimension or multi-dimension</td>
            <td>Unilateral / Bilateral, or Circular Linked List</td>
        </tr>
    </tbody>
</table>

A Single Linked List has some common methods:

- size: Return the number of node(s).
- head: Return the element of the head.
- add: Add another node in the tail.
- remove: Remove certain node.
- indexOf: Return the node of an index.
- elementAt: Return the node of an index.
- addAt: Insert a node at a specific index.
- removeAt: Delete a node at a specific index.

---
<div align="center">
    <img src="./Linked List.png" alt="Queue Example" />
</div>