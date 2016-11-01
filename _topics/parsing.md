---
topic: Parsing
desc: "The basis of compilers, interpreters, evaluators, etc."
category_prefix: "Parsing: "
---

This series of articles is here to support programming assignments based on *parsing*.

<p style="font-size:80%;">
Acknowledgments: this series or articles is joint work, a collaboration between Kyle Dewey and Phill Conrad.
</p>

# What is parsing?

In Computer Science word *parsing* refers to any computation that:
* as input, takes *sequences of characters* in some *formally specified language*
* as output, produces an *organized data structure* that can be the basis of some computation.

As an example, suppose our language is restricted to arithmetic expressions involving:

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

Here is a bit more on each of these topics

# Checking Syntax

As an example of checking syntax, we want to be able to distinguish between well-formed expressions and those with errors.

Let's use the example of integer arithmetic expressions with five operators: `+`,`-`,`*`,`/`,`==` and parentheses `(`, `)`
* Later, we'll discuss how to formally specify the rules for such expressinos
* For, we'll assume you are already familiar with those rules, at least informally, from using them in C/C++/Java code.

Here are some examples of well-formed expressions, and expressions with errors.   

| Well-formed | Errors |
|-------------|--------|
| `2 + 2`     | `+ 2 2`  |
| `123 + 345 * 678`     | ` 3 45 + 6`  |
| `(1+2)*678`     | `(( 1+2) * 678 `  |
| `0`             | `45 67`  |
| `-7 + -8`       | ` *9 + 5` |
| `--3`           | `3--`     |

Note that we sometimes call these "legal" and "illegal" expressions, though in this case the "law" is simply the rules for the language, and nothing to do with civil or criminal laws.

Also note that from the standpoint of syntax, the following expressions are well-formed, even though they will result in an error (division by zero) when evaluated.  These are *not* syntax errors, but errors of meaning, i.e. *semantic errors* or *evalutor errors*.  

| `7/0` | `7/(3-3)` | `123/( 4*5 - 20)` |

As you can infer from the escalating complexity of the examples, expressions involving division by zero can get arbitrarily complex, which is why we don't try to detect such problems as part of the "syntax checking".   

That's true, in general, about other kinds of semantic errors&mdash;for example, in Java, there is a rule final variables cannot be changed after initial assignment.   For example:

<table>
<tr><th>Bad Code</th><th>Compile error<br>(not a syntax error though)</th></tr>
<tr>
<td markdown=1>
```java
public class Bad {
    private final int foo=3;
    public void makeFooFive() {
	foo=5;
    }
}
```
</td>
<td>
```
$ javac Bad.java
Bad.java:4: error: cannot assign a value to final variable foo
	foo=5;
	^
1 error
$ 
```
</td>
</tr>
</table>

Even though this error is reported by the compiler, strictly speaking, it isn't a *syntax error*.    Leaving off the return type of a method, leaving out a semicolon, or parentheses/braces that aren't properly balanced are all syntax errors&mdash;but things that require subtle analysis of the relationships between remote parts of the code generally are *not*, stricty speaking, syntax errors.  

This distinction between what *is* and *is not*, strictly speaking, a syntax error may be hard to *fully* understand until we explore more about *grammars*, *productions*, and *ASTs*, so if it isn't entirely clear now, don't worry too much about it.    For now, it is enough that you understand that there *is* a difference between the two.

Later, once we've formally defined the idea of a context-free grammar, we'll be able to formally specify the difference.  (See [this article](/topics/parsing_syntax_vs_semantic_errors/) if you just can't wait.)




# Producing an Abstract Syntax Tree (AST)

# Evaluating an AST

