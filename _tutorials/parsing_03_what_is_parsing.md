---
topic: "Parsing: (03) What is parsing?"
desc: "The general and specific sense of the word, and explanation of three phases: tokenization, parsing, evaluation"
category_prefix: "Parsing: "
topic_index_top: true
indent: true
---

<div style="display:none;">https://ucsb-cs56-pconrad.github.io/tutorials/parsing_03_what_is_parsing</div>

<p style="font-size:80%;">
Acknowledgments: this series or articles is joint work, a collaboration between Kyle Dewey and Phill Conrad.
</p>

# What is parsing?

## The general and specific sense of the word *parsing*

The word *parsing* can be confusing, because it is used in two different ways&mdash;a *general* sense, and a *specfic* sense.    

In Computer Science, in a general, sense, the word *parsing* refers to any computation that:

* as input, takes *sequences of characters* in some *formally specified language*
* as output, produces an *organized data structure* that can be the basis of some computation.

In this *general* sense, *parsing* refers to all three phases: tokenizing, parsing, and interpretation

The more specific sense of parsing is a particular "phase" of this process, the middle part of three phases:

* tokenization (turning sequence of characters into sequence of tokens)
* parsing (applying a context free grammar and producing an AST)
* evaluation/translation (processing the AST that resulting from parsing)

Before we get into the three phases, the *how* of parsing, let's look at *what* we need to be able to do from a big picture standpoint.

## *What* we need to be able to do when we parse.

As an example of the concerns that arise in parsing, suppose our language is restricted to arithmetic expressions involving:

* the integer data type (e.g. `int` as in C/C++/Java), including integer constants (both positive and negative)
* four basic arithmetic operators, `+`,`-`,`*`,`/` with the usual meanings (integer division for `/`), and usual precedence and associativity
* a unary minus operator
* a comparison operator, `==`, that returns `1` for true and 0 for false.
* parentheses for grouping

We want to be able to do three things.  Here's a quick overview, followed by a more detailed explanation with
specific examples:

1. *Check Syntax*.  We want to be able to distinguish between
    * *well-formed expressions* (those that follow the rules of the language), and
    * *errors* (strings of characters that do not follow the rules)
    
2. *Produce an Abstract Syntax Tree (AST)*.   
    * An AST is a data structure corresponding to the string that shows its structure
    * Examples will help illustrate this point.
    * In the case of an arithmetic expression, the AST is a tree we can traverse to compute the result
    * In the case of a programming language, the AST is traversed either to produce machine code (in the case of C/C++), 
        Java bytecodes (for Java), or for some interpreted languages, it is traversed directly to carry out the computation.
    
3. Evalute ASTs to produce a result
    * Evaluating the AST is not necessarily part of *parsing* per se; it is typically considered separate concern
    * However, ASTs rarely exist outside the context of parsing, so explore them as part of the same tutorial.

Here is a bit more on each of these topics.

## Checking Syntax

As an example of checking syntax, we want to be able to distinguish between well-formed expressions and those with errors.

Let's use the example of integer arithmetic expressions with five operators: `+`,`-`,`*`,`/`,`==` and parentheses `(`, `)`
* Later, we'll discuss how to formally specify the rules for such expressinos
* For, we'll assume you are already familiar with those rules, at least informally, from using them in C/C++/Java code.

Here are some examples of well-formed expressions, and expressions with errors.   

<style>
div.table-with-borders table { border-collapse: collapse; border: 1px solid grey; }
div.table-with-borders table * td { border-collapse: collapse; border: 1px solid grey; }
div.table-with-borders table * td { padding: 4pt; }
</style>

<div class="table-with-borders" markdown="1">

| Well-formed | Errors |
|-------------|--------|
| `2 + 2`     | `+ 2 2`  |
| `123 + 345 * 678`     | ` 3 45 + 6`  |
| `(1+2)*678`     | `(( 1+2) * 678 `  |
| `0`             | `45 67`  |
| `-7 + -8`       | ` 9 % 5` |
| `--3`           | `3--`     |
| `1 + 2 == 3`    | `3 = = 6`   |
</div>

Note that we sometimes call these "legal" and "illegal" expressions, though in this case the "law" is simply the rules for the language, and nothing to do with civil or criminal laws.


## Various kinds of errors

We'll see later than there is a distinction between errors that occur at the level of individual characters and at the level of higher structures.     This distinction will become more clear as we progress, but for now, let's point out simply that these two errors are different from the others in the list above:

## Tokenizer Errors

Here are two examples of errors that are detected during tokenizing:

* The expression ` 9 % 5` is not well-formed because in this *particular* arithmetic language, we did not include the `%` operator.  We *could have*, but we *didn't.*  Therefore, the `%` character is an "illegal character".   

* The expression `3 = = 6` is not legal because a `==` operator is not allowed to have a space in the middle of it. 

When we cover finite state automata in more detail, we'll see how a finite state automata handles these cases.

## Semantic Errors

Also note that from the standpoint of syntax, the following expressions are well-formed, even though they will result in an error (division by zero) when evaluated.  These are *not* syntax errors, but errors of meaning, i.e. *semantic errors* or *evalutor errors*.  

<div class="table-with-borders" markdown="1">

| `7/0` | `7/(3-3)` | `123/( 4*5 - 20)` |

</div>

As you can infer from the escalating complexity of the examples, expressions involving division by zero can get arbitrarily complex, which is why we don't try to detect such problems as part of the "syntax checking".   

For more on syntax vs. semantic errors, see: [Parsing: Syntax vs. Semantic Errors](/topics/parsing_syntax_vs_semantic_errors/)

# Parsing: Grammars and ASTs

A parser typically has two jobs.  The first, which we already covered above, is to determine whether an input string follows the rules of the language  

The second job is to product an Abstract Syntax Tree (AST).  An AST is a tree structure that represents the meaning of some expression in a formal language.   

Here are a few examples.

TODO: Insert examples here.

# Evaluating an AST

TODO: Insert examples of evaluating an AST here.

## Tokenization ##

Tokenization involves converting larger sequences of characters into meaningful units (integers, operators, variables, keywords, etc.).
Each of these units is called a "token".
To illustrate what tokens are, consider again the aforementioned Java code snippet, repeated below for convenience:

```java
if (x > 7) { // magic number
  foo = 10;
} else {
  /* TODO: this needs a better solution
     right now this is broken */
  System.err.println( "FIX THIS CODE" );
}
```

This code snippet contains over 100 characters.
However, it contains only 24 tokens, namely (put into a table to save space):

|                 |     |      |         |        |
|-----------------|-----|------|---------|--------|
|`if`             |`(`  |`x`   |`>`      |`7`     |
|`)`              |`{`  |`foo` |`=`      |`10`    |
|`;`              |`}`  |`else`|`{`      |`System`|
|`.`              |`err`| `.`  |`println`|`(`     |
|`"FIX THIS CODE"`|`)`  | `;`  |`}`      |        |

As shown, tokens separate semantically meaningful groupings of characters into individual units.
For example, `if`, `else`, `10`, `"FIX THIS CODE"`, and others are considered individual, distinct tokens.
Additionally, components extraneous to the code, such as unnecessary whitespace and comments, are completely stripped out.
That said, there are still some "extra" components in here, such as the braces (`{` and `}`).
This is left for the next phase to handle, namely parsing.

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

