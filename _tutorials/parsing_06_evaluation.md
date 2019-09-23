---
topic: "Parsing: (06) Evaluation Phase"
desc: "The specific phase where we apply grammar productions and construct an AST"
category_prefix: "Parsing: "
topic_index_top: true
indent: true
hidden: true
---

<div style="display:none;">https://ucsb-cs56-pconrad.github.io/tutorials/parsing_06_evaluation
</div>
<p style="font-size:80%;">
Acknowledgments: this series or articles is joint work, a collaboration between Kyle Dewey and Phill Conrad.
</p>


# Evaluation

Evaluation, also called *interpretation* involves taking ASTs and recursively evaluating them to values.
In a language like Java, this can get fairly complex, given the complexity of the overall language.
As such, we will refrain from using the running example here.
Instead, we'll use a much simpler arithmetic expression language for the purpose of an example.

Consider the AST below, corresponding to the expression `3 * 4 + 2`:

![interp_01](/tutorials/parsing/interp_01.png)

Evaluation starts at the top of the AST, which corresponds to the `+` node in this AST.
The `+` node first finds the value of its left child, corresponding to the `*` node.
Evaluation then proceeds to the `*` node, which gets the value of its left child.
This leads evaluation to the `3` node.
Because the constant `3` trivially evaluates to itself, evaluation returns `3` at this point.
This is illustrated in the image below, which shows values returned from evaluation in red:

![interp_02](/tutorials/parsing/interp_02.png)

Once the `3` node is complete, evaluation goes back to the `*` node, which gets the value of its right child.
Evaluation then moves to the `4` node, which simply returns `4`.
This is illustrated below:

![interp_03](/tutorials/parsing/interp_03.png)

Evaluation now proceeds to the `*` node, which finally has the values of both of its child nodes.
From here, it multiplies these values together, and returns the result.
This is illustrated below:

![interp_04](/tutorials/parsing/interp_04.png)

At this point, evaluation returns to the `+` node, which now has the value of its left child (`*`).
Evaluation then proceeds to the right child, which returns the constant `2`, illustrated below:

![interp_05](/tutorials/parsing/interp_05.png)

The `+` node finally has the values of both of its children, and subsequently adds them together.
This result is then returned.
This is illustrated below:

![interp_06](/tutorials/parsing/interp_06.png)

Note that this entire process followed the general pattern of a recursive depth-first traversal.

