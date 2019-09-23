---
topic: "Parsing: (03) What is parsing?"
desc: "The general and specific sense of the word, and explanation of three phases: tokenization, parsing, evaluation"
category_prefix: "Parsing: "
topic_index_top: true
indent: true
hidden: true
---

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

| Well formed | Errors |
| `2+2` | `+ 2 2` | 
| `123 + 345 * 678` | ` 3 45 + 6`  |
| `(1+2)*678`       | `(( 1+2) * 678 `  |
| `0`  | `45 67 ` |
| `-7 + -8` | `9 % 5` |
| `--3` | `3--` |
| `1 + 2 == 3` | `3 = = 6` |

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

We'll cover that in a later section of this tutorial.
