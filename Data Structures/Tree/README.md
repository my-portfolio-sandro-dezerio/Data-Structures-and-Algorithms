# Tree

Tree data structure is a multi-layer structure. It is also a non-linear data structure, compared to Array, Stack and Queue. This structure is highly efficient during insert and search operations. Let's take a look at some concepts of tree data structure.

- root: root node of a tree, no parent node for root.
- parent node: direct node of the upper layer, only has one.
- child node: direct node(s) of the lower layer, can have multiple.
- siblings: share the same parent node.
- leaf: node with no child.
- edge: branch or link between nodes.
- path: the edges from a starting node to the target node.
- height of node: number of edges of the longest path of a specific node to leaf node.
- height of tree: number of edges of the longest path of the root node to the leaf node.
- depth of node: number of edges from root node to specific node.
- degree of node: number of child nodes.

---

Binary Tree:
<div align="center">
    <img src="./Binary Tree.png" alt="Queue Example" />
</div>
Each node has a maximum of two nodes with the left node being smaller than the current node and the right node being bigger than the current node.

A Tree has some common methods:

- add: insert a node into the tree.
- findMin: get the minimum node.
- findMax: get the maximum node.
- find: search a specific node.
- isPresent: determine the existance of a certain node.
- remove: delete a node from the tree.

---
<div align="center">
    <img src="./Tree.png" alt="Queue Example" />
</div>