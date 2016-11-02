---
topic: "Parsing: (01) Background"
desc: "What is this parsing stuff all about?"
indent: true
topic_index_top: true
---

<div style="display:none;">https://ucsb-cs56-pconrad.github.io/tutorials/parsing_01_background</div>

<p style="font-size:80%;">
Acknowledgments: this series or articles is joint work, a collaboration between Kyle Dewey and Phill Conrad.
</p>

# Some code 

To ground all of the following discussion in some code, let's start with a github repository that provides an example of the type 
of code we are talking about in this tutorial.

The following github repo contains an example of a program that evaluates arithmetic expressions:

* <https://github.com/UCSB-CS56-pconrad/ucsb-cs56-parsing-arithmetic-expressions>

Here is a sample run of that program, so that you understand what kind of code we are trying to be able to write.   This program provides a "Read/Eval/Print Loop (REPL)" for evaluating integer expressions for the four main arithmetic operators: `+`,`-`,`*`,`/`, with `/` representing integer division as in C/C++/Java, the usual precedence and associativity rules, and parentheses `(`, `)` for grouping.

The program will either evaluate the expression and return a result, or print an error message if the expression is not well-formed.  Note that the usual precedence and associative rules are followed, so that:

* `2 + 3 * 5` is evaluated as `2 + (3 * 5)` which is `17` rather than `(2 + 3) * 5` which would be `25`
* `3 - 3 * 3 - 3` is evaluated as `(3 - (3 * 3)) - 3`, which is `-9` rather than `3 - ((3 * 3) - 3)` which would be `-3`

Here's sample output.   You are encouraged to `git clone` this repo (or a fork of it) and experiment with it. As you read this tutorial, we may make reference to this code.

One more thing: the <https://github.com/UCSB-CS56-pconrad/ucsb-cs56-parsing-arithmetic-expressions> repo is here to be a "reusable" repo that corresponds to the text of this tutorial, which is also intended to be "reusable", quarter-after-quarter.     Note that if you have a programming assignment based on this repo, it may have starter code that is similar to this repo, but in a different place, and possibly with subtle but important differences.

So be sure to check your specific assignment for the proper starting point code.  If you clone the <https://github.com/UCSB-CS56-pconrad/ucsb-cs56-parsing-arithmetic-expressions> repo and play with it, consider that a "playground" or a "sandbox" in which to try things out to learn about parsing, NOT as a place to work on code you are going to submit as part of your programming assignment.






# Background

The execution of a program is a complex problem requiring multiple distinct components working together.
To illustrate this complexity, consider the snippet of Java code below:

```java
if (x > 7) { // magic number
  foo = 10;
} else {
  /* TODO: this needs a better solution
     right now this is broken */
  System.err.println( "FIX THIS CODE" );
}
```

From a human standpoint, the above code is relatively simple.
However, from the standpoint of a system which reads the above code character-by-character, there are immediately some challenges here, including:

1. The characters `x > 7` (as in the above program) have the same meaning as `x>7`, as whitespace is unimportant in this context.
   For simplicity and consistency, these two forms should be treated uniformly.
   Simply stripping programs of all whitespace looks promising here, except...
2. Some whitespace is significant.
   For example, with `"FIX THIS CODE"`, we cannot simply strip out the whitespace.
   Otherwise the program would print `"FIXTHISCODE"`, which differs from the intended string.
   In this particular example, the component which reads the code must understand that `"` is somehow significant, and that the whole string `"FIX THIS CODE"` must be treated as a single unit.
3. Certain groupings of characters act as a single unit.
   This was true for `"FIX THIS CODE"`, but it is also true for `if`, `else`, `foo`, `System`, `err`, and `println`.
   This is even true for `10`, which represents the decimal constant "10" as opposed to two completely independent digits.
   Each of these element groupings are indivisible.
4. Whole groupings of characters form even larger cohesive units.
   The previous point alone suggests that the character string `if if else if if if` might form a valid program, but this clearly isn't true.
   In the Java snippet, `if` and `else` work together to form a single if-else statement.
5. Making things even more complex with the if-else statement in the Java code snippet, the braces (`{` and `}`) are not actually required here.
   If we had multiple statements they would be required.
   As with the first point, this difference is not significant when it comes to actually executing the code (they work the same), so they should be treated uniformly.
6. We can have recursive forms.
   While `System.err.println(...)` may look simple, this actually reads as `(System.err).println(...)`.
   That is, this uses the dot (`.`) operator in a nested way.
   Nested loops and nested if-else statements behave similarly.
7. The variables `x` and `foo` have particular values which may change as the program is executed.
   The values of these variables are independent of issues like whether or not braces were used in if-else statements.
   Additionally, the comments in the above code have no effect on the program's execution.
   As such, actually executing the code is a very different problem from reading the code.

This is but a short list of potential challenges, but the main point should be clear: this is a complex problem, with multiple different concerns in play.

The trick which is often employed to make this tractable to reason about is to separate these problems into distinct phases, where each phase addresses a unique set of concerns.  There are different ways of going about this.  However, one of the simplest and most commonly-employed methods is to take a three-phase approach, where the phases are (in order):

1. Tokenization: Turning a sequence of characters into a sequence of tokens.
2. Parsing: checking the order of the tokens, and constructing an Abstract Syntax Tree (AST) that represents the *meaning* of the input.
3. Evaluation/Translation: processing the AST to evaluate the input or translate it into another form:
    * For arithmetic expressions this might mean "computing the result"
    * For a compiler, it might mean producing Java bytecode or machine language code.
    * For an HTML parser, it might mean "rendering a web page with the correct formatting, fonts, colors, etc."

