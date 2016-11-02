---
topic: "Parsing: (06) Parsing Phase"
desc: "The specific phase where we apply grammar productions and construct an AST"
category_prefix: "Parsing: "
topic_index_top: true
indent: true
---

<div style="display:none;">https://ucsb-cs56-pconrad.github.io/tutorials/parsing_06_parsing</div>
<p style="font-size:80%;">
Acknowledgments: this series or articles is joint work, a collaboration between Kyle Dewey and Phill Conrad.
</p>

## Parsing ##

Parsing involves recognizing structures that are made up of tokens.
These structures can be large, and they may even be recursively defined (as with if-else statements).
Such structures are usually referred to as **Abstract Syntax Trees** (ASTs).
A breakdown of this term follows:

- **Abstract**: this forms an abstraction over not only what the programmer typed, but over the language's syntax itself.
  This is in contrast to the **Concrete** syntax, which includes extra details which are ultimately unimportant to execution.
  For example, `if` statements work in the same way whether or not braces (`{` and `}`) are used.
  As such, we can treat `if` statements with and without braces uniformly, and this is precisely what is done in the abstract syntax.
- **Syntax**: these deal with the syntax of the language.
- **Tree**: The underlying representation for the code is that of a tree.

To better understand what an AST is, consider the following example.
This shows an AST which resulted from parsing the tokens `1`, `+`, `2`:

![1+2](1+2.png)

As shown, `+` forms the root of the tree, and it has the child nodes `1` and `2`.
Each of these is a leaf, which makes sense considering that integer constants simply evaluate to themselves without any other bits of code getting involved.

A more complex example is shown below, which uses the tokens from our running example.
The actual tokens have been repeated below for convenience.

|                 |     |      |         |        |
|-----------------|-----|------|---------|--------|
|`if`             |`(`  |`x`   |`>`      |`7`     |
|`)`              |`{`  |`foo` |`=`      |`10`    |
|`;`              |`}`  |`else`|`{`      |`System`|
|`.`              |`err`| `.`  |`println`|`(`     |
|`"FIX THIS CODE"`|`)`  | `;`  |`}`      |        |

![parsing_example](/tutorials/parsing/parsing_example.png)

As shown in the above example, parsing takes operator precedence into account.
Specifically, the parser knew to parse `System.err.println(...)` effectively as `(System.err).println(...)`, as opposed ot the invalid `System.(err.println(...))`.

## <a name="interpreter_general_description"></a>Interpretation ##

Interpretation involves taking ASTs and recursively evaluating them to values.
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

